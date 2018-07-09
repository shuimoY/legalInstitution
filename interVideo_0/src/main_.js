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
	var stopAudioFrames = [
		//		153, 887, 1478, 2277, 2734, 3429, 3969
	];
	var startAudioFrames = [];
	var dragFrameNums = [2];
	var dragFrameInteractiveMarks = [false, true, true, true, true, true, true];
	var dragFrameRightWrongObj = {
		1: [0, 1],
		2: [1, 0],
		3: [0, 1],
		4: [0, 1],
		5: [0, 1],
		6: [0, 1],
	}
	var dragBtnObj = {
		1: [],
		2: [],
		3: [],
		4: [],
		5: [],
		6: [],
	};
	var dragFrameObj = {
		1: [],
		2: [],
		3: [],
		4: [],
		5: [],
		6: [],
	};
	var currentIndex = 0;
	var dragBtns = [];

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

		initVideoPlayer();
		init();

		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		createjs.Ticker.framerate = 30;
		createjs.Ticker.addEventListener("tick", stage);
	}

	function initVideoPlayer() {
		videoPlayer.init({
			url: 'assets/videos/video.mp4',
			container: document.getElementById('gameContainer'),
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			poster: 'assets/images/cover.png'
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
		caption.framerate = 24;
		caption.visible = false;

		var frame_ = 0;
		var kuang_;
		var dragFrame;
		var btnDrag;
		for(var i = 0, len = caption.labels.length; i < len; i++) {
			frame_ = caption.labels[i].position;
			stopAudioFrames.push(frame_);
			if(i != len) {
				startAudioFrames.push(frame_ + 2);
			}
			kuang_ = caption["btn_" + i];
			if(kuang_) {
				kuang_.cursor = "pointer";
				kuangs.push(kuang_);
			}
			//			caption.gotoAndStop(frame_);
			//			stage.update();
//			var frameLen = dragFrameNums[i] ? dragFrameNums[i] : dragFrameNums[0];
//			for(var j = 0; j < frameLen; j++) {
//				dragFrame = caption["circleFrame_" + j + "_" + i];
//				if(dragFrame) {
//					dragFrame.key = dragFrameRightWrongObj[i][j];
//					utils.on(dragFrame, "click", onClickDragFrame);
//					dragFrame.mouseChildren = false;
//					dragFrame.visible = false;
//					dragFrameObj[i].push(dragFrame);
//				}
//			}
//			btnDrag = caption["btnDragRight_" + i];
//			if(btnDrag) {
//				initBtn(btnDrag, 1);
//				btnDrag.visible = false;
//				dragBtnObj[i].push(btnDrag);
//				btnDrag = caption["btnDragWrong_" + i];
//				btnDrag.visible = false;
//				dragBtnObj[i].push(btnDrag);
//				initBtn(btnDrag, 0);
//			}

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
		utils.on(btn_, "mousedown", startDrag);
		btn_.mouseChildren = false;
	}

	function onClickDragFrame(e) {
		var dragFrame = e.currentTarget;

	}

	function startDrag(e) {
		e.stopPropagation();
		var btn = e.target;
		var dragBtn = btn;
//		if(btn.isCopy) {
//			dragBtn = btn;
//		} else {
//			dragBtn = cloneBtnFunc(btn);
//		}
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
			for(var i = 0, len = dragFrameObj[currentIndex].length; i < len; i++) {
				item = dragFrameObj[currentIndex][i];
				pt = item.globalToLocal(stage.mouseX, stage.mouseY);
				if(item.hitTest(pt.x, pt.y) && dragBtn.key == item.key) {
					isDragIn = true;
//					dragBtn.removeEventListener("mousedown", startDrag);
					dragBtn.x = item.x;
					dragBtn.y = item.y;
					loadSound("right");
					break;
				} else {

				}
			}

			if(isDragIn) {

			} else {
				createjs.Tween.get(dragBtn).to({
					x: dragBtn.homeX,
					y: dragBtn.homeY
				}, 200, createjs.Ease.quadOut).call(function(){
					loadSound("wrong");
				});
			}
		});
	}
	function loadSound(soundName_) {
			var soundName = soundName_;
			createjs.Sound.stop();
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

			function handleComplete(e) {
			}
		}

	function cloneBtnFunc(btn_) {
		var cloneBtn = btn_.clone(true);
		cloneBtn.addEventListener("mousedown", startDrag);
		cloneBtn.key = btn_.key;
		cloneBtn.isCopy = true;
		cloneBtn.homeX = cloneBtn.x = btn_.x;
		cloneBtn.homeY = cloneBtn.y = btn_.y;
//		dragBtns.push(cloneBtn);
		exportRoot.addChild(cloneBtn);
		return cloneBtn;
	}

	function handleFrameEvents() {
		utils.on(caption, "tick", function() {
			if(!videoPlayer.isPlaying) {
				return;
			}
			var frame_ = utils.getCurrentFrame(caption);
			var index = stopAudioFrames.indexOf(frame_);

			if(index > -1) {
				pauseAudio(frame_);
				if(index > 0){
					currentIndex = index;
					initStopFrameInteractive(index);
				}
			}

			if(frame_ != stopAudioFrames[0] && index > -1) {
				btnBack.visible = true;
			} else {
				btnBack.visible = false;
			}
		});
	}

	function initStopFrameInteractive(index_) {
		var btnDragRight = dragBtnObj[index_][0];
		var btnDragWrong = dragBtnObj[index_][1];
		var dragFrame;
		if(dragFrameInteractiveMarks[index_]) {
			btnDragRight.visible = true;
			btnDragWrong.visible = true;
			
			for(var i = 0; i < dragFrameObj[index_].length; i++){
				dragFrame = dragFrameObj[index_][i];
				dragFrame.visible = true;
			}
		}
	}
	function resetBtnFrames(){
		var arr;
		var dragKey;
		for(dragKey in dragFrameObj){
			arr = dragFrameObj[dragKey];
			for(var i = 0; i < arr.length; i++){
				arr[i].visible = false;
			}
		}
		for(dragKey in dragBtnObj){
			arr = dragBtnObj[dragKey];
			for(var i = 0; i< arr.length; i++){
				arr[i].visible = false;
			}
		}
	}

	function handleBtnEvents() {
		kuangs.forEach(function(k, i) {
			k.addEventListener("click", function(e) {
				caption.gotoAndPlay(startAudioFrames[i]);
				var percent = parseFloat(caption.currentFrame / caption.totalFrames);

				setVideoProgressPercent(percent);
				videoPlayer.seekToPercent(percent);

				videoPlayer.play();
				btnPlay.gotoAndStop(0);
			});
		});

		utils.on(btnBack, "click", function() {
			caption.gotoAndStop(stopAudioFrames[0]);
			backAudio();
		});
	}

	function backAudio() {
		var percent = parseFloat(stopAudioFrames[0] / caption.totalFrames);

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
	}

	function initControlsState() {
		btnPlay.gotoAndStop(1);

		txtCurrent.text = '--:--';
		txtDuration.text = '--:--';
		setVideoProgressPercent(0);
	}

	function handleControls() {
		utils.on(btnPlay, 'click', function() {
			
			if(videoPlayer.isPlaying) {
				videoPlayer.pause();
				btnPlay.gotoAndStop(1);
				pauseCaption();
			} else {
				if(videoPlayer.player.currentTime > 0) {
					resumeCation();
				}
				videoPlayer.play();
				btnPlay.gotoAndStop(0);
			}
		});

		utils.on(btnStop, 'click', function() {
			// onVideoEnded();
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