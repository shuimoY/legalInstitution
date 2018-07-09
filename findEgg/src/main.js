(function() {
	window.onload = function() {
		var utils = createjs.utils;
		utils.onStart = initAll;
		utils.init({});
	};

	function initAll(exportRoot_, lib_, stage_) {
		var stage = stage_;
		stage.enableMouseOver(10);
		stage.enableDOMEvents(true);
		stage.mouseMoveOutside = true;
		createjs.Touch.enable(stage);
		//		createjs.Ticker.setFPS(10);
		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		createjs.Ticker.framerate = 10;
		createjs.Ticker.addEventListener("tick", stage);

		window.gameInstance.init(exportRoot_, lib_, stage_);
		//	tooitip
		//	var tooltip = new ToolTip();
		//	tooltip.setText("想要不重样，想要不重样，\n想要不重样，想要不重样.");
		//	tooltip.show(stage);
	};
})()