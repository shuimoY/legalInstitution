(function(global) {
	var cjs = createjs || {};
	var utils = cjs.utils;
	var exportRoot;
	var stage;

	var btnPlay, btnStop, txtCurrent, txtDuration, progressBar, btnCaption;
	var caption;

	var vLen = 377;

	global.onload = function () {
		utils.onStart = onGameStart;
		utils.init({});
	};

	function onGameStart(exportRoot_, stage_){
		exportRoot = exportRoot_;
		stage = stage_;
		
		stage.enableMouseOver(10);
		stage.enableDOMEvents(true);
		stage.mouseMoveOutside = true;
		createjs.Touch.enable(stage);
		
		
		initVideoPlayer();
		init();
		
//		createjs.Ticker.setFPS(10);
		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		createjs.Ticker.framerate = 30;
		createjs.Ticker.addEventListener("tick", stage);
	}

	function initVideoPlayer() {
		videoPlayer.init({
			url: './assets/videos/DYF03.mp4',
			container: document.getElementById('dom_overlay_container'),
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			poster: './assets/images/cover.jpg',
		});
		
//		var videoDOM = document.getElementsByTagName("video")[0];
//		var videoCon = new createjs.DOMElement(videoDOM);
//		videoCon.scaleX = stage.scaleX;
//		videoCon.scaleY = stage.scaleY;
//		videoCon.x = 10;
//		videoCon.y = 50;
//		exportRoot.addChild(videoCon);

		videoPlayer.onDurationChange = onVideoDurationChange;
		videoPlayer.onUpdate = onVideoUpdate;
		videoPlayer.onEnded = onVideoEnded;
	}

	function init(){

		btnPlay = exportRoot.btnPlay;
		btnStop = exportRoot.btnStop;
//		btnCaption = exportRoot.btnCaption;

//		caption = exportRoot.caption;

		progressBar = exportRoot.progressBar;
		txtCurrent = exportRoot.txtCurrent;
		txtDuration = exportRoot.txtDuration;

		initControlsState();
		handleControls();
	}

	function initControlsState () {
		btnPlay.gotoAndStop(1);


		txtCurrent.text = '--:--';		
		txtDuration.text = '--:--';		
		setVideoProgressPercent(0);
	}

	function handleControls() {
		utils.on(btnPlay, 'click', function () {
			if(videoPlayer.isPlaying) {
				videoPlayer.pause();
				btnPlay.gotoAndStop(1);
//				pauseCaption();
			}else{
				videoPlayer.play();
				btnPlay.gotoAndStop(0);
//				resumeCation();
			}
		});

		utils.on(btnStop, 'click', function () {
			stopVideoPlayer();
		});

//		utils.on(btnCaption, 'click', function () {
//			if(caption.visible) {
//				hideCaption();
//			}else{
//				showCaption();
//			}
//		});
		
		utils.on(progressBar.bg, 'click', function (e) {
			var percent = e.localX / vLen;
			setVideoProgressPercent(percent);
			videoPlayer.seekToPercent(percent);
		});

		var vDot = progressBar.dot;
		vDot.cursor = 'pointer';

		utils.on(vDot, "pressmove", function(evt){
			var p = progressBar.globalToLocal(evt.stageX, evt.stageY);
			if(p.x < 0) {
				p.x = 0;
			}else if(p.x > vLen) {
				p.x = vLen;
			}
			var percent = p.x / vLen;
			this.x = p.x;
			setVideoProgressPercent(percent);
			videoPlayer.seekToPercent(percent);
		});


	}

	function setVideoProgressPercent(percent){
		progressBar.current.scaleX = percent;
		progressBar.dot.x = vLen*percent;

//		seekCaptionPercent(percent);
	}

	function onVideoDurationChange(current, duration) {
		setVideoProgressPercent(current/duration);

		txtCurrent.text = convertTime(current);
		txtDuration.text = convertTime(duration);
	}

	function onVideoUpdate(current, duration) {
		setVideoProgressPercent(current/duration);

		txtCurrent.text = convertTime(current);
		txtDuration.text = convertTime(duration);
	}

	function onVideoEnded() {
		btnPlay.gotoAndStop(1);
		videoPlayer.stop();
		setVideoProgressPercent(0);
		txtCurrent.text = convertTime(0);
//		resetCaption();
	}

	function stopVideoPlayer() {
		onVideoEnded();
		videoPlayer.stop();
		setVideoProgressPercent(0);
		txtCurrent.text = convertTime(0);
	}

	function convertTime(time){
		var seconds = Math.floor(time);
		var m = Math.floor(seconds / 60);
		var s = seconds - m * 60;
		if(m <=9) m = '0' + m;
		if(s <=9) s = '0' + s;
		return m + ':' + s;
	}


})(window);