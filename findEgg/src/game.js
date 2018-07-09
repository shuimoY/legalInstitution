(function(window, createjs) {

	function GameInstance() {
		var page = 1;
		var stage;
		var exportRoot;
		var lib;
		var isVideoTwoPlayEnd = false;
		var assetsPath = "./assets/audios/";
		var isFirstLoad = true;
		var differentNums = 4;
		this.init = function(exportRoot_, lib_, stage_) {
			stage = stage_;
			exportRoot = exportRoot_;
			lib = lib_;

			//加载声音
			loadSounds();

			var btnLast = exportRoot.btnLast;
			var btnNext = exportRoot.btnNext;
			var btnReturn = exportRoot.btnReturn;
			var btnDelete = exportRoot.mask.btnDelete;
			exportRoot["dialogBox_0"].visible = false;
			exportRoot["dialogBox_2"].visible = false;
			btnDelete.cursor = "pointer";
			btnDelete.mouseChildren = false;
			btnLast.cursor = "pointer";
			btnLast.mouseChildren = false;
			btnNext.cursor = "pointer";
			btnNext.mouseChildren = false;
//			exportRoot.mask.cursor = "pointer";
			exportRoot.mask.visible = false;
			exportRoot.mask.addEventListener("click", function(e){
				console.log("xx");
			})
			btnReturn.mouseChildren = false;
			btnReturn.cursor = "pointer";
			exportRoot.chapter.mouseChildren = false;
			exportRoot.chapter.cursor = "pointer";
			btnReturn.visible = false;
			exportRoot.btnJingNang.cursor = "pointer";
			exportRoot.btnJingNang.mouseChildren = false;

			btnReturn.addEventListener("click", resetEggs);

			//	dialogManager.click(btnJN, function(e) {
			//		console.log("点击到了")
			//		exportRoot.mask.visible = true;
			//		createjs.Sound.stop();
			//		exportRoot.btnPlaySound.play();
			//		var instance = createjs.Sound.play("5");
			//  	instance.on("complete", handleComplete);
			//	});
			exportRoot.btnJingNang.addEventListener("click", function() {
				exportRoot.mask.visible = true;
				exportRoot.btnLast.removeAllEventListeners();
				exportRoot.btnLast.cursor="";
				exportRoot.btnReturn.cursor="";
				createjs.Sound.stop();
				exportRoot.btnPlaySound.play();
				var instance = createjs.Sound.play("6");
				instance.on("complete", handleComplete);
			})
			btnDelete.addEventListener("click", function() {
				createjs.Sound.stop();
				exportRoot.btnPlaySound.stop(0);
				exportRoot.mask.visible = false;
				exportRoot.btnReturn.visible = true;
				exportRoot.btnNext.gotoAndStop(1);
				exportRoot.btnNext.removeAllEventListeners();
				exportRoot.btnNext.cursor = "default";
				exportRoot.btnReturn.cursor="pointer";
				exportRoot.btnLast.cursor="pointer";
				btnLast.addEventListener("click", function() {
					page--;
					if(page < 1) {
						page = 1;
					}
					clickChangePage();
				});
			});
			btnNext.gotoAndStop(1);
			exportRoot.btnNext.removeAllEventListeners();
			exportRoot.btnNext.cursor = "default";
			btnLast.addEventListener("click", function() {
				page--;
				if(page < 1) {
					page = 1;
				}
				clickChangePage();
			});
			btnReturn.cursor = "pointer";
			btnReturn.mouseChildren = false;

			var egg;
			var respondEgg;
			for(var i = 0; i < differentNums; i++) {
				egg = exportRoot["egg_" + i];
				respondEgg = exportRoot["answer_" + i];
				egg.isRight = false;
//				egg.mouseChildren = false;
//				egg.cursor = "pointer";
//				respondEgg.cursor = "pointer";
//				respondEgg.mouseChildren = false;
				initEgg(egg, respondEgg, i);
				initEgg(respondEgg, egg, i);
			}
		}

		function loadSounds() {
			var manifest = [{
					id: "1",
					src: assetsPath + "1.ogg"
				},
				{
					id: "2",
					src: assetsPath + "2.ogg"
				},
				{
					id: "3",
					src: assetsPath + "3.ogg"
				},
				{
					id: "5",
					src: assetsPath + "5.ogg"
				},
				{
					id: "6",
					src: assetsPath + "6.ogg"
				},
				{
					id: "right",
					src: assetsPath + "right.ogg"
				},
				{
					id: "bubble",
					src: assetsPath + "bubble.ogg"
				},

			]
			// Instantiate a queue.
			var queue = new createjs.LoadQueue();
			createjs.Sound.alternateExtensions = ["mp3"]; // add other extensions to try loading if the src file extension is not supported
			queue.installPlugin(createjs.Sound);
			//createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);
			queue.addEventListener("complete", loadComplete);
			//queue.addEventListener("fileload", fileComplete);
			//queue.addEventListener("error", handleFileError);
			//queue.addEventListener("fileprogress", handleFileProgress);
			//queue.addEventListener("progress", handleProgress);
			queue.loadManifest(manifest);
			//function fileComplete(e){
			//	createjs.Sound.play("qq");
			//}
		}

		function loadComplete(e) {
			clickChangePage();
		}

		function clearBtnNextEve() {
			exportRoot.btnNext.gotoAndStop(1);
			exportRoot.btnNext.removeAllEventListeners();
			exportRoot.btnNext.cursor = "default";
		}

		function checkAnswer() {
			var rightAnswerNum = 0;
			for(var i = 0; i < differentNums; i++) {
				if(exportRoot["egg_" + i].isRight) {
					rightAnswerNum++
				}
			}
			if(rightAnswerNum == differentNums && page == 2 && isVideoTwoPlayEnd) {
				exportRoot.btnNext.removeAllEventListeners();
				exportRoot.btnNext.gotoAndStop(0);
				exportRoot.btnNext.addEventListener("click", onClickBtnNextHandler);
				exportRoot.btnNext.cursor = "pointer";
			}
		}
		
		function onClickBtnNextHandler(){
			page++;
			if(page > 5) {
				page = 5;
			}
			clickChangePage();
		}

		function handleComplete() {
			exportRoot.btnPlaySound.stop(0);
			if(page == 2) {
				var rightAnswerNum = 0;
				for(var i = 0; i < differentNums; i++) {
					if(exportRoot["egg_" + i].isRight) {
						rightAnswerNum++
					}
				}
				if(rightAnswerNum == differentNums) {
					exportRoot.btnNext.removeAllEventListeners();
					exportRoot.btnNext.gotoAndStop(0);
					exportRoot.btnNext.addEventListener("click", onClickBtnNextHandler);
					exportRoot.btnNext.cursor = "pointer";
				}
				isVideoTwoPlayEnd = true;
			} else {
				exportRoot.btnNext.gotoAndStop(0);
				exportRoot.btnNext.addEventListener("click", onClickBtnNextHandler);
				exportRoot.btnNext.cursor = "pointer";
			}
			if(page == 5) {
				exportRoot.btnNext.gotoAndStop(1);
				exportRoot.btnNext.removeAllEventListeners();
				exportRoot.btnNext.cursor = "default";
			}
		}

		function resetEggs() {
			clearBtnNextEve();
			exportRoot.btnJingNang.visible = false;
			exportRoot.dialogBox_0.visible = false;
			exportRoot.chapter.visible = false;
			exportRoot.btnLast.gotoAndStop(0);
			exportRoot.btnPlaySound.play();
			var instance = createjs.Sound.play("2");
			instance.on("complete", handleComplete);
			page = 2;
			exportRoot.btnReturn.visible = false;
			exportRoot.dialogBox_2.visible = false;
			for(var i = 0; i < differentNums; i++) {
				exportRoot["egg_" + i].isRight = false;
				exportRoot["egg_" + i].gotoAndStop(0);
				exportRoot["answer_" + i].gotoAndStop(0);
			}
		}

		function clickChangePage() {
			createjs.Sound.stop();
			if(page == 1) {
				exportRoot.chapter.visible = true;
				exportRoot.chapter.gotoAndPlay(1);
				exportRoot.btnLast.gotoAndStop(1);
				createjs.Sound.play("bubble");
				var instance = createjs.Sound.play("1");
				instance.on("complete", handleComplete);
				isVideoTwoPlayEnd = false;
			} else if(page == 2) {
				resetEggs();
			} else if(page == 3) {
				isVideoTwoPlayEnd = false;
				clearBtnNextEve();
				exportRoot.btnPlaySound.play();
				var instance = createjs.Sound.play("3");
				instance.on("complete", handleComplete);
				exportRoot.dialogBox_0.visible = true;
				exportRoot.dialogBox_2.visible = false;
				exportRoot.btnNext.removeAllEventListeners();
			} else if(page == 4) {
				clearBtnNextEve();
				exportRoot.btnJingNang.visible = false;
				exportRoot.dialogBox_2.visible = true;
				exportRoot.btnReturn.visible = false;
				exportRoot.btnPlaySound.play();
				var instance = createjs.Sound.play("5");
				instance.on("complete", handleComplete);
			} else if(page == 5) {
				exportRoot.btnJingNang.visible = true;
				exportRoot.btnReturn.visible = false;
				exportRoot.btnNext.gotoAndStop(1);
				exportRoot.btnNext.removeAllEventListeners();
				exportRoot.btnNext.cursor = "default";
			}
		}

		function initEgg(obj, respondObj, key) {
			if(obj.egg){
				obj.egg.alpha = 0.02;
			}
			obj.cursor = "pointer";
			obj.addEventListener("click", function(e) {
				//		createjs.Sound.stop();
				if(!exportRoot["egg_" + key].isRight) {
					createjs.Sound.play("right");
				}
				exportRoot["egg_" + key].isRight = true;
				obj.isRight = true;
				obj.gotoAndStop(1);
				respondObj.gotoAndStop(1);
				checkAnswer();
			}, false);
		}

		function btnAddClick(btn, callback) {
			btn.mouseChildren = false;
			btn.cursor = "pointer";
			btn.addEventListener('click', function(e) {
				e.stopPropagation();
				callback(e.target);
			}, false);
		}
	}
	var gameInstance = null;
	GameInstance.getInstance = function() {
		if(!gameInstance) {
			gameInstance = new GameInstance();
		}
		return gameInstance;
	}
	window.gameInstance = GameInstance.getInstance();
})(window, createjs || {});