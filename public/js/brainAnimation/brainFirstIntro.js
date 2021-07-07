var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function brainCharacterAnimationFirstIntro() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	handleComplete();
}
function handleComplete() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new libFirstIntro.brainFirstIntro();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(libFirstIntro.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	function makeResponsiveFirstIntro(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS=1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = libFirstIntro.properties.width, h = libFirstIntro.properties.height;
			var iw = window.innerWidth, ih=window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
			if(isResp) {
				if(iw/3.5<w || ih/3.5<h) {
					sRatio = Math.min(xRatio/2.5, yRatio/2.5);
				}
			}
			canvas.width = w*pRatio*sRatio;
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
		}
	}
	makeResponsiveFirstIntro(false,'both',false,1);
	fnStartAnimation();
}

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
		while(cur != exportRoot) {
			if(cacheList.indexOf(cur) != -1)
				break;
			cur = cur.parent;
		}
		if(cur != exportRoot) {
			var cur2 = textInst;
			var index = cacheList.indexOf(cur);
			while(cur2 != cur) {
				cacheList.splice(index, 0, cur2);
				cur2 = cur2.parent;
				index++;
			}
		}
		else {
			cur = textInst;
			while(cur != exportRoot) {
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


	(lib.Symbole1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Calque 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#30343D").s().p("AkKBYQgPgCgJgEQgJgEgQgQQgIgJgFgHQgQgXABgpQABgNADgFQACgEAIgHIAOgMIAUgKIAagNQAMgEAXAAQAQAAAIAEQAIAGAGAKQAMAPAEAMQAEAMAAAQIAAAcQAAAPgCAFQgCAHgJAIQgQAQgUAMQgJAFgIACQgFABgJAAIgKAAgAD+BXQgPgCgJgEQgJgEgQgQQgIgIgFgIQgQgWABgpQABgNADgGQACgEAIgGIAOgNIAUgKIAagMQAMgFAXAAQAQAAAIAFQAIAFAGAKQAMAQAEAMQAEALAAARIAAAbQAAAPgCAFQgCAHgJAJQgQAQgUALQgJAFgIACQgFABgJAAIgKAAg");
		this.shape.setTransform(34.4,8.8);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbole1, new cjs.Rectangle(0,0,68.9,17.6), null);


	(lib.leftArm = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Calque 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#30343D").s().p("AjYQjQgngiADhLQADg5AYg4QAVgzAygxQAggfBBgwIAKgQQAAgJACgIIgCgQQgBgFgBgBQAKjiAPizQATjgAgjTQALhGAojUQAhiyANhkIAPiFQAihaAZgbQAPgQAPgGQAIgEARgEIgSCwQgLBggeCgIgyEIQgoDugTELQgLCTgNE9QgBAdgKAjQABAGgBAIQAnBoAPAsQALAhgCAcQgEAigWAUQgQAOgTgBQgUgCgMgTQgPgYgOgfQgNAjgbAxQgoBJgaAbQgdAcgbAAQgXAAgWgTg");
		this.shape.setTransform(0,0,0.341,0.341);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-8.6,-36.7,17.3,73.5);


// stage content:
	(lib.brainIntro = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Calque 5
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#30343D").s().p("AEaMUIjVgYQg6AEgvgeQgygegOgyQgDgHAAgOIAAgBIASgfIAAgBIgFgNQgGh6gSh6QgLhMgYhvQgdh9gNg9IAAgCIAAgBQgEgFACgGQgDgPgIgcIgIgeIgqjIQg9kXgeiNQgFgaAQgPQAPgOAZAAQAZAAAVAOQAWAPAGAaIBaGjIAwDdIAKAtQAFAaABARIAPA8QA6D8ASDyIAUgFQAHgBAVAAQAfAAAWACQApAEAmAPQA+AYAkAqQAlAsAGA5QADAWgVATQgTARgVAAIgGgBg");
		this.shape.setTransform(165.1,162.6,0.341,0.341);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(140));

		// Calque 6
		this.instance = new lib.leftArm("synched",0);
		this.instance.parent = this;
		this.instance.setTransform(65.3,94.9,1,1,0,180,0,8.7,-36.7);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({regX:0,regY:0,skewX:174.5,skewY:-5.5,x:53.1,y:59.2},0).wait(1).to({skewX:169.2,skewY:-10.8,x:49.9,y:60.5},0).wait(1).to({skewX:164.1,skewY:-15.9,x:46.9,y:62},0).wait(1).to({skewX:159.2,skewY:-20.8,x:44.1,y:63.7},0).wait(1).to({skewX:154.5,skewY:-25.5,x:41.6,y:65.5},0).wait(1).to({skewX:150,skewY:-30,x:39.4,y:67.4},0).wait(1).to({skewX:145.7,skewY:-34.3,x:37.4,y:69.5},0).wait(1).to({skewX:141.6,skewY:-38.4,x:35.7,y:71.5},0).wait(1).to({skewX:138,skewY:-42,x:34.3,y:73.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:8.4,regY:-36.5,scaleX:1,scaleY:1,skewX:138.1,skewY:-41.9,x:65.2,y:95},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:138,skewY:-42,x:34.5,y:73.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(70));

		// Calque 2
		this.instance_1 = new lib.leftArm("synched",0);
		this.instance_1.parent = this;
		this.instance_1.setTransform(55.8,127.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},4).to({_off:true},15).wait(51).to({_off:false},0).wait(69).to({startPosition:0},0).wait(1));

		// Calque 4
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#30343D").s().p("AjKMEQgVgWADgXQAGhBAkgwQAkgvA9gaQAmgSAogDQAUgDAfAAIALAAQgJiygKhPQgPh1gZh6QgGgSgDgbIgEgxIg2qCQgCgaARgUQAPgTAYgHQAWgHASAJQAUAKACAbIAkGlIARDIIABAkQABAhADAPQA7ESAMEmIABAeQAOAKALAUIASAkIAAABQAAAQgCAHQgOA4gxAiQgwAhg5gEIjQAaIgHABQgUAAgTgTg");
		this.shape_1.setTransform(135.5,163,0.341,0.341);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(140));

		// Calque 3
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#30343D").s().p("ACvQKQgagZgqhJQgbgvgPglQgLAbgRAdQgMATgUADQgTABgPgNQgXgUgEghQgDgdAKghQAQgyAihjQgBgQAEgHIgBgCIABgBQgGgWgBgTQgjk/gUiNQgnkKg4jrIhDkDQgpidgShgIgeivIAaAHQAQAFAPAOQAcAcAnBWIAYCDQAUBjAtCwQA2DPAQBGQAuDRAjDeQAcCyAZDgQgCABgBAFIAAAkIAFAHQBBAuAhAfQAzAwAWAzQAZA3AEA5QAFBLgnAiQgWAVgXAAQgbAAgdgcg");
		this.shape_2.setTransform(236.6,128.1,0.341,0.341);

		this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(140));

		// Calque 9
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#30343D").s().p("AkKBYQgPgCgJgEQgJgEgQgQQgIgJgFgHQgQgXABgpQABgNADgFQACgEAIgHIAOgMIAUgKIAagNQAMgEAXAAQAQAAAIAEQAIAGAGAKQAMAPAEAMQAEAMAAAQIAAAcQAAAPgCAFQgCAHgJAIQgQAQgUAMQgJAFgIACQgFABgJAAIgKAAgAD+BXQgPgCgJgEQgJgEgQgQQgIgIgFgIQgQgWABgpQABgNADgGQACgEAIgGIAOgNIAUgKIAagMQAMgFAXAAQAQAAAIAFQAIAFAGAKQAMAQAEAMQAEALAAARIAAAbQAAAPgCAFQgCAHgJAJQgQAQgUALQgJAFgIACQgFABgJAAIgKAAg");
		this.shape_3.setTransform(140.3,69.5);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#30343D").s().p("AD+ASIgYgBIgZgEIgNgEQgQgEABgIQABgDADgBIAKgCIAOgCIAUgCIAagDIAjgBIAYABIAOADQAMADAEADQAEACAAADIAAAFQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgCACgJACIgkAFIgRACIgJAAIgPAAgAkKASIgYgBIgZgEIgNgEQgQgEABgIQABgCADgCIAKgCIAOgCIAUgCIAagDIAjgBIAYABIAOADQAMADAEADQAEACAAAEIAAAEQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgLADIgkAFIgRACIgJAAIgPAAg");
		this.shape_4.setTransform(140.3,69.6);

		this.instance_2 = new lib.Symbole1();
		this.instance_2.parent = this;
		this.instance_2.setTransform(140.1,69,1,1,0,0,0,34.4,8.8);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},8).to({state:[{t:this.shape_3}]},4).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},13).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},18).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_3}]},32).wait(1));
		this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},8).wait(4).to({_off:false,x:140.1,y:69},0).to({_off:true},7).wait(51).to({_off:false},0).to({_off:true},13).wait(3).to({_off:false,x:149.7},0).to({_off:true},18).wait(3).to({_off:false,x:136},0).wait(32).to({x:140.1},0).wait(1));
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({x:134.8,y:68.4},0).wait(1).to({x:129.6,y:67.8},0).wait(1).to({x:124.6,y:67.1},0).wait(1).to({x:119.7,y:66.6},0).wait(1).to({x:118.8,y:66.5},0).wait(45).to({_off:true},1).wait(70));

		// brainIntro2.svg
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#D63C41").s().p("ADRFqQhCgMg1gfQg1gggkgwQhNhpAaiRQAThqg6hEQgwg4hYgRQhZgPhIAyQgkAZgXAkQgXAkgHAqQgEAWgSANQgSAMgVgEQgWgDgMgTQgNgSAEgVQALg/Aig2QAig1A2glQA1glA+gNQA+gOA/AMQCOAaBGBmQBIBmgZCLQgSBlAyBEQAXAgAkAVQAlAVAtAIQArAIApgJQAqgJAjgZQAjgZAXgjQAXgkAIgrQADgVATgNQASgNAVAEQAVAEANASQANASgEAVQgUBzhaBLQhZBKhzAAQgaAAgfgFg");
		this.shape_5.setTransform(91.8,110.3,0.341,0.341);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#D63C41").s().p("ADPFqQiOgahGhmQhIhmAZiLQAShhgwhEQgvhEhhgRQhXgQhKAzQhJAzgQBYQgDAVgTANQgSANgVgEQgVgEgNgSQgNgSAEgVQAMhAAig1QAig1A1glQA2glA9gOQA/gNA+AMQCMAZBHBoQBJBogaCLQgTBqA6BEQAwA5BYAQQBYAQBJgzQBKgzAPhYQAEgWASgMQASgNAVAEQAWADANATQAMASgEAVQgVBzhaBLQhaBKhzAAQgZAAgggFg");
		this.shape_6.setTransform(119,115.5,0.341,0.341);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#D63C41").s().p("AD0GeQhKgOg9gjQg+gkgog0Qgrg6gPhJQgPhIAOhRQAVh1g5hTQg6hSh1gVQhqgUhZA+QhZA+gTBrQgDAVgTANQgSANgVgEQgVgEgNgSQgNgSAEgVQANhIAng9QAog9A8gqQA9gqBHgQQBGgPBIANQCgAcBSB4QBSB2gdCfQgVB6A9BQQAdAlAsAZQAtAZA2AKQA0AJAygLQAzgLAqgeQArgeAcgsQAcgrAJgzQAEgWASgMQASgNAVAEQAWADANATQAMASgEAVQgMBIgoA9QgnA9g9AqQhdBChzAAQghAAghgGg");
		this.shape_7.setTransform(172.1,107.7,0.341,0.341);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#D63C41").s().p("AoVENQgOgJgGgOQg3h9Ayh+QAxiAB9g2QCFg7B5AvQB6AvA5CGQArBfBSAcQBNAaBcgnQBVgmAhhVQAhhWglhVQgJgUAIgVQAIgUAUgJQAVgJATAIQAVAIAJAUQA3B8gyB/QgxB/h9A3Qg+Abg/AEQhAAFg4gTQh9grg9iLQgphchQgfQhRgfhdApQhVAlghBWQghBWAlBVQAJAUgIAUQgIAVgUAJQgSAEgFAAQgPAAgNgJg");
		this.shape_8.setTransform(139.2,83.3,0.341,0.341);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#D63C41").s().p("AlOENQiFgahNhyQhMhyAaiEQAFgWASgMQARgMAWAEQAWAEAMASQAMASgEAWQgSBbA0BMQA0BNBaASQBkATBIgwQBHgvAUhjQAdiQBphGQBrhHCQAdQCGAaBMByQBNBxgbCFQgEAVgSANQgSAMgWgEQgVgFgMgSQgMgRADgWQAShbgzhMQg0hNhbgSQhagShEAkQhSAsgWBtQgYB6hVBJQhVBIh2AAQgnAAgjgHg");
		this.shape_9.setTransform(188.3,86.4,0.341,0.341);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#D63C41").s().p("AAwEJQhkhkAAijQAAh2hHhHQhHhHh3AAQhsAAhNBNQhMBMAABrQAAAWgQAPQgPAQgWAAQgVAAgQgQQgQgPAAgWQAAiXBshrQBrhsCYAAQCiAABmBnQBmBmAAChQAACDBUBEQBFA6BsAAQBsAABMhNQBNhMAAhrQAAgVAPgQQAQgQAWAAQAWAAAQAQQAPAQAAAVQAACXhsBsQhsBriXAAQilAAhlhkg");
		this.shape_10.setTransform(134.5,31.5,0.341,0.341);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#D63C41").s().p("Aj+BbQgRgPgBgWQgBgWAOgQQBmhvCXgIQCWgHBvBlQARAOABAWQABAVgOARQgPAQgWABQgWABgRgOQhPhHhqAEQhrAGhHBPQgRASgYAAQgTAAgPgOg");
		this.shape_11.setTransform(195.8,49.3,0.341,0.341);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#D63C41").s().p("Ag1EEQgQgOgCgWQgCgWAOgRQAignAQgwQAPgxgFgzQgCgzgYguQgXgugogiQgQgOgCgWQgCgWAOgRQAPgQAVgCQAWgCARAOQA3AwAgBAQAhBAAFBJQAGBIgWBEQgXBFgwA3QgOAUgYAAQgTAAgPgNg");
		this.shape_12.setTransform(188.9,43.5,0.341,0.341);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#D63C41").s().p("Ah2CHQgWgDgNgSQgNgSAEgVQAPhkBTg9QBRg9BmAQQAWADANARQANASgEAWQgDAWgSANQgSANgVgEQg6gJguAjQgvAigJA6QgDAUgPAMQgPANgUAAIgIgBg");
		this.shape_13.setTransform(171.6,131.6,0.341,0.341);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#D63C41").s().p("ABNChQgWgDgNgRQgOgSADgVQAEgcgIgbQgHgbgSgVQgQgXgYgNQgZgOgcgDQgWgDgNgRQgOgSADgVQADgWARgOQASgNAVADQAyAGApAYQAqAYAfAnQAfAmANAvQAMAvgGAxQgCAUgPANQgOANgVAAg");
		this.shape_14.setTransform(164.9,130.7,0.341,0.341);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#D63C41").s().p("ABKB+QgPgOgDgUQgGg5gvglQgugkg5AGQgWADgRgOQgRgNgDgWQgCgWANgRQANgRAWgDQAxgGAvAOQAuANAnAfQAmAfAYArQAYApAGAxQACAWgNARQgOARgVADQgBABgEAAQgUAAgPgNg");
		this.shape_15.setTransform(129.7,64.9,0.341,0.341);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#D63C41").s().p("AhTCjQgUAAgPgNQgPgNgCgTQgDgWANgSQANgRAWgDQA6gIAigvQAjgugIg6QgDgWANgSQANgRAWgDQAWgDARANQASANADAWQAOBlg9BRQg+BThkAOg");
		this.shape_16.setTransform(129,58.2,0.341,0.341);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#D63C41").s().p("AA+D7QgUgIgKgUQgJgUAIgUQAmhkgshhQgrhihkgmQgUgIgKgUQgJgUAIgUQAHgUAUgKQAUgJAVAIQCMA1A+CKQA+CJg2CNQgFAPgOAKQgNAJgQAAQgKAAgJgDg");
		this.shape_17.setTransform(214.9,102.7,0.341,0.341);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#D63C41").s().p("AjXCIQgVgHgJgUQgKgTAIgVQAHgVAUgJQATgJAVAHQBlAkBggvQBhguAjhlQAHgVAUgJQATgJAVAHQAVAIAJATQAJAUgHAUQgYBFgwA1QgwA2hCAfQhNAkhPAAQg9AAg8gVg");
		this.shape_18.setTransform(218.3,92.9,0.341,0.341);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#D63C41").s().p("AArEDQg8gngpg8Qgog7gQhIQgPhGANhHQAOhHAng9QAMgSAWgEQAVgFARAMQASAMAFAWQAEAVgMASQg5BZAWBpQAVBpBZA6QASAMAFAWQAEAVgMASQgGALgLAHQgMAGgNAAQgPAAgOgJg");
		this.shape_19.setTransform(77.7,80.1,0.341,0.341);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#D63C41").s().p("AjyB4QgSgMgFgVQgFgWALgSQAng9A6grQA6gqBIgRQBGgRBHALQBHALA+AnQATALAGAWQAEAVgMASQgLATgVAFQgWAFgTgMQgsgagygIQgzgIgyAMQgyAMgpAdQgqAegbAsQgPAageAAQgNAAgPgIg");
		this.shape_20.setTransform(72.9,88.4,0.341,0.341);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#D63C41").s().p("AgbDPQgSgNgDgWQgEgVANgSQArg7gKhLQgFgkgTgfQgSgegegVQgSgNgDgWQgEgVANgSQANgSAWgEQAVgDASANQAuAiAdAwQAeAxAIA5QAJA4gNA3QgOA3giAvQgQAVgaAAQgRAAgNgKg");
		this.shape_21.setTransform(175.9,56.1,0.341,0.341);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#D63C41").s().p("AgbDPQgSgNgDgWQgEgVANgSQArg7gKhLQgFgkgTgfQgSgegegVQgSgNgDgWQgEgVANgSQANgSAWgEQAVgDASANQAuAiAdAwQAeAxAIA5QAJA4gNA3QgOA3giAvQgQAVgaAAQgRAAgNgKg");
		this.shape_22.setTransform(223.6,76.3,0.341,0.341);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#D63C41").s().p("ABbCPQhgAAhFhEQhEhFgBhfQAAgWAPgQQAPgPAXAAQAVAAAQAPQAPAPABAXQABA1AlAlQAmAmA1gBQAWgBAPAQQAQAPAAAXQAAAWgQAPQgPAPgVAAIgCAAg");
		this.shape_23.setTransform(80.4,118.6,0.341,0.341);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#D63C41").s().p("AjNDTQgQgQAAgWQgBijBzh0QBxh1CjgBQAVgBAQAQQAQAPAAAXQAAAWgPAPQgPAQgXAAQh3ABhTBVQhUBVABB3QABAWgPAQQgPAQgXAAQgWAAgPgPg");
		this.shape_24.setTransform(78.3,56.7,0.341,0.341);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#D63C41").s().p("AlKA8QgSgNgDgWQgEgVANgRQANgSAVgEQAWgEARANQCCBYCZgcQCagcBZiAQANgSAVgEQAVgEATANQARANAEAVQAEAWgNASQhFBihrA3QhpA2h0AAQiXAAh9hWg");
		this.shape_25.setTransform(155.6,70.9,0.341,0.341);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#D63C41").s().p("AhZECQgPgRABgVQABgWAQgPQBQhJAEhsQAEhrhIhPQgPgRABgVQABgWAQgPQARgPAWABQAVABAOAQQBnBvgGCXQgHCYhvBnQgRAOgTAAQgXAAgQgRg");
		this.shape_26.setTransform(100.4,94.8,0.341,0.341);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#D63C41").s().p("AgHCFQhtgFhigtQhjguhKhQQgPgRABgVQABgWAQgPQAQgPAWABQAWABAPAQQA8BBBPAlQBPAjBYAEQBXAEBSgeQBSgdBBg8QAQgPAXABQAVABAPAQQAPAQgBAWQgBAWgQAPQhMBGhfAlQhfAmhnAAIgXgBg");
		this.shape_27.setTransform(100.4,84.5,0.341,0.341);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#D63C41").s().p("AjLDHQgPgQAAgWQACieBxhtQBwhtCeACQAWAAAPAQQAQAPgBAXQAAAWgQAPQgQAQgWgBQhygChQBQQhSBOgBByQgBAVgQAPQgPAQgVAAQgXAAgPgQg");
		this.shape_28.setTransform(100.7,68.5,0.341,0.341);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#D63C41").s().p("AAQC9QhEgeg2g3Qg1g2gchFQgbhHAAhMQAAgWAQgPQAQgPAWAAQAWAAAQAQQAPAPgBAXQAAA3AUAyQAUAzAmAmQAlAoAzAVQAxAWA3AAQAWAAAQAQQAPAPgBAXQAAAWgQAPQgPAPgWAAQhMAAhFgeg");
		this.shape_29.setTransform(97.3,71.6,0.341,0.341);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#D63C41").s().p("AhpDXQgOgJgGgPQgJgUAIgUQAIgVAUgJQAmgQAcgdQAcgeAOgmQAPglAAgpQgBgogRgmQgIgUAHgUQAIgVAUgJQAVgJAUAIQAUAIAJAUQAZA5ABA+QACA+gXA4QgWA6grAsQgrAtg4AZQgNAFgJAAQgPAAgNgIg");
		this.shape_30.setTransform(176.2,34,0.341,0.341);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#D63C41").s().p("ACNB6QgOgJgFgOQgjhOhPgeQhOgfhNAjQgVAIgUgHQgVgIgJgUQgJgUAIgVQAJgUATgJQB3g0B3AvQB4AuA0B1QAIAUgHAUQgIAVgUAJQgMAFgLAAQgPAAgNgJg");
		this.shape_31.setTransform(177.2,30.2,0.341,0.341);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#D63C41").s().p("AjLDHQgPgQAAgWQACieBxhtQBwhtCeACQAWAAAPAQQAQAPgBAXQAAAWgQAPQgQAQgWgBQg3gBgzAUQgyAVgmAmQgoAlgVAyQgVAygBA3QAAAVgQAPQgQAQgVAAQgXAAgPgQg");
		this.shape_32.setTransform(137,102.7,0.341,0.341);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#D63C41").s().p("AhqBoQhuhwACieQAAgWAQgPQAQgPAWAAQAWAAAQAQQAPAQgBAWQgBBxBPBRQBPBSBxABQAWAAAQAQQAPAQgBAWQAAAWgPAPQgQAPgWAAQiegChthxg");
		this.shape_33.setTransform(133.7,105.8,0.341,0.341);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#D63C41").s().p("AgEBtQhTAAhLgfQhNgeg6g6QgQgPAAgWQgBgWAPgQQAQgQAWAAQAWAAAQAPQAtAsA6AXQA6AXA/gBQA/AAA6gYQA5gZAtguQAPgPAWgBQAVAAARAPQAPAPABAWQAAAWgPAQQg7A7hNAiQhMAghVACg");
		this.shape_34.setTransform(195.7,59.2,0.341,0.341);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#D63C41").s().p("AFLDeQgPgQAAgVQAAiEhdhbQhdhciCAAQiCAAhdBcQhcBcAACDQAAAVgQAQQgPAQgWAAQgWAAgQgQQgPgQAAgVQAAivB7h7QB8h7CuAAQCvAAB7B7QB8B7AACvQAAAWgPAPQgQAQgWAAQgWAAgQgQg");
		this.shape_35.setTransform(193.2,67.3,0.341,0.341);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#D63C41").s().p("AicDgQgVAAgPgOQgQgPgBgWQAAgWAOgQQAPgQAWgBQA3gCAxgXQAxgXAkgpQAmgnASgzQATgzgDg4QAAgWAOgQQAPgQAWgBQAWAAAQAOQARAPAAAWQAEBMgaBHQgZBGg0A4Qg0A5hCAfQhFAghMADg");
		this.shape_36.setTransform(139.9,131.8,0.341,0.341);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#D63C41").s().p("ACeF8QhJAAhDgaQhCgbg1gyQg4g0gfhFQgfhEgChNQgFicBshzQBshzCcgFQAWAAAQAPQAQAPABAVQABAWgPAQQgQARgVAAQg3ACgxAWQgxAXgmAoQgmApgTAyQgTAzACA2QABA3AXAyQAWAxApAmQAoAmAyATQAzATA3gCQAWAAAQAPQAQAPABAVQABAWgPAQQgQARgVAAg");
		this.shape_37.setTransform(151,126.5,0.341,0.341);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#D63C41").s().p("ACrF3QgPgPABgXQABgWAPgPQBmhhAEiNQAEiMhhhmQhhhmiMgEQiNgDhmBgQgPAPgXAAQgWgBgPgQQgPgPABgXQABgWAPgPQCGh+C5AFQC3AFB/CFQB/CGgFC4QgFC4iGB/QgOAQgWAAQgWAAgQgRg");
		this.shape_38.setTransform(106.7,64.6,0.341,0.341);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#D63C41").s().p("AEcFWQgTgMgFgUQgGgWALgSQAjg7AJhCQAJhDgRhCQgRhBgog2Qgog2g7giQg6gjhDgJQhCgJhCARQhCARg1AoQg2AogjA7QgLATgVAFQgVAGgTgLQgTgMgFgUQgGgWALgSQAuhNBGg1QBGg1BXgWQBXgXBWANQBXAMBNAuQBNAtA1BHQA1BGAWBXQAXBVgNBXQgMBYguBNQgGALgNAGQgMAHgOAAQgOAAgNgHg");
		this.shape_39.setTransform(193.2,110.6,0.341,0.341);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#D63C41").s().p("AjmCvQhnhOghh8QgFgVALgTQALgSAVgGQAVgFATALQATALAFAVQAOA0AgApQAfAqAuAcQAvAbA0AIQA0AIAzgOQBsgbA4hgQA4hegchsQgFgVALgTQALgSAVgGQAVgFATALQATALAFAVQAnCWhPCEQhPCGiWAmQgpAKgxAAQh+AAhkhNg");
		this.shape_40.setTransform(152.4,56.1,0.341,0.341);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#D63C41").s().p("AjmCwQhnhOghh8QgFgVALgTQALgTAVgFQAVgFATALQATALAFAVQAcBqBgA4QBfA5BqgcQBsgcA4hfQA4hfgchrQgFgVALgTQALgTAVgFQAVgFATALQATALAFAVQAnCVhPCFQhPCGiWAmQgtALgtAAQh+AAhkhNg");
		this.shape_41.setTransform(113.1,39.8,0.341,0.341);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#DB5B58").s().p("AMbahQhPgrgzhMQg1BMhUArQhWAthkAAQhjAAhWgtQhVgrg0hMQg1BMhVArQhXAthlAAQhkAAhXgtQhVgrg2hMQg0BMhUArQhWAthkAAQh4AAhihAQhghAgrhmQgyAsg+AZQg/AYhEAAQiYAAhrhrQhshrABiYQAAgRADgiQgnAHghAAQiXAAhrhrQhrhrAAiYQgBh2BIhiQh3gghMhhQhOhjAAh+QABhwA9hcQA9haBjgqQgxgzgchAQgchEAAhJQAAiYBshrQBrhrCYAAIAjACQgMgzAAgtQAAiYBrhrQBrhrCXAAQBLAABFAeQAEiWBrhnQBrhpCVAAQB3AABhBIQAkhxBghIQBhhIB6AAQBSAABLAjQBHAjAzA8QAuhaBXg1QBXg4BpAAQBpAABZA4QBXA3AtBcQA0g/BIgjQBMgkBUAAQB6AABhBIQBfBIAkBxQBhhIB4AAQCVAABqBpQBqBoAFCVQBFgeBLAAQCXAABrBrQBrBrAACYQABAtgNAzIAkgCQCXAABsBrQBqBrAACYQAABJgcBEQgbBAgxAzQBiAqA+BaQA9BcAABwQAAB+hNBjQhMBhh3AfQBHBhAAB3QAACYhrBrQhrBriYAAQgnAAghgHQAFAiAAARQAACYhsBrQhrBriYAAQhFAAhAgZQg+gZgygsQgoBnhbBAQheBBhzAAQhdAAhSgtg");
		this.shape_42.setTransform(145,78.8,0.341,0.341);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#D63C41").s().p("AMkcFQhPggg+g6QhBA6hTAgQhUAfhaAAQhaAAhUgfQhUghhBg6QhAA6hUAhQhUAfhcAAQhbAAhUgfQhUghhCg6QhAA6hTAhQhUAfhbAAQh0AAhngzQhlgzhBhbQhmA3hyAAQiwAAiBh3QiCh3gOitQi3gGh+iDQiAiEAAi2QABhbAihSQhsg6g/hqQhAhrAAh9QgBhsAxhgQAwhdBUhAQhAhpABh+QAAiqBwiAQBvh+ClgXIAAgOQAAi7CFiEQCEiEC6AAQAmAAAmAGQAniSB4hdQB7hfCZAAQBfAABTAlQA8hnBng7QBog8B6AAQBHAABEAWQBEAXA5ApQBAhKBYgoQBZgpBjAAQBkAABZAqQBZAoA/BLQA6grBEgXQBFgWBKAAQB5AABoA8QBnA7A8BnQBXglBcAAQCYAAB7BgQB4BdAnCRQAmgGAmAAQC6AACECEQCFCEAAC7IAAAOQClAXBvB+QBxCAAACqQgBB+g/BpQBUBAAxBdQAvBgABBsQAAB9hBBrQg/BqhsA6QAiBSABBbQAAC2iACEQh+CDi3AGQgPCtiBB3QiBB3iwAAQhzAAhkg3Qg/BbhhAzQhjAzhwAAQhVAAhQgfg");
		this.shape_43.setTransform(145,78.8,0.341,0.341);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},139).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(182.2,111.5,200,173.5);
// library properties:
	lib.properties = {
		width: 270,
		height: 190,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1.00,
		webfonts: {},
		manifest: [],
		preloads: []
	};




})(libIntro = libIntro||{}, imagesIntro = imagesIntro||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var libIntro, imagesIntro, createjs, ss, AdobeAn;
