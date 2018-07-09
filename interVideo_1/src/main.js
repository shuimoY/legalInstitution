(function(global) {
	var cjs = createjs || {};
	var utils = cjs.utils;
	var exportRoot;
	var stage;
	var lib;
	window.soundObj = {};

	var btnPlay, btnStop, btnBack, txtCurrent, txtDuration, progressBar;
	var caption, kuangs = [];

	var vLen = 377;
	var stopAudioFrames = [];
	var startAudioFrames = [];
	var letters = [];
	var currentIndex = 0;
	var initLetterFrame;
	var isPlayBg = false;

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
		createjs.Sound.registerSound("./assets/sounds/envelope.ogg", "envelope");
		function loadHandler(event) {
//			var instance = createjs.Sound.play("sound"); 
		}
	}
	function initVideoPlayer() {
		videoPlayer.init({
			url: 'assets/videos/video_1.mp4',
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
		caption = exportRoot.caption;
		caption.framerate = 10;
//		caption.visible = false;
		caption.letterQuestion.addEventListener("click", function(e){
//			console.log("xx");
		});

		var frame_ = 0;
		var kuang_;
		for(var i = 0, len = caption.labels.length; i < len; i++) {
			frame_ = caption.labels[i].position;
			if(caption.labels[i].label == "start_3"){
				initLetterFrame = frame_;
			}
			if(caption.labels[i].label.indexOf("stop")!=-1){
				stopAudioFrames.push(frame_);
			}else{
				startAudioFrames.push(frame_);
			}
			kuang_ = caption["btn_" + i];
			if(kuang_) {
				kuang_.cursor = "pointer";
				kuangs.push(kuang_);
			}
		}
//		caption.visible = true;
		progressBar = exportRoot.progressBar;
		txtCurrent = exportRoot.txtCurrent;
		txtDuration = exportRoot.txtDuration;

		initLetter();
		initControlsState();
		handleControls();
		handleFrameEvents();
		handleBtnEvents();
	}

	function initLetter() {
		var letter;
		for(var letterIndex = 0; letterIndex < 20; letterIndex++) {
			if(caption["letter_" + letterIndex]) {
				letter = caption["letter_" + letterIndex];
				letter.gotoAndStop(letterIndex);
				letters.push(letter);
				letter.visible = false;
				letter.homeX = letter.x;
				letter.homeY = letter.y;
			}
		}
		caption.letterQuestion.visible = false;
		caption.letterQuestion.btnDelete.addEventListener("click", function() {
			caption.letterQuestion.visible = false;
			var letter_=letters[caption.letterQuestion.index];
			letter_.visible=true;
			createjs.Tween.get(letter_).to({
				x: letter_.homeX,
				y: letter_.homeY,
				scaleX: 1,
				scaleY: 1,
			}, 200).call(function() {
				letter_.gotoAndStop(8);
			});
		})
		letters.forEach(function(letter_, index_) {
			letter_.addEventListener("click", function() {
				createjs.Sound.play("envelope");
				createjs.Tween.get(letter_).to({
					x: caption.letterQuestion.x,
					y: caption.letterQuestion.y,
					scaleX: caption.letterQuestion.nominalBounds.width / letter_.nominalBounds.width,
					scaleY: caption.letterQuestion.nominalBounds.height / letter_.nominalBounds.height,
				}, 200).call(function() {
					letter_.visible=false;
					caption.letterQuestion.index=index_;
					caption.letterQuestion.gotoAndStop(index_);
					caption.letterQuestion.visible = true;
				});
			})
		})
	}
	
	function displayLetter(isVisible_){
		var letter;
		for(var i = 0; i < letters.length; i++){
			letter = letters[i];
			letter.visible = isVisible_;
			letter.scaleX = letter.scaleY = 1;
			letter.x = letter.homeX;
			letter.y = letter.homeY;
		}
		if(!isVisible_){
			caption.letterQuestion.visible = isVisible_;
		}
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
			if(frame_ >= 55 && !isPlayBg && videoPlayer.isPlaying){
				var bgMusic=createjs.Sound.play("bg",{interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1}); 
				isPlayBg = true;
				bgMusic.volume = 0.5;
			}
			if(frame_ >= initLetterFrame) {
				displayLetter(true);
			}

			if(index > -1) {
				pauseAudio(frame_);
				if(index > 0) {
					currentIndex = index;
				}
			}

			if(frame_ != stopAudioFrames[0] && index > -1) {
				btnBack.visible = true;
			} else {
				btnBack.visible = false;
			}
			if(frame_ >= caption.totalFrames - 3){
				btnBack.visible=true;
				caption.stop();
//				console.log(caption.currentFrame);
			}
		});
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
			displayLetter(false);
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

	function handleControls() {
		utils.on(btnPlay, 'click', function() {
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
		});

		utils.on(btnStop, 'click', function() {
			// onVideoEnded();
			createjs.Sound.stop();
			stopVideoPlayer();
			caption.gotoAndStop(0);
		});

		utils.on(progressBar.bg, 'click', function(e) {
			var percent = e.localX / vLen;
			setVideoProgressPercent(percent);
			videoPlayer.seekToPercent(percent);
		});

		var vDot = progressBar.dot;
		vDot.cursor = 'pointer';

		utils.on(vDot, "pressmove", function(evt) {
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
		if(frameIndex < initLetterFrame){
			displayLetter(false);
		}else{
			displayLetter(true);
		}
		stage.update();
	}

	function pauseCaption() {
		caption.stop();
	}

	function resumeCation() {
		if(caption.currentFrame == 0) {
			caption.gotoAndPlay(1);
		} else {
			caption.play();
		}
	}

	function resetCaption() {
		caption.gotoAndStop(0);
	}

})(window);