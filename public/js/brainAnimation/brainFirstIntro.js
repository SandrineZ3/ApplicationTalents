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
	function makeResponsive(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS=1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = libFirstIntro.properties.width, h = libFirstIntro.properties.height;
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


(lib.yeux = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#30343D").ss(1,1,1).p("ACXgYIAAgBIABAAQAAAAABAAIAAAAQABAAABAAQABgBACgBQABABABABQAAAAABAAQAAAAABAAIAAABQABgBAAAAQACgBACgBQABgBAAAAQACACABABQAAABABABQADABAFABQAAAAABAAQACAAABABIAAAAQABACABADQACADABAFQABAFABAIQAAAGgCAEIAAABQgBAAABABQABAHgCADQgBABAAAAQgCADgGAAQgCAAgCAAQgDAAgBAAIgGAAQgBAAgCAAIAAABQAAAAgBAAQgBAAgBAAQgBAAAAABQgDABgCABQgHABgHgDQgIgDgEgIQgDgBgCgBQgIgGAAgMIAEgIQAEgFAGgDIABgBQAAAAABAAQAAgCABAAIAAgBIAAgBIABAAQACgEAEgEQAIgFAGACQAAAAABABQADAAACABQAEgBAEgBQABAAABABQAFgBAEACQAFADACAEQAFABAAAGQABABAAADQAAACgBACQAAACACADQACADAAABIAAAJQgCACgCABQAAABAAABIgBAAQgCADgFADQgBADgBABQAAABgBAAQAAABgBABQgBAAgBABQgDABgFAAQgBAAgCAAQgBAAgCAAIAAAAQgCABgBAAQgFAAgDgDQgBgBgBgBQgBAAAAgBQgCAAgBAAQgBgCgCgCQgBgCgBgCQAAAAgBgBQgGgGAAgJQAAgEAEgEIAAgBIABAAQAAgBAAgBQAAgCABgBIAAgBQABgCABgBQAAgBAAgBQABgDACgBQAAgBABAAQAAAAAAAAQABAAAAAAQACgBACgBIABAAQAAAAABAAIAAAAQABgBAAAAQABAAAAgBQABAAAAAAIABAAIABAAQAAAAACAAQABAAABAAQAAABABABQABgBAAAAIAFAEIACADQADADACAGQABAAAAAAQACAAADABQAAAAABAAQAGARABAFQAAAAAAABQAAAAABABQgEACgEABIAAAAQgCABgBAAQgBAAgBABIAAAAQgBAAgCAAQgCAAgDABQAAgBgBABQgBAAAAAAIgBAAQgBAAgBAAQAAAAgBAAQAAAAgBAAIAAAAIgBgBQAAABgBAAQgBABgBAAQgCAAgCAAIAAAAQgBAAgBAAIAAAAQgBAAgBAAQgBAAgBgBQgDgBgCgCIgBAAQAAAAAAgBQgDgFgCgEQAAgGAAgGIAAAAQAAgBAAAAQAAgBABgBQAAgBABgBQABgBAAAAQAAgBAAgBQAAgBAAAAQAAgBABgBIAAgBQAAgCABgBACWgYQABAAAAAAQABgBABAAACSgXQADgCACAAQACAAACAAQABgBACABQABABACABIAAAAQABAAAAABQABABABABQADADABAGQAAABABACQACgBADABQABACABAEQABAEABAHQAAAEAAADQgFAAgEgBQgBAAgBgBQgBAAAAAAQgBgBAAAAIAAABQAAADgCACQAAACgBABIgBgBIAAABQgBAAAAAAQgEgCgDgEQgCgCgCgDQAAgBgBgBQABgBAAgBQABgDAEgBQADgBAEAAQABAAABAAQAAADABADQAAACABADQgEgCgDgEQgCgDgCgBQgBgCgBgBQgCgCgBAAQgCgBgBgBIAAgBQABgCABgCQABgCACgCQACAAADABQACAAADACQABABABABQABAAAAAAIAAABQABAEABAGQAAACAAACIAAAEQAAAAAAABQgBABABABQgBAEAAAFQgBAAAAABQAAgBgBAAQAAAAgBAAACSgXQABgCACgCQABgBACgBQAGgFAEACQACABACACQAAgBABAAIAMgBQALAAAGAIQABABACAJQADAGAAAFQgCAHgDAEQgCACgCACIAAAOQgBABgEAAQgBAAAAAAQgFAAgDAAQgEAAgDgBIAAAAQgBAAgBgBQAAABgBAAQAAAAgBABQgBAAgBAAQAAABgBAAQgBABgCABQgBAAgBABQAAAAgBAAIAAgBQgBAAgBABQgCgBgBAAIgBAAQgBgBgBgCQgBAAgBAAQgBAAgBAAQgDgCgBgCQgBAAgBAAQgBAAgCAAQgBgBgBgCQgBgDgCgCQgGgMAAgMQABgEACgCQAFgEAIgCIAAgBIABAAQAAAAAAgBQABgBABAAgACPgTQAAgBABgBIAAgBQADgCADAAACPgTQAAgBABgBQABAAAAAAQADgCACgBACJgIIAAAAQABgEABgDQABAAAAgBQABAAAAgBIABAAQABgCACAAQACgCACgCACNgPQAAgBABgBQAAgBAAAAIABAAIAAgBACNgPQABgCABgBQABgBABAAQACgCAEgBQADAAADACIABABQADgBACAAIABAAQAAAAABAAQACABABACQADADADAGACEgSQACgDAHgBQADgBACAAACJgIQAAgBABgBACJgHIAAgBACIgDQAAgBAAgBQAAgBABgBACHAAQABgBAAgBACHAAQAAgCABgCQAAgCABgCACTgMQACgBACAAQACgDACgCQABgBABgBIAAAAQACgCACgBIAAAAQAAAAABABIAAAAQABABAAABQADAEABAFQAAABABACIABAAQABAKAAAHQAAACgBACQAAABAAABQAAACgBACQAAACgBACQAAAAAAABQgBAAgBAAIgBAAIAAAAQgCgBgBAAQAAAAgBAAQAAAAgBAAQgDAAgEAAQgCAAgCAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBgBAAgBQgCgBgBgBQAAgBgBgBQAAgCgBgCQAAgCgBgCQgBgGAAgEACLgIQABAAAAgBQADgCAEgBQABgBABgCQADgCADgBQABgBACAAQADADADAIQACAAACAAQABAGAAAKQAAACAAACQAAABAAAAACQgIIAAAAQAAgBADgDACMgNQAAgBABAAIAAgBACLgLQABgCABgBACRgBQgBgEAAgDACSgEQgCgCAAgCACRgBQAAgCABgBACQgIQACgBACAAQACAAACABQADAAACACQADgBADgBQABACAAABQABAFAAADIABAAQAAABABAAQABACABACIABABACBgOQABgBABgBACKgLQABgBABgBACKgHQABgCAAgCAClgUQABAAABAAQAGACABAHQABACAAABQAGALAAALQAAABAAABQAAAAgBAAQAAAAABABQgBACgCACIAAAAQgBABgCABQgCACgDABQgBAAgCgBQAAAAgBAAQgBgBAAAAACjgZQAEAAADABQABAAABABQAFAHADAJQACAHAAAIQAAAEgBAEQAAAAAAABQAAABAAAAQAAABAAABQAAACAAABIAAABQgBAAgBAAQgDACgEABAChgZQABAAABAAACYgYQABAAACgBAChgXQAAAAABABQABABACABACcgZQACAAADACACVgCQADgDACgBQABAAACAAQABAAAAABQABABABABQACgBACgBAC0gVQACABABACQABABACACQAAACAAACQAFATgCAGQAAAAgBABQgEAAgDABQAAACAAACQAAACAAABAC0AQQgBAAgBAAQgBADgBADACmAMQgBAAAAABQgDAHgBABQgEgDgDgBQAAAAgBgBQgDgBgCgCQgBgCABgCQgBgCAAgCQgBgCAAgBQAAgBAAAAQABgCACgBAClADQABACAAACACjAXQgBgBAAAAQgBAAAAABQgBAAAAAAQgCABgBAAQgCABgCAAIAAgBQgBAAAAgBQgFgHgCgGIgBAAQAAgCAAgCQABgCABgCQgBgCAAgBACbAbIgCgBQAAgBAAAAQgBgBgBAAACcAdIgBgCQgBAAgBAAQgCgBgCgCIAAAAIAAAAQgBAAAAgBQgCgCgBgCQgBgFAAgDQAAgBABAAQAAgBAAAAQAAgBABgBQAAgBABgBQACgDADgCQADgBAFgCQABADACACQABAAABABACcAdQgCgBgCAAIgBAAQgBgBgBgDQgCAAgCgBQgBAAgBgBIgBAAQAAAAAAgBQgBAAAAgBQgBgBgCgCQAAgCgBgBQgDgHABgHACkAYIAAAAIAAAAQgFAEgEgBACkAYQAAgBgBAAACkAcQgEABgEAAACgAWQgHgCgBgCQgEgCAAgDQgBgBAAAAQgBgCgBgBQAAgCgBgBQAAgEABgDACwAWQgBAAAAABQgDABgEAAQgBAAAAAAQgBAAAAABQgBACgBABQgBABgBACQgBAAgCAAIgDgCACoATQgBACgBACQgBAAAAABACpAPQAAAEgBAEQAAAAAAABQAAABgBAAQAAACgBABQgBAAgBAAACoAcQgBABgCAAQgBACgCABQgBAAgBAAQAAAAgBABQgBgBgCAAQgBgBgBAAACsAbQgCAAgCABACiAhQgBgBgBAAQgCAAgBAAQgBAAAAAAQgBAAgCAAQgCgBgBAAQgDgBgDgCQgCgBgBgBQgCgBgBgBQgGAAgFgBQgCgFgBgFQgDgMAHgOACnAhQgDAAgCAAACyAdQgBACgCABACQALQAAgBAAAAQgEgKgBgIACOAVQAAAAAAgBQgBgBAAgBQgFgPACgKACPAWQgBAAAAgBACXAYQgBAAgBAAQAAAAAAAAACQAYQgBgBAAgBACVAcQgDgCgCgCACUAXQAAgCgBgCQgCgEgBgEACZAfQgCgBgCgCACwgCQACAEACAOAijgfQAAAAABAAQADAAACACQABAAABACQAAgBABABQABgBABABQAEAAADAAQABABABAAQADACAFABQACABABABQABABACACQAAACAAADQAFASgCAHQAAAAgBAAQAAABAAAAQAAABABAAQgBABABAAIgBABQgCADgFACQgBAAgBABQgDABgEABIAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQgBABgCABQgBABgCAAQgBABgBABQAAAAgBAAQgBAAgCgBQgBAAgBgBIgBAAQgBAAgBgCQgBAAgBAAQgBAAgBAAQgCgBgBAAQgCgBgBgBQgCgBgBgBQgBgBgBgBQgBgEgCgCQgGgMAAgMQABgEACgCQAAgBABgBIAAAAIAAgBIABgBQACgDAEgEQAIgFAGACQAGgFAEABQACABACACQABABABABQAFgBAEACQAFACACAEIAAABQABABABADQACAEABAFQABAEABAIQAAAHgCAEIAAAAQgEACgEACQAAACAAABIAAAAQgBADgBACQAAAAgBABQAAAAgBABQgBABgBABQgDgBgBAAIgGABQgBAAgCAAQgBAAgBAAQAAgBgBAAIAAAAQgBAAgBAAQgBAAAAAAQgBAAgCAAQgCAAgBAAQgBgBgBgBQgBgBAAAAQgDgCgBgDQgBgBAAAAQgCgBgBgBQAAgBgBgBQAAgCgBgCQgDgHABgHQABgBAAgBIAAgBQAAAAAAgBQAAgBABgBQAAgBABgBQABAAAAAAQAAgBAAgBQAAgBAAgBQAAgBABgBIAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQABgBACgBQACgCAEgBQADAAADADIABAAQADAEADAIIAAAAQABAFABAGQAAABAAADIAAADQAAABAAAAQgBABAAABIAAAAQAAAEgCACQAAABgBABQgBABAAAAQgBAAAAABQAAgBgBABQgBAAgBABQgCAAgCAAIAAAAQgBAAgBAAIAAAAQgBAAgBgBQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQgBgBAAAAQAAgBAAAAIgBAAQAAgBAAAAQgDgFgCgFQAAgFAAgGAi6gQQAAgBABAAQAFgEAIgCIAAAAIABAAQAAgBAAAAQABgBABgBQABgCACgCQABgBACAAAi6gQQABgCABgBAi7gQIABAAAixgMIAAgBQABgCABgBQAAAAABgBIAAgBQABgBABgCQABAAABgBQACgCACgBIABAAQAAAAABgBIAAAAQABAAAAAAQABgBAAAAQABAAAAAAIABAAIABAAQACAAADACQAAAAABAAQABABABABQADAEABAGQAAABABABQACAAADAAQABADABADQABgGADABQAAAAABAAQAGARABAFQgEABgDAAQAAAAgBAAQgBAAgBAAQgBAEgBACIAAAAQgBABAAAAQgCACgDACQgBgBgCAAQAAgBgBAAQgBAAAAgBAiygKIAAgBQABgEABgCQABgBAAAAQABgDACgCQAAAAABAAQAAgBAAAAIAAAAQADgCADgBQABAAAAAAQABAAABAAIAAAAQABgBABAAQABgBACAAQAEgCAEgBQAAAAABAAIAMgBQALAAAGAHQABACACAIQADAGAAAFQgCAIgDAEQgCACgCACIAAANQgBACgEAAQgBAAAAAAQgFAAgDAAQgEgBgDgBAiygKIAAAAQAAgCABAAAizgHIABgBQAAgBAAgBQAAgCABAAAizgHQAAgCABgBAi0gCQAAgDABgCIAAAAAizgGQAAAAAAgBAizgHQAAgCABgBAi8AUQgDgBgCgBQgIgGAAgLIAEgIQAEgFAGgEAiZgbQABAAAAAAQACgCACgBQABAAAAAAQACABABACQAAAAABABQAFAHADAJQACAIAAAIQAAAEgBADQAAACAAADIAAAAQgCAAgBABQgBAAgBAAAiagbQAAAAABAAIAAAAIAFAFIACACQADAEACAFAidgbQABgBABABQAAAAABABQABABAAAAIAAABQABAAAAABIABAAQAAAAABAAQABAAABABQAGACABAHQABABABAHQAFAGAAALQAAAAAAABQAAABAAABQgBACgCABIAAABQgBABgCAAQgDACgEgBQgBAAAAAAQgBABAAAAQgBACgBACQgEAAgEAAIgBgBQgBAAgBgBQgCgBgCgBIAAAAIAAgBIgBAAQgCgCgBgDQgBgEAAgEQAAAAABAAIgBgBQAAgCAAgBQABgDABgBQAAAAAAgBQABgCACgCQgCgBgBgBIAAAAQABgCABgCQACAAACAAQADABACABQADgBADAAQABAAAAAAQACgBACAAIABAAQABALAAAGQAAADgBACQAAABAAABQgBgBgBAAQgBgBAAAAQgBAAAAAAQgEgCgDgFQgCgCgCgCQADAAAEAAQABAAABAAQAAACABAEQAAACABADQgDAGgBACQgEgDgDgCQAAAAgBAAQgCgDgCgDQAAgBgBgBQgBgBAAgCQgBgCAAgBQgBgCAAgBQAAgCABgCQgCgCAAgBIAAgBQACAAACAAQABgCACgCQACAAADAAQACAAADADQABABABABQABABAAACQABAEAAAEQABABAAADAiagZIAAgBQAAABABAAQABABACABQACACABABQADAEADAFAiagaIAAAAQABgBAAAAAidgbQABAAACABAikgbIABAAQAAAAABAAAikgbIAAAAQACgBACAAQABAAACABAijgaQABgBACAAAiggVQABgBABAAIAAAAQACgCACgBAifgbQAAAAACAAAiggVQABAAACgBQADgBACAAQADAFABAFQAAABABABQABAGAAAKQAAACAAACQAAABAAABAiqgYQACgBACAAAiqgYQADgCACgBAitgUQAAAAAAgBIABAAIAAAAQAAgCABgBQABAAAAAAAivgRQAAgBABgBAiugSQAAgBABgBAiogPQACAAACAAQACgDACgDAiogPQABgBABgBQADgCADgCAisgVQAAgBABgBQABgBAAAAAi3gVQACgCAHgCQADgBACAAQADgBACAAAiwgKQABgBAAAAQADgDAEgBAiqgDQgBgEAAgDAimgFQADgCACgBQABgBACAAQABABAAABQABABABABQACgBACgBAijgBQADgDAFgBQABACACADQABAAABABIABAAQAAAAABABQABABABACIABABAiwgOQABgBABgCAirgLQAAgBADgDAijgBQgCgDgBgBAixgNQABgCABgCAixgKQABgCAAgCAiHgXQAAAAABAAQACAAABAAQAFABAAAGQABACAAADQAAABgBADQAAACACADQACACAAACIAAAJQgCABgCACQAAABAAAAQABAIgCADQgBAAAAABQgCACgGABQgCAAgCAAQgDABgFAAQgBAAgCAAQgBAAgCAAIAAAAQgCAAgBAAQgDABgCABQgHACgHgDQgIgEgEgIQgCgEgBgFQgDgMAHgPAiHANQAAABABABQAAAAAAABQAAABAAABQAAACAAABAiLgFQABAFABAHQAAADAAADQgFAAgEAAQAAABgBACQAAACgBACQAAABAAAAQgBAAgBAAAiVAJQgBABABABQgBAFAAAEQgBABAAAAIAAABIAAAAQgCgBgBgBIAAAAIgBAAQAAAAgBABQgDAAgEAAQgCAAgCAAQgBAAAAAAQgDgBgCgCQgBgBAAgBQgFgPACgLAiLATQgBAAgCAAQgCABgDAAQAAABAAAAQAAABgBABQAAABgBACQgBAAgBAAQgBABgBABQgBAAgCABIgDgDQgCAAgCAAIgBAAQgBgCgBgCQgCAAgCgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQgBgCgBgBQAAgBgBAAQgGgGAAgJQAAgFAEgEAiVAUIgBAAQgBAAgBAAQgBAAAAgBIgBAAIAAAAQgBAAAAABQgHgDgBgBQgEgDAAgDQgBAAAAgBQgBgBgBgCQAAgBABgBQAAAAABgBQACgDADgBAiVAUQgBABAAAAIgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBABQgCAAgBABQgCAAgCAAQgBAAgBAAAiTAUQAAAAgBAAQgBAAAAAAAiTAQQgBACgBACAiVAaQAAAAgBABQgBACgCABIAAAAQgBAAgBAAQgCgBgBAAQgCAAgBgBAiTAZQgBAAgBABAiPAYQgCABgCAAAiJAbQgBACgCABAiSANQAAAEgBADAinAGQABgBAAgBQABgDAEgBQgBAAgBgBAirAIQAAAAAAgBQgEgJgBgIAinAKQgBgCABgCAiqAGQAAgBgBgBQAAgEABgDAiqAIQAAgBAAgBAikAWQgBAAgBAAQAAAAAAgBAinAVQAAgCgBgCQgCgFgBgEAirAVQgBgBAAAAIgBAAQAAgBAAAAQgBgBAAAAQgBgCgCgCQAAgBgBgBQAAgCgBgDQgBgFAAgEAirAZQgBgCgCgCQgBAAgCAAQgGAAgFgBAimAaQgDgCgCgDAilAdQgDgCgDgCAiYAUQAAAAgBAAAiiAWIAAAAQgBgBAAAAQgFgHgCgGAigAZIgCgCQAAAAAAgBAiXAWQgFAEgEgBAiiAOQgDgCgCgCAiiAcQgCgBgCgBAibAUQgEgDgDgDAicAeQgBABAAAAQgFAAgDgCAiZAeQAAAAgBABQgBgBgBAAAiXAVQAAAAgBgBAiXAVIAAABAiUAfQgDgBgCAAAiLgFQACAFACAN");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,-4.6,42.3,9.3);


(lib.Symbole1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63C41").s().p("ADRFqQhCgMg1gfQg1gggkgwQhNhoAaiSQAThqg6hEQgwg4hYgRQgrgHgpAJQgqAJgjAYQgkAZgXAkQgXAkgHAqQgEAWgSANQgSAMgVgEQgWgDgMgTQgNgSAEgVQALg/Aig2QAjg1A1glQA1glA+gNQA+gOA/AMQCOAaBGBmQBIBmgZCLQgSBlAyBEQAwBBBdARQBZAQBIgzQAkgZAWgjQAXgkAIgrQADgVATgNQASgNAVAEQAWAEAMASQANASgEAVQgTBzhaBLQhZBKh0AAQgZAAgggFg");
	this.shape.setTransform(23.3,59.4,0.216,0.216);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63C41").s().p("ADQFqQiOgahHhmQhIhmAaiLQARhhgvhEQgwhEhggRQhYgQhJAzQhJAzgQBYQgEAVgSANQgSANgVgEQgWgEgMgSQgNgSAEgVQALhAAig1QAig1A2glQA1glA+gOQA+gNA/AMQCLAZBIBoQBIBogaCLQgTBqA6BEQAxA4BXARQBYAQBJgzQBJgzAQhYQAEgWASgMQASgNAWAEQAVADANATQAMASgEAVQgUBzhbBLQhaBKhyAAQgaAAgfgFg");
	this.shape_1.setTransform(40.6,62.7,0.216,0.216);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63C41").s().p("AD0GeQhKgNg9gkQg+gkgog0Qgrg6gPhJQgPhIAOhRQAVh1g5hTQg6hSh1gVQhqgUhZA+QhZA+gTBrQgDAWgTAMQgSANgVgEQgVgEgNgSQgMgSADgVQANhIAng9QAog9A8gqQA9gqBHgQQBGgPBIANQCgAcBSB4QBSB2gdCfQgVB6A9BQQAdAlAsAZQAtAZA2AKQA0AJAygLQAzgLAqgeQArgeAcgrQAcgsAJgzQAEgVASgNQASgNAVAEQAWAEANASQAMASgEAVQgMBIgoA9QgnA9g9AqQhfBChxAAQgdAAglgGg");
	this.shape_2.setTransform(74.2,57.7,0.216,0.216);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63C41").s().p("AoWENQgOgJgFgOQg3h9Ayh+QAxiAB9g2QCFg7B5AvQB6AvA4CGQArBfBSAcQBOAaBcgnQBUgmAihVQAhhXglhUQgJgUAIgVQAIgUAUgJQAVgJATAIQAVAIAJAUQA3B9gxB+QgyB/h9A3Qg/Abg+AEQhAAFg4gTQg+gVgwguQgvgvgdhEQgqhchQgfQhQgfhdApQhVAlghBWQgiBWAlBVQAKAUgIAVQgIAUgVAJQgOAEgIAAQgQAAgNgJg");
	this.shape_3.setTransform(53.4,42.3,0.216,0.216);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63C41").s().p("AlNENQiGgahMhyQhMhyAaiEQAEgWASgMQASgMAWAEQAVAEANASQAMASgEAWQgSBbAzBMQA0BNBbASQBjATBIgwQBHgvAUhjQAdiQBphGQBrhHCQAdQCGAaBMByQBNBxgbCFQgEAVgSANQgSAMgWgEQgVgFgMgSQgMgRADgWQAShbgzhMQg0hNhbgSQhagShEAkQhSAsgWBtQgYB6hVBJQhVBIh1AAQgnAAgjgHg");
	this.shape_4.setTransform(84.4,44.3,0.216,0.216);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63C41").s().p("AAwEJQhkhkAAijQAAh2hHhHQhHhHh3AAQhsAAhNBMQhMBNAABrQAAAWgQAPQgPAQgWAAQgWAAgPgQQgQgPAAgWQAAiWBshsQBshsCXAAQCiAABnBnQBlBmAAChQAACDBUBEQBGA6BrAAQBsAABNhNQBMhMAAhrQAAgVAQgRQAQgPAVAAQAWAAAPAPQAQAQAAAWQAACXhsBsQhrBriYAAQilAAhlhkg");
	this.shape_5.setTransform(50.4,9.5,0.216,0.216);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63C41").s().p("Aj+BbQgRgPgBgWQgBgWAPgQQBlhvCXgIQCWgHBwBlQAQAOABAWQABAVgOARQgPAQgWABQgWABgQgPQhQhHhqAFQhrAFhHBPQgSATgWAAQgUAAgPgOg");
	this.shape_6.setTransform(89.2,20.8,0.216,0.216);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63C41").s().p("Ag1EEQgRgOgBgWQgCgWAOgRQAignAQgwQAPgxgFgzQgCg0gYguQgXgtgogiQgRgOgBgWQgCgWAOgRQAPgRAVgBQAWgCARAOQA3AvAgBBQAhBAAFBJQAGBIgWBEQgXBEgwA4QgPAUgXAAQgUAAgOgNg");
	this.shape_7.setTransform(84.8,17.1,0.216,0.216);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D63C41").s().p("Ah2CHQgWgDgNgSQgNgSAEgVQAPhkBTg9QBRg9BmAQQAWADANARQANASgEAWQgDAWgSANQgSANgVgEQg6gJguAjQgvAigJA6QgEAUgPANQgOAMgUAAIgIgBg");
	this.shape_8.setTransform(73.9,72.9,0.216,0.216);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D63C41").s().p("ABNChQgWgDgNgRQgOgRADgWQAEgcgIgbQgHgbgSgVQgjgug6gHQgWgDgOgRQgNgRADgWQADgWARgNQASgOAVADQAyAGApAYQAqAYAfAnQAfAnANAuQAMAvgGAxQgCAUgPANQgPANgUAAg");
	this.shape_9.setTransform(69.6,72.3,0.216,0.216);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D63C41").s().p("ABKB+QgPgNgDgUQgGg6gvgkQgugkg5AGQgWACgRgNQgRgOgDgWQgDgVAOgRQANgSAWgCQAxgHAvAOQAtANAoAfQAnAfAXArQAYApAGAxQACAWgNARQgNARgWADQgBABgEAAQgUAAgPgNg");
	this.shape_10.setTransform(47.4,30.6,0.216,0.216);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D63C41").s().p("AhTCjQgUAAgPgNQgPgNgCgTQgDgWANgSQANgRAWgDQA6gIAigvQAjgugIg6QgDgWANgSQANgRAWgDQAWgDARANQASANADAWQAOBlg9BRQg+BThkAOg");
	this.shape_11.setTransform(46.9,26.4,0.216,0.216);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D63C41").s().p("AA9D7QgUgIgJgUQgJgUAHgUQAmhkgshhQgrhihkgmQgUgIgJgUQgJgUAIgUQAHgVAUgJQAUgJAVAIQCLA1A+CKQA+CJg2CNQgEAPgOAJQgNAJgRAAQgIAAgLgCg");
	this.shape_12.setTransform(101.3,54.6,0.216,0.216);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D63C41").s().p("AjXCIQgVgIgJgTQgKgUAIgUQAHgVAUgJQAUgKAUAIQBmAjBfguQBhguAjhlQAIgVATgJQAUgKAUAIQAVAHAKAUQAJATgIAVQgYBFgwA1QgwA1hCAgQhPAkhNAAQg7AAg+gVg");
	this.shape_13.setTransform(103.4,48.4,0.216,0.216);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D63C41").s().p("AArEDQg8gngpg8Qgog7gQhIQgPhGANhHQANhHAog9QAMgSAWgEQAVgFARAMQASAMAFAWQAEAVgMASQg5BZAWBpQAVBpBZA6QASAMAFAVQAEAWgMASQgGALgLAHQgMAGgNAAQgQAAgNgJg");
	this.shape_14.setTransform(14.4,40.3,0.216,0.216);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D63C41").s().p("AjxB4QgTgMgFgVQgFgWAMgSQAmg9A6grQA6gqBIgRQBGgRBHALQBHALA/AnQASALAFAWQAFAVgLASQgLASgWAFQgVAFgTgLQgtgagygIQgygIgyAMQgzAMgpAdQgpAegbAsQgQAZgeAAQgOAAgNgHg");
	this.shape_15.setTransform(11.3,45.5,0.216,0.216);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D63C41").s().p("AgaDPQgSgNgEgWQgDgVANgSQArg7gKhLQgMhLg9grQgSgNgDgWQgEgVANgSQANgSAWgEQAVgDATANQAtAhAeAxQAdAxAJA5QAJA4gOA3QgNA3giAvQgIAJgLAGQgMAGgLAAQgSAAgMgKg");
	this.shape_16.setTransform(76.6,25.1,0.216,0.216);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D63C41").s().p("AgbDPQgSgNgDgWQgEgVANgSQArg7gKhLQgFgkgTgfQgSgegegVQgSgNgDgWQgEgVANgSQANgSAWgEQAVgDASANQAuAiAdAwQAeAxAIA5QAJA4gNA3QgOA3giAvQgRAVgZAAQgRAAgNgKg");
	this.shape_17.setTransform(106.8,37.8,0.216,0.216);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D63C41").s().p("ABbCPQhgAAhFhEQhEhEgBhgQAAgWAPgPQAPgQAWAAQAWAAAQAQQAPAPAAAWQABA2AlAkQAmAmA1gBQAWgBAQAQQAPAPAAAXQAAAWgPAPQgOAPgVAAIgDAAg");
	this.shape_18.setTransform(16.1,64.6,0.216,0.216);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D63C41").s().p("AjNDTQgQgQAAgWQgCijBzh0QByh1CjgBQAVgBAQAQQAQAPAAAXQAAAWgPAPQgPAQgXAAQh3ABhTBVQhUBVABB3QABAXgPAPQgQAQgWAAQgWAAgPgPg");
	this.shape_19.setTransform(14.8,25.4,0.216,0.216);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D63C41").s().p("AlKA8QgSgNgEgWQgDgVAMgRQANgSAWgEQAVgEASANQCBBYCagcQCagcBYiAQANgSAWgEQAVgEATANQASANAEAVQADAWgMASQhGBjhrA3QhpA1h1AAQiXAAh8hWg");
	this.shape_20.setTransform(63.7,34.4,0.216,0.216);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D63C41").s().p("AhZEBQgPgQABgWQABgWAQgPQBPhIAFhsQAEhrhIhQQgPgQABgWQABgWAQgPQAQgPAWACQAWABAOAPQBmBwgGCXQgGCXhvBnQgRAOgTAAQgXAAgQgRg");
	this.shape_21.setTransform(28.8,49.6,0.216,0.216);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D63C41").s().p("AgHCFQhtgFhjguQhiguhKhQQgPgQABgWQABgWAQgPQAQgPAXACQAVABAPAPQA8BCBOAkQBPAkBZADQBYAEBRgdQBSgeBBg8QARgPAVABQAWABAPAQQAPARgBAWQgBAVgQAPQhLBHhgAlQhfAmhnAAIgXgBg");
	this.shape_22.setTransform(28.8,43.1,0.216,0.216);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D63C41").s().p("AjLDHQgPgQAAgWQACieBxhtQBwhtCeACQAWAAAPAQQAPAPAAAXQAAAVgQAQQgRAQgVgBQhygChQBQQhSBOgBBxQgBAWgQAPQgPAQgWAAQgWAAgPgQg");
	this.shape_23.setTransform(29,32.9,0.216,0.216);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D63C41").s().p("AAQC9QhFgeg1g3Qg1g2gchGQgbhFAAhNQAAgVAQgQQAQgPAWAAQAWAAAPAQQAQAPgBAXQAAA3AUAzQAVAyAlAmQAlAoAyAVQAyAWA3AAQAWAAAPAQQAQAQgBAWQAAAWgQAPQgPAPgWAAQhMgBhFgdg");
	this.shape_24.setTransform(26.8,34.9,0.216,0.216);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D63C41").s().p("AhpDXQgOgJgGgPQgJgUAIgUQAIgVAUgJQAmgQAcgdQAcgdAOgnQAPglAAgpQgBgogRgmQgIgUAHgUQAIgVAUgJQAVgIAUAHQAUAIAJAUQAZA6ABA9QACA+gXA4QgWA6grAtQgrAsg4AZQgOAFgIAAQgPAAgNgIg");
	this.shape_25.setTransform(76.8,11,0.216,0.216);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D63C41").s().p("ACNB6QgOgJgFgOQgjhOhPgeQhPgfhMAjQgVAIgUgHQgUgIgJgUQgKgUAJgVQAHgUAVgJQB2g0B2AvQB5AuAzB1QAJAUgHAUQgIAVgVAJQgLAFgLAAQgPAAgNgJg");
	this.shape_26.setTransform(77.4,8.7,0.216,0.216);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D63C41").s().p("AjLDHQgPgQAAgWQACieBxhtQBwhtCeACQAWAAAPAPQAQAQgBAWQAAAWgQAQQgQAPgWAAQg3gBgzAUQgyAUgmAmQgoAmgVAyQgVAxgBA3QAAAWgQAPQgQAPgWAAQgWAAgPgPg");
	this.shape_27.setTransform(52,54.6,0.216,0.216);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D63C41").s().p("AhqBoQhuhwACieQAAgWAQgPQAQgPAWAAQAWAAAQAQQAPAQgBAWQgBByBPBQQBPBSByABQAVAAAQAQQAPAQAAAWQAAAWgQAPQgQAPgWAAQiegChthxg");
	this.shape_28.setTransform(49.8,56.6,0.216,0.216);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D63C41").s().p("AgEBtQhTAAhLgeQhNggg6g5QgQgPgBgWQABgWAPgQQAPgQAWAAQAWAAAPAPQAuAsA6AYQA6AWA+gBQBBgBA5gXQA5gZAtguQAPgQAWAAQAWAAAPAPQAQAPABAWQgBAWgPAQQg7A8hMAgQhNAihVABg");
	this.shape_29.setTransform(89.1,27,0.216,0.216);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D63C41").s().p("AFMDeQgQgPAAgXQAAiDhchbQhdhciDAAQiCgBhdBdQhcBcAACCQAAAXgQAPQgPAPgWAAQgVAAgQgPQgQgPAAgXQAAiuB8h7QB7h8CuAAQCvAAB7B8QB8B7AACuQAAAXgPAPQgPAPgXAAQgVAAgQgPg");
	this.shape_30.setTransform(87.6,32.2,0.216,0.216);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D63C41").s().p("AicDgQgVAAgQgPQgPgPgBgVQAAgWAOgQQAPgQAWgBQA3gCAxgXQAxgYAkgoQAmgnASgzQATgzgDg4QAAgWAOgQQAPgQAWgBQAWAAAQAOQARAPAAAWQAEBMgaBHQgZBGg0A4Qg0A5hCAfQhFAghMADg");
	this.shape_31.setTransform(53.8,73,0.216,0.216);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D63C41").s().p("ACeF8QhJAAhDgaQhCgbg1gyQg4g0gfhFQgfhEgChNQgFicBshzQBshzCcgFQAVgBARAPQAQAPABAWQAAAWgPAQQgPAQgVABQg3ACgxAWQgxAWgmApQgmApgTAyQgTAzACA2QABA3AXAyQAWAxApAmQAoAmAyATQAzATA3gCQAWAAAQAPQAQAPABAVQABAWgPAQQgQARgVAAg");
	this.shape_32.setTransform(60.8,69.7,0.216,0.216);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D63C41").s().p("ACrF3QgPgPABgXQABgWAPgPQBmhhAEiNQAEiMhhhmQhhhmiMgEQiNgDhmBgQgPAPgXAAQgWgBgPgQQgPgPABgXQABgWAPgPQCGh+C5AFQC3AFB/CFQB/CGgFC4QgFC4iGB/QgPAQgVAAQgWAAgQgRg");
	this.shape_33.setTransform(32.8,30.4,0.216,0.216);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D63C41").s().p("AEcFVQgTgLgFgVQgGgVALgTQAjg6AJhDQAJhDgRhCQgRhBgog1Qgpg2g6giQg6gjhDgJQhCgJhCARQhCARg1AoQg2AogjA7QgLATgVAFQgVAGgTgLQgTgMgFgVQgGgVALgTQAuhNBGg0QBGg1BXgXQBWgWBXAMQBXANBNAtQBNAuA1BGQA1BGAWBXQAXBWgNBXQgMBXguBNQgGALgMAHQgNAHgOAAQgNAAgOgIg");
	this.shape_34.setTransform(87.5,59.6,0.216,0.216);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D63C41").s().p("AjmCvQhnhOggh8QgGgVALgTQAMgSAUgFQAVgGATAMQATALAFAVQAOAzAgAqQAgAqAtAbQAvAcA0AHQA0AIAzgOQBsgbA4hgQA5hfgchrQgGgVALgTQAMgSAUgGQAVgFATALQAUALAFAVQAmCWhPCEQhPCGiWAmQgoAKgxAAQh+AAhlhNg");
	this.shape_35.setTransform(61.7,25.1,0.216,0.216);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D63C41").s().p("AjmCwQhmhOghh8QgGgVAMgTQALgTAVgFQAVgFATALQATALAFAVQAbBqBgA5QBfA4BrgcQBrgbA4hgQA5hfgchrQgFgVALgTQALgSAVgGQAVgFATALQATALAFAVQAmCWhPCEQhOCGiWAmQgrALgvAAQh+AAhlhNg");
	this.shape_36.setTransform(36.8,14.7,0.216,0.216);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DB5B58").s().p("AMcahQhQgrgyhMQg2BMhTArQhXAthjAAQhkAAhXgtQhUgrg0hMQg1BMhVArQhXAthkAAQhlAAhXgtQhVgrg2hMQg0BMhUArQhXAthiAAQh4AAhjhAQhgg/grhnQgyAtg+AYQg/AYhEAAQiYAAhrhrQhrhrgBiYQAAgQAFgjQgnAHghAAQiYAAhrhrQhshrABiYQAAh2BHhiQh3gghNhhQhNhjABh+QAAhwA9hcQA9haBjgqQgxgzgbhAQgchEAAhJQAAiYBrhrQBrhrCXAAIAkACQgNgzABgtQgBiYBshrQBrhrCYAAQBLAABEAeQAFiWBqhoQBrhoCVAAQB4AABhBIQAjhxBghIQBihIB5AAQBTAABLAjQBGAiA0A9QAuhaBWg2QBYg3BpAAQBoAABZA4QBXA3AuBcQAzg/BIgjQBLgkBVAAQB6AABiBIQBfBHAjByQBihIB3AAQCVAABrBpQBqBoAECVQBFgeBLAAQCXAABsBrQBrBrAACYQAAAtgNAzIAkgCQCXAABsBrQBrBrAACYQAABJgcBEQgbBAgzAzQBjAqA+BaQA9BcABBwQgBB+hNBjQhMBhh3AfQBIBggBB4QAACYhrBrQhrBriXAAQgoAAgggHQADAiAAARQAACYhrBrQhrBriXAAQhGAAg/gZQg+gYgygtQgpBohaA/QhfBBhyAAQheAAhRgtg");
	this.shape_37.setTransform(57,39.5,0.216,0.216);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D63C41").s().p("AMkcFQhPggg+g6QhBA6hTAgQhUAfhZAAQhbAAhUgfQhUghhAg6QhBA6hUAhQhUAfhbAAQhcAAhUgfQhUghhBg6QhBA6hTAhQhUAfhaAAQh1AAhmg0QhmgyhBhbQhkA3h0AAQiwAAiBh3QiBh3gPitQi2gGh/iDQh/iDAAi3QAAhbAjhSQhsg6hAhpQhAhrAAh+QAAhsAwhgQAwhdBVhAQhAhpAAh+QAAiqBwh/QBviACmgWIAAgOQAAi7CEiEQCEiEC7AAQAlAAAmAGQAniRB5heQB6hfCZAAQBfAABTAlQA8hnBng7QBog8B6AAQBHAABFAWQBDAWA6AqQA/hKBYgoQBagpBjAAQBjAABaApQBYApBABLQA6grBEgXQBFgWBJAAQB5AABoA8QBnA7A9BnQBWglBcAAQCZAAB6BgQB4BdAoCRQArgGAgAAQC7AACECEQCECEAAC7IAAAOQCmAWBvCAQBwB/AACqQAAB+hABpQBVBAAvBdQAwBgAABsQAAB9hABrQhABqhrA6QAjBUAABZQAAC3iACDQh/CDi1AGQgQCtiAB3QiCB3ivAAQh1AAhig3QhABbhhAyQhiA0hwAAQhWAAhQgfg");
	this.shape_38.setTransform(57,39.4,0.216,0.216);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole1, new cjs.Rectangle(0,0,114,78.9), null);


(lib.pg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("Ai0BqQgTgTACgWQAFg5AhgrQAggqA2gYQAigPAkgEQASgCAcAAIAYABIArALQAcAGAVAPQANAKAKARIAQAhIAAABQAAAOgCAHQgMAxgsAeQgrAegzgEIi6AYIgGABQgSAAgQgRg");
	this.shape.setTransform(0.2,-0.1,0.216,0.216,-75,0,0,0.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-4.4,5.1,8.9);


(lib.pd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("ACNB6Ii6gYQgzAEgrgeQgsgegMgxQgCgHAAgOIAAgBIAQghQAKgRANgKQAVgPAcgGIArgLIAYgBQAcAAASACQAkAEAiAPQA2AYAgAqQAhArAFA5QACAWgTATQgQARgSAAIgGgBg");
	this.shape.setTransform(0.1,-0.1,0.216,0.216,52,0,0,0.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-4.2,6,8.5);


(lib.mg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("AgRBIIAAgCQgCgCgBgDQAAgDACgEIgCgFQgMgTgGgNQgIgSAAgQQgBgRAFgQQAHgUANgEQARgGAIAUQAEAJAEAZQACAPAAAKIANgKQAFgDAGACQAGACACAFQAEAHgCAJQgDAIgGAHIgdAiQgBAEgCABIAAABIgGACIgFAAIgMAAg");
	this.shape.setTransform(11.1,-5.2,1,1,0,9,168,-1.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.2,-12.5,9.9,14.6);


(lib.md = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("AkZCwIgOgZQgIgPgCgLIACAAQABgMAMgPQAbiDARhEQALgsAYgeQAcgiAogHQAcgFAVAPQAXAQAAAdQAAAqgGAmQArgeA/gjQBlg1AwgLQBigVAZBQQAVBBg6BPQgtA9hDAsQg/AqhbAUQg+ANhqAHIgYAKQgHAPgOAIQgNAGgPgBIgEAAQgZgZgJgRg");
	this.shape.setTransform(1.5,2.7,0.216,0.216,-46,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,9.9,14.3);


(lib.jg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("AB8F2QgNgBgJgGIgLgLQgFgGABABIgIgNQgkh6g3iSQgfhQg2h2IhajEQgHgKABgHQACgNAQgKQAXgMAfAEQAUADAXAOIAiBGQCOEtBfE6QACAIAAAIQAAAFgCAGQgGAPgrACg");
	this.shape.setTransform(0.1,0.1,0.216,0.216,14,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-8.6,4.6,17.3);


(lib.jg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("Aj0FTQgKgHgDgFQgGgLAAgFQAGgXARgbIAhgwIB9i2IDtlaQAOgVAZgEQAVgEAUAMQAUALAHAUQAHAWgPAWIjuFaIhwClIgXAeQgUAagHAOQgUAOgbADIgQABQgQAAgTgDg");
	this.shape.setTransform(-0.1,0,0.216,0.216,-29,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-8.8,4,17.8);


(lib.jd2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("AiPF2QgrgCgGgPQgCgGAAgFQAAgIACgIQBfk6COktIAihGQAXgOAUgDQAfgEAXAMQARAKABANQABAFgDAGIgEAGIhaDEQg1B1ggBRQgzCGgoCGIgIANQACgBgFAGQgGAHgGAEQgJAGgNABg");
	this.shape.setTransform(0.2,0.1,0.216,0.216,-22,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-8.7,2.8,17.6);


(lib.jd1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("ADCFVQgbgDgUgOQgHgOgUgaIgXgeIlen/QgOgWAHgWQAGgUAUgLQAUgMAWAEQAYAEAOAVIDtFaIB9C2IAhAwQARAbAGAXQAAAFgGALQgDAEgEAEIgGAEQgTADgQAAIgQgBg");
	this.shape.setTransform(0.2,0.1,0.216,0.216,30,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-8.8,3.7,17.8);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("AlinPQgPgVAHgVQAFgTAUgLQAUgMAWADQAYAEAQAVQFJHGEbH8QAKAVgDARQgBAKgGAKIgJANQgUAYgrAIQkloYlanZg");
	this.shape.setTransform(0,0.2,0.216,0.216,18,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-13.2,8.6,26.4);


(lib.bd1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("AhKBvIgCgDQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgEACgEQA9hsBHhjQADgFAFAAQAFgBAEACQAFADABAEQABAFgVAcQgVAchiClQgJgCgFgFg");
	this.shape.setTransform(0.1,0.1,1,1,-21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-13.3,7.3,26.8);


(lib.corps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Symbole1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,57,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-39.4,114,78.9);


// stage content:
(lib.brainFirstIntro = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Calque 7
	this.instance = new lib.md("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(229.2,480.5,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:230.2,y:246.5},15).to({y:232.6},1).to({x:230.4,y:202.5},2).to({y:186.4},1).to({y:173.1},1).to({y:122.1},3).to({x:230.7,y:103.8},1).to({x:230.2,y:103.9},2).to({regX:0.1,regY:0.2,scaleX:1.63,scaleY:1.5,x:245.4,y:161.4},1).to({regX:0.2,regY:0.3,scaleX:1.6,scaleY:1.5,x:230.7,y:188.1},1).to({regY:0.2,rotation:27,x:255.5,y:252.1},1).to({regX:0.1,regY:-0.1,scaleX:1.55,rotation:0,skewX:180,x:251.2,y:347.1},1).to({regY:0.1,scaleX:1.53,scaleY:1.5,x:246.1,y:388.9},1).to({regX:0,regY:-0.1,scaleX:1.5,scaleY:1.5,x:223.9,y:440.5},1).to({regX:0.1,x:224.1,y:442.4},1,cjs.Ease.get(1)).to({regX:0,x:223.9,y:435.4},11).to({regX:-0.1},21).to({regX:0.1,x:223.6,y:436.4},49).to({startPosition:0},30).to({rotation:47,skewX:0,x:257,y:346.3},1).to({startPosition:0},19).wait(1));

	// Calque 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNA/IgmgCIAAgBIgCgCIAAgCIAAgCIgBgJQgCgPAFgMQAAgBABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIADgCQACgCgBgEQAAgDgCgCIgFgBIgEgBQgGgCgKgLIgagdIgFgFQBMAHBWgEQBKgDBjgNIgIAWIgGAMIgHALQgFALgGACIgHACQgDABgCADIACAHIADACIAEAEIAAAFQgCAMgFAJIgDAGIgFADIgCACQgiAIgwADIgxAAIg+AAgAg4ACQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABQAIACAMAAQArACArgHIACgBQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgDgBQgCAAgMABQgpAFgggDIgLAAIgIAAg");
	this.shape.setTransform(143.2,394.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993333").s().p("AhBBEIgLAAQgRgBgQABQgJAAgDgBIgEgHIAAgKQAAgHgDgMQgCgOgGgLIgSgdIgHgJIAAgCIgCAAIgBgCIgBgBQgBgEgCAAIAAgCIAAAAIgCAAIAAgCIgDgDIgCgCIAAgCIALACIABAAIAfABIAQABIAWAAIACABIAgAAIADABIAEgBIACAAIAEgBIAHAAIAMAAIAQgBIA0gDQBEgHBEgJIgFALIAAABIAAABIgLAaIAAACIgJAOIAAABQgDAFgCAHQgGAKgFAWIgHAOIgJAJIgCACQgFACgJABIgSAEIgKAAIgZACQgFABgCABIgvAAIgHABgAilgrIAaAdQAKALAGACIAEABIAFABQACACAAADQABAEgCACIgDACQAAABAAAAQAAABgBAAQAAABAAABQgBAAAAABQgFAMACAPIABAJIAAACIAAACIACACIAAABIAmACIBvAAQAwgDAigIIACgCIAFgDIADgGQAFgJACgMIAAgFIgEgEIgDgCIgCgHQACgDADgBIAHgCQAGgCAFgLIAHgLIAGgMIAIgWQhjANhKADQhWAEhMgHIAFAFgAgnAKQgMAAgIgCQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIATAAQAgADApgFQAMgBACAAIADABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAIgCABQghAFggAAIgVAAg");
	this.shape_1.setTransform(143.5,394.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhNA/IgmgCIgCgDIAAgCIAAgCIgBgJQgCgPAFgMQAAgBABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIADgCQACgCgBgEQAAgDgCgCIgFgBIgEgBQgGgCgKgLIgagdIgFgFQBMAHBWgEQBKgDBjgNIgOAiIgHALQgFALgGACQgKADgCADIACAHIADACIAEAEIAAAFQgCAMgFAJIgDAGIgFADIgCACQgiAIgwADIgxAAIg+AAgAg7AEQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABQAIACAMAAQArACArgHIAAgFQgCAAgMABQgpAFgzgDQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAg");
	this.shape_2.setTransform(143.2,394.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#993333").s().p("AhBBEIgLAAQgRgBgQABQgJAAgDgBIgEgHIAAgKQAAgHgDgMQgCgOgGgLIgSgdIgHgJIAAgCIgCAAIgBgCIgBgBQgBgEgCAAIAAgCIAAAAIgCAAIAAgCIgDgDIgCgCIAAgCIALACIABAAIAfABIAQABIAWAAIACABIAgAAIADABIAEgBIACAAIAEgBIAHAAIAMAAIAQgBIA0gDQBEgHBEgJIgFALIAAABIAAABIgLAaIAAACIgJAOIAAABQgDAFgCAHQgGAKgFAWIgHAOIgJAJIgCACQgFACgJABIgSAEIgKAAIgZACQgFABgCABIgvAAIgHABgAilgrIAaAdQAKALAGACIAEABIAFABQACACAAADQABAEgCACIgDACQAAABAAAAQAAABgBAAQAAABAAABQgBAAAAABQgFAMACAPIABAJIAAACIAAACIACADIAmACIBvAAQAwgDAigIIACgCIAFgDIADgGQAFgJACgMIAAgFIgEgEIgDgCIgCgHQACgDAKgDQAGgCAFgLIAHgLIAOgiQhjANhKADQhWAEhMgHIAFAFgAgnAKQgMAAgIgCQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAzADApgFQAMgBACAAIAAAFQghAFggAAIgVAAg");
	this.shape_3.setTransform(143.5,394.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},145).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Calque 3
	this.instance_1 = new lib.bd1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(226.9,516.8,1.5,2.802);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.5,x:227,y:214.1},19).to({x:227.2,y:149.5},4).to({regY:-34,x:227,y:78.8},1).to({startPosition:0},2,cjs.Ease.get(1)).to({regX:0.1,regY:-0.1,scaleX:1.5,scaleY:1.5,rotation:33,x:233.9,y:181.7},1,cjs.Ease.get(1)).to({scaleX:1.5,scaleY:1.5,rotation:0,x:227.4,y:214.8},1).to({regY:-0.4,rotation:120,x:238.6,y:323.9},2).to({scaleX:1.5,scaleY:1.5,rotation:124.4,x:232.9,y:363.6},1).to({regX:0,regY:0,scaleX:1.5,scaleY:1.5,rotation:166,x:222.8,y:411},1).to({y:402.7},12,cjs.Ease.get(1)).to({startPosition:0},70).to({startPosition:0},30).to({regX:0.1,regY:0.1,rotation:36,x:233.1,y:368.4},1).to({startPosition:0},19).wait(1));

	// Calque 4
	this.instance_2 = new lib.bg1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.8,517.4,1.5,2.937);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.5,x:55.4,y:134.4},24).to({startPosition:0},2,cjs.Ease.get(1)).to({regY:0.1,scaleX:1.5,scaleY:1.5,rotation:-20,x:52.1,y:180.9},1,cjs.Ease.get(1)).to({regX:0.1,scaleX:1.5,scaleY:1.5,rotation:0,x:56.9,y:214.9},1).to({regX:0,regY:0.2,scaleX:1.49,scaleY:1.49,rotation:-44,x:46.7,y:262.9},1).to({regX:-0.1,regY:0.1,scaleX:1.5,scaleY:1.5,rotation:-129,x:55.5,y:327.7},1).to({regX:-0.2,regY:-0.1,scaleX:1.5,scaleY:1.5,rotation:-150,x:56.9,y:409.8},2).to({x:60.3,y:402.6},12,cjs.Ease.get(1)).to({regX:-0.1,x:60.7,y:402.2},20).to({x:60.8,y:400.4},1).to({regY:0,rotation:-87.9,x:45.2,y:384.3},6).to({regY:0.1,rotation:-59,x:46.8,y:378},9).to({startPosition:0},34).to({regX:-0.2,regY:-0.1,rotation:-150,x:60.3,y:402.6},1).to({startPosition:0},1).to({startPosition:0},28).to({regX:0,regY:0,rotation:-20,x:54,y:364.7},1).to({startPosition:0},19).wait(1));

	// Calque 16
	this.instance_3 = new lib.pd("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(161.3,651.4,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:161.8,y:250.9},24).to({startPosition:0},2,cjs.Ease.get(1)).to({regY:0.1,scaleX:1.5,scaleY:1.5,rotation:-18.6,x:162.6,y:287},1,cjs.Ease.get(1)).to({regY:0.3,scaleX:1.5,scaleY:1.5,rotation:-61,x:164.3,y:476.2},5).to({startPosition:0},12,cjs.Ease.get(1)).to({startPosition:0},70).to({startPosition:0},30).to({startPosition:0},1).to({startPosition:0},19).wait(1));

	// Calque 17
	this.instance_4 = new lib.yeux("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(141,526,1.5,1.5,0,0,0,-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1.91,x:142.2,y:125.2},24).to({scaleY:1.5,y:134.7},2,cjs.Ease.get(1)).to({y:180.1},1,cjs.Ease.get(1)).to({y:333.1},4).to({regX:-0.1,regY:0.6,scaleY:0.25,x:140,y:372.7},1).to({regX:-0.2,regY:0.1,scaleY:1.72,x:142.2,y:368.9},3).to({scaleY:1.71,y:363.5},9).to({scaleY:1.75},10).to({regY:0.4,scaleY:0.25,y:363.4},3,cjs.Ease.get(1)).to({regY:0.1,scaleY:1.83,y:363.5},3).to({scaleY:1.85},5).to({scaleY:1.81},2).to({regX:-0.1,scaleY:1.84,x:142.3},3).to({scaleY:1.94,y:363.6},4,cjs.Ease.get(1)).to({scaleY:1.84,x:120.1,y:358.8},13,cjs.Ease.get(1)).to({regX:-0.2,scaleY:1.86,x:119.9},27).to({scaleY:1.85,x:138.6,y:365.1},1).to({scaleY:1.93},14).to({regY:0.4,scaleY:0.25,x:138.3,y:365.5},2).to({regY:0.1,scaleY:2.01,x:138.6,y:365.3},2).to({regX:-0.1,regY:0.2,scaleY:1.99,x:138.7},11).to({startPosition:0},1).to({startPosition:0},19).wait(1));

	// Calque 15
	this.instance_5 = new lib.jd2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(161,634.6,1.5,1.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:0,regY:0,x:160.8,y:234.1},24).to({startPosition:0},2).to({regX:0.1,regY:0.1,rotation:20,x:163.9,y:464},6).to({rotation:2,x:160.8,y:461.1},12,cjs.Ease.get(1)).to({startPosition:0},70).to({startPosition:0},30).to({startPosition:0},1).to({startPosition:0},19).wait(1));

	// Calque 14
	this.instance_6 = new lib.jd1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,610.9,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:160.2,y:210.8},24).to({startPosition:0},2).to({regX:-0.1,regY:0.1,rotation:-37,y:443.6},6).to({regY:0.8,rotation:-9,x:158.6,y:438.5},12,cjs.Ease.get(1)).to({startPosition:0},70).to({startPosition:0},30).to({startPosition:0},1).to({startPosition:0},19).wait(1));

	// Calque 13
	this.instance_7 = new lib.pg("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(127.5,651.3,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:129.2,y:251.2},24).to({startPosition:0},2).to({rotation:82,x:126.2,y:475.5},6).to({startPosition:0},12,cjs.Ease.get(1)).to({startPosition:0},70).to({startPosition:0},30).to({startPosition:0},1).to({startPosition:0},19).wait(1));

	// Calque 12
	this.instance_8 = new lib.jg2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(125.1,635.4,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:126.7,y:233.9},24).to({startPosition:0},2).to({regY:0.1,rotation:-24,x:123.6,y:464.5},6).to({regX:0.1,rotation:2,x:128.9,y:460.9},12,cjs.Ease.get(1)).to({startPosition:0},70).to({startPosition:0},30).to({startPosition:0},1).to({startPosition:0},19).wait(1));

	// Calque 11
	this.instance_9 = new lib.jg1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(124.4,611,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:126.2,y:209.9},24).to({startPosition:0},2).to({regX:0.1,regY:0.1,rotation:27,x:124.7,y:443.8},6).to({rotation:1,x:129.1,y:437.1},12,cjs.Ease.get(1)).to({startPosition:0},70).to({startPosition:0},30).to({startPosition:0},1).to({startPosition:0},19).wait(1));

	// Calque 2
	this.instance_10 = new lib.corps("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(141,545.7,1.5,1.5,0,0,0,-0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:141.4,y:144},24).to({startPosition:0},2).to({y:380},6).to({y:369.5},12,cjs.Ease.get(1)).to({startPosition:0},70).to({startPosition:0},30).to({startPosition:0},1).to({startPosition:0},19).wait(1));

	// Calque 6
	this.instance_11 = new lib.mg("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(52,480.3,1.698,1.205,0,0,180,10.1,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1.51,scaleY:1.49,x:49.7,y:124.6},23).to({regX:-0.2,regY:0,scaleX:1.5,scaleY:1.5,x:65.2,y:116.4},1).to({startPosition:0},1).to({x:64.7,y:114.7},1).to({regX:0,regY:0.1,scaleY:1.5,x:54.9,y:164.1},1).to({regX:-0.1,scaleY:1.5,x:65.7,y:194.7},1).to({regY:0.3,skewX:-34,skewY:136,x:41.5,y:243.1},1).to({regY:0,rotation:180,skewX:0,skewY:0,x:57,y:344.8},1).to({regX:0,regY:-0.1,scaleY:1.5,x:61.8,y:385.9},1).to({regX:-0.4,regY:-0.3,scaleY:1.5,rotation:0,skewX:174,skewY:-174,x:66.6,y:431.9},1).to({regX:-0.5,regY:-0.5,scaleX:1.7,scaleY:1.64,skewX:176,skewY:-164,x:68.4},1,cjs.Ease.get(1)).to({regX:-0.3,regY:-0.1,scaleX:1.5,scaleY:1.5,skewX:174,skewY:-171,x:69.5,y:425.1},11).to({skewX:180,skewY:-168,x:70,y:425.5},20).to({regX:-0.1,regY:-0.3,scaleY:1.5,skewX:174,x:70.1,y:425},1).to({scaleX:1.6,skewX:181,skewY:-155,x:63.6,y:424.7},1).to({regX:-0.2,regY:-0.4,skewX:194,skewY:-147,x:57.7,y:419.6},1).to({regY:-0.3,skewX:214,skewY:-131,x:48.1,y:419.3},1).to({regX:-0.3,regY:-0.2,scaleY:1.5,skewX:217.6,skewY:-129.3,x:38.1,y:407.8},2).to({scaleX:1.6,scaleY:1.49,skewX:219.4,skewY:-128.4,x:37.1,y:401.1},1).to({regX:0,regY:-0.1,scaleX:1.61,scaleY:1.5,skewX:225,skewY:-125.9,x:33.9,y:396.3},3).to({regX:-0.1,skewX:270,skewY:-81,x:26.4,y:387.5},6).to({startPosition:0},34).to({regX:-0.3,scaleX:1.5,scaleY:1.5,skewX:180,skewY:-168,x:69.5,y:425.5},1).to({x:69.6,y:425.7},29).to({regY:0.2,skewX:322,skewY:-237,x:53.1,y:338.5},1).to({startPosition:0},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(193.6,711.2,193.8,186.7);
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




})(libFirstIntro = libFirstIntro||{}, imagesFirstIntro = imagesFirstIntro||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var libFirstIntro, imagesFirstIntro, createjs, ss, AdobeAn;
