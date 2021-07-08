var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function brainCharacterAnimationIntrapersonnelle() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	handleComplete();
}
function handleComplete() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new libIntrapersonnelle.brainIntrapersonnelle();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(libIntrapersonnelle.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS=1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = libIntrapersonnelle.properties.width, h = libIntrapersonnelle.properties.height;
			var iw = window.innerWidth, ih=window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
			if(isResp) {
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
					sRatio = lastS;
				}
				else if(!isScale) {
					if(iw<w || ih<h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==2) {
					sRatio = Math.max(xRatio, yRatio);
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
	makeResponsive(false,'both',false,1);
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



(lib.Symbole8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("AjNAUQgKgEgCgFQgDgHAFgFQAFgHAHgBQAKgBASAIQAfANAkAHQA7ALBMgOQA0gKBPgaIANgEIgEgBQgIgBgDgHQgEgIAFgGQAGgHANAAQAJgBAGADQAHAEAGAKQAIANAEALQADALAAAGQgBALgIAFQgEADgFgBQgFgBgDgDQgCgDgBgFIgBgFIgDABQg/AYhVASQgVAEgVADQgYADgYAAQhQAAhJgkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-5.6,43.8,11.3);


(lib.Symbole7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C64E63").s().p("AhiAfQgWgKgPgQQgNgNgGgPIAAgEIAAgNIABgBQAFgEALAAQAxgDAZADQAqADAcAQQAQgOAVgFQAJgCAagBQAmgBAWAEQAJACAEADIAEAFIgEAIIgBADIAAAAQgJARgHAHQghAmhJAJQgSACgRAAIgFAAQgyAAglgSg");
	this.shape.setTransform(-0.3,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993333").s().p("AhCAoQgZgDgxADQgLAAgFAEIgBABIAAgFIAEg4IAFgSQAGgPAEgGIADgDIAEAAQAFABAKAFQAIAFAOACQAuAKBWACIAdAAQARgCAVgIIAbgJIAKgDIADAEIABABIAAACQAGAOACALQACAKABATIABALQABAKgCAIIgDAMIgBADIgEgFQgEgDgJgCQgWgEgmABQgaABgJACQgVAFgQAOQgcgQgqgDg");
	this.shape_1.setTransform(0,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiAUQgNgDgIgEQgKgFgGgBIgDAAIAAgBQAJgHAJgFQAZgPAdgGQAPgDAUgBIAjAAIAgAAIAXABQAPACAWAMQAaANAPAKIACADIgKADIgbAJQgVAIgRACIgdAAQhXgCgugKg");
	this.shape_2.setTransform(0.4,-8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-11.6,31.7,23.3);


(lib.Symbole6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("ABiDlIgBgBQgFgBgBgDIAAgBQgDgGACgFIAEgOQAEgLAAgOIAAgCQhSgJiCglQhSgWgwgWQgpgSgggXIACgDIA3g9QADgEAFgMIALgfIAJg5QACgSACgFIADgLIABgCIAGgHIACADQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAAAIAAACIAGAFIABABIABACIACACIAEADIABACIAHAGIABACIAAAAIAEAEQAiAgAUAOIAbASQBsBCB7ASIACABQAAgPgDgQQgDgPAEgGIABgCQAEgFAGACIALAFQAWAPAVAQIARAOQAWASAbAaIAtApIADAEIABABIAGAGIADADQAEADgBAIIgBADIgBABIgGAFIgEACIgHAHIgBAAQg1AphgAhQgVAIgIAGQgLAGgDABIgDABIgCAAIgCAAgAj+jkIABABIABABIgBABIgBgDg");
	this.shape.setTransform(5,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-21.5,63.5,45.8);


(lib.Symbole5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("ADCFVQgbgDgUgOQgHgOgUgaIgXgeIlen/QgOgWAHgWQAGgUAUgLQAUgMAWAEQAYAEAOAVIDtFaIB9C2IAhAwQARAbAGAXQAAAFgGALQgDAEgEAEIgGAEQgTADgQAAIgQgBg");
	this.shape.setTransform(-2.4,-14.6,0.324,0.324,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#30343D").s().p("ACNB6Ii6gYQgzAEgrgeQgsgegMgxQgCgHAAgOIAAgBIAQghQAKgRANgKQAVgPAcgGIArgLIAYgBQAcAAASACQAkAEAiAPQA2AYAgAqQAhArAFA5QACAWgTATQgQARgSAAIgGgBg");
	this.shape_1.setTransform(-0.1,24.2,0.324,0.324,-7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#30343D").s().p("AiPF2QgrgCgGgPQgCgGAAgFQAAgIACgIQBfk6COktIAihGQAXgOAUgDQAfgEAXAMQARAKABANQABAFgDAGIgEAGIhaDEQg1B1ggBRQgzCGgoCGIgIANQACgBgFAGQgGAHgGAEQgJAGgNABg");
	this.shape_2.setTransform(-1.9,9,0.324,0.324,-17,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-27.6,13.2,55.4);


(lib.Symbole3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("ADCFVQgbgDgUgOQgHgOgUgaIgXgeIlen/QgOgWAHgWQAGgUAUgLQAUgMAWAEQAYAEAOAVIDtFaIB9C2IAhAwQARAbAGAXQAAAFgGALQgDAEgEAEIgGAEQgTADgQAAIgQgBg");
	this.shape.setTransform(2.4,-14.9,0.324,0.324,0,-27,153);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#30343D").s().p("ACNB6Ii6gYQgzAEgrgeQgsgegMgxQgCgHAAgOIAAgBIAQghQAKgRANgKQAVgPAcgGIArgLIAYgBQAcAAASACQAkAEAiAPQA2AYAgAqQAhArAFA5QACAWgTATQgQARgSAAIgGgBg");
	this.shape_1.setTransform(0,24,0.324,0.324,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#30343D").s().p("AiPF2QgrgCgGgPQgCgGAAgFQAAgIACgIQBfk6COktIAihGQAXgOAUgDQAfgEAXAMQARAKABANQABAFgDAGIgEAGIhaDEQg1B1ggBRQgzCGgoCGIgIANQACgBgFAGQgGAHgGAEQgJAGgNABg");
	this.shape_2.setTransform(1.9,8.7,0.324,0.324,0,17,-163,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-27.9,12.9,55.9);


(lib.Symbole2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("AlinPQgPgVAHgVQAFgTAUgLQAUgMAWADQAYAEAQAVQFJHGEbH8QAKAVgDARQgBAKgGAKIgJANQgUAYgrAIQkloYlanZg");
	this.shape.setTransform(-0.5,-14.7,0.324,0.324,0,35,-145);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#30343D").s().p("AldEyQgegEgMgYIgGgLQANgYAVggIAkg2IADgFQBchbBLg+QBehOBZg2QAfgTBagsQBNgnAqgdIA4gpQApACAPAVQAJALAEARIAHAeIhKA5QgpAehEAiIhyA5QhlA4hvBhQg8A1iDCCQgQAQgYAAIgHAAg");
	this.shape_1.setTransform(-6,-0.2,0.324,0.324,0,174,-6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#30343D").s().p("AD0DaQgPABgNgGQgNgIgIgPIgYgKQhqgHg+gNQhbgUg/gqQhDgsgtg9Qg5hPAUhBQAZhQBiAVQAwALBlA1QA/AjArAeQgGgmAAgqQAAgdAXgQQAVgPAcAFQAoAHAcAiQAZAeAKAsQARBEAbCDQAMAPABAMIACAAQgCALgHAPIgPAZQgJARgZAZg");
	this.shape_2.setTransform(11.9,14.5,0.324,0.324,0,82,-98,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-23.8,39.6,47.7);


(lib.Symbole1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("AlinPQgPgVAHgVQAFgTAUgLQAUgMAWADQAYAEAQAVQFJHGEbH8QAKAVgDARQgBAKgGAKIgJANQgUAYgrAIQkloYlanZg");
	this.shape.setTransform(0.5,-14.7,0.324,0.324,-35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#30343D").s().p("AldEyQgegEgMgYIgGgLQANgYAVggIAkg2IADgFQBchbBLg+QBehOBZg2QAfgTBagsQBNgnAqgdIA4gpQApACAPAVQAJALAEARIAHAeIhKA5QgpAehEAiIhyA5QhlA4hvBhQg8A1iDCCQgQAQgYAAIgHAAg");
	this.shape_1.setTransform(6.1,-0.2,0.324,0.324,-174);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#30343D").s().p("AD0DaQgPABgNgGQgNgIgIgPIgYgKQhqgHg+gNQhbgUg/gqQhDgsgtg9Qg5hPAUhBQAZhQBiAVQAwALBlA1QA/AjArAeQgGgmAAgqQAAgdAXgQQAVgPAcAFQAoAHAcAiQAZAeAKAsQARBEAbCDQAMAPABAMIACAAQgCALgHAPIgPAZQgJARgZAZg");
	this.shape_2.setTransform(-11.8,14.5,0.324,0.324,-82,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-23.8,39.6,47.7);


(lib.Interpoler2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63C41").s().p("ADRFqQhCgMg1gfQg1gggkgwQhNhoAaiSQAThqg6hEQgwg4hYgRQgrgHgpAJQgqAJgjAYQgkAZgXAkQgXAkgHAqQgEAWgSANQgSAMgVgEQgWgDgMgTQgNgSAEgVQALg/Aig2QAjg1A1glQA1glA+gNQA+gOA/AMQCOAaBGBmQBIBmgZCLQgSBlAyBEQAwBBBdARQBZAQBIgzQAkgZAWgjQAXgkAIgrQADgVATgNQASgNAVAEQAWAEAMASQANASgEAVQgTBzhaBLQhZBKh0AAQgZAAgggFg");
	this.shape.setTransform(-50.5,30,0.324,0.324);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63C41").s().p("ADQFqQiOgahHhmQhIhmAaiLQARhhgvhEQgwhEhggRQhYgQhJAzQhJAzgQBYQgEAVgSANQgSANgVgEQgWgEgMgSQgNgSAEgVQALhAAig1QAig1A2glQA1glA+gOQA+gNA/AMQCLAZBIBoQBIBogaCLQgTBqA6BEQAxA4BXARQBYAQBJgzQBJgzAQhYQAEgWASgMQASgNAWAEQAVADANATQAMASgEAVQgUBzhbBLQhaBKhyAAQgaAAgfgFg");
	this.shape_1.setTransform(-24.6,34.9,0.324,0.324);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63C41").s().p("AD0GeQhKgNg9gkQg+gkgog0Qgrg6gPhJQgPhIAOhRQAVh1g5hTQg6hSh1gVQhqgUhZA+QhZA+gTBrQgDAWgTAMQgSANgVgEQgVgEgNgSQgMgSADgVQANhIAng9QAog9A8gqQA9gqBHgQQBGgPBIANQCgAcBSB4QBSB2gdCfQgVB6A9BQQAdAlAsAZQAtAZA2AKQA0AJAygLQAzgLAqgeQArgeAcgrQAcgsAJgzQAEgVASgNQASgNAVAEQAWAEANASQAMASgEAVQgMBIgoA9QgnA9g9AqQhfBChxAAQgdAAglgGg");
	this.shape_2.setTransform(25.8,27.4,0.324,0.324);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63C41").s().p("AoWENQgOgJgFgOQg3h9Ayh+QAxiAB9g2QCFg7B5AvQB6AvA4CGQArBfBSAcQBOAaBcgnQBUgmAihVQAhhXglhUQgJgUAIgVQAIgUAUgJQAVgJATAIQAVAIAJAUQA3B9gxB+QgyB/h9A3Qg/Abg+AEQhAAFg4gTQg+gVgwguQgvgvgdhEQgqhchQgfQhQgfhdApQhVAlghBWQgiBWAlBVQAKAUgIAVQgIAUgVAJQgOAEgIAAQgQAAgNgJg");
	this.shape_3.setTransform(-5.4,4.3,0.324,0.324);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63C41").s().p("AlNENQiGgahMhyQhMhyAaiEQAEgWASgMQASgMAWAEQAVAEANASQAMASgEAWQgSBbAzBMQA0BNBbASQBjATBIgwQBHgvAUhjQAdiQBphGQBrhHCQAdQCGAaBMByQBNBxgbCFQgEAVgSANQgSAMgWgEQgVgFgMgSQgMgRADgWQAShbgzhMQg0hNhbgSQhagShEAkQhSAsgWBtQgYB6hVBJQhVBIh1AAQgnAAgjgHg");
	this.shape_4.setTransform(41.1,7.3,0.324,0.324);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63C41").s().p("AAwEJQhkhkAAijQAAh2hHhHQhHhHh3AAQhsAAhNBMQhMBNAABrQAAAWgQAPQgPAQgWAAQgWAAgPgQQgQgPAAgWQAAiWBshsQBshsCXAAQCiAABnBnQBlBmAAChQAACDBUBEQBGA6BrAAQBsAABNhNQBMhMAAhrQAAgVAQgRQAQgPAVAAQAWAAAPAPQAQAQAAAWQAACXhsBsQhrBriYAAQilAAhlhkg");
	this.shape_5.setTransform(-9.9,-44.9,0.324,0.324);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63C41").s().p("Aj+BbQgRgPgBgWQgBgWAPgQQBlhvCXgIQCWgHBwBlQAQAOABAWQABAVgOARQgPAQgWABQgWABgQgPQhQhHhqAFQhrAFhHBPQgSATgWAAQgUAAgPgOg");
	this.shape_6.setTransform(48.3,-28,0.324,0.324);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63C41").s().p("Ag1EEQgRgOgBgWQgCgWAOgRQAignAQgwQAPgxgFgzQgCg0gYguQgXgtgogiQgRgOgBgWQgCgWAOgRQAPgRAVgBQAWgCARAOQA3AvAgBBQAhBAAFBJQAGBIgWBEQgXBEgwA4QgPAUgXAAQgUAAgOgNg");
	this.shape_7.setTransform(41.8,-33.5,0.324,0.324);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D63C41").s().p("Ah2CHQgWgDgNgSQgNgSAEgVQAPhkBTg9QBRg9BmAQQAWADANARQANASgEAWQgDAWgSANQgSANgVgEQg6gJguAjQgvAigJA6QgEAUgPANQgOAMgUAAIgIgBg");
	this.shape_8.setTransform(25.3,50.2,0.324,0.324);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D63C41").s().p("ABNChQgWgDgNgRQgOgRADgWQAEgcgIgbQgHgbgSgVQgjgug6gHQgWgDgOgRQgNgRADgWQADgWARgNQASgOAVADQAyAGApAYQAqAYAfAnQAfAnANAuQAMAvgGAxQgCAUgPANQgPANgUAAg");
	this.shape_9.setTransform(19,49.4,0.324,0.324);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D63C41").s().p("ABKB+QgPgNgDgUQgGg6gvgkQgugkg5AGQgWACgRgNQgRgOgDgWQgDgVAOgRQANgSAWgCQAxgHAvAOQAtANAoAfQAnAfAXArQAYApAGAxQACAWgNARQgNARgWADQgBABgEAAQgUAAgPgNg");
	this.shape_10.setTransform(-14.4,-13.2,0.324,0.324);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D63C41").s().p("AhTCjQgUAAgPgNQgPgNgCgTQgDgWANgSQANgRAWgDQA6gIAigvQAjgugIg6QgDgWANgSQANgRAWgDQAWgDARANQASANADAWQAOBlg9BRQg+BThkAOg");
	this.shape_11.setTransform(-15.2,-19.5,0.324,0.324);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D63C41").s().p("AA9D7QgUgIgJgUQgJgUAHgUQAmhkgshhQgrhihkgmQgUgIgJgUQgJgUAIgUQAHgVAUgJQAUgJAVAIQCLA1A+CKQA+CJg2CNQgEAPgOAJQgNAJgRAAQgIAAgLgCg");
	this.shape_12.setTransform(66.5,22.7,0.324,0.324);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D63C41").s().p("AjXCIQgVgIgJgTQgKgUAIgUQAHgVAUgJQAUgKAUAIQBmAjBfguQBhguAjhlQAIgVATgJQAUgKAUAIQAVAHAKAUQAJATgIAVQgYBFgwA1QgwA1hCAgQhPAkhNAAQg7AAg+gVg");
	this.shape_13.setTransform(69.7,13.4,0.324,0.324);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D63C41").s().p("AArEDQg8gngpg8Qgog7gQhIQgPhGANhHQANhHAog9QAMgSAWgEQAVgFARAMQASAMAFAWQAEAVgMASQg5BZAWBpQAVBpBZA6QASAMAFAVQAEAWgMASQgGALgLAHQgMAGgNAAQgQAAgNgJg");
	this.shape_14.setTransform(-63.8,1.3,0.324,0.324);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D63C41").s().p("AjxB4QgTgMgFgVQgFgWAMgSQAmg9A6grQA6gqBIgRQBGgRBHALQBHALA/AnQASALAFAWQAFAVgLASQgLASgWAFQgVAFgTgLQgtgagygIQgygIgyAMQgzAMgpAdQgpAegbAsQgQAZgeAAQgOAAgNgHg");
	this.shape_15.setTransform(-68.5,9.1,0.324,0.324);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D63C41").s().p("AgaDPQgSgNgEgWQgDgVANgSQArg7gKhLQgMhLg9grQgSgNgDgWQgEgVANgSQANgSAWgEQAVgDATANQAtAhAeAxQAdAxAJA5QAJA4gOA3QgNA3giAvQgIAJgLAGQgMAGgLAAQgSAAgMgKg");
	this.shape_16.setTransform(29.4,-21.5,0.324,0.324);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D63C41").s().p("AgbDPQgSgNgDgWQgEgVANgSQArg7gKhLQgFgkgTgfQgSgegegVQgSgNgDgWQgEgVANgSQANgSAWgEQAVgDASANQAuAiAdAwQAeAxAIA5QAJA4gNA3QgOA3giAvQgRAVgZAAQgRAAgNgKg");
	this.shape_17.setTransform(74.7,-2.4,0.324,0.324);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D63C41").s().p("ABbCPQhgAAhFhEQhEhEgBhgQAAgWAPgPQAPgQAWAAQAWAAAQAQQAPAPAAAWQABA2AlAkQAmAmA1gBQAWgBAQAQQAPAPAAAXQAAAWgPAPQgOAPgVAAIgDAAg");
	this.shape_18.setTransform(-61.3,37.8,0.324,0.324);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D63C41").s().p("AjNDTQgQgQAAgWQgCijBzh0QByh1CjgBQAVgBAQAQQAQAPAAAXQAAAWgPAPQgPAQgXAAQh3ABhTBVQhUBVABB3QABAXgPAPQgQAQgWAAQgWAAgPgPg");
	this.shape_19.setTransform(-63.3,-21,0.324,0.324);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D63C41").s().p("AlKA8QgSgNgEgWQgDgVAMgRQANgSAWgEQAVgEASANQCBBYCagcQCagcBYiAQANgSAWgEQAVgEATANQASANAEAVQADAWgMASQhGBjhrA3QhpA1h1AAQiXAAh8hWg");
	this.shape_20.setTransform(10.1,-7.5,0.324,0.324);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D63C41").s().p("AhZEBQgPgQABgWQABgWAQgPQBPhIAFhsQAEhrhIhQQgPgQABgWQABgWAQgPQAQgPAWACQAWABAOAPQBmBwgGCXQgGCXhvBnQgRAOgTAAQgXAAgQgRg");
	this.shape_21.setTransform(-42.4,15.2,0.324,0.324);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D63C41").s().p("AgHCFQhtgFhjguQhiguhKhQQgPgQABgWQABgWAQgPQAQgPAXACQAVABAPAPQA8BCBOAkQBPAkBZADQBYAEBRgdQBSgeBBg8QARgPAVABQAWABAPAQQAPARgBAWQgBAVgQAPQhLBHhgAlQhfAmhnAAIgXgBg");
	this.shape_22.setTransform(-42.3,5.5,0.324,0.324);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D63C41").s().p("AjLDHQgPgQAAgWQACieBxhtQBwhtCeACQAWAAAPAQQAPAPAAAXQAAAVgQAQQgRAQgVgBQhygChQBQQhSBOgBBxQgBAWgQAPQgPAQgWAAQgWAAgPgQg");
	this.shape_23.setTransform(-42.1,-9.8,0.324,0.324);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D63C41").s().p("AAQC9QhFgeg1g3Qg1g2gchGQgbhFAAhNQAAgVAQgQQAQgPAWAAQAWAAAPAQQAQAPgBAXQAAA3AUAzQAVAyAlAmQAlAoAyAVQAyAWA3AAQAWAAAPAQQAQAQgBAWQAAAWgQAPQgPAPgWAAQhMgBhFgdg");
	this.shape_24.setTransform(-45.2,-6.8,0.324,0.324);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D63C41").s().p("AhpDXQgOgJgGgPQgJgUAIgUQAIgVAUgJQAmgQAcgdQAcgdAOgnQAPglAAgpQgBgogRgmQgIgUAHgUQAIgVAUgJQAVgIAUAHQAUAIAJAUQAZA6ABA9QACA+gXA4QgWA6grAtQgrAsg4AZQgOAFgIAAQgPAAgNgIg");
	this.shape_25.setTransform(29.7,-42.6,0.324,0.324);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D63C41").s().p("ACNB6QgOgJgFgOQgjhOhPgeQhPgfhMAjQgVAIgUgHQgUgIgJgUQgKgUAJgVQAHgUAVgJQB2g0B2AvQB5AuAzB1QAJAUgHAUQgIAVgVAJQgLAFgLAAQgPAAgNgJg");
	this.shape_26.setTransform(30.6,-46.1,0.324,0.324);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D63C41").s().p("AjLDHQgPgQAAgWQACieBxhtQBwhtCeACQAWAAAPAPQAQAQgBAWQAAAWgQAQQgQAPgWAAQg3gBgzAUQgyAUgmAmQgoAmgVAyQgVAxgBA3QAAAWgQAPQgQAPgWAAQgWAAgPgPg");
	this.shape_27.setTransform(-7.5,22.7,0.324,0.324);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D63C41").s().p("AhqBoQhuhwACieQAAgWAQgPQAQgPAWAAQAWAAAQAQQAPAQgBAWQgBByBPBQQBPBSByABQAVAAAQAQQAPAQAAAWQAAAWgQAPQgQAPgWAAQiegChthxg");
	this.shape_28.setTransform(-10.7,25.7,0.324,0.324);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D63C41").s().p("AgEBtQhTAAhLgeQhNggg6g5QgQgPgBgWQABgWAPgQQAPgQAWAAQAWAAAPAPQAuAsA6AYQA6AWA+gBQBBgBA5gXQA5gZAtguQAPgQAWAAQAWAAAPAPQAQAPABAWQgBAWgPAQQg7A8hMAgQhNAihVABg");
	this.shape_29.setTransform(48.2,-18.6,0.324,0.324);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D63C41").s().p("AFMDeQgQgPAAgXQAAiDhchbQhdhciDAAQiCgBhdBdQhcBcAACCQAAAXgQAPQgPAPgWAAQgVAAgQgPQgQgPAAgXQAAiuB8h7QB7h8CuAAQCvAAB7B8QB8B7AACuQAAAXgPAPQgPAPgXAAQgVAAgQgPg");
	this.shape_30.setTransform(45.9,-10.8,0.324,0.324);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D63C41").s().p("AicDgQgVAAgQgPQgPgPgBgVQAAgWAOgQQAPgQAWgBQA3gCAxgXQAxgYAkgoQAmgnASgzQATgzgDg4QAAgWAOgQQAPgQAWgBQAWAAAQAOQARAPAAAWQAEBMgaBHQgZBGg0A4Qg0A5hCAfQhFAghMADg");
	this.shape_31.setTransform(-4.7,50.4,0.324,0.324);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D63C41").s().p("ACeF8QhJAAhDgaQhCgbg1gyQg4g0gfhFQgfhEgChNQgFicBshzQBshzCcgFQAVgBARAPQAQAPABAWQAAAWgPAQQgPAQgVABQg3ACgxAWQgxAWgmApQgmApgTAyQgTAzACA2QABA3AXAyQAWAxApAmQAoAmAyATQAzATA3gCQAWAAAQAPQAQAPABAVQABAWgPAQQgQARgVAAg");
	this.shape_32.setTransform(5.8,45.4,0.324,0.324);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D63C41").s().p("ACrF3QgPgPABgXQABgWAPgPQBmhhAEiNQAEiMhhhmQhhhmiMgEQiNgDhmBgQgPAPgXAAQgWgBgPgQQgPgPABgXQABgWAPgPQCGh+C5AFQC3AFB/CFQB/CGgFC4QgFC4iGB/QgPAQgVAAQgWAAgQgRg");
	this.shape_33.setTransform(-36.3,-13.5,0.324,0.324);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D63C41").s().p("AEcFVQgTgLgFgVQgGgVALgTQAjg6AJhDQAJhDgRhCQgRhBgog1Qgpg2g6giQg6gjhDgJQhCgJhCARQhCARg1AoQg2AogjA7QgLATgVAFQgVAGgTgLQgTgMgFgVQgGgVALgTQAuhNBGg0QBGg1BXgXQBWgWBXAMQBXANBNAtQBNAuA1BGQA1BGAWBXQAXBWgNBXQgMBXguBNQgGALgMAHQgNAHgOAAQgNAAgOgIg");
	this.shape_34.setTransform(45.8,30.2,0.324,0.324);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D63C41").s().p("AjmCvQhnhOggh8QgGgVALgTQAMgSAUgFQAVgGATAMQATALAFAVQAOAzAgAqQAgAqAtAbQAvAcA0AHQA0AIAzgOQBsgbA4hgQA5hfgchrQgGgVALgTQAMgSAUgGQAVgFATALQAUALAFAVQAmCWhPCEQhPCGiWAmQgoAKgxAAQh+AAhlhNg");
	this.shape_35.setTransform(7.1,-21.5,0.324,0.324);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D63C41").s().p("AjmCwQhmhOghh8QgGgVAMgTQALgTAVgFQAVgFATALQATALAFAVQAbBqBgA5QBfA4BrgcQBrgbA4hgQA5hfgchrQgFgVALgTQALgSAVgGQAVgFATALQATALAFAVQAmCWhPCEQhOCGiWAmQgrALgvAAQh+AAhlhNg");
	this.shape_36.setTransform(-30.3,-37,0.324,0.324);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DB5B58").s().p("AMcahQhQgrgyhMQg2BMhTArQhXAthjAAQhkAAhXgtQhUgrg0hMQg1BMhVArQhXAthkAAQhlAAhXgtQhVgrg2hMQg0BMhUArQhXAthiAAQh4AAhjhAQhgg/grhnQgyAtg+AYQg/AYhEAAQiYAAhrhrQhrhrgBiYQAAgQAFgjQgnAHghAAQiYAAhrhrQhshrABiYQAAh2BHhiQh3gghNhhQhNhjABh+QAAhwA9hcQA9haBjgqQgxgzgbhAQgchEAAhJQAAiYBrhrQBrhrCXAAIAkACQgNgzABgtQgBiYBshrQBrhrCYAAQBLAABEAeQAFiWBqhoQBrhoCVAAQB4AABhBIQAjhxBghIQBihIB5AAQBTAABLAjQBGAiA0A9QAuhaBWg2QBYg3BpAAQBoAABZA4QBXA3AuBcQAzg/BIgjQBLgkBVAAQB6AABiBIQBfBHAjByQBihIB3AAQCVAABrBpQBqBoAECVQBFgeBLAAQCXAABsBrQBrBrAACYQAAAtgNAzIAkgCQCXAABsBrQBrBrAACYQAABJgcBEQgbBAgzAzQBjAqA+BaQA9BcABBwQgBB+hNBjQhMBhh3AfQBIBggBB4QAACYhrBrQhrBriXAAQgoAAgggHQADAiAAARQAACYhrBrQhrBriXAAQhGAAg/gZQg+gYgygtQgpBohaA/QhfBBhyAAQheAAhRgtg");
	this.shape_37.setTransform(0,0.1,0.324,0.324);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D63C41").s().p("AMkcFQhPggg+g6QhBA6hTAgQhUAfhZAAQhbAAhUgfQhUghhAg6QhBA6hUAhQhUAfhbAAQhcAAhUgfQhUghhBg6QhBA6hTAhQhUAfhaAAQh1AAhmg0QhmgyhBhbQhkA3h0AAQiwAAiBh3QiBh3gPitQi2gGh/iDQh/iDAAi3QAAhbAjhSQhsg6hAhpQhAhrAAh+QAAhsAwhgQAwhdBVhAQhAhpAAh+QAAiqBwh/QBviACmgWIAAgOQAAi7CEiEQCEiEC7AAQAlAAAmAGQAniRB5heQB6hfCZAAQBfAABTAlQA8hnBng7QBog8B6AAQBHAABFAWQBDAWA6AqQA/hKBYgoQBagpBjAAQBjAABaApQBYApBABLQA6grBEgXQBFgWBJAAQB5AABoA8QBnA7A9BnQBWglBcAAQCZAAB6BgQB4BdAoCRQArgGAgAAQC7AACECEQCECEAAC7IAAAOQCmAWBvCAQBwB/AACqQAAB+hABpQBVBAAvBdQAwBgAABsQAAB9hABrQhABqhrA6QAjBUAABZQAAC3iACDQh/CDi1AGQgQCtiAB3QiCB3ivAAQh1AAhig3QhABbhhAyQhiA0hwAAQhWAAhQgfg");
	this.shape_38.setTransform(0,0,0.324,0.324);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.4,-59.1,171,118.4);


(lib.Interpoler1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("AEaBSIgbgCQgPgBgLgDQgSgGgNgPQgNgOgEgTQgEgSAFgSQAGgTAOgNQANgMAUgHQANgFAZgGQAmgIARALQAKAGAJAOQAeAogFAcQgBAMgMAWQgLATgLAIQgKAHgQAAIgdgBgAkNBOIgagBQgQgBgKgEQgSgGgNgOQgOgPgEgSQgEgTAGgSQAGgSANgNQANgMAUgIQAOgFAYgFQAmgIASALQAKAFAJAPQAdAngEAcQgCANgMAWQgKATgLAHQgLAHgQABIgdgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-8.3,74.5,16.7);


// stage content:
(lib.brainIntrapersonnelle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbole 6
	this.instance = new lib.Symbole6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(40.1,341.2,1.047,0.737,0,9.1,7,0.3,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({startPosition:0},31).to({startPosition:0},40).to({_off:true},1).wait(3).to({_off:false,regX:0.4,regY:0.2,scaleX:1.05,skewX:9,x:40.2,y:341.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0.3,regY:0.1,scaleX:1.05,skewX:9.1,x:40.1,y:341.2},0).wait(1));

	// Symbole 6
	this.instance_1 = new lib.Symbole6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(264.5,335.5,0.997,0.75,0,-17,163,-0.1,0.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({_off:false},0).to({startPosition:0},34).to({startPosition:0},6).to({_off:true},1).wait(3).to({_off:false,scaleX:1,skewX:-16.8,skewY:163.2,y:335.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1,skewX:-17,skewY:163,y:335.5},0).wait(1));

	// Symbole 4
	this.instance_2 = new lib.Interpoler1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(155.8,372.9,0.901,0.901,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},14).to({regY:-0.6,scaleY:0.18,skewX:180},1).to({startPosition:0},1).to({regY:0.1,scaleY:0.9,skewX:0},1).to({startPosition:0},13).to({startPosition:0},5).to({regY:0,x:137.4,y:370.8},1).to({startPosition:0},24).to({x:169.9},7,cjs.Ease.get(1)).to({startPosition:0},27).to({regY:0.1,x:155.8,y:372.9},1).to({startPosition:0},12).to({regY:-0.6,scaleY:0.18,skewX:180},1).to({regY:0.1,scaleY:0.9,skewX:0},1).to({startPosition:0},17).to({regY:-0.6,scaleY:0.18,skewX:180},1).to({regY:0.1,scaleY:0.9,skewX:0},1).to({startPosition:0},6).wait(1));

	// Symbole 5
	this.instance_3 = new lib.Symbole5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(169.5,454.4,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},134).wait(1));

	// Symbole 3
	this.instance_4 = new lib.Symbole3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(144.5,454.7,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},134).wait(1));

	// Symbole 2
	this.instance_5 = new lib.Symbole2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(73.7,396.9,0.901,0.901,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},134).wait(1));

	// Symbole 1
	this.instance_6 = new lib.Symbole1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(238.6,397.7,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},134).wait(1));

	// Symbole 8
	this.instance_7 = new lib.Symbole8("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(160.5,402.6,0.901,0.901,0,0,0,0,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(95).to({_off:false},0).to({startPosition:0},39).wait(1));

	// Symbole 7
	this.instance_8 = new lib.Symbole7("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(138.5,405.5,0.901,0.901);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(36).to({_off:false},0).to({startPosition:0},2).to({startPosition:0},19).to({startPosition:0},3).to({_off:true},1).wait(6).to({_off:false,x:168.3},0).to({startPosition:0},27).to({_off:true},1).wait(40));

	// Calque 2
	this.instance_9 = new lib.Interpoler2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(155.5,381.3,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({startPosition:0},134).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(205.8,568,200.6,151.8);
// library properties:
lib.properties = {
	width: 300,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(libIntrapersonnelle = libIntrapersonnelle||{}, imagesIntrapersonnelle = imagesIntrapersonnelle||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var libIntrapersonnelle, imagesIntrapersonnelle, createjs, ss, AdobeAn;
