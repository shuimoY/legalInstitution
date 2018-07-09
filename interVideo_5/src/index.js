(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[218,0,216,190],[382,192,80,80],[218,192,80,80],[300,192,80,80],[436,0,70,70],[436,72,40,60],[0,192,216,190],[0,0,216,190]]}
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



(lib.logo = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._return = function() {
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


(lib.Element05016 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC1C1").s().p("AiRBAQg9gZAAgpQAAgoA4gbQBAgdBTAEQBcgCA6AfQA8AZAAAoQAAAlg8AaQg+AehVACQhWgDg7gcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Element05016, new cjs.Rectangle(-20.7,-9.5,41.4,19.1), null);


(lib.Element05010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EBqIA7PMjUPAAAMAAAh2dMDUPAAAg");
	this.shape.setTransform(679.2,379.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.447)").s().p("EhqHA7PMAAAh2dMDUPAAAMAAAB2dg");
	this.shape_1.setTransform(679.2,379.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1360.4,760.2);


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
	this.shape.graphics.f("rgba(102,153,0,0.008)").s().p("A+2R+MAAAgj7MA9tAAAMAAAAj7g");
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


(lib.BtnReturn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 复制
	this.instance = new lib._return();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib._return();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjsFMIAAqXIHZAAIAAKXg");
	this.shape.setTransform(20.6,31.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnReturn, new cjs.Rectangle(-3.1,-1.9,47.4,66.4), null);


(lib.Element05011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.Element05016();
	this.instance.parent = this;
	this.instance.setTransform(796.7,265.8,0.371,0.371,-17.3);
	this.instance.filters = [new cjs.BlurFilter(5, 5, 2)];
	this.instance.cache(-23,-11,45,23);

	this.instance_1 = new lib.Element05016();
	this.instance_1.parent = this;
	this.instance_1.setTransform(708.2,279,0.501,0.501,0.2);
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 2)];
	this.instance_1.cache(-23,-11,45,23);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,255,0)").ss(0.2,1,1).p("AFnrpIBXEnIAFAQIAjgDIAngDQBJgGAYACQABAAABAAAoskXIBagWIAPiOIAQB/IA0gLIBFgPQAtgJAlgHQBMgMAtgBIAIjIIA1C8IGJgnIASgvApvAyIABBGQAEBWAQBPQAyD9CWBfIAiAWQAuAZA+ATQDGA+EZgU");
	this.shape.setTransform(742.9,259.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.2,1,1).p("ApencIgMArQgOA1gJA3QgcCwAhB/IB8gjQBZgYA4gOQAYgFARgEQAGgBAEgBQgGg3gDhDQAAgOgBgNQgBgvABgmQACg2AIgiIAZBxQAZB/AGBGICAgXQCEgZAfgEQAMjTgDidQAAgMgBgMIAfB7QAjCSAWB1ICrgSQAngEAggEQBygMAsgDQAEgBACAAQgGikgChvIgChNIAuB+QAwCOAQBQICCgNQAOgCAMgBIAAgGAO6jwQAPADAGADQABg7gRhXQgiishaiGQh+i7jchRQkThmmWBEQijASi6BaQl0CzhzFpIgNBEQgPBXgGBcQgTEnBLD1IBAC1QBSDLBeBwQAAgaAFgiQAJhKAagsQArA0BSAnQApAUAiAIQiFiEgxjzQgPhUgCiAQgDkBBEjaAJljGQglgGgoAKIgFAKQgFAPAEAXIAPgIQATgIAVgEQBEgLBAArQgQgWgfgTQgIgGgJgEQgUgJgUgEgAMpCHIgEgKQgUhaAAiUIADhPIABguAJpA3QgBAQgIAKQgHALgKgBQgJgBgGgMQgFgLABgQQABgPAHgLQAIgLAKABQAJABAGAMQAFAMgBAPgAI4APQARgiAbgCQAbgBAVAfQAVAgADAwQADAwgRAjQgQAjgbABQgbACgVggQgVghgEgwQgDgvARgjgAKZBhQAIASgCAYQgCAXgLARQgLAPgOgBQgNgBgIgRQgIgSACgYQACgYALgQQALgQANACQAOABAIARgAFwDkIALgHQgFgJAAgaQAAgMAEgUAF7DdQADgCAHgCQAHgCABgBQABAAAKgBQALgBAMAAQAMABAQAWQAOASAAATQAAAGgFAMQgFAMgEAEQgGAIgHAHQgOALgJAFQgJAFgMAFQgRAIgaABAAuIWIAFABIAiAIQAwAJAyAEQAWABAUAAQBWAABIgVQAZgHAXgJQAOgGANgGIAWgNAA8JAIgJgpAA8JAIAfAIQAnAIAqADQAbACAaAAQBVAABJgYQAPgEANgGQAPgRAFgaAMpCHIAWArQAlBOAcBTQBYEHgmDYQAAACgBABQBShfAcjmQAJhIAChMIgDhAQgIjUgziwQgQg4gTgtIgPgjQgugHh3AJAjZhLQAYgVAhgMQA5gVAaAIQAIACAEANQADALABASQhIgXhKAuQgXAPgUATIgQARQAQgsAhgcgAlvhfQABgBAAgCAjDBuQAMAAAIAOQAIAOAAAUQAAATgIAOQgIAOgMAAQgMAAgJgOQgIgOAAgTQAAgUAIgOQAJgOAMAAgAi2A+QAigFAdAmQAeAnAJA7QADAOAAAOQADAqgOAiQgQAugiAFQgiAFgegmQgcglgKg5QAAgCgBgCQgJg7ARgtQASgtAhgGgAlnOWQg5higbiBQgliwAXjVQAFgtAIgyQAIgyAOg/QAQhIAQgxQAMgpALgbAqKkaQgHgWgHgZQgNg1AFgWAhgDdQAFAQAAATQAAAegMAVQgMAVgRAAQgRAAgMgVQgMgVAAgeQAAgTAFgQQADgIAEgIQAMgVARAAQARAAAMAVQAFAIACAIgAoON0QAdAdAiAYQBcBCBRAGQgkghghg6QDABoEvgGQCNgDBsgUQALgCAJgCQDohECGiNQADgEADgDIAvgSQAygXASgUIAVAnQAXArAKAYAr+OzQAAgCAAgCABfKnIAcgOQAjgQAkgEQAQgCAPABQBBACA2ArQAaAUAXAdQARgkAQg1IAgiNAGJLiQgeA/gkANQhTAfhBgvQgygmgihRQgUgtgPg6AMJMFQBxh8ABiEQAChngsibIgoh8");
	this.shape_1.setTransform(726.3,234.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4ABA5").s().p("Ag/A/QgygmgjhQIAcgOQAjgQAkgEQAQgCAQABQBAACA2ArQAZAUAXAcQgeA/gjANQghAMgeAAQgtAAgngcg");
	this.shape_2.setTransform(750.6,308.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D2624").s().p("AAuESIgVgnQgSAUgxAXIgvASQBwh8ABiEQAChmgribIgph8IAXArQAkBOAcBTQBYEGgmDZQgKgZgXgrg");
	this.shape_3.setTransform(813,282.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E86348").s().p("ABVBCQg2grhAgCQgPgBgQACQgkAEgjAQIgcAOQgUgtgPg5IAfAIQAnAIAqADQAbACAaAAQBUAABJgYIAcgKQAPgRAFgaIAbgMIggCMQgQA1gSAkQgWgdgagUg");
	this.shape_4.setTransform(752.2,297);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyEhQgqgDgngIIgfgIIgJgoIAiAHQAwAJAyAEIApABQBWAABIgUQAZgHAXgKQgFAagPARIgcAKQhJAYhVAAIgCAAQgYAAgagCgAmAABQgMgUAAgeQAAgTAFgQQADgIAEgIQAMgVARAAQARAAAMAVQAEAIADAIQAFAQAAATQAAAegMAUQgMAVgRAAQgRAAgMgVgAm3hyQgIgOAAgTQAAgUAIgOQAJgOAMAAQAMAAAIAOQAIAOAAAUQAAATgIAOQgIAOgMAAQgMAAgJgOgAGahwQgNgBgIgRQgIgSACgYQACgYALgQQALgQANACQAOABAIARQAIASgCAYQgCAXgLARQgLAOgMAAIgCAAgAFwjWQgJgBgGgMQgFgLABgQQABgPAHgLQAIgLAKABQAJABAGAMQAFAMgBAPQgBAQgIAKQgHAKgIAAIgCAAg");
	this.shape_5.setTransform(748.6,265.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AmmCXQgcgkgKg5IgBgEQgJg6ARguQASgtAhgFQAigFAdAmQAeAmAJA6QADAPAAAOQADAqgOAiQgQAtgiAFIgIABQgdAAgbgigAl9AqQgEAHgDAJQgFAQAAATQAAAeAMAVQAMAVARAAQARAAAMgVQAMgVAAgeQAAgTgFgQQgCgJgFgHQgMgVgRAAQgRAAgMAVgAm0gmQgIAOAAATQAAATAIAOQAJAOAMAAQAMAAAIgOQAIgOAAgTQAAgTgIgOQgIgOgMAAQgMAAgJAOgAFnAOQgVgfgEgwQgDgwARgjQARgjAbgBQAbgCAVAgQAVAhADAvQADAwgRAiQgQAjgbACIgDAAQgZAAgUgfgAGPhFQgLAQgCAYQgCAXAIARQAIARANACQAOABALgQQALgPACgYQACgYgIgRQgIgSgOgBIgCAAQgMAAgKAPgAFoiKQgHALgBAQQgBAPAFAMQAGALAJABQAKABAHgKQAIgLABgPQABgQgFgMQgGgLgJgBIgCAAQgIAAgIAJg");
	this.shape_6.setTransform(748.3,251);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDE0D9").s().p("Ak3K7Qg+gTgugZIghgWQiWhfgzj9QgQhPgEhWIgBhGQAFgtAJgxQAIgyAOg/QAQhIAPgyIBbgWIAPiOIAQB/IAzgLQghAcgQAsIAQgRQAVgTAXgPQBKguBHAXQgBgSgDgLQBLgMAugBIAIjIIA1C8IGJgnIASgvIAGgBQgGikgDhvIBYEnQgkgHgoALIgGAKQgEAPAEAXIAPgIQATgIAVgEQBEgLA/ArQgQgWgegTIgSgKIAmgDQBJgGAYACIgCBPQAACVAUBaIADAKIApB7QArCbgBBnQgCCEhxB8IgGAHQiGCNjnBEIgUAEQhFAFhAAAQjFAAiWgvgAibFEQAOA6AUAtQAjBRAyAmQA/AvBUgfQAjgNAeg/QARgkAQg1IAgiNIAXgNIgXANIgbAMQgXAJgYAHQhIAVhWAAIgqgBQgygEgwgJIghgIgAikEbIgFgBgAD7AmQgFAMgDAEQgGAIgHAHIgYAQQgIAFgMAFQgSAIgaABQAagBASgIQAMgFAIgFIAYgQQAHgHAGgIQADgEAFgMQAFgMAAgGQAAgTgNgRQgQgWgNgBIgBAAIgCAAIAAAAIgBAAIgRABIgBAAIgMABIgIADQgHACgDACQADgCAHgCIAIgDIAMgBIABAAIARgBIABAAIAAAAIACAAIABAAQANABAQAWQANARAAATQAAAGgFAMgAmOi9QgiAGgRAtQgRAtAJA7IAAAEQAKA4AdAlQAeAmAhgFQAigFARguQANgigCgpQgBgOgCgOQgJg7gegnQgagigdAAIgIABgACYgXIAKgHQgFgKAAgZQAAgMAEgUQgEAUAAAMQAAAZAFAKgAGLkRQgbACgRAjQgRAjAEAvQADAwAVAhQAVAgAbgCQAcgBAQgjQARgjgDgwQgDgwgWggQgTgfgaAAIgDAAg");
	this.shape_7.setTransform(747.9,259.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E3B0A1").s().p("AoIK3Qg5higbiBQgliwAXjVIABBGQAEBWAQBPQAyD9CWBfIAiAWQAuAZA+ATQDGA+EZgUQhsAViMACIgeABQkcAAi2hjgAoQk9IApgKIAKgCQgGg3gDhDIgBgbQgBgvABgmQACg2AIgiIAZBxQAZB/AGBGICAgXQCFgZAfgEQALjTgCidIgBgYIAfB7QAjCSAWB1ICqgSIBHgIQBygMAsgDIgSAvImJAnIg1i8IgIDIQgtABhMANQgDgOgIgCQgagIg5AVQghANgYAUIg0ALIgQh/IgPCOIhaAWQAMgpALgagAHDmlIhXknIgChNIAuB+QAwCOAQBQICCgNIAagCIgBAtQgYgChJAGIgnADQgTgJgVgEg");
	this.shape_8.setTransform(742.4,257);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#382F2C").s().p("AnPOtQgigYgdgdQiFiFgxjyQgPhVgCiAIAAgYQAAjzBBjPQhBDPAADzIAAAYQACCAAPBVQAxDyCFCFQgigJgpgTQhSgogrgzQgaAsgJBJQgFAiAAAbQhehxhSjLIhAi0QhLj1ATknQAGhdAPhWIANhEQBzlpF0i0QC6haCjgRQGWhFETBmQDcBSB+C7QBaCFAiCtQARBWgBA8QgGgEgPgCIAPAiQATAuAQA3QAzCxAIDUIADA/QgCBNgJBIQgcDmhSBfIABgDQAmjYhYkIQgchTglhNIgWgrIgEgKQgUhaAAiUIADhPIACAAIgCAAIABguIgaACIiCAOQgQhQgwiOIguh+IACBNQACBuAGClIgGAAQgsAEhyAMIhHAHIirATQgWh2gjiSIgfh6IABAYQADCcgMDUQgfAEiEAYIiAAYQgGhGgZh/IgZhxQgIAigCA2QgBAlABAwIABAaQADBEAGA3IgKACIgpAJIABgDIgBADQgLAbgMApQgQAwgQBJQgOA/gIAyQgIAygFAtQgXDVAlCwQAbCAA5BiQAhA6AkAiQhRgHhchBgAp8gSIB8gjQBZgZA4gNQg4ANhZAZIh8AjQgShFAAhTQAAhHANhRQAJg3AOg1IAMgqIgMAqQgOA1gJA3QgNBRAABHQAABTASBFIAAAAgAMVjqIAFAAIAIgBQA6gEAoAAIABAAIAAAAQAhAAAUADQgUgDghAAIAAAAIgBAAQgoAAg6AEIgIABIgFAAIAAgGIAAAGIAAAAgAqYlGQAHAaAHAWQgHgWgHgaQgJglAAgWQAAgJABgGQgBAGAAAJQAAAWAJAlgAjZhHIBFgQIBTgPQADALABASQhIgXhKAuQgXAOgUAUIgQAQQAQgrAhgcgAighoQA5gWAaAIQAIACAEAOIhTAPIhFAQQAYgVAhgMgAhBhmIAAAAgAJJiiQgVADgTAJIgPAIQgEgXAFgPIAFgLQAogKAlAHIAEAQIAkgDIgkADIgEgQQAUAEAUAJIARAJQAfATAQAXQhAgshEAMgAMVjqIAAAAgAMVjqg");
	this.shape_9.setTransform(726.3,234.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,255,0)").ss(0.2,1,1).p("AsZhcQACgIALgUQANgYANgNQAMgLAcgoQApg7ABgCQAEgFAtgqQAmglAYgrQAagtAegdQAPgOAJgGQABAAA0hJQA6hLAegWAkMkhIgKAhIAVAEAlmBxQAAAAAAgBQgIgKgBgDQgDgKABgZQACgXAZgeQANgOAMgKQgQgnAKhWIANhPIA1gjAgHqBIA0AVQBFAPBOgaALAgRIglgYQgegggngjQghghgOgOQgYgYhnhBALIAWQBegEAUg8QAGgTgCgXIgEgTALjAAQgYgDgLgOAptFXIBYhfQBdhhAggIQAKgCAQACQAVAEAhALQAwARA7ANQAxALA4AIIBGAJQAEAAAEABQBRAGBKgDQASgBARgBQBogJBIgcQBQghAng5ABWKMIBQAJQBfABBNglACnESIB9EcAFdDWIDHDbAqzAqQhlgqgcg9QgIgUgBgTIABgPAnEIgIAPANQAUAQAaANQBRAqBgAAAgbJKQAAAAgBAAIgOk+");
	this.shape_10.setTransform(730.3,404);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(0.2,1,1).p("Ai6yBQgWAJgYAKQg+AcgpAYQgPAIgMAIQgoAZhVBnQhdBvghAcQgtAlg6BYQgxBJgUAwQgFALAAAEQgCAKAEAOQAGAWAXAeQAjAxAoAIQABAAAAAAQAFABAFABIAOgFQAQgHANgJQAKgHCkhxQA1gmAogiQABAAABgBQAcgXAXgVAhXyTIhHgDIACAIQgOAGgQAHQAPBCAXA+QAEALAEAKQADgFAMgIQAFgEALgGQADAGACAGQAYA0AfAwQAFAHAFAHQAIAMAJAMIAignQAZgZAbgTQAUgPAWgMQg5gYgzg0QgQgQgQgTgAh1wVQAEAJAEAJAiUwBQAJgGAWgOQgJgWgHgVIgXhOAgxuTQgDABgiAXQgFgIgEgIQgZgvgUgyAhLtnQAEgFAOgLQAPgMADgCAgQsVQgNgQgLgPQgQgUgTgfAhWt7QAGALAFAJAjwqlQgGABgGABIAAAAQggAGgaAIQAcgcATgXQAEgEADgEAlrpoIgNAzQgLBDAIBEQgPAHgKAPQgUAbAOAjQACADABADIANAJQASALAXALQAAAAAAAAQBAAeBWARQBRAPBcABIA3gBQBAgCA3gHIANA0IAOA4IAOA5QArCqAJAoIAAAAIAfAKQAPAEAOADQAXADAVgBIACBBIAECeQAAAeAGBfQAAAJABAIQAEBCgBASQAHAAAHAAQAHgBAEBHQAcAqAvAcQAXAOASAGIAxAUQAgAUAVAaQgFAMgXAOQgwAfhoAQQgeAEgmgBQhKgBgjgVIgJBjQAGACAFADQCZAZCFgjQBDgSAkgXADlyIIAKABIABAPIApAUQBNAoAdAWQAbAVBdBuQBHBWAsA5QAaAiBABYQA+BWASAaIAKALQAIAKADAFIAAAAQAJABAJABQAmADAkABQAUAAAVAGQAaAHAAAKQAAAEgdACQgeABgFABQAKACAJAEQA+AXAAAZQAAAEgIAAQgGAAgLgEQADAEAEADQAQAPAAALIAAADQADAEAAADQAAAFgHADQgGADgDAAQgCgBgCAAQgCgBgCAAQhKgQgLAAQgMAAgOgBIgUACQgJAAgKADQgDABgCAGQgCAFAAACQAAACANARQANARAAAQQAAAUgSAAQgJAAgRgWQgTgYgIgDQgUgKgOgNQgJgIgEgIQgEgIAAgHQgFABgEABIgjgUQgigTgcgSQhshDhBg4QAEA/ABA7QAIAcgYAUQAPAZgKAVQgFAKgGAGQAAABgBABQAQAJAUASQArAmBBBJQAwA2AnAwQgJBkhNAaQgEACgEABQgVAGgYgBIgXgBIAAAAQggB3hwAEAEiwAQgIgHgTgFIgRgFIAAAdIAPAFQATAHALAJQgBAvgGAuQgJgLgSgJIgSgHIgCAPQgBAEAAADIARAKQATANAHAJQgGAjgJAjQgDALgEALQgCAIgDAIQgLAYgPAaQgCAEgDAEQgEAIgFAIQgUAhgRASQgHAIgHAFQgKgHgKgIQgYgSgcgZQgEgDgDgDQACgGAJgOQAKgOAEgHQAVAXANARQAFAGAEAGQAEgFADgGQAKgPAKgUQAGgKAFgLQAGAGAPAMQANAKAEAEAEiwAIABAJQAAAMAAAMACNveQAigdAWgjQAOgXAIgaIAKg5Ik8gLAEZxkIAJBkADwx4QAGA2AAAxADctAIARAIQASAKAJANADWstQADgKADgJQAJgjAHgkADLsQQADgHADgIQACgHADgHIASANQATANAGAIAEcuCQgCAOgDANADtuOQgOgUgqggIgEgDIgUBbIAAAAIADAAIArBaACNveIAkAZABqvbQAAAAABAAIAigDAgCsGQAFgKANgLQANgKAHgCQgHgHgGgHQgDABgOALQgPANgHAHAAksnQAFAGAGAGIAPAQQAHgRAHgTQARgpAGgLIAUgCIAQgCIATBbAA+sLIAaAbQABACACABABwr/QAKhMgDgaABjtjIgjhdACHtnIAWgDACdqxQAHARADAMQAEAMAEAKACNqyQAAASAAAgABSqxQgKgIgJgJQADgKAKgQQAKgOAFgDQAIAKAIAJAA/rCQglgjgcghQgHgIgHgHAC8rpQAIgSAHgVACxrUQAHAIAcAbAGesjQADgLAVgaAGesjQAHA0AGBAQABAKABAKQADAlACAkQAAABAAABAFvvfQAdA0ASCIADvudQAGgqABgtAgWttQAVAdAYAbAMtoQQABACAAACQAFAXgPAdQgSAhgrARQgQAGgOACAPbmRQgKgNgpgPQg5gQgJgDANknkQAGAEAaAKQAeALAOAIQALAHAJAHANSn7QAFAFAZAEQAHACAQAEQACAAADABALFm4IAAAAAEukiQATgGAVgKQBCgdAIgXAGnmmQgZAUg6AMQglAHgtACIglACAEukiIAfAxIAVAiIAXAkQBQCBAcA5ACQkAQBYgLBGgXABfH1IAAAAQABgzAAgfIgGi9IgBgmQghADghgKQgXgHgWgOABZDAQBJgGBLhDAoigxQAUglBZhzQAfgpAdgkQAMgQAMgOIAAgBAlMA6QAOhEA7iFIArhbIANgcAg7CGIAWkfIAEg0IADgpAvHltQABACABAEQACAFAMACQALACAOgCQANgBAhgEQAggDAZgBQAYAAALACQAKADALAAQAIAAAAAGQAAAJgFAJQgEAJAAALQAAAQAKAJQAKAJAQAAQAOAAgBgZQAAgIACgMQADgPAGgFQAMgOAHgRQACgDABgCQAFgOgCgMAoigxIAAAAQgugGgYgXQgRgQgGgXIgCgUIBbhaQBhhcArgbAmgBAQgzgGglglQgUgVgNgaIgJgXAo+HHQAyiyA7h8IASgfIAfg6QAmAFAtgMIABABIAOAWQAWAaAbASQAkAXApAGAo+HHIAPAQQAVASAaANQBTAqBugXQgaB1gPAiQALgEgHAsIAQAbQADAGgCAHQgFASgBAFQgEAUABARQABAVAJAlQANA1ANAXQAJAZADAeQADASAAAUQABAagCASQgOA0hfAZQhVAWhdgKQhHgHgzgrQgkgegEgSQgBgGABgpIABgpIAHgVIAAAAIALgkQAEgxATg6QAFgPARgsQAEgIADgNIACgMQgCgMgBgEQgCgEgBgGQgCgHAHgFQAGgFATgDQALgnAbhPgAgXCjQgIgFgHgFIgVgTIgBgBQhIAdg8gJIgRA0IgmBtQg5CpgOAkQAAABgBABAlrLpQACgBACgBAlkLIQgDAOgEATApLLvQgBgFgBgOQgCgVABgQQACgRAJgFQAIgFANgBQANgCAoADQAoADAhABQAhABAngBAqRLDIATARQAaATAZAIQAKADAKACQAqAIAigBQBRACAvgUAqRLDQACgIAEgOQAAgBABAAAqbK6IAKAJApGMrIAogDQAzgBA6AMApRM9IAfgDQAngDAoACAqoQwQAEAEAFAEIAZAIQAgAIAjAEQByANBsgmIAIgEQACg2gKggQgHgYgGAAIkkgEIgKAeQgJAnABAugArjPFIAKAmQAQAnAhAeAldQvIALgGQAWgTAQgtAJYMtQAMAQAIATIAHATQAGAZABAcQABAYgGAcQgHAVgbASQgcAThvARQhvAQg7gLQgSgDgLgGIgIgFQgMgIgVgKIgSgKQhCgSgogWIgbgSQgBgVABgaQAAgnABgyIAChJQgIhHABgKQABgGAOgKQAIgFAHgDIAEiJAFlJLQgbgBgaABQhBADgNAQIgEAMQgCAXAJA4QBKgBBPgmQAAAAAAgBAFiH3QgjAKgxAFQhhAJhOgaABTKTIAHAEIABgZABaKXIAPAIQAcANAgAHQAgAGAgAAADqPGQgkgPgagEQgfgFgdgKQglgNgKgOAEdL5IA+gIQBCgIAYAEAsRopIgmAPQgcAMgRAKQgdAGgbAFQgbAFgQADQgQADABAOQAAAOA/ABQALgGAVgMQAYgNAGgHAtjnRQgHAJgWALQgeAQgHAEQgZAPgDACQgHAEgEAFIgHABQgGAAgDgEQgDgDAFgJQAEgJAUgOQATgPAUgLQACgBACgBAvHltQgCgEAGgGQAGgGANgEQAOgFAKgBQAJgCAbgHQAbgHAFgCQAEgCAGgHAvMmPQgMALAAAIQAAAIAFADQAFACAHAC");
	this.shape_11.setTransform(729.8,446.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BD2F2F").s().p("AqTCUIgKgmIAAAAIALgkQAFgxATg5QAEgPASgsQADgIADgNIADgMIgEgQIgDgKQgBgHAGgFQAGgEATgEIAAABIgHAWIAUARQAZATAZAIQAKADALACQApAIAigBQBRACAvgUIAEgCIgEACIAHghIAQAbQAEAGgCAHIgHAXQgEAUABARQACAVAJAkQANA1AMAXQAJAZAEAeQgRAtgWATIgLAGQADg2gKggQgIgYgGAAIkkgEIgJAeQgKAnABAuQghgegQgngAnrgcIggADIAggDIABAAIAqgCIAAAAIABAAIAgABIADAAIgDAAIgggBIgBAAIAAAAIgqACIgBAAgAlrgjIgCgBQg0gKguAAIgBAAIAAAAIgIAAIgnADIAngDIAIAAIAAAAIABAAQAuAAA0AKIACABIAAAAgApLiTIgKgJgADyBcQgegFgdgKQgmgNgKgOIABhYIADhJQgIhHABgKQAAgGAPgKIAOgIIgBAZIgGgEIAGAEIAPAIQAcANAhAHQAfAGAgAAQBLgBBOgmIAAgBQAcAqAvAcQAYAOASAGIAwAUQAhAUAUAaQgEAMgXAOQgxAehoAQQgeAEglgBQhLgBgjgVIgIBjQglgPgagEgAGhhlIg+AIIA+gIIAwgEIAAAAIANgBIAKAAIAAAAIASABIABAAIgBAAIgSgBIAAAAIgKAAIgNABIAAAAIgwAEIAAAAg");
	this.shape_12.setTransform(722.8,531.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8E354").s().p("AoxLLQgkgEgggJIgZgIIgJgIQgBguAKgnIAJgdIEkAEQAGAAAIAXQAKAhgDA1IgIAEQhRAdhUAAQgcAAgcgDgAEHJJIgLgEIAIhjQAjAUBLACQAlAAAegDQBogQAxgfQAXgPAEgMQANAQAIATIAGATQAHAZAAAdQgkAWhCASQhOAUhUAAQg9AAg/gKgAnaF5QgiABgpgIQgLgCgKgDIgCgSQgCgWACgQQABgRAJgFQAIgFAOgBQANgBAoADQAoACAhABIBHAAQALgEgHAsIgHAhQgqAShFAAIgRAAgADvDpIAEgNQAOgPBBgDQAZgCAbABIAPAAQAGAAAEBHIAAABQhOAlhLABQgJg4ACgWgAAojIQgYgHgVgOIgBgBIgOk9IAEg0IgEA0IgWEgIgBgBQhHAeg8gJQgqgGgjgXQgcgSgVgbIgPgWQAOhEA7iFIArhbIgrBbQg7CFgOBEIgBgBQgtAMglgEQg0gGglgmQgUgUgNgcIgJgXQAVglBYhzIA8hNQAVADAhAMQAxAQA6AOQAxALA4AIIBGAJIAIAAQBRAHBKgDIAjgDQBogIBIgdQBQggAng6QArAmBCBKQAwA2AmAvQgIBlhOAbIgIACIjHjbIAXAlQBQCAAdA6IgBAAQggB4hvAEQgWABgXgEIh9kcIgPg5IAPA5IAOA4QAqCrAJAoQhLBEhJAFIgOABQgaAAgagIgAFzpRIgVgigAoRmzQgtgFgZgYIBYhfQBdhhAggIQAKgCAQACIg8BNQhYBzgVAlgAloqYIAAAAg");
	this.shape_13.setTransform(728.1,484.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7BA3C").s().p("AAGD7IgVgTIAWkfIANE8IgOgKgAE5DkIgggLIAAAAQgIgogrirIgOg3IB+EbQgPgDgOgDgAIpByIgXgBQgdg6hPiAIgYgkIDHDaQgTAGgWAAIgDgBgApSgTIgCgUIBbhaQBhhcArgaIADAFIANAJQASALAWALIABABIgYAeQgRgCgKACQggAIhdBhIhYBeQgQgQgGgWgAAKhrIADgpIA5gBQA/gCA4gHIANA0IgkADIgyABQgzAAg3gFgADKhqgAC9ieQBYgLBFgXIAfAxIgfgxQAUgGAVgKQBCgdAIgXQAPAKAUARQgnA6hQAgQhHAdhoAIgAAKhrIgIgBIhFgIQg4gIgxgMIANgcIgNAcQg6gNgwgQQghgMgVgDIAYgeIAAAAQBAAdBVARQBSAPBaABIgDApIAAAAg");
	this.shape_14.setTransform(725.4,436.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDE0D9").s().p("AoAMBQgagNgVgSIgPgPQAyiyA7h8IASggIAOANQAVAQAaANQBRAqBgAAIgmBtQg5CogOAkIgBACQgnAJgjAAQhBAAg2gcgABfMAIAAAAIABhSIgGi9IBRAJQBfABBNglIAECeQAAAfAGBfIABAQQgjALgxAEQgZADgYAAQhEAAg6gUgAr2gTQgKgJAAgRQAAgLAEgJQAFgJAAgJQAAgFgIgBQgLAAgKgCQgLgCgYAAQgZAAggAEIguAFQgOACgLgDQgMgCgCgEIgCgHIAAgCQAAgDAEgEQAGgGANgFIAYgGIAkgIQAbgHAFgCQAEgCAGgIQgGAIgEACQgFACgbAHIgkAIIgYAGQgNAFgGAGQgEAEAAADIAAACQgHgBgFgDQgFgDAAgIQAAgIAMgLIgHABQgGAAgDgDQgDgDAFgKQAEgJAUgOQATgOAUgLIAEgDQg/AAAAgOQgBgOAQgDIArgIIA4gMQARgJAcgMIgBAPQAAATAJAUQAcA+BlAqIgDAGQgHARgMANQgGAGgDAOQgCAMAAAJQABAYgOAAQgQAAgKgIgAuAixIglAUIgcAQIgLAJIALgJIAcgQIAlgUQAWgLAHgKQgHAKgWALgAt3jXIggARIAggRQAYgOAGgHQgGAHgYAOgAMXhBQgTgYgIgEQgUgJgOgOQgJgIgEgIQBegEATg9QAGgTgCgXIgDgTQAmADAkAAQAUAAAVAGQAaAHAAAKQAAAFgdACIgjABIgFgBIgXgFQgZgFgFgFQAFAFAZAFIAXAFIAFABQAKADAJADQA+AYAAAZQAAADgIAAQgGAAgLgDIAHAGQAQAPAAALIAAADQADAEAAAEQAAAEgHAEQgGACgDAAIgEAAIgEgCQhKgPgLgBIgagBIgUACQgJAAgKAEQgDAAgCAHIgCAHQAAACANARQANARAAAPQAAAUgSAAQgJAAgRgVgAOoihQApAOAKANQgKgNgpgOQg5gQgJgEQAJAEA5AQgAOEjLQAeALAOAJIAUAOIgUgOQgOgJgegLQgagJgGgFQAGAFAaAJgAgCscIA0AVQBEAPBPgaQgWAjgiAcIgiADIgBABQg5gZgzg0g");
	this.shape_15.setTransform(729.8,419.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3B0A1").s().p("ACmLBIhRgIIgBgmQBJgGBLhDIAAAAIAfAKQAPAEAOADQAXADAVgBIACBBQhLAjhcAAIgFAAgAmHJ2QgZgNgWgQIgOgMIAfg6QAmAFAtgMIABABIAPAWQAVAaAbASQAkAXApAGIgRA0IgBAAQhfAAhRgqgAs0gRQgIgTgBgTIABgQIAmgPQgFALAAAEQgCAKAEAOQAGAWAXAdQAjAxAoAIIABAAQACAMgFAOQhlgqgcg+gALEA0QAPgCAPgGQArgRASggQAPgdgFgXIgBgEIABAAIARACIADAUQACAWgFASQgUA9heAFQgEgIAAgHgAAtpAIg0gUQgQgQgQgTIg1hJIE8ALIgKA5QgIAagOAXQgyARguAAQgaAAgZgGg");
	this.shape_16.setTransform(730.3,399.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AoQSUQhHgHgzgrQgjgegFgSQgBgGABgpIACgpIAGgVIAKAmQAQAnAhAeIAJAIIAZAIQAgAIAkAEQByANBrgmIAIgEIALgGQAWgTARgtQACASABAUQABAagCASQgOA0hgAZQg7APg/AAQgcAAgcgDgAFYQcQgTgDgLgGIgHgFQgMgIgVgKIgTgKQhCgSgogWIgbgSIAAgvQAKAOAmANQAdAKAeAFQAaAEAlAPIALAFQCZAZCFgjQBCgSAkgXQABAYgGAcQgGAVgcASQgcAThvARQhCAJgvAAQghAAgXgEgApELUIgUgRIAHgWIAAgBQAMgnAbhPIAmhvIAPAQQAUASAaANQBUAqBugXQgbB1gPAiIhHAAQghgBgogDQgogDgNACQgNABgJAFQgJAFgBARQgCAQACAVIACATQgZgIgZgTgADfKzQghgHgcgNIgPgIIABgZIAFiJQBNAaBhgJQAygFAigKQAEBCgBASQgbgBgZABQhBADgOAQIgEAMQgCAXAJA4IgEAAQgeAAgdgGgADGqyQgNgRgVgXIgQgTIgDgDIgagbIAPgkQAQgpAGgLIAVgCIAPgCIAUBbIgUhbIAWgDIgWADIgPACIgVACIgjhdQAVgPAVgMQgVAMgVAPIAjBdQgGALgQApIgPAkIgPgQIgLgMIgNgOQgYgbgWgdIAjgnQAZgZAbgTQgbATgZAZIgjAnIgRgYIgKgOQgegwgXg0IgGgMIgIgSQgJgWgGgVIgXhOIgDgIIBHADIA0BJQAQATAQAQQA1A0A4AYIABAAIAigDQAjgdAVgjQAOgXAIgaIAKg5IAKABIACAPQAGA2AAAxIgBAdQgBAtgGAqIgCAPQgNgUgrggIgEgDIgkgZIAkAZIgUBbIABAAIACAAIAsBaIgshaIgCAAIgBAAIAUhbIAEADQArAgANAUIgBAHQgGAkgKAjIgGATIgFAOIgFAPIgQAnIgKAVQgKAUgLAPIgHALIgJgMgACpr/QAIg8AAgdIAAgNIAAANQAAAdgIA8gACctjgADAtngADqvFg");
	this.shape_17.setTransform(724.1,446.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D53733").s().p("AlxFtIgOgJIgCgGQgPgjAUgbQALgPAOgHQgIhEAMhDIANgzIABgBQAcgYAXgVQAdgbASgWIgKAgIAVAEQggAGgaAHQAagHAggGIABAAIg2AkIgNBOQgKBWAQAoQgMAKgNAPQgZAdgCAYQgBAZAEAKIAIANQgXgLgRgLgAK1EIQgigTgcgSQhshDhBg5IAAgBIgFhJQBnBCAYAYIAvAuQAnAjAeAgIAlAYIAAAAQALAPAYADQgQAGgPACIgJACgAr+CeQABgEAEgLQAUgwAxhJQA6hXAtglQAigcBdhvQBVhnAngZIAbgRQgeAWg6BMIg1BJQgJAFgPAOQgeAdgaAuQgYArgmAkQgtAqgEAFIgqA8QgcAogMAMQgMANgOAXQgLAUgCAJQgEgOACgKg");
	this.shape_18.setTransform(727.4,376.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC4A46").s().p("AjYG8QhWgRhAgdIAAgBIgJgNQgEgKACgZQABgYAagdQAMgPANgKQgQgoAKhVIANhPIA1gkIAMgCIgMACIAAAAIgWgDIALghQgTAXgcAbQgXAVgcAXIgCACQgoAhg1AmIiuB4QgNAJgQAHIgOAFIgKgCIgBAAQgogIgjgwQgXgfgGgWQACgJALgTQANgYANgNQALgMAcgoIArg8QADgFAugqQAmgkAYgrQAZguAegcQAPgOAKgGIA1hJQA5hMAfgVQApgYA+gcIAugTIAegNIAXBOQAHAVAJAWIAIASIgQAKQgLAIgEAFIAAAAIAAAAQAEgFALgIIAQgKIAFAMQAYA0AfAwIAKAOIARAYQAVAdAYAbIANAOQgHACgNALQgMAKgGAKQAGgKAMgKQANgLAHgCIALAMIAPAQIAaAcIADACQgFADgKAPQgKAPgDAJIATASIAHAFQAcAaAYARIAUAPQAHgFAHgIQARgSAUghIAJgQIAFgHQAPgaALgYIAFgQIAHgWQgJgNgSgKIgRgIIARAIQASAKAJANIgHAWQgGgHgTgOIgSgMIASAMQATAOAGAHIgFAQQgLAYgPAaIgRgOQgPgLgGgHIAPgnIAGgPIAFgNIAGgUQAJgjAHgkIARALQATAMAHAJQgHgJgTgMIgRgLIABgHIACgPQAGgqABgtIAPAFQATAHALAJIAAgMIAAgMIgBgJIABAJIAAAMIAAAMQgLgJgTgHIgPgFIAAgcQAAgygGg2IApAUQBNAoAdAWQAbAVBdBvQBHBVAsA5QAaAjBABWQA+BWASAaIAKAMQAIAJADAGIABADQAFAYgPAdQgSAhgrAQQgYgDgKgPIAAAAIglgXQgfghgmgjIgvguQgYgYhnhCIgCgTQgGhAgHg0QADgKAVgbQgVAbgDAKQAHA0AGBAIACATIAFBJIAAACQAEA/ABA7QAIAcgYAUQgZAVg6ALQglAHgtADIglABIAlgBQAtgDAlgHQA6gLAZgVQAPAagKAUQgFAKgGAGIgBACQgIAXhCAdQgVAKgTAGQhGAXhYALQg3AHhAACIg3ABQhcgBhRgPgAAyAAQglghgcgiQAcAiAlAhgAkUgFIAHgIIgHAIgAgPhDIgOgPIAOAPgAgGhmQgQANgHAHQAHgHAQgNQANgLADgBQgDABgNALgAg1hxIAYAfIgYgfQgQgUgTgfQAEgFAOgKIASgPIgSAPQgOAKgEAFIgLgUIAlgYIglAYIgJgQQgZgvgUgyQAUAyAZAvIAJAQIALAUQATAfAQAUgAD7heQAJgiAGgkQgGAkgJAigAGRhgQgSiHgdg1QAdA1ASCHgAEKikIAFgbIgFAbgAD0jTQASAJAJALQAGgtABgwQgBAwgGAtQgJgLgSgJIgSgHgAiZkpIgIgVIAfgUIgfAUQgXg+gPhCQAPBCAXA+IAIAVgAEVk9IgJhkIAJBkQgIgHgTgFIgRgEIARAEQATAFAIAHgACABCIAAgyIAJAMIAHgKQAKgQAKgTQAHAIAcAaQgcgagHgIIALgVQAGAHAPALIARAOIgFAHIgJAQQgUAhgRASQgEgJgEgNQgDgMgHgQQAHAQADAMQAEANAEAJQgHAIgHAFIgUgPgACiBEIAAAAgABMAXIgHgFQACgHAJgNIAOgVQAVAXANAQIAAAyQgYgRgcgagABFASIgTgSQADgJAKgPQAKgPAFgDIAQATIgOAVQgJANgCAHIAAAAgABegXIAAAAgAD0hIIAAAAgAD7heIAAAAgAGRhgIAAAAgAEVk9IAAAAgAihk+IAAAAg");
	this.shape_19.setTransform(731.1,375.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,255,0)").ss(0.2,1,1).p("AGFrdIBJErIAEAQIAjgBIAmgCQBJgBAYADIAAgBAokk7IBbgSIAWiNIAKCAIA0gIIBGgMQAtgHAmgEQBLgJAuACIASjHIAsC+IGKgTIAUguAp4AKIgDBFQgBBWAMBQQAmEACQBmIAhAXQAsAcA9AXQDDBIEWgS");
	this.shape_20.setTransform(747.7,261);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(0.2,1,1).p("Apwk/QgHgWgEgaQgKg1AGgWAo6n+IgOApQgRA1gLA2QgmCuAbCCIB+gdQBZgUA5gKQAfgGAVgDQgDg3AAhEQABiHASg/IATByQATCAACBGICBgRQCFgSAggCQAXjjAFikIAYB8QAbCTARB3ICsgKQCsgJA5gCQAEAAADAAQACikADhvIADhNIAnCAQApCRAMBQICCgGQANgBANAAIAAgHAPQjCQAPADAGAEQAEg7gNhXQgZivhTiJQh0jCjXhdQkOhzmZAvQikAJi+BQQl8CgiGFjIgRBCQgTBWgLBcQgiEmA+D4IA2C4QBIDPBYB1QACgaAGgiQANhJAcgqQAoA2BQArQAoAVAhALQh+iLgkj1QgLhVAFiAQAKj/BQjYAKgibQgTgKgUgFQgkgIgpAIIgGAKQgFAPADAXIAPgHQAUgIAVgCQBEgIA+AvQgPgYgegUQgIgGgJgFgAJBAoQATgiAbAAQAbAAATAhQAUAiABAvQAAAwgTAiQgSAigbAAQgbABgUgiQgTghgBgwQgBgvATgjgAJDBNQACgPAIgLQAIgKAKABQAJACAFAMQAFAMgCAPQgCAQgIAJQgIALgKgCQgJgBgFgMQgFgLACgQgAKeB/QAHASgEAYQgDAYgMAQQgLAOgOgBQgNgCgHgSQgHgSADgYQADgYAMgPQAMgPANACQAOACAHARgAFvDzIAKgGQgEgKABgaQABgMAFgUAF5DtQADgCAHgCQAIgCABAAQABAAAKgBQAKAAANABQAMAAAPAXQANATgBATQgBAGgFAMQgGAMgEAEQgGAHgHAHQgQAKgJAFQgJAEgMAFQgSAGgZABAAnI+IAlAOQAnAKAqAFQA9AIA7gDIAAAAQBEgEBAgTIANgjQh0AniNgPQgygHgwgLIghgJgAFfKoQgWAPgXAJQhQAehjgrQgLgEgMgJQgFgEgEgDQgkgegQguQgBgEgBgDIgCgOAAdIhIAFACAFfKoQACgCACgBQAxgjAWgvIAQg3QgOAGgGAEAHRIQIgXAMAjKhaQAZgTAhgLQA6gSAbAJQAHACADAPQADAKAAASQhHgahMAqQgYANgVASIgRARQASgsAjgagAmMN+QgzhlgUiCQgdixAjjUQAHgsALgyQALgyARg+QAUhGASgxQAOgoAMgaQABgCAAgCAhxBVQAcAoAGA7QAHA8gUAsQgTAtgiADQgiAEgcgoQgcgogGg8QgGg7ATgtQAUgrAigEQAigDAbAngAirBvQAIAOgBAUQgBATgJAOQgJANgMAAQgMgBgIgOQgHgPABgTQABgUAJgNQAJgOAMABQAMAAAHAPgAhdD3QgCAegNAVQgNAUgRgBQgRgBgLgVQgLgWACgeQABgeAOgUQANgVARABQARABALAWQAKAVgBAegAoxNUQAcAeAhAaQBYBGBRALQgjgjgeg8QD/BrDHALQDJAKBRgaQAlgEBrgiQBrgjBIgzQBGg0AOgLQB3h2AIiEQAHhngkidIgih+IAUAsQAhBPAYBVQBKELgxDWQgBABAAACQBXhaAojlQAMhHAHhMIAAhAQACjUgpizQgNg4gRgvIgNgjQgtgJh4ADAsjOGQAAgCAAgCAEVJgQAiAJARASQARARAGAcAMnibIAEgtAMrCtIgDgKQgPhbAIiUIAGhPALrMpIAwgQQAzgUATgTIATAnQAUAsAJAZ");
	this.shape_21.setTransform(730.6,234.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2D2624").s().p("AAsEUIgTgoQgTATgyAVIgwAPQB2h2AIiEQAHhmgjidIghh+IATAtQAgBPAYBUQBKELgxDWQgIgZgVgsg");
	this.shape_22.setTransform(814.5,286.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E86348").s().p("AgfAZQgRgSghgIQBEgEA+gSIANgjQAHgFANgGIgPA3QgXAugvAjIgEADQgHgbgRgSg");
	this.shape_23.setTransform(766.5,295.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F4ABA5").s().p("AhDAuQgLgEgMgJIgJgHQgkgdgQguIgCgHIgCgOIAlAOQAnAKAqAFQA8AIA7gDIAAAAQAiAJARASQARAQAGAcQgWAPgXAJQghAMgkAAQgyAAg7gZg");
	this.shape_24.setTransform(750.1,299.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhEEWQgqgGgngKIglgOIgFgbIAhAJQAwAMAyAGQCMAQB0gnIgNAjQhAAShEAEIAAAAIglABQgoAAgqgFgAlsgHQgRgBgLgWQgLgWACgeQABgeAOgUQANgUARABQARAAALAWQAKAWgBAeQgCAegNAUQgNAUgQAAIgBAAgAGXhnQgNgCgHgRQgHgTADgXQADgYAMgPQAMgQANACQAOACAHASQAHASgEAYQgDAXgMAQQgKANgMAAIgDAAgAmliGQgMAAgIgPQgHgOABgUQABgTAJgOQAJgNAMAAQAMABAHAOQAIAPgBATQgBAUgJANQgJANgLAAIgBAAgAFyjPQgJgCgFgMQgFgLACgPQACgQAIgKQAIgLAKACQAJABAFAMQAFANgCAPQgCAPgIAKQgHAJgJAAIgCAAg");
	this.shape_25.setTransform(753.2,267.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AmuCAQgcgngGg8QgGg7ATgsQAUgsAigDQAigEAbAnQAcAoAGA7QAHA8gUAsQgTAtgiADIgGAAQgfAAgZglgAl/AVQgOAUgBAeQgCAeALAWQALAWARABQARAAANgUQANgUACgeQABgegKgWQgLgWgRAAIgCAAQgQAAgMATgAmyg+QgJAOgBATQgBAUAHANQAIAPAMAAQAMABAJgOQAJgMABgUQABgTgIgPQgHgOgMgBIgBAAQgMAAgIANgAFkAgQgTghgBgwQgBgvATgiQATgiAbAAQAbAAATAhQAUAhABAvQAAAxgTAhQgSAigbAAIgCAAQgaAAgTghgAGRgxQgMAPgDAYQgDAWAHATQAHARANACQAOACALgPQAMgQADgWQAEgYgHgSQgHgSgOgCIgDAAQgMAAgKAOgAFuh3QgIAKgCAQQgCAPAFALQAFAMAJACQAKABAIgKQAIgKACgPQACgPgFgNQgFgMgJgBIgDAAQgIAAgHAJg");
	this.shape_26.setTransform(752.9,251.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FDE0D9").s().p("AlSKlQg9gXgsgcIghgXQiQhmgmkAQgMhQABhWIADhFQAHgsALgyQALgxARg+QAUhIASgwIBbgSIAWiNIAKCAIA0gIQgjAagSArIARgQQAVgSAYgOQBMgqBHAbQAAgSgDgLQBLgJAuACIASjHIAsC+IGKgTIAUguIAHAAQACilADhuIBJErQgkgJgpAIIgGAKQgFAPADAXIAPgHQAUgHAVgDQBEgIA+AvQgPgXgegVIgRgKIAmgCQBJgBAYADIgGBPQgICVAPBaIADAKIAiB9QAkCdgHBnQgICEh3B2QgOAMhGAzQhIA0hrAjQhrAiglADQg2ADg0AAQjSAAidg5gAiqEaIAFAbIACAOIACAHQAQAuAkAeIAJAHQAMAKALAEQBiAqBQgdQAXgJAWgQIAEgDQAxgjAWgvIAQg3QgOAGgGAFQh0AniMgQQgygGgwgMIghgJIgFgCgADtETIAXgLgAEIAcQgBAFgFANQgGALgEAEIgNAOIgZAPIgVAJQgSAHgZAAQAZAAASgHIAVgJIAZgPIANgOQAEgEAGgLQAFgNABgFIAAgDQAAgSgMgQQgPgXgMgBIgCAAIgNgBIgBAAIAAAAIgDAAIgEABIgLABIgJACQgHABgDACQADgCAHgBIAJgCIALgBIAEgBIADAAIAAAAIABAAIANABIACAAQAMABAPAXQAMAQAAASIAAADgAl7jWQgiADgUAsQgTAsAGA8QAGA8AcAmQAcApAigEQAigDATgtQAUgrgHg8QgGg8gcgoQgYgkgfAAIgGABgACigVIAKgGQgDgHAAgRIAAgMQABgMAFgTQgFATgBAMIAAAMQAAARADAHgAF0jfQgTAiABAvQABAwATAiQAUAiAbgBQAbAAASgiQATgiAAgxQgBgvgUghQgTghgbAAQgbAAgTAig");
	this.shape_27.setTransform(751.1,261);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E3B0A1").s().p("AhqMSQjIgLj/hrQgzhlgUiBQgdiyAjjTIgDBFQgBBWAMBQQAmEACQBmIAhAXQAsAcA9AXQDDBIEWgSQg6ATh3AAQgvAAg5gDgAoElXQAfgGAVgCQgDg4AAhDQABiIASg/IATByQATCAACBGICBgQQCGgSAggCQAXjjAFikIAYB8QAbCTARB3ICrgKQCsgKA5gBIgUAuImKATIgsi+IgSDHQgugChLAJQgDgOgHgDQgbgJg6ATQghAKgZAUIg0AIIgKiAIgWCNIhbASQAOgpAMgagAIhl+IgmACQgTgKgUgFIhJkrIADhNIAnCAQApCQAMBRICCgHIAagBIgEAuIAAAAQgYgDhJABg");
	this.shape_28.setTransform(747.1,257.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#382F2C").s().p("An0OZQghgagcgeQh+iLgkj1QgHg7AAhOIABhMQAKkABQjXQhQDXgKEAIgBBMQAABOAHA7QAkD1B+CLQghgLgogVQhQgrgog2QgcAqgNBJQgGAigCAaQhYh1hIjPIg2i4Qg+j4AikmQALhcAThWIARhCQCGljF8igQC+hQCkgJQGZgvEOBzQDXBdB0DCQBTCJAZCvQANBXgEA7QgGgEgPgDQgtgJh4ADIAAgHIAAAHQB4gDAtAJIANAjQARAvANA4QApCzgCDUIAABAQgHBMgMBHQgoDlhXBaIABgDQAxjWhKkLQgYhVghhPIgUgsIgDgKQgPhbAIiUIAGhPIAAAAIAEgtIgaABIiCAGQgMhQgpiRIgniAIgDBNQgDBvgCCkIgHAAQg5ACisAJIisAKQgRh3gbiTIgYh8QgFCkgXDjQggACiFASIiBARQgChGgTiAIgThyQgSA/gBCHQAABEADA3QgVADgfAGIABgEIgBAEQgMAagOAoQgSAwgUBHQgRA+gLAyQgLAygHAsQgjDUAdCxQAUCCAzBlQAeA8AjAjQhRgLhYhGgApvgtIB+gdQBZgUA5gKQg5AKhZAUIh+AdQgLg2AAg9QAAhXAWhmQALg2ARg1IAOgpIgOApQgRA1gLA2QgWBmAABXQAAA9ALA2IAAAAgAp7liQAEAaAHAWQgHgWgEgaQgGghAAgVQAAgNACgIQgCAIAAANQAAAVAGAhgAjKhNIBGgMQAtgGAmgEQADAKAAASQhHgahMAqQgYANgVASIgRARQASgsAjgagAiQhrQA6gSAbAJQAHACADAPQgmAEgtAGIhGAMQAZgTAhgLgAJch+QgVACgUAIIgPAHQgDgXAFgPIAGgKQApgIAkAIIAEAQIAjgBIARALQAeAUAPAYQg+gvhEAIgAgxhjIAAAAgAlfhoIAAAAgAJ9iNIgEgQQAUAFATAKIgjABgAJ5idIAAAAg");
	this.shape_29.setTransform(730.6,233.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,255,0)").ss(0.2,1,1).p("AlhqSQABgBABgBAskhcQACgIALgUQAOgYAMgNQAMgLAcgoQApg7ABgCQABAAABgCAkLj8IgUgEIgCAAIALghAlwBxQgBAAAAgBQgHgKgBgDQgEgKABgZQACgXAZgeQANgOAMgKQgQgnAKhWIANhPIA2gjAgSqBIA0AVQBFAPBOgaAK1gRIglgYQgegggngjQghghgOgOQgYgYhnhBAKuAgQBdgDAVg7QAHgTgCgXIgDgTALYAAQgYgDgLgOAp4FXIBYhfQBdhhAggIQAKgCAQACQAWAEAgALQAxARA6ANQAxALA4AIIBGAJQAEAAAEABQBRAGBKgDQASgBASgBQBogJBHgcQBQghAng5ABLKMIBQAJQBgABBMglACcESIB9EcAFSDWIDHDbAqSA+Qhngkggg7QgKgTgCgTIABgPAnPIgIAPANQAVAQAZANQBRAqBgAAAglJKQgBAAgBAAIgOk+");
	this.shape_30.setTransform(731.4,404);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(0.2,1,1).p("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");
	this.shape_31.setTransform(731.2,446.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7BA3C").s().p("AAGD7IgVgTIAWkfIANE8IgOgKgAE5DkIgggLIAAAAQgIgogrirIgOg3IB+EbQgPgDgOgDgAIpByIgXgBQgdg6hPiAIgYgkIDHDaQgTAGgWAAIgDgBgApSgTIgCgUIBbhaQBhhcArgaIADAFIANAJQASALAWALIABABIgYAeQgRgCgKACQggAIhdBhIhYBeQgQgQgGgWgAAKhrIADgpIgDApIgIgBIhFgIQg4gIgxgMIANgcIgNAcQg6gNgwgQQghgMgVgDIAYgeIAAAAQBAAdBVARQBSAPBaABIA5gBQA/gCA4gHIANA0IgkADIgyABQgzAAg3gFgADKhqgAC9ieQBYgLBFgXIAfAxIgfgxQAUgGAVgKQBCgdAIgXQAPAKAUARQgnA6hQAgQhHAdhoAIg");
	this.shape_32.setTransform(725.4,436.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FDE0D9").s().p("AoOMBQgagNgUgSIgPgPQAxiyA8h8IARggIAPANQAVAQAZANQBRAqBgAAIglBtQg6CogOAkIAAACQgnAJgkAAQhBAAg2gcgABSMAIgBAAIABhSIgFi9IBQAJQBfABBNglIAECeQABAfAFBfIABAQQgiALgyAEQgZADgYAAQhEAAg5gUgArSAEQgLgHgBgRQAAgLAEgJQADgJAAgJQAAgGgIAAQgLABgLgCQgKgCgZACQgZACgfAGIguAHQgOADgLgCQgLgBgDgEIgCgHIgBgCQAAgDAEgEQAGgHANgFIAWgIIAkgKQAbgJAEgCQAFgCAFgIQgFAIgFACQgEACgbAJIgkAKIgWAIQgNAFgGAHQgEAEAAADIABACQgIgBgFgCQgFgDAAgIQAAgIAKgLIALgKIAbgSQAGgFAdgRQAWgNAGgKQgGAKgWANQgdARgGAFIgbASIgLAKIgHABQgFAAgDgDQgDgDAEgKQADgJATgPQATgQASgMIAEgDQg+AEgBgOQgCgOAQgEIAqgLIA3gPQAQgKAcgNIgBAPQACATAKATQAgA8BnAkIgCAGQgGARgMAPQgFAFgCAPQgCAMABAJQADAXgOABIgEABQgOAAgJgIgAtfi3IgfATIAfgTQAYgPAFgHQgFAHgYAPgAMSggQgKAAgQgWQgTgZgHgDQgUgKgOgOQgIgIgEgIQBdgDAVg8QAHgTgCgXIgDgTQAmADAkACQAUAAAVAHQAaAHgBAKQAAAFgcABIgkABIATAGQA+AZAAAZQAAAEgIgBQgHAAgLgEIAHAHQAQAQAAALIAAADQACADAAAEQAAAFgHADQgFACgEAAIgDAAIgEgCQhLgRgLgBIgZgBIgUABQgJAAgLADQgDABgCAGIgCAHQAAACANARQAMASAAAPQgBAUgRAAIAAAAgAOLiTQApAPAKAOQgKgOgpgPQg4gRgKgEQAKAEA4ARgANoi9QAeALAOAJQAKAHAJAHQgJgHgKgHQgOgJgegLQgagKgFgFQAFAFAaAKgANVjZIAWAGIAFABIgFgBIgWgGQgZgFgFgFQAFAFAZAFgAgQscIA0AVQBFAPBOgaQgVAjgjAcIgiADIgBABQg4gZg0g0g");
	this.shape_33.setTransform(731.2,419.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E3B0A1").s().p("ACbLBIhQgIIgCgmQBKgGBKhDIAAAAIAgAKQAOAEAOADQAXADAWgBIABBBQhKAjhdAAIgFAAgAmSJ2QgZgNgVgQIgPgMIAgg6QAlAFAtgMIABABIAPAWQAVAaAcASQAjAXAqAGIgSA0IAAAAQhgAAhRgqgAsZAKQgKgSgCgTIABgPIAlgRIgFAPQgBAKAFANQAIAVAYAdQAQATAQAMQAYASAXADIABAAIAAABQACAKgEAPQhngkggg9gAKqA+QAOgDAQgFQAYgIAQgOQANgLAJgPQAQgcgFgYIgBgDIABAAIAPACIACAAIADAUQACAWgHASQgVA9hdACQgEgHAAgHgAAipAIg0gUQgQgQgQgTIg1hJIE8ALIgKA5QgIAagOAXQgyARguAAQgaAAgZgGg");
	this.shape_34.setTransform(731.4,399.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EC4A46").s().p("AjjG8QhWgRhAgdIAAgBIgJgNQgEgKACgZQABgYAagdQAMgPANgKQgQgoAKhVIANhPIA1gkIAMgCIgMACIAAAAIgTgDQASgVANgQIAGgJIgGAJQgNAQgSAVIgDAAIALghIgLAhIADAAIgIAJIgFAFQgWAXgbAaIgBABIgmAiIgzAqIinCDQgMAJgQAJIgWAFIAAgBIgBAAQgYgDgXgSQgQgMgQgTQgZgdgIgWQACgJAKgTQAMgZAMgNQAKgNAagpIAng/QADgGAqgsQAkgnAVgsQAXgvAcgfQAPgPAJgFIAwhNQA1hPAdgXIgCABIACgBQApgYA+gcIAugTIAegNIAXBOQAHAVAJAWIAIASIAFAMQAYA0AfAwIAKAOIARAYQAVAdAZAbIAMAOQgHACgMALQgNAKgGAKQAGgKANgKQAMgLAHgCIALAMIAPAQIAaAcIADACQgFADgKAPQgKAPgDAJIATASIAHAFQAcAaAYARIAUAPQAGgFAIgIQARgSAUghIAJgQIAFgHQAPgaALgYIAFgQIAHgWQgJgNgSgKIgRgIIARAIQASAKAJANIgHAWQgGgHgTgOIgSgMIASAMQATAOAGAHIgFAQQgLAYgPAaIgRgOQgPgLgGgHIAPgnIAGgPIAFgNIAGgUQAJgjAHgkIARALQATAMAHAJQgHgJgTgMIgRgLIABgHIACgPQAGgqABgtIAPAFQATAHALAJIAAgMIAAgMIgBgJIABAJIAAAMIAAAMQgLgJgTgHIgPgFIAAgcQAAgygGg2IApAUQBMAqAcAWQAbAWBaBwQBGBYAqA5IBYB7QA8BYARAaIAKAMIALAPIABADQAEAYgQAdQgIAPgOALQgLAHgNAFQgYgDgKgPIAAAAIglgXQgfghgmgjIgvguQgZgYhmhCIAAAIIAEAoQADAmgBAEQADA3ABA0QAIAcgYAUQAPAagKAUQgFAKgGAGIgBACQgIAXhCAdQgVAKgTAGQhGAXhYALQg3AHhAACIg3ABQhcgBhRgPgAE8E8QglAHgtADIglABIAlgBQAtgDAlgHQA6gLAZgVQgZAVg6ALgAGTAUIACATIgCgTQgGhAgHg0QAHA0AGBAgAAnAAQglghgcgiQAcAiAlAhgAgahDIgOgPIAOAPgAgRhmQgQANgHAHQAHgHAQgNQAOgLADgBQgDABgOALgAhjikQATAfAQAUIAYAfIgYgfQgQgUgTgfQAEgFAOgKIASgPIgSAPQgOAKgEAFIAAAAgADwheQAJgiAGgkQgGAkgJAigAGGhgQgSiHgdg1QAdA1ASCHgAGGhgQADgKAVgbQgVAbgDAKgAD/ikIAFgbIgFAbgAhui4IALAUIgLgUIAlgYIglAYIAAAAgAikkpQAUAyAZAvIAJAQIgJgQQgZgvgUgyQADgFAMgIIAQgKIgQAKQgMAIgDAFIgIgVIAfgUIgfAUQgXg+gPhCQAPBCAXA+IAIAVgADpjTQASAJAJALQAGgtABgwQgBAwgGAtQgJgLgSgJIgSgHgAEKk9IgJhkIAJBkQgIgHgTgFIgRgEIARAEQATAFAIAHgAB1BCIAAgyIAJAMIAHgKQAKgQAKgTQAHAIAcAaQgcgagHgIIALgVQAGAHAPALIARAOIgFAHIgJAQQgUAhgRASQgFgJgDgNQgDgMgHgQQAHAQADAMQADANAFAJQgIAIgGAFIgUgPgACXBEIAAAAgABBAXIgHgFQACgHAJgNIAOgVQAVAXANAQIAAAyQgYgRgcgagAknAcgAA6ASIgTgSQADgJAKgPQAKgPAFgDIAQATIgOAVQgJANgCAHIAAAAgABTgXIAAAAgADphIIAAAAgADwheIAAAAgAEKk9IAAAAgAisk+IAAAAg");
	this.shape_35.setTransform(732.2,375.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D53733").s().p("AmPFtIgNgJIgDgGQgOgjAUgcQAKgPAPgGQgIhEALhDIAEgQIAmgiIABgBQAbgZAWgXIAFgGIAIgJIATAEIAAAAIg1AkIgNBOQgKBWAQAnQgNALgMAOQgaAegBAXQgCAZAEALIAJAMQgXgKgSgLgAkcAaIAbgFIgbAFgAKJERQgigVgcgTQhgg+g9g0QABgFgDglIgEgpIAAgHQBnBCAYAYIAvAuQAmAjAfAgIAlAYIAAAAQALAPAXADQANgGALgGQgQANgXAJQgQAFgPADIgJABgAr5C5IAEgQQARgxAthMIAZgqQAmg6AggeQAfgdBXh2QBOhsAmgbQALgIANgIIACgCQgdAYg1BPIgwBMQgJAGgPAPQgcAfgXAuQgVAtgkAmQgqAtgDAFIgnA/QgaAqgKAMQgMAOgMAYQgKAUgCAIQgEgNABgJg");
	this.shape_36.setTransform(730.3,376.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(0,0,255,0)").ss(0.2,1,1).p("AoallIBdgMIAfiLIABCAIA1gFIBGgIQAugEAmgCQBMgDAuAEIAejGIAfDBIGLAFIAYgtAGorNIA3EvIACAQIAkABIAmABQBJADAXAFAqBglIgHBEQgGBWAHBQQAWECCJBqIAhAVQArAZA8AbQCVBCCCAKQCCAKA8gC");
	this.shape_37.setTransform(753.1,262.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.2,1,1).p("AoPoiIgRApQgUAzgOA1QgwCsASCCICAgUQBagPA5gGQAggEAVgCQAAg3AFhEQAJiHAWg+IAMBzQALCBgCBHICBgJQCGgKAgAAQAmjhAOikIAQB+QATCVAJB3ICsABQCtABA5ACQADAAADAAQANikAKhvIAHhMIAfCCQAgCTAHBRICDABQANABAMAAQB4AEAtAMQAOAEAGAFQAIg7gHhYQgOivhLiPQhojIjShqQkFiEmbAWQikgBjEBEQmFCJibFZIgVBDQgYBUgRBbQg0EjAvD8IAqC6QA7DTBRB7QADgbAJghQARhIAfgpQAlA5BNAwQAmAYAhAMQh1iTgVj2QgGhVANiAQAaj+BcjSApRlmQgFgXgDgaQgHg2AIgVAKzhzQgSgLgUgGQgkgLgoAGIgHAJQgGAPABAXIAQgGQAUgHAVgBQBFgEA6AzQgOgYgcgXQgIgGgIgFgAJ4AqQAbACARAiQASAjgCAvQgDAwgVAhQgUAhgbgCQgbgBgRgiQgSgjACgwQACgwAVggQAVghAbABgAJTBVQAKgJAJACQAJACAEAMQAEAMgDAPQgDAQgIAJQgJAKgJgCQgJgCgFgMQgEgMADgQQADgPAIgKgAi5hoQAZgSAigIQA8gPAZALQAHADADAOQABALgBASQhEgfhPAlQgYAMgXARIgRAPQAVgqAkgYgAAGI2IAfAOQAoAPAuAIQCVAdCegqAKPD3QgNAOgNgCQgNgDgGgSQgGgTAFgXQAEgYANgPQAMgOAOADQANACAGATQAGASgFAXQgEAYgNAPgAF8C+QgGAUgCAMQgDAZAEAKQADgBAHgBQAHgCACAAQABAAAKAAQAKAAANACQAMABANAYQAMAUgDATQAAAGgHALQgGALgEAEQgGAHgIAGQgQAKgJAEQgJAEgNAEQgSAFgagBAFqEHIALgGAlNiMQACgCAAgCAm+NRQgnhigLh3QgSi0AvjQQAKgsAOgxQAOgxAVg9QAYhFAVgwQAQgnAOgZAi5BTQAMABAHAOQAGAPgCAUQgCATgKANQgKANgMgBQgMgCgGgOQgHgPACgUQADgTAJgNQAKgNAMACgAhrBMQAZAqACA8QADA8gWAqQgWAsgiABQgiACgZgqQgagpgCg9QgCg7AVgrQAXgrAigCQAigBAZApgAiCCjQARACAJAWQAKAWgDAeQgEAegOAUQgOATgRgCQgRgCgKgWQgJgWADgeQAEgeANgUQAPgTARACgApZMuQAaAgAeAcQBVBLBQAQQghglgag+QgEgJgDgIQDlB0CsAZQCrAZA9gDQA8gDAsgKQAlgBBtgcQBtgcBKgvQBKgwBghYQAxhHAKhPQANhmgaifIgaiAIARAuQAcBRASBWQA6EPg+DTQgBABAAACQBchWA2jhQARhGALhMIAEhAQAPjTgei3QgKg3gNgvIgLglAtONSQAAgCAAgCAMqDcIgCgKQgKhbAQiTIAMhOIAGguAMWL3QghAvgzAtIAxgNQA1gRAUgSIAQApQASAtAHAa");
	this.shape_38.setTransform(735.6,234.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2D2624").s().p("AApEUIgRgoQgUARgzARIgxANQAzgtAhguQAvhIAKhPQANhlgZieIgbiAIASAtQAbBSATBVQA6EOg/DTQgHgagRgtg");
	this.shape_39.setTransform(816,291.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Al1ByQgRgCgKgWQgJgWADgeQAEgeANgTQAPgTARACQARACAJAWQAKAVgDAeQgEAegOAUQgNASgPAAIgDgBgAGSBDQgNgDgGgSQgGgTAFgXQAEgXANgPQAMgOAOADQANACAGATQAGASgFAWQgEAYgNAPQgLAMgLAAIgEAAgAmngOQgMgCgGgOQgHgPACgUQADgTAJgNQAKgNAMACQAMABAHAOQAGAPgCAUQgCATgKANQgJAMgLAAIgCAAgAF0gnQgJgCgFgMQgEgMADgQQADgPAIgKQAKgJAJACQAJACAEAMQAEAMgDAPQgDAQgIAJQgHAIgIAAIgDAAg");
	this.shape_40.setTransform(758.3,253.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Am3BoQgZgpgDg8QgCg7AWgrQAWgrAjgCQAigBAYAqQAaApACA8QADA7gXAqQgVAsgjABIgCABQggAAgZgpgAmCAAQgOAUgDAeQgEAdAJAWQAKAXARABQARACAOgTQAPgUADgdQAEgegKgXQgKgUgRgDIgDAAQgPAAgNARgAmvhWQgKANgCATQgCAUAGAPQAHAPAMABQAMABAKgMQAJgNACgUQADgUgHgPQgGgOgMgBIgDAAQgKAAgJALgAGMBcQgbgCgRgiQgRgiACgwQACgwAUggQAVghAcACQAbABARAjQARAjgCAuQgCAwgVAgQgTAggaAAIgDAAgAGRgWQgMAPgFAWQgFAXAGATQAGASANADQAOACAMgOQANgPAFgYQAFgWgGgSQgGgSgOgDIgEgBQgLAAgLANgAFzheQgIAJgEAQQgCAPADAMQAFAMAJACQAKACAIgKQAJgJACgPQAEgQgEgMQgEgMgKgCIgDAAQgHAAgIAIg");
	this.shape_41.setTransform(758.1,252.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDE0D9").s().p("AhWLGQiDgKiVhCQg7gbgrgZIghgVQiKhqgVkCQgHhQAFhWIAHhEQAKgsAOgxQAOgxAVg8QAYhHAVgvIBcgMIAfiLIACCAIA1gFQgkAYgVAqIARgQQAXgQAYgMQBPgmBEAfQABgSgBgLQBMgDAtAEIAfjGIAfDBIGLAFIAXgtIAGAAQANikAKhuIA2EvQgkgKgoAFIgHAKQgGAOABAYIAQgHQAUgGAVgBQBFgEA6AzQgOgZgcgWIgQgMIAmABQBKADAXAFIgMBOQgQCUAKBcIACAKIAaB/QAaCegNBnQgKBOgxBIQhgBYhKAwQhKAvhtAcQhtAbglACIgXAAQg7AAhrgIgAA7FOQBXAABbgYIADgBIACAAIgCAAIgDABQhbAYhXAAIgBAAIAAAAQg6AAg6gLIgCAAIAAAAIAAAAIgEgBQgugIgogQIgfgNIAfANQAoAQAuAIIAEABIAAAAIAAAAIACAAQA6ALA6AAIAAAAIABAAgAChBtQASAAANgEIABgBIABAAIAWgIQAJgEAQgJQAIgGAGgHQAEgEAGgMQAHgLAAgFIABgHQAAgQgKgPQgNgYgMgCQgNgCgKAAIgLABIgJABIAAAAQgHABgDACQgCgGAAgLIABgTQACgMAGgTQgGATgCAMIgBATQAAALACAGQADgCAHgBIAAAAIAJgBIALgBQAKAAANACQAMACANAYQAKAPAAAQIgBAHQAAAFgHALQgGAMgEAEQgGAHgIAGQgQAJgJAEIgWAIIgBAAIgBABQgNAEgSAAIAAAAIgBAAIgJgBIgBAAIABAAIAJABIABAAIAAAAgAlij0QgiABgXArQgVArACA8QACA9AaAnQAZAqAigBQAigCAWgqQAWgrgDg8QgCg8gZgpQgYgoggAAIgDAAgAGMjPQgVAhgCAwQgCAwASAiQARAjAbABQAbABAUggQAVghADgwQACgvgSgjQgRgjgbgBIgCAAQgaAAgUAfgACugSIALgFg");
	this.shape_42.setTransform(754.4,262.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E3B0A1").s().p("AjSL8Qisgajlh0QgnhhgLh4QgSizAvjRIgHBFQgFBWAHBQQAVECCKBqIAhAVQArAZA7AbQCVBCCDAKQCBAKA8gCQgsAJg8AEIgPAAQg/AAiagWgAnylvIA1gGQAAg3AFhDQAJiHAWg+IAMBzQALCBgCBGICBgJQCHgJAggBQAmjhAOijIAQB9QATCVAIB3ICsABQCtABA5ACIgXAtImLgFIgfjBIgfDGQgtgEhMADQgDgOgHgDQgZgLg8APQgiAJgZASIg1AFIgCiAIgfCLIhcAMQAQgoAOgZgAI0lVIgmgBQgSgKgUgHIg2kvIAHhNIAfCDQAgCSAHBSICDABIAZABIgGAtQgXgFhKgDg");
	this.shape_43.setTransform(752.1,256.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#382F2C").s().p("AohOCQgegcgaggQh1iTgVj2QgCgZAAgdQAAhFAJhaQAaj+BcjSQhcDSgaD+QgJBaAABFQAAAdACAZQAVD2B1CTQghgMgmgYQhNgwglg5QgfApgRBIQgJAhgDAbQhRh7g7jTIgqi6Qgvj8A0kjQARhbAYhUIAVhDQCblZGFiJQDEhECkABQGbgWEFCEQDSBqBoDIQBLCPAOCvQAHBYgIA7QgGgFgOgEQgtgMh4gEIgZgBIiDgBQgHhRggiTIgfiCIgHBMQgKBvgNCkIgGAAQg5gCitgBIisgBQgJh3gTiVIgQh+QgOCkgmDhQggAAiGAKIiBAJQAChHgLiBIgMhzQgWA+gJCHQgFBEAAA3Ig1AGIACgEIgCAEQgOAZgQAnQgVAwgYBFQgVA9gOAxQgOAxgKAsQgvDQASC0QALB3AnBiIAHARQAaA+AhAlQhQgQhVhLgApghLICAgUQBagPA5gGQg5AGhaAPIiAAUQgFgkAAgoQAAhmAjh8QAOg1AUgzIARgpIgRApQgUAzgOA1QgjB8AABmQAAAoAFAkIAAAAgApZl/QADAaAFAXQgFgXgDgaQgDgaAAgTQAAgTAEgLQgEALAAATQAAATADAagANlOrQA+jTg6kPQgShWgchRIgRguIgCgKQgKhbAQiTIAMhOIAGguQB4AEAtAMIALAlQANAvAKA3QAeC3gPDTIgEBAQgLBMgRBGQg2DhhcBWIABgDgAi5hQIBGgIIBUgFQABALgBASQhEgfhPAlQgYAMgXARIgRAPQAVgqAkgYgAJuhQQgVABgUAHIgQAGQgBgXAGgPIAHgJQAogGAkALIACAQIAkABIAQALQAcAXAOAYQg6gzhFAEgAh+hqQA8gPAZALQAHADADAOIhUAFIhGAIQAZgSAigIgAKzhbgAKPhcIgCgQQAUAGASALgAgfhdIAAAAg");
	this.shape_44.setTransform(735.6,231.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(0,0,255,0)").ss(0.2,1,1).p("AlYqTQABAAAAgBAowmSQAYgpAcgbAschcQACgIALgUQAOgYAMgNQAMgLAcgoQApg7ABgCQADgDAUgTAloBxQgBAAAAgBQgHgKgBgDQgEgKABgZQACgXAZgeQANgOAMgKQgQgnAKhWIANhMIAAgDIAHgEIAvgfAkDj8IgQgDIgGgBIALghAgKqBIA0AVQBFAPBOgaAK9gRIglgYQgegggngjQghghgOgOQgYgYhnhBAKjArQBdAAAWg8QAGgPAAgRIAAAAQABgEgBgFIgCgUALgAAQgYgDgLgOApwFXIBYhfQBdhhAggIQAKgCAQACQAWAEAgALQAxARA6ANQAxALA4AIIBGAJQAEAAAEABQBRAGBKgDQASgBASgBQBogJBHgcQBQghAng5ABTKMIBQAJQBgABBMglACkESIB9EcAFaDWIDHDbAqBBDQhogjghg7QgKgTgCgTIAAgQAnHIgIAPANQAVAQAZANQBRAqBgAAAgdJKQgBAAgBAAIgOk+");
	this.shape_45.setTransform(730.6,404);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.2,1,1).p("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");
	this.shape_46.setTransform(730.7,446.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FDE0D9").s().p("AoJMBQgagNgUgSIgPgPQAxiyA8h8IARggIAPANQAVAQAZANQBRAqBgAAIglBtQg6CogOAkIAAACQgnAJgkAAQhBAAg2gcgABXMAIAAAAIAAhSIgFi9IBQAJQBgABBMglIAECeQABAfAFBfIABAQQgiALgyAEQgZADgYAAQhEAAg5gUgArDAJQgLgIgBgQQgBgLAEgJQAEgJgBgJQAAgGgIAAQgLABgKgCQgLgBgZACQgYACggAGIgtAIQgOADgLgBQgMgBgCgFQgDgEAAgCIgBgCQAAgDAEgEQAFgHAOgFQANgGAKgCIAkgLIABAAIAdgMQAFgCAFgIQgFAIgFACIgdAMIgBAAIgkALQgKACgNAGQgOAFgFAHQgEAEAAADIABACQgIAAgFgDQgFgCAAgIQgBgIALgMIAKgKIAbgTIABAAIAjgWQAVgNAGgKQgGAKgVANIgjAWIgBAAIgbATIgKAKIgHABQgFAAgEgCQgDgEAEgJQAEgJASgQQATgQASgMIAFgDQg/AEgCgOQgBgOAPgEIArgLIA3gQQAPgKAagOIABgBIAAAQQACATAKATQAhA8BoAjIgCAFQgGARgLAPQgFAGgCAOQgCANABAIQADAYgOABIgDAAQgOAAgKgHgAtSiwIgeAUIAegUQAXgPAGgIQgGAIgXAPgAMBgTQgKAAgQgWQgRgZgIgEQgTgLgOgOQgIgIgDgIQBdAAAWg9QAGgOAAgSIAAAAIAAgJIgCgUIAMACQAfAEAfACQAUABAVAHQAZAIgBAKQAAAEgdABIgjAAIATAHQA9AagBAZQAAAEgIgBQgHAAgLgEIAHAHQAQAPgBALIAAADQgJgNgpgQIhBgXIBBAXQApAQAJANQACAEAAAEQAAAFgHADQgGACgDAAIgEgBIgEgCQhJgTgLgBIgagCIgUABQgJAAgLADQgDAAgCAHIgCAGQAAACAMASQAMASgBAPQgBATgPAAIgCAAgANbiuQAeANANAJQALAHAIAIQgIgIgLgHQgNgJgegNQgagKgFgFQAFAFAaAKgANJjKIAWAGIAFACIgFgCIgWgGQgZgGgFgFQAFAFAZAGgAgLscIA0AVQBFAPBOgaQgVAjgjAcIgiADIgBABQg4gZg0g0g");
	this.shape_47.setTransform(730.7,419.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E3B0A1").s().p("ACgLBIhQgIIgCgmQBKgGBKhDIAAAAIAgAKQAOAEAOADQAXADAWgBIABBBQhKAjhdAAIgFAAgAmNJ2QgZgNgVgQIgPgMIAgg6QAlAFAtgMIABABIAPAWQAVAaAcASQAjAXAqAGIgSA0IAAAAQhgAAhRgqgAsNAQQgKgSgCgTIAAgPIAlgRQgEAKAAAEQgBALAFANQAIAUAZAdQANAQAOALQAaAVAbAEIABgBQACAMgEAOQhogighg9gAKcBIQAOgBARgGQAcgJASgRQAJgJAHgLQAQgcgEgXIAAgEIAAAAIASADIACAUIAAAIIAAAAQAAARgGAPQgWA8hdAAQgFgIABgHgAAnpAIg0gUQgQgQgQgTIg1hJIE8ALIgKA5QgIAagOAXQgyARgtAAQgbAAgZgGg");
	this.shape_48.setTransform(730.9,399.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EC4A46").s().p("AjeG8QhWgRhAgdIgBgBIgIgNQgEgKACgZQABgYAagdQAMgPANgKQgQgoAKhVIAMhNIgVAWIgBABIguApIgrAlIikCEQgMAKgQAIIgNAGIgKAAIgBAAQgbgEgagVQgOgLgNgQQgYgcgIgWQABgJAJgVQAMgXAMgPQAKgMAZgqIAmg/IAtgyQAkgoAVgsQAWgwAcgfQANgPAKgGIAvhNQAzhOAcgYIACgBQApgYA+gcIAtgTIAfgNIAXBOQAHAVAJAWIAIASIAFAMQAYA0AfAwIAKAOIAQAYQAWAdAXAbIANAOQgGACgMALQgNAKgHAKQAHgKANgKQAMgLAGgCIAMAMIAPAQIAaAcIACACQgEADgKAPQgLAPgCAJIATASIAHAFQAcAaAXARIAVAPQAGgFAIgIQAQgSAVghIAJgQIAFgHQAPgaALgYIAFgQIAGgWQgJgNgRgKIgSgIIASAIQARAKAJANIgGAWQgGgHgTgOIgTgMIATAMQATAOAGAHIgFAQQgLAYgPAaIgRgOQgPgLgHgHIAQgnIAGgPIAEgNIAGgUQAKgjAGgkIASALQASAMAIAJQgIgJgSgMIgSgLIABgHIADgPQAFgqACgtIAPAFQATAHALAJIAAgMIAAgMIgBgJIABAJIAAAMIAAAMQgLgJgTgHIgPgFIAAgcQAAgygGg2IApAUQBLAsAbAXQAbAXBXByQBDBaApA6IBUB9QA7BZAPAbIAKAMIAKAPIABAEQAEAYgRAcQgHALgJAJIgMAFQgYgDgKgPIgBAAIgkgXQgfghgmgjIgvguQgZgYhnhCIACAYIAAAAIAAABIAFBSIAEBaQAIAcgYAUQAPAagKAUQgFAKgGAGIgBACQgIAXhCAdQgVAKgTAGQhGAXhYALQg3AHhAACIg3ABQhcgBhRgPgAFBE8QglAHgtADIglABIAlgBQAtgDAlgHQA6gLAZgVQgZAVg6ALgAlFBFIAHgGIgHAGgAklAkIgFAGIgUAVIgGAEIgBACIABgCIAGgEIAvggIAMgCIgMACIAAAAIgQgCQATgWANgSIAGgJIgGAJQgNASgTAWIgGgBIALghIgLAhIAGABIgGAHgAGYAUIABATIgBgTQgGhAgHg0QAHA0AGBAgAAsAAQglghgdgiQAdAiAlAhgAgWhDIgNgPIANAPgAgMhmQgQANgHAHQAHgHAQgNQANgLACgBQgCABgNALgAheikQATAfAQAUIAYAfIgYgfQgQgUgTgfQAEgFAOgKIASgPIgSAPQgOAKgEAFIAAAAgAD0heQAKgiAGgkQgGAkgKAigAGLhgQgTiHgcg1QAcA1ATCHgAGLhgQADgKAVgbQgVAbgDAKgAEEikIAEgbIgEAbgAhpi4IALAUIgLgUIAlgYIglAYIAAAAgAifkpQAUAyAZAvIAJAQIgJgQQgZgvgUgyQADgFAMgIIAQgKIgQAKQgMAIgDAFIgJgVIAggUIggAUQgWg+gQhCQAQBCAWA+IAJAVgADujTQASAJAIALQAHgtABgwQgBAwgHAtQgIgLgSgJIgSgHgAEPk9IgJhkIAJBkQgIgHgTgFIgRgEIARAEQATAFAIAHgAB5BCIABgyIAJAMIAHgKQAKgQAKgTQAGAIAdAaQgdgagGgIIAKgVQAHAHAPALIARAOIgFAHIgJAQQgVAhgQASQgFgJgDgNQgDgMgHgQQAHAQADAMQADANAFAJQgIAIgGAFIgVgPgACcBEIAAAAgABGAXIgHgFQACgHAJgNIAOgVQAVAXANAQIgBAyQgXgRgcgagAkfAdgAA/ASIgTgSQACgJALgPQAKgPAEgDIARATIgOAVQgJANgCAHIAAAAgABYgXIAAAAgADuhIIAAAAgAD0heIAAAAgAoIi5QgeAogWAcQAYgpAcgbgAEPk9IAAAAgAiok+IAAAAg");
	this.shape_49.setTransform(731.7,375.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D53733").s().p("AmMFtIgOgJIgCgGQgPgjAUgcQALgPAOgGQgIhEAMhDIACgJIAtgpIABgBIAWgVIgNBMQgKBWAQAnQgMALgNAOQgZAegCAXQgBAZAEALIAIAMQgXgKgRgLgAJ5EaQgigVgbgUQhTg4g4gxIgFhTIgBgBIABABIgCgYQBnBCAYAYIAvAuQAnAjAeAgIAlAYIAAAAQALAPAYADIAMgGQgSARgcAKQgRAFgOACIgJABgArwC9QAAgDAEgKQARgyArhNQAWgmATgcQAcgqAYgYQAPgNAZggQAWgbAegpIAAAAIAZgiQBNhtAlgdIAagSIgBABQgdAYgzBPIgvBNQgJAFgOAQQgcAfgWAwQgVAsgjAoIgtAxIgmBAQgZAqgLAMQgLAOgMAYQgKAVgBAIQgFgNABgLgAkaAgIAGgHIAWgEIAAAAIgvAfIATgUgAkOASIAQADIgWAEIAGgHg");
	this.shape_50.setTransform(730.1,376.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(0,0,255,0)").ss(0.2,1,1).p("AJ8mkIAAABQgYgDhJABIgmACIgjABIgEgQIhJkrAokk7IBbgSIAWiNIAKCAIA0gIIBGgMQAtgHAmgEQBLgJAuACIASjHIAsC+IGKgTIAUguAp4AKIgDBFQgBBWAMBQQAmEACQBmIAhAXQAsAcA9AXQDDBIEWgS");
	this.shape_51.setTransform(747.7,261);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.2,1,1).p("Apwk/QgHgWgEgaQgKg1AGgWAo6n+IgOApQgRA1gLA2QgmCuAbCCIB+gdQBZgUA5gKQAfgGAVgDQgDg3AAhEQABiHASg/IATByQATCAACBGICBgRQCFgSAggCQAXjjAFikIAYB8QAbCTARB3ICsgKQCsgJA5gCQAEAAADAAQACikADhvIADhNIAnCAQApCRAMBQICCgGQANgBANAAIAAgHAPQjCQAPADAGAEQAEg7gNhXQgZivhTiJQh0jCjXhdQkOhzmZAvQikAJi+BQQl8CgiGFjIgRBCQgTBWgLBcQgiEmA+D4IA2C4QBIDPBYB1QACgaAGgiQANhJAcgqQAoA2BQArQAoAVAhALQh+iLgkj1QgLhVAFiAQAKj/BQjYAJ5iqQgkgIgpAIIgGAKQgFAPADAXIAPgHQAUgIAVgCQBEgIA+AvQgPgYgegUQgIgGgJgFQgTgKgUgFgAJBAoQATgiAbAAQAbAAATAhQAUAiABAvQAAAwgTAiQgSAigbAAQgbABgUgiQgTghgBgwQgBgvATgjgAJNAzQAIgKAKABQAJACAFAMQAFAMgCAPQgCAQgIAJQgIALgKgCQgJgBgFgMQgFgLACgQQACgPAIgLgAKJBsQAOACAHARQAHASgEAYQgDAYgMAQQgLAOgOgBQgNgCgHgSQgHgSADgYQADgYAMgPQAMgPANACgAFvDzIAKgGQgEgKABgaQABgMAFgUAF5DtQADgCAHgCQAIgCABAAQABAAAKgBQAKAAANABQAMAAAPAXQANATgBATQgBAGgFAMQgGAMgEAEQgGAHgHAHQgQAKgJAFQgJAEgMAFQgSAGgZABAGmImQh0AniNgPQgygHgwgLIghgJIAFAbIAlAOQAnAKAqAFQA9AIA7gDIAAAAQBEgEBAgTgAAdIhIAFACAFfKoQgWAPgXAJQhQAehjgrQgLgEgMgJQgFgEgEgDQgkgegQguQgBgEgBgDIgCgOAFfKoQACgCACgBQAxgjAWgvIAQg3QgOAGgGAEAHRIQIgXAMAjKhaQAZgTAhgLQA6gSAbAJQAHACADAPQADAKAAASQhHgahMAqQgYANgVASIgRARQASgsAjgagAmMN+QgzhlgUiCQgdixAjjUQAHgsALgyQALgyARg+QAUhGASgxQAOgoAMgaQABgCAAgCAhxBVQAcAoAGA7QAHA8gUAsQgTAtgiADQgiAEgcgoQgcgogGg8QgGg7ATgtQAUgrAigEQAigDAbAngAirBvQAIAOgBAUQgBATgJAOQgJANgMAAQgMgBgIgOQgHgPABgTQABgUAJgNQAJgOAMABQAMAAAHAPgAhdD3QgCAegNAVQgNAUgRgBQgRgBgLgVQgLgWACgeQABgeAOgUQANgVARABQARABALAWQAKAVgBAegAoxNUQAcAeAhAaQBYBGBRALQgjgjgeg8QD/BrDHALQDJAKBRgaQAlgEBrgiQBrgjBIgzQBGg0AOgLQB3h2AIiEQAHhngkidIgih+IAUAsQAhBPAYBVQBKELgxDWQgBABAAACQBXhaAojlQAMhHAHhMIAAhAQACjUgpizQgNg4gRgvIgNgjQgtgJh4ADAsjOGQAAgCAAgCAEVJgQAiAJARASQARARAGAcAMnibIAEgtAMrCtIgDgKQgPhbAIiUIAGhPALrMpIAwgQQAzgUATgTIATAnQAUAsAJAZ");
	this.shape_52.setTransform(730.6,234.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#382F2C").s().p("An0OZQghgagcgeQh+iLgkj1QgHg7AAhOIABhMQAKkABQjXQhQDXgKEAIgBBMQAABOAHA7QAkD1B+CLQghgLgogVQhQgrgog2QgcAqgNBJQgGAigCAaQhYh1hIjPIg2i4Qg+j4AikmQALhcAThWIARhCQCGljF8igQC+hQCkgJQGZgvEOBzQDXBdB0DCQBTCJAZCvQANBXgEA7QgGgEgPgDQgtgJh4ADIAAgHIAAAHIgaABIiCAGQgMhQgpiRIgniAIgDBNQgDBvgCCkIgHAAQg5ACisAJIisAKQgRh3gbiTIgYh8QgFCkgXDjQggACiFASIiBARQgChGgTiAIgThyQgSA/gBCHQAABEADA3QgVADgfAGIABgEIgBAEQgMAagOAoQgSAwgUBHQgRA+gLAyQgLAygHAsQgjDUAdCxQAUCCAzBlQAeA8AjAjQhRgLhYhGgApvgtIB+gdQBZgUA5gKQg5AKhZAUIh+AdQgLg2AAg9QAAhXAWhmQALg2ARg1IAOgpIgOApQgRA1gLA2QgWBmAABXQAAA9ALA2IAAAAgAp7liQAEAaAHAWQgHgWgEgaQgGghAAgVQAAgNACgIQgCAIAAANQAAAVAGAhgAORNrQAxjWhKkLQgYhVghhPIgUgsIgDgKQgPhbAIiUIAGhPIAAAAIAEgtQB4gDAtAJIANAjQARAvANA4QApCzgCDUIAABAQgHBMgMBHQgoDlhXBaIABgDgAjKhNIBGgMQAtgGAmgEQADAKAAASQhHgahMAqQgYANgVASIgRARQASgsAjgagAiQhrQA6gSAbAJQAHACADAPQgmAEgtAGIhGAMQAZgTAhgLgAJch+QgVACgUAIIgPAHQgDgXAFgPIAGgKQApgIAkAIQAUAFATAKIgjABIgEgQIAEAQIAjgBIARALQAeAUAPAYQg+gvhEAIgAgxhjIAAAAgAlfhoIAAAAg");
	this.shape_53.setTransform(730.6,233.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.2,1,1).p("Aldw6QgBAAgBABQgNAIgLAIQglAchPBsQhWB1ggAdQggAegmA8QgMATgNAWQgsBNgRAxQgEALgBAEQgBAKAFANQAIAWAYAdQAQATAQAMQAXARAYAEQABAAAAAAIAAABQACAKgEAPQgBACgBADQgGASgMAOQgFAGgCAPQgCAMABAIQADAZgOABQgRABgKgIQgLgJgBgQQAAgLAEgKQADgJAAgJQAAgFgIAAQgLAAgLgCQgKgBgZACQgZACgfAFQghAGgNACQgOACgLgBQgLgBgDgFQgCgEAAgCQgDgEAGgGQAGgGANgGQANgFAJgCQAJgDAbgIQAbgIAEgDQAFgCAFgIAldw6QApgYA/gcQAYgKAVgJQAQgHAPgGIgDgIIBHADIE8ALIAKABIACAPIAoAUQBMAqAdAWQAbAWBaBwQBFBYArA5QAZAjA+BZQA9BXARAbIAKAMQAHAJADAGIABAAQAHABAHABQACAAABAAQAmAEAkABQAUABAVAGQAaAIgBAKQAAAEgcACQgfAAgFAAQAKADAJAEQA+AZAAAZQAAADgIAAQgHAAgLgEQAEADADAEQAQAPAAALIAAADQACAEAAAEQAAAEgHADQgFADgEAAQgCgBgBAAQgDgBgBAAQhLgSgLAAQgLgBgOgBIgUACQgJAAgLADQgDAAgCAHQgBAEgBADQAAACANARQAMARAAAQQgBAUgRgBQgKAAgQgWQgTgYgHgEQgUgKgOgOQgIgIgEgIQgEgHAAgHQgFABgEAAIgjgUQgigVgbgSQhhg+g9g1QADA3ABA0QAIAcgYAUQAPAZgKAVQgFAKgGAGQAAABAAABQAPAJAUASQArAmBCBJQAwA2AmAwQgIBkhOAaQgEACgEABQgVAGgXgBIgXgBIgBAAQggB3hvAEAiiwBQAEALAEAKQADgFAMgIQAGgEAKgGQgEgJgEgJQgVAOgKAGgAipyOIAXBOQAGAVAJAWAjIyBQAPBCAXA+ABcvbQg4gYg0g0QgQgQgQgTIg1hJAh7wDQADAGADAGQAXA0AfAwQAFAHAFAHQAIAMAJAMIAjgnQAYgZAbgTQAVgPAVgMQABAAAAAAIAigDQAjgdAVgjQAOgXAIgaIAKg5At+mvQg+ADgBgOQgCgOAQgEQAQgEAagGQAagHAdgIQAQgLAcgNIAlgRAg/uTQgDABgiAXQgEgIgFgIQgZgvgUgyAhZtnQAFgFANgLQAPgMADgCAgesVQgNgQgLgPQgQgUgTgfAhkt7QAGALAFAJAklqdQAEgFAEgEQASgVANgSQAEgFACgEAmBpFQAUgRARgRQABAAABgBQAbgZAVgXQADgDACgCQANgDAOgDIABAAQAFgBAGgBAmnlaQgPgjAUgbQALgPAOgHQgIhEAMhDIAEgQQgYAVgbAWQieB7gJAHQgMAKgQAIIgXAGAEUwAQgIgHgSgFIgRgFIgBAdIAQAFQASAHALAJQgBAvgGAuQgIgLgSgJIgTgHIgCAPQgBAEAAADIASAKQASANAIAJQgHAjgJAjQgDALgEALQgCAIgDAIQgLAYgPAaQgCAEgCAEQgFAIgFAIQgUAhgRASQgHAIgHAFQgJgHgLgIQgXgSgdgZQgDgDgEgDQACgGAKgOQAJgOAEgHQAVAXANARQAFAGAEAGQAEgFADgGQALgPAKgUQAFgKAFgLQAGAGAPAMQAOAKADAEAEUwAIABAJQAAAMAAAMAELxkIAJBkADjx4QAGA2AAAxADOtAIARAIQASAKAJANADIstQADgKADgJQAKgjAGgkAC+sQQACgHADgIQADgHACgHIASANQAUANAFAIAEOuCQgCAOgCANADfuOQgNgUgrggIgEgDIgUBbIABAAIACAAIAsBaAB/veIAkAZAgQsGQAGgKANgLQAMgKAHgCQgHgHgGgHQgDABgNALQgQANgHAHAAWsnQAFAGAGAGIAPAQQAHgRAIgTQAQgpAGgLIAVgCIAPgCIAUBbAAwsLIAaAbQABACACABABir/QALhMgDgaABVtjIgjhdAB5tnIAWgDACPqxQAHARAEAMQADAMAEAKAB/qyQAAASAAAgABEqxQgJgIgKgJQADgKALgQQAKgOAEgDQAJAKAHAJAAxrCQglgjgcghQgHgIgHgHACurpQAIgSAIgVACkrUQAGAIAcAbAGQsjQAEgLAUgaAGQsjQAIA0AFBAQABAKABAKQAAAFABADQAAADADAlQADAmgBAEAMSoEQABACAAABQAFAYgQAdQgJAPgOALQgQANgXAJQgQAFgOADAFhvfQAdA0ASCIADhudQAGgqABgtAgkttQAVAdAYAbANJnYQAFAFAaAKQAeAMAOAJQAKAGAJAIAO+mCQgKgNgpgQQg4gRgKgEAM3nvQAFAFAZAFQAGACAQAEQADABACAAAK3m4IAAAAAEgkiQATgGAWgKQBCgdAIgXAGZmmQgYAUg7AMQgkAHgtACIgmACACCkAIANA0IAPA4IAOA5QAqCqAJAoIAAAAIAgAKQAOAEAOADQAXADAWgBIABBBIAECeQABAeAFBfQABAJAAAIQAEBCgBASQAHAAAIAAQAHgBADBHQAcAqAvAcQAYAOASAGIAwAUQAhAUAUAaQgEAMgXAOQgxAfhoAQQgeAEglgBQhLgBgjgVIgIBjQAFACAGADQCZAZCFgjQBCgSAkgXAEgkiIAfAxIAVAiIAXAkQBQCBAdA5ACCkAQBZgLBFgXAgsj2IA3gBQBAgCA3gHABSH1IgBAAQACgzgBgfIgFi9IgCgmQghADghgKQgXgHgWgOABLDAQBKgGBKhDAmnlaQABADABADIAOAJQARALAXALQAAAAABAAQA/AeBWARQBSAPBbABAowgxQAVglBYhzQAfgpAdgkQAMgQAMgOIABgBAlaA6QAOhEA7iFIArhbIANgcAhJCGIAWkfIAEg0IADgpAowgxIAAAAQgtgGgZgXQgQgQgGgXIgDgUIBchaQBhhcArgbAmtBAQg0gGglglQgUgVgNgaIgJgXApLHHQAxiyA8h8IARgfIAgg6QAlAFAtgMIABABIAPAWQAVAaAcASQAjAXAqAGApLHHIAPAQQAUASAaANQBUAqBugXQgbB1gPAiQALgEgHAsIAQAbQAEAGgCAHQgGASgBAFQgEAUABARQACAVAJAlQANA1AMAXQAJAZAEAeQACASABAUQABAagCASQgOA0hgAZQhUAWhegKQhHgHgzgrQgjgegFgSQgBgGABgpIACgpIAGgVIAAAAIALgkQAFgxATg6QAEgPASgsQADgIADgNIADgMQgDgMgBgEQgBgEgCgGQgBgHAGgFQAGgFATgDQAAAAAAABQgEAOgDAIAglCjQgIgFgHgFIgVgTIgBgBQhHAdg8gJIgSA0IglBtQg6CpgOAkQAAABAAABAl5LpQACgBACgBAlyLIQgDAOgEATApZLvQgBgFgBgOQgCgVACgQQABgRAJgFQAJgFANgBQANgCAoADQAoADAhABQAgABAngBAqpK6IAKAJIAUARQAZATAZAIQAKADALACQApAIAigBQBRACAvgUApTMrIAngDQAzgBA6AMApfM9IAggDQAngDAoACAqYKsQAMgnAbhPIAmhvAq2QwQAEAEAFAEIAZAIQAgAIAkAEQByANBrgmIAIgEQADg2gKggQgIgYgGAAIkkgEIgJAeQgKAnABAugArxPFIAKAmQAQAnAhAeAlrQvIALgGQAWgTARgtAJKMtQANAQAIATIAGATQAHAZAAAcQABAYgGAcQgGAVgcASQgcAThvARQhuAQg7gLQgTgDgLgGIgHgFQgMgIgVgKIgTgKQhCgSgogWIgbgSQAAgVAAgaQAAgnABgyIADhJQgIhHABgKQAAgGAPgKQAHgFAHgDIAFiJAFXJLQgbgBgZABQhBADgOAQIgEAMQgCAXAJA4QBLgBBOgmQAAAAAAgBAFUH3QgiAKgyAFQhhAJhNgaABGKTIAGAEIABgZABMKXIAPAIQAcANAhAHQAfAGAgAAADdPGQglgPgagEQgegFgdgKQgmgNgKgOAEPL5IA+gIQBDgIAXAEAuvlqIgHACQgFgBgDgCQgDgEAEgJQADgJATgPQATgQASgMQACgBACgCQALgGAUgOQAYgPAFgHAtKmyQgGAKgWAMQgdARgGAFQgYAQgDACQgGAFgFAFAunlIQgIgBgFgCQgFgDAAgIQAAgIAKgM");
	this.shape_54.setTransform(731.2,446.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EC4A46").s().p("AjjG8QhWgRhAgdIAAgBIgJgNQgEgKACgZQABgYAagdQAMgPANgKQgQgoAKhVIANhPIA1gkIAMgCIgMACIAAAAIgTgDQASgVANgQIAGgJIgGAJQgNAQgSAVIgDAAIALghIgLAhIADAAIgIAJIgFAFQgWAXgbAaIgBABIgmAiIgzAqIinCDQgMAJgQAJIgWAFIAAgBIgBAAQgYgDgXgSQgQgMgQgTQgZgdgIgWQACgJAKgTQAMgZAMgNQAKgNAagpIAng/QADgGAqgsQAkgnAVgsQAXgvAcgfQAPgPAJgFIAwhNQA1hPAdgXIgCABIACgBQApgYA+gcIAugTIAegNIAXBOQAHAVAJAWIAIASIAFAMQAYA0AfAwIAKAOIARAYQAVAdAZAbIAMAOQgHACgMALQgNAKgGAKQAGgKANgKQAMgLAHgCIALAMIAPAQIAaAcIADACQgFADgKAPQgKAPgDAJIATASIAHAFQAcAaAYARIAUAPQAGgFAIgIQARgSAUghIAJgQIAFgHQAPgaALgYIAFgQIAHgWQgJgNgSgKIgRgIIARAIQASAKAJANIgHAWQgGgHgTgOIgSgMIASAMQATAOAGAHIgFAQQgLAYgPAaIgRgOQgPgLgGgHIAPgnIAGgPIAFgNIAGgUQAJgjAHgkIARALQATAMAHAJQgHgJgTgMIgRgLIABgHIACgPQAGgqABgtIAPAFQATAHALAJQgLgJgTgHIgPgFIAAgcQAAgygGg2IApAUQBMAqAcAWQAbAWBaBwQBGBYAqA5IBYB7QA8BYARAaIAKAMIALAPIABADQAEAYgQAdQgIAPgOALQgLAHgNAFQgYgDgKgPIAAAAIglgXQgfghgmgjIgvguQgZgYhmhCIgCgTQgGhAgHg0QADgKAVgbQgVAbgDAKQAHA0AGBAIACATIAAAIIAEAoQADAmgBAEQADA3ABA0QAIAcgYAUQAPAagKAUQgFAKgGAGIgBACQgIAXhCAdQgVAKgTAGQhGAXhYALQg3AHhAACIg3ABQhcgBhRgPgAE8E8QglAHgtADIglABIAlgBQAtgDAlgHQA6gLAZgVQgZAVg6ALgAAnAAQglghgcgiQAcAiAlAhgAgahDIgOgPIAOAPgAgRhmQgQANgHAHQAHgHAQgNQAOgLADgBQgDABgOALgAhjikQATAfAQAUIAYAfIgYgfQgQgUgTgfQAEgFAOgKIASgPIgSAPQgOAKgEAFIAAAAgADwheQAJgiAGgkQgGAkgJAigAGGhgQgSiHgdg1QAdA1ASCHgAD/ikIAFgbIgFAbgAhui4IALAUIgLgUIAlgYIglAYIAAAAgAikkpQAUAyAZAvIAJAQIgJgQQgZgvgUgyQADgFAMgIIAQgKIgQAKQgMAIgDAFIgIgVIAfgUIgfAUQgXg+gPhCQAPBCAXA+IAIAVgADpjTQASAJAJALQAGgtABgwQgBAwgGAtQgJgLgSgJIgSgHgAELkcIAAgMIAAgMIgBgJIABAJIAAAMIAAAMgADvlJQATAFAIAHIgJhkIAJBkQgIgHgTgFIgRgEgAB1BCIAAgyIAJAMIAHgKQAKgQAKgTQAHAIAcAaQgcgagHgIIALgVQAGAHAPALIARAOIgFAHIgJAQQgUAhgRASQgFgJgDgNQgDgMgHgQQAHAQADAMQADANAFAJQgIAIgGAFIgUgPgACXBEIAAAAgABBAXIgHgFQACgHAJgNIAOgVQAVAXANAQIAAAyQgYgRgcgagAknAcgAA6ASIgTgSQADgJAKgPQAKgPAFgDIAQATIgOAVQgJANgCAHIAAAAgABTgXIAAAAgADphIIAAAAgADwheIAAAAgAisk+IAAAAg");
	this.shape_55.setTransform(732.2,375.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D53733").s().p("AmPFtIgNgJIgDgGQgOgjAUgcQAKgPAPgGQgIhEALhDIAEgQIAmgiIABgBQAbgZAWgXIAFgGIAIgJIATAEIgbAFIAbgFIAAAAIg1AkIgNBOQgKBWAQAnQgNALgMAOQgaAegBAXQgCAZAEALIAJAMQgXgKgSgLgAKJERQgigVgcgTQhgg+g9g0QABgFgDglIgEgpIAAgHQBnBCAYAYIAvAuQAmAjAfAgIAlAYIAAAAQALAPAXADQANgGALgGQgQANgXAJQgQAFgPADIgJABgAr5C5IAEgQQARgxAthMIAZgqQAmg6AggeQAfgdBXh2QBOhsAmgbQALgIANgIIACgCQgdAYg1BPIgwBMQgJAGgPAPQgcAfgXAuQgVAtgkAmQgqAtgDAFIgnA/QgaAqgKAMQgMAOgMAYQgKAUgCAIQgEgNABgJg");
	this.shape_56.setTransform(730.3,376.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{rotation:0.2,x:708.2,y:279}},{t:this.instance,p:{rotation:-17.3,x:796.7,y:265.8}}]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_17},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_13},{t:this.shape_12},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_1,p:{rotation:3.2,x:711.3,y:277.7}},{t:this.instance,p:{rotation:-14.3,x:800.4,y:269}}]},2).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_17},{t:this.shape_48},{t:this.shape_47},{t:this.shape_32},{t:this.shape_13},{t:this.shape_12},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.instance_1,p:{rotation:6.7,x:714.8,y:276.1}},{t:this.instance,p:{rotation:-10.8,x:804.3,y:273}}]},2).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_17},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_13},{t:this.shape_12},{t:this.shape_54},{t:this.shape_30},{t:this.shape_53},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_52},{t:this.shape_51},{t:this.instance_1,p:{rotation:3.2,x:711.3,y:277.7}},{t:this.instance,p:{rotation:-14.3,x:800.4,y:269}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(618.6,132.1,215.3,432.7);


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


(lib.最后的动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Element05011("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(582.4,527.4,1,0.018,0,0,0,728.8,565.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({scaleY:1.07,x:584.4,alpha:1,startPosition:1},5).to({scaleY:0.86,x:582.4,startPosition:0},3).to({scaleY:0.99,startPosition:3},3).wait(40).to({mode:"single"},0).wait(145));

	// 图层 2
	this.instance_1 = new lib.Element05010("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(635.1,361.1,1,1,0,0,0,679.1,379.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},7).wait(196));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-19,1360.4,760.2);


(lib.Caption = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{stop_0:43,start_0:73,stop_1:1018,start_1:1029,pause_0:1282});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_43 = function() {
		this.stop();
	}
	this.frame_1018 = function() {
		this.stop();
	}
	this.frame_1282 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(43).call(this.frame_43).wait(975).call(this.frame_1018).wait(264).call(this.frame_1282).wait(73));

	// 图层 4
	this.instance = new lib.最后的动画("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(70.8,42.5,1,1,0,0,0,70.8,83.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1292).to({_off:false},0).wait(63));

	// labels
	this.btn_1 = new lib.BtnPlayVideo();
	this.btn_1.parent = this;
	this.btn_1.setTransform(954.8,350.6,1.013,1.739,0,0,0,198.3,115.4);

	this.btn_0 = new lib.BtnPlayVideo();
	this.btn_0.parent = this;
	this.btn_0.setTransform(349.8,338.8,1.013,1.739,0,0,0,198.3,115.4);

	this.circleFrame_3 = new lib.CircleFrame();
	this.circleFrame_3.parent = this;
	this.circleFrame_3.setTransform(375,539);

	this.circleFrame_4 = new lib.CircleFrame();
	this.circleFrame_4.parent = this;
	this.circleFrame_4.setTransform(770,539);

	this.circleFrame_5 = new lib.CircleFrame();
	this.circleFrame_5.parent = this;
	this.circleFrame_5.setTransform(1147,539);

	this.circleFrame_2 = new lib.CircleFrame();
	this.circleFrame_2.parent = this;
	this.circleFrame_2.setTransform(1147,279);

	this.circleFrame_1 = new lib.CircleFrame();
	this.circleFrame_1.parent = this;
	this.circleFrame_1.setTransform(770,279);

	this.circleFrame_0 = new lib.CircleFrame();
	this.circleFrame_0.parent = this;
	this.circleFrame_0.setTransform(375,279);

	this.btnDragWrong = new lib.BtnWrong();
	this.btnDragWrong.parent = this;
	this.btnDragWrong.setTransform(1141,45);

	this.btnDragRight = new lib.BtnRight();
	this.btnDragRight.parent = this;
	this.btnDragRight.setTransform(960,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_0},{t:this.btn_1}]},43).to({state:[]},30).to({state:[{t:this.btnDragRight},{t:this.btnDragWrong},{t:this.circleFrame_0},{t:this.circleFrame_1},{t:this.circleFrame_2},{t:this.circleFrame_5},{t:this.circleFrame_4},{t:this.circleFrame_3}]},1209).to({state:[]},1).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// caption
	this.btnBack = new lib.BtnReturn();
	this.btnBack.parent = this;
	this.btnBack.setTransform(1197,651);

	this.caption = new lib.Caption();
	this.caption.parent = this;
	this.caption.setTransform(9,58);
	this.caption.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.caption},{t:this.btnBack}]}).wait(1));

	// btns
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(9,9,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bar
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnPlay},{t:this.btnStop},{t:this.txtDuration},{t:this.txtCurrent},{t:this.progressBar},{t:this.text}]}).wait(1));

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