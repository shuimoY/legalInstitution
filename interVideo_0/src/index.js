(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[0,0,216,190],[318,274,80,80],[400,192,80,80],[318,192,80,80],[218,192,98,134],[436,0,70,70],[218,0,216,190],[0,192,216,190]]}
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



(lib.circleFrame = function() {
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


(lib.CircleFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.circleFrame();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CircleFrame, new cjs.Rectangle(-40,-40,80,80), null);


(lib.BtnWrong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btnWrong();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnWrong, new cjs.Rectangle(-40,-40,80,80), null);


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


(lib.BtnRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btnRight();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnRight, new cjs.Rectangle(-40,-40,80,80), null);


(lib.BtnPlayVideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A+2R+MAAAgj7MA9tAAAMAAAAj7g");
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


(lib.BtnBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fh();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnBack, new cjs.Rectangle(0,0,47.5,65), null);


(lib.Blank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvdJYIAAyvIe7AAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Blank, new cjs.Rectangle(-99,-60,198,120), null);


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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{stop_0:430,start_0:438,pause_0:686,stop_1:939,start_1:950,pause_1:1073,stop_2:1207,start_2:1224,pause_2:1459,stop_3:1565,start_3:1573,pause_3:1680});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_430 = function() {
		this.stop();
	}
	this.frame_686 = function() {
		this.stop();
	}
	this.frame_939 = function() {
		this.stop();
	}
	this.frame_1207 = function() {
		this.stop();
	}
	this.frame_1459 = function() {
		this.stop();
	}
	this.frame_1565 = function() {
		this.stop();
	}
	this.frame_1680 = function() {
		this.stop();
	}
	this.frame_1796 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(430).call(this.frame_430).wait(256).call(this.frame_686).wait(253).call(this.frame_939).wait(268).call(this.frame_1207).wait(252).call(this.frame_1459).wait(106).call(this.frame_1565).wait(115).call(this.frame_1680).wait(116).call(this.frame_1796).wait(1));

	// click
	this.btn_3 = new lib.BtnPlayVideo();
	this.btn_3.parent = this;
	this.btn_3.setTransform(631,412,1,1,0,0,0,198,115);

	this.btn_2 = new lib.BtnPlayVideo();
	this.btn_2.parent = this;
	this.btn_2.setTransform(216,412,1,1,0,0,0,198,115);

	this.btn_1 = new lib.BtnPlayVideo();
	this.btn_1.parent = this;
	this.btn_1.setTransform(630,141,1,1,0,0,0,198,115);

	this.btn_0 = new lib.BtnPlayVideo();
	this.btn_0.parent = this;
	this.btn_0.setTransform(216,140,1,1,0,0,0,198,115);

	this.btnDragWrong = new lib.BtnWrong();
	this.btnDragWrong.parent = this;
	this.btnDragWrong.setTransform(680,55);

	this.btnDragRight = new lib.BtnRight();
	this.btnDragRight.parent = this;
	this.btnDragRight.setTransform(556,55);

	this.circleFrame_0 = new lib.CircleFrame();
	this.circleFrame_0.parent = this;
	this.circleFrame_0.setTransform(279,175);

	this.circleFrame_1 = new lib.CircleFrame();
	this.circleFrame_1.parent = this;
	this.circleFrame_1.setTransform(807,250);

	this.bb = new lib.Blank();
	this.bb.parent = this;
	this.bb.setTransform(658.5,364.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_0},{t:this.btn_1},{t:this.btn_2},{t:this.btn_3}]},420).to({state:[]},21).to({state:[{t:this.circleFrame_1,p:{x:807,y:250}},{t:this.circleFrame_0,p:{x:279,y:175}},{t:this.btnDragRight,p:{x:556,y:55}},{t:this.btnDragWrong,p:{x:680,y:55}}]},245).to({state:[]},1).to({state:[{t:this.bb}]},252).to({state:[]},11).to({state:[{t:this.btnDragRight,p:{x:300,y:184}},{t:this.btnDragWrong,p:{x:424,y:184}},{t:this.circleFrame_0,p:{x:463,y:379}}]},123).to({state:[]},1).to({state:[{t:this.bb}]},133).to({state:[]},17).to({state:[{t:this.circleFrame_1,p:{x:1142,y:268}},{t:this.circleFrame_0,p:{x:625,y:318}},{t:this.btnDragRight,p:{x:839,y:55}},{t:this.btnDragWrong,p:{x:963,y:55}}]},235).to({state:[]},1).to({state:[{t:this.bb}]},105).to({state:[]},8).to({state:[{t:this.circleFrame_1,p:{x:809,y:387}},{t:this.circleFrame_0,p:{x:444,y:246}},{t:this.btnDragRight,p:{x:600,y:55}},{t:this.btnDragWrong,p:{x:724,y:55}}]},107).to({state:[]},1).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// caption
	this.caption = new lib.Caption();
	this.caption.parent = this;
	this.caption.setTransform(9,58);
	this.caption.visible = false;

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
	fps: 25,
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