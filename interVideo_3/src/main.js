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
	var dragFrameNums = [7];
	var dragFrameInteractiveMarks = [true, true, true, true];
	var dragFrameRightWrongObj = {
		0: [5],
		1: [6, 3],
		2: [6, 3],
		3: [1],
		4: [2, 4],
		5: [2, 4],
		6: [0],
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
		createjs.Ticker.framerate = 10;
		createjs.Ticker.addEventListener("tick", stage);
	}
	//16.236956 420
	function playBgMusic() {
		createjs.Sound.alternateExtensions = ["mp3"];
		createjs.Sound.on("fileload", loadHandler, this);
		createjs.Sound.registerSound("./assets/sounds/bg.ogg", "bg");

		function loadHandler(event) {}
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
		var dragFrame;
		var btnDrag;
		for(var i = 0, len = caption.labels.length; i < len; i++) {
			frame_ = caption.labels[i].position;
			pauseAudioFrames.push(frame_);
		}
		caption.visible = true;
		progressBar = exportRoot.progressBar;
		txtCurrent = exportRoot.txtCurrent;
		txtDuration = exportRoot.txtDuration;

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
	}

	function onClickDragFrame(e) {
		var dragFrame = e.currentTarget;

	}

	function startDrag(e) {
		e.stopPropagation();
		var btn = e.target;
		var dragBtn;
		dragBtn = btn;
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
				//				if(item.hitTest(pt.x, pt.y) && dragBtn.key == item.key) {
				if(item.hitTest(pt.x, pt.y) && item.key.indexOf(dragBtn.key) != -1) {
					if(item.isDrew) {
						createjs.Tween.get(dragBtn).to({
							x: dragBtn.homeX,
							y: dragBtn.homeY
						}, 200, createjs.Ease.quadOut).call(function() {
							loadSound("wrong");
						});
						return;
					}
					item.isDrew = true;
					isDragIn = true;
					dragBtn.removeEventListener("mousedown", startDrag);
					dragBtn.x = item.x;
					dragBtn.y = item.y;
					loadSound("right");
					countDragNum++;
					dragBtn.removeAllEventListeners();
					if(countDragNum >= 7) {
						setTimeout(function() {
							onBtnPlay();
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
				createjs.Sound.stop();
				if(pauseIndex >= 0) {
					currentIndex = pauseIndex;
					initStopFrameInteractive(pauseIndex);
				}
			}

			if(frame_ >= 30 && !isPlayBg && videoPlayer.isPlaying) {
				createjs.Sound.play("bg",{interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1}); 
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
		for(var j = 0; j < dragFrameNums[0]; j++) {
			var btnDrag = caption["btnDrag_" + j];
			initBtn(btnDrag, j);
			btnDrag.visible = true;
		}
		var dragFrame;
		var frameLen = dragFrameNums[index_] ? dragFrameNums[index_] : dragFrameNums[0];
		for(var i = 0; i < frameLen; i++) {
			dragFrame = caption["circleFrame_" + i];
			dragFrame.visible = true;
			dragFrame.key = dragFrameRightWrongObj[i];
			dragFrame.removeAllEventListeners();
			utils.on(dragFrame, "click", onClickDragFrame);
			dragFrame.mouseChildren = false;
		}
	}

	function resetBtnFrames() {
		for(var j = 0; j < dragFrameNums[0]; j++) {
			var btnDrag = caption["btnDrag_" + j];
			btnDrag.visible = false;
		}
		var dragFrame;
		var frameLen = dragFrameNums[currentIndex] ? dragFrameNums[currentIndex] : dragFrameNums[0];
		for(var i = 0; i < frameLen; i++) {
			dragFrame = caption["circleFrame_" + i];
			dragFrame.visible = false;
		}
		var btn;
		while(dragBtns.length > 0) {
			btn = dragBtns.pop();
			btn.parent.removeChild(btn);
			btn.removeAllEventListeners();
		}
	}

	function handleBtnEvents() {

		utils.on(btnBack, "click", function() {
			caption.gotoAndStop(0);
			backAudio();
			resetBtnFrames();
			isPlayBg=false;
		});
	}

	function backAudio() {
		var percent = 0;

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
			createjs.Sound.stop();
			isPlayBg = false;
			pauseCaption();
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
			stopVideoPlayer();
			createjs.Sound.stop();
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
		createjs.Sound.stop();
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