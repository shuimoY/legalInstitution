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
	var dragFrameNums = [2];
	var dragBtnNums = [8];
	var dragFrameInteractiveMarks = [true, true, true];
	var dragFrameRightWrongObj = {
		0: [0, 1, 0, 1, 1, 0, 1, 0],
	}
	var dragItemXs = [1044, 1055, 1126, 1132, 1046, 1036, 1150, 1140];
	var dragItemYs = [112, 361, 104, 392, 486, 216, 488, 218];
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
				kuangs.push(kuang_);
			}
			//			caption.gotoAndStop(frame_);
			//			stage.update();
			//			var frameLen = dragFrameNums[i] ? dragFrameNums[i] : dragFrameNums[0];
			//			for(var j = 0; j < frameLen; j++) {
			//				dragFrame = caption["circleFrame_" + j + "_" + i];
			//				if(dragFrame) {
			//								dragFrame.key = dragFrameRightWrongObj[i][j];
			//								utils.on(dragFrame, "click", onClickDragFrame);
			//								dragFrame.mouseChildren = false;
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
		btn_.removeAllEventListeners();
		btn_.addEventListener("mousedown", startDrag);
		btn_.mouseChildren = false;
		dragBtns.push(btn_);
	}

	function onClickDragFrame(e) {
		var dragFrame = e.currentTarget;

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
			var frameLen = dragFrameNums[currentIndex] ? dragFrameNums[currentIndex] : dragFrameNums[0];
			for(var i = 0, len = frameLen; i < len; i++) {
				item = caption["circleFrame_" + i];
				pt = item.globalToLocal(stage.mouseX, stage.mouseY);
				if(item.hitTest(pt.x, pt.y) && dragBtn.key == item.key) {
					isDragIn = true;
					dragBtn.removeEventListener("mousedown", startDrag);
					dragBtn.scaleX = dragBtn.scaleY = 0.4;
					dragBtn.x = dragBtn.dragX;
					dragBtn.y = dragBtn.dragY;
					loadSound("right");
					countDragNum++;
					if(countDragNum >= dragFrameRightWrongObj[currentIndex].length) {
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

			if(index > -1 || pauseIndex > -1) {
				pauseAudio(frame_);
				if(pauseIndex >= 0) {
					currentIndex = pauseIndex;
					initStopFrameInteractive(pauseIndex);
				}
			}

			if(frame_ == 199 || frame_ == 200) {
				var dragBtn;
				for(var i = 0; i < dragBtnNums[currentIndex]; i++) {
					dragBtn = caption["btnDrag_" + i];
					dragBtn.scaleX = dragBtn.scaleY = 1;
					if(dragBtn.homeX > 0) {
						dragBtn.x = dragBtn.homeX;
						dragBtn.y = dragBtn.homeY;
					}
					dragBtn.visible = true;
					dragBtn.gotoAndPlay(1);
				}
			}
			if(frame_ == 191 || frame_ == 192) {
				caption.circleFrame_0.visible = true;
				caption.circleFrame_1.visible = true;
				caption.circleFrame_0.gotoAndPlay(1);
				caption.circleFrame_1.gotoAndPlay(1);
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

	function initStopFrameInteractive(index_) {
		countDragNum = 0;
		if(!dragFrameInteractiveMarks[index_]) {
			return;
		}
		var btnDrag;
		if(index_ == 0) {
			for(var j = 0; j < dragBtnNums[0]; j++) {
				btnDrag = caption["btnDrag_" + j];
				btnDrag.dragX = dragItemXs[j];
				btnDrag.dragY = dragItemYs[j];
				initBtn(btnDrag, dragFrameRightWrongObj[index_][j]);
				btnDrag.visible = true;
			}
			var dragFrame;
			var frameLen = dragFrameNums[index_] ? dragFrameNums[index_] : dragFrameNums[0];
			for(var i = 0; i < frameLen; i++) {
				dragFrame = caption["circleFrame_" + i];
				dragFrame.visible = true;
				dragFrame.key = dragFrameRightWrongObj[index_][i];
				dragFrame.removeAllEventListeners();
				utils.on(dragFrame, "click", onClickDragFrame);
				dragFrame.mouseChildren = false;
			}
		} else if(index_ == 1) {
			helpCall(caption.btnPlayWrongSound_0, 0);
			helpCall(caption.btnPlayRightSound_0, 1);
		} else if(index_ == 2) {
			helpCall(caption.btnPlayWrongSound_1, 0);
			helpCall(caption.btnPlayRightSound_1, 1);
			helpCall(caption.btnPlayRightSound_2, 1);
		}
	}

	function helpCall(btn_, key_) {
		btn_.mouseChildren = false;
		btn_.cursor = "pointer";
		btn_.key = key_;
		btn_.removeAllEventListeners();
		btn_.addEventListener("click", function(e) {
			var btn = e.target;
			if(btn.key == 0) {
				loadSound("wrong");
				//				onBtnPlay();
			} else {
				loadSound("right");
				onBtnPlay();
			}
		});
	}

	function resetBtnFrames() {
		//		var btnDrag;
		//		for(var j = 0; j < dragFrameNums[0]; j++) {
		//			btnDrag = caption["btnDrag_" + j];
		//			btnDrag.visible = false;
		//		}
		//		var frameLen = dragFrameNums[currentIndex] ? dragFrameNums[currentIndex] : dragFrameNums[0];
		//		for(var i = 0; i < frameLen; i++) {
		//			dragFrame = caption["circleFrame_" + i];
		//			dragFrame.visible = false;
		//		}
		//		var btn;
		//		while(dragBtns.length > 0) {
		//			btn = dragBtns.pop();
		//			btn.parent.removeChild(btn);
		//			btn.removeAllEventListeners();
		//		}
	}

	function handleBtnEvents() {
		kuangs.forEach(function(k, i) {
			k.addEventListener("click", function(e) {
				caption.gotoAndPlay(startAudioFrames[i]);
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
		var percent = 0 / caption.totalFrames;

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
			isPlayMC(false);
		} else {
			if(videoPlayer.player.currentTime > 0) {
				resumeCation();
			}
			videoPlayer.play();
			btnPlay.gotoAndStop(0);
			isPlayMC(true);
		}
		stage.update();
	}

	function isPlayMC(isPlay_) {
		var dragBtn;
		for(var i = 0; i < dragBtnNums[currentIndex]; i++) {
			dragBtn = caption["btnDrag_" + i];
			if(isPlay_) {
				dragBtn.play();
			} else {
				dragBtn.stop();
			}
		}
		if(isPlay_) {
			caption.circleFrame_0.play();
			caption.circleFrame_1.play();
		} else {
			caption.circleFrame_0.stop();
			caption.circleFrame_1.stop();
		}
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
//		if(caption.currentFrame == 0) {
//			caption.gotoAndPlay(1);
//		} else {
			caption.play();
//		}
	}

	function resetCaption() {
		resetBtnFrames();
		caption.gotoAndStop(0);
	}

})(window);