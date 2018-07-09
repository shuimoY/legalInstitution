(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[187,0,216,190],[0,0,185,226],[331,384,111,111],[218,384,111,111],[405,0,98,134],[0,420,70,70],[0,228,216,190],[218,192,216,190]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bf = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btnNextPng = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btnRight = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.btnWrong = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fh = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.tz = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.zt = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ProgressBar_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#747474").s().p("AkEAoIAAhQIIKAAIAABQg");
	this.shape.setTransform(350.9,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747474").s().p("AjtAoIAAhQIHbAAIAABQg");
	this.shape_1.setTransform(23.8,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#747474").s().p("A80AoQgQABgMgMQgMgMAAgQQAAgRAMgMQAMgMAQAAMA5oAAAQARAAAMAMQAMAMAAARQAAAQgMAMQgMAMgRgBg");
	this.shape_2.setTransform(188.5,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProgressBar_bg, new cjs.Rectangle(0,0,377,8.1), null);


(lib.Progress_current = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9cApIAAhRMA65AAAIAABRg");
	this.shape.setTransform(188.5,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Progress_current, new cjs.Rectangle(0,0,377,8.2), null);


(lib.Dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737373").s().p("AAAAvQgSAAgOgPQgOgNAAgTQAAgTAOgNQAOgOASAAIAAAAQAUABANANQAOANAAATQAAATgOANQgNAOgUABg");
	this.shape.setTransform(11.8,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAB1QgvAAgigjQgjgigBgwQABgvAjgjQAigiAvgBIABAAQAxACAgAhQAkAjgBAvQABAwgkAiQggAigxABIgBAAg");
	this.shape_1.setTransform(11.8,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Dot, new cjs.Rectangle(0,0,23.5,23.5), null);


(lib.BtnStop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(93,124,158,0.008)").s().p("AjgETIAAolIHBAAIAAIlg");
	this.shape.setTransform(28.4,30.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 1
	this.instance = new lib.tz();
	this.instance.parent = this;
	this.instance.setTransform(-4.1,2,0.329,0.329);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnStop, new cjs.Rectangle(-4.1,2,71.1,62.6), null);


(lib.BtnPlayVideo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,0,0.008)").s().p("A+2R+MAAAgj7MA9tAAAMAAAAj7g");
	this.shape.setTransform(197.5,115);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnPlayVideo, new cjs.Rectangle(0,0,395,230), null);


(lib.BtnPlay = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// hitarea
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(116,116,116,0.008)").s().p("AjBDIIAAmOIGDAAIAAGOg");
	this.shape.setTransform(28.2,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// icon
	this.instance = new lib.zt();
	this.instance.parent = this;
	this.instance.setTransform(-4.1,2,0.329,0.329);

	this.instance_1 = new lib.bf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.1,2,0.329,0.329);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape_1.setTransform(27.8,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,2,71.1,62.6);


(lib.BtnNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btnNextPng();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkDE7IAAp1IIHAAIAAJ1g");
	this.shape.setTransform(25.5,31);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnNext, new cjs.Rectangle(-0.5,-0.5,52,63), null);


(lib.BtnDragWrong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btnWrong();
	this.instance.parent = this;
	this.instance.setTransform(-27.7,-27.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnDragWrong, new cjs.Rectangle(-27.7,-27.7,55.5,55.5), null);


(lib.BtnDragRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btnRight();
	this.instance.parent = this;
	this.instance.setTransform(-27.7,-27.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnDragRight, new cjs.Rectangle(-27.7,-27.7,55.5,55.5), null);


(lib.BtnBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fh();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnBack, new cjs.Rectangle(0,0,47.5,65), null);


(lib.ProgressBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dot
	this.dot = new lib.Dot();
	this.dot.parent = this;
	this.dot.setTransform(11.8,0.1,1,1,0,0,0,11.8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A80AoQgQABgMgMQgMgMAAgQQAAgRAMgMQAMgMAQAAMA5oAAAQARAAAMAMQAMAMAAARQAAAQgMAMQgMAMgRgBg");
	mask.setTransform(188.5,0);

	// progress
	this.current = new lib.Progress_current();
	this.current.parent = this;
	this.current.setTransform(0,0,1,1,0,0,0,0,4.1);

	var maskedShapeInstanceList = [this.current];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.current).wait(1));

	// bg
	this.bg = new lib.ProgressBar_bg();
	this.bg.parent = this;
	this.bg.setTransform(188.5,0,1,1,0,0,0,188.5,4);
	this.bg.shadow = new cjs.Shadow("rgba(0,0,0,0.298)",0,0,3);

	var maskedShapeInstanceList = [this.bg];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProgressBar, new cjs.Rectangle(0,-11.7,376.9,23.5), null);


(lib.Caption = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{stop_0:54,start_0:66,stop_1:221,start_1:238,stop_2:281,start_2:290,stop_3:385,start_3:387,stop_4:524,start_4:536,stop_5:727,start_5:739,stop_6:831,start_6:843,stop_7:982,start_7:984,stop_8:1125,start_8:1137,stop_9:1278,start_9:1290,stop_10:1363,start_10:1374,stop_11:1500,start_11:1502});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		this.stop();
	}
	this.frame_221 = function() {
		this.stop();
	}
	this.frame_281 = function() {
		this.stop();
	}
	this.frame_385 = function() {
		this.stop();
	}
	this.frame_524 = function() {
		this.stop();
	}
	this.frame_727 = function() {
		this.stop();
	}
	this.frame_831 = function() {
		this.stop();
	}
	this.frame_982 = function() {
		this.stop();
	}
	this.frame_1125 = function() {
		this.stop();
	}
	this.frame_1278 = function() {
		this.stop();
	}
	this.frame_1363 = function() {
		this.stop();
	}
	this.frame_1500 = function() {
		this.stop();
	}
	this.frame_1697 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(167).call(this.frame_221).wait(60).call(this.frame_281).wait(104).call(this.frame_385).wait(139).call(this.frame_524).wait(203).call(this.frame_727).wait(104).call(this.frame_831).wait(151).call(this.frame_982).wait(143).call(this.frame_1125).wait(153).call(this.frame_1278).wait(85).call(this.frame_1363).wait(137).call(this.frame_1500).wait(197).call(this.frame_1697).wait(1));

	// 图层 5
	this.btn_10 = new lib.BtnPlayVideo();
	this.btn_10.parent = this;
	this.btn_10.setTransform(1112.2,346.3,0.506,0.304,0,0,0,198.1,115.5);

	this.btn_9 = new lib.BtnPlayVideo();
	this.btn_9.parent = this;
	this.btn_9.setTransform(1110.8,265.2,0.506,0.304,0,0,0,198.1,115.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_9},{t:this.btn_10}]},1272).to({state:[]},12).wait(414));

	// 图层 4
	this.btn_6 = new lib.BtnPlayVideo();
	this.btn_6.parent = this;
	this.btn_6.setTransform(1112.2,346.3,0.506,0.304,0,0,0,198.1,115.5);

	this.btn_5 = new lib.BtnPlayVideo();
	this.btn_5.parent = this;
	this.btn_5.setTransform(1110.8,265.2,0.506,0.304,0,0,0,198.1,115.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_5},{t:this.btn_6}]},720).to({state:[]},13).wait(965));

	// 图层 3
	this.btn_2 = new lib.BtnPlayVideo();
	this.btn_2.parent = this;
	this.btn_2.setTransform(1112.2,346.3,0.506,0.304,0,0,0,198.1,115.5);

	this.btn_1 = new lib.BtnPlayVideo();
	this.btn_1.parent = this;
	this.btn_1.setTransform(1110.8,265.2,0.506,0.304,0,0,0,198.1,115.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_1},{t:this.btn_2}]},214).to({state:[]},14).wait(1470));

	// click
	this.btn_11 = new lib.BtnPlayVideo();
	this.btn_11.parent = this;
	this.btn_11.setTransform(1247,18,0.025,0.043,0,0,0,199.6,116.2);

	this.btn_8 = new lib.BtnPlayVideo();
	this.btn_8.parent = this;
	this.btn_8.setTransform(1042.5,199.7,0.886,1.522,0,0,0,198.1,115.2);

	this.btn_4 = new lib.BtnPlayVideo();
	this.btn_4.parent = this;
	this.btn_4.setTransform(640.6,371.7,0.886,1.522,0,0,0,198.1,115.2);

	this.btn_0 = new lib.BtnPlayVideo();
	this.btn_0.parent = this;
	this.btn_0.setTransform(219.6,209.7,0.886,1.522,0,0,0,198.1,115.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_0},{t:this.btn_4},{t:this.btn_8},{t:this.btn_11}]},49).to({state:[]},10).wait(1639));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// caption
	this.caption = new lib.Caption();
	this.caption.parent = this;
	this.caption.setTransform(9,58);

	this.timeline.addTween(cjs.Tween.get(this.caption).wait(1));

	// btns
	this.btnNext = new lib.BtnNext();
	this.btnNext.parent = this;
	this.btnNext.setTransform(1152,682,1,1,0,0,0,24,30);

	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(9,9,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btnNext}]}).wait(1));

	// bar
	this.btnBack = new lib.BtnBack();
	this.btnBack.parent = this;
	this.btnBack.setTransform(1221.1,682.5,1,1,0,0,0,23.8,32.5);

	this.text = new cjs.Text("/", "bold 15px 'Times New Roman'", "#747474");
	this.text.lineHeight = 19;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(640.2,667.9);

	this.progressBar = new lib.ProgressBar();
	this.progressBar.parent = this;
	this.progressBar.setTransform(382.7,674.4,1,1,0,0,0,188.5,0);

	this.txtCurrent = new cjs.Text("00:30", "bold 15px 'Times New Roman'", "#747474");
	this.txtCurrent.name = "txtCurrent";
	this.txtCurrent.lineHeight = 19;
	this.txtCurrent.lineWidth = 36;
	this.txtCurrent.parent = this;
	this.txtCurrent.setTransform(602,667.9);

	this.txtDuration = new cjs.Text("01:30", "bold 15px 'Times New Roman'", "#747474");
	this.txtDuration.name = "txtDuration";
	this.txtDuration.lineHeight = 19;
	this.txtDuration.lineWidth = 40;
	this.txtDuration.parent = this;
	this.txtDuration.setTransform(646.6,667.9);

	this.btnStop = new lib.BtnStop();
	this.btnStop.parent = this;
	this.btnStop.setTransform(132.3,677.9,1,1,0,0,0,27.8,29.9);

	this.btnPlay = new lib.BtnPlay();
	this.btnPlay.parent = this;
	this.btnPlay.setTransform(51.9,677.6,1,1,0,0,0,27.8,29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnPlay},{t:this.btnStop},{t:this.txtDuration},{t:this.txtCurrent},{t:this.progressBar},{t:this.text},{t:this.btnBack}]}).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFCFCF").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfgEhibArwMDE3AAAMAAAhanMjE3AAAg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_P_.png", id:"index_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;