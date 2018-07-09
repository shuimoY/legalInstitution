(function(global) {
	var cjs = createjs || {};
	var utils = cjs.utils;
	var exportRoot;
	var stage;
	var lib;
	window.soundObj = {};

	var btnPlay, btnStop, btnBack, txtCurrent, txtDuration, progressBar, btnCaption;
	var caption, kuangs = [];

	var vLen = 377;
	var stopAudioFrames = [];
	var pauseAudioFrames = [];
	var startAudioFrames = [];
	var dragBtnNums = [0,0,11];
	var dragFrameNums = [0,0,5];
	var dragFrameInteractiveMarks = [false, false, true];
	var dragFrameRightWrongObj = {
		2: {
			0: ["book"],
			1: ["rope", "car", "football", "bear", "star", "cat","cube"],
			2: ["quilt"],
			3: ["trousers_0"],
			4: ["shoe"],
		},

	}
	var dragFrameRightWrongObj_ = {
		"book":{"frameIndex":0, "xy":[7,44]},
		
		"rope":{"frameIndex":1, "xy":[572,40]},
		"car":{"frameIndex":1, "xy":[622,60]},
		"football":{"frameIndex":1, "xy":[612,101]},
		
		"bear":{"frameIndex":1, "xy":[560,232]},
		"cat":{"frameIndex":1, "xy":[617,210]},
		"cube":{"frameIndex":1, "xy":[582,310]},
		"star":{"frameIndex":1, "xy":[612,310]},
		
		"quilt":{"frameIndex":2, "xy":[240,22]},
		"trousers_0":{"frameIndex":3, "xy":[1024,180]},
		"shoe":{"frameIndex":4, "xy":[770,92]},
	}
	var dragBtns = [];
	var isPlayBg = false;
	var currentIndex = 0;
	var countDragNum = 0;

	global.onload = function() {
		utils.onStart = onGameStart;
		utils.init({});
	};

	function onGameStart(res, st, lib_) {
		exportRoot = res;
		stage = st;
		lib = lib_;

		stage.enableMouseOver(10);
		stage.enableDOMEvents(true);
		stage.mouseMoveOutside = true;
		createjs.Touch.enable(stage);

		playBgMusic();
		initVideoPlayer();
		init();

		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		createjs.Ticker.framerate = 30;
		createjs.Ticker.addEventListener("tick", stage);
	}
	//16.236956 420
	function playBgMusic() {
		createjs.Sound.alternateExtensions = ["mp3"];
		createjs.Sound.on("fileload", loadHandler, this);
		createjs.Sound.registerSound("./assets/sounds/bg.ogg", "bg");

		function loadHandler(event) {
			//			var instance = createjs.Sound.play("sound"); 
		}
	}

	function initVideoPlayer() {
		videoPlayer.init({
			url: 'assets/videos/video.mp4',
			container: document.getElementById('gameContainer'),
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			poster: 'assets/images/cover.jpg'
		});

		videoPlayer.onDurationChange = onVideoDurationChange;
		videoPlayer.onUpdate = onVideoUpdate;
		videoPlayer.onEnded = onVideoEnded;
	}

	function init() {
		btnPlay = exportRoot.btnPlay;
		btnStop = exportRoot.btnStop;
		btnBack = exportRoot.btnBack;
		btnBack.visible = false;
		btnCaption = exportRoot.btnCaption;
		caption = exportRoot.caption;
		caption.framerate = 10;
		caption.visible = false;
		var frame_ = 0;
		var kuang_;
		var dragFrame;
		var btnDrag;
		for(var i = 0, len = caption.labels.length; i < len; i++) {
			frame_ = caption.labels[i].position;
			if(caption.labels[i].label.indexOf("start") >= 0) {
				startAudioFrames.push(frame_);
			} else if(caption.labels[i].label.indexOf("stop") >= 0) {
				stopAudioFrames.push(frame_);
			} else {
				pauseAudioFrames.push(frame_);
			}
			kuang_ = caption["btn_" + i];
			if(kuang_) {
				kuang_.cursor = "pointer";
				kuang_.key = i;
				kuang_.mouseChildren = false;
				kuangs.push(kuang_);
			}
		}
		caption.visible = true;
		progressBar = exportRoot.progressBar;
		txtCurrent = exportRoot.txtCurrent;
		txtDuration = exportRoot.txtDuration;

		// btnVolume.visible = false;
		// txtCurrent.visible = false;
		// txtDuration.visible = false;

		initControlsState();
		handleControls();
		handleFrameEvents();
		handleBtnEvents();
	}

	function initBtn(btn_, key) {
		btn_.key = key;
		btn_.homeX = btn_.x;
		btn_.homeY = btn_.y;
		btn_.removeAllEventListeners();
		btn_.addEventListener("mousedown", startDrag);
		btn_.mouseChildren = false;
		btn_.cursor = "pointer";
		dragBtns.push(btn_);
	}

	function cloneBtnFunc(btn_) {
		var cloneBtn = btn_.clone(true);
		cloneBtn.mouseChildren = false;
		cloneBtn.addEventListener("mousedown", startDrag);
		cloneBtn.key = btn_.key;
		cloneBtn.isCopy = true;
		cloneBtn.homeX = cloneBtn.x = btn_.x;
		cloneBtn.homeY = cloneBtn.y = btn_.y;
		dragBtns.push(cloneBtn);
		btn_.parent.addChild(cloneBtn);
		return cloneBtn;
	}

	function startDrag(e) {
		e.stopPropagation();
		var btn = e.target;
		var dragBtn;
		//		if(btn.isCopy) {/
		dragBtn = btn;
		//		} else {
		//			dragBtn = cloneBtnFunc(btn);
		//		}
		dragBtn.parent.addChild(dragBtn);
		var pp = stage.globalToLocal(e.stageX, e.stageY);
		var offetX = pp.x - dragBtn.x;
		var offetY = pp.y - dragBtn.y;
		stage.addEventListener('stagemousemove', function(e) {
			var pp = stage.globalToLocal(e.stageX, e.stageY);
			dragBtn.x = pp.x - offetX;
			dragBtn.y = pp.y - offetY;
		});
		stage.addEventListener('stagemouseup', function(e) {
			e.stopPropagation();
			stage.removeAllEventListeners();
			var pt;
			var item;
			var isDragIn = false;
			var rect_;
			var frameLen = dragFrameNums[currentIndex] ? dragFrameNums[currentIndex] : dragFrameNums[0];
			for(var i = 0, len = frameLen; i < len; i++) {
				item = caption["circleFrame_" + i];
				pt = item.globalToLocal(stage.mouseX, stage.mouseY);
				if(item.hitTest(pt.x, pt.y) && item.keys.indexOf(dragBtn.key) != -1) {
					adjustDragBtnLayers(dragBtn);
					isDragIn = true;
					dragBtn.removeEventListener("mousedown", startDrag);
					rect_ = dragBtn.nominalBounds;
					dragBtn.x = dragBtn.dragX;
					dragBtn.y = dragBtn.dragY;
					loadSound("right");
					countDragNum++;
					if(countDragNum >= dragBtnNums[currentIndex]) {
						setTimeout(function() {
							onBtnPlay();
							//							btnPlay.dispatchEvent("click");
						}, 500);
					}
					break;
				} else {

				}
			}

			if(isDragIn) {

			} else {
				createjs.Tween.get(dragBtn).to({
					x: dragBtn.homeX,
					y: dragBtn.homeY
				}, 200, createjs.Ease.quadOut).call(function() {
					loadSound("wrong");
				});
			}
		});
	}
	
	function adjustDragBtnLayers(dragBtn){
		if(dragBtn == caption.trousers_0){
			dragBtn.visible = false;
			dragBtn.x = dragBtn.homeX;
			dragBtn.x = dragBtn.homeY;
			caption.trousers_1.visible = true;
		}
		
		if(caption.cube.parent){
			caption.cube.parent.addChild(caption.cube);
			caption.star.parent.addChild(caption.star);
			caption.desk_1.parent.addChild(caption.desk_1);
			caption.windmill.parent.addChild(caption.windmill);
			caption.bear.parent.addChild(caption.bear);
			caption.cat.parent.addChild(caption.cat);
			caption.football.parent.addChild(caption.football);
			caption.desk_0.parent.addChild(caption.desk_0);
			caption.rope.parent.addChild(caption.rope);
			caption.car.parent.addChild(caption.car);
		}
		
//		caption.desk.parent.addChild(caption.desk);
	}

	function loadSound(soundName_) {
		var soundName = soundName_;
		//		createjs.Sound.stop();
		if(window.soundObj.hasOwnProperty(soundName)) {
			var instance = createjs.Sound.play(soundName);
			instance.removeAllEventListeners();
			instance.addEventListener("complete", handleComplete, false);
		} else {
			createjs.Sound.alternateExtensions = ["mp3"];
			createjs.Sound.addEventListener("fileload", loadHandler, false);
			createjs.Sound.registerSound("./assets/sounds/" + soundName + ".ogg", soundName);
		}

		function loadHandler(e) {
			window.soundObj[soundName] = true;
			var instance = createjs.Sound.play(e.src);
			instance.removeAllEventListeners();
			instance.addEventListener("complete", handleComplete, false);
		}

		function handleComplete(e) {}
	}

	function handleFrameEvents() {
		utils.on(caption, "tick", function() {
			if(!videoPlayer.isPlaying) {
				return;
			}
			var frame_ = utils.getCurrentFrame(caption);
			var index = stopAudioFrames.indexOf(frame_);
			var pauseIndex = pauseAudioFrames.indexOf(frame_);
			if(frame_ >= 970 && frame_ < 1059){
				tickResetDragBtns(frame_);
			}
			if(index != -1 || pauseIndex != -1) {
				pauseAudio(frame_);
				if(index != -1){
					currentIndex = index;
				}
				if(pauseIndex != -1) {
					initStopFrameInteractive(currentIndex);
				}
			}

			if(frame_ >= 30 && !isPlayBg && videoPlayer.isPlaying) {
				createjs.Sound.play("bg", {
					interrupt: createjs.Sound.INTERRUPT_ANY,
					loop: -1
				});
				isPlayBg = true;
			}

			if(frame_ != stopAudioFrames[0] && index > -1) {
				btnBack.visible = true;
			} else {
				btnBack.visible = false;
			}
			if(frame_ >= caption.totalFrames - 3) {
				btnBack.visible = true;
				//				createjs.Sound.stop();
			}
		});
	}
	
	function tickResetDragBtns(frame_){
		var btnDrag;
		if(frame_ == 970){
			for(var key in dragFrameRightWrongObj_){
				btnDrag = caption[key];
				if(btnDrag.homeX){
					btnDrag.x = btnDrag.homeX;
					btnDrag.y = btnDrag.homeY;
				}
				btnDrag.visible = true;
			}
			caption.trousers_1.visible = false;
			caption.windmill.visible = true;
			caption.desk_0.visible = true;
			caption.desk_1.visible = true;
		}
		if(frame_ >= 970){
			currentIndex = 2;
		}
		if(frame_ >= 1059){
			for(var key in dragFrameRightWrongObj_){
				btnDrag = caption[key];
				btnDrag.visible = false;
			}
			caption.desk_0.visible = false;
			caption.desk_1.visible = false;
//			caption.trousers_0.visible = false;
			caption.trousers_1.visible = false;
			caption.windmill.visible = false;
		}
		if(frame_ > 970 && frame_ < 1059){
			adjustDragBtnLayers();
		}
	}

	function initStopFrameInteractive(index_) {
		countDragNum = 0;
		var btnDrag;
		var rect_;
		for(var key in dragFrameRightWrongObj_){
			btnDrag = caption[key];
			rect_ = btnDrag.nominalBounds;
			btnDrag.dragX = dragFrameRightWrongObj_[key].xy[0] + rect_.width/2;
			btnDrag.dragY = dragFrameRightWrongObj_[key].xy[1] + rect_.height/2;
			initBtn(btnDrag, key);
		}
		var dragFrame;
		var frameLen = dragFrameNums[index_] ? dragFrameNums[index_] : dragFrameNums[0];
		for(var i = 0; i < frameLen; i++) {
			dragFrame = caption["circleFrame_" + i];
			dragFrame.keys = dragFrameRightWrongObj[index_][i];
			dragFrame.removeAllEventListeners();
			dragFrame.mouseChildren = false;
		}
	}

	function helpCall(btn_, key_) {
		btn_.mouseChildren = false;
		btn_.cursor = "pointer";
		btn_.key = key_;
		btn_.addEventListener("click", function(e) {
			var btn = e.target;
			if(btn.key == 0) {
				loadSound("wrong");
			} else {
				loadSound("right");
				onBtnPlay();
			}
		});
	}

	function resetBtnFrames() {
//		adjustDragBtnLayers();
	}

	function handleBtnEvents() {
		kuangs.forEach(function(k, i) {
			k.addEventListener("click", function(e) {
				var kua = e.target;
				caption.gotoAndPlay(startAudioFrames[kua.key]);
				currentIndex = kua.key;
				var percent = caption.currentFrame / caption.totalFrames;

				setVideoProgressPercent(percent);
				videoPlayer.seekToPercent(percent);

				videoPlayer.play();
				btnPlay.gotoAndStop(0);
			});
		});

		utils.on(btnBack, "click", function() {
			caption.gotoAndStop(stopAudioFrames[0]);
			backAudio();
			resetBtnFrames();
		});
	}

	function backAudio() {
		var percent = stopAudioFrames[0] / caption.totalFrames;

		videoPlayer.pause();
		btnPlay.gotoAndStop(1);

		setVideoProgressPercent(percent);
		videoPlayer.seekToPercent(percent);
	}

	function playAudio() {
		if(videoPlayer.player.currentTime > 0) {
			resumeCation();
		}
		videoPlayer.play();
		btnPlay.gotoAndStop(0);
	}

	function pauseAudio(e) {
		videoPlayer.pause();
		btnPlay.gotoAndStop(1);
		pauseCaption();
//		createjs.Sound.stop();
//		isPlayBg = false;
	}

	function initControlsState() {
		btnPlay.gotoAndStop(1);

		txtCurrent.text = '--:--';
		txtDuration.text = '--:--';
		setVideoProgressPercent(0);
	}

	function onBtnPlay() {
		if(videoPlayer.isPlaying) {
			videoPlayer.pause();
			btnPlay.gotoAndStop(1);
			pauseCaption();
			createjs.Sound.stop();
			isPlayBg = false;
		} else {
			if(videoPlayer.player.currentTime > 0) {
				resumeCation();
			}
			videoPlayer.play();
			btnPlay.gotoAndStop(0);
		}
		stage.update();
	}

	function handleControls() {
		utils.on(btnPlay, 'click', onBtnPlay);

		utils.on(btnStop, 'click', function() {
			// onVideoEnded();
			createjs.Sound.stop();
			stopVideoPlayer();
			caption.gotoAndStop(0);
		});

		utils.on(progressBar.bg, 'click', function(e) {
			var percent = e.localX / vLen;
			resetBtnFrames();
			setVideoProgressPercent(percent);
			videoPlayer.seekToPercent(percent);
		});

		var vDot = progressBar.dot;
		vDot.cursor = 'pointer';

		utils.on(vDot, "pressmove", function(evt) {
			//if(caption.currentFrame == 453 || caption.currentFrame == 1079 || caption.currentFrame == 1789){
			//    return;
			//}
			resetBtnFrames();
			var p = progressBar.globalToLocal(evt.stageX, evt.stageY);
			if(p.x < 0) {
				p.x = 0;
			} else if(p.x > vLen) {
				p.x = vLen;
			}
			var percent = p.x / vLen;
			this.x = p.x;
			setVideoProgressPercent(percent);
			videoPlayer.seekToPercent(percent);
		});
	}

	function setVideoProgressPercent(percent) {
		progressBar.current.scaleX = percent;
		progressBar.dot.x = vLen * percent;

		seekCaptionPercent(percent);
	}

	function onVideoDurationChange(current, duration) {
		setVideoProgressPercent(current / duration);

		txtCurrent.text = convertTime(current);
		txtDuration.text = convertTime(duration);
	}

	function onVideoUpdate(current, duration) {
		setVideoProgressPercent(current / duration);

		txtCurrent.text = convertTime(current);
		txtDuration.text = convertTime(duration);
	}

	function onVideoEnded() {
		btnPlay.gotoAndStop(1);
		resetCaption();
	}

	function stopVideoPlayer() {
		onVideoEnded();
		videoPlayer.stop();
		setVideoProgressPercent(0);
		txtCurrent.text = convertTime(0);
	}

	function convertTime(time) {
		var seconds = Math.floor(time);
		var m = Math.floor(seconds / 60);
		var s = seconds - m * 60;
		if(m <= 9) m = '0' + m;
		if(s <= 9) s = '0' + s;
		return m + ':' + s;
	}

	function seekCaptionPercent(percent) {
		var frameIndex = parseInt(caption.totalFrames * percent);

		if(videoPlayer.isPlaying) {
			caption.gotoAndPlay(frameIndex);
		} else {
			caption.gotoAndStop(frameIndex);
		}
	}

	function pauseCaption() {
		caption.stop();
	}

	function resumeCation() {
		resetBtnFrames();
		if(caption.currentFrame == 0) {
			caption.gotoAndPlay(1);
		} else {
			caption.play();
		}
	}

	function resetCaption() {
		resetBtnFrames();
		caption.gotoAndStop(0);
	}

})(window);