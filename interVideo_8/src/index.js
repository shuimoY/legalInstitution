(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[218,0,216,190],[218,328,111,111],[318,192,111,111],[218,192,98,134],[331,305,70,70],[0,192,216,190],[0,0,216,190]]}
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



(lib.btnRight = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btnWrong = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fh = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.tz = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.zt = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(6);
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


(lib.Caption = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{stop_0:170,start_0:179,stop_1:227,start_1:237,stop_2:289,start_2:296,stop_3:341,start_3:349,stop_4:414,start_4:422});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_170 = function() {
		this.stop();
	}
	this.frame_227 = function() {
		this.stop();
	}
	this.frame_289 = function() {
		this.stop();
	}
	this.frame_341 = function() {
		this.stop();
	}
	this.frame_414 = function() {
		this.stop();
	}
	this.frame_467 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(170).call(this.frame_170).wait(57).call(this.frame_227).wait(62).call(this.frame_289).wait(52).call(this.frame_341).wait(73).call(this.frame_414).wait(53).call(this.frame_467).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// caption
	this.caption = new lib.Caption();
	this.caption.parent = this;
	this.caption.setTransform(9,58);

	this.timeline.addTween(cjs.Tween.get(this.caption).wait(1));

	// btns
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(9,9,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bar
	this.btnBack = new lib.BtnBack();
	this.btnBack.parent = this;
	this.btnBack.setTransform(1221.1,682,1,1,0,0,0,23.8,32.5);
	this.btnBack.visible = false;

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