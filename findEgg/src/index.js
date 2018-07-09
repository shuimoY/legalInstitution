(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,613,581);


(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1260,580);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,315);


(lib.blue = function() {
	this.initialize(img.blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,154);


(lib.Chapter0001 = function() {
	this.initialize(img.Chapter0001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1890,870);


(lib._delete = function() {
	this.initialize(img._delete);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.lastPage = function() {
	this.initialize(img.lastPage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,60);


(lib.lastPage2 = function() {
	this.initialize(img.lastPage2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,60);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.mask = function() {
	this.initialize(img.mask);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2560,1440);


(lib.nextPage = function() {
	this.initialize(img.nextPage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,60);


(lib.nextPage2 = function() {
	this.initialize(img.nextPage2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,60);


(lib.orange = function() {
	this.initialize(img.orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,174);


(lib.purple = function() {
	this.initialize(img.purple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,170);


(lib.red = function() {
	this.initialize(img.red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,103);


(lib._return = function() {
	this.initialize(img._return);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,60);


(lib.start1 = function() {
	this.initialize(img.start1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,99);


(lib.start2 = function() {
	this.initialize(img.start2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,99);


(lib.tipbg = function() {
	this.initialize(img.tipbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,351,229);// helper functions:

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


(lib.Egg_3_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.red();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Egg_3_, new cjs.Rectangle(0,0,63.5,51.5), null);


(lib.Egg_2_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.purple();
	this.instance.parent = this;
	this.instance.setTransform(-2,-2,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Egg_2_, new cjs.Rectangle(-2,-2,83.7,88.4), null);


(lib.Egg_1_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.blue();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Egg_1_, new cjs.Rectangle(0,0,77,77), null);


(lib.Egg_0_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.orange();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Egg_0_, new cjs.Rectangle(0,0,74,87), null);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAnIgEgDQAAgDAMgDQBdgUAAgMQAAgFgXgDQgggEAAgJQAAgHAOgFQAQgEAYAAQAdAAAUAHQAVAIgBAJQABAJgZALQgaAMgvAMQgvALgQAAgAilAnIgGgEQAAgCAOgDQBcgTAAgNQABgFgYgDQghgEAAgIQAAgHAQgFQAPgFAZAAQAdAAAVAHQATAHABAKQAAAJgbAMQgcANgwALQguAKgMAAg");
	this.shape.setTransform(24.2,55.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AACBKIgEgFQAAgGAMgGQBdgmAAgXQAAgMgXgEQgggIAAgSQAAgMAOgIQAQgJAYAAQAdAAAUANQAVAOgBASQABASgZAVQgaAYgvAVQgvAWgQAAgAilBJIgGgGQAAgDAOgHQBcglAAgYQABgMgYgEQghgIAAgQQAAgLAQgKQAPgKAZAAQAdAAAVANQATANABASQAAATgbAXQgcAYgwAVQguAUgMAAg");
	this.shape_1.setTransform(24.2,52);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AACCfIgEgMQAAgOAMgLQBdhRAAg0QAAgYgXgKQgggPAAgnQAAgaAOgTQAQgSAYAAQAdAAAUAdQAVAdgBAmQABAmgZAxQgaAxgvAuQgvAvgQAAgAilCdIgGgOQAAgIAOgNQBchQAAg1QABgYgYgKQghgPAAgjQAAgZAQgVQAPgVAZAAQAdAAAVAcQATAcABAnQAAAngbA0QgcA0gwArQguAsgMAAg");
	this.shape_2.setTransform(24.2,43.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AACCEIgEgKQAAgLAMgJQBdhEAAgqQAAgVgXgIQgggMAAghQAAgVAOgQQAQgPAYAAQAdAAAUAYQAVAYgBAgQABAfgZAoQgaApgvAnQgvAmgQAAgAilCCIgGgLQAAgGAOgLQBchCAAgsQABgVgYgIQghgMAAgeQAAgUAQgSQAPgRAZAAQAdAAAVAXQATAXABAhQAAAggbArQgcArgwAkQguAkgMAAg");
	this.shape_3.setTransform(24.2,45.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AACCTIgEgLQAAgMAMgLQBdhLAAgwQAAgWgXgKQgggNAAglQAAgYAOgRQAQgRAYAAQAdAAAUAbQAVAbgBAjQABAjgZAtQgaAugvArQgvArgQAAgAilCSIgGgNQAAgHAOgNQBchKAAgxQABgWgYgKQghgNAAghQAAgXAQgUQAPgTAZAAQAdAAAVAaQATAaABAkQAAAkgbAwQgcAwgwApQguAogMAAg");
	this.shape_4.setTransform(24.2,44.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AACCMIgEgKQAAgMAMgKQBdhIAAgtQAAgWgXgIQgggNAAgjQAAgXAOgRQAQgQAYAAQAdAAAUAaQAVAagBAhQABAigZArQgaArgvApQgvApgQAAgAilCLIgGgMQAAgHAOgMQBchGAAgvQABgWgYgIQghgOAAgfQAAgWAQgSQAPgTAZAAQAdAAAVAZQATAZABAiQAAAjgbAtQgcAugwAmQguAngMAAg");
	this.shape_5.setTransform(24.2,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.1,51.7,34.3,8);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADwBkIg9gVQgegHAAgCQAAgBAHAAIBUADQAUAAAHgFQAHgFAAgrIgEhBQgDgWgGgJQgGgJgNgDQgNgDgiAAInFAMQgHBsgLAfQgFAQgJAIQgJAIgNAAQgOAAgNgIQgNgIAAgGQAAgGAUgPQAHgGAHgcQAHgbAAgeQAAgegMgHIgKgJQAAgDALAAQAMAAAoAFQGsgNAYgCQAigDAUAAQAUAAAxAGQAwAHAAADQAAAEgPAGQgKAFAAAcQAAAdAIAoIAIApQAAAJgHAHQgIAHgQAHQgeAMgPAAQgPAAgNgGgAiFApIgHgFIgRgZQgMgOgNgEQgNgEAAgBQAAgCALAAIAhABQBYgCA3gEIBCgEQAMAAAqAFQAqAGAAACQAAACgMACQgMACgUAGQgUAIAAAFQAAAFAEABQAOACAAACQAAACgMABIhNACQhAACg5AAQABAGgGACQgHADgHAAQgHAAgFgCgAh7gHQAPAHAFAZIBogEQAYgBAHgCQAGgCAGgIIAFgMIgDgHQgDgBgNAAgAiTguQgSgDAAgBQAAgCAcAAICggHQArgDAWAAQAWAAANACQANACAAABQAAAGhYAEQhWAEg5AAQgiAAgSgDg");
	this.shape.setTransform(60,120.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADwD8Ig9g2QgegRAAgEQAAgFAHAAIBUAJQAUAAAHgMQAHgNAAhsIgEikQgDg5gGgWQgGgXgNgGQgNgHgiAAInFAbQgHETgLBOQgFAngJAUQgJATgNAAQgOAAgNgTQgNgUAAgPQAAgOAUgnQAHgPAHhGQAHhEAAhMQAAhMgMgRIgKgXQAAgGALAAQAMAAAoALQGsghAYgFQAigIAUAAQAUABAxAQQAwAQAAAJQAAAJgPAQQgKALAABIQAABIAIBlIAIBoQAAAWgHARQgIATgQAQQgeAggPAAQgPAAgNgPgAiFBmIgHgMIgRg+QgMgkgNgKQgNgKAAgFQAAgEALAAIAhACQBYgEA3gKIBCgKQAMAAAqAOQAqANAAAFQAAAGgMAEQgMAFgUASQgUATAAAMQAAAMAEADQAOAHAAAEQAAAEgMACIhNAGQhAAGg5gBQABAPgGAGQgHAHgHAAQgHABgFgHgAh7gUQAPASAFBBIBogJQAYgEAHgFQAGgFAGgTIAFggIgDgRQgDgEgNAAgAiTh0QgSgHAAgEQAAgFAcAAIBJgFIBXgNQArgGAWAAQAWgBANAFQANAFAAADQAAANhYALQhWALg5AAQgiAAgSgHg");
	this.shape_1.setTransform(60,104.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADwHAIggg4IgdgnQgegfAAgIQAAgIAHAAIBUARQAUAAAHgXQAHgVAAjBIgEkkQgDhmgGgoQgGgogNgMQgNgMgiAAIiwAQIkVAhQgHHogLCMQgFBGgJAjQgJAjgNAAQgOAAgNgjQgNgjAAgaQAAgaAUhGQAHgbAHh7QAHh6AAiIQAAiHgMgeIgKgpQAAgLALAAQAMAAAoATQGsg6AYgIQAigOAUAAQAUAAAxAdQAwAeAAAPQAAAPgPAdQgKAUAACAQAACBAIC0IAIC5QAAAlgHAgQgIAigQAcQgeA4gPAAQgPAAgNgagAiFC2IgHgWIgRhtQgMhCgNgSQgNgSAAgIQAAgIALAAIAhAFQBYgIA3gSIBCgRQAMAAAqAYQAqAXAAAJQAAAKgMAJQgMAJgUAgQgUAiAAAVQAAAVAEAGQAOAMAAAHQAAAHgMAEIhNAMQhAAIg5AAQABAZgGAMQgHANgHAAQgHAAgFgLgAh7glQAPAhAFB1IBogRQAYgHAHgIQAGgIAGgkIAFg6IgDgfQgDgGgNAAgAiTjPQgSgNAAgIQAAgHAcAAIBJgJIBXgXQArgMAWABQAWAAANAHQANAIAAAHQAAAXhYATQhWAUg5gBQgiAAgSgMg");
	this.shape_2.setTransform(60,84.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADwGAIg9hRQgegbAAgGQAAgHAHAAIBUAPQAUgBAHgTQAHgTAAilIgEj7QgDhXgGgiQgGgjgNgJQgNgMgiAAIiwAOIkVAdQgHGjgLB3QgFA8gJAfQgJAdgNAAQgOAAgNgdQgNgfAAgWQAAgWAUg8QAHgXAHhqQAHhpAAh0QAAhzgMgbIgKgjQAAgKALAAQAMAAAoARQGsgyAYgHQAigMAUAAQAUAAAxAZQAwAZAAAOQAAANgPAZQgKARAABuQAABuAICbIAICeQAAAhgHAcQgIAbgQAZQgeAwgPAAQgPAAgNgXgAiFCcIgHgTIgRhdQgMg4gNgQQgNgQAAgGQAAgHALAAIAhAEQBYgHA3gQIBCgOQAMAAAqAUQAqAUAAAIQAAAJgMAIQgMAHgUAcQgUAcAAATQAAATAEAEQAOAKAAAGQAAAGgMADIhNALQhAAHg5gBQABAWgGALQgHALgHAAQgHAAgFgKgAh7ggQAPAdAFBkIBogOQAYgHAHgHQAGgHAGgeIAFgxIgDgbQgDgFgNgBgAiTixQgSgLAAgHQAAgHAcAAIBJgIIBXgTQArgKAWAAQAWAAANAHQANAGAAAGQAAAVhYAPQhWARg5AAQgiAAgSgKg");
	this.shape_3.setTransform(60,91.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ADwGqIggg1IgdglQgegeAAgIQAAgHAHAAIBUAQQAUAAAHgVQAHgVAAi3IgEkWQgDhggGgmQgGgmgNgLQgNgMgiAAIiwAPIkVAgQgHHPgLCFQgFBCgJAiQgJAhgNAAQgOAAgNghQgNgiAAgYQAAgZAUhCQAHgaAHh1QAHh0AAiBQAAiAgMgdIgKgnQAAgKALAAQAMAAAoATQGsg4AYgIQAigNAUAAQAUAAAxAcQAwAcAAAOQAAAPgPAbQgKATAAB6QAAB6AICrIAICvQAAAkgHAfQgIAfgQAbQgeA1gPAAQgPAAgNgYgAiFCuIgHgWIgRhnQgMg/gNgRQgNgRAAgHQAAgIALAAIAhAEQBYgIA3gQIBCgRQAMAAAqAXQAqAWAAAJQAAAJgMAJQgMAIgUAfQgUAgAAAUQAAAUAEAGQAOALAAAGQAAAIgMADIhNALQhAAJg5gCQABAZgGALQgHANgHAAQgHAAgFgKgAh7gjQAPAgAFBvIBogRQAYgGAHgIQAGgIAGghIAFg3IgDgeQgDgGgNAAgAiTjEQgSgNAAgHQAAgIAcAAIBJgIIBXgVQArgLAWAAQAWAAANAHQANAHAAAHQAAAWhYASQhWASg5AAQgiAAgSgLg");
	this.shape_4.setTransform(60,86.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ADwGZIgggzIgdgkQgegcAAgIQAAgHAHAAIBUAQQAUAAAHgVQAHgUAAiwIgEkKQgDhcgGglQgGgkgNgLQgNgMgiAAIiwAOIkVAgQgHG8gLCAQgFBAgJAgQgJAggNAAQgOAAgNggQgNggAAgYQAAgYAUhAQAHgYAHhxQAHhvAAh7QAAh7gMgcIgKgmQAAgKALAAQAMAAAoASQGsg1AYgIQAigMAUAAQAUAAAxAaQAwAbAAAOQAAAOgPAbQgKARAAB1QAAB1AIClIAICpQAAAigHAdQgIAfgQAZQgeAzgPAAQgPAAgNgXgAiFCnIgHgVIgRhjQgMg8gNgRQgNgQAAgHQAAgIALAAIAhAFQBYgIA3gQIBCgQQAMAAAqAWQAqAVAAAJQAAAIgMAJQgMAIgUAdQgUAfAAAUQAAATAEAFQAOALAAAGQAAAHgMADIhNALQhAAIg5gBQABAXgGALQgHAMgHAAQgHAAgFgJgAh7ghQAPAeAFBqIBogPQAYgHAHgHQAGgIAGggIAFg0IgDgdQgDgGgNAAgAiTi9QgSgLAAgHQAAgIAcAAIBJgIIBXgUQArgLAWAAQAWAAANAHQANAHAAAHQAAAVhYARQhWASg5AAQgiAAgSgMg");
	this.shape_5.setTransform(60,88.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.7,110.1,70.7,21.3);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeBWQgPgJAAgHIACgDQAMgJAEgTIADg2QiKAmhzAPQhMAKg+AFQgHAAAAgBQAAgCAOgCQBvgRBWgSQA4gNB8ghQgGgHgOgEIgPgFQAAgCAKAAIAbACQASACANAEQA6gUgBgMQitAFhIAFQgmACgcAAQgeAAgngDQgogEAAgCQgBgCAIgBIJJgSQAigCAjAAQAkAAAjAEQAiAEAAAEQAAAFg2AAIhJAAQhQAAh1ACQA6ALgBAEQAAACgGABQgbAFgTAFIg7ASIAEANIgCAhIAFAwQAAAQgKAIQgLAIgMAAQgNAAgSgKgAFtAsIjsgxQgUgEAAgCQAAgBAGAAIDtAaQAcAEAOAEQANAEAIAHQAIAGAAAFQAAAFgQAAQgPAAgbgFg");
	this.shape.setTransform(58.8,118.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeC5QgPgTAAgPIACgIQAMgRAEgqIADh1QiKBThzAhQhMAVg+AKQgHAAAAgDQAAgCAOgGQBvgkBWgnQA4gbB8hHQgGgPgOgKIgPgLQAAgDAKAAIAbAEQASAEANAIQA6gqgBgbQitAMhIAKQgmAFgcAAQgeAAgngIQgogIAAgFQgBgEAIgBICogFIGhgiQAigEAjAAQAkgBAjAKQAiAJAAAIQAAAKg2AAIhJAAQhQAAh1AEQA6AXgBAKQAAAEgGACQgbAJgTAMIg7AmIAEAcIADCwQAAAigKARQgLARgMAAQgNAAgSgVgAFtBfIjshqQgUgKAAgDQAAgDAGAAICXAhIBWAYQAcAJAOAJQANAJAIANQAIAOAAAKQAAAKgQAAQgPAAgbgJg");
	this.shape_1.setTransform(58.8,108.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeGbQgPgrAAgiIACgRQAMgoAEhaIADkEQiKC4hzBIQhMAvg+AYQgHAAAAgGQAAgIAOgLQBvhQBWhYQA4g6B8igQgGgigOgUIgPgaQAAgGAKAAIAbAJQASAJANATQA6hfgBg8QitAchIAWQgmALgcAAQgeAAgngSQgogSAAgJQgBgKAIgCICogNIDmglIC7glQAigKAjAAQAkAAAjAUQAiAUAAARQAAAYg2AAIhJgBQhQgBh1AMQA6AygBAWQAAAHgGAFQgbAWgTAZIg7BWIAEA+IADGGQAABMgKAkQgLAlgMAAQgNAAgSgsgAFtDTIh5h2Ihzh2QgUgXAAgGQAAgHAGAAIAzAWIBkA1IBWA1QAcAUAOAUQANATAIAeQAIAcAAAYQAAAYgQgBQgPAAgbgUg");
	this.shape_2.setTransform(58.8,84);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeFZQgPglAAgcIACgOQAMghAEhMIADjaQiKCahzA8QhMAog+AUQgHAAAAgGQAAgGAOgJQBvhDBWhKQA4gxB8iGQgGgcgOgRIgPgVQAAgFAKAAIAbAHQASAIANAQQA6hQgBgyQitAXhIASQgmAJgcAAQgeAAgngOQgogPAAgIQgBgIAIgCICogKIDmggIC7gfQAigIAjAAQAkAAAjAQQAiARAAAPQAAAUg2AAIhJgCQhQAAh1AKQA6ApgBATQAAAGgGAEQgbATgTAVIg7BHIAEA0IADFHQAABAgKAeQgLAfgMAAQgNAAgSgkgAFtCwIjsjFQgUgTAAgFQAAgGAGAAIAzASIBkAsIBWAtQAcARAOARQANAQAIAYQAIAZAAATQAAAUgQAAQgPAAgbgSg");
	this.shape_3.setTransform(58.8,91.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeF7QgPgpAAgeIACgQQAMglAEhTIADjvQiKCphzBCQhMAsg+AWQgHAAAAgGQAAgHAOgKQBvhKBWhRQA4g2B8iTQgGgfgOgSIgPgYQAAgFAKgBIAbAIQASAJANASQA6hXgBg5QitAbhIATQgmAKgcAAQgeAAgngQQgogQAAgJQgBgJAIgCICogLIDmgkIC7ghQAigJAjAAQAkAAAjASQAiASAAARQAAAWg2AAIhJgCQhQAAh1ALQA6AtgBAUQAAAIgGAEQgbAVgTAWIg7BPIAEA5IADFoQAABGgKAhQgLAigMAAQgNAAgSgogAFtDCIjsjZQgUgVAAgGQAAgGAGAAIAzATIBkAxIBWAxQAcAUAOARQANASAIAbQAIAbAAAVQAAAXgQAAQgPAAgbgUg");
	this.shape_4.setTransform(58.8,87.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeFtQgPgnAAgdIACgPQAMgkAEhQIADjnQiKCkhzA/QhMArg+AUQgHAAAAgFQAAgHAOgJQBvhIBWhOQA4g0B8iNQgGgfgOgRIgPgXQAAgFAKgBIAbAIQASAJANARQA6hUgBg2QitAZhIATQgmAKgcAAQgegBgngPQgogQAAgIQgBgJAIgCICogKIDmgjIC7ghQAigIAjAAQAkAAAjASQAiARAAAQQAAAVg2AAIhJgCQhQABh1AJQA6AtgBATQAAAHgGAFQgbATgTAWIg7BMIAEA3IADFbQAABDgKAgQgLAhgMAAQgNAAgSgngAFtC7IjsjRQgUgUAAgGQAAgGAGAAIAzATIBkAvIBWAvQAcATAOARQANARAIAaQAIAaAAAVQAAAUgQAAQgPAAgbgSg");
	this.shape_5.setTransform(58.8,88.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.5,109.3,84.6,19.1);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFwBvQg0gIg9gUQgegJgbgMIgygZQhHANhBAGQg/AHgrAAQgQAAAAgBQAAgCAVgCQBHgJA1gJQA3gJAmgIQghgagNgQIg9AGQgcACgjAAQglAAAAgDQAAgCAOgBQAlgDBlgMIgfguQgOgUgPgGQgOgHAAgEQAAgDANAAIA4ADQArAEAAAHIgGAIIgGAKQAAAQATAhIA5gHQA1gIAWAAIAkACQAQABAAACQAAADgsAGQgsAGhYAIQAQAXAXAPQAkgIAVgHQAVgHAGgGQAKgJALAAQALAAAbAFQAbAGAAADQAAAEgXAFIh6AdQAyAcBAARQBAAQATAAQAUAAAMgHQAOgGAUgRQAIgHAKAAQAJAAgCAGQgGAOAAAUIADAUQgBAGgbAAQgaAAg1gIgAj0BwQgfgRgngLIgJgFQAAgBAGAAIA+ADQAMAAAEgCIAIgPIAHglQhwAWgfAIQgXAFgRAAQgRAAgbgFQgagFAAgFQAAgEAWAAIAQAAQAkAAC1gdIACgpQhDAEggAAQghAAgWgCQgXgDAAgBQAAgCARAAICggKIgCgnQgDgMgGgFIgRgKQgLgEAAgCQAAgEAQAAQARAAAoAEQAnAEAAAEIgIAKQgNAIgGAqQA+gFAUAAIAhABQAOABAAADQAAADgWADQgXADhVAGIgCAkQBMgLAMAAQALAAAAABQAAADgZAFIhKAPQgCAmAEAIIAEANQAAAPgVALQgUAMgQAAQgJAAgHgEgADghRQg3gIAAgDQAAgDAXgBIArgCQAqAAAXAGQAXAGAAAJQAAAFgSAAQgaAAg3gJg");
	this.shape.setTransform(58.8,118.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AFwEHQg0gTg9gvQgegXgbgcIgyg7QhHAehBAQQg/AQgrAAQgQAAAAgDQAAgEAVgGQBHgVA1gUQA3gVAmgTQghg/gNgoIg9AOQgcAHgjAAQglAAAAgIQAAgFAOgDQAlgGBlgcIgfhtQgOgvgPgQQgOgRAAgHQAAgJANAAIA4AJQArAHAAARIgMAsQAAAlATBPIA5gRQA1gSAWAAIAkADQAQADAAAEQAAAJgsAOQgsAOhYATQAQA2AXAmQAkgVAVgQQAVgSAGgOQAKgVALAAQALAAAbANQAbAMAAAJQAAAJgXAMIh6BGQAyBCBAAnQBAAnATAAQAUAAAMgQQAOgQAUgoQAIgQAKAAQAJAAgCAPQgGAhAAAvIADAvQgBAQgbAAQgaAAg1gUgAj0EKQgfgpgngbIgJgKQAAgEAGAAIA+AHQAMAAAEgFIAIgiIAHhXQhwAygfATQgXAOgRAAQgRAAgbgNQgagNAAgKQAAgKAWAAIAQAAQAkAAC1hFIAChiQhDAJggAAQghAAgWgFQgXgGAAgEQAAgEARgBQBfgLBBgLIgChcQgDgegGgMIgRgWQgLgKAAgGQAAgJAQAAQARAAAoAKQAnAKAAAJIgIAYQgNARgGBmQA+gNAUAAIAhADQAOADAAAGQAAAGgWAHQgXAIhVAOIgCBXQBMgcAMAAQALAAAAAEQAAAGgZANIhKAjQgCBbAEAUIAEAeQAAAigVAcQgUAbgQAAQgJAAgHgIgADgjAQg3gWAAgGQAAgGAXgEIArgEQAqAAAXAPQAXAOAAAVQAAAMgSAAQgaAAg3gUg");
	this.shape_1.setTransform(58.8,102.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AFwHNQg0gig9hRQgegpgbgwIgyhpQhHA2hBAbQg/AcgrAAQgQAAAAgFQAAgHAVgLQBHglA1gjQA3gkAmgiQghhvgNhGIg9AZQgcANgjAAQglgBAAgPQAAgJAOgEQAlgMBlgwIgfjAQgOhSgPgcQgOgdAAgNQAAgOANgBIA4APQArANAAAdIgMBOQAABBATCLIA5gfQA1gfAWAAIAkAFQAQAGAAAHQAAAPgsAYQgsAZhYAiQAQBeAXBDQAkgkAVgeQAVgeAGgaQAKglALABQALgBAbAXQAbAXAAAPQAAAPgXAWIh6B6QAyB1BABEQBABEATAAQAUAAAMgcQAOgcAUhGQAIgdAKAAQAJAAgCAaQgGA8AABSIADBRQgBAcgbAAQgaAAg1gigAj0HSQgfhJgnguIgJgSQAAgHAGAAIA+AMQAMAAAEgIIAIg8IAHiYQhwBXgfAhQgXAZgRAAQgRAAgbgXQgagWAAgSQAAgSAWAAIAQABQAkAAC1h5IACiuQhDARggAAQghABgWgLQgXgKAAgHQAAgGARgDQBfgTBBgTIgCiiQgDgzgGgWIgRgnQgLgRAAgLQAAgQAQAAQARAAAoARQAnATAAAQIgIApQgNAfgGCyQA+gXAUAAIAhAFQAOAGAAAKQAAALgWANQgXANhVAaIgCCYQBMgyAMAAQALAAAAAHQAAALgZAXIhKA/QgCCeAEAiIAEA1QAAA9gVAwQgUAwgQABQgJAAgHgPgADglTQg3glAAgLQAAgLAXgHIArgGQAqAAAXAZQAXAaAAAkQAAAWgSAAQgaAAg3glg");
	this.shape_2.setTransform(58.8,82.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AFwGQQg0gdg9hHQgegjgbgqIgyhaQhHAuhBAXQg/AYgrABQgQAAAAgGQAAgEAVgKQBHggA1gfQA3gfAmgeQghhggNg8Ig9AVQgcALgjAAQglAAAAgNQAAgIAOgEQAlgKBlgpIgfinQgOhHgPgYQgOgaAAgLQAAgNANAAIA4ANQArAMAAAaIgMBCQAAA5ATB4IA5gaQA1gcAWAAIAkAFQAQAFAAAGQAAANgsAVQgsAVhYAeQAQBSAXA6QAkggAVgaQAVgaAGgWQAKggALAAQALAAAbATQAbAUAAANQAAAOgXASIh6BqQAyBlBAA7QBAA8ATAAQAUAAAMgZQAOgYAUg8QAIgaAKAAQAJAAgCAXQgGA0AABGIADBIQgBAYgbAAQgaAAg1gegAj0GUQgfg+gngqIgJgPQAAgFAGAAIA+AJQAMAAAEgGIAIg1IAHiDQhwBLgfAdQgXAWgRAAQgRAAgbgUQgagTAAgQQAAgQAWAAIAQABQAkAAC1hpIACiWQhDAPggAAQghAAgWgJQgXgJAAgFQAAgGARgCQBfgRBBgRIgCiMQgDgtgGgSIgRgiQgLgOAAgLQAAgOAQAAQARABAoAPQAnAQAAAOIgIAjQgNAbgGCaQA+gTAUgBIAhAFQAOAFAAAJQAAAKgWALQgXALhVAWIgCCEQBMgrAMAAQALAAAAAGQAAAKgZATIhKA2QgCCJAEAfIAEAtQAAA0gVAqQgUArgQgBQgJAAgHgMgADgklQg3ghAAgIQAAgKAXgGIArgGQAqAAAXAXQAXAVAAAgQAAASgSABQgaAAg3ggg");
	this.shape_3.setTransform(58.8,88.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AFwGzQg0ghg9hMQgegmgbgvIgyhiQhHAzhBAaQg/AagrAAQgQAAAAgFQAAgGAVgLQBHgiA1ghQA3gjAmggQghhogNhCIg9AYQgcAMgjgBQglABAAgOQAAgKAOgEQAlgLBlgsIgfi1QgOhOgPgaQgOgbAAgNQAAgOANAAIA4AOQArAMAAAcIgMBKQAAA9ATCCIA5gcQA1gfAWAAIAkAGQAQAFAAAGQAAAPgsAXQgsAYhYAfQAQBZAXA+QAkghAVgcQAVgdAGgXQAKgkALABQALAAAbAUQAbAVAAAPQAAAPgXAUIh6BzQAyBvBAA/QBABAATAAQAUAAAMgaQAOgaAUhCQAIgbAKgBQAJAAgCAaQgGA3AABOIADBMQgBAagbAAQgaAAg1gfgAj0G3QgfhEgngsIgJgRQAAgHAGAAIA+ALQAMABAEgIIAIg5IAHiPQhwBTgfAfQgXAXgRAAQgRAAgbgWQgagUAAgRQAAgRAWAAIAQAAQAkABC1hzIACijQhDAQggABQghAAgWgKQgXgKAAgGQAAgHARgCQBfgSBBgSIgCiZQgDgvgGgVIgRglQgLgPAAgLQAAgPAQAAQARgBAoASQAnAQAAAPIgIAoQgNAcgGCnQA+gUAUgBIAhAGQAOAEAAAKQAAALgWAMQgXAMhVAYIgCCQQBMgvAMAAQALAAAAAGQAAAKgZAXIhKA6QgCCVAEAhIAEAxQAAA6gVAtQgUAtgQABQgJAAgHgOgADgk+Qg3gjAAgKQAAgMAXgFIArgHQAqAAAXAZQAXAYAAAhQAAAVgSAAQgaAAg3gig");
	this.shape_4.setTransform(58.8,84.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AFwGjQg0gfg9hKQgeglgbgsIgyheQhHAwhBAZQg/AZgrAAQgQAAAAgFQAAgFAVgKQBHgiA1ggQA3ghAmgfQghhkgNhAIg9AXQgcALgjAAQglAAAAgNQAAgJAOgEQAlgLBlgrIgfivQgOhKgPgZQgOgbAAgMQAAgNANAAIA4ANQArAMAAAbIgMBGQAAA8ATB9IA5gbQA1gdAWAAIAkAFQAQAFAAAGQAAAOgsAWQgsAXhYAfQAQBWAXA8QAkghAVgbQAVgcAGgWQAKgiALAAQALAAAbAUQAbAVAAAOQAAAOgXATIh6BvQAyBqBAA+QBAA+ATAAQAUAAAMgZQAOgaAUg/QAIgbAKAAQAJAAgCAYQgGA2AABLIADBKQgBAZgbAAQgaAAg1gfgAj0GnQgfhBgngrIgJgQQAAgGAGAAIA+ALQAMAAAEgHIAIg3IAHiLQhwBQgfAeQgXAWgRAAQgRAAgbgUQgagVAAgQQAAgQAWAAIAQABQAkAAC1huIACieQhDAQggAAQghAAgWgJQgXgKAAgGQAAgGARgCQBfgSBBgRIgCiTQgDgvgGgTIgRgkQgLgPAAgKQAAgPAQAAQARAAAoAQQAnAQAAAPIgIAmQgNAbgGCiQA+gUAUAAIAhAFQAOAEAAAKQAAAKgWAMQgXALhVAXIgCCLQBMgtAMAAQALAAAAAGQAAAKgZAVIhKA4QgCCQAEAgIAEAwQAAA3gVAsQgUAsgQAAQgJAAgHgOgADgkzQg3giAAgKQAAgKAXgGIArgGQAqAAAXAXQAXAXAAAhQAAAUgSAAQgaAAg3ghg");
	this.shape_5.setTransform(58.8,86.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,107,95.7,23.9);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAZAkQgXgHAAgMQAAgSBAgVQBBgVAQAAIAOADIAIAEQgBABgQAEQgrAJgVAJQgVAJgBAFQAAAIAbADQAjAEAAAKQAAAIgMAEQgOAGgcAAQgcAAgVgIgAiRAkQgXgHAAgMQAAgSBBgVQBBgVAQAAIANADIAIAEQgBABgQAEQgqAJgVAJQgWAJABAFQAAAIAaADQAjAEAAAKQAAAIgNAEQgNAGgdAAQgcAAgVgIg");
	this.shape.setTransform(23.9,53.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZBLQgXgPAAgZQAAgnBAgrQBBgrAQAAIAOAFIAIAIQgBAEgQAHQgrAUgVASQgVARgBAOQAAAPAbAHQAjAJAAAVQAAAOgMALQgOALgcAAQgcAAgVgQgAiRBLQgXgPAAgZQAAgnBBgrQBBgrAQAAIANAFIAIAIQgBAEgQAHQgqAUgVASQgWARABAOQAAAPAaAHQAjAJAAAVQAAAOgNALQgNALgdAAQgcAAgVgQg");
	this.shape_1.setTransform(23.9,49.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAZCGQgXgbAAgtQAAhGBAhMQBBhNAQAAIAOAIIAIAPQgBAGgQANQgrAkgVAfQgVAggBAaQAAAbAbALQAjAQAAAmQAAAZgMAUQgOATgcAAQgcAAgVgcgAiRCGQgXgbAAgtQAAhGBBhMQBBhNAQAAIANAIIAIAPQgBAGgQANQgqAkgVAfQgWAgABAaQAAAbAaALQAjAQAAAmQAAAZgNAUQgNATgdAAQgcAAgVgcg");
	this.shape_2.setTransform(23.9,42.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAZBpQgXgVAAgjQAAg3BAg7QBBg9AQAAIAOAHIAIALQgBAFgQALQgrAcgVAYQgVAZgBAUQAAAUAbAJQAjANAAAeQAAATgMAQQgOAPgcgBQgcABgVgWgAiRBpQgXgVAAgjQAAg3BBg7QBBg9AQAAIANAHIAIALQgBAFgQALQgqAcgVAYQgWAZABAUQAAAUAaAJQAjANAAAeQAAATgNAQQgNAPgdgBQgcABgVgWg");
	this.shape_3.setTransform(23.9,45.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZB7QgXgZAAgpQAAhABAhGQBBhGAQAAIAOAHIAIAPQgBAFgQAMQgrAhgVAdQgVAcgBAXQAAAZAbAKQAjAPAAAjQAAAXgMARQgOASgcAAQgcAAgVgZgAiRB7QgXgZAAgpQAAhABBhGQBBhGAQAAIANAHIAIAPQgBAFgQAMQgqAhgVAdQgWAcABAXQAAAZAaAKQAjAPAAAjQAAAXgNARQgNASgdAAQgcAAgVgZg");
	this.shape_4.setTransform(23.9,43.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAZByQgXgXAAgmQAAg8BAhBQBBhBAQAAIAOAHIAIAMQgBAGgQALQgrAfgVAaQgVAbgBAWQAAAXAbAKQAjANAAAhQAAAUgMARQgOARgcAAQgcAAgVgYgAiRByQgXgXAAgmQAAg8BBhBQBBhBAQAAIANAHIAIAMQgBAGgQALQgqAfgVAaQgWAbABAWQAAAXAaAKQAjANAAAhQAAAUgNARQgNARgdAAQgcAAgVgYg");
	this.shape_5.setTransform(23.9,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.1,49.3,33.7,8.8);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFSBjQgzgIg2gRQg1gRgkgRQhnAVhSAJQhTAHgiAAQgOAAAAgBQAAgBASgCQBZgKBBgKQA/gLA+gOQgvgcgOgQQhVAFgWAAIglgBQgQgBAAgCQAAgBAPgBICJgJQgcgpgOgOQgOgNgPgDQgPgDAAgCQAAgDASAAQARAAArADQAsADAAAGIgJAQQAAAPAUAgIBTgIQA7gGAaAAIAoABQANABAAACQAAADghAEQgiADiRALIgBAAQAaAZAYAPQAegGAVgHIAdgKQAHgEAAgEQAAgGAPAAQAOAAAdAFQAeAGAAADQAAADgSACQgRACgVAFIhfAWQATAKAYAIQAXAIAdAHIAxALQAUAEALAAQAQAAAQgGQAQgGASgNQAJgGAHAAQAIAAAAADIgDAGQgCAEAAAKIAFAcQAAAGgZAAQgkAAgzgHgAnBBLQAAgCAZgFQBwgVBJgfIh8gcQgQgEAAgBQAAgCAIAAIASABICKAVQAkgUAAgOQAAgEgHAAIh5AGQghADgUAAQgUAAgWgDQgWgDAAgCQAAgCAXAAICHgFQAlgCAdgEQAegEATAAQAUAAAgADQAeAEAAADQAAACgVAFIgOAHIgWAPQgMAKgeAOIBiAVQAJADAAAHQAAAHgXAAQgWAAgtgNIgvgLQhEAahLAMQhLAMgZAAQgIAAAAgBgADzhBQgzgIAAgEQAAgCAkAAQAfAAAWACQAWABAOADQAbAGAAAFQAAAGgaAAQgZAAgygJg");
	this.shape.setTransform(59.5,118);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AFSEYQgzgWg2gvQg1gwgkgxQhnA8hSAYQhTAWgiAAQgOAAAAgEQAAgFASgEQBZgcBBgeQA/gdA+gnQgvhTgOgtQhVAOgWAAIglgDQgQgEAAgDQAAgEAPgEICJgaQgch0gOgnQgOgmgPgIQgPgKAAgGQAAgHASAAQARAAArAIQAsAIAAATIgJAsQAAArAUBbIBTgVQA7gUAaAAQAbAAANAEQANADAAAHQAAAIghAKQgiAKiRAeIgBAAQAaBLAYApQAegSAVgTIAdgeQAHgMAAgMQAAgRAPAAQAOAAAdAQQAeARAAAJQAAAJgSAGQgRAGgVAPIhfA+QATAbAYAXQAXAXAdAVIAxAfQAUAKALAAQAQAAAQgRQAQgRASgkQAJgRAHAAQAIABAAAGIgDASQgCALAAAdIAFBQQAAASgZAAQgkAAgzgWgAnBDUQAAgFAZgNQBwg9BJhZIh8hRQgQgKAAgFQAAgFAIAAIASADICKA+QAkg7AAgnQAAgMgHAAIh5ASQghAIgUgBQgUABgWgJQgWgHAAgFQAAgGAXgCQBjgIAkgGQAlgGAdgLQAegMATAAQAUAAAgAKQAeAKAAAIQAAAIgVAPIgOASIgWArQgMAcgeAoIBEAmIAeAXQAJAJAAAUQAAAUgXAAQgWAAgtgkIgvghQhEBJhLAjQhLAkgZAAQgIgBAAgEgADzi6QgzgYAAgLQAAgFAkAAQAfAAAWADQAWAEAOAJQAbARAAAPQAAAQgaABQgZgBgygYg");
	this.shape_1.setTransform(59.5,100.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AFSHgQgzglg2hRQg1hSgkhVQhnBohSAnQhTAngiAAQgOAAAAgHQAAgHASgJQBZgvBBgzQA/gzA+hDQgviPgOhNQhVAYgWAAIglgFQgQgFAAgIQAAgHAPgEICJguQgcjIgOhCQgOhAgPgQQgPgPAAgKQAAgNASAAQARAAArAOQAsAOAAAgIgJBLQAABKAUCdIBTglQA7giAaABQAbgBANAHQANAEAAANQAAANghASQgiASiRA0IgBAAQAaB/AYBIQAeggAVghIAdgzQAHgVAAgUQAAgeAPAAQAOAAAdAcQAeAcAAAQQAAAPgSALQgRALgVAZIhfBrQATAuAYAnQAXApAdAjIAxA0QAUASALAAQAQAAAQgdQAQgcASg/QAJgcAHAAQAIAAAAALIgDAfQgCATAAAxIAFCLQAAAegZAAQgkAAgzgmgAnBFsQAAgJAZgXQBwhnBJiaIh8iMQgQgQAAgIQAAgJAIAAIASAEICKBrQAkhmAAhEQAAgSgHAAIh5AfQghAMgUAAQgUAAgWgOQgWgMAAgKQAAgKAXgDQBjgOAkgKQAlgKAdgUQAegUATAAQAUAAAgARQAeARAAAPQAAANgVAZIgOAeIgWBLQgMAxgeBGIBEBAIAeAnQAJAPAAAkQAAAhgXABQgWAAgtg+Igvg6QhEB+hLA9QhLA8gZAAQgIAAAAgHgADzlAQgzgqAAgRQAAgLAkAAQAfAAAWAHQAWAIAOANQAbAdAAAcQAAAbgaAAQgZAAgygqg");
	this.shape_2.setTransform(59.5,80.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AFSGiQgzggg2hHQg1hIgkhJQhnBahSAjQhTAhgiAAQgOAAAAgGQAAgGASgIQBZgpBBgsQA/gtA+g6Qgvh8gOhDQhVAVgWAAIglgFQgQgFAAgGQAAgGAPgEICJgoQgciugOg5QgOg4gPgOQgPgOAAgIQAAgLASAAQARAAArAMQAsAMAAAcIgJBCQAABAAUCIIBTggQA7gdAaAAQAbAAANAFQANAFAAALQAAALghAPQgiAQiRAtIgBAAQAaBvAYA+QAegbAVgcIAdguQAHgRAAgSQAAgaAPAAQAOAAAdAZQAeAYAAAPQAAAMgSAKQgRAJgVAWIhfBdQATAoAYAjQAXAiAdAfIAxAuQAUAPALAAQAQAAAQgZQAQgZASg2QAJgZAHAAQAIAAAAAKIgDAbQgCAQAAArIAFB5QAAAagZAAQgkAAgzghgAnBE9QAAgIAZgUQBwhaBJiGIh8h5QgQgOAAgIQAAgIAIAAIASAFICKBdQAkhZAAg7QAAgRgHAAIh5AcQghAKgUAAQgUAAgWgMQgWgLAAgJQAAgIAXgCQBjgNAkgIQAlgJAdgRQAegSATAAQAUAAAgAPQAeAPAAANQAAALgVAVIgOAbIgWBBQgMArgeA8IBEA5IAeAiQAJANAAAeQAAAegXAAQgWAAgtg2IgvgyQhEBuhLA1QhLA0gZAAQgIAAAAgGgADzkXQgzgkAAgPQAAgJAkAAQAfAAAWAGQAWAGAOAMQAbAZAAAYQAAAYgaAAQgZAAgyglg");
	this.shape_3.setTransform(59.5,86.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AFSHKQgzgkg2hOQg1hOgkhQQhnBjhSAlQhTAlgiAAQgOAAAAgHQAAgGASgIQBZguBBgwQA/gxA+g/QgviIgOhKQhVAYgWAAIglgGQgQgGAAgGQAAgHAPgEICJgsQgci/gOg9QgOg+gPgPQgPgPAAgJQAAgNASAAQARABArANQAsANAAAfIgJBIQAABGAUCVIBTgkQA7gfAaAAQAbAAANAFQANAFAAANQAAAMghAQQgiASiRAxIgBAAQAaB6AYBEQAegeAVgfIAdgyQAHgTAAgUQAAgcAPAAQAOAAAdAbQAeAaAAARQAAANgSALQgRAKgVAYIhfBmQATArAYAnQAXAlAdAiIAxAyQAUAQALAAQAQAAAQgbQAQgbASg7QAJgcAHAAQAIAAAAAMIgDAdQgCASAAAvIAFCEQAAAcgZABQgkAAgzgkgAnBFaQAAgIAZgWQBwhiBJiSIh8iGQgQgOAAgJQAAgJAIAAIASAFICKBmQAkhhAAhBQAAgSgHgBIh5AfQghALgUAAQgUAAgWgMQgWgNAAgKQAAgJAXgBQBjgPAkgJQAlgKAdgTQAegTATAAQAUAAAgARQAeAQAAANQAAANgVAXIgOAeIgWBHQgMAugeBDIBEA+IAeAlQAJAPAAAgQAAAhgXAAQgWAAgtg7Igvg3QhEB5hLA6QhLA4gZAAQgIABAAgIgADzkxQgzgnAAgRQAAgKAkAAQAfAAAWAGQAWAIAOANQAbAaAAAbQAAAbgaAAQgZAAgygpg");
	this.shape_4.setTransform(59.5,82.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AFSG3Qgzgig2hLQg1hLgkhNQhnBfhSAkQhTAkgiAAQgOgBAAgGQAAgHASgHQBZgsBBguQA/gvA+g9QgviDgOhGQhVAXgWAAIglgGQgQgFAAgGQAAgHAPgEICJgqQgci2gOg8QgOg7gPgOQgPgPAAgJQAAgMASAAQARAAArAMQAsANAAAeIgJBGQAABDAUCOIBTgiQA7geAaAAQAbABANAFQANAEAAAMQAAAMghAQQgiARiRAvIgBAAQAaB1AYBBQAegdAVgeIAdgwQAHgRAAgTQAAgcAPAAQAOAAAdAaQAeAZAAAPQAAAOgSAKQgRAKgVAXIhfBiQATApAYAlQAXAkAdAhIAxAvQAUAQALABQAQgBAQgaQAQgZASg5QAJgbAHAAQAIAAAAALIgDAcQgCARAAAtIAFB/QAAAcgZgBQgkAAgzgigAnBFMQAAgIAZgVQBwheBJiNIh8h/QgQgPAAgIQAAgIAIAAIASAEICKBiQAkhdAAg+QAAgRgHAAIh5AdQghAKgUAAQgUAAgWgMQgWgMAAgJQAAgJAXgCQBjgOAkgIQAlgKAdgSQAegSATAAQAUAAAgAQQAeAQAAANQAAAMgVAWIgOAdIgWBDQgMAtgeA/IBEA8IAeAkQAJAOAAAgQAAAegXAAQgWAAgtg4Igvg1QhEB0hLA3QhLA3gZAAQgIAAAAgHgADzklQgzgmAAgPQAAgKAkAAQAfAAAWAHQAWAGAOANQAbAaAAAYQAAAagaAAQgZAAgygng");
	this.shape_5.setTransform(59.5,84.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.5,107.4,90,21.3);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.2,1,1).p("AA/hCQAQAAAFAFQAFAFgBAcQgBAcgGALQgEAKgHALQgHAMgOALQgOALgRABQgQABgUgFQgVgFgLgKQgCgCgBgBQADgFAFgFQAOgSAKgFIAOgIQAPgIAOgCQAPgCAUAIQAOAEAKAHAg8guIAEAIQAGAOAfAAQAfgBAXgIQAWgIAEgJQADgJgBgHAg8guIACgBQAigLAegEQAngEAQAAQABAAABAAAg1AtQgJgKgKgXQgLgXgFgXIAcgM");
	this.shape.setTransform(8.9,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2AAAC").s().p("AggAhQgVgFgKgKIgEgDIAIgKQAPgRAKgFIANgIQARgJANgCQAPgCAUAIQAOAFAJAHQgDAKgHAKQgHAMgOALQgPALgQABIgFAAQgOAAgSgEg");
	this.shape_1.setTransform(10.2,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFEFE").s().p("Ag5AHIgEgHIACAAQAhgMAegEQAogEAPAAIADAAQAAAHgDAJQgDAJgXAHQgXAJgeAAQggAAgFgOg");
	this.shape_2.setTransform(9,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C76757").s().p("AhIAXQgLgXgFgXIAcgLIAEAHQAGAOAfAAQAfAAAXgJQAWgHAEgKQADgJgBgHQAQABAFAEQAFAFgBAdQgBAbgGALQgKgHgOgFQgUgIgPACQgOACgPAJIgOAIQgKAFgOASIgIAKQgJgKgKgXg");
	this.shape_3.setTransform(8.9,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(0.2,1,1).p("AhBgTQADAGAHABIBigPQAZgEAHgGABQAAQgJAWgYAHQgYAHgUADQgTACgPgBQgOgCgKgEQgJgEgFgEQgNgKgCgZQAFgDALgFQACgBABgBQAWgIAhgFQA0gIAWABQAGAAAFACQAGABADADQADANgEAOQgCAEgBACgAhFAaQBIgpBNAP");
	this.shape_4.setTransform(9.3,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFAHQAWgHAggGQA0gIAXACIAKABQgGAHgZAEIhiANQgIAAgCgGg");
	this.shape_5.setTransform(9.8,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2AAAC").s().p("AgkAWQgOgCgKgEIgOgIQBJgpBMAQQgJAVgYAHQgYAHgTADIgXABIgMAAg");
	this.shape_6.setTransform(9.8,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C76757").s().p("AhUgDQAFgDALgFIADgCQADAGAHABIBigPQAZgDAHgHQAGABADADQADANgEAOIgDAHQhNgQhIApQgNgKgCgZg");
	this.shape_7.setTransform(9.3,5.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#333333").ss(0.2,1,1).p("Ag/AOQgHgDgFgEQAHgFAOgEQAbgKAhgEQAmgEATADQARACgGAGQgBABgCACQgOAJgvALQgwALgZgLQAbgXAjgBIATgBQAWAAAMACIATAD");
	this.shape_8.setTransform(10,6.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2AAAC").s().p("AhCALQAbgYAjgBIASgBQAWAAAMACIATADQgOAKgvAKQgYAGgTAAQgSAAgLgFg");
	this.shape_9.setTransform(10.3,7.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C76757").s().p("AhLAJQAHgEAOgFQAbgJAhgEQAmgEATACQARACgGAHIgDACIgTgDQgMgCgWAAIgTABQgjACgbAXQgHgDgFgFg");
	this.shape_10.setTransform(10,6.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#333333").ss(0.2,1,1).p("Ag3AIQA3gNA4gD");
	this.shape_11.setTransform(9.7,7.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#333333").ss(0.2,1,1).p("Ag/AOQAbgXAjgBIATgBQAWAAAMACIATADQgOAJgvALQgwALgZgLQgHgDgFgEQAHgFAOgEQAbgKAhgEQAmgEATADQARACgGAGQgBABgCAC");
	this.shape_12.setTransform(10,6.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#333333").ss(0.2,1,1).p("ABLglQAGABADADQADANgEAOQgCAEgBACQgJAWgYAHQgYAHgUADQgTACgPgBQgOgCgKgEQgJgEgFgEQgNgKgCgZQAFgDALgFQACgBABgBQAWgIAhgFQA0gIAWABQAGAAAFACgAhBgTQADAGAHABIBigPQAZgEAHgGAhFAaQBIgpBNAP");
	this.shape_13.setTransform(9.3,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_12}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.7,15.5);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AB/HEQgbgugtggQgJgIAAgHQAAgIAeAEIAsAFQAbgBAJgQQAJgPAIg2QAIg1AAgsIgFhMQhGAIgiALIgtAJIgdgIIgYgPQgZCBgiAvQgiAwgWAAQgOAAgLgcIgfg9IgHgSQAAgGAIAAIAzALQAOABAOgVQAPgVAVhGQAVhGAAgoQAAghgmgiIg8B6QgWAognAxQgoAwgfATQgfAVgJgBQgFAAAAgFQAAgHATgUQBGhNA3hvQA3hwgIgxQgnAKgjAAQgjAAgTgIQgTgIAAgGQAAgLAbgCQAagDCqg1IBDgRIAYAFQANAFAAAJQAAAUglAMIhrAjQAgASAAAQQAAAQgLAVIAxAQIAkAUQAGAIAAAKIgRA+IgLA7IAjgDQAaAACEgXQgKgsgfgcIgFgJQAAgMARAAQARAAAQALIA1hKIASghQAAgFgJAAQgVAAhWAkQgWALgMAAQgMAAgVgOQgWgNAAgJQAAgIAJgEIArgCQAiAAAygQIBFgYQAUgKATAAQATAAAWASQAWASAAALQAAALgUAJQgsAXheBYQAMASANAsIBrgWQAmgKAgAAQAggBAZATQAYASAAAMQAAAUgwgBIhVgCQg4AAg7AEQANBLAAA/QAAA3gHArQgHArgOAfQgOAfgPAQQgOAQgPAAQgNAAgKgQgAm+EbQgWgmAAgRQAAgQAQgMQAfgaAYglIBaiTQATghALAAQAGAAAAAJIgJAhQg9CRgwCPQgJAkgNAAQgNAAgWgogAm0h2QgigwAAgQQAAgQAOAAQAWAAAnAYQAnAYAAAkQAAAUgIAMQgHAKgLAAQgUAAgigugAAiioIAHgSQAwhEAbhAQAchAAAgmIgCgQIgDgKQAAgVAUABQALAAAeARQAeASAAAMIgUArIg6BiQAogEBngmQAXgHAVAAQAUAAATAHQATAHAAAKQAAAKgNAGIhMAVQhBAQgeAAQgfABgrgNQgZAlggAeQggAfgMABQgEgBAAgEgAlHk7Qgsg2AAgKQAAgMANAAQAaAAAwAVQAYAJAMAPQAMAPAAAUQAAAXgIAMQgJAOgOAAQgPAAgtg1gAhflXQgkgwAAgLQAAgLALAAIAqAIQAfAIATATQAUATAAAbQAAAlgZAAQgaAAgkgwg");
	this.shape.setTransform(60.1,87.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,40.9,94.3,93.5);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5D5D5").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfgEhibArwMDE3AAAMAAAhanMjE3AAAg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BEF4FE").ss(1,1,1).p("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AFAQQAEAQARAIQASAJAbgIQAAARAOALQAMALATABQASACAPgIQARgJAFgRQAFAYAWANQAVANAagBQAbgBAQgRQAUgTgBghQAdgEAOgMQAMgLgEgNQgEgMgQgIQgSgIgXACQANgOgDgOQgCgNgMgHQgNgIgNADQgPAEgIAPgAQi17QhzhrgsgqQAIAeAgBAQAQAiAZA1QAPgGANgFARE2EQAAAAAAAAIAXgMQAYgOAIgKQgugVg2gXQhrgvgngMQAUAYBIAwQBaA8AJAHgAR44sQgHgHgKgGQgXgOgfgFAR44sQgaABgFAZQgDALAGAHQAFAGAJAAQAJAAAHgGQAIgGAAgMQABgOgLgMgAS63cQAYgKgHgVQgHgSgagQQgagQgXABQgBAAAAAAAQ30+QANgvAAgXAQi17QADAOAEAPQAIAdAGADQgNgFgbgPQgNgIgSgMQAkgPAOgGgAHnB3QgHglAVgjQATgeAjgWQgiAEgUgeQgPgWgFglQAEAfgaAbQgaAbghACQApAVAbA0QANAbAGAWgALHGRQg8grgahNQgZhHALhKQAHg1AegpQAbglApgTQApgUAtACQAuACAoAZQBBAmAUAkQAZAsgEBUQgEBGgWA7QgaBEgoAOQgCAAgCgBALsCWQADABACABQAJAEACALQACAKgEAEQgGAGgKgJQgUgRAWgLQABAAACgBQAXgKATAGQAFABAEACQABgBACgBQAWgLATAGQAGACAEACQARAKgFAQQgCAIgGACQgHACgGgHQgIgKACgIQADgIAKgEQABAAABgBQAXgJAPAQQALAMgRAYQgZAkgBACQgKAdgEA4QgFA7gJAeQgUgBgYAAIhOACQAAAAgBAAQgHAWAFAIQACADAEACQgCAIgKAPQASASAoACQAMAAA0gEQAegCAfgJQAJgDAHgCQAagNgbgNQATgKgWgQQgVgFgrgCALyGKQgPgaAAg0QAEg6gDgZQAAgDgPgoQgLgcANgGQAMgHAJABAMiCUQAVAJgEASQgBAIgHABQgHACgGgHQgPgTATgMgALgH5QAcAHAxgDQA1gDAbgMQAggPgXgUALgH5QgPATAaAHQAOAEAVABQAOAAAQgCQAogDAZgKQAcgLgPgMAMOIYQgEANALAHQAJAGAQAAQAQAAAKgHQALgIgEgOALVHcQgYATAgAJQACABABAAAL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");
	this.shape_1.setTransform(647,340.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// 图层 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2FCFF").s().p("EjE3BaoMAAAi1PMGJvAAAMAAAC1Pg");
	this.shape_2.setTransform(641.8,356.1,0.507,0.518);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,1284.8,720), null);


(lib.test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 底板
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape.setTransform(20,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

	// 图层 1
	this.instance = new lib.start1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.35,0.35);

	this.instance_1 = new lib.start2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,40,40.1);


(lib.DialogBox2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000333").s().p("AgPBWQABgMANgBQAMABACAMQgBANgMACQgNgCgCgNgAgBAtQgDgZABgMQgBgLAKgQIADgCQAlgrgVgUQgIgJgRAAQgWAAgLAVIAAABQABADAEACIAEACQAIAQgQAEQgNgCgCgNQAFglArgEQAuADABAkQAAAPgOAQIgJAJQgPASgEAMQgEANgBAXg");
	this.shape.setTransform(222.2,104.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000333").s().p("ABDBoIgJgOIgIgOQg3AQgiAOIgHACQgFgDADgUIAHgDQAPgIAFgJQAVgcgBgLQgRACgSAFIgKACQgLgCgFgFQgDgDAIgBIA+gMIAAgkQgPADgPgBQgUgDAMgEQAMgCAagIIAAgVQAAgcgJgPQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAQARgEAPAPIgCAEQgGAPAAAjIAUgGQANgFADAAQALAAAEAGQAFAEgJADQgWAKgaAEIAAAkIAxgKQAWgFAEAAQARABAHAJQAFAJgRAAQgegBhDALQANAFAAAEQAAAEgKAJQgQAQgSAUIBDgMIgIgOIgBgBQgHgZAyAuQAFAOgEAOQgCAFgDAAQgDAAgEgFgAhhBrQgPgKgCgWIAEgCQAHgBAHgKIAUggQAQgbABACQACABgPAoIgMAcQgCAGgCALQgFAQgEAAIAAAAgAhdAGQgHgGgOgSIgDgEQgCgNAfASQAKAYgMAAIgDgBgAhBguIgJgJQgLgMgEgHQgHgNAjASQAIAIgDANQgBAFgDAAQgCAAgDgDg");
	this.shape_1.setTransform(201.8,102.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000333").s().p("AgDBqQgIgMgJgIQgJgKASAGQAQAEADgCQALgIAHgqQAKg5gFgOQgIgEgbAHQgQA/gXAgQgqAwgZgCQBGguAThdQgPACgOAFQgJADgFgBQgYgMANgBQAPAAAogGIADgLQACgOAAgJQABgRgGgOQgCgFABgBQAPgDAQARQABADgDAGQgIASgDAcQARgDAPgGIAHgCQATAHAFALIgCAEQgHAKgCALIgDAbQgEA0gJATQgPAcgQABQgCAAgDgJgABiAzIgSgSIgUgUQgMgLAPACQAVAFARALQALAJgBARQgCAIgEAAQgDAAgEgDgAhpA0QgJgJALgRIACgCQARgQADgKQAHgLABAYQgBAPgJALQgMAQgHAAIgDgBg");
	this.shape_2.setTransform(174.3,102.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000333").s().p("AAdBiQgGgJgEgDIgJgKQAAgBAMADQAOAFAEgEQAHgGACgbQABgdgEgXQgpAGgMAEQgEgBgLgGQgHAXgKAPQAJADALALQAIAJgBAPQgDALgIgKIgKgKIgOgQQgaAbgaAIQgQAEAAgBQgBgBANgIQAdgRARgVQgVgSgCgGIAFgaIgGACQgdAKgDAAQgQgEAAgNQANACArgIQANhDgKgKQgEgFABgDQACgDAGABQAVALAAAJQgIAZgHAnIAagEQABgKgBgHQAFgKAQAVIgFAMIgEARQAXgBAqgJQgEgRgHgEQgJgGACgCQACgDAOAEQATgYAEgQQgDgCgbAKQgTAHgDAAQgWgEAFgHQAhgDAngOQAJgCAQAKQALAJgJAEQgSAHgUAUIgJAJQAFADAGARIAYgFQASgEAHABQAaAHgEAKQgCACgNAAQgcgBgZADQAJAlgFAkQgHAigSAKIAAAAQgFAAgHgMgAg/gPIgCAKQgFASABABQACADAQALQAMgZAFgZIgdAHg");
	this.shape_3.setTransform(145.2,103.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000333").s().p("AhaBnQAzgCBTgOIAOgCQAeABAFARQgCACgSgCQgjgCgeACQgaACgmAIIgKACQgWgDgCgJgAguA8QAXgEArgJQARgBABALQgjAKghACQgagDAKgGgAhxArQgEgIAGAAQAPgCARgEQACgtgMgVQgDgEABgCQABgDAGACQATAHAAAIQgEAUACAjIAYgIQABhjgJgCQgEgGABgBQABgDAHADQAUAHABAKQgEAJAAAXIASgIQAOgBAAAJQgOAKgTAAIgBAtIANgEQAHgDACAAQAMgEADACQACADgNAGIgRAGQhOAgACACIAAAAQgGAAgJgLgAA9AlQgjgDgGgOQgHgKACg5IAAgEQABgsgGgKQgFgGABgCQADgDAGAEQAVAIgCAIQgHALgBAzQAkgRAGgNQADgKAKAHQAVAPgMACQgMACggANIgUAIQgDAsAVABQAcAEAOgHQAKgEAEgPQAGgOABABQACgBABAPQAAAKAEAJQAEAGgHAFQgNAKgfAAIgGAAg");
	this.shape_4.setTransform(117.3,102.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000333").s().p("AAvBWQACg3AAhFQACgqgIgNQgHgJADgBQAEgBAPAFQAagIANgIQAaAFABAMQgbAVgNAeQAAABAGADQAZAUAIARQAHAhgPAMQgCABgHgIQgKgKgKgHIgIgIQAAgCAIABQAUAFAAgEQACgZgcgYIgGgFQgBgDAMgaQALgYgBAAQgBgBgQAFIgOAFIgCBnIgBAfIAAAhQgCAcgGAMIgCAAQgFAAABgegAhNBCQgCgCAIgJQAWgcALgnQgWABAGgIIASgFIADgaQgXAAAHgGIARgFQACgYgEgCQgUABADgIQAcgDAYgPQAVACAIANQgJAJABAtIAAATQABBDgZALQgCABgEgHQgGgMgHgGQgGgEABgBQABgCAHABQAHABAJgCQANgHgBhVQABgfgLADQgFAAgPAIIABABQAFAEgBADIgDAJIgBAIIALgEQAJAAAAAFQgDAGgSAEIgCAVIgBAFIALgEQAMgBgCAIQgGAFgRAFQgMAwgcAZQgHAHgEAAIgBAAgAhpAPQgHgFgBgRQgBgkgJgVQgDgIADAAQAFgBAMAHQALgBAOgJQAVgCAGANQgIANgHAcIACADQAHAFgCAEIgNADQgUAEgFACQgBASgEAAIAAAAgAhfg9IgHADIABAuQAQgFAFgFQADghgDgIIgDAAQgEAAgIACg");
	this.shape_5.setTransform(89,104.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000333").s().p("AgJBlQgOgOgQgNIgFgGQABgBAGACIAGACQAYAJABgCQANgOgHhAQgCgbgMgPQgDgEABgBQAIgDANAIQAigiAKgRQgvAGgsANQgNAEgEAAQgNgDgLgKQgFgIANAAQA+ABA3gQIALgCQAbAJAGANQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAgBABQgZAHguAlQAEABABAEIAAAGIACApQACAYABAcQgFAmgQAGQgDABgFgJg");
	this.shape_6.setTransform(284.8,64.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000333").s().p("ABFBmQgGgNgLgLQgHgGABgBQAAgCAIAEIAGACQANAEACgDQAGgIgBg8QgEhRgHgQQgBgIg+AMQARAEAAAFQABACgCAHQgCALAAAKQAkgIAAAIQACAIgnAFIAAAjQAmgLADAJQADAGgsAHQgBBJgMAEQgDAAAChAIAAgMQgOADgOgCQgSgEARgCIAFgBQAJgCAQgCIAAgjQguAEAVgKQARgEAIgBQABgogHgCIglAGQAABZgLAiQgIAgggAUQgJAFgCAAQgBgBAFgFQAegjAFgZQAIgaAAhCQAAgLgIgRQgDgGABgBQADgEANAFQAHADADAAQBIgJAYgLQAGgCADAAQAZAKAHAJIgCAGQgHAOAAAJQAAAcADBFIADAlQgDAfgSAGQgEAAgEgIg");
	this.shape_7.setTransform(256.1,64.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000333").s().p("AAyCCQgGgIgBgXIAAgEQADg5AAgjQAAg7gGgGQgDgEAGgEQALABAFADQATAAAUgOQAHgDAPAKQAKAHgGAEQgbASgPAdQAQAMARAOQASAcgSAeQgHAGgMgNQgNgPgLgIQgOgMAPAGIABAAQAcAKACgKQADgSgegYIgFgEIAHgOQAQgggCgDQgEgEgdAJQgCABABBsIAAAoQgBAngGAAIgCgBgAgIBWQgCgMgEgHQgLAAgUAEQgBAPgEAAQgFAAgDgPIABgNQACgUAAgRQggAbggARQgGADgBgBQAAgBAGgEQAkgYAbgcQgEgGACAAQADgBAGABIAcgdQgrAIgWAGIgGABQgLgBgNgIQgIgGALAAQAugBAhgHIAAgfQgPACgJgBQgKgBgEgCQgEgDAIgBIARgCIARgDQgBgpgGgFQgCgFABgCQACgDAGABQAVAEgDAIQgEAKgBAdIAKgBIAMgCQAEgBADAEQACAEgGADQgEADgRABIgEACIAAAgIAIgBQAcgpACgMQAAgKAIAEIABAAQAPAMgHAGQgFADgJAOIgRAWIASgDIAFgBQAUAEgGAHQgBABgHAAQgSAAgTADQgQATgOALQAXgEAHgEQAGgCAMAGQAJAHgEADQgFAFgBAQIAAAIIgBAjQgDAPgJADIgBABQgDAAgCgHgAgPA5IAFAFQADAEADgBQADgCAAgYQAAgcgCgFQgFgCglAJIAAAUIANgEIALgCQAGgCADAEQADAEgEABQgWAHgKgDIgBAZIATgEIALgCIABAAg");
	this.shape_8.setTransform(228.9,63.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000333").s().p("AAaBuQgHgNgIgJQgHgHABAAQAAgBAIADQAPAFACAAQAEgGgCgiIAAgKQgBgfgIgOQgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAQgEANAPIgBADQgDAKABAZIADAkIABARQgFAVgMAHQgEAAgEgJgAhEBPIAAgBQANgZgGhUQgWAfgZAQQgHADgDAAQgBgCAHgFQAgghAagzQAJgUgBgNQgCgEACgBQAVADADARQgKANgKASIgMARQAKAMgBAOIgBAMQgCBsgKAEQgJgEgBgZgAgeA/QANgWADgPQABgBAAgBQAAgBABAAQAAAAAAgBQABAAAAAAQAJAPgEATQgJAUgMAFQgFgFACgNgABGAZQAOgDAaAVQAPAXgMAKQgRgIgagrgAgUAAQgCgBAFgHQAWgeAOgqQAHgWgCgLQgBgDABgCQAYAEADAMQgHAIgMAZIgRAhQAsgKARgKQAGgCAEAAQAKAAAOAKQAKAGgHAFIgDACQgLADgUAUQgGAGgCgBQgCABADgJIADgGQAJgSgDgCQgDgCgUAHQgmAKgGgGQgIAMgTAQQgEAEgCAAIgBAAg");
	this.shape_9.setTransform(200.5,63.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000333").s().p("AgUAjQAZgQgBgUIgEAAQgKABgDgEQgRgbAegFQAZACgFAhQgIAcgcAKg");
	this.shape_10.setTransform(166.2,73.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000333").s().p("ABLBmIgBgCIgMgOQgFgGATAFQAMABADg1IAAgBQAAgbgLAAQgKAAgjAFIABA5QAAAZgGADQgHgCgBgNIABgJIABgXIAAgkQgMAEggAEIABAUIABAmQAAAUgGABQgIgEgBgJIABgKQACgNAAgJQAAgdgDgGQgDARgUAiQgJANgLAKQgVAMAKgLQAbgcATg3QAOgsADgpQAAgIgEgEIgCgFQAFgEARAGQAggFAcgNIAIgCQAJABAMAJQAHAFgEACQgKAEgLAPQAHACACACQABADgFABQgeAFgcAIQgSAEgHAAQgFAkgKAYQANABAjgGIAHgBIAAgDQgCgQgEgDQgaADAEgJQARgDAfgJQASgFAFAAQAJAAAEADQADAFgIACIgrAKQAFAFABADIgBAEQgCAGAAAFQAYgEAUgGIAIgDQAYAIAAAJQgGAOAAASQAAAbgDAMQgLAfgIAAQgFAAgEgIgAgMg5QAGAAAogJIAMgEQAKgSgDgHIgTAEQghAJgJgBgAhlBPQgEgFgGgPQgCgGAIgFIAIgFQAHgHAfguQAFgJACADQAAADgFAMQgeA6gFASQgBAGgCABIgBABQgCAAgDgEgAgLA5QgEgJAUAKQAHALgIACQgHAAgIgOgAAsA1QgEgJAWAHQAMAIgLAGQgMgDgHgJgAgJAgQgEgIASAGQAKAIgJAFQgGAAgJgLgAAtAcQgIgGATgCQATAEgJALQgJgCgMgFgAhpgpQgDgQAdAVQAJAOgPAIQgMgHgIgUgAhYhcQAGgLAYARQALANgKAJQgMgBgTgbg");
	this.shape_11.setTransform(145.2,63.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000333").s().p("AgYBjQgkgNgKgCQgSgEgQAIQgEADgDAAQgHgBgHgEQgFgCABgCQABgCAHgBIAHgBQAXgHAPAEQgBgTgIgRQgFgJAAgEQAAgIAIgaIgLADQgNAFgFAAQgIgBgCgDQgCgCAHgCQAWgGAIgJIACgBQAVAFAEAIIgEAGQgOAQgBANQAAACAEAJQALAagEAPIAfAIQBFAXBSgFQANgCACADQAAACgMADQguAPgMAAQgSAAhCgYgAAbA1QAWAEASAMQANAQgJAGQgQgGgcgggAgbBUQgFgCALgEQAYgOAIgOQAJgagHgQIgBgEQANgCAGAHIgBAGQgEAMgBAMQgBAagjAPQgJAFgFAAIgCgBgAgUApIABgDQAEgFAAgSQAAgOgHgHIgBgDQABgCAPACQAWgBAcgKIACgBQASAFAHAIIgBADQgHAHABAOQAEAggNADQgFAAgBgMQADgtgEgDQgEgDgeAFIgUADIAAAtQgCALgGADQgFgFAAgJgAg1gYQgEgCAMgCQASgCApgJIAAgRIgOACQgDAJgJgNQgIgOgKgIQgBgBAAAAQgBgBAAgBQAAAAAAAAQAAgBAAAAQABgDAHABIAQACIAWgFQgBgWgHgHQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAKgFAQALIgCAFQgDAHAAAMQAYgDAFgFIABgBQASAFAIAHQAAABgFADIgQAJIABAFQABABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgHABIgeAGIAAARQAygKAGACQANAAAIAEQAFAFgLADIgGAAQg4AAhBARQgLAAgKgEgAgNhOIALAUIAQgDIAAgWIgbAFgAAYhUIAAAUQATgDACgCQAIgKgCgJQAAAAABAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgaAEgAhihTQAPgEAUAMQAJATgJAEQgSgEgRgbg");
	this.shape_12.setTransform(117.5,63.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000333").s().p("AgLBPIABgJQAFgVgBgeIAAgEQABgRgBgOQgmAtg5AgQgIADgBgCQgBgCAIgGQBBgrAegrQAAgGgHgKQgFgJAIADQAHACAGAHQAQgbgCgIQgaADgXAGIgYAGQgKACgRgIQgQgHALgBQAuACBngYIALgCQAigBAAARQgEACgQAAQggAAgdAEQASAPgGAEQgGAEgPATQgDAGgDACQACAJAAARQAABHgCAHQgBAdgGADQgHAAgFgagABaAsIgTgPQhHg4AjAOQAqANASAPQAQAQAAATQgBADgDAAQgFAAgMgJg");
	this.shape_13.setTransform(88.6,64.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000333").s().p("AASAYQgSgqgmgPIAAgBQA5APATApQADAKgKADQgKAAgDgLg");
	this.shape_14.setTransform(277.4,32.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000333").s().p("AA4B9QgLgFgogeQgfAbg0AAIgCAAQgUgCAWgFQA1gLATgTQgYgagQACQgaAcgpAOQgIAEgEgDQgBgCAJgEQAhgOAYgeQAPgSAAgKIABgEQAKgCAKANQABAEgGAFQAdgBAOgKIAEgBQASACAEANQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBABQgFAEgFAJIgBACQgIAPgFAGQAkAWA/AIQAOADABACQABACgNACQgkAGgRAAIgFAAgAgoAyQASABAWAVQAJgRAEgRQgfAIgPgDIgHAHgAALALIgCgGQgNgBgaAGQgFAFgEgCQgFgDgBgKQgDgigJgQQAAgBgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAJABIAKABQAggCAWgJIAGgCQAXAIAEAJIgCAEQgFAIgCALQgJAugMABQgCAAgGgJgAggACQARgBANgCQAJgEAJAFQAJgugGgHQgCgBgZAEIgdAEIACAWQAtgMgBAKQgJAIgigBIACAVgAhjgqQgDgBAJgGQASgPAPgUQAQgYgDgMIABgEQASAAAIALIgHAJQgJALgIAIQArgIAggKQAMgDADABQAOACAEAHQABAEgNACIgTACQggAEgdAHQgEABgOgDIgCgBQgPAXgYAMIgMADIAAAAg");
	this.shape_15.setTransform(257.1,23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000333").s().p("AhYBuQgIgFAJAAQBFgEAIgDIAAgaIgCAAIgbACQgTgEAKgEQAGACAZgGIAHgBIAAgaIgDABQgQACgKADQgEALgIgXIgBgCQgIgegLgJQgDgDABgCQABgCAGAAQAHAAAHACIAjgFIAGgBIAAgbQgfAEgsAKIgHABQgIABgMgFQgKgGAKgBQBBgEAlgGQgBgYgGgEQgIADgPABQgLABgBgCQAAgCAKgDQA8gRADgNQAWABADASQgKABgoAKQAOAGgDAGQgFAIAAAIQAggFAfgGQASgFAHACQAkAIgHAJQgBABgLAAQgqgCg/AEIAAAaIATgCQAWgEACgCQAGgEAPAKQAOALgEACQgIAEgIAOIgBAEQgNAggFgBIgEgDQgCgEgDgCIgeAFIAAAaQAHgBAKgEQAKgDAFABQAPADgCAFQgEAGgeADIgLABIAAAaIAZgCQAtgFADAAQAdAHgJAHQgDABgLgBQgjgCguADIhFAMQgHAAgLgHgAgygJQAEAPAGAbIAdgFIAAgTQgYAFAFgIIATgFIAAgSIgnAIgAAUgFQALADgDAEQgBADgPACIgLABIAAASQAagEAIABIABAAQAHgLACgSQACgNgFgDQgIgCghAFIAAATQADAAAIgDIAHgCg");
	this.shape_16.setTransform(228.7,23.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000333").s().p("AgLBPIABgJQAFgVgBgeIAAgEQABgRgBgOQgmAtg5AgQgIADgBgCQgBgCAIgGQBBgrAegrQAAgGgHgKQgFgJAIADQAHACAGAHQAQgbgCgIQgaADgXAGIgYAGQgKACgRgIQgQgHALgBQAuACBngYIALgCQAigBAAARQgEACgQAAQggAAgdAEQASAPgGAEQgGAEgPATQgDAGgDACQACAJAAARQAABHgCAHQgBAdgGADQgHAAgFgagABaAsIgTgPQhHg4AjAOQAqANASAPQAQAQAAATQgBADgDAAQgFAAgMgJg");
	this.shape_17.setTransform(200,24.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000333").s().p("AgNByQgggOgLgjQgEgKADgCQAGABADAIQAMAcAcAKQAMAFAXAAQAYgBAEgEQAGgEgKgSQgGgLAEgBQACAAAKAKQAGAIANAKQASAKgIAFQgOALglACIgGABQgcAAgSgJgAhnBjQgEgGAFgLQAAgDAGgIQAKgNACgHQAEgJACAAQACAAACAJQABAegSASQgFADgDAAQgDAAgBgDgAAKBJQgigfAPAEQAPAAAKAHQAIAHgDAMQgBAEgDAAQgDAAgEgDgABpBIQgqgaAKgDQAUgBARAHQAKAIgBANQgCAFgEAAQgEAAgEgDgAg7AgIACgSIAEgoQgYAhgYAUQgOAMgDgBQgCgCAMgNQAighARghIgeAFQgIAAgLgDQgFgDAHgBIABAAQAmgIALgEQABgngIgQQgEgHABgCQABgCAIACQAWAGgDAHQgGAKAAAmIAGgBIALgDQAOgBADAJQADADgmAHIAAAVIATADQAKACABAMQgCAJgKgGIgHgFIgLgJIgBAwQgBATgEABQgFAAgFgRgAA6AaIgDgGQgNAAgPADIgNABQgCAKgFgEQgFgDgBgLIAAgHQADgRgBgWQgBgngFgHIgBgCQgJgKAaAIQAWgEAXgJQAgAHgBALQgJAGAAAuIAAALQgBAqgOAIIAAAAQgDAAgEgMgAA0gRQAAAJgmAAIAAAZIAfgFQAFgBAFAEIAFABQAEgFACgtQAAgmgEgEQgEgCgdAEIgPACIAAAaQAHgBAKgEQATgFACAKQAAACgRADQgOACgHgCIAAAaQAHgBAKgDIALgCQAHAAADAEg");
	this.shape_18.setTransform(173,23.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000333").s().p("ABBBuQgagYgggSQgmAlhAAAQgIAAgBgBQAAgCAIgBQA+gJAdgdQgagJgUgFIAKgSQgnAFgZAHIgMACIgLgEIgDgBQgEgDAAgCQABgCAFAAQARgBAggFIAqgFQAKgRACgNIgbAGQgDAMgHgMIgBgDQgLgcgKgMIgCgDQABgEAPAEIAIABIAbgGQAAgNgGgYQgMgBgGgEQgEgDALgBQANAAAsgNQAYgGAEAAQALAAAFAFQAEAGgJADQgNAEgUACQAMAHABAGQAAAFgFAOIgBADQAVgDAJgEIAFgBQAeALAAALQAAACgEACQgOAKgOAUQgFAGgDAAQgDAAgGgIIg0AIQAIAHAAACIgCACIgKASIAqgGIgBgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQABAAAAAAQACgCAKAEIAGABIAegFIAsgFQAPABAKAKQAFAJgPAAIgUgBQgbgEgrAFQgFARgPAVQA2AZAEAGQAOASgHALIgBAAQgFAAgJgJgAgaAcIgKARQAVAEAPAGQANgQAFgRgAg/gpQAFAQACARIAZgEIgEgjgAgagwIACAiIAUgEIAHgkgAAcg4IgMABIgMAjQAZgFAHADIADABQAOgYgCgMIgDgBIgUACgAgehbQAFAGgBAMIAAASIAegEQAFgYgFgNQgMADgWACg");
	this.shape_19.setTransform(144.7,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 2
	this.instance = new lib.tipbg();
	this.instance.parent = this;
	this.instance.setTransform(357,-37,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.DialogBox2, new cjs.Rectangle(6,-37,351,229), null);


(lib.DialogBox0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000333").s().p("AgQBWQACgMANgBQAMABACAMQgBANgMACQgNgCgDgNgAgBAtQgDgZABgMQgBgLAKgQIADgCQAlgrgVgUQgIgJgRAAQgWAAgLAVIAAABQABADAEACIAEACQAJAQgRAEQgNgCgCgNQAFglArgEQAuADABAkQAAAPgOAQIgJAJQgPASgEAMQgEANgBAXg");
	this.shape.setTransform(77.2,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000333").s().p("AAEA6IABgPIACgZQABgSgHgHQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBQALgDALAOQABACgCAGQgFANgCAWQAnghADgPQAAgFACgBQAVADAGAKQABAFgHADQgIACgEAEIgRAJIgkAVQgHA1A2gJQApADAKgyQABgGACAAQACAAAAAHQAAATAEAOQADAGgBADQgKAPgyAEIgIABQg3AAADgvgAhjBjQBIgvAJhsQABgQgEgJQgBgDABgCQAEgCASAEQAigFALgLIAEgEQAfAJAAALIgDADQgLAGgPAYQAJAFAAACQAAAEgKACIgXAEQgbAHgJABQgMBTg/ApQgNAGgEAAQgDAAAEgFgAAnhUIgDABIgkAJIgBALIgGAdIAsgNQAIgSABgLQACgGgCgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgEAAgAhrANIgBgKQgCgVgCgLQgCgPgGgKQgEgEABgCQAFgEASAIQASgDALgFIAGgCQASABALAMQAAAAAAABQgBAAAAABQAAABAAAAQgBABAAAAQgKAJgIAbQAHAGABADQAAADgGABIgPABIgaAFQABASgFAFIgBAAQgFAAgCgQgAhIg0IgLACIgQADIAEAtIAZgHQACgFADgZIABgHQABgGgGAAIgDAAg");
	this.shape_1.setTransform(56.4,27.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000333").s().p("ABDBoIgJgOIgIgOQg3AQgiAOIgHACQgFgDADgUIAHgDQAPgIAFgJQAVgcgBgLQgRACgSAFIgKACQgLgCgFgFQgDgDAIgBIA+gMIAAgkQgPADgPgBQgUgDAMgEQAMgCAagIIAAgVQAAgcgJgPQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAQARgEAPAPIgCAEQgGAPAAAjIAUgGQANgFADAAQALAAAEAGQAFAEgJADQgWAKgaAEIAAAkIAxgKQAWgFAEAAQARABAHAJQAFAJgRAAQgegBhDALQANAFAAAEQAAAEgKAJQgQAQgSAUIBDgMIgIgOIgBgBQgHgZAyAuQAFAOgEAOQgCAFgDAAQgDAAgEgFgAhhBrQgPgKgCgWIAEgCQAHgBAHgKIAUggQAQgbABACQACABgPAoIgMAcQgCAGgCALQgFAQgEAAIAAAAgAhdAGQgHgGgOgSIgDgEQgCgNAfASQAKAYgMAAIgDgBgAhBguIgJgJQgLgMgEgHQgHgNAjASQAIAIgDANQgBAFgDAAQgCAAgDgDg");
	this.shape_2.setTransform(28.8,27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000333").s().p("AABBuQgBAAgDgJQgEgNgFgHQgJgLAOAFQANAHAGgBQAYgbABgpQgCgFgNgFQgOgDgEgFQgtBMg9AYQgVAEAJgFQBhg9ALhEQgzAHgZAJIgGABQgigJARgEQBrgMA9gNQAOgDAGAAQAVgCAMALQAHAKgXAAIgIAAQgogBgvAFQAKAHAAADQABADgEAGIgFAHQAQAFAMAAQAEAAABABQATAIAFALQAAAAAAABQAAAAgBAAQAAABgBAAQAAABgBAAQgJAGgBAMQgGAigRAaQgLAPgLAAIgFgBgAgGhcIgLgJQgLgJAOAAQAYACAKAIQAPAagSAAQgHgDgQgPg");
	this.shape_3.setTransform(0.1,27.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000333").s().p("AAdBiQgGgJgEgDIgJgKQAAgBAMADQAOAFAEgEQAHgGACgbQABgdgEgXQgpAGgMAEQgEgBgLgGQgHAXgKAPQAJADALALQAIAJgBAPQgDALgIgKIgKgKIgOgQQgaAbgaAIQgQAEAAgBQgBgBANgIQAdgRARgVQgVgSgCgGIAFgaIgGACQgdAKgDAAQgQgEAAgNQANACArgIQANhDgKgKQgEgFABgDQACgDAGABQAVALAAAJQgIAZgHAnIAagEQABgKgBgHQAFgKAQAVIgFAMIgEARQAXgBAqgJQgEgRgHgEQgJgGACgCQACgDAOAEQATgYAEgQQgDgCgbAKQgTAHgDAAQgWgEAFgHQAhgDAngOQAJgCAQAKQALAJgJAEQgSAHgUAUIgJAJQAFADAGARIAYgFQASgEAHABQAaAHgEAKQgCACgNAAQgcgBgZADQAJAlgFAkQgHAigSAKIAAAAQgFAAgHgMgAg/gPIgCAKQgFASABABQACADAQALQAMgZAFgZIgdAHg");
	this.shape_4.setTransform(195.6,-12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000333").s().p("AhNBcQgGgPAGgCQBLgnAtheQgCgFAEgBQADgBAHADQAVAOgJAFQgEACgUAXQg3A8glAgQBJgKAfgGIgJgMQgWgcAQAKQAdAQAPAQQAMAPgCAQQgGAPgKgOIgGgHIgMgTQh0AagIAHIgDABQgFAAgFgIgAhdASQgBgCAKgHQA9g8AJgnQgCgIADgBQACgCAGADQAUAQgEAFQgFACgPAUQgnAyghASQgKAGgCAAIAAgBg");
	this.shape_5.setTransform(167.2,-13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000333").s().p("AAdBOIADhfQgrAJgKACQgYgHAHgEIA/gMIAHgBQAAhKgJgIQgFgHADgCQABgCAKACQAXAIAAAJQgFAPgBA5IAYgFQAPgEAFgBQAaABAGARQgCAEgZgBIgxABQAAAigBgBIgCA/QAAAqgKAEQgIgFABgngAhHBOIABgLQAFgXABgUIAAgBQABgzgCgKQgdAhgNAJQgQALgBgCQgBgCANgNQA9hCgBgsIAAgCQgCgJAMAIQAUALgEAHQgEADgMASIgTAhQAMAIAAAJQgCgEgBA+IAAAgQgBAggGAFIgCAAQgHAAgDgXg");
	this.shape_6.setTransform(139.2,-11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000333").s().p("AgJBmQgOgOgQgNIgFgHQABgCAGADIAGACQAYAJABgDQANgNgHhAQgCgagMgPQgDgFABgBQAIgEANAKQAigkAKgQQgvAFgsANQgNAFgEAAQgNgCgLgMQgFgHANAAQA+ABA3gQIALgDQAbAKAGAOQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgZAIguAkQAEADABADIAAAFIACAqQACAYABAdQgFAlgQAHQgDgBgFgHg");
	this.shape_7.setTransform(111.2,-12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000333").s().p("ABFBmQgGgNgLgLQgHgGABgBQAAgCAIAEIAGACQANAEACgDQAGgIgBg8QgEhRgHgQQgBgIg+AMQARAEAAAFQABACgCAHQgCALAAAKQAkgIAAAIQACAIgnAFIAAAjQAmgLADAJQADAGgsAHQgBBJgMAEQgDAAAChAIAAgMQgOADgOgCQgSgEARgCIAFgBQAJgCAQgCIAAgjQguAEAVgKQARgEAIgBQABgogHgCIglAGQAABZgLAiQgIAgggAUQgJAFgCAAQgBgBAFgFQAegjAFgZQAIgaAAhCQAAgLgIgRQgDgGABgBQADgEANAFQAHADADAAQBIgJAYgLQAGgCADAAQAZAKAHAJIgCAGQgHAOAAAJQAAAcADBFIADAlQgDAfgSAGQgEAAgEgIg");
	this.shape_8.setTransform(82.5,-12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000333").s().p("AAaBvQgHgNgIgLQgHgGABAAQAAgBAIADQAPAGACgCQAEgFgCgiIAAgJQgBgggIgNQgBgBAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAQgFANAQIgBAEQgDAJABAaIADAkIABAQQgFAWgMAGQgEAAgEgIgAhEBOIAAgBQANgZgGhSQgWAegZAPQgHAEgDABQgBgDAHgFQAgghAag0QAJgTgBgNQgCgDACgDQAVADADASQgKAOgKARIgMASQAKAKgBAQIgBAMQgCBrgKAEQgJgEgBgagAgeA+QANgUADgQQABgBAAgBQAAgBABAAQAAgBAAAAQABAAAAAAQAJAPgEATQgJAVgMAEQgFgGACgNgABGAZQAOgDAaAUQAPAYgMALQgRgJgagrgAgUAAQgCgBAFgHQAWgeAOgqQAHgWgCgLQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAYAEADAMQgHAIgMAZIgRAhQAsgKARgKQAGgCAEAAQAKAAAOAKQAKAHgHADIgDADQgLADgUAUQgGAHgCgBQgCgBADgHIADgHQAJgSgDgBQgDgDgUAHQgmALgGgHQgIAMgTARQgEADgCAAIgBAAg");
	this.shape_9.setTransform(54.9,-12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 3
	this.instance = new lib.tipbg();
	this.instance.parent = this;
	this.instance.setTransform(270,-92,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.DialogBox0, new cjs.Rectangle(-81,-92,351,229), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.2,1,1).p("AAMgGIAZgnIBcgYQALgCAKgDQAjgJAigKQBMgRgCgGQgDgLgSgEQgIgCgsgBIg5ACIAggLQAVgKARgGQAKgDAagGQAOgEAIgGQAIgHgMgFQgBgBgBAAQgLgEAAAAQAEgDADgCQAFgHgDgGQgGgMgoAAQgOAAgoAHIglAHIgOAEIAUgRQAVgTAMgFQA3gXAAgHQAAgGgDgCQgEgEgLgCQgMgCgOACQgPACgJAFIhnA4QgdALgHAAIgiAAIgEAAQABgBAAgBQACgEAGgNQAHgNACgNQACgOgKgSQgIgTgJAAQgKgBgEALQgEALgDAWQgCAWgLAZQgKAZABAZQABAGAFARQAAAAAAABQAFAPgCAJQgCAMgNAWQgDAFgDAFIgBgDQgBABgBABQgYAZgXAVIAHAeQANAtATAUQAXAYAXAOQACgEADgFIAxhHQgEgBgEgBQgGgDgGgDQgCgBgDgCQgcgNgIgOQgCgDgBgDQgBgBAAgBQgBgBAAAAQgGgMgIgSIgJgVABtjDIAOAPQACACACACQAEAEAHAFQAGAGABAHQABADAAADAESjDQhXAFgxAXAgBjaQgCgBgBgBAAJhyIAagLQAdgMATgCQACAAADAAQAcgCAVAMAAZivQgHgWgTgVAh1glQgJAHgIAHQggAbg/AwQgIgOgOABQgLABgLAFQgNAFgCAHQgCAHgBAyQgBAZgBAYAj3BJQgHAdALAjAAMgGIAAAAAACAIIAKgOAkeEhIAcAPQAZAPAOgFQATgGATgPQAWgUAigtQAEgFAFgGQApg4ArhB");
	this.shape.setTransform(30.1,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9D6E0").s().p("Ag0AmIgbgPQAMgRgVgoQAVAPAZALQAfANAXgFQATgCAagVQAMgJAUgQIgJALQgiAsgWAUQgTAPgSAGIgHABQgNAAgTgLg");
	this.shape_1.setTransform(9.5,58.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3B0A1").s().p("AhuBnQgcgOgHgOIgEgHIAAgBIgBgBIAAgBIgOgeIgJgVIAGgKQABAHAFAHQARAiAIAKQATAYAXAFIAAAAIgJAPIgHgDgAAVhPQAWgJAggFIBCgKQAVgDAMADIgHAGQhXAFgxAWIgKgJg");
	this.shape_2.setTransform(40.7,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FACBC4","#FEE2D9"],[0,1],-6.5,8.8,2.8,-3.2).s().p("AggBKQgXgFgTgYQgIgKgRgiQgEgGgCgGQANgWACgMQABgKgEgPIAAAAQAVgFAYAEQAjgCAiAEQAMAEAKAGIAAABIADAYQAMAFAOAEQAJACAJAEQAGADAFAAQAEAJABALIAAACIgVAFIhbAYIgZAngAAng6QgUACgcALIgZAMIAZgMQAcgLAUgCIAEAAIgEAAg");
	this.shape_3.setTransform(34.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FACBC4","#FEE2D9"],[0,1],0,0,0.1,0).s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_4.setTransform(25.6,28.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9F2FD").s().p("AhuCnQgZgLgUgPIgFgJIAGg7IACgxQABgyACgGQACgHANgGQALgEALgBQAOgBAIAOQA/gwAfgcIARgPIAHAeQANAvATAUQAXAYAXANQgXgNgXgYQgTgUgNgvIgHgeIAvguIACgBIABACIAJAVIAOAeIAAABIABAAIABACIADAHQAIAOAcAOIAGADIANAFIAHADIgyBHIgFAIQgqBBgqA3QgUARgMAJQgZAUgUADIgNABQgTAAgXgJgAhoAvQgGgWAAgTQAAgLACgLQgCALAAALQAAATAGAWg");
	this.shape_5.setTransform(16.2,40.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE2D9").s().p("AiiCNIABABIAAABIgBgCgAAfBgQgBgMgEgJQgFAAgFgDQgJgEgIgCQgPgEgMgFIgCgZIACAAIAFAAIAAAAIABAAQAVAAAQAJIADACIgDgCQgQgJgVAAIgBAAIAAAAIgFAAIgCAAIAAAAQgLgGgMgEQgigEgkACQgXgEgWAEQgFgRgBgEQgBgaAKgZQALgZACgVQADgWAEgLQAEgMAKABQAJABAJASQAKASgCAOQgCAOgHANIgJAQIgBADIAEAAIAjAAQAHAAAdgLIBmg4QAJgFAPgCQAOgCAMACQALACAEADQADADAAAGQAAAHg3AXQgMAFgVASIgUASIAOgEIAlgHQAogHAOAAQAoAAAGAMQAEAGgGAGQgNgDgUADIhDAKQgfAFgXAJIgEgDIgNgPIANAPIAEADIALAIQAGAGABAIIABAGIgBgGQgBgIgGgGQAxgVBXgFIALADIACABQAMAFgIAHQgIAGgOADIgkAKQgRAFgVAKIggAMIA5gCQAsABAIACQASAEADALQACAGhMARIhFASIAAgBgAhdgCQgHgXgUgUQAUAUAHAXg");
	this.shape_6.setTransform(42,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-1,60.8,65.1);


(lib.cf7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F3ADA9","#F9ADAB","#FEE2DA"],[0,0.804,1],0,0,0,0,0,3.5).s().p("AgDApQgKgBgHgNQgGgNACgPQACgSAIgKQAJgMAJABQAKABAGANQAGAMgBAQQgCASgJALQgHAKgIAAIgCAAg");
	this.shape.setTransform(2.5,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.1,8.2);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.2,1,1).p("ADehJQg3BDgjAbQgQAMghAuAkyBcQAIg3AXhBIABgDQAKgXAMgTQAKgRAAACQCqAbAAAAIC2gHQB9gXAAAAQAlA5AJAiQAWAsAEAc");
	this.shape.setTransform(31.1,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D15354").s().p("ACNgMQiWARhLABQh1ABhagdIACgDQAKgXAMgTQAKgRAAACICqAbIC2gHIB8gXQAmA5AJAhQAWAtADAcIg5ACQgUg5gNgUIhaBRIgsABIgWABQBHhIAZgagAB1AbQgRAMghAuQAhguARgMQAjgbA3hDQg3BDgjAbg");
	this.shape_1.setTransform(32.6,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E55B5C").s().p("Aj3g7QBaAdB1gBQBKgBCXgSQgZAchHBGIluAMQAIg2AWhBgAD1giQANAUAUA4Ih7AEIBahQg");
	this.shape_2.setTransform(28.2,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-1,63.4,20.4);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.2,1,1).p("AFmhlQgBgBgCAAQgOgEg/AIQhEAIgjAOQggANglAXQgUAMgXARQgSALg1AcQATgUAcgXQA/g3AwgZIA0gVQA6gVAjgDQA5gEASAMgACOgLQAQgGAPgFQBHgZAPgEQAlgMAQABQAQAAAUACQATABAAABIAIgYQgBgCgBgDQgBgBgBgCQgFgIgIgDABzAeIAAgCQAGgEAGgGQABgCABgBQALgNACgNABxAeIACgCABxAeQABAAABAAAhdAAIgHAIIgEAGQgBABgBACQgCABAAACQgBABgBABQgBACgBABIAAAAQgJAOgDAGQgPAYAFASQAFAoAcANQAJAEAMADQAaAFAmgBQAggCAXgGQAPgEAKgHQALgHASgXQAbgiAAgQQAAgIgCgIIgDgGABFBIIAsgqAghAqQACAAADABQAHABANAAQAEAAAEAAQAZgBAxgZQAlgSAfgLAgrgVQgOgNgRgNQgkgcg4gaQhvg1hhAEIAHAfIAKArQAegCAnACQBOAFArAZQAmAWAkAYQAdAUAdAWQABAAABAAIACADIAMAUAgIAcQAAgCgBgCAgrgVQAHgBALgBQABAAAEAAQACgBABABQAFACAAAGQADAIAAALQAAAHAAANQgDgHgIgLQgKgNgNgOg");
	this.shape.setTransform(37.5,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8BB783").s().p("AgMBSQCOhSCfgkQAsgLAkgCIACAFIgIAYIgTgCIgkgCQgQgBglAMIhWAcIgfALQgfAMglASQgxAZgYABIgFAAIgEAAgAglBQIgCAAQgcgWgegVQgjgYgmgVQgsgZhNgFQgngCgeACIgKgrQBZAHBaAsQBVAoBLBHIgGgBg");
	this.shape_1.setTransform(37.9,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3B0A1").s().p("AhoBJQgcgNgEgoQgFgTAOgXIAMgTQgFAPgBARQgBAYAJAVQAJAWAQARIAFAEQgMgCgJgEgAgTgSIgEgBIgDAAIgIgDIgCgDIAGABIATABIAJAAQAYgBAxgYQAlgSAfgMQgBANgMAOIgCACQgFAHgHAEIgCACIhQAQQgYADgNAAIgMgBgAg7giIgsgYIAHgJQAeAUAcAWIACAAIACADQgMgEgNgIg");
	this.shape_2.setTransform(37.8,21.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FACBC4","#FEE2D9"],[0,1],-2.9,2.8,-0.6,-0.4).s().p("AgqA+IgFgFQgRgRgJgWQgJgUABgZQABgRAGgPIAAgBIACgCIACgDQAOADAOAHIABAAIAPAUIAFAIQAJANAKAJIAIAAIAUAEIADACIAmADQAUATgHAaIgEAJQgWAGghABIgSABQgaAAgTgEg");
	this.shape_3.setTransform(33.7,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE2D9").s().p("AAlBLQAHgagUgTIglgDIgEgDIgUgEIgJAAQgJgJgJgMIgGgIIgOgUIgBAAQgOgHgOgDIACgDIACgDIAEgFIArAYQANAIAMAEIAIADIADABIAEAAQANADAkgFIBQgQIgsApIAsgpIADgBIACAGQACAJABAIQgBAOgbAjQgSAWgKAHQgKAHgQAFIAEgJgAgZAFIgMgTgABtgeIABABIgDABgABugdgAgag1QgJgOgOgNIASgCIAFgBQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAFACAAAFQADAIAAAMIAAAVQgEgIgIgLg");
	this.shape_4.setTransform(38.1,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AFD1A9").s().p("AgbBhQhLhHhVgpQhZgshagGIgHgfQBhgFBwA1QA3AbAkAaQARANAOAOQANANAKAOQAIAMADAHIABAEQAUgUAbgYQA/g2AwgZIA0gVQA6gVAjgDQA5gFASAMIgMAgIgDgCIAAAAQgFgBgKAAIAAAAIgHAAIgHABIgEAAIgEAAIgDAAIgHABIgQACIAAAAIAAAAIgIABIgGAAQhEAJgjAOQggANglAWQgTAMgZARQgRALg1AdQA1gdARgLQAZgRATgMQAlgWAggNQAjgOBEgJIAGAAIAIgBIAAAAIAAAAIAQgCIAHgBIADAAIAEAAIAEAAIAHgBIAHAAIAAAAQAKAAAFABIAAAAIADACQAIADAFAHIACAEQgkACgsAKQigAkiNBSIgCAAIgSAAg");
	this.shape_5.setTransform(37.4,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,77,32.3);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.2,1,1).p("ABLA7IAAABQAfATALgHQAUgJALgKQAWgSgEgbQgFgpgFgRQgIgdgVgKQgXgLgLgCQgLgCgGAEIgVAOQgEgEgFgDQgIgFgKgFQgdgSgSAAQgigBgDAAQgPABgFAHIgrA7AhmgBQACgjAigeAimgQQAAACAPAmQAIAXAGAOQAGALADAFQATAZAEAFQARASAQgCQAZgDB6g9AA3hWQhNBYBhA5");
	this.shape.setTransform(16.7,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9D6E0").s().p("Ah4BhIgXgeQgDgEgFgMQAYALAdACQAiAAATgOQATgPAGgjQAFgqAFgTIAGAXQAOgsAVgUIAJAGQgiAnAAAiQAAApA2AgQh5A8gZADIgDAAQgPAAgQgQgAA9AyIgBAAQg2ggAAgpQAAgiAignIAVgNQAHgFAKACQALADAYALQAVAKAHAcQAFARAFAqQAFAagWATQgMAKgTAIQgDACgFAAQgLAAgXgOgAAohgIAAAAg");
	this.shape_1.setTransform(18.1,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9F2FD").s().p("AhMBWIgPglQgOgnAAgDIAuglIAsg7QAFgHAOgBIAkABQASAAAfASIARAKQgVAUgPAtIgGgYQgFATgFApQgGAlgTAPQgTANghAAQgdgCgYgKgAgpAXQACgjAigdQgiAdgCAjg");
	this.shape_2.setTransform(10.6,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,35.4,26.6);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.2,1,1).p("AiAk5IAaAEQAMACAIACQAJACACACQAIAGAUAFQAEABAMABQALACADAIQAGANATBmIAQAFQAQAGACAFQACAEgDAUQgDAUABADQACAFAYAdQAYAeAOAPQAKAKAhAfQAIAIAHAHQATATAHAMQAOATAIBDQAJBFgKAdQgLAjgUARQgDACgDADQgVAOgagLQgDgCgEgCQgcgOgkgaQgmgcgdgdQggghgYgaQg6g/gJgZQg0hQgVhMQgpiTB3hIgAANBcQAcgHAbAEQANACANAFAgWAxQAcgEAaABQA9ADAuAZAg5iKIA5AF");
	this.shape.setTransform(21.7,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9D6E0").s().p("ACAE2IgHgEQgcgOgkgaQgmgcgdgdQggghgYgaQg6g/gJgZQg0hQgVhMQgpiTB3hIIAaAEIAUAEQAOAeADAiQAFAqgNAnIBUARIgLAKIg5gFIA5AFQgUARgZADQANBKgRBLIgDANQAWAuAfAqQAsA3A5AnIgCgMQgIgwgOgYQgLgSgRgNQgSgOgVgFIA5gIIARgCQgpgWgxgJIAlgKQBDgOBCADQATATAHAMQAOATAIBDQAJBFgKAdQgLAjgUARIgGAFQgMAHgNAAQgLAAgLgEgABeBgQgNgFgNgCQANACANAFgACLBKQgugZg9gDQA9ADAuAZgAAAiFg");
	this.shape_1.setTransform(21.7,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9F2FD").s().p("AgmCuQghgpgVguIACgNQARhLgNhLQAagCAUgRIAMgKIhWgRQANgngFgqQgDgigOgeQAJACADABQAHAGAVAGIAQACQAKABADAJQAHAMATBnIARAFQAPAGACAEQABAFgCATQgEAVABADQACAFAYAdQAYAdAPAOIAqArIAPAPQhCgDhCAOIgLAAIAAAAIgBAAQgUAAgXACQAXgCAUAAIABAAIAAAAIALAAIgmAJQAxAKApAWIgRACIgCAAIgCAAIgRgBIAAAAIgBAAQgNAAgOADIgCAAIgBAAIgCAAIACAAIABAAIACAAQAOgDANAAIABAAIAAAAIARABIACAAIACAAIg3AIQAUAFARAOQARANALARQAPAZAHAvIACANQg5gngqg4g");
	this.shape_2.setTransform(25.8,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,45.5,64.9);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.2,1,1).p("ABflnQgKAEgMAFQgOAFgJAEQgFACgDACQgTALgCABQgMAIgBAHIgZBwIgaAXIgCACQgBADADAHQAGALAFAOIgNAgQgNAhgCAIQgOA8gEAGQgBACgmBHQglBFgIARQgTAugEALQgNAmAGATQAMAjAkAcQAvAlAvgYQBjg0AShEQABgGACgGQAGgYALggQAOgqAEgNQAKggAZgvIATgdQANgUAFgSQAHgbAGgyQAHg7gEgmQgFg/gOgeQgXgzg4gCgAALi3QAhAQAKAbAgHA1QAmgkAngGAg+A6QAxg1BGgs");
	this.shape.setTransform(19.5,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9D6E0").s().p("AgbDKIAGgNQACgJAAgHQgBgIgHgFQgGgGgIACIAbgqQg+AdhDgGQBIhoBlhLIgej6IAWgJIAWgIQA4ACAXAzQAOAeAGA/QADAmgHA7QgGAygHAaQgFARgNAVIgTAeQgZAvgKAgIgSA2IgRA5QgvAogzACgAhwBsQAwg1BGgtQhGAtgwA1gAg6BnQAngkAmgGQgmAGgnAkgAglhZQgMgHgMgBQgIABgEgCQgEgCgFgIIgGgHIACgCIADgBIADgBQAHgCAJACQANADAOAPQALAKAJARQgNgLgHgEg");
	this.shape_1.setTransform(24.5,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9F2FD").s().p("AhXFJQgkgdgLgiQgHgUANglIAYg5QAHgSAmhFIAnhHQADgHAOg8QACgIAMgiIAOgfQgFgOgGgLQgEgHABgDIACgCIAbgXIAZhwQACgHALgIIAVgMIAIgFIAfD6QhmBMhHBnQBCAGA+geIgbArQAIgCAGAFQAHAGABAIQAAAHgCAIIgGAOIg0BsQAygCAxgpIgDANQgRBDhlA1QgSAJgSAAQgcAAgdgWgAAbixIgDABIgDABIgCACIAGAHQAFAIAEACQAEABAIAAQAMABAMAHQAHAEANALQgJgRgLgLQgOgOgNgDIgIgBIgIABgABwiUQgLgbghgQQAhAQALAbg");
	this.shape_2.setTransform(13.7,36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,40.9,74);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.2,1,1).p("AhjhCQACgMgBgYQAAgEAAgDQgBgJABACIgGghQAJgLANgNQAYgYAQgGQAMgEAVgJQASgGAZAFQAcAFAgAQQAdAOAAAGIgKAjQgHAcABASQABASABAIQAIAYgBAhQgBAfABgPIgDBSQgIBWgXAQQgSANgXAQQgSAIgdgNQgjgOgagWQgZgXgKgaQgIgXgHglQgFggAAgNQAAgGAJgeQALghABgKQABgFABgEg");
	this.shape.setTransform(12.3,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3B0A1").s().p("AgXBbQgSgDgqgTIgZgNQACgMgBgYIAAgHQgBgJABACIgGggQAJgLAMgNQAZgYAQgGQAMgEAVgJQASgGAZAFQAcAFAfAQQAeAOAAAGIgKAjQgIAbACASIACAaQgPATgXAKQgYAKgMAEIgKABQgOAAgZgGg");
	this.shape_1.setTransform(13.3,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEE2D9").s().p("AgDCJQgjgOgZgWQgagXgJgaQgJgXgGgkQgGggAAgNQAAgGAKgfQAKghACgKIABgJIAaANQApATASADQAlAIAMgDQANgEAXgKQAXgKAQgTQAHAYAAAhQgBAgABgPIgEBRQgHBWgXAQIgpAdQgHADgJAAQgOAAgSgIg");
	this.shape_2.setTransform(12,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,26.7,46);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.2,1,1).p("ACvmXIAPADQAYAIAqAPQAqAQAgAUIAGAdQAGAkgCAlQgCAZgEAdQgDAPgDARIABAEAAYj5IACgHQATgXAUgYQAUgXAGgLQAFgLAEgOQADgNAAgOQgCgagBgOQgCgOAAgOQAAgPAEABQADACAYAOQAYAOAJAKQAIAIAFAQQAGATAEAbQACARAAAbQAAAOgBAQQgCAwgEAUQgFAUgOAjQgIgDgGgEAASBTQAygVBLjcQACgGACgHQgLgGgHgJQgGgIgNgLQgSgNgdgSQgMgIgNgDQgIgDgGABAA6iOIA0g/AExjKIAFAKIATAnQAMAcAEAaQAJA3gGAxQgFAqgOAeQgCAFgDAFQgSAhgKATIADA3QADA9gBAXQgBAlgGA0IAEAHQAEAJAAAIQAAAIgNAKQgLAIgNAFQgKADgKAEQh9ArhDAAQg3AAgngFQgrgGgrgOQgLgEgKgCQgngMgPgGQgfgLgCgNQgBgNAJgPIAJgMQgJg6gCg0QgBghABghIABgaQgBgCgCgCQgKgMgLgRQgKgQgHgPQgJgVgCgTQgDghAEggIAEgbQAAgBgBgBQgJgMgKgRQgXgkgIgdIgGgiIgShXICDhLIAJgFIgBgBQAkgwAWgYQAWgZAPgIIAIgEQAAAPAAAGQAAAHABAIQACAIADAPQAEAPAPAWQAPAXApAzIANANIAAAAIABACIgCACIgXAVIgdApQgBACgRAaQgDAEgEAFQgGAKgEAFQgEAFgCACQgDADgDAGQgBABgCACQgCABgEAAQgGAAgHgOQgIgUgGgMQgHgQgOgvIgnhmAgPkDQABgCAAgCAAPixQAAglAEgRIADgKIACgIAkRgwQgCADgBAEAkRgwIgCAJAkEiBIgNBRAgNkFIAbA/IABAVAAPiqQAAgEAAgDAh1h+QAEAIADAIQBGCcAsAeQAHAFAHACAhVipIAtAxAhmiRIAlAwAjkCdIAVAZAjKFvQAXAJAaAHQBdAZCLgFABvGMQBDACBDgWQAJgDAIgDAAUh0IgCDH");
	this.shape.setTransform(35.1,46.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6A51D").s().p("AjKF0QgfgLgCgOQgBgNAJgPIAJgMQgJg6gCg0QgBggABghIABgbIgDgDQgKgMgLgRQgKgRgHgPQAkAeA5ALQAvAIBSgFQhoA1gQBLQgGAdAEApQADAfAHAKIAGAIQAEAEAGAEQAKAGAKgCQgMACgHANQgIALABAOIABAFIg2gRgAiZFMQgagHgXgKQAXAKAaAHgAjPCCIgVgZgADtFgQgLgLgcACIAvgTQAIgTgOgTQgNgTgVAAIAegeQATgRAIgPQAOgbgKglQgHgagVgmQAygTApghIgFAKIgcA0IADA4QADA8gBAXQgBAlgGA0IAEAIQAEAJAAAHQAAAIgNAKQgLAJgNAEIgUAHQgCgSgGgHgAD1FEIARgGIgRAGgAknh5QgXgkgIgeIgHgiIAqBNIAyh2QgEAQgBAdQgBAggCANQgDAUgVA0IANhRIgNBRIgDAHQgJgLgKgRgAjbl/IAJgFIAnBmQAOAwAHAPIAOAhQAHANAGAAIAGgBIAHAQQgIACgIAEQgJAEgQALQgch7goh3gACOjSIAFgMQAGAEAIACQAOgjAFgUQAEgUACgvIABgfQACAOABANQAEAjgIArQgFAdgNAwQgOgPgMgIgAE2j0QABgQgCgHQgBgGgGgSQgGgPABgJIAlBKIgGAgIABAEg");
	this.shape_1.setTransform(35.1,52.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0BE30").s().p("AgpGzQgrgFgrgPIgVgGIgBgFQgBgOAIgMQAHgMAMgCQgKACgKgHQgGgDgEgFIAEACQBLATBoAAIAAAAIABAAIAtgBIAAAAIADAAIgDAAIAAAAIgtABIgBAAIAAAAQhoAAhLgTIgEgCIgGgHQgHgLgDgeQgEgpAGgeQAQhKBog1QhSAFgvgJQg5gKgkgeQgJgVgCgTQgDgfAEgiIAEgbIACgJQAVg1ADgUQACgNABggQABgcAEgRIgyB3IgphNIgShXICDhLQAoB3AcB7QAQgMAJgDQAJgFAHgBQBGCcAsAeQAHAFAHACQAygUBLjdQAMAIANAOQANgvAFgdQAIgrgEgkQAAgMgDgOQAAgbgCgRQgEgbgGgTIAPAEQAYAHAqAPQAqAQAgAUIAGAdQAGAlgCAlQgCAYgEAdIglhKQgBAJAGAPQAGARABAHQACAGgBARIgFgKIAFAKIATAnQAMAcAEAbQAJA3gGAxQgFApgOAeQgpAhgyATQAVAmAHAaQAKAlgOAbQgIAPgTARIgeAeQAVgBANAUQAOATgIATIgIADIgBAAQg4ARg4AAIgBAAIAAAAIgMAAIAMAAIAAAAIABAAQA4AAA4gRIABAAIAIgDIgvASQAcgBALAKQAGAHACATQh9ArhDAAQg3AAgngFgAD1FYg");
	this.shape_2.setTransform(35.1,50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A9D6E0").s().p("AhPBJIgmgwIAmAwIgGgEQgOgJgOgBIgLABIgHgQIADgDQADgHADgCIAFgHIALgQIAGgJIATgbIAdgoIAXgVQgLA8AHAzQgLgCgIgGQABAOAEAZIgHgFIgugxIAuAxIgngZQAPAbARAmIgSgQgAAsAbQAPgfgIgYQgFgNgOgMQgHgGgRgLIACgJQAFAAAIADQAOADAMAIQAdARARAOIgzA9IAzg9QAOALAGAHQAHAKAKAGIgEALQgJgFgIgCQgWgDgXAVQgYAXgPAKQAKgOAHgOg");
	this.shape_3.setTransform(36.5,29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9F2FD").s().p("AAQEPQgsgfhFidIALAAQAOAAAOAKIAFAEIATAQQgRgmgPgbIAnAZIAHAFQgEgZgBgOQAIAGALABQgHgzALg7IACgCIgCACIAAgFIAAAFIgXAUIgdApIgTAbIgGAJIgLAQIgFAGQgDADgDAGIgDADIgGABQgHAAgGgNIgOghQgHgPgOgvIgohmIAAgBQAkgwAWgYQAVgYAQgJIAIgEIgBAWQAAAGABAJIAFAXQAEAPAPAWQAQAWApAzIAMANIABAAIABADIAbA+IABAUQgBgjAFgSIACgJQASALAHAGQAOAMAFANQAIAXgPAgQgHANgKAPQAPgKAYgYQAXgVAWAEQAIACAJAFQhLDegxAUIACjIIgCDIQgHgBgIgFgAAcAXIAAgHIAAAHgACfAXQgKgGgHgKQgGgHgOgKQgRgOgdgSQgMgHgOgEQgIgCgFAAIACgHIAnguQAUgYAFgLQAGgKADgOQAEgOAAgOIgEgnIgCgdQAAgOAEABIAbAQQAYAOAKAJQAIAIAFAQQAGATADAbQACASAAAbIAAAeQgDAvgEAUQgEAUgOAiQgIgCgHgEgAgChAIAAAAg");
	this.shape_4.setTransform(33.8,27.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDF97D").s().p("AAAADIACgGIgCAIIAAgCg");
	this.shape_5.setTransform(7.5,42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.2,72.2,96.4);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.2,1,1).p("AE5hyIghCsIgNBGQgMBRgTAXQgNAPgpAnQgqApgNAJQgKAGgTAQQgTANgUABQgUABgrgJQgrgLgHgBQgQgDgigOQgqgQgTgOQgTgOgbgnQgMgQgbgrQgKgQgYguQgDgHgEgHIgbg2IAtksIBxhXIBugeICRgJQBrgKAFADQABAAAqAQQApAQAHAFQAHAFAHAbQAGAWABAOQAAAIgCBIQgDBIgBgBg");
	this.shape.setTransform(31.9,37.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3B0A1").s().p("AkjDtIgbg2IAtksIBxhXIBugeICRgJQBrgKAFADIArARQApAQAHAEQAHAGAHAbQAGAVABAOIgCBRQgDBGgBgBIghCuIgkASQAegsAOgvQAPgzgFgxQgFgygcgsQgcgtgsgWQghgQgZAFQgQAEgRANQgKAIgSATIinC3IgCheQg2BLhBBAIAKhNQhFBkgLB6IgHgOg");
	this.shape_1.setTransform(31.9,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEE2D9").s().p("AgLFCIgygMQgQgDgigOQgqgQgTgOQgTgOgbgnQgMgQgbgrQgLgQgXguQALh5BFhkIgKBMQBBg/A2hNIACBfICni4QASgTAKgIQARgNAQgDQAZgFAhAQQAsAWAcAtQAcArAFAzQAFAxgPAzQgOAwgeAqIAkgRIgNBFQgMBRgTAXQgNAPgpAnQgqApgNAJIgdAWQgTANgUABIgGAAQgUAAglgIg");
	this.shape_2.setTransform(32.6,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,65.8,76.4);


(lib.cf5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F3ADA9","#F9ADAB","#FEE2DA"],[0,0.804,1],0,0,0,0,0,4.5).s().p("AglAXQgQgJAAgOQAAgMAQgKQAQgJAVAAQAWAAAPAJQAQAKABAMQgBAOgQAJQgPAJgWAAQgVAAgQgJg");
	this.shape.setTransform(5.4,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.7,6.4);


(lib.cf4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAmAAQAAAfgLAXQgMAWgPAAQgOAAgMgWQgLgXAAgfQAAgeALgXQAMgWAOAAQAPAAAMAWQALAXAAAeg");
	this.shape.setTransform(3.8,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCA6QgFgCgEgFQgGgJAAgOQgBgNAFgKQAFgHAGgCIACAAIACAAIAHAEIADAEIAAAAQAGAJABAOQAAANgFAJIgBADIgDAEQgCACgDABIgDAAIgBAAIgDgBgAgHgZQgDgGAAgIQAAgIADgGQAEgFAFAAQADAAADACIADADQAEAGAAAIQAAAIgEAGIgBACQgEAEgEAAQgFAAgEgGg");
	this.shape_1.setTransform(3.3,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaA1QgLgVAAggQAAgeALgXQAMgVAOgBQAPABALAVQALAXAAAeQAAAggLAVQgLAXgPAAQgOAAgMgXgAgHgFQgGABgFAIQgFAJABANQABAOAFAJQAFAGAEACQADABADAAIABAAQADgBADgDIACgEIABgCQAGgKgBgNQgBgOgFgIIAAgBIgEgEIgFgDIgEgBIgCABgAgLg3QgEAGAAAJQAAAHAEAGQAEAGAFAAQAEAAADgEIABgCQAEgGAAgHQAAgJgEgGIgCgDQgDgCgDAAQgFAAgEAFg");
	this.shape_2.setTransform(3.8,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.5,17.1);


(lib.cf3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.2,1,1).p("Ag4AdIAUgLQAZgKAPgCQAPgDAXgCQAXgCgEgGQgEgHgIgGQgJgGgJgBQgKgBgVAJQgVAIgYATQgZATAOACg");
	this.shape.setTransform(6.2,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#382F2C").s().p("AgtAIQAYgTAVgIQAVgJAKABQAJABAJAGQAIAGAEAHQAEAGgXACIgmAFQgPACgZAKIgUALQgOgCAZgTg");
	this.shape_1.setTransform(6.2,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,14.4,7.7);


(lib.cf2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.2,1,1).p("AgaAPQAcgIAYgV");
	this.shape.setTransform(17.3,50.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.2,1,0,7).p("ABtieQgLALgPAQQgsAugBAAIhBBVIgmAvQgDgUAHg9QABgGABgHQADgTAHgXQAHgUgBAAQgjBRgWAcQgMAQgVAVQgRARgXAVQAdg7AGgTQAGgTASgmQASgmggAwQggAxgXAZQgYAbgPAMQgQANgHAGQgIAVgIAVQgIAVgGAZQgGAaAAAYQgBAYANAfQAEAKANAQQAMAOADAPQAGAcgEAQQAAgHgDgJQgEgSgMgGQgagKgNgKQgIgGgTgVQgRgTgBAAQgBAAAFAQQAEASAGAKQAIAQAIAMQgugjgFgZQgEgPgDgeQgDgaAAAAQgBAAgHAZQgIAaABAJQABAPAFAhQgPghgFgkQgIhAgBAAQgTgFgSAOQAIgYACgFQABgFAJgLQAIgMgFgVQgGgVAChaQABhaA5hgQBnivCkgiQAKgCAKgCQA5gIBEAAQA/AAAcAGQAVAEAhAWQAQALANAKQgBgHgDgKQgDgKgOgRIASAFQATAHAFAGQAIAKAKAYQABgBAJgBQAMgCAJAAQANAAALgBQgNAEgQAQIgLANIAPAIQAVANAUAZQAUAYAaAvQAbAvAHAaQAFAVAPA5QANAugCAFQgBAFgBAYIAAAXQAEAWgBAAIAEAWIAAAAQAEAZABANQACANgFANQgFANgIAIQgIAIgPANIghAXQgGgKANhBQgSAsgKAOQgKANgRANQgRANAIgMQAIgNADgWQACgXAJgeQAIgegNAjQgNAkgHAMQgHAMgVAVQgWAVANgkQANglAIgzQAIgyAAgzQAAg/gJgaQgGgSgKgZADBiMQgBgJgCgJQgBgIgCgFQgDgIgFgDQgCgBgCgBQgIgEgJgBQgMAAgKAFQgFADgWAXQAvgNAlAfIACAAIgCAAQAAAAAAAAgADMiNQATAHAQAIQARAIAOALQAOALABgCQgCgEgBgEQgCgHgJgPQgKgQgQgCIgUACIgVADIgJAB");
	this.shape_1.setTransform(44.5,40.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D2624").s().p("AjwFvQgFgSgMgGQgZgKgNgKQgIgGgTgVIgSgTQgBAAAEAPQAFATAFAKIARAcQgugjgGgZQgDgPgEgeIgDgaQgBAAgHAZQgHAaAAAJQABAPAGAgQgQgggEglQgIg/gBAAQgUgGgSAOIAKgcQACgFAIgMQAJgMgGgUQgGgWAChaQAChZA5hgQBniwCjghQgSAKgmAeQgnAdg6BKQg7BLgSA5QgSA6gFAsQgFArABANIACASQAbhgAcgpQAbgoAdgbQAdgbAfgaIALgJIgEAIQgYAjgYAuIg0BhQgRAfgCAQQgEAXAEAYQAwhCA1gmQAggYAYgPIAXgNIAagTIgGAaIgOA1QgIAbgOAgIgoAmQAdg7AGgUQAGgTASgmQARglgfAwQggAvgYAbQgYAbgPAMIgWASQgZAWgcAIQAcgIAZgWIgQArQgIAVgGAZQgGAZgBAYQAAAZAMAfQAEAKAOAQQALAOAEAPQAGAcgFAQQAAgIgCgIgAEXDoQANgmAIgyQAHgzAAgyQAAg/gIgaQgGgTgLgYQAAABgOgKQgPgLgQgIIgjgQIAVgCIAUgCQAPABAKARQAKAPABAHIADAIIgDgIQgBgHgKgPQgKgRgPgBIgUACIAIgKQAMgJATACQApADAlBoQATA0APBIIAJgCQAKgFADgRQAEgQABgkIAAggIAGAUQAGAWADAWQALBBgDAjQgCATAKgTQAHgMAEgOIAAABIAFAmQABANgFANQgEAMgIAJIgXAVIghAXQgGgKANhBQgSAsgKAOQgKANgRANQgSANAJgMQAIgNACgWQADgXAIgeQAIgfgMAkQgNAkgHAMQgHAMgWAVQgIAIgDAAQgGAAAJgXgAj3BaIAAAAgAhAgaQAOgQAWgWIAngrQAtguANgJQANgKASgIQASgJAVABQAUAAANAMQgIgEgJAAIgBAAIgBAAIAAAAIgBAAQgJAAgJAFIAAAAIAAAAQgGADgWAWIgaAbIgsAvIhCBUIgmAwQgDgUAHg+gABqiWQAWgWAGgDIAAAAIAAAAQAJgFAJAAIABAAIAAAAIABAAIABAAQAJAAAIAEIAEADQAFADADAIIAEAMIACASQgkgfgwANgACsiwIAAAAg");
	this.shape_2.setTransform(44.8,39.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#382F2C").s().p("AF/EFQADgjgLhBQgDgWgGgYIgGgTIAAAhQgBAkgEAQQgDAQgKAGIgJACQgPhIgTg1QglhogpgDQgTgBgMAJIgIAJIgVADIgJABIgDAAIgCgSIgEgMQgDgJgFgDIgEgCQgNgMgUgBQgVAAgSAIQgSAJgNAJQgNAKgsAsIgoAsQgWAVgOARIACgNQADgSAHgYIAHgTQgkBRgWAdQgMAQgUAVQAOggAIgcIAOg1IAGgbIgaATIgXAOQgYAPggAYQg1AngwBCQgEgYAEgYQACgPARggIA0hiQAYgsAYgkIAEgHIgLAJQgfAagdAbQgdAagbAoQgcAogbBiIgCgTQgBgMAFgsQAFgsASg6QASg5A7hKQA7hKAmgeQAmgdASgKIAUgEQA6gJBEAAQA+AAAdAGQAVAFAgAWIAdAVQAAgIgDgKQgDgKgPgQIASAFQAUAGAFAGQAIAKAJAYIALgCQAMgCAIAAIAYgBQgNAEgQAQIgLAOIAQAIQAUANAUAYQAUAZAbAuQAaAvAHAaIAVBOQAMAvgBAFIgCAcIgBAXIAEAXIAEAVQgEAOgHALQgFAKgCAAQgCAAABgJg");
	this.shape_3.setTransform(48.9,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#726A65").s().p("AAAAAIABAAIgBAAIAAAAg");
	this.shape_4.setTransform(63.9,26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,91.6,79.9);


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


(lib.BtnNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkbFcIAAq3II3AAIAAK3g");
	this.shape.setTransform(27.9,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AkcFcIAAq3II4AAIAAK3g");
	this.shape_1.setTransform(28.5,34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// 图层 1
	this.instance = new lib.nextPage();
	this.instance.parent = this;

	this.instance_1 = new lib.nextPage2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-2.4,56.9,69.6);


(lib.BtnLast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkVFPIAAqdIIrAAIAAKdg");
	this.shape.setTransform(24.7,31.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// 图层 1
	this.instance = new lib.lastPage();
	this.instance.parent = this;

	this.instance_1 = new lib.lastPage2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-2.4,55.7,67);


(lib.BtnDelete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._delete();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnDelete, new cjs.Rectangle(0,0,40,40), null);


(lib.you = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(55.9,134.2,1,0.271,0,0,0,55.9,134.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.65,y:134.3},0).wait(1).to({scaleY:1.11},0).wait(1).to({regY:134.3,scaleY:0.96},0).wait(1).to({regY:134.2,scaleY:1.02},0).wait(1).to({scaleY:1,y:134.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,108.9,94.3,25.3);


(lib.Egg_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 图层 1
	this.egg = new lib.Egg_3_();
	this.egg.parent = this;
	this.egg.setTransform(31.8,25.8,1,1,0,0,0,31.8,25.8);
	this.egg.alpha = 0.02;

	this.instance = new lib.red();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.egg}]}).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,51.5);


(lib.Egg_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 图层 1
	this.egg = new lib.Egg_2_();
	this.egg.parent = this;
	this.egg.setTransform(40.3,42.5,1,1,0,0,0,40.3,42.5);
	this.egg.alpha = 0.02;

	this.instance = new lib.purple();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.egg}]}).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,83.7,88.4);


(lib.Egg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 图层 1
	this.egg = new lib.Egg_1_();
	this.egg.parent = this;
	this.egg.setTransform(38.5,38.5,1,1,0,0,0,38.5,38.5);
	this.egg.alpha = 0.02;

	this.instance = new lib.blue();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.egg}]}).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,77);


(lib.Egg_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 图层 1
	this.egg = new lib.Egg_0_();
	this.egg.parent = this;
	this.egg.setTransform(37,43.5,1,1,0,0,0,37,43.5);
	this.egg.alpha = 0.02;

	this.instance = new lib.orange();
	this.instance.parent = this;
	this.instance.setTransform(-1,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.egg}]}).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,87);


(lib.Mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.btnDelete = new lib.BtnDelete();
	this.btnDelete.parent = this;
	this.btnDelete.setTransform(1031,164,1,1,0,0,0,20,20);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ACBAeQgRgJAAgUQAAgTASgLQASgKASALQASAMgCATQgCATgRAJQgIAEgIAAQgJAAgJgFgAgRAeQgRgJAAgUQAAgTASgLQARgKASALQASAMgCATQgCATgRAJQgIAEgIAAQgIAAgJgFgAikAeQgSgJAAgUQAAgTASgLQASgKASALQASAMgBATQgCATgRAJQgIAEgIAAQgJAAgJgFg");
	this.shape.setTransform(865.2,413.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ACBAeQgRgJAAgUQAAgTASgLQASgKASALQASAMgCATQgCATgRAJQgIAEgIAAQgJAAgJgFgAgRAeQgRgJAAgUQAAgTASgLQARgKASALQASAMgCATQgCATgRAJQgIAEgIAAQgIAAgJgFgAikAeQgSgJAAgUQAAgTASgLQASgKASALQASAMgBATQgCATgRAJQgIAEgIAAQgJAAgJgFg");
	this.shape_1.setTransform(819.2,413.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgOCwQgKgTgWgSQgVgRAUAGQAVAGAMgCQALgCADgOQACgOABgzQAAgzgDgcQgDgdgKgMQgJgMAIABIAXAFQAvgtARgWQARgVglAGIhRAPQgtAJgMAGQgNAFgNgFQgOgGgKgKQgKgJAVAAQAVABAugEQAvgFAogHQAqgHAMgHQANgHAQALQAQAMAHALQAIALgQADQgPAEgfAUQggATggAbQAXALgFAIQgGAIgBAZQgCAZADAuQACAvgBAWQgBAXgSAZQgKAPgGAAQgGAAgEgJg");
	this.shape_2.setTransform(772.7,414.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgKCjQgOgbAGgVQAHgWAAgcIAAhXQgvA6gpAfQgoAggfAMQggANAigYQAigZApgpQAogoAhgzQgCgTgGgLQgHgLAMADQAMACALAJQAYgngEgNQhrARgXAFQgYAFgSgOQgTgOAVgBIAqgDQAVgCBVgKQBVgKAYgGQAYgGARAGQAQAGAJAKQAJAKgbAAIg0ABQgbABgoAFQAXAWgJAIQgJAIggAtIADB8QABAqgFAmQgCAWgGAAQgEAAgGgKgAClBZIgwgqIg2gwQgZgZAzAVQAzATAYATQAXATgBAbQAAAQgIAAQgFAAgIgGg");
	this.shape_3.setTransform(726.9,413.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ABZC3QgugBgXgMQgWgNgHgVQgGgWACgzQACgzgGgNQgFgNAKADQAKAEAGAAQAHAAAOgFQANgEAGgHQAHgGAKAEQALADAJAHQAJAGgMAIQgNAHgHAfQAOAOgKABQgKABg0AMQgBA+ARAPQASAPAsAAQArAAAZgHQAZgHAFgRQAGgRAFgbQAGgbACAjQADAjAJAQQAJAQgpAOQglAMgqAAIgHAAgAAmgEIgkAIIgCAvIAogJQAHgggBgIQgBgGgFAAIgCAAgAjGCIQgUgPAWgCQAVgBAYgIQgGgpgHgSQgHgSgJgNQgJgOAYAFQAYAEgBAMQgCALAJBDQAegJAJgFQAAhIgCgUQgBgVgLgJQgNAUgEgTIgMgpQgHgWgIgNQgIgNAOABIAWABQAJAAATgEQASgFAIgHQAHgHALAEQAKAFAJAHQAJAHgKAKQgJAKgJAkQASAMgSAEIgkAHQASAQgDAEQgDAEAAAbQAfgKAIAHQAIAHgOAHQgPAHgSgFQgCAeAAAdQAdgJANgCQAMgDgKAIQgLAIglAPQglAQgUALIgcARQgDACgDAAQgIAAgPgMgAiAhlQAHAZAHAfIAogNQAFgaABgOQABgNgFgCIgCgBQgKAAgsANgABfBNQgFgRgMgNQgLgOAMAEQANADAJgCQAJgBAGgbQAGgaADgVQADgVgCgJQgCgKgJgCQgJgCgiAKQgiAKgJgLQgbAmgXARQgYARAXgcQAWgcANgbQAMgbAIgaQAJgagCgNQgCgOAWANQAVAMgHAJQgHAJgKAVIgYAuQBAgLAPgGQAOgGANAEQAMAFAJAHQAJAHgIAHQgIAHgFAmQgGAlgFAXQgGAXgQATQgIAKgFAAQgFAAgCgIg");
	this.shape_4.setTransform(681.2,411.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ACtC9QgJgBgXgPQgWgOgWgbQgXgbgQgdQgUARgWAMQgWANgcAJQgbAJAggTQAfgTAvgpQgLgagLgkQgbAIgNACQgNADgRgDQgRgEAagFQAagHAegOQgJgWgEgSIgWADQgJABgMgDQgLgCAPgFQAPgEAVgLQgEgXgEgaQgGgZgIgLQgIgMACgEQACgDAVAFQAXAFgDAOQgDANAIA8QApgPALgGQAKgGAOAGQANAGgXAKIg/AaQAEASAFAUQASgHAYgNQAZgMAOAFQAOAFgSAKQgSAKg0AYQAEASAQAmQAPgOALgSQAMgRAAgJQAAgLATANQATANgKAHQgKAHgLAMIgiAlQAXAmAXAUQAWAVAGgFQAHgEALgeQAMgdgEAmQgFAnAGATQAFASgIAAIgBAAgAijCHQgTgRAGgBIAYgEQATgCATgJQASgJAWgIQAXgJARgDQARgEgUAMIgzAcQgdAQgOANQgGAGgHAAQgIAAgLgJgAiiA9QgHgPAKgHQAKgIAOgRQAOgQAUgkQg2ALgGAGQgGAHgIgQQgHgPAKgGQAKgGAJgOQAJgNAMgZQALgYADgQQADgQgBgHQgBgIALADQAKADAJAGQAJAGgHALIgbAsIgcAuQgIANAHAAIANAAIAggCQAagoAAgOQAAgQAJAFIAUANQAKAHgHAEQgHAFgJANIgcAqIgYAjIgQATQgKAMATgEIAggIQAMgCASgBQASgBgmAOQgnAPgQAKIgXAPIgCABQgFAAgGgNgABYiZQgggVAGgFQAFgEAbADQAdAEgBAWQgBAMgIAAQgJAAgQgLg");
	this.shape_5.setTransform(635.9,413.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("ABGC+IhWgdQg3gSgagHQgbgHgSAIQgRAIgLAEQgMADgPgLQgPgMARAAQAUAAAzgNQABgZgKgVQgLgUAEgQQAFgRgBgHQgBgHgIAEQgIADgKADQgKADgLgIQgLgIAQAAQAPgBAKgFQAKgEAHgIQAHgIAKAFIAUAMQAKAIgLAEQgLAFgHATQgHATALARQAMARgJAkQBNAYA7AJQA7AJAiAAQAkAAAjgHQAjgGgkAUQgkAUgYAIQgKADgMAAQgQAAgTgGgAAmCCQgFgTABg/QhBAJgPAEQgQAFgPgMQgPgLAVgBIAtgDQAagCAigFIAAgsQg8AJgLAEQgMAGgEgQQgDgQANgIQAOgIAVg4QgQACgLAAQgJAAgLgHQgMgHAUgCQAUgCAbgHQARgpgHgTQgGgTAOAEQAPAFAKAIQALAIgGAJQgGAJgSAiQAigFAVgGQAWgHAOALQAPALglAGIhOAOQgPAngLASQgLASAOgCQAOgBAcgGQAAgZgIgOQgJgNAMACQANACALAEQAMAFgEAHQgDAHgCAWIAogIQAQgDAMAJQANAJgXACQgWADgkAHIAAAuIBFgMIAagDQANgBAOALQAPAKgnADIhiAIQAAA0gGAZQgEAPgDAAQgDAAgCgIgAhthRQgMgHgKgNIgRgYQgHgLAUADQAUAEANALQAOALgFAQQgDAMgHAAIgGgCg");
	this.shape_6.setTransform(589.6,411.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag2CqQgFgUgDggQgCgfgJgYQgNAUgbAZQgbAZgeAPQgdAOAfgbQAggbAog0QApg0Abg+Ih3APQgOADgSgOQgRgPASABQASABAlgDQAlgCBCgHQAZg/gHgUQgHgUAPAGQARAFALAKQAMAKgIAJQgIAJgWAyIBOgIQAZgDAagEQAagFATAPQATAQgmAAQgkAAgdACIhhAHQgTAwgiAzQAGAJASgCIAxgIQAggGAPgGQAOgGANAFQAOAFARANQARANgPALQgQAMgTA2QASAOgIAFQgHAEgQAAQgOAAhnAHQgHASgEAAQgEAAgCgIgAgrA6QACArAEArQA2gFA0gHQAIgjABgZQACgZgUAAQgSAAhVALg");
	this.shape_7.setTransform(543.3,412.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhXC3QgOgBgMgJQgMgJAFgBQAEgCARAAQASAAAegDQAfgCAtgIQAAhAgCgLQgDgLgEgFIgeAEQgMABgMgIQgNgIAWgEIA8gKQAngGARgFQAQgGARALQARALgfAGQgeAGgmAGQAWAOgFARQgEARAAAsQAwgEAhgFQAigEASATQASATgSAAQgSAAgagEQgbgEgbACIg6AEQgdACgjAGQggAFgPAAIgEAAgAiyCdQAegXASgXIAmgvQAUgZAQgeIAbg0QgWAFgMAAQgLAAgMgKQgMgLASgBQARgBApgFQAUgtAEgaQAFgagEgKQgEgKAIABQAJABASAGQARAGgLAQQgLAPgUBCIA4gKQAXgEAQgFQAPgEAQAHQAQAHgEAFQgFAEgQAEIgvAIIhQANQgVA0gfAsQgeAtgcAcQgcAcgiAPQgOAGgDAAQgGAAASgOg");
	this.shape_8.setTransform(496.3,410.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AABDAQgBgOgagSQgagSAbAIQAbAIALgCQALgCAHgSQAHgSAHgnQAIgogJgGQgJgGgkAFQglAFgUAMQgUAMgBgPQgCgQAUgLQATgMAIghQhPALgZAEQgYAFgVgPQgUgOAbAAQAcAAAjgDIBagJIBfgMQAqgFAbgEQAbgFASAQQASAQgcgBQgcAAgiABQgiAChdAJQAOANgIAGQgJAGgLANQgLANAHAAQAJAAAXgDQAXgEAMgFQALgGALAGQALAFAPALQAPALgIAHQgIAHgEARIgMA0QgHAjgNARQgMARgQAJQgGADgEAAQgGAAgCgIgAhBhNQgFgOgFggQgEghgKgNQgKgOANACIAVAEQAJACAqgIQAqgHAIgGQAJgGAPAGQAOAGAMAJQAMAJgPAKQgOAKgNAmQAbASgiACQgiADhCAJQgFALgEAAQgDAAgCgGgAAKisIg+ANQAAAkABAbQAvgHAngIQAFgeABgOQABgNgHgEQgEgCgGAAIgPACg");
	this.shape_9.setTransform(773.4,365.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAUCgQgegNgDg1QgCg1ABgaQACgZgHgOQgHgOANADQANAEALAJIBAgSQAGgrAAgRQABgSgbAJIgwAOQgTAGgTgKQgTgKAdgBQAcgCAdgJQAcgJAKgHQAKgHAOAEQANAEANAJQAMAJgOAQQgOAPgPApQAbARgeAFQgdAFg0APQgHBHAGAdQAGAeAVAJQAUAJAlgBQAlgBASgHQASgHAEgUIAHgrQADgYAFAoQAEAnAPALQAOALgeANQgfAOg0ACIgOAAQgqAAgcgLgAiMCPQgIgVAHgLQAHgMAEgQQAFgQACgbIACgyQABgXgOAEQgOAFgRAJQgSAJgQgLQgQgLARgBQARgCAYgIQAXgIAKgIQAKgHAQAHQAbALgNANQgMAMgGAsQgFAtACALQACALAcgRQAdgRAEACQADADghAeQghAdgOAVQgGAKgGAAQgFAAgEgKgAhdh9QgZgSgMgOQgNgOAdABQAeACANALQAMALgEATQgDALgIAAQgHAAgMgJg");
	this.shape_10.setTransform(728.2,364.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AiNCkQgKgWAGgPQAFgPAFgxQAEgygDgbQgCgcgEgFIgYAeQgOAPgSAMQgRAOAJgOIAXgeQAMgSAXgoQAWgnAFgRQAEgRgCgMQgDgMAKADQAKADALAJQAKAJgCAFQgBAGgGAGQgFAGgNAWIgcAyQAZANgEAZQgDAYgBA1IgCBJQgBATgFASQgDAHgDAAQgEAAgGgMgACFCaQgKgNgOgZIgSgbQgUAegWAQQgXAQgTAFQgTAEASgLQATgMAVgWQAWgXAJgVQgagsgXgaQgLAMgDgCQgEgBAJgRQAJgRAOggQANggAGgfQAHgegFgPQgEgOANAEQAOAFAJAGQAJAGgGAIQgFAJgEAJIgbBGQAigIAegMQAegNARAKQARAKgXAHQgWAHgkAJQAUALgEAHQgDAIgHAjQgGAlgJAYQASAVAYAXQAYAWANAGIAYANQAMAGgQADQgQADgUAAQgUAAgKgOgAAhgEQASAOAIALQAHAMAUAVQAHgbADgbQAEgdgEgWQgZAEgMgFQgLAZgPAXgAhCB3QgEgDgFgSIgKghQgEgQgFgKQgEgKAJABIAOADQAFACAWgGIAFhBQgUADgMgBQgNAAgGgEQgGgEANgDIAugNIAAg/QAAgSgGgLQgHgMAJABQAIABASAHQASAHgHALQgGALgHA9IAbgHQANgEAIAHQAIAHgTAIIgnAMQgCAYgFAoQALgEAGgEQAGgFAIADQAJADALAGQALAGgKALQgKALgHAdQAMAOgQACQgPACgtAJQgDANgDAAIgBgBgAgYAkQgPAEgdAFIAJAxIAxgLQADgkgBgHQAAgFgIAAIgIABg");
	this.shape_11.setTransform(681.7,364.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgWDDQgMgXADgNQACgOAEgrQAEgrgFgtQgEgsgKgLQgKgMARACQARABANAIQANAFgGALQgGALACBXQABBYgFAcQgEARgFAAQgEAAgFgKgAjBArQAhgbAfgiQAegjAWghQAVgiALgdQALgegEgOQgFgPAPAGQAQAFAMAKQAMAKgHAGQgFAGgHALQA+BDAZAVQAZAWAbAPQAbAPAgAKQAhAJgaAFQgaAEghgCQgggBgNgQIglgxQgaghgtg4QgYArgWAgQgXAfggAiQggAhgoAUQgQAJgEAAQgFAAATgQg");
	this.shape_12.setTransform(635.9,364.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("Ai4AUQgYgSATACQATACA1gFQA1gDA7gJIBpgRQAvgIAbANQAbAOgDAJQgCAIgXgCQgWgCgtAAQgtAAgzAEQgyAFgkAGIg7AMIgMABQgTAAgSgMg");
	this.shape_13.setTransform(589.6,364.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AB+CyQgJgVgWgVQgXgVAYAIQAXAHAGgBQAGgBADgNQADgMABg2IABh/QAAhLgMgVQgMgUATAEQATAFANAJQAMAHgHALQgHAKgCAzQgCA0ABA0QABA1ACAkQACAkgFAVQgEAWgLAMQgEAFgEAAQgGAAgGgOgAibCJQgJgHgHgNQgHgMAVABQAWAAA/gQIAAgpIggAFQgKACgLgJQgMgJAOgBQAPgBAkgJQAAgkgJgWQgfALgNAHQgMAHgFgEQgGgFgCgLQgBgMASgHQATgHATgaQATgZACgVQgUADgNgBQgOgBgKgGQgKgGAQgCQAPgCAsgKQAsgJAOgFQAOgEALAIQAMAIgQAHQgPAHgxAHQASAPgMAIQgLAIgPARIgWAbQgIAKAPgDQAPgDA2gHQgDgOgGgQQgFgPAOAHQAPAIAJAMQALANABANQABAOgIAJQgIAJgOgdIgyALQAUAMgEAJQgDAJAAAaIAagGQARgFAKAJQAKAJgUAGIgtALIgCArIAzgLQAigHAHAFQAGAFg2APQg3AOggANQggAMgKAGQgEACgEAAQgGAAgFgEgABBApQgHgVACgLQADgLAAgpQAAgsgJgSQgJgTAfAOQAXAHgHAOQgHANACA1QADA0gJAQQgEAHgDAAQgFAAgEgLg");
	this.shape_14.setTransform(542.3,365.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("ACxC7QgZgKgdgZQgdgagghAQgdAVgTAHQgSAGgVADQgWACAWgKQAVgJARgLQASgLAYgUQgHgUgLgvQghALgMgDQgOgDAMgGIArgVIgPhOQgIgqgHgKQgHgKAIAAQAJAAATAGQATAHgEAMQgFANACAeQACAdAHAiQAXgKAKgHQAKgGAOAHQAPAHgPAIQgQAJgkAQQAIAqAHAOQAigfABgSQABgSAIAEQAIADAMAOQALANgMAIQgNAHgKAKIgfAhQAQAjAVAWQAUAWAPAJQAOAIAEgDQAFgDAOgiQAPgigHAnQgGAmAFAZQADATgMAAQgFAAgHgDgAhlC0QgFgQgSgSQgSgSANADQAMADAKABQAKAAADgWQACgXAAgsQgtAigRAOQgRAOgSgPQgSgPAJgBQAJgBAYgKQAXgKAyggIAAhAIggAGQgNACgNgIQgNgHAMgCQANgBAugRIAAg2QgBgagJgSQgJgSAHAAQAHAAAUAIQAUAIgHAMQgGANAABCIAcgJQAIgBAFAGQAGAGgKAIQgKAIgbALIAAA+QAWgNAIgCQAIgEgHAIQgIAJgXAUIABBaQABAigOAUQgHALgFAAQgEAAgDgIgABdiFQgkgUALgEQAMgFAZAEQAZADAAAWQAAAKgJAAQgJAAgTgKg");
	this.shape_15.setTransform(497.5,364.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AA0CwQgCglAChSQhKALgQAEQgRAFgQgNQgQgNAZAAQAZAABZgKQAAgbgFgNIgdAEQgFATgIgPQgGgOgKgcQgKgcgFgKQgFgKgHgJQgIgIAKgBQAKgBAMACQALADA3gMQAAgagDgcQgEgdgJgMQgJgLAZAHQAbAHgCAFQgBAGgCAVQAQAAAVgIQAUgIAOAIQANAIgbAJQgbAJgegCIAAAoQAlgHALgGQALgFANAFQAMAGAPAJQAOAJgNAKQgMAJgKAZQgKAYgKASQgKARgJgMIgtAIQAPAJgCAHQgCAGAAAQQA6gFAdgGQAegFAPAQQAPAQgkgCQglgDhKAFQgCBcgHAeQgHAfgFAEIgBAAQgDAAgCgigABghAQAFAKgeAHQgeAGggACIAHAgQAzgMAwgIQALggADgTQAEgTgHgEQgHgFglAHIhTAPIAGAgQAjgHAagIQALgEAHAAQAKAAACAHgAh+CfQgGgQgWgQQgXgQAVAGQAUAGALgBQALAAABghIABhCQg4AngHAMQgHAMgLgHQgLgGgIgJQgIgJAQgCQAQgCBMgzIAAg7QgYAEgMAAQgLAAgMgHQgNgGANgDIA7gNIAAg9QAAghgKgPQgKgPASAFQASAGAJAGQAJAGgFAMQgGAMgCBHIAcgEQAHgBAIAFQAIAGgKAGQgKAGgfAIIAAA0QAkgYgBAIQAAAJgjAYIABBUQABAhgEAPQgFAPgLAMQgEAEgEAAQgFAAgEgJg");
	this.shape_16.setTransform(773.4,317.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AB+C2QgFgTgRgOQgRgOAUAHQAVAHAGgHQAHgHABguQACgugDgOQgEgNgKgCQgKgCg9ANIAABKQAAAigEAPQgFAPgJgOQgJgOAEgRQADgQAAhKIhHALIAAA4QAAASgEAeQgFAfgJgOQgKgPADgTQAEgUACgZQABgYgBgJQgLAdgUAdQgUAdgcAUQgbAVAWgaQAXgaAZgwQAZgwAKgxQAKgyADgjQAEgjgGgPQgHgOAKACIAWADQALACAlgIQAmgIAJgHQAJgHALACQAKADAPAJQAOAJgOALQgPALgJAXQAUAQgaAFIg3AKQgcAFgeAHQgNA/gKAlIAKAJIBHgNQAAgTgCgSIgZAGQgLACgOgJQgNgIASgCQARgDAggIQAggIAPgGQAOgHAOAJQANAJgUAHQgTAGgfAHQAHANgCAHQgDAHgCAMQA9gLAKgGQAKgGAMAGQANAFAKAEQAKAGgGALQgHAMAAAWIABAnQABAUgDAcQgCAcgRAQQgIAHgGAAQgGAAgDgKgAArihIg6ALQgDAbgCAbQAzgLAtgNIAFggQACgNgGAAIgDAAQgIAAgXAEgAibCBQgJgMgHgSQgHgRAJgCQAJgDAMgTQANgTAYgrQAYgsgKAkQgLAjgQAoQgRAngCAUQgCAMgEAAQgCAAgEgFgAADB8QgJgEgLgJQgKgJALgCQAMgBAGADQAHAEACALQABAIgFAAIgEgBgABgBrIgWgQQgNgJAPgBQAOAAAMAFQAMAFgFALQgDAHgEAAQgDAAgDgCgAAABSQgJgFgLgHQgJgHANgCQAOgCAHAEQAIADgBALQgBAHgFAAIgGgCgABeA3QgLgDgLgGQgLgHAKgDQAKgEAMACQAMACAAAKQABAKgJAAIgDgBgAiTgeIgaggQgLgSAVAFQAVAGAKAJQALAJgGASQgEALgFAAQgFAAgGgIgAhgh4IgSgSQgHgJgJgPQgJgPAUAEQAUAFALAMQAMALgFARQgEALgFAAQgDAAgDgDg");
	this.shape_17.setTransform(727.6,316.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("ACGC0QgJgTgWgSQgVgSAVAFQAWAFAIAAQAIgBADgRQAEgQAAg5IAAiBQAAhHgLgTQgLgTARADQAQAEAMAJQAPAHgHAMQgGAMgBA/QgBBAADBMQADBOgGATQgFAUgMAOQgEAFgFAAQgGAAgFgMgAgkClQgEgPgRgPQgRgOASAFQASAEAHAAQAIAAAGgNQAGgOAFgaQAEgaAAgXQAAgYgMgBQgLgBgfAJQgUA2gbAlQgbAlgWAPQgWAQgGAAQgDAAASgTQATgTAbgqQAbgrAJgcQgbAHgLAEQgMAFgLgGQgLgFgGgGQgGgHAVAAQAWAAAvgKQAJgpgGgMIgJADQgHANgEgKQgFgKgJgeQgJgfgHgNQgHgMAJAAQAKAAAJACQAJABARgEIAkgJQATgEAKgIQAKgHAKAFQALAEALAIQAMAIgNAJQgMAJgQAqQAOAOgLADIhBANQASAGADAHQAEAHgFAEQgEAFgHAXQAigHAMgIQAKgIAJAFQAJAGAJAIQAJAIgIAIQgIAJgBASIgEAyQgEAggKATQgJATgOANQgHAFgEAAQgFAAgCgIgAgbiMQgNABgyANQACAdAFAiIBBgSQADgfAAgOQAAgOgKAAIgCAAgABTA/QgHgIgDgLQgEgLADgNQACgOgBgoQgCgqgIgOQgIgOAMABQANACALAGQAMAFgEANQgFAMADAyQACAygEASQgDAMgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_18.setTransform(680.8,316.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("ABODCQgYgGgugSIhcgkQgwgSgTAGQgSAFgHAGQgGAFgIgDQgIgCgJgKQgJgKAPgBQAPgBAtgHQAAgZgKgZQgJgaAJgcQAJgegQAGIgYAKQgJAEgLgJQgLgJAOgBQANgBANgEQANgFAJgHQAJgHAJADQAKAEANAJQAMAJgNAKQgOAKgJAUQgIAWAIASQAJASgJAlQAhAIAiAKQAiALAkAJQAlAJAmAFQAlAEAngDQAngEAOACQAOACgaAJQgaAKgiAKQgWAGgSAAQgJAAgIgBgABlB8QgEgPgQgMQgQgNARADQARACAIgEQAIgEAEgrQADgpgIgHQgIgHgwAMQAJAIADAGQAEAFgFAQIAQgDQAHAAAFAFQAGAFgKAEQgKAEgQADIgHAjQgEAPgEABQgDABgBgKQgBgJACgdIgdAFQAAAZgEALQgDALgEgKQgDgKgCgXQgMAAgGgFQgGgEAGgBIASgFQAAgQgFgXIgaAFQAAA4gCAZQgCAZgJgOQgJgPADgMQACgNABgOQABgOgDgSQgbAugaAUQgbAUAVgbQAVgbAMgYQANgZAIgZQAIgaADgXQADgXgFgNQgEgNAJADIAQAGQAHACAggIQAhgIAQgJQAPgJAJAEIAYAKQAPAIgPAJQgPAJgNAVQAPAQgNADIg2AMQgoAJgQgEIgSAvQATAAAYgFQAYgEAfgIQAegIAKgFQAKgEAPAGQAPAGAJAHQAJAIgIAMQgIAOgBAgQgBAggFAQQgFAPgNAMQgGAGgEAAQgFAAgBgHgAAHAFQAWALgCAFIgFAUIAdgHQAAgYgGgLIgmAGgAA8hzIhJAPIgGArQApgHAtgQQAJgUABgKQAAgHgIAAIgJACgAh8huIgagWQgJgNgCgHQgDgHAPACQAPADARAJQAQAJgEATQgCALgHAAQgEAAgGgEgAA2idQgLgEgVgPQgWgQAHgBQAIgCAQACQAQAAANAHQAOAHgFANQgDAJgIAAIgEAAg");
	this.shape_19.setTransform(635.2,316.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("ABlCjQgtgBgZgPQgZgOgEguQgCguAFhPQAGhQgCgJQgBgJgOAEIhLAUQACA5gHA7QgGA7gZAjQgZAjgjAVQgjAUAkglQAlgkAQgpQAPgoADg7QACg7gJgPQgJgPAJAAIATAAQAKABAWgFQAXgFASgIQASgHAHgGQAIgGAQAFQAQAFALAIQALAJgOALQgNAMgFAeQgGAdgDBBQgEBBAIAbQAIAbAuABQAuABAPgFQAPgGAHgQIANgpQAHgZgBAjQgCAjAJATQAJASgcAJQgbAJgpAAIgFAAg");
	this.shape_20.setTransform(589.9,316.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("ABVDDIgRgjQgoAAg1AHQgJAkgKgTQgKgUAGgUQAFgUABgtQABgtgEgKQgkA5ggAeQggAdgiAOQghANAfgVQAegWAiglQAhgkAmhJIhbARQgPADgSgOQgSgNASABQASACAbgCIBWgKQAJgWAFgVQgUADgMAAQgNAAgKgHQgKgHAPgBQAOgBAqgFQAIgbAAgSIgiADQgTACgRgCQgSgCAtgIQAtgJAfgNQAfgNAEgKQADgJAOAHQANAHALAKQALAKgPACQgQABgTAHQgUAGgkAHQAVANgFAIQgFAIgIASQAqgHAVgHQAWgGAMAKQANAKgUADIgkAHIg7AIQgGAVgLAUIA+gJIBCgLQAogHAOAAQARAAAKALQALALgaACIhJAGIh+ANQgHASgJAPIAMAEQAGACAngGQAogHAIgFQAHgGAZAKQAZAKgIALQgIALAEApQAFApAAAWQAAAUgFAQQgEAQgJALQgEAEgEAAQgEAAgDgHgABICVQAMAJACgKQADgJABgRQABgSgDgqQgCgqgPgEQgOgFgWAEIg6AJIAAAgQAYgCAXgFQAYgGAGAIQAGAJgeAGQgeAGgXgFIAAAkQAaAAAYgHQAYgGAIAKQAHAKgjADQgiAEgUgEIgCAmQAagCAegEIASgCQAPAAAIAGg");
	this.shape_21.setTransform(542.4,316.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AiLDFQAvgOAwgbQAwgbAWgWQgPgLgTgUQgTgVAJgCQAJgCAVAJQAXAIABAgQAdgXAWgcQAVgcAAgJQAAgJgTAEIgkAGQgRADgOgLQgcAcgkATQgkATgcAHQgbAIAegRQAfgQAhgYQAhgYALgSQAMgTAAgHQAAgJAMAFQANAGAHAIQAHAIgHAEQgHAFgLALQAXAAAVgFQAVgEAJgGQAKgFAPAGQAOAGANAKQAMALgMAGQgNAHgUAXQgTAXgrAnQgqAmg1AbQg2AagxAFIgVABQgQAAAigKgAhzgLQAbgKAbgOQAcgNAhgWQgfgZgEgJQgDgJARADQARADAIAJQAJAJgCAKQAPgKARgUQASgUAEgLQAEgLgPAAQgMAAgNACQgMACgNgHQgRAQgeAWQgdAXgiAKQghAKAhgTQAggTAjgjQAjgjABgPQABgOAJAFQAKAEAKAJQALAJgFAEIgWAQQAvAAANgGQAOgHALAGQAMAFAKAIQAKAIgMAFQgLAEgMAPQgMAOgUAUQgVATgWAQQgUAPgnASQgmASggACIgJAAQgSAAAXgIg");
	this.shape_22.setTransform(496.7,316.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("ACxC7QgZgKgdgZQgdgagghAQgdAVgTAHQgSAGgVADQgWACAWgKQAVgJARgLQASgLAYgUQgHgUgLgvQghALgMgDQgOgDAMgGIArgVIgPhOQgIgqgHgKQgHgKAIAAQAJAAATAGQATAHgEAMQgFANACAeQACAdAHAiQAXgKAKgHQAKgGAOAHQAPAHgPAIQgQAJgkAQQAIAqAHAOQAigfABgSQABgSAIAEQAIADAMAOQALANgMAIQgNAHgKAKIgfAhQAQAjAVAWQAUAWAPAJQAOAIAEgDQAFgDAOgiQAPgigHAnQgGAmAFAZQADATgMAAQgFAAgHgDgAhlC0QgFgQgSgSQgSgSANADQAMADAKABQAKAAADgWQACgXAAgsQgtAigRAOQgRAOgSgPQgSgPAJgBQAJgBAYgKQAXgKAyggIAAhAIggAGQgNACgNgIQgNgHAMgCQANgBAugRIAAg2QgBgagJgSQgJgSAHAAQAHAAAUAIQAUAIgHAMQgGANAABCIAcgJQAIgBAFAGQAGAGgKAIQgKAIgbALIAAA+QAWgNAIgCQAIgEgHAIQgIAJgXAUIABBaQABAigOAUQgHALgFAAQgEAAgDgIgABdiFQgkgUALgEQAMgFAZAEQAZADAAAWQAAAKgJAAQgJAAgTgKg");
	this.shape_23.setTransform(773.5,268.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("ABGDJIgKgXQgFgLgUABIgnADQgVACgTAAQgGAQgGAEQgGAFgFgQQgEgQADgPQAEgOACgcQADgcgFggQgUAegaAYQgaAXgkAOQgkAPAkgaQAkgaAdggQAcgfAbgqIhOALQgTAEgPgGQgPgHACgBQABgDANgBQANgBAfgEQAfgDAtgHIALgdIgWADQgMABgMgIQgLgHASgCQATgBAagGQADgJAAgSIgxAJQgIACgRgJQgSgJAggDQAfgCAxgMIBAgPQAQgEAOAJQAOAJgYAFIhQAPQAGAMgBADIgFAKIAygJQATgEALALQAMALgSACIhQALQgFAQgHAKIBVgMQAngFAZgFQAYgEAOAGQAPAGAFAIQAFAIgUgCQgVgBgiADIg7AHQgaAEg8AHIgZApQApgGAWgFQAWgGAPgGQAOgGAMAEQAMAFALAHQAMAHgHAMQgHAMAAAWIADArQACAVgBAVQgBAWgMAQQgGAKgFAAQgEAAgDgFgAA6CeQAKALACgMQABgLABgbQABgbgDgcQgCgcgJgDQgJgEgWAEIhFAKIAAAdIA5gLQAVgDAGAIQAFAIgYAFQgYAGgpgEIgCAkQAhgEAXgGQAYgGAGAJQAHAJgdAFQgcAGgkgCIgBAgQApgHAZgDIAJAAQATAAAIAIgAAHiMQAOgPAOgRQANgRgBgLQgBgLAWAPQAVAOgOAGQgOAHgSANQgRANgRAJIgIAEQgCAAAIgKgAgyiPQgSgVgFgNQgGgMAeALQAeAKgGAXQgDAMgGAAQgHAAgJgKg");
	this.shape_24.setTransform(726.2,268.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("ACWChIgpg2QgVghAmAWQAlAWAIAWQAJAWgGALQgCAEgDAAQgGAAgNgQgAgICaQAjgWARgaQARgaAFgfQAGgeAAgTQAAgWgFgMQgEgNAVAHQAWAGgFAHQgEAHgFA0QgEA1gZAhQgZAggpANQgPAFgFAAQgIAAAXgOgAgtCGQgKgYAGgMQAFgNABglIABhzQAAhPgHgPQgIgPAHABQAGABAOAHQAQAFgCAHIgGAXQgCAPAAA6IABBzQABA+gHATQgDAJgEAAQgEAAgFgMgAi4BuQAdgeAHgtQAHgsAAgZIAAgxQAAgVgGgNQgHgMAKABQAKACALAGQAMAFgDAGQgEAHgBAjQgBAkgCAiQgDAigLAfQgKAggiAUQgNAIgDAAQgFAAARgSgACRBVQgHgLAAgMIAAhHQAAg7gJgIQgJgHgaAHIg4ANQABBSgDAnQgEAogLgQQgKgRABgJIAFgcQADgSAAggQAAgggHgNQgGgMANADQAMAEASgFIAIgbQAFgPgCgOIgbAGQgNADgQgIQgPgIAWgCQAWgCA5gMQA4gLAPgGQAQgFAQANQAQAMgmADQglADgvAJQALAKgIAIQgIAJgSAeQA0gNAEgEQAFgEAMADQANAEALAHQAMAHgHAPQgHAQACAxQABAwgFAZQgEAQgFAAQgCAAgCgDgAhXA0QgHgOACgQQADgQABgsQABgtgGgJQgFgJAFAAQAIAAAMAGQANAFgFAJQgEAJgBAQIgBA4QAAAmgFAOQgCAGgDAAQgDAAgDgGg");
	this.shape_25.setTransform(680.7,269.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AjACgQgTgOAUAAQATAAAvgEIBsgJIAAjBQAAhPgNgUQgMgUAgANQAfANgEALQgFAMgCAfQgDAgAAApIAsgKIAjgKQASgFASAHQASAHgWAJQgVAJghAEQgiADgXAAQgCAlgCBqIBVgIIAwgFQARgDASAFQASAEALAPQAMAQgwgEQgvgEgpABQgoABgyAFQgyAEgqAGQgqAFgNADIgEAAQgLAAgQgMg");
	this.shape_26.setTransform(635.6,267.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AhwCsQgJgRAIggQAIgfAAgfQAAgegFgLIgpAnQgYAWgVAIQgUAIAJgIIAhgeQAWgVAZgjQAagiAFgRQAFgRgEgOQgFgNAcAPQAcAPgKAHQgKAGgnA4QAVAQgCASQgDASAAAdQAAAbgDAhQgCAigGADIgCABQgFAAgHgOgAhDCDQgQgMATACQAUABBcgSIAAhGIgfADQgMABgQgHQgRgIAUgBQATgCAkgJQAAgsgGgXIgVABQgJAAgPgFQgPgFAUgFQAVgEAhgKIAygPQARgGAQAJQAQAJgZAJQgZAJgtAJQAUAJgEALQgDALAAAKIAAAZQAQgCANgFQAOgFANAHQAOAIgOAGQgNAHgrAHIgCBKIBXgLQAYgEAOAJQANAJACAJQACAJgtgDQgtgEguAFQgtAGgfAGIgoAIIgCABQgLAAgOgMgAiRhTQAfgbARgbQARgbgEgPQgFgOAbAQQAdAQgOAJQgNAJgOAOIgeAdQgRAPgbAOQgJAGgDAAQgEAAATgSgAA9iNQgggbgFgHQgEgHAnAGQAoAGgDAcQgBAPgJAAQgJAAgQgOg");
	this.shape_27.setTransform(589.1,269.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgVClQgIgTADgPIAHggQAEgSAChlQABhngQgQQhbAOgWAFQgVAEgSgPQgSgPASABQATABA1gGQA1gFA3gIIBqgQQA0gIASAOQASAOgFAGQgGAFgfgCQgggCgcACIhaAHQAQAWgEAGQgFAHAAA3QAtAAAcAJQAcAJAEAZQAFAZgrgWIhDglQACCLgGAsQgFAsgGAAQgGAAgJgSg");
	this.shape_28.setTransform(543.4,270.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AhMCWQAhggAZgxQAYgyAMgsQAMgtAEghQAFghgHgTQgGgTAPAFQAQAEAMAKQANAKgHAKQgGAKgHAiQgHAigLArQAtBDAeAbQAdAbAlAPQAlAOgbACQgbACgdgBQgdgBgSghQgTggghhIQgbBIgbAlQgdAlghASQgMAGgEAAQgGAAAWgVgAjDB1QAXgaAVgnQAWgmANgkQAOglAHgiQAHgigFgPQgGgOAPAFQAQAEAMAKQANAKgJALQgJAMgMAfQgLAegLAmQAtANALAXQAMAWgIASQgIASgVggIgjg4QgSArgZAiQgZAjgZAPQgKAGgCAAQgFAAAOgRg");
	this.shape_29.setTransform(497.5,268.3);

	this.instance = new lib.mask();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(51,51,51,0.498)").s().p("EhkAA4XMAAAhwtMDIBAAAMAAABwtg");
	this.shape_30.setTransform(640.1,360.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.instance},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btnDelete}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mask, new cjs.Rectangle(0,0,1280.2,721.5), null);


(lib.Chapter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// 图层 12
	this.instance = new lib.元件9("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(1284.2,811.1,1,1,0,0,0,24.3,79);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(8));

	// 图层 18
	this.instance_1 = new lib.元件8("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1207,811.1,1,1,0,0,0,57.1,79);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(9));

	// 图层 17
	this.instance_2 = new lib.元件7("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1098.8,860.3,1,1,0,0,0,58.9,128.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(11));

	// 图层 16
	this.instance_3 = new lib.元件6("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(987,811.1,1,1,0,0,0,57.1,79);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(13));

	// 图层 15
	this.instance_4 = new lib.元件5("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(909.8,790.1,1,1,0,0,0,24.3,58);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(15));

	// 图层 14
	this.instance_5 = new lib.元件4("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(832.9,859.7,1,1,0,0,0,57.4,127.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(16));

	// 图层 13
	this.instance_6 = new lib.you("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(716.6,868.1,1,1,0,0,0,51.1,136);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).wait(18));

	// 图层 1
	this.instance_7 = new lib.Chapter0001();
	this.instance_7.parent = this;
	this.instance_7.setTransform(11,93);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9BD21").s().p("EhBYAOQIAA8fMCCxAAAIAAcfg");
	this.shape.setTransform(941.8,846);

	this.instance_8 = new lib.BG();
	this.instance_8.parent = this;
	this.instance_8.setTransform(11,93,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.shape,p:{x:941.8,y:846}},{t:this.instance_7}]}).to({state:[{t:this.instance_8},{t:this.shape,p:{x:960.5,y:842.2}},{t:this.instance_7}]},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,93,1890,870);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cf5();
	this.instance.parent = this;
	this.instance.setTransform(36,70.9,1,0.751,-4.2,0,0,5.5,3.6);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,15,10);

	this.instance_1 = new lib.cf7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(52,65,0.852,0.852,-5.2,0,0,2.5,4.2);
	this.instance_1.alpha = 0.512;

	this.instance_2 = new lib.cf5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.4,69.9,1,0.751,3.5,0,0,5.4,3.5);
	this.instance_2.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_2.cache(-2,-2,15,10);

	this.instance_3 = new lib.cf4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(34.2,57.9,1,1,0,-8.7,171.3,4,7.7);

	this.instance_4 = new lib.cf4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(65.8,55.2,1,1,0.2,0,0,3.8,7.7);

	this.instance_5 = new lib.cf3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67.3,38.7,1,1,3.5,0,0,6.4,2.9);

	this.instance_6 = new lib.cf2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(49,38.4,1,1,3.5,0,0,44.8,39.6);

	this.instance_7 = new lib.cf3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(32.9,41,1,1,0,-6.6,173.4,6.2,3);

	this.instance_8 = new lib.元件10("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(49.4,54.5,1,1,3.5,0,0,32,37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,-2.1,91.7,94.8);


(lib.元件9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(12.6,4.5,1,1,2,0,0,9,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,-2.9,19.7,15.3);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.元件9_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(64.7,89.9,1,1,0,0,0,12,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:12.1,rotation:6,x:64.8,startPosition:4},4).to({regY:15.3,rotation:1.3,y:90,startPosition:7},3).to({regX:12,regY:15.2,rotation:0,x:64.7,y:89.9,startPosition:0},1).wait(1));

	// 图层 2
	this.instance_1 = new lib.元件19("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(64.9,90,1,1,0,0,0,52,89.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:3.4},4).to({rotation:0},4).wait(1));

	// 图层 11
	this.instance_2 = new lib.元件17("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(30.4,175.9,1,1,0,0,0,29.3,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:24.8,rotation:8.5,x:26.1,y:177.8},4).to({regY:24.9,rotation:0,x:30.4,y:175.9},4).wait(1));

	// 图层 10
	this.instance_3 = new lib.元件16("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.4,176.3,1,1,0,0,0,10.2,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:8.5,x:8.1,y:175.5},4).to({rotation:0,x:12.3,y:176.3},4).wait(1));

	// 图层 6
	this.instance_4 = new lib.元件11("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(68.6,182,1,1,0,0,0,39.3,91.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},4).to({startPosition:0},4).wait(1));

	// 图层 5
	this.instance_5 = new lib.元件12("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(66.3,117.5,1,1,0,0,0,15.1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},4).to({startPosition:0},4).wait(1));

	// 图层 7
	this.instance_6 = new lib.元件13("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(35.1,117.8,1,1,0,0,0,32.9,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:4,y:118.1},4).to({rotation:0,y:117.8},4).wait(1));

	// 图层 9
	this.instance_7 = new lib.元件15("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(124.7,166.8,1,1,0,0,0,6.9,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:6.8,rotation:-8.4,x:129.5,y:164.1},4).to({regX:6.9,rotation:0,x:124.7,y:166.8},4).wait(1));

	// 图层 8
	this.instance_8 = new lib.元件14("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(95.1,111.3,1,1,0,0,0,9,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-4.9,x:95.2},4).to({rotation:0,x:95.1},4).wait(1));

	// 图层 12
	this.instance_9 = new lib.元件18("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(68,184.2,1,1,0,0,0,29.8,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({startPosition:0},7).to({startPosition:0},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-1.3,178.2,197.6);


(lib.BtnPlaySound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 13
	this.instance = new lib.元件20("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(105.2,94.3,1,1,0,0,0,90.9,94.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.4,-1.3,178.2,197.6);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btns
	this.btnReturn = new lib.BtnReturn();
	this.btnReturn.parent = this;
	this.btnReturn.setTransform(1197,651);

	this.btnNext = new lib.BtnNext();
	this.btnNext.parent = this;
	this.btnNext.setTransform(131,681,1,1,0,0,0,24,30);

	this.btnLast = new lib.BtnLast();
	this.btnLast.parent = this;
	this.btnLast.setTransform(60,681,1,1,0,0,0,24,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnLast},{t:this.btnNext},{t:this.btnReturn}]}).wait(1));

	// 封面
	this.chapter = new lib.Chapter();
	this.chapter.parent = this;
	this.chapter.setTransform(640.4,366.5,0.667,0.667,0,0,0,956.1,552.6);

	this.timeline.addTween(cjs.Tween.get(this.chapter).wait(1));

	// mask
	this.mask = new lib.Mask();
	this.mask.parent = this;
	this.mask.setTransform(644.4,373.9,1,1,0,0,0,644.4,373.9);
	this.mask.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mask).wait(1));

	// 锦囊
	this.btnJingNang = new lib.test();
	this.btnJingNang.parent = this;
	this.btnJingNang.setTransform(329.4,357.4,1,1,0,0,0,26.5,26.4);
	this.btnJingNang.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.btnJingNang).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(9,9,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ren
	this.btnPlaySound = new lib.BtnPlaySound();
	this.btnPlaySound.parent = this;
	this.btnPlaySound.setTransform(188.4,523.8,1.174,1.174,1.8,0,0,88.9,95.5);

	this.timeline.addTween(cjs.Tween.get(this.btnPlaySound).wait(1));

	// 对话框2
	this.dialogBox_2 = new lib.DialogBox2();
	this.dialogBox_2.parent = this;
	this.dialogBox_2.setTransform(194.5,312.4,1,1,0,0,0,128,65.2);

	this.timeline.addTween(cjs.Tween.get(this.dialogBox_2).wait(1));

	// 对话框0
	this.dialogBox_0 = new lib.DialogBox0();
	this.dialogBox_0.parent = this;
	this.dialogBox_0.setTransform(280.8,351.3,1,1,0,0,0,127.9,48.9);

	this.timeline.addTween(cjs.Tween.get(this.dialogBox_0).wait(1));

	// 图层 2
	this.answer_3 = new lib.Egg_3();
	this.answer_3.parent = this;
	this.answer_3.setTransform(962.1,454.5,1,1,0,0,0,31.8,25.8);

	this.answer_2 = new lib.Egg_2();
	this.answer_2.parent = this;
	this.answer_2.setTransform(1012.8,370,1,1,0,0,0,40.3,42.5);

	this.answer_1 = new lib.Egg_1();
	this.answer_1.parent = this;
	this.answer_1.setTransform(943,348.5,1,1,0,0,0,38.5,38.5);

	this.answer_0 = new lib.Egg_0();
	this.answer_0.parent = this;
	this.answer_0.setTransform(978,298.4,1,1,0,0,0,37,43.5);

	this.egg_3 = new lib.Egg_3();
	this.egg_3.parent = this;
	this.egg_3.setTransform(551.8,454.8,1,1,0,0,0,31.8,25.8);

	this.egg_2 = new lib.Egg_2();
	this.egg_2.parent = this;
	this.egg_2.setTransform(602.8,370.5,1,1,0,0,0,40.3,42.5);

	this.egg_1 = new lib.Egg_1();
	this.egg_1.parent = this;
	this.egg_1.setTransform(534.5,348.5,1,1,0,0,0,38.5,38.5);

	this.egg_0 = new lib.Egg_0();
	this.egg_0.parent = this;
	this.egg_0.setTransform(569,299.5,1,1,0,0,0,37,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.egg_0},{t:this.egg_1},{t:this.egg_2},{t:this.egg_3},{t:this.answer_0},{t:this.answer_1},{t:this.answer_2},{t:this.answer_3}]}).wait(1));

	// egg
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(839,253.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7C82A7","rgba(103,179,235,0.098)"],[0,1],41.2,31.1,-41.1,-51.2).s().p("AiPK/IqUqUQghgiAAgvQAAgwAhgiIOfpGQAigiAwAAQAwAAAhAiIIFHLQAhAiAAAwQAAAwghAhIsQMPQghAigwAAQgwAAgigig");
	this.shape.setTransform(862.7,396.9,0.54,0.54);

	this.instance_2 = new lib.Image();
	this.instance_2.parent = this;
	this.instance_2.setTransform(430.8,254.3,0.54,0.54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7C82A7","rgba(103,179,235,0.098)"],[0,1],41.2,31.1,-41.1,-51.2).s().p("AiPK/IqUqUQghgiAAgvQAAgwAhgiIOfpGQAigiAwAAQAwAAAhAiIIFHLQAhAiAAAwQAAAwghAhIsQMPQghAigwAAQgwAAgigig");
	this.shape_1.setTransform(452.7,398.3,0.54,0.54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_2},{t:this.shape},{t:this.instance_1}]}).wait(1));

	// txt
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmAoQgQgQgBgYQABgXAQgQQAPgPAXgBQAXABARAPQAPAQAAAXQAAAYgPAQQgRAQgXAAQgXAAgPgQgAgZgYQgLAKAAAOQABAOAKALQAMAMANgBQAOABALgMQAMgLgBgOQABgOgMgKQgLgMgOAAQgNAAgMAMg");
	this.shape_2.setTransform(475.4,185.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnAsIAAhQQAAgmgMgPIgCgFQAGgEAfAHQBBgMAWgSQAHgEADgBQAcADAYAYQAAAFgIAIQgVATgOAhQALAFAAAEQAAAGgLACIgZAGQg5ALggADIAAAeQgHBGBrgDQBSAEAIhAQADgQAEgDQABgDAAAKQAAAWAGAaQAFASgDAGQgcAZhJABQh4gDAAhPgAgShMIgFBDIAogIIAAgTQACgngFgIgABHhjQgFABgTAEQgMAFgKABQANAFAAAHIgCAPQgEAUgEAXIArgLQAFgTADgbIACgJQADgKgCgDQgBgCgEAAIgGAAgAilAhQgCgJAAgQQgBgXgFgTQgDgRgFgNQgDgFADgFQAIgCAYAJQAZgFANgLQADgDADAAQAbADAQAQQABAFgGAGQgSASgEAjQAIAFAAAEQAAAGgIADQgIAAgxAJQAAAegHAFIgBAAQgIAAgDgagAhxhAIgIABIgcAKIADBCIAhgKIADgdIADgbQADgLgHAAIgCAAg");
	this.shape_3.setTransform(448.2,173.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrCiIABgHQAFgTACgbQADgtAAguQgwBbhPAbQgRAHgCgCQgCAAAQgJQBEgoAzhVQgrAHgcAIQgKAEgDAAQgLAAgOgIQgKgHANAAQATgBBkgPQABgLAAghIAAgtQgmAHgOAAQgegKAOgDQATAAAwgLQAAg0gLgKQgFgGAAgFQABgFAHACQAoALgEANQgGAHgDAiIAAAIQALgCAXgGIARgDQAQAAAIAHQAEAHgMADIgKACIg7AJIAABZIBbgSQAmAAAAAYQgDACgOgCQg1gFg7AJQBZBVBeATQAJADACACQAAADgIACIggAFQgpAGgIgFQgegOhMheIAAA9IABBQQAAAdgJAFQgIgCgLgZgAhTgYQgeglATAAQAZAKADALQAEAOgHAIIgCABQgEAAgIgHgAAIgiQAZgZACgTQgDgLAXAGQAaAKgNAGQgJAFgQANQgSAPgMAFIgLAFQgCgCAIgIg");
	this.shape_4.setTransform(411,172.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah9CcQgIgQAHgGQAfgbgLggQgIgLAEgDQABgFALADQATALgBANQAAAIgHAUIgDANIA8gGQALgDAHAAIABhqIgJABQggAFgRAFQgdAJgLAKQgFABgJgRQgGgNAEgDQAegagOgjQgIgJACgDQAAgEALACQAWAGAAAVIgBANIgFAeIBNgKQAHh7gPgPQgGgIACgEQADgHAIACQArALgGANQgKgFgECFIAngFQAbgBANgEQAEghgEgLQgHgOAEgDQABgDANADQAhAOgFANQgIAMgIAeIgDAOQgGAWgGADQgHAFgGgNQgDgJAFgOQgHACgYABQghACgMACQAAAYgCAgIgCA1QAwgDAmgEQAAgXgDgRQgDgNADgBQADgDALAGIACABQAXAQgEANIgCAGIgFAdQgDAfgOgBQgKgCACgeQgzAHhBAMIgTAFQgrAIgYAQIgEABQgGAAgGgJg");
	this.shape_5.setTransform(372,171.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ACqCnQgggGgjggQgggkgRgoQgYAQgmAOQgYAIgFgDQgBgFAWgJQAwgaAOgMQgLglgDgaQhAATAGgPQAygTAFgEIgIgxQgIg1gLgIQgEgHACgBQAAgDAKAAQAkAGgBANQgIAcAIBEIAOgGQAWgLAGgCQAigIgFAOQAGAEhKAbQAEAfAKAaQAcgXAHgZQABgLALAGQAXAPgFAJQgDACgPANQgXAWgQALQAhBBAsAWQAKgFAJgeQAFgTAFACQADAAAAAVQAAAUADAYQAGAagOAAIgEgBgAhjCXQgHgRgIgIQgKgJACgCQAAgDALADQAOAIAFgDQAGgFACg7IAAgOQglAZgeAaQgGAFgVgTQgGgHACgDQABgDAIAAQATABBHgsIAAg5IgsAGIgFAAQgegKAQgDQAkgGAagGQAAhcgKgFQgGgGADgEQACgDAJACQAgAJAAAKQgKAYgBA8QAXgIAHAAQAUgDgBALQgKAJgpALIAAA1QAOgJAHgDQAMgHAEABQADADgLAJQgEADgMAIIgNALIAABaQgDAggOALIgDABQgGAAgGgOgABqhoQg8ghAdAAQARgEATAHQALAJAAAQQgBAHgGAAQgDAAgGgCg");
	this.shape_6.setTransform(333.4,173.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AABCfQgCAAgDgNQgGgTgIgLQgNgPAVAHQATAKAIgCQAjgmACg8QgEgGgTgIQgTgFgGgHQhBBuhZAjQgeAGANgIQCMhYAQhjQhKALglANIgHABQgygMAYgHQCcgRBZgTQAUgFAIAAQAegBASAPQALAPgiAAIgMAAQg5gChEAGQAOALAAAFQACADgHAKIgGAJQAWAIARAAQAHAAABACQAbAMAIAPQAAACgFADQgMAIgCARQgJAygYAmQgQAWgQAAIgIgCgAgJiGIgQgNQgPgNAUAAQAiADAQAMQAUAmgZAAQgLgFgXgWg");
	this.shape_7.setTransform(295.5,173);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiBDIAAgZIgMAIQgGAFgFABQgcgBANgKIAmgTQABgrgLgWIgCgHQAQgBAQATIAAAJQgDASgCATIAngXIAAhPQgCgmgMgZQgDgIABgCQAGgEAXAIQAOAHAAAIIgCAIQgEAigEBQQAegRAQgQQADgDAEgCQAbAFAJANQAAADgFAFQgMAOgCANQgGAogKAZQgIARgLAFQgDAAgDgJQgFgQgGgKQgIgLANAFQALAGADgBQAFgHAGgiQAFgfgFgCQgIgBgoAYQgEBigKgDQgGAAAFhXIgpAZIAAAqQgGBKBcgKQA5gDAXgRQAOgLADgtQACgRABACQACAAABARQACAYAJAWQAHANgHAGQgiAehTAAIgKAAQhgAAAIhcgAi3B0QABgBAIgCQAYgDAhgRIAAhIQgQAHgUgCQgYgDAQgGIAsgPIAAg1QAAgfgOgWQgFgHADgDQAYgBASAUIgCALQgFAegBAxIAMgEQAHgFADAAQALgCADADQADAFgFAIQgDACgfAPIAABCIARgJQAVgMABAEQATgEhcA+IgMAIIgLAKQgagKgBgQg");
	this.shape_8.setTransform(257.6,171.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABPCdQgLgUgOgRQgIgIAAgCQAAgDAJAFIAHABQAYAKAGgDQATgNAIhPQADg4gKgVQgEgFgdAFQgnAIgIgLQgNARgOAPQgNARgKAEQgJADALgPQAbggAVgvQAZgzgJgRQgCgFACgBQAagHATAVIgBAFQgOAMgQAhIgSAdIgJAOQArACAfgVQADgDACAAQApALADAOIgDAHQgMAOAAAVIAAAYQgCBMgKAcQgRAtgcAGQgCAAgFgKgAg7BxIgIgWQgYAKgYABQgBAWgGACQgKgCgCgRQAChngYgjIgBgFQABgFAdAFQAFgDALgXQADgLADgEQATgmgKgSQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAHgEAUAEQASAFABAHQAAADgIAIQgRARgOAYIgHAJQgLASgJAJQAegJAWgLQAGgEAEAAQAfAIACAPIgCADQgJAMABAvQAABngUAAQgDAAgFgNgAhFASQgGALgrADIAFA5IAGgDQASgGALgCQAIgBAIAIIADABQAFgGAAg8QgCg1gFgGQgDgEgkAKQgTAFgFAAQADAUACAdQAZgLAMAAQALAAACAIgAANgBQAXgFATAQQAQAdgUAJQgTgIgTgpg");
	this.shape_9.setTransform(218.8,173);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABdCZQgNgVgLgJQgbgXAiAKQATAGADgBQANAAgIiBQgCh8gOAAQgagIijAfQADCqgDAtQgDAxgLgDQgPgLAAgUQAAgFADgKQAIgeAChFQADhogRgbIgCgEQAFgEAZAHQCBgQA0gOIAHgCQAnAIALATIgBAFQgNATADAvIAIBrQAFA6gCAMQgEAngbANQgEAAgGgLgAg1A4QgGgxgPgQIgDgHQACgDAeADQAkgGAVgKIAIgBQAaAGAOANQAAABgFAFQgOAMgIAUQAOAKgDAIQgCAFgcADIgyAGQgDASgGAAQgHAAgBgSgAgMgJIggAGQAHAXABAXIAwgMQAEgDABgTQACgUgDgDIgCgBQgGAAgUAGgAhDhEQgFgFAUgBQAPAAAhgKQAXgGAIAAQAegDgKAMQgcAQg3AFQgUgCgLgGg");
	this.shape_10.setTransform(181.1,173.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRBzIACgOQAHgegBgrIAAgGQABgZgBgUQg4BBhSAuQgLAFgCgDQgBgDALgIQBfhAArg+QAAgIgKgOQgIgOALAEQALADAJAKQAYgmgDgNQgnAFghAKIgjAHQgOAEgYgLQgYgMAQgBQBCADCWgjIAQgDQAxgCAAAaQgFADgYAAQguAAgqAFQAbAWgKAGQgIAFgWAcIgIAMQACAMAAAaQAABngCAKQgCAqgJADQgKAAgIgkgACDBAIgdgWQhnhRAzAUQA+ATAZAWQAYAXAAAbQgBAGgFAAQgIAAgQgOg");
	this.shape_11.setTransform(142.4,174.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhlCdQgLgQgNgOQgFgFACgDQABgCAFAEQATAGAFgDQAGgIACgxIABgoQgHAIgTAQQgiAegOAQQgIAGgRgWQgHgKALgDQATgDBMg5IAAg2IgGABQgbAHgRAAQgmgEATgGQAjgGAigNQAAhHgMgNQgIgJABgFQACgDALADQAoAJgHAPQgJAZAAAsIAOgEQALgEAFAAQAOACACAFQABAFgLAEQgRAIgTAFIAAAzQADAAAIgIIAQgLQAGgFACABQABAEgEAGQgMAJgUAUIABB0QgEAegSAGQgEAAgFgLgAAPCCQgVgNgFgWQgGgUABhEIAAgFQACgtgGgIQgIgKALgDIABAAQAKACAIAFQApgLAmgTIANgFQALgDAYALQATALgGAGQgbAYgNAmIAIAFQAJAHgDADIgGABQgsADhBASQAABEAUAGQAWAPArgCQAugDASgOQAWgPAAgeQABgMACAAQADAAACAMQABATAIASQAGALgHAIQgbAbhJADQg4AAgRgNgAACgtIAAANQgBArABAHQAFABAdgIIAAgLQADgwgIgGQgbAIgCABgAAtg7QARAIgDAIQgEAJgFAqQAZgFAIgDQALggAAgmQAAgBAAAAQgBAAAAAAQAAgBgBAAQgBAAgBAAQgKAAgjANg");
	this.shape_12.setTransform(1127.7,121.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAyQAjgVgBgfIgGAAQgOACgFgHQgZgmAsgIQAlADgHAwQgMApgpAPg");
	this.shape_13.setTransform(1079.8,136.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABbCTQgKgWgEgCQgGgDhMAFQhkAGgIgGQgDAXgJABQgJgBgGgfQAAgGADgNQAJgeABghQACgSAAggIABglQADhEgMgZQgEgEACgCQABgDAcAGIAGACQCKgNAvgNIAKgBQAnAMAHATQAAACgDADQgLAIAAAcIAAAhIABBDIACBGQADAkgFAbQgGAggSAKQgEAAgJgbgABgB9QAKgEAAhwQgjAKgOgDQgKAAgnghIgJgJQgwA1g9AIIgDBQQBdgEA9gJIAYgDQAVAHAKATgAhKiJIgfADIgFChQA7gYAkgoQgNgLgUgJQhBAyAiglQAvg0AAgeIAAgEQAXgCAIAOQAAACgGAGIgQAUQAfgEASgNIAEgCQAZAHADALIgCABQgNAJgIAJIgDAFIgYAeQAsAeA2AHIAAgLQgDiGgLgBQgEgCgPAAQgnAAhsALgAgHguQASgaAHgOQgeAGgOgDIgRAUIAFgBQAKAAAVASgAgrAzQAZgCAfAMQATAQgOASQgUgGgpgmgAgaALQAQgGAVAMQAQAPgQAJQgagLgLgTg");
	this.shape_14.setTransform(1051.9,122.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ah2CDIABgPQAKhEgEhgIgeAIQAFBpgQgEQgLgFgDgWIACgGQAIgYAAgQQAAgQgHgUIgBgGQgFgMAbAMIAegIQAAhLgLgPQgDgEABgEQADgCAHABQAbAJADAKIgCAGQgIAdAAAqQALgDANgHIAKgEQAkAIAAAQQgLAMAAAOQgIBMgYgRQgGgOgKgGQgIgGAEgDQADgBAOABQAKACABgYQADglgGgBIgQADIgQAEIACBAIABBbQAAA7gOAAQgJgHgDgYgABzCFQgDgKgCAAIhsAIQAAANgGABQgHAAgDgKQgCgFgBgSQgIg7gLgUQgIgNAeAFIADAAQBhgQAmgJIAFgBQAsAKgHARQgIAOgEASQgEBEgQATQgFAFgDAAQgHAAgEgRgAgIAkIAJBUIArgFIAAgnQgKACgLAAQgWgEALgGIAOgCIASgDQAAgbgEgKgABpBrQAEAAAEAEIAFABQAIgDAFg+QABghgOAEQgGgBgaAFQgRADgIAAQAGAIAAADIgBAIQgDALAAAFIAIgCQARgEADgBQANAAADAHQADAGgLADQgDACgSABIgPAEIAAAkIAngFgAAMgJQgMglgLgRQgMgSAoAKQAhgGAhgNIAIgDQArAIgKAOQgJAGgOAZQALAGABAFQAAADgJABIhOAOQgBAIgFACQgGAAgCgIgAAohBIgWAGIAIAkQAegFAYgIQAKgjgIgDQgIAAgiAJgAAMiBQAYgDAmgPQAXgHAHgBQARABADAHQACAIgQAFQhBARgOAAQgogGAVgGg");
	this.shape_15.setTransform(1013.7,121.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABPCWQgIgOgIgGQgOgPACgBQAAgDATAEQAPADAHgGQAJgIAHgsQAIg2gEgnQAAgTgTACQgcAAgZADQgFAlgHAQIAKADQAZALAKAIQALALgCAPQgEAOgKgIQgWgWgVgYQgMAjgaAYQgVARgFgCQgBgDAQgUQAogxAFg9QgkAGgbADQgFAdgGAQIAKADQATAEAEAEQAFALgDALQgDAIgKgJIgEgFQgMgNgJgGQgNAjgRAOQgSAQgDgCQgBgBAMgTQAXgjALg6IgiAFQgbADACACIAAARIADBzQgBAcgKAAQgIgDgIgfQgBgHADgIQAGgTgBghQAAgygLgRQgMgNAIAAQAHgBAbAIQAOABAsgIQADgygJgQQgVADgWgFQgcgIARgDQBMgIBWgUQAZgHAMgBQAmAAADARQgDAFhWANIAGADQAVALgDAGQgHALgEAiQAqgHATgIQAKgDAbAQQAWAOgIAFQgOAIgFAWQgDAQAAA+QACBEgtAaIgBAAQgFAAgFgKgAg1hxQAYAMgDAHQgHAIgBAnQA5gIAEgBQAEgxgJgSQhAAIgFACg");
	this.shape_16.setTransform(975.8,122.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABPCdQgLgUgOgRQgIgIAAgCQAAgDAJAFIAHABQAYAKAGgDQATgNAIhPQADg4gKgVQgEgFgdAFQgnAIgIgLQgNARgOAPQgNARgKAEQgJADALgPQAbggAVgvQAZgzgJgRQgCgFACgBQAagHATAVIgBAFQgOAMgQAhIgSAdIgJAOQArACAfgVQADgDACAAQApALADAOIgDAHQgMAOAAAVIAAAYQgCBMgKAcQgRAtgcAGQgCAAgFgKgAg7BxIgIgWQgYAKgYABQgBAWgGACQgKgCgCgRQAChngYgjIgBgFQABgFAdAFQAFgDALgXQADgLADgEQATgmgKgSQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAHgEAUAEQASAFABAHQAAADgIAIQgRARgOAYIgHAJQgLASgJAJQAegJAWgLQAGgEAEAAQAfAIACAPIgCADQgJAMABAvQAABngUAAQgDAAgFgNgAhFASQgGALgrADIAFA5IAGgDQASgGALgCQAIgBAIAIIADABQAFgGAAg8QgCg1gFgGQgDgEgkAKQgTAFgFAAQADAUACAdQAZgLAMAAQALAAACAIgAANgBQAXgFATAQQAQAdgUAJQgTgIgTgpg");
	this.shape_17.setTransform(936.9,121.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AitCrQgCgCANgMQBChBAThnQALg3gMgXQgEgHACgBQADgDANAGQANAFAGAAQA2gEBXgWIAKgDQAUgBAFALQACAIgYAEQh6AVgggCQgWC3hZA3QgOAKgDAAIAAAAgAhOB6QBigGBLgNQAfgFASAAQAUADAKAOQADAMgYAAIgJgCQhGgLiEAbQgsgQAYgDgAAvBdQA7hngLgtQgCgGACgBQAjAHADASQgHAJgJAXQgbA1ghAvQgIALgFAAQgDgCAGgLgAgcAeQgDgTgDgIQgGgPADgBQAFAAAJAMQAVAZADATQAEAWgOAJIAAABQgJAAgKgtgAAYADIgKgbQgFgMADgBQACgCAKAJQATAPAEAOQAKAfgSADIAAABQgGAAgJgfgAAAipQAcgFAWAPQASAWgTANQgdgQgUgdg");
	this.shape_18.setTransform(898.4,122);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AA2ClQgNgWgQgQQgGgIAAgBQAAgCAJADIANAFQARAJAFgDQANgFgFiuQgpAGgdAGQgNAFgIAAQgQgFgEgGQgEgFAPgBQAdgDBHgMQgChMgUgaQgDgFABgDQAagHAXAbIgBAIQgFAWgCA5IAegGQAggIAKACQARADAGAMQAEAKgQACIgLAAQgtgCgbADIAHB5IABAxQgDAugcALQgEAAgHgLgAivBpQAzguAZguIghgnQgagcAHgCQAJgDA0A0QAPgcAIgzQgNADgTAHQgZAGgHAAQgRgBgKgFQgEgDAOgCQA2gGAXgWQAEgEABAAQAdAHAIAQQAAADgFAEQgIAKgFALIgIAVQgMAhgIAPQAcAcAHAOQAMAigQADQgGABgJgRQgNgYgOgTQglA7guAYIgOAEQgCgBAKgIgAgVgFQAVgDAWASQAOAhgTADQgVgMgRgng");
	this.shape_19.setTransform(862,122);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhNCQIABgHQANgpADhqQgyBTg1AfQgOAKgDgCQgCAAANgLQBChBAihLQglANgbABQgWgBgIgHQgEgDAUgDQAogGAugOQADhRgQggQgCgFACgDQAbgGARAcIgBAFQgKAWgDBDQAvgOAEARQADAIgpAIIgNABIgCArQAfABALAIQAKARgGAOQgGADgOgOQgOgOgMgIQAABRgBAxIAAABQgGAtgKAAQgNgIgBgegACECJQgEgRgFgLIhLAGQgBAdgIAAQgLgHgDgZIABgOQAHgdABg5QADhBgMgeQgDgHABgBQADgFASAFIAMADQAtgIAWgLQAIgDAFAAQAmANAHAMIgEAIQgLATAAAWQADBhADAYQAAA7gdAQIAAAAQgFAAgGgXgACDBjQAGAHACAAQAIgagChcQgChCgJgFIgCAAQgJgIhGAQIACAyQAQgDAWgGIAQgDQALADADAGQABAFgMADIgIACQgrAIgIgHIAAAvQANABARgGQAQgFAIAAQARADAAAHQAAAFgTADQgOADgnAAIgCA8QAZgCAXgEQAOgDAIAAQADAAAIAHg");
	this.shape_20.setTransform(822.4,121.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhqCjQgOgIACgQIAEgFQASgQABgJQAEgTgFgOQgDgFADgCQAQgDAJATQAAAQgJAcIBCgGIADhiQg6AIgoAIQgQADgIAAQgPgCgSgLQgJgIAPAAQAPAECIgQIABg4QgEABgTACIgVABQgRAAgSgHQgJgHARgBQAbAAArgIQABg8gTgdQgDgFACgDQAggFATAbIgBAKQgHAWgBAoQApgNAOgCQATgBAKAIQAJAJgOAFQgYAGg3AHIgEA4IBMgJQArgIANADQApAOgTAMIgGAAQgogGhsAJIgDBjIBGgEQAAgIgFgXQgFgWACgCQAbAWANAoQAEAcgTADQgLACgDgdQiSAPgmATg");
	this.shape_21.setTransform(785.3,120.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AikCKQAOgXAIgYQACgGABAAQAPABgDAmQgIAmgQAFQgQgCADgbgABSBVQArAAAYAUQAeAlgYAJQgpgUgggugAhNBoQAbgCAQAQQALAUgOAKQgVgDgTgpgAAFBdQAZABAUATQANAVgOAJQgbgLgRgngAg7BNQgHgDgEgQQgIgigNgYQgGgLADgDQABgDALADQAMADAGAAIAugFIAAhCQAAg2gQgTQgDgDABgDQAEgIAUAGQAVAIADAJIgBAMQgFAOgBAZQAPgFAVgJQAQgIAJgCQAYgDAGALQACAKgYAIQgkALghgCIAABAQAZgHARgIQAFgDADAAQApANAEAMQAAACgHAFQgWAPgFAUQANALgDAIQAAACggADIheANQgBALgHAAIgBAAgAg6ACIAHAxQAtgDApgLQAGgIAFgWQADgPgFgDIgFAAQgUAAhNANg");
	this.shape_22.setTransform(747,121.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAyQAjgVgBgfIgGAAQgOACgFgHQgZgmAsgIQAlADgHAwQgMApgpAPg");
	this.shape_23.setTransform(698.9,136.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("ABdCZQgNgVgLgJQgbgXAiAKQATAGADgBQANAAgIiBQgCh8gOAAQgagIijAfQADCqgDAtQgDAxgLgDQgPgLAAgUQAAgFADgKQAIgeAChFQADhogRgbIgCgEQAFgEAZAHQCBgQA0gOIAHgCQAnAIALATIgBAFQgNATADAvIAIBrQAFA6gCAMQgEAngbANQgEAAgGgLgAg1A4QgGgxgPgQIgDgHQACgDAeADQAkgGAVgKIAIgBQAaAGAOANQAAABgFAFQgOAMgIAUQAOAKgDAIQgCAFgcADIgyAGQgDASgGAAQgHAAgBgSgAgMgJIggAGQAHAXABAXIAwgMQAEgDABgTQACgUgDgDIgCgBQgGAAgUAGgAhDhEQgFgFAUgBQAPAAAhgKQAXgGAIAAQAegDgKAMQgcAQg3AFQgUgCgLgGg");
	this.shape_24.setTransform(670.6,122.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRBzIACgOQAHgegBgrIAAgGQABgZgBgUQg4BBhSAuQgLAFgCgDQgBgDALgIQBfhAArg+QAAgIgKgOQgIgOALAEQALADAJAKQAYgmgDgNQgnAFghAKIgjAHQgOAEgYgLQgYgMAQgBQBCADCWgjIAQgDQAxgCAAAaQgFADgYAAQguAAgqAFQAbAWgKAGQgIAFgWAcIgIAMQACAMAAAaQAABngCAKQgCAqgJADQgKAAgIgkgACDBAIgdgWQhnhRAzAUQA+ATAZAWQAYAXAAAbQgBAGgFAAQgIAAgQgOg");
	this.shape_25.setTransform(631.9,123.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("ABECaQg0gbhQhLQgmA5g5AaQgLAEgFgBQgCgCAKgGQA5gmAgg2IgNgLQgVgTgRgFIgOAQQgNANgCAAQgLAIgDgCQgBgCAJgLQAhgoAbhCQAKgbgHgQQgBgGADgCQAhAAADATQgHALgIATQgKAYgJAQQAZgIATgOIAJgFQAfAGABAQQgOAQgQAmQgIAXgGALQBfBbB3AEQAQABACADQAAAEgQAEQgxAHggAAIgLAAgAh8gEQAUAEAVARIALAIQARghAFgmQAAgCgNAFQgcAJgIgFgAAYA8IAAgIQAEghAAhGQAAhBgMgbQgCgGACgEQAbgDALAYIgCAKQgGAUAAAjQgCApADBLIAAADQAAAmgMACQgIgIgDgYgAA2g1QAbgBAqAWQAYAYgRALQgmgSgmgmg");
	this.shape_26.setTransform(595.5,121.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ABMBlQgGgbgIgLQhpAHhAAJQgDASgGgCQgGgCgFgUIgFgwQgFggAAgGQgIgugMgVIgCgDQgQgWAxAOQCLgLBcgRQAqAEAQAdQgQAQgJAxQgDAXgEAPQgTBfgaAIQgFAAgFgTgABKA5QAKAIAFAAQARgoAIhWQADgqgeAGQgrAAgfADIAEADQATANgBAGIgCAFQgOA2AWAAIAQgCQALgDAGAAQAaAGgDALQgaAHghAAQghgDADgoIAAgGQACgegHgTQglADgMADQATATgFAFIgFAQQgOA0gdAVQgQALgDgDQgBgDAMgPQAjgmgIg/IgeADIgfADIAOCNIBngLIA+gGQAGACALAJg");
	this.shape_27.setTransform(556.9,123.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AA+C2QgPgZgOgOQgIgFAAgCQACgDALADIAFACQALADAIAAQALgBgDhQQgFhUgLgLQgKgGgbAHQgYAHgRABIAAAqQBEgSAAAPQAAAGgYAFQgbADgRgDIgEAxQBSgUgHAPQgBAIgeAFQgaADgSgFQgGBJgVANQgJgDAAgbIAAgCQAYgvgChwQg6BShBAhQgPAIgBgCQgCgBANgLQBkhTApheIhEALQgVAFgJAAQgugLAXgIQA2gDBJgLQAVgxgKgYQgDgGACgCQAbgDASAZQgCACgDAGQgNASgJAeIBlgQIAmgFQAWgBAOAPQAIANgWADIgTAAQg3gFheANQgPAhgTAaQAXAEBBgWIAGgBQAXABAOASIgCAGQgIARAEAvIAEBBIADApQgDAjgXAUQgEAAgEgLg");
	this.shape_28.setTransform(518.5,121.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ah1CeQAagSAOgRQAbgegDgSIAAgEQAfgCAHAYIgeAbQgdAbgNAGQghATgJABQgKAAAWgPgABXCJIgTgUQgtgpAFgFQAmAGAkAbQAeAfgRASIgCAAQgIAAgSgQgAiyA8QAZgEBCgLQAXgEAOgCIgDhGIgQACQgLAAgFABQgOAAgNgIQgFgEAQgCQAGAAAogIQAAgTgCgNQgEgYgLgTQgFgHADgCQAhAAALASIgBAIQgDASAAAlIAIgCQApgLAKgCQABhAgLgdQgDgGACgDQAJgJAjAZQACAEgFANQgFARgBAOQgEAXAAALIATgFQANgDAFAAQARACAHAJQABAGgRAFQgSAEgcAFIgHBJIAjgHQA8gLAMADQAXACAKAKQALARgSABQiMgJieAqIgYAFQgkgGAKgLgAgigkIABBIIA1gJIADhKg");
	this.shape_29.setTransform(480.7,121.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgTC9QgGgLAAglIAChXIABgqIhEAGQAAAZgLgEQgKgIgDgdQgEg2gTgaQgFgEABgEQAFgHAlAMIBPgIIgCgpQgBgbgIgTQgFgIADgDQAZgGAWAZIgCAGQgKAVAAAwQA5gHAbgJIAIgCQAjAOANAQQAAADgHAIQgWAVgRAhQANALgHAJQgBABgTACQgmAAgsADQAABhgDApQgFApgJAAIgCAAgAhihEIAGBJIBGgFIAChOgAABhRIgBBOQBFgIACgGQAHgKAFgZQAFgagFgEQgFgDgRAAQgVAAgnAEg");
	this.shape_30.setTransform(443.2,122.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABaCTQgJgWgDgCQgHgDhMAFQhkAGgIgGQgDAXgKABQgHgBgHgfQAAgGAEgNQAHgeACghQACgSgBggIACglQADhEgNgZQgDgEACgCQACgDAaAGIAHACQCKgNAwgNIAJgBQAoAMAGATQAAACgDADQgLAIAAAcIAAAhIABBDIACBGQADAkgFAbQgGAggRAKQgFAAgKgbgABhB9QAJgEAAhwQgiAKgPgDQgKAAgnghIgIgJQgyA1g7AIIgEBQQBdgEA+gJIAXgDQAUAHAMATgAhJiJIggADIgEChQA6gYAkgoQgNgLgUgJQhBAyAhglQAwg0AAgeIAAgEQAXgCAJAOQgBACgGAGIgPAUQAegEARgNIAFgCQAZAHAEALIgEABQgMAJgIAJIgDAFIgYAeQAsAeA2AHIAAgLQgDiGgLgBQgEgCgPAAQgnAAhrALgAgHguQASgaAGgOQgcAGgPgDIgRAUIAFgBQAKAAAVASgAgrAzQAZgCAfAMQATAQgPASQgTgGgpgmgAgaALQAQgGAVAMQAQAPgQAJQgZgLgMgTg");
	this.shape_31.setTransform(404.3,122.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ah2CDIABgPQAKhEgEhgIgeAIQAFBpgQgEQgLgFgDgWIACgGQAIgYAAgQQAAgQgHgUIgBgGQgFgMAbAMIAegIQAAhLgLgPQgDgEABgEQADgCAHABQAbAJADAKIgCAGQgIAdAAAqQALgDANgHIAKgEQAkAIAAAQQgLAMAAAOQgIBMgYgRQgGgOgKgGQgIgGAEgDQADgBAOABQAKACABgYQADglgGgBIgQADIgQAEIACBAIABBbQAAA7gOAAQgJgHgDgYgABzCFQgDgKgCAAIhsAIQAAANgGABQgHAAgDgKQgCgFgBgSQgIg7gLgUQgIgNAeAFIADAAQBhgQAmgJIAFgBQAsAKgHARQgIAOgEASQgEBEgQATQgFAFgDAAQgHAAgEgRgAgIAkIAJBUIArgFIAAgnQgKACgLAAQgWgEALgGIAOgCIASgDQAAgbgEgKgABpBrQAEAAAEAEIAFABQAIgDAFg+QABghgOAEQgGgBgaAFQgRADgIAAQAGAIAAADIgBAIQgDALAAAFIAIgCIAUgFQANAAADAHQADAGgLADQgDACgSABIgPAEIAAAkIAngFgAAMgJQgMglgLgRQgMgSAoAKQAhgGAhgNIAIgDQArAIgKAOQgJAGgOAZQALAGABAFQAAADgJABIhOAOQgBAIgFACQgGAAgCgIgAAohBIgWAGIAIAkQAegFAYgIQAKgjgIgDQgIAAgiAJgAAMiBQAYgDAmgPQAXgHAHgBQARABADAHQACAIgQAFQhBARgOAAQgogGAVgGg");
	this.shape_32.setTransform(366.1,121.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ABPCWQgIgOgIgGQgOgPACgBQAAgDATAEQAPADAHgGQAJgIAHgsQAIg2gEgnQAAgTgTACQgcAAgZADQgFAlgHAQIAKADQAZALAKAIQALALgCAPQgEAOgKgIQgWgWgVgYQgMAjgaAYQgVARgFgCQgBgDAQgUQAogxAFg9QgkAGgbADQgFAdgGAQIAKADQATAEAEAEQAFALgDALQgDAIgKgJIgEgFQgMgNgJgGQgNAjgRAOQgSAQgDgCQgBgBAMgTQAXgjALg6IgiAFQgbADACACIAAARIADBzQgBAcgKAAQgIgDgIgfQgBgHADgIQAGgTgBghQAAgygLgRQgMgNAIAAQAHgBAbAIQAOABAsgIQADgygJgQQgVADgWgFQgcgIARgDQBMgIBWgUQAZgHAMgBQAmAAADARQgDAFhWANIAGADQAVALgDAGQgHALgEAiQAqgHATgIQAKgDAbAQQAWAOgIAFQgOAIgFAWQgDAQAAA+QACBEgtAaIgBAAQgFAAgFgKgAg1hxQAYAMgDAHQgHAIgBAnQA5gIAEgBQAEgxgJgSQhAAIgFACg");
	this.shape_33.setTransform(328.2,122.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("ABPCdQgLgUgOgRQgIgIAAgCQAAgDAJAFIAHABQAYAKAGgDQATgNAIhPQADg4gKgVQgEgFgdAFQgnAIgIgLQgNARgOAPQgNARgKAEQgJADALgPQAbggAVgvQAZgzgJgRQgCgFACgBQAagHATAVIgBAFQgOAMgQAhIgSAdIgJAOQArACAfgVQADgDACAAQApALADAOIgDAHQgMAOAAAVIAAAYQgCBMgKAcQgRAtgcAGQgCAAgFgKgAg7BxIgIgWQgYAKgYABQgBAWgGACQgKgCgCgRQAChngYgjIgBgFQABgFAdAFQAFgDALgXQADgLADgEQATgmgKgSQAAAAAAgBQgBgBAAAAQAAgBABgBQAAAAAAgBQAHgEAUAEQASAFABAHQAAADgIAIQgRARgOAYIgHAJQgLASgJAJQAegJAWgLQAGgEAEAAQAfAIACAPIgCADQgJAMABAvQAABngUAAQgDAAgFgNgAhFASQgGALgrADIAFA5IAGgDQASgGALgCQAIgBAIAIIADABQAFgGAAg8QgCg1gFgGQgDgEgkAKQgTAFgFAAQADAUACAdQAZgLAMAAQALAAACAIgAANgBQAXgFATAQQAQAdgUAJQgTgIgTgpg");
	this.shape_34.setTransform(289.3,121.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("ABXCbQgBAAgCgKQgCgUgIgSQghgDh9AOQgSAEgGAAQgCAUgGACQgKgCgDgTQgBgJAAgTQgCg1gLgnQgDgMgIgOQgFgIACgCQAAgEAjAJIA3gJQAcgtAHgeQgYAHgcgFQglgGAWgFQBcgNAwgRIAOgDQAVAAAQAJQALAIgQAFQgTAGhOALQAJAKgBAIQAAABgGAGQgVASgWAhQBngNAugOIAIgBQArAOAJATQAAABgGAHQgRARgCASIgDAoIgGA5QgOAxgVAAIgCAAgAh5gRIANCAIAygHQgBhygKgPgABaBrQANgeAFg2QAEg7gJgGQgQgCg/AIQARAIgFAbQgHAvgCAxIAWgDQAIgDAGAAQARAAAKASgAgoBnIAzgHQAFhngFgbIhAAIQAOAFgBAPIAAAKIATgEIAJgBQAMAAADACQADAFgHADQgOAIgbAAIAAAlQAHAAALgFQALgFAGACQAHAAADAEQACAFgGADQgXAHgQgCg");
	this.shape_35.setTransform(252.2,121.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAACaQgTgLgDgaIACgDQAMgYgBhxIAAgPQgCg5gIgVQg6AIglAIIgOADQgogIAIgLQCigQBZgRQAYgFAJAAQAaAAAJANQAKARgVACIgFAAQgqgIhjALQANAJACAFIgCAGQgGASABApQAlADAkALQASAKADAQQAAAQgQgDIgVgNQgngYgTgIQAHC7gPAAIgBgBg");
	this.shape_36.setTransform(213.7,122.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// bg2
	this.instance_3 = new lib.元件1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1284.3,721.5);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/BG.jpg", id:"BG"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/blue.png", id:"blue"},
		{src:"images/Chapter0001.jpg", id:"Chapter0001"},
		{src:"images/_delete.png", id:"_delete"},
		{src:"images/lastPage.png", id:"lastPage"},
		{src:"images/lastPage2.png", id:"lastPage2"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/mask.png", id:"mask"},
		{src:"images/nextPage.png", id:"nextPage"},
		{src:"images/nextPage2.png", id:"nextPage2"},
		{src:"images/orange.png", id:"orange"},
		{src:"images/purple.png", id:"purple"},
		{src:"images/red.png", id:"red"},
		{src:"images/_return.png", id:"_return"},
		{src:"images/start1.png", id:"start1"},
		{src:"images/start2.png", id:"start2"},
		{src:"images/tipbg.png", id:"tipbg"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;