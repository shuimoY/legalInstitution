(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[0,0,216,190],[218,192,98,134],[218,328,70,70],[0,192,216,190],[218,0,216,190]]}
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



(lib.fh = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.tz = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.zt = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(4);
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


(lib.xinjian01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4A73C").s().p("AibB3QhBgyAAhFQAAhFBBgxQBBgxBaAAQBbAABBAxQBBAxAABFQAABGhBAxQhBAxhbAAQhaAAhBgxg");
	this.shape.setTransform(285.5,395.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D15F49").ss(3,1,1).p("EAn3AdFQxiCkzwAPQy/AN2nh8QA1k4AVo6QAToKgKpsQgLpbgkn3QgkoNg1j1QHHAuMdATQLlARM0gLQM0gLJVgkQKBgmCxg3QgfEHghHBQgqJIgOIYQglX6DSIbg");
	this.shape_1.setTransform(279.8,224);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#927532").ss(2).p("EArzAf6QzOC11rAQQ00AP4ziJQA6lWAXpxQAVo9gLqnQgMqWgnonQgopAg6kNQHzAzNqAUQMtATOCgMQOEgMKPgnQK/gqDCg8QgjEegjHuQgvKAgOJNQgqaNDnJPg");
	this.shape_2.setTransform(279.2,223.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFAD6").s().p("EgqyAhDQA5lWAYpxQAUo9gLqnQgMqWgnonQgopAg6kNQH0AzNpAUQMtATOCgMQOEgMKPgnQK/gqDCg8QgiEegkHuQguKAgPJNQgpaNDnJPQzPC11rAQIkJABQzIAA2Vh7g");
	this.shape_3.setTransform(279.8,223.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(159,126,35,0.349)").s().p("EAWEAkYQkUggmYg/QnRhIjqgjQtRh/oQgLQregOoRCxQgIk2gJsXQgKuSgHmgQgf5uhfnFQbrC7UaBmUAhSACnAFQgBsQgCCchCJ2QhSMRggGvQiAaeDgK0QjNAXj1AAQluAAnKg0g");
	this.shape_4.setTransform(277.2,245.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.4,562.2,485);


(lib.x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#814D17").s().p("AhwBxQgIgJAAgNQAAgMAIgJIC1i1QAJgJANAAQAMAAAJAJQAJAIAAANQAAAMgJAJIi1C2QgJAIgMABQgNgBgJgIg");
	this.shape.setTransform(21.6,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#814D17").s().p("ABFBxIi1i2QgIgJAAgMQAAgNAIgIQAJgJANAAQAMAAAJAJIC1C1QAJAJAAAMQAAANgJAJQgJAIgMABQgNgBgJgIg");
	this.shape_1.setTransform(21.6,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#814D17").ss(4).p("ABnDYIjNAAQgvAAghghQghghAAgvIAAjNQAAgvAhghQAhgiAvAAIDNAAQAvAAAhAiQAhAhAAAvIAADNQAAAvghAhQghAhgvAAg");
	this.shape_2.setTransform(21.6,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FD8780").s().p("AhmDYQgvAAghghQghghAAgvIAAjNQAAgvAhghQAhghAvgBIDNAAQAvABAhAhQAhAhAAAvIAADNQAAAvghAhQghAhgvAAg");
	this.shape_3.setTransform(21.6,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,47.3,47.3);


(lib.Maileropen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E4A73C","#FEC661"],[0,1],0,35.6,0,-35.5).s().p("AhUFVQjYiyitifQjpjUg/heQgLgQAJgCQAGgBAaACQG9AIFmgFQG3gHDmgZQAQgBAWgGQALgBgNASQg+BUjpDLQknD6iWCCQgYAVggAFIgNABQgbAAgRgPg");
	this.shape.setTransform(83.7,78.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC661").s().p("ArtDaQgVgCgHgLQgIgLANgLQCEh6CdhjQD7igDfgnQA8gLA2AOQDpA/DPCOQCDBYBkBoQALAMgMAMQgNANgYACQk9AalBAKQihAFiPAAQk+AAjjgZg");
	this.shape_1.setTransform(81,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FED581").s().p("AqdHsQgTgDgNgNQgNgNgDgTQg9mBgun5QgCgZARgTQARgTAZAAIX8gfQAbgBASAUQASAUgEAbIiGOlQgDAUgPAOQgOAOgUACQj3AakPAFIh0ABQl5AAkogxg");
	this.shape_2.setTransform(82.5,95.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Maileropen, new cjs.Rectangle(0,0,164.9,149.9), null);


(lib.Mailerclose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FED581").s().p("AhMGkQjbg/jkkUQiNiqh1jVQgKgTAJgVQAKgUAVgEQFRhIILAOQE/AJFAAlQAYADAKAVQALAWgNAVQh0C6iUCiQjoEAj0B2QgjAQgiAAQgXAAgYgHg");
	this.shape.setTransform(82.5,42.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4A73C").s().p("AhSG8QjWhAjekiQiJixhwjgQgKgUAJgVQAKgVAVgGQFMhPICAJQE4AGE6AjQAYADAKAXQAKAXgNAWQh1DHiSCrQjmEQjyCAQgiASgkAAQgWAAgVgHg");
	this.shape_1.setTransform(83.6,47.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4A73C").s().p("AiICVQgFgFAEgFIDQkhIBFAsIkKD+QgDADgDAAQgCAAgCgCg");
	this.shape_2.setTransform(39.2,79.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4A73C").s().p("ACACjIkLj7IA5hMIDcE+QAEAFgFAEQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgDgCg");
	this.shape_3.setTransform(116.6,77.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FED581").s().p("AqdHsQgTgDgNgNQgNgNgDgTQg9mBgun5QgCgZARgTQARgTAZAAIX8gfQAbgBASAUQASAUgEAbIiHOlQgCAUgPAOQgOAOgUACQj3AakPAFIh0ABQl4AAkpgxg");
	this.shape_4.setTransform(82.5,64.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mailerclose, new cjs.Rectangle(0.1,0,164.9,118.6), null);


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


(lib.Mailer08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvBcQgOgPAAgSQAAgPAKgOQAJgOAYgQQgagVgHgMQgIgNAAgOQAAgVAQgPQARgPAaAAQAaAAAPAOQAQAOAAASQAAANgIAMQgJANgbARQAcAUAJANQAMAQAAASQAAAWgRARQgSAQgbAAQgeAAgRgUgAgeAeQgHANAAAPQAAAUALANQAMAMAQAAQARAAAKgKQALgJAAgOQAAgMgGgJQgMgQghgcQgNALgGAOgAgahcQgKAJAAANQAAAIAFAIQAEAIAIAIIAZAVQATgRAFgKQAFgKAAgMQAAgRgKgJQgJgKgQAAQgPAAgLAKg");
	this.shape.setTransform(81.7,49.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4A73C").s().p("AibB3QhBgxAAhGQAAhFBBgxQBBgyBaAAQBcAABBAyQBAAxABBFQgBBGhAAxQhBAyhcAAQhaAAhBgyg");
	this.shape_1.setTransform(82.1,49,0.997,0.997);

	this.instance = new lib.Mailerclose();
	this.instance.parent = this;
	this.instance.setTransform(82.2,59.2,0.997,0.997,0,0,0,82.5,59.3);
	this.instance.shadow = new cjs.Shadow("rgba(254,221,152,0.749)",0,0,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,288,242);


(lib.Mailer07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBuIA/jBIg7AAQgSAAgHAEQgNAHgIAQIgFgCIAVgzIByAAIAAAGIhGDVg");
	this.shape.setTransform(81.5,49.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4A73C").s().p("AicB3QhBgxAAhGQAAhFBBgxQBBgyBbAAQBcAABBAyQBBAxAABFQAABGhBAxQhBAyhcAAQhbAAhBgyg");
	this.shape_1.setTransform(82.2,49,0.997,0.997);

	this.instance = new lib.Mailerclose();
	this.instance.parent = this;
	this.instance.setTransform(82.2,59.2,0.997,0.997,0,0,0,82.5,59.3);
	this.instance.shadow = new cjs.Shadow("rgba(254,221,152,0.749)",0,0,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,288,242);


(lib.Mailer06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBhQgegcAAguQAAgcALgaQAMgaAWgUQAVgUATgHQATgHASAAIAJAAIAAAGQgVACgNAGQgOAHgMAMQgMANgJAQQgJAQgFAWQAXgQAWAAQAWAAAQASQAQAQAAAcQAAAbgRAXQgTAbggAAQgVAAgQgPgAgNgLQgIADgNAIQgDAVAAANQAAAPAGASQAGASALAKQAIAIAKAAQAOAAALgNQALgNAAgYQAAgcgLgTQgLgTgTAAQgGAAgGACg");
	this.shape.setTransform(80.6,49.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4A73C").s().p("AibB3QhBgxAAhGQAAhFBBgxQBAgyBbAAQBcAABBAyQBAAxABBFQgBBGhAAxQhBAyhcAAQhbAAhAgyg");
	this.shape_1.setTransform(81.5,49,0.997,0.997);

	this.instance = new lib.Mailerclose();
	this.instance.parent = this;
	this.instance.setTransform(82.3,59.2,0.997,0.997,0,0,0,82.6,59.3);
	this.instance.shadow = new cjs.Shadow("rgba(254,221,152,0.749)",0,0,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,288,242);


(lib.Mailer05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BnQgJgHAAgIQAAgEAEgEQAEgDAFAAIAHABIALAGQAMAJAMAAQASAAAOgOQAOgOAAgUQAAgUgNgRQgMgQgVgJQgSgHgegBIAqhTIBMAAIgNAbIg/AAIgOAcQApAGAYAaQAVAVAAAcQAAARgGAPQgHAOgLAKQgKALgNAFQgSAKgTgBQgTAAgJgGg");
	this.shape.setTransform(79.4,49.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4A73C").s().p("AibB3QhBgxAAhGQAAhFBBgxQBAgyBbAAQBcAABBAyQBAAxABBFQgBBGhAAxQhBAyhcAAQhbAAhAgyg");
	this.shape_1.setTransform(80.7,49,0.997,0.997);

	this.instance = new lib.Mailerclose();
	this.instance.parent = this;
	this.instance.setTransform(82.2,59.2,0.997,0.997,0,0,0,82.5,59.3);
	this.instance.shadow = new cjs.Shadow("rgba(254,221,152,0.749)",0,0,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,288,242);


(lib.Mailer04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASBuIAAg5IhaAAIAAgUIBjiOIARAAIAACLIAdAAIAAAXIgdAAIAAA5gAg4AeIBKAAIAAhpg");
	this.shape.setTransform(80.4,49.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4A73C").s().p("AibB4QhBgyAAhGQAAhEBBgzQBBgxBaAAQBcAABBAxQBAAyABBFQgBBGhAAyQhBAxhcAAQhaAAhBgxg");
	this.shape_1.setTransform(82.1,49.5,0.997,0.997);

	this.instance = new lib.Mailerclose();
	this.instance.parent = this;
	this.instance.setTransform(82.2,59.2,0.997,0.997,0,0,0,82.5,59.3);
	this.instance.shadow = new cjs.Shadow("rgba(254,221,152,0.749)",0,0,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,288,242);


(lib.Mailer03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BqQgIgFAAgGQAAgFAEgEQADgDAGAAIAIABIAMAGIANAGQAGACAHAAQAPAAAMgNQAMgMAAgRQAAgNgGgMQgEgJgFgEQgHgHgMgFQgKgFgNAAIgFAAIAAgEQANgBALgIQANgHAGgLQAFgKAAgNQAAgQgKgKQgKgKgOAAQgZAAgRAaIgFgDQAJgVAPgMQAOgMAUAAQAZAAAOARQALAMAAAPQAAAXgeAZQAUAIAKAOQAKAOAAATQAAAcgRAVQgYAbgrAAQgVAAgIgGg");
	this.shape.setTransform(80.9,49.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4A73C").s().p("AicB4QhBgyAAhGQAAhFBBgyQBBgxBbAAQBcAABBAxQBBAyAABFQAABGhBAyQhBAxhcAAQhbAAhBgxg");
	this.shape_1.setTransform(82.2,49.5,0.997,0.997);

	this.instance = new lib.Mailerclose();
	this.instance.parent = this;
	this.instance.setTransform(82.2,59.2,0.997,0.997,0,0,0,82.5,59.3);
	this.instance.shadow = new cjs.Shadow("rgba(254,221,152,0.749)",0,0,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,288,242);


(lib.Mailer02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBuIAAgGQA4gzAWghQAWgfAAgbQAAgUgMgNQgMgOgRAAQgQAAgMAKQgNAJgGASIgGAAQAEgdAQgQQARgQAZAAQAZAAASARQARARAAAXQAAAQgIAQQgMAZgaAdIgwA0IA3AAIAYgBQAHgCAFgEQAGgEAEgHIAGAAIgPAqg");
	this.shape.setTransform(80.2,49.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4A73C").s().p("AibB4QhBgyAAhGQAAhFBBgyQBAgxBbAAQBcAABBAxQBAAyABBFQgBBGhAAyQhBAxhcAAQhbAAhAgxg");
	this.shape_1.setTransform(81.5,49.5,0.997,0.997);

	this.instance = new lib.Mailerclose();
	this.instance.parent = this;
	this.instance.setTransform(82.3,59.2,0.997,0.997,0,0,0,82.6,59.3);
	this.instance.shadow = new cjs.Shadow("rgba(254,221,152,0.749)",0,0,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,288,242);


(lib.Mailer01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBuIAAgGQAPAAAEgDQAFgCABgEQACgEAAgTIAAhzQAAgYgCgHQgBgFgDgCQgCgCgFAAQgFAAgLAFIgDgFIA0gaIAFAAIAAC1QAAASACAEQABAFAFACQAEADAQAAIAAAGg");
	this.shape.setTransform(80.4,49.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4A73C").s().p("AibB4QhBgyAAhGQAAhFBBgyQBAgxBbAAQBcAABBAxQBAAyABBFQgBBGhAAyQhBAxhcAAQhbAAhAgxg");
	this.shape_1.setTransform(81.5,49.5,0.997,0.997);

	this.instance = new lib.Mailerclose();
	this.instance.parent = this;
	this.instance.setTransform(82.3,59.2,0.997,0.997,0,0,0,82.6,59.3);
	this.instance.shadow = new cjs.Shadow("rgba(254,221,152,0.749)",0,0,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,288,242);


(lib.Letter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 图层 1
	this.instance = new lib.Mailer01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(82.2,59.1,1,1,0,0,0,82.2,59.1);

	this.instance_1 = new lib.Mailer02("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.2,59.1,1,1,0,0,0,82.2,59.1);

	this.instance_2 = new lib.Mailer03("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(82.2,59.1,1,1,0,0,0,82.2,59.1);

	this.instance_3 = new lib.Mailer04("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(82.2,59.1,1,1,0,0,0,82.2,59.1);

	this.instance_4 = new lib.Mailer05("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(82.2,59.1,1,1,0,0,0,82.2,59.1);

	this.instance_5 = new lib.Mailer06("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(82.2,59.1,1,1,0,0,0,82.2,59.1);

	this.instance_6 = new lib.Mailer07("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(82.2,59.1,1,1,0,0,0,82.2,59.1);

	this.instance_7 = new lib.Mailer08("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(82.2,59.1,1,1,0,0,0,82.2,59.1);

	this.instance_8 = new lib.Maileropen();
	this.instance_8.parent = this;
	this.instance_8.setTransform(82.5,44,1,1,0,0,0,82.5,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,288,242);


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


(lib.BtnDelete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.x("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.6,21.7,1,1,0,0,0,21.6,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnDelete, new cjs.Rectangle(-2,-2,47.3,47.3), null);


(lib.LetterQuestion = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHBPQAJgxgFhlQgGAEgIAJIgIAGQgKADgKgFQgEgEAJgFQAPgKAVgLIgEgIIgDgGQgDgFACgCQASAAANAOQACAEgEAHIgBARIABBCIACBEQgCAggHADQgOgIgDgTg");
	this.shape.setTransform(283.4,394.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgtAuQgSgTAAgbQAAgaASgSQATgTAaAAQAbAAASATQATASAAAaQAAAbgTATQgSASgbAAQgaAAgTgSgAgcgcQgNANAAAPQAAAQANANQANANAPAAQAQAAANgNQANgNAAgQQAAgPgNgNQgNgNgQAAQgPAAgNANg");
	this.shape_1.setTransform(473.3,229.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABNCxQgKgUgNgHQgNgLACgEQAAgBAOADQAYAGAHgEQAWgQAJhaQAIgng3AKQh5ALgPAWQgQAGAAghQANgGAJgpQAJg4gHgYQgCgHAEgEQADgBAHABQAjALgHANQgNASgLBaIAWgBQB1gOAJgJQA1AEAAAcQgNAUgDArIgCAUQgQBSglANQgDAAgKgNgAiyBRQBSgCBhgUIAdgGQAzAGgJASQgFAEglACIhNAHQhEAJgiAJQghgLAEgQgAgOhFQAygJApgNQAogGAAAWQgdAPhOAHQgngHAPgJgAiRhNQgGgJAGgXQABgIALgQQARgZABgLQAEgNAGADQAHAEADARQBagEB8gbQA1AHAHAqQgDACgLABQgRAEgSAHQgWAJgBgBQgEgCANgSQAOgWgHgEQgGgEiLATIhJAJQgDAfgaAXQgKALgHAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBg");
	this.shape_2.setTransform(438.3,215.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABHDRQgRgdgQgQQgJgGAAgCQACgDAMADIAGACQANAEAJAAQAMgCgDhbQgGhhgMgNQgLgHgfAJQgcAHgUACIAAAwQBPgVAAARQAAAIgcAFQgfAEgUgEIgEA5QBegYgIASQgBAJgjAGQgeADgUgFQgHBUgYAOQgLgDAAgfIAAgCQAbg3gBiAQhEBehKAmQgRAJgCgCQgBgCAOgMQBzhgAvhrIhOAMQgYAGgLAAQg0gNAbgJQA+gEBTgMQAYg5gLgbQgDgHABgCQAggEAUAdIgFAJQgPAUgLAjIB1gSQAkgGAHAAQAagBAQASQAJAOgZAEIgWAAQhAgFhsAOQgQAmgWAdQAZAGBMgaIAHgBQAaABAQAUIgCAIQgJAUAEA1IAFBLQAEAkAAALQgEAogbAYQgEAAgFgNg");
	this.shape_3.setTransform(392.5,215.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABhC3QgZgNgxg0QgvAkg/ALQgWACgGgEQgDgEAQgDQBJgUAhglQgfgpgfgTQgSgHAFgHQAGgGAUAIQAJADASASIAjAjQARgmABgoQgBgCgUAHQgbALgJgCQgQAAgHgFQgEgGAOgBQAmgHAggUIAEgCQAuAKABAPQAAACgDACQgNAKgFARIgIASQgMAjgKAMQA7AsBQAUQALACAFACQAUACAAABQAAACgQAEQgyAJgcAAQgLAAgIgCgAipCzQgYgJgJgmIAEgDQAXgNA3hkQALgSADAAQAEADgJAUQgkBSgNA+QgDAOgFAAIgBAAgAhJgQQAjgaACgzQABgogOgVQgEgGACgCQAEgDALAFQAOAGAJgCQAmgEAOgSQAGgGADAAQAoALAAANIgHAGQgPAFgHAhQgLAmANAHQALAJAtgOQAYAAAHAOQAAAJgbAGQhZANAAg5QADgkAAgWIguAHQACBvgzATQgSAJgEAAQgEgCANgLgAjRhHQAkACAUAQQARAegWAHQgngNgMgqgAimiZQALgJAsAPQAYAbgaANQgmgSgPgcg");
	this.shape_4.setTransform(346.7,214.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRDFQgNgRgLgHQgQgJgCgEQAAgEAOAEIAGAAQAWAEALgEQALgEAEgoQAEgzgIggQhYAMg8ARIgLACQgLAAgQgNQgNgJAJgCQA+gEB9gSQgFgTgOgHQgLgHAHgEQAJAAAOAHQAfgzgIgFQgHgEhPAjQgdgLAEgNQA9gEAygXQAoADAIAfQgUAIgqAoQALAKACAKQASgBAogIQA1gIAJACQA2AKgLAUQgJAHgZgDQg3gIhFAGQANAzgGA4QgHA7gbAMIgCABQgFAAgMgNgAiUgyQgGgEACgQIAFgLQAWgoAAgNQAAgOAIABQAHAEAJAUQCxgbAdgLQANgEAhAYQAYAWgLAFIgPAGQgWADgQAIQgQAHgCgCQgEgCAJgMQANgagHgFQgagEi1AjQgJApgSALQgIAFgFAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAgAAHifQg0gqATgHQAfgEATAUQAIAigRAAIgIgBg");
	this.shape_5.setTransform(299.7,215.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPCgQgHhFgFgUQhCA3hMAdQgNAFgCgDQgCgCANgIQBohBBFhFQA/hEAig5QgCgCgOAEQgoAFgNgLIgSAPQgJAJgeAWQAjAPAJAQQAIAYgRAFQgGAGghg+QgSAOgUAGQgSAFAAgCQgCAAANgLQBmhTAAgjQAAgEACgBQAWgCASAZQAAACgHAGQgPAMgMANQAxgEAWgQQAHgEAEAAQAmAPADAQQgBACgGACQgQAHgPASQg8BShIA9QA/ACBCgWIAOgDQAxAQAIASQAAAEgGAFQgUARgNAmQAPAOgEAGQgDAFgnAAQg6ACgxAEQgFAOgHAAQgHgBgEgRgAA7BBQgsAGgOAAQADAxAEAbIAfgDQBMgIAEgDQAGgHADgfQACgYgFgHQgDgEgNAAQgRAAghAFg");
	this.shape_6.setTransform(250.6,214.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAxC7QgNgXgOgKQgPgOACgEQACgDAQAHIAIAAQAVAEAEgCQANgUgGiwQgtAGgpAJIgLABQgkgJAMgJQARACBfgOIAJgCQAChbgXgWQgIgHAEgGQAEgEAJACQAtANgEAPQgHAQAABQQALgEAQgDQAYgHAEAAQAoAFAFAUQgDAEgcAAQgogCgdADIAGC/QgCAogfAZIgCABQgDAAgIgMgAhVCKQgFgCgFgWQgGgSgEgDQgFgCgNACIghADQgFAfgJACQgJAAgEgfIACgNQAHg6gCgrQAAhMgHgUIgCgEQgOgWAqAPQAVAHAqgZQAlAFAHAWQgUAJAECGIAAAdQgCBRgQAAIgBgBgAhuBKQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAQALAJABgDQAGghgChhQAAhAgHgEQgUAAgnALIAABSIAegHIAHgCQAOAAAIANQgCAJg5AFIAABVQAEAAAGgCQAWgEAJAAIAFAAgAgKArQgvg+AZAHQAdAHAOAQQAJASgJASQgEAGgFAAQgFAAgHgKg");
	this.shape_7.setTransform(207.4,215.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhNCJIACg6QAAgNgHgJQgkA3hSAfQgNAEgCgCQgCgCANgHQBqg+AXhMIghAHQgQAFgJAAQgQAAgNgJQgHgGASgCQAUgCA+gJQADgJACgLIAEgPQhEAIARgTQAZgFAfgEQAAgHAEgUIAFgqQACgdgJgYQgCgHACgCQAUgJAaAYQAAAFgEAPQgFAOgCALIgLBAIAZgHQATgIAPgBQASgCAHAHQAIAGgNAFQgvAPgkAHIgEANIgHAVQAmgHAmgLQAUgHAHAAQAWAAASAJQAJAJgWACIgFAAQghAEgqAHQBvBcBNAWQAUAFACAEQABADgOACQg8AGgNgCQgSgCgPgPQgCgDgHgGQg1g/gngnQgZAFgUACQgLAggRAZQANAEARACQAbgGAQgJQAFgEADAAQAUAEATAWQAAACgEAFQgHAHgCAGIgGASIgHAWQgJAQgKAEQgEAAgHgJQgHgNgHgHQgLgLASAEQAOADAEgCQAKgXgCgWQgFgEgnAHIgLACQgGAngDAmQgEAoBCgEQAlgDALgNQAHgJAHgWIACgGQACgJACAAQACAAABALQACARAHASQAGALgGAHQgZAWg3ACIgGAAQhOAAADhGgAhmhiIgPgRIgOgQQAAgYAsAcQAHAOgGARQgCAEgEAAQgEAAgGgGgAATh8QAhgZAFgUQACgGACgBQAqAJADAWQgCAFgQAEQgHAAgEABQg2AVgKAAQgHAAANgKg");
	this.shape_8.setTransform(160,214.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhTDHQgHgDgEgVQgGgggMgaQgEgJAEAAQAFgDALADQALAEAHAAQBPgHAYgNQAEgCADAAQAuALAJAWQAAADgGACQgQAJgLAWIAEACQAJACgCAJQAAAHgjACQgxAAgyAFQgGANgHAAIgBAAgAhMB+IAEAwQBWgIAGgDQAQgYgGgWQAEgCgJAAQgTAAhSALgAjWBuQgEgEAPgHQBQgtAxg6QAhgkADgaQAAgFAEgEQAQgCASATIgBADIgGAGQBTBUCBAYQAJACACAFQAAAEgHACQhFAMgPgDQgZgLh0huQhDBohvApQgNAFgFAAIgCAAgAhIA9QgJgHAVgEQAIgCAOgFQAdgJAMgCQAUAAAJAHQAGAJgSAEIgLADQgbAIgSABIgLABQgPAAgKgEgAiygvQgCgCANgPQBDhQgLgfQgBgDABgCQATgLAZASIgUAkQASgDAWgIIAPgDQAUgCAFAJQAAAHgUAGQgmAJgbgEQgfAqglAbQgOAKgDAAIgBAAgAhphiQAYgIASALQANAUgNAJQgUgDgWgdgAAth1QAJgDAdALQAUAWgUAMQgbgJgLghgAgOhXQgEAAAJgNQA2hAgHgbQgCgGAEgBQAbAAANAQQAAAHgTAWQARgCASgFQASgGANAAQAjAAgKANQgMALguAEQgSABgPgHIgFgCQgjAngUAMQgLAIgEAAIAAAAg");
	this.shape_9.setTransform(113.7,215.3);

	this.btnDelete = new lib.BtnDelete();
	this.btnDelete.parent = this;
	this.btnDelete.setTransform(529.5,28.2,1,1,0,0,0,21.6,21.7);

	this.instance = new lib.xinjian01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(279.8,241.1,1,1,0,0,0,279.8,241.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag+BPQBjhQABgqQgBgtgogDQgjAEgEApQgBAJgKAEQgLADAAgKQAGg+A6gCQA0ADAEA4QAEAshpBZQAjgDAvgLQAXAEAGAIQAFAIgPACQg7gEgnANQgigEAOgWg");
	this.shape_10.setTransform(285.2,394.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag+ABQAEg5A7gEQA5AEAFA5QgFA4g5AEQg7gEgEg4gAg2ABQADAxA0ACQAvgCAGgxQgGgygvgCQg0ACgDAyg");
	this.shape_11.setTransform(419.7,228);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA8CTQgLglgLgLIgwAEIhCAFQAAAqgJAEQgOgCgIgkIACgLQAJgzAAhPQAAhWgJgWQgLgOAJgCQAIgEAbALQBAgCA7gZQANgGAbAPQAZAQgFALQgSAJAJB/QACAiAAAWQADBbgdAWIgCAAQgHAAgJgZgAA1BeQAJAJACgCQAFgFAChCQAChKgEgzQAAg6ghALQgfAChNASIAABCQA4gLATgGQAjgDACAQQgNAJguAHQgmAEgPgFIAAA5QAZgCAxgHIALgCQAZgBAHAKQgqAWhNgGIAABEQAfgEAqgHIAegEQAJAAAPAPg");
	this.shape_12.setTransform(384.2,214.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABhC4QgRgChRgqIh9hBQgfAyguAeQgOAHgEgCQgDgCAKgJQBNhBgGgyQgBgFADgEQAEgBAFADQAYAPgCAHQgCACgBADIgIALQAYANANAEQAHhJgQgMQgfAFgfALQgSAHgKAAQgtgGAUgKQBDgJBYgXQAXgIAGAAQAUgBAEAFQAEAGgTAFQgNAGgkAHIgNACQANAFAAAVIAAANQAxgYAFASQAAAPg2ACIgCAtQCABFCQgFQAPAAABACQACADgNACQhCAYgqAAIgGAAgABoBQIgPgQQgSgaBHAoQAcAbgTATIgBAAQgIAAgmgsgAgKBvQgBgEANgJQAogbAUgoQANgpgJghQgCgFACgCQANgGASATQAAAJgJAnQgPBFg+AZQgOAGgFAAIgCAAgAB6AdQAEgbgCgmQgCgggDgGQADgQhUAWIAAAMQAAB0gOgJQgHgCgCgbQAJhIgLgWIgCgHQAAgEALACQAPACAHgCQASgmgCgUQhGADAmgOIA2gRQAdgJARgCQAXgBANAHQAJAHgUAGIgqAJQgXADgPAEQASALgCAHQAAACgDAEQgNALgNAXQAWgDAUgIQANgDAHAAQAhADAEAPQAAAEgCAFQgJAWACAfQABBIgOADQgSgFADgWgAhugiQgHgFgEgaQgFg+gRgeQgDgEACgCQABgCANACIARAAQAfgEAbgMIALgEQAXAEAPASIgCAEQgOAXgKA3QgJAzgMgaIgsAIQgGANgEAAIgDgBgAg5hyQgCAPgtAAIADAoIAugHQAHgTACgkQACgjgGgFQgDgCglAHIgUAEIAEAsQAfgLAMAAQAIAAgCAFg");
	this.shape_13.setTransform(338.1,214.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AB9CqIgCgDIgUgYQgJgJAhAHQAUACADhXIAAgCQAAgugSAAQgQAAg6AJIABBfQAAAqgJAFQgNgDgBgWIABgPQACgUAAgSIAAg8QgUAFg1AIIABAgIACBAQAAAhgLACQgMgGgCgQIACgQQADgWAAgPQAAgvgFgLQgGAdggA4QgPAWgSARQgjAUARgTQArgvAhhbQAYhKADhFQAAgMgFgIIgEgHQAIgHAdAJQA1gHAwgWIAMgEQAPACAUAOQANAKgIADQgQAGgSAZQALAEADADQACAEgJACQgxAJgvANQgeAHgLAAQgJA8gRApQAWACA7gLIALgCIAAgFQgEgbgFgFQgsAFAHgOQAcgGAzgOQAfgJAHAAQAQAAAGAFQAFAHgMAEQgzANgWADQAJAJACAGIgCAFQgEALAAAIQAogGAhgLQALgDAEAAQAoAMAAAQQgLAXAAAdQAAAugGAUQgRAzgOAAQgHAAgHgNgAgWhfQALAABDgQIAUgFQAQgfgEgLQgFAAgbAHQg3APgPgCgAipCEQgHgJgJgYQgEgLANgHIAOgJQALgLAzhNQAJgRAEAGQAAAFgJAUQgxBigJAdQgCALgEABIgBABQgEAAgEgGgAgUBgQgFgPAhAQQALATgMADQgMAAgPgXgABIBYQgFgOAkALQAUAOgSAJQgUgFgNgPgAgQA2QgHgNAfAJQARANgPAJQgMAAgOgSgABKAuQgNgJAfgDQAhAHgPASQgQgDgUgKgAiwhFQgEgaAvAjQAPAYgYAMQgUgKgOgjgAiTiZQAJgSAoAbQASAWgQAPQgUgCgfgsg");
	this.shape_14.setTransform(291.6,213.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABgBYQgUgvgShKQgmALgbACQgZACgNgHQgJgGAUgDQAngIAvgQQgHgmgEgjQgDgfgRgSQgFgHACgEQAbgEAdAaQAAADgCAGQgKASAKBOQAKgBAKgGQATgFADABQAYACAFAIQAEAHgUAFIgFACQgRAEgZAJQAAAEADAJQALA5ALAZQAsBNAZALQAIACAJgfIACgGQAHgUAFgFQAEgGgCARQgHAoAFAoQAEAQgEAAQg0gCg5hmgAiIClQgJgEgJgbQAAgCAFgFQATgUABgYQAIg3gEguQgxAVgEgCQgOgBgNgNQgGgLAPAAQAuAAAXgVQAHgGAGgCQAfAIACAQQAAACgEACQgLAJgFAcIgCAfIgGA8QAagUAJgGQASgMACADQACAEgRASIgmAsQgaAfgCAAIgBAAgAgmCNQgZgFgGgRQAAgCAIAAQAXgFAegJQABgmgBgWQgKACgJAAQgUAAgFgGQgGgDARgEQAmgJAegNQAHgEACAAQAWAEgGANQgDADgoANQALAHgEAUIgEAfQAIgBAJgGQASgFALgGQAWgHACAFQAAAEgWALQhbAygGAAIgBgBgAh9ibQAhgFAXASQAcAbgcANQgkgOgUgngABmiQQAdgJAWALQAZAbgQALQgngJgVgfg");
	this.shape_15.setTransform(198,213.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVDPQgPgSgKgLQgQgPAOAEIAEAAQAaAFAPAAQALgDAHghQAGgogIgLQgNgJgdAFQgTAGgXAQQgLAJgEAAQgNgDAEgaQAAgCAFgDQAcgTACgbQgCgEgNgHQg8A6hSAoQgUALgFgBQgCgEASgLQBig6BehlQg2ALg+AOQgtALgGgCQgUgBgOgLQgHgIAUAAQAigBBkgRQANgCAFgCIACgyQgOADgNACQg+gHAjgIQAQgBAmgLQAEg+gQgWQgEgEAAgCQACgHAWAGQAaAFACAHQAAAEgCAGQgHAXgDAqIAKgEQAUgHAHAAQAYAAAEAHQAAAIgWAHQgUAHgbAGIgBAxIAdgGQAKgLAQgXIAHgLQAjgzgEgYQAAgDACgCQAmACAGAXQAAACgGAEQgSASgZAhIgWAZIgLANIAWgEQBcgUACACQAoAJgFARQgCABgNAAQg4AAhdALIgEAEQgoAvgWARQAegDAxgOQAdgHAFAAQA1AEgZANQgLAEgqAHIg7AJQABAUgMAYQAjgGAYgHIAPgCQAiAJAGAPIgEAHQgHAJgCATQgHBZgyANIAAAAQgEAAgIgNg");
	this.shape_16.setTransform(151.3,213.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag3BWQgLgJABgDQACgEAMAHQATANAZAAQAuAAAIgmQAHg6hNAOQgIABgCgJQAAgJAHgBQA9gJAAgiQADgpgoADQgeABgHAgQgNAYgJgRQAHg0A2gBQA1AAAAA0QgBAhghALQAyAFgDA2QgKA2g/AAQgdgBgTgSg");
	this.shape_17.setTransform(284.6,394.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AicC7QgCgEALgHQA+gtALgcQgCgQANAEQAqAOgLALQgEACgQANQgzAkgnAQQgKAFgDAAIgBgBgABkCwIglghQhCg6AsAUQAqANASANQAWAQACAbQgBANgHAAQgGAAgLgLgAjIBIQAWAAAzgFQAfgCAQgCQAAg8ACg1QAAhYgNgOQgFgLAJgCIAEAAQAQAAAHACQA8gEAngSQALgGAcAPQAWALgEAJQgNAQgDA5QgGBFgCAuIAAARQAIgCAOgCQA8gLAJACQAxALgHAUQgCAEgXgEQhSgJhnALQhqALg6AOQgxgOASgIgAAbAAQggAOg1AAQAAAqgCAFIBrgLIAAgpQADhIgBgqQADhHgfAQIg5AGIgWADQgCAcACAQIAAAEQANgCASgGQAPgFAFAAQAegEACALQgGAGgcAFQggAGgRgCIAAAoIA6gLQAZAAgEALQgpAQgmgFIAAAuIA5gNIAGAAQAXAAgBAKg");
	this.shape_18.setTransform(407.9,214.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgjDIIgSgUQgYgQAhAFQAdAGAFgGQAQgOgGhbQgpAHgyALIgyAJQgQAAgQgLQgJgHAQgCICkgSQgIgQgMgNQgGgIAAgBQAEgIAWAJQAhghgHgNQgFgDgtAQQgfANgHAAQgqgLAUgLQBLgEAegUIAHgEQAhAPALAYQAAACgLADQgeAKgXAWQAJAHAEASQAggDAhgHQAbgIAPACQAYAAAMAPQAJAQgXgCQhHgDg3AFQAHA4gFAwQgNAqgcALQgDAAgPgTgAi2gEQgEgTANgUIADgHQAPgYACgMQABgNAIAEQAJAHACANIA0gGQBRgJAdgHQAhhFgJgoQAAgKACgBQAbgEAUAbQAAAEgHAJQgZAhgcAzQAogGAcgHQAMgEAGAAQAzAYAFAYQgCADgOACQghAGgYAOQgQAJAPgZQAOgbgEgEQgJgJiCAUQhbAOgWAAQgMAugRAQQgGAFgFAAQgGAAgEgIgAhWh3QgNgQgHgUIgGgNQgHgfAwAvQAIAkgNAAQgEAAgGgDgAgTiGQgSgkgCgPQgDgSAQAJQAWARAGASQAHASgJANQgEAEgEAAQgFAAgGgKg");
	this.shape_19.setTransform(362.3,213.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AguCeIABgNQAJg6AChwQhFBshXAnQgcAJAPgNQBihDA5hgIg3ALIgOACQgTAAgQgJQgJgGASgCIAdgFIBQgPQAAgmgCgSQgBgqgLgZQgEgIACgDQAWgEAeAaIgCAMQgMAjgCA+QApgHAdgIIAIgCQAXAAALAKQAGAJgUAHIhLALIgZADIAAALQAvAyA1AoQAfAUBKAYQASAGACAFQACAEgPABQhpANgHgdQgogqg8hIQAABDAGBKQAEA3gTAaIgDAAQgKAAgIgugABkh5QgPgJgggcQgNgLAWAAQAfACAMAJQAPANAAASQgDAJgHAAQgEAAgGgDg");
	this.shape_20.setTransform(315.7,213.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ABLDFQgYgOhWhkQgcBcheALQgaAEgCgEQAAgDAagIQBUgUAUhSIg1AKIgLABQglgJALgHQAwgCAtgJQAEgdgHgNQg5AGgiAJIgNACQgmgNASgHQAoAABegOQACgWgCgOQgZAHgJAAQghgEANgHQAhgGAVgFQAAgUgDgNQgzAJgJgBQgwgKAYgFQA8gGBTgVIAbgGQAsgDgJASQgGAFgkAGIg9ALQAPAFgEAHIgCAJQAAAGgCAEIAggKQALgDAEAAQAVACACAMQgDAEgTACQgaADgWAGIgDAmQAwgHAvgJQAYgGAHACQAmAEAAAUQgDAIglgCQhHAAhIAHQAaAPgCAFQgFALgCAJQAcgDAdgGIAYgDQAoADgGARQgDADghACQgvAAgkAEQBMBVB2AYQAYAFAAAEQAAAGgUAAQgIAAgSADQgbAEgQAAQgRAAgFgEgAgTh+QgCgDANgPQAggmgCgRQArgFACAZIgmAYIgeAUQgOAKgDAAIgBgBgAhPiHQgqgxAWAEIADAAQAYAFAJAJQAJAPgFAQQgEAGgFAAQgFAAgGgGg");
	this.shape_21.setTransform(270,213.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggCnIAChCIAChQIgxAJQAEAogEAaQgEAfgFADQgJAEgJgZQgCgGADgQQAEgNAAgJQAAgWgLgWQgDgDABgCQAAgEAGAAQALgCASAJIAPgDQAUgCAOgEIAAgDQACgZgHgFQgLgNALgCQAjACACAPQgFAQAAAMQAkgHAWgHIAFgCQAlAKADAUQgLAPgCAdQgFA6gbANQgJAEgIgNQgHgRgJgJQgHgJAAgDQABgCAIACQAXAHAGgGQAFgFACgfQACghgEgHQgCgHg7ALIgBAiQgCBYgGAdQgFAxgHAEQgKAAAAg3gAi3AiQgJgQAGgSIAJgMQAJgLACgUQACgRAFAAQAFAAALAPQDYgQA1gTIADgBQA+AXgBAWQgIAEgLABQgUACgXALQgNAGAEgLIABgCQARgWgJgJQglgCjqAaQAAAhgVAdQgHAIgFAAQgEAAgDgEgAhch2IgFACQgsAFgFAEQgfgNAOgFQARAAAqgGIALgBQgCgCgCgJQgJgfgHgGQgGgFACgGQAEgFAHACQAfAHACAOIADAlIAWgCQAQgEAIAAQACgrgKgEQgHgHACgHQACgEALACQAcAJAAAJQgFAOgBAcIANgCQAdgCANgCQAJgmgHgNQgJgLACgFQABgFANADQAsALgNAPQgEAFgFAQIgHATIAMgCQAagEAHACQAaAHgCAPQgEAEgOgCQgcgCgbAAQgSA8gWACQgEgCAGgNQALgXADgYIgzAFQgEBEgJgJQgLgCACg1QgfAEgNADIAAAEQAHAtgLAEQgLgFgJgug");
	this.shape_22.setTransform(222.1,213.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AiRB6QAWgQADg8IACgYQACgygEAEQgHABgSAJIgdALQgNADgPgIQgQgPANgBQAbAAAbgIQASgFATgWQAkAEgCASQgOAOgGAtQgFBOADgHQANgHAbgYQAUgQAGADQACACgRAUQgvA1gWAhIgFAHQgTgCgBgogAATCSQgWgRgCghIACgyQABg4gFgFQgFgLAHgIQAFgDAKAJQAUAQAogWQAIgJAHgiQAFgcgDgFQgRgCg/AWQgJAEgOgLQgQgLAKgCQBIgCAlgdQAxACAJAbQgfAUgLAvIAEAEQAMALgBAGQgCADgcAGQgkAFgfAHQgFAHAAAoIAAAOQgIA8AWAEQASAHAngCQAvgBAUgIQAUgLAJgtQAGgbABAAQAEAAAEAdQACASAJAUQAJASgPANQgNAOgtAIQghAEgaAAQgsAAgXgNgAheh3QgzgsAZAAQAjACASAQQANAYgJAPQgDACgDAAQgJAAgQgPg");
	this.shape_23.setTransform(174.5,212.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRC7QgogNgWgbQgSgagEgoQgCgJAGACQAJAEACAJQANA2A0AUQAVAIAogCQAugCALgHQAAgIgPgdQgLgUAEgCQAFgBARAQQAWAWAdAQQAWAJgLALQgRANgqAFQghAFgaAAQgjAAgXgIgAi3CnQgJgHACgWQACgJAOgUQAPgUACgLQADgaAGACQAFACAGAbQACAmgcAlQgJAKgGAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgACiBaQhgg8AqAEQApAAATANQAXASAAAYQgCAJgHAAQgIAAgMgIgAALBeQhEg1AfACQAcACAUAOQANALgEATQgDAJgHAAQgEAAgGgEgAhxAAQAOgLAAgfIAAgBQACgWgGgLQgZAFgbgHQgjgJAYgEQBOgCCEgiIAbgHQAmgGAPAaQgEAHgkAEQhQAJhYAOQAQAJgCAPIgFAiIgCARQAogHA5gRQAUgFAEAAQAtgCgBAYQgCAHgUAAQguAAguAIQgqAFghARQgOgJACgQgAgGiKQhCg3AhgBQAhADAPAPQAPAQgGASQgFAKgHAAQgGAAgGgGg");
	this.shape_24.setTransform(128.9,213);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAQBPQAEgQABgTQgUABgiAFIgNADQgNABgEgIQgDgJAKgKQAyhEAVhAQATgBAIAPQABAEgDAFQABgBAAAAQAAgBAAAAQAAABAAAAQAAABgBABIAAAEQgCAIABAGIABAuIAAAqQATAEAFAGQAEAJgOAAIgMAAIAAAaQgCAhgHADQgOgIgDgTgAgoAlQANgBAZgFQAOgEALgBQAAgjgEg5QgkBMgXAbg");
	this.shape_25.setTransform(284.9,394.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgaDOQgPgCgEgfIACgHQAEgRACgiQhSACAUgPQANgEAZgDIAZgGIACh+Qg4B1hvA8QgNAGAAgCQgCgEALgHQBohOA4h/QgSACgbAGIgWADQgYgCgJgFQgFgGASgDIBfgSQABhAgQghQgEgHACgEQAagHAbAYIgCAMQgLAdgBAuQA3gNAbgHQARgEAUANQALALgRAFQgJACgfAEQgxAHgaAGQAlBDBLA2QArAbA6AOQAPAEAEAEQACADgNACQhjARgMgcQgIgHgMgPQhFhNgXgiIAECCQAagGASAAQASACAGAJQAFAHgQAGQgWAFgjAEQAABdgKAAIgBAAg");
	this.shape_26.setTransform(431.7,213.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AjFCZQgHgHAUAAQAbACBkgNQACgkgChAQgBg7gEglQgEgfgQgVQgJgJAFgGQAagHAbAZIAAAIQgHAgADBjQACAsAAA+IAygFIAChCIAEiCQABg6gSgfQgDgIADgDQAcgJAXAdQACAEgCAHQgJAfgCA/QgCANgBAkIgCAtQALgJAZgfQAdglgBgaQAAgHADgEQAhAAALAfQAAACgEACQgWAQgiAiQgdAbgWANIgCBAQBXgRAhACQAhALAJAPQAFASgbgGQh9gVjCAkIgUAEQgSgCgRgPgAiSgRQAbAAAcAnQAMAdgVAPQgWgJgYhKg");
	this.shape_27.setTransform(384.8,212.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAxCsQAAgGACgHQAIghAAhFQABhsgJgUQgJAAgQgGQgIAPgsAuQgSATgNABQgHAAAUgUQAkglAkhFQAbg3gEgXQgCgGAEgDQAfgEANAdQAAACgGAFQgQARgQAfIgLAWIgNAVQAmgDBAgSQAigKAGAAQAUACALAJQAHAIgQADQgPAEh2ASQANAGAFAOIAAACQgEAPACAeQARgBAkgNIALgEQAkACgFAPQglALg8ACIACBAQAhgEAZgJQALgDAIAAQAfADAAAPQgLAJhhADQAEB6gSAEQgNgHgGgfgAhWCjQgQgJgCgjIACgLQAHgdACg1QAFhagJgDQgjAtgvAiQgYAQgFgCQgEgCATgQQAvguAhgzQAog+gCgjQAAgHACgCQAiAHAGAeQAAAAgBABQAAAAAAABQgBAAAAABQgBAAgBAAQgNARgQAbQgLAQgNARQAYAUgEAMQgCDRgNAAIgBAAg");
	this.shape_28.setTransform(337.5,214);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AjFCkQgPgJALgCIAygEICBgMIAAjUQAAhAgRgbQgDgGACgDQAbgGAeAdQACAEgEALQgEAUgBAYQgCAVAAATQgCAMAAAJQAhgDAfgNQASgHAJgCQAWgCAMANQAKALgUAFQhLAPgogEIAACYQAzgFA1gJQAfgGAQAAQAhACAOAWQAJASgigCQitgOiUAiIgUAEQgPgCgUgLg");
	this.shape_29.setTransform(104.9,212.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag5BVQgJgIABgDQADgDAIAFQAVANAaADQAwgFAHgqQgEhNhZAjQgPgBAFgRQAPgRgGgtIgBgHQgBgFgCgBIgCgFQgEgGABgBQAKgCAVAOQALgCASgEQAZgIANgBQAOAAAFAHQAFAHgMACQgvAJgfAAIgBAFQAAAEgCADIgBAJQgCAYACARQBegQgBBQQgJA8hAAAQgegCgUgTg");
	this.shape_30.setTransform(284.5,394.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhlCmIACgLIAHg+QgSAEgjALQgZAJgIAAQgqgJALgPQARAAA6gHIAqgGIAAgkIgkAHQABAGgFABQgEAAgDgFQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQgRgmgHgHQgNgMAcAGIAFABIAagDIAdgEQgCgZgHgNQgNAOgEgKIgFgsQgRAFgMAAQgfgHAMgHQAYgCAWgEQgFgXgRgWQAAgRAoAWQACAEgCANIgCAVIAzgKIAEgjQAAgPgCgHQAAgEgDgHQgEgLAHgCQANgBAQAOQAEAEgEANIgCAHIgDAUIgGAUIAYgEQAJgDADAAQAMADACAGQACAFgLACIgMACIggAFQgEAaAAAHQAUAJgQAEIgRACIggAFQAQAJAAAHIAAAGIgCAQIAhgMIALgEQAqAJgKANQgJADgMAQIgGAFQAJAEACAEQAAABgFACIg5AJIAAAlIAYgGIAbgHQARAAAHAHQAGAIgNADIgUACIgwAFIAAARQACAdAAAUQAAAtgOAAQgLgDgCgfgAiIAJIAGAfIAmgHIACghgAhKgBIAAAgQACgCASgDIALgEQAPgcgGAAQgNAAgbAFgAhphaIAEAhIAmgHIAHgjgAgXCOQAUgCArgHQAZgEAIAAIAAgyIgGABQgUAEgJAAQgjgFARgGQAXgFAegEIgGgdQgFgPADgDQARgEAQANIgCAHQgFAQACAJIAXgDIARgEQALAAAHAHQAFAGgJACQgXAFgfAEIAAA1IAdgGQAggHAPAAQAWACAQAOQANAPgWAAIgDAAQghgHghABQg8ACguANQgMAEgGAAQgpgIANgJgAACAIQAKgEAfgFQAagDAFgCIACg1IgNACQgSAEgJAAQgdgEAJgHIAWgGIAmgJQAAg8gFgfIgEgJQgNgYAWAEQAfALAEANIgCAHQgLAbgCA7IAPgEQASgGANAAQAXAEgJALQgZAJgjAHIgCAzIAqgJQAUgFAEAAQAxAJgSANIgbABQgwABgbAEIgfAHQgZAHgGAAQgigDAJgHg");
	this.shape_31.setTransform(361.4,213.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQDDQgOgWgWgPQgLgJACgBQgCgCAOADIANACQASAGACgEQAQgNgQhKQgDgRAAgFQgyAOgdANIgLAEQgSgJAAgaQACgCAFAAQAeAEBbhTQgjAAg3AWIgJAEQgUgNAEgSQACgCAFgCQAsgOAohNQgoAPguAFQgQAAgCgDQAAgEAPgEQCCgmASgdQACgEACAAQAOAEAUASQANANgHADQgCACgLACQgjAGguAMQAaARgDAHQgOAFgZAYQgeAdgZARIBlgLQAjgdAAgUQAAgEABgCQAdAGAIAZIgIAFQgQAIgUAQQhIA4g+AkICggbIgIgIQgbgcAHgCQAcAEAiAZQAYAfgUAKQgNAGgQgdIhVASQAVAJACAHIgCALQgEAPACAQIACAdQAEAcAAAHQgLAfgOAJQgEAAgHgJgAiMCpQgQgHAJgWQAdgWARgZQADgHACAAQALAXgPAdQgUAfgSAAIgCAAgAA6BOQAkgBAlAUQAgAggSATQgsgPgrg3g");
	this.shape_32.setTransform(315.6,212.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ABlDDQg3gNiHhgQglBDhMAYQgPADgDgFQgCgEAQgFQBPgjAZhZQAAgQANADQAbARgHAJIgLAMQgCAGgCACQAaAWAqAUIAAgcQADhZgDAAQhAAJguANQgMAEgEAAQgNABgUgJQgOgJAOgCQBSgDCaglQAdgIAEAAQAvAAgJASQgHAEgUACQgwAFg2AJQAOAKgCAJQgDAEgCAbIgCALQAHgBANgGQAdgLAIAAQAigCgHANQgWAPg+ABIgDA7QBTAoBxACQASAAACADQgCAEgQADQhIARgZAAIgFAAgAgxgrQgEgDgHgcQgQhKgLgGQgPgQANgCIAQACQASAAgBACQBRgPAQgLQAPAAAZAPQASAJgHAHQgSARgGAiQgOA5gRAHQgFAAgCgHQAAgGgCgCQgOACAFAAQgnAEgUADQgDANgDAAIgDgCgAgog/QALgBAFgCIAYgGIAcgCQAJgbAGgkQADgdgFgEQgHgFgiAJIg3ALIAIAkQAhgHAOgGQAXgFgCAQQgZARgpgEg");
	this.shape_33.setTransform(175.3,212.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgPDBQhSgYgHhkQAEAAAJAWQAfBBAkALQBEAQAugVQACgEgKgSQgHgNgDgJQgGgLACgCQACAAAJAJQAXAYAcAUQAQALgCAEQgLAQg6AJQgQACgPAAQgfAAgcgHgAi2CGQAbgmAEgYQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQARAOgHAoQgRAwgUAAQgQgNALgYgABYArQAoAAAtAYQAaAfgUASQgfgJg8hAgAglA6QAdgGAdAaQAKAdgOAJQgcgOgagsgAhQArQgIgBgDgTQgJgsgYgdQgJgLAHgGQAEgCAHACQAQAIARAAQBfgNAjgSIAFgCQAqALANAWQgCAFgJAEQgWAMgNAaQAPANgEAEQgDAEgnADIhkAPQgEARgGAAIgBgBgAgdg4Ig1ALIAJA9QBlgPAJgEQAHgQAGgcQADgUgFgCIgCAAQgMAAg/ANgAgPhaQgCgCANgLQA4g8AAgdQAAgEABgCQAGgFAWAOQAVAPgHAFQgWAPgdAYQgZAXgRAJQgNAIgDAAIgBAAgAhuinQAfACAYAQQAYAcgSAQQglgJgYg1g");
	this.shape_34.setTransform(129.1,212.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhBAUQAFhvBngNQAOAAgGALQgGANgNAAQhBgBgNBRQAUgSAigBQA1AEAFA2QgFBAg7ACQhDgBAAhUgAgsATQgGBGA0ACQArgCADgwQgDgtgogCQgaAAgXAZg");
	this.shape_35.setTransform(285.3,394.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AA5CNQgJgdgIgNQhhAGgQACQgEAfgJgCQgJgEgJghIACgOQALgqgCg/QgChUgNgXQgNgPAKAAQAJgCAfALQAtgBBNgcQAygDAQAkQgdALALDWQgGAvgXAUIgBAAQgFAAgHgWgAAaBMQAFAAAUAOIAGAEQAJgJACg8QADg9gFg8QAAgugjAJIgzAJIgyAIIAABeQAegFAZgJQAKgEAFAAQAqACgDAQQgnANhGACQACAFAAAmIgDA2QBQgPAOAAIADABg");
	this.shape_36.setTransform(361.2,214.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AiHCgQgCgLAGgQQAHgfACgqQAEhogEAAQgjAwgpAdQgRAOgEgBQgBgEAMgPQBohuAGhbQgCgJADgCQAEAAALAEQAoAWgNALQgHAFgWAlIgdAzIACABQANALgCANQgCAdgCCaQgDAogKAEQgMgCgGgjgAhdCdIBOgIIAAgLQAIiZgPgRQgOgSAoALIAWgFIAJgyQhCAKAAgRQAWgDAwgLQALg5gJgLQgHgHADgEQACgDALACQAkAJgCAOQgJALgMAqQASgCAdgJQANgFADAAQAoABgDAKQgEAMhmAPIgNAzQAsgJAHgIQAIgFAUALQAUANgCAHQgQANgCCfQAHgCANgCQAbgDANABQAoALgEARQgDADgegDQg8gGgzAEQhYAFgzANQgrgNAOgDgABRBfQgSANg5ABIAAAnQAHAABUgLIAChLQACg+gCgPQACghgRAHQgSAAg8ALIAAAkIAzgMQAWgEACAJQgLAMhAAEIAAAmIAagHQAWgIAHAAQAUgBgCAJQgSAOg3ACIAAAkQAGACAfgJQAJgCADgCIAHAAQATAAAAAIg");
	this.shape_37.setTransform(314.7,213.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AigCMQAAgIAEgHQAJgXACg3QACgdgIg/QgdAsgdATQgNAJgDgCQgEgEAJgJQBUhSAJhfQgCgNAEgCQADgDAKAHQAgAYgJAJQgDACgTAfQgXAmgPAUQAWANgCAKQgCARACBuIAAAhQgCAxgJADQgMAAgIgrgACNCgQgMADgwhMQgdAxhCAWQgWAEAAgCQAAgCAWgLQA3gdAcgxQgEgIgLgOQgSgfgGgEQgMgLABgBQgBgBAOACQAJAAAjAyQANg6gEgtQgUAFgLgHIgCAAQgCACgBAFQgNAWgNASQgNAMgDAAQgEAAAJgPQA1hugHgtQgGgLAEgEQACgDAJACQAoASgJALQgIAFgMAjQgNAggLAUQAQgFAhgNQAhgMAFAAQAqgCgFAOQgGAIg/AMIgRAEQAlAPgJAJQgEADgHAcQgJAsgKAWQA1A3BHAdQANADAAAEQAAACgLAAIgFAAQgaACgRAAQgRAAgKgCgAhTBvIgGgWQgJgxgCgEQgDgFAAgCQAAgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAQAJAAAKAFIAKgBIAPgEQAEgLADg7QgUAFgQAAQgPAAgHgFQgFgEAMgCQAWgFAdgLQAEhHgHgYQgGgLAEgFQAFgEAJAEQAfAUgFALQgHANgGA0QgCAGAAAEQAWgIAGAAQAYACgEAJQgFAJgtALIgDAjQgCAYgCAJQAHAAALgHIACgCQALgDAQAMQAOALgHAGQgRAOgIAfQAAACAGACQAGAFgCAEQgBACgQAEQgbADgYAGQAEASgGACQgHAAgHgUgAhOAtIACANIAHAoQAcgEAOgLQANgggHgTIgDAAQgRAAglANg");
	this.shape_38.setTransform(268.1,214.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgMBqQgMgLAFgSQA0h4gFgpQgFgEgbAIQgYAHgSAEQgVgCADgNQA6gEAigSQAhALAEAQQgPAPgUA+IgLAjIgOArQgJAfgHAAIgBgBg");
	this.shape_39.setTransform(285,394.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AA8DTQgKgHAEgzIAAhvQgjAHgfAEQgUADgEACQgfgLAJgHQAWgCBagMIAAgvQg2AIAFgNIAxgJQACgngLgFQhCAFAOgOQA2gJBDgUQAuACgLAOQgEAEg3ALIgUADQANAJAAAGQAAALgCAOQAIAAAMgDQATgEAFAAQASACgFAJQgCAFg3ALIAAArIAqgHQAfgHALAAQA1ADgEAYQgCADgXgBQg3gCg1AFQAABYgBAXQgEA/gPAAIgBgBgAh2CQIACgRQAJgbACgmQACgzAAgnQgqBKgsAkQgSAPgGgCQgDgEAOgOQA3g7AkhPQgOAEgaACIgMABQglgFARgJQA2gJAagHQABhhgOgJQgGgHAEgEQAEgCALACQAmALgHAQQgNAcAAA8QAOgEAPgCQAEgCADAAQAagDgEAOQgFAIgwAJIgFACIAAAmQAZgCAJAEQARAJACAOQAAAMgRgFQgZgMgLgLIAAA3QAABJgCAhQgCAfgLADQgLgBgHghgABBh1QgEgEAUgWQAcgfgEgXQgEgJAGgEQADgCANAEQAoAMgMANQgVAWgkAbQgXARgFAAIgBAAgAgBixQAYADANAPQALAfgYAAQgsgxAUAAg");
	this.shape_40.setTransform(454.5,214.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ai+AQQgPgOANAAQBvACDEgeIAhgGQAxALACAaQgIAGghgEQhFgDhFAFQhCAFhLAPIghAEQgOgCgWgPg");
	this.shape_41.setTransform(407.6,213.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgUCEIACgRQAJgigCgxIAAgIQACgcgCgXQg/BLhfA1QgNAFgCgDQgBgEAMgJQBuhJAxhIQAAgJgLgQQgJgQAMAFQANAEAKALQAbgsgDgPQgtAGgmALIgoAJQgQADgcgMQgbgNASgCQBNAECsgoIASgEQA4gCAAAdQgFAEgcAAQg0AAgxAFQAfAagLAHQgKAGgZAgQgFAKgEADQACAPAAAdQAAB3gCALQgCAxgLAEQgMAAgJgqgACWBKIgggaQh3heA7AYQBHAWAdAYQAbAcAAAfQgBAGgGAAQgJAAgTgPg");
	this.shape_42.setTransform(360.4,215.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("ABLDGQgQgWgcgOQgQgIAdADQAdABAEgEQALgMgJh2Qg3AFguAOQgPAEgFAAQgRAAgSgJQgJgGASgBQBTgLA+gLQgCgcgJgJQghAHgZgCQgegFAUgIQAwgFAvgOQAUgGAIAAQAUAAAFAJQAEAGgRAFIgQAEQgYAFgOACQAfAHgGATIAAAJIAlgFQAqgHAJAEQAUAHADALQACAIgUgBIhdAAQAAAkAIBSQgCA2gWANQgEAAgJgJgAiHCRQAAgDAEgIQAQgigFhlQgnApgrAZQgKAEgBgCQgEgBAHgGQBAg5AuhEQAKgUAAgUQAAgGACgBQASACANAXQAAAEgFAFIgNARQgFANgcAgQAJAIgBBPQgCAkAAAWQgEAtgNADQgMgGgEgagAAGBlQgEgFgEgPIgJgZQADgSAiAkQAFAPgJARQgEAEgDAAQgFAAgEgJgAAEhcQgGgdgNgjQgEgJgHgLQgFgFADgEQAEgEAYAIQBGgEArgSQAJgDAEgBQAjAJAMAYQAAADgFAGQgJAIgEAGQgJAPgUAoQgLAPgNgIIhBAJIgLACQgEAFgDAAQgHAAgIgTgAAWhVIARgFQAxgNANADQAZg5gHgaQgcgChVAOIAHAnQAUgCAdgMQAJgFAEAAQAQgBAGAHQAFAFgMAGQghALgqgCgAiohgQAbgVAjgwIAGgHQAHgLACgQQABgIACAAQAcANAFAQQAAAEgJAIQgJAGgHAIQhEA+gPAAQgFAAAAgGg");
	this.shape_43.setTransform(314,214.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgLDGQgQgSgIgGQgJgHACgCIANAAQAdAGAGgEQANALgEiOQhJBihfAaQgYADgBgBQgCgCASgHQBVgpBHhTQgUACgmAJQgWAFgSALIgJAFQgQAAgCgXQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABgBQALgHAGgQQADgLAAgMQACgJACAAQARAAAHAOQACAEgGAKIgJAUIBsgPQgCglgHgJQgIAAgUAEIgZABQgRAAgJgFQgEgHARgCQAogGAjgHQASgFALAAQAhAAgHAMQgLALgmACQAQAGAEAHIAAAJQgEANAAAKIA6gIIAPgBQAUABAJAPQAGALgWAAIgLAAQgcgCgvACIACBJQAEAzgEAWQgHAigWALIgBAAQgEAAgQgUgAhsgxQAsgpACgUIACgEQAXAEAKAKQgeAjgtAUIgLAEQgCAAAHgIgAiZhFQgPAAAIgbQASgdAJgdQACgHACAAQALgCADAXQC1gSAqgOIAGgCQA0ANANAbQAAAEgJABQgbAGgcAQIgBACQgTANALgUIAGgNQALgUgIgCQAGgJi1AWIg1AHQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABQgSA2gSAAIgCAAgAARh4QAfgBAaAQQASAQgNARQgsgUgSgcgAgfjWQAPgHAdAJQAaAUgSAUQgkgJgQghg");
	this.shape_44.setTransform(268.7,213.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUC3QgPgWgSgLQgRgHAEgCQACgDAUADIAJAAQAUAEAGgEQAJgHAEguQACgXAAghIgEg7QhfALgzATIgCAAQgSACgWgIQgWgLAPgEIB2gPQBAgJALAAQgGgXgNgNQgKgJAFgEQAJgCAPAGQAyg3AAgZQgEgGhLAaQglAMgEAAQgtgJANgOIALgCQBugJAggYQAwACAOAfQgZAJg3AxIgXAWQAJAGAHAbQAkgGAugJQAsgJAHAEQAvALgHAUQgCACgfAAQhOgEg6AHIAAAGQAJBEgCBDQgHBAgmAUIgBAAQgFAAgGgLg");
	this.shape_45.setTransform(220.8,215.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAZCkIACgJQAKgvgBhfQgnBShJAmQgNAHgFgCQgEgBALgIQBMg8AghGIgSABIgMACQgfAAALgKQANgEAagFIAYgGIAAgzQgbAKgOgCQgmAAALgLIAQgEQArgJAJgEQgChMgPgWQgDgDACgEQADgEAGACIADAAQAlALgCAJIgCANQgJAfACAoIAbgHQAhgIAHAAQAWAAAJAJQAHALgSACIgLACQgqAFgkAIIAAAxIAbgGQAcgFAHAAQAUAAAHAHQAEAJgRAEQgpAHgjAEIAAAMQBXBTBPARQAJADAAAEQAAAFgJACQhFAPgNgLQgugzgkg3QAAAcAEArIABA3QgBA4gRACQgOgFgCghgAiKCgIACgQQAJgqAChbQgqA6gsAfQgNAJgBgDQgCgEALgLQBBhAAmhPQgVAEgnASQgUAJgDAAQgNAAgNgJQgFgDACgGQAAgEAHAAQBMgFAjghQADgDACAAQAsAKgLANQgNALgmA0IAJAQIAPAIQALgRAFgWQAEgNADAAQAfAJgJANIgbAWIgNALQAUAIAIAHQAKAUgOAFQgGAAgdgfIgJgJQAEAdAABHQgCA8gPAEQgMgEgCgdgAiFiqQgBgPAxARQAbAigfAKQgSgGgagog");
	this.shape_46.setTransform(175.1,213.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AixCiQAAgEAQgJQA1ghAbgiQAUgYAAgSQAAgGACgDQAGgEAXANQAUANgFAFQgJAGgRASQg4A4g6AUQgOAEgFAAIgDAAgAAwAWQBDAUAtAvQAjAxghAPQgzgmg/hdgAguAAQgHgDgGgZQgNhCgXgdQgIgHAGgEQAFgFAUAFQARAGALAAQBJgNAogQQANgEAGAAQA2ANAGAXQgEAGgHADQgRAJgZA3QAQAJgDALQgCAEgsAFQgzAIgrAFQgGALgFAAIgDgBgAAGh7QgwAHgLAAQAJAlAJA1QBcgLAHgLQAJgWAHghQAEgYgGgDIgGgBQgQAAgyAIg");
	this.shape_47.setTransform(126.9,214.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("ABbCtQgKgQgJgIQgQgQACgCQAAgEAWAGQASAEAHgIQALgJAHgzQAJg+gDgsQAAgWgWACQghAAgdADQgFAqgIATQAEACAHACQAdANALAJQANANgCAQQgFAQgLgJQgagZgXgcQgPAogeAcQgXAUgGgCQgCgEASgXQAvg5AFhGQgpAIgfADQgFAhgHATIALAEQAVADAGAGQAFAMgDANQgEAJgLgLIgFgFQgNgPgLgHQgPAogUAQQgUATgDgCQgCgCAPgWQAZgoANhCIgmAFQgfAEABACIAAAUIAECEQgCAggLAAQgJgDgJglQgCgHAEgJQAHgWgCgmQAAg5gMgUQgNgPAJAAQAHgCAfAJQARACAzgJQADg6gLgSQgXADgagFQghgJAUgEQBYgJBjgYQAdgHANgCQArAAAEAUQgEAGhiAOQACACAFACQAYANgEAHQgHANgFAmQAxgHAWgKQALgDAfASQAZAQgJAGQgQAJgGAZQgEATAABHQACBPgzAdIgBAAQgFAAgGgLgAg9iCQAbAPgEAHQgHAJgCAtQBDgJADgCQAGg4gLgUQhKAJgFACg");
	this.shape_48.setTransform(82,214.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ag+A1QgCgmAugVQgsgSACgcQADgxA5gEQAwAEAJArQADAigmARQAoASABAjQgBA4g+AEQg6gEgEgxgAgrAwQABApAqADQAngDAFgiQAEglgwgQQgrAQAAAegAgrg6QgDAcAuAOQApgNgCgZQgDgkgngCQgkACgEAgg");
	this.shape_49.setTransform(285.2,394.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AinC4QgBgEAOgFQBtgqAlhzQhNANg4ASIgHACQgzgOAXgLQA7gEBvgQQAKggAFhAQAEg6gGgSQgDgPABgEQACgDALADQAvAYgJALQgJANgOBQIgLA5QA6gGAogLIAEAAQAUgEAZALQAWAKgJAJQgGAGgZgCQg+gGhJAJQgeCFiIAlIgJABQgGAAgCgDgABrCbIgogqQhBg8ArAQIAGACQA4ASASAYQAaAfgFAZQgDAFgFAAQgKAAgVgTgAhNgRIgGgGQg1gtAfAFQAcAGAOAJQANALgGAUQgDAGgGAAQgFAAgHgGgAg0hWQhFgzAfADQAiACARANQAOAPgDAUQgDAFgFAAQgGAAgKgHg");
	this.shape_50.setTransform(455,213.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgLB7QgeAQgVAHQgeAIAPgLQAbgPAlgbQAAgxACglQABgfgFgYQgCgHAEAAQAaABAHAWIgCALQgKAegEBHQAqgoAZgkQAIgMABgSIACgGQAdAAALAYQgCADgHAFQgLAHgFAIQgxA6gqAfQAJA6BXgCQAzgCAUgXQANgNAHgqQAEgQADgCQAEgCAAAPQAAAfAJAdQAEAQgEAHQgWAWhTAIQhtAAgKhJgAjWCxQgBgDAHgGQBrhHAjiLQglAJgdgCQgmgFAWgJQAvgHAogLQAPhLgJgjQgEgLACgDQAEgGAJAEQAoASgEARQgFAHgJAsIgKAkIAigLQAsgNASgCQAQgBALAJQAIAHgPAGQgWAJhlAUQgtCth4AyIgIACIgCgBgABoh+QghgOgUgRQgNgMAegCQAdgCAQANQAPANgEAQQgCAIgIAAQgEAAgGgDg");
	this.shape_51.setTransform(408,213.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AguCxQgSgVgTgNQgQgNAjAGQAVADAEgCQAEgDAChJQABhPgBhUQAAgsgPgdQgEgJACgFQAUgJAgAfIgDAHQgQAdAEBOIAUAWQAlgmAUgbQALgRAAgSQAAgFACgCQAgAAARAhQAAADgIAEQgOAFgNAJIgSANIg8AvQBMBTBoASQARAEABAEQACABgNAEQhDANgNgCQgSAAgNgQQgtgwg5hLIAFCNIAAAUQAEAsgaAZQgDAAgNgPgAjSCJQgCgDAJgHQBWhHAWhiQgEgCgfANQgZAJgGAAQgxgQAbgGQA8gFAegUQAFgEACAAQAZAGAIASQAAACgGAHQgLANgDALQgjBohZAuQgHAEgEAAIgCgBg");
	this.shape_52.setTransform(362.5,213.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("ABTC8QgOgGgwhDIgsg8QgYB2hzAPQgXADAAgDQgCgCAWgHQBmgjAWhoIgyAIQg6ALgHgCQgRgEgQgNQgFgHAUAEQASADB0gOQAJg5gKgGIgKAAQgZAEgYgCQgSgCgHgHQgCgGAWACQAsgDAygNQAXgdAYgxQAJgWgHgSQgCgGACgCQAkgDAQAfQAAABgJAJQgiAhgqAzQASgDAUgGQAPgEAHAAQAYAAADAKQACAHgWAHQgdALg/AEIAIAFQAHAHAAACIgCAGQgHASgCAaQAygFAxgNQAagGAHACQA3APgVAQQgHAEgUgCQg6gEhRAKQBNBwBqAYQAUAEAEADQABAGgQACIgPAAIgqABQgbAAgJgDgAhkiYQAoAKAPAbQAHAbgSAGQgdgLgPg7g");
	this.shape_53.setTransform(315.2,212.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgeDDQgSgYgSgJQgNgJAbAEQAdABAIgDQAYgYgEh8QhPAJhBAPIgaAEQgxgUAagCQBegHBigSQgEgogDgMQgtAJgfgEQghgFAdgKIBPgQQgIgkgNgNQgbAHgbAAQgfgCAWgHQA8gQAwgYQALgHAEgNQABgFAEgCQAqAHALAbQgCAEgQACIgRADQgLAEgWAGQgaAJgOADQAUAIAIAHQACAEABAJQAAALACAJQAdgIAUAAQATAAAJAJQAFAKgOADIgfAGIghAFQACANADAsQAfgEAugJQAqgHALAAQAZAAANASQALARgWAEIgbgCQg+gIhCAKQAGBDgCA3QgPBFggAMQgFAAgLgOg");
	this.shape_54.setTransform(174.3,213.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFB7QAAgQADgjQgDAYADgeQAAgdgDgHIgPAEIgkAFQAVANgBALQAAACgGAJIgQAXQgoA9hNAMQgbAEAUgHQBdgoAZhWQgfAFgVgDQgYgHAYgGQA0gJBAgPQApgJASgCQASAAAIAGQADAHgOAGQgaAHgwAHQAXARgCAHIgCALQgEANgBALQgCASAAAUQgCAtBFgDQAvgCARgPQASgLAGgvQABgPAEACQAEACABAQQACAYAJAYQAIASgJAFQgfAahEACIgFAAQhgAAAIhJgAg3gYQgrgDAbgLQAbgGAngMQAPgGAEAAQAVAAAEAJQACALgWAGQgkAMgeAAIgIAAgAidgmQgHgQALgLQANgRAFgXQAEgTAFAAQAIACAHASQB1gUBLgQIASgEQAsANAOAjQAAABgLACQgeACgaARQgSAMAQgdQARgZgGgCQgdgGi1AlQgHAZgSAaQgFAGgFAAQgGAAgFgIgAADiQQgFgBgSgTIgWgSQgOgNAXAAQAkACAOANQARAkgcAAIgDAAg");
	this.shape_55.setTransform(129.2,213.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("ABWC5Qg8gEAGhQQAAhVgEgCIgnAHQAXAWgMASIgJANQgqBUhFAZQgYAEAYgRQBdhBAHhSQgUADgUAGQgQAFgKAAQgSgFgDgJQABgCAwgHIBGgLIAAg9QgIAAgLACQgWADgJgHQgNAagWAVQgZATAMgWQAng+gLgdIAAgGQAJgMAdAXQAEAEgGALQgHALgEAJIAtgJQAAhNgMgXQgCgGACgCQARgJAfAdIgCAJQgJAcgCArIAjgJIASgDQAYAAAEAHQABAJgUAGQgQABguAJIgDA+QAXgDAjgIQAfgJAJAEQAUAEAGALQADALgSAAQgUgCg3AEIgbACQAbASgJAWQgHASAAARQgHBQA1gCQA8AAAOgYIAJgdQANg6ACAqQACAiAJAPIACAFQgCARgaALQgcAJggAAQgQAAgRgCgAjDB7QAAgBABAAQAAgBAAAAQABgBAAAAQABAAABgBQAbgSAohSQAagjgxB7QgIAVgCAaQgBANgCABQgfgHgEgmgAjKgSQgLgLAUAAQAbACANAJQAWAagdAIQgJgCghgggAiih2QgJgYBBAfQAKAagUAFQgWgFgYghg");
	this.shape_56.setTransform(82.6,213.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,x:279.8}},{t:this.btnDelete,p:{regX:21.6,scaleX:1,x:529.5}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:207.4,y:215.9}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:346.7,y:214.9}},{t:this.shape_3,p:{x:392.5,y:215.2}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance,p:{scaleX:1,x:279.8}},{t:this.btnDelete,p:{regX:21.6,scaleX:1,x:529.5}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_7,p:{x:246.2,y:214.6}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:419.7,y:228}},{t:this.shape_10}]},1).to({state:[{t:this.instance,p:{scaleX:1,x:279.8}},{t:this.btnDelete,p:{regX:21.6,scaleX:1,x:529.5}},{t:this.shape_24,p:{x:128.9,y:213}},{t:this.shape_23,p:{x:174.5,y:212.8}},{t:this.shape_22,p:{x:222.1,y:213.9}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:362.3}},{t:this.shape_18},{t:this.shape_11,p:{x:443,y:228}},{t:this.shape_17}]},1).to({state:[{t:this.instance,p:{scaleX:1,x:279.8}},{t:this.btnDelete,p:{regX:21.6,scaleX:1,x:529.5}},{t:this.shape_29},{t:this.shape_19,p:{x:152.6}},{t:this.shape_7,p:{x:199.6,y:214.6}},{t:this.shape_24,p:{x:245.4,y:213}},{t:this.shape_22,p:{x:292,y:213.9}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_11,p:{x:466.3,y:228}},{t:this.shape_25}]},1).to({state:[{t:this.instance,p:{scaleX:1,x:279.8}},{t:this.btnDelete,p:{regX:21.6,scaleX:1,x:529.5}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_24,p:{x:222.1,y:212.2}},{t:this.shape_23,p:{x:267.7,y:212}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_22,p:{x:408.5,y:213.1}},{t:this.shape_11,p:{x:443,y:227.2}},{t:this.shape_30}]},1).to({state:[{t:this.instance,p:{scaleX:1,x:279.8}},{t:this.btnDelete,p:{regX:21.6,scaleX:1,x:529.5}},{t:this.shape_24,p:{x:175.5,y:213}},{t:this.shape_23,p:{x:221.1,y:212.8}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_11,p:{x:396.4,y:228}},{t:this.shape_35}]},1).to({state:[{t:this.instance,p:{scaleX:1.001,x:280.1}},{t:this.btnDelete,p:{regX:21.7,scaleX:1.001,x:530.1}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_11,p:{x:489.6,y:228}},{t:this.shape_39}]},1).to({state:[{t:this.instance,p:{scaleX:1.001,x:280.1}},{t:this.btnDelete,p:{regX:21.7,scaleX:1.001,x:530.1}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_4,p:{x:222.4,y:213.6}},{t:this.shape_3,p:{x:268.2,y:213.9}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_11,p:{x:489.6,y:228}},{t:this.shape_49}]},1).wait(1));

	// 图层 2
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(102,51,0,0.008)").s().p("EhHaAo/MAAAhR8MCO1AAAMAAABR8g");
	this.shape_57.setTransform(286.5,237.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.6,-24.5,914.3,524.5);


(lib.Caption = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{stop_0:48,start_0:54,stop_1:201,start_1:203,stop_2:344,start_2:346,stop_3:443,start_3:448});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.stop();
	}
	this.frame_201 = function() {
		this.stop();
	}
	this.frame_344 = function() {
		this.stop();
	}
	this.frame_443 = function() {
		this.stop();
	}
	this.frame_506 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48).call(this.frame_48).wait(153).call(this.frame_201).wait(143).call(this.frame_344).wait(99).call(this.frame_443).wait(63).call(this.frame_506).wait(3));

	// click
	this.btn_2 = new lib.BtnPlayVideo();
	this.btn_2.parent = this;
	this.btn_2.setTransform(1019,245.1,0.886,1.522,0,0,0,198.1,115.2);

	this.btn_1 = new lib.BtnPlayVideo();
	this.btn_1.parent = this;
	this.btn_1.setTransform(623,245.1,0.886,1.522,0,0,0,198.1,115.2);

	this.btn_3 = new lib.BtnPlayVideo();
	this.btn_3.parent = this;
	this.btn_3.setTransform(1146,493,0.38,0.435,0,0,0,198.5,115.1);

	this.btn_0 = new lib.BtnPlayVideo();
	this.btn_0.parent = this;
	this.btn_0.setTransform(226,245.1,0.886,1.522,0,0,0,198.1,115.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_0},{t:this.btn_3},{t:this.btn_1},{t:this.btn_2}]},48).to({state:[]},6).wait(455));

	// interactive_1
	this.letterQuestion = new lib.LetterQuestion();
	this.letterQuestion.parent = this;
	this.letterQuestion.setTransform(730.5,317.7,1,1,0,0,0,279.8,241.1);

	this.letter_7 = new lib.Letter();
	this.letter_7.parent = this;
	this.letter_7.setTransform(1082,464,1,1,0,0,0,82.2,59.1);

	this.letter_6 = new lib.Letter();
	this.letter_6.parent = this;
	this.letter_6.setTransform(849,463,1,1,0,0,0,82.2,59.1);

	this.letter_5 = new lib.Letter();
	this.letter_5.parent = this;
	this.letter_5.setTransform(614,462,1,1,0,0,0,82.2,59.1);

	this.letter_4 = new lib.Letter();
	this.letter_4.parent = this;
	this.letter_4.setTransform(377,461,1,1,0,0,0,82.2,59.1);

	this.letter_3 = new lib.Letter();
	this.letter_3.parent = this;
	this.letter_3.setTransform(1083,243,1,1,0,0,0,82.2,59.1);

	this.letter_2 = new lib.Letter();
	this.letter_2.parent = this;
	this.letter_2.setTransform(849,243,1,1,0,0,0,82.2,59.1);

	this.letter_1 = new lib.Letter();
	this.letter_1.parent = this;
	this.letter_1.setTransform(611,242,1,1,0,0,0,82.2,59.1);

	this.letter_0 = new lib.Letter();
	this.letter_0.parent = this;
	this.letter_0.setTransform(378,245,1,1,0,0,0,82.2,59.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.letter_0},{t:this.letter_1},{t:this.letter_2},{t:this.letter_3},{t:this.letter_4},{t:this.letter_5},{t:this.letter_6},{t:this.letter_7},{t:this.letterQuestion}]}).wait(509));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(234.8,52.1,995,535.9);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// caption
	this.caption = new lib.Caption();
	this.caption.parent = this;
	this.caption.setTransform(10,60);

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