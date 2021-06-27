var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function brainCharacterAnimationResult() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("187389BB13CCDC4D9A4C9CFF59FC05E6");
	var libResult=comp.getLibrary();
	handleCompleteResult({},comp);
}
function handleCompleteResult(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var libResult=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new libResult.brainResult();
	stage = new libResult.Stage(canvas);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = libResult.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);
	AdobeAn.compositionLoaded(libResult.properties.id);
	fnStartAnimation();
}


(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



// stage content:
(lib.brainResult = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Yeux
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30343D").s().p("ADDBJIgCAAIgCAAIgDAAIgDAAIgDAAIgCAAIgDgBIgDAAIgDgBIgCgBIgDAAIgCgBIgCgCIgCgBIgCgBIgCgCIgCgBIgCgCIgCgCIgBgCIgCgCIgBgCIgBgCIgBgDIgBgCIgBgDIgBgDIgBgCIAAgDIgBgCIAAgDIAAgCIgBgDIAAgCIAAgDIAAgDIABgCIAAgDIAAgCIABgDIAAgCIABgDIAAgBIABgDIABgDIAAgCIABgDIABgDIABgCIABgDIABgCIABgDIABgCIABgCIABgDIACgCIABgCIABgCIACgDIABgCIACgCIACgCIACgBIACgCIACgCIACgCIACgCIADgCIACgBIACgCIACgCIADgBIACgBIACgCIADgBIACAAIADgBIACAAIADAAIACAAIADABIACgCIADgBIADgBIADAAIADgBIADAAIADAAIADAAIADAAIADABIADAAIADABIACAAIACABIADABIACACIACABIACABIACACIACABIABACIACACIACACIABACIACADIABACIABACIABADIABACIABADIABACIAAADIABACIAAADIAAACIAAADIAAACIAAADIAAACIgBADIAAACIgBADIAAADIgBACIAAADIgBABIgBADIgBACIgBADIAAACIgBADIgBACIgBADIgBACIgBACIgBADIgBACIgBACIgCADIgBACIgBACIgBADIgBACIgCACIgBACIgCACIgCACIgBACIgCACIgCACIgCABIgCACIgDACIgCABIgCABIgCACIgDABIgCACIgDABIgDABIgDABIgCAAIgDABIgDAAIgDAAIgCABIgDAAIgDAAgAjYBJIgDAAIgCAAIgDAAIgCAAIgDAAIgDAAIgDgBIgDAAIgCgBIgDgBIgCAAIgCgBIgDgCIgCgBIgCgBIgCgCIgCgBIgBgCIgCgCIgCgCIgBgCIgBgCIgCgCIgBgDIgBgCIgBgDIAAgDIgBgCIgBgDIAAgCIgBgDIAAgCIAAgDIAAgCIAAgDIAAgDIAAgCIABgDIAAgCIAAgDIABgCIAAgDIABgBIAAgDIABgDIABgCIABgDIABgDIABgCIABgDIABgCIABgDIABgCIABgCIABgDIABgCIACgCIABgCIABgDIACgCIACgCIABgCIACgBIACgCIACgCIACgCIADgCIACgCIACgBIADgCIACgCIACgBIADgBIACgCIACgBIADAAIACgBIADAAIACAAIADAAIACABIADgCIADgBIADgBIADAAIADgBIADAAIADAAIADAAIADAAIADABIADAAIADABIACAAIACABIACABIACACIACABIACABIACACIACABIACACIACACIABACIACACIABADIACACIABACIABADIABACIABADIAAACIABADIAAACIAAADIABACIAAADIAAACIgBADIAAACIAAADIgBACIAAADIgBADIAAACIgBADIgBABIAAADIgBACIgBADIgBACIgBADIgBACIgBADIgBACIgBACIgBADIgBACIgBACIgBADIgBACIgBACIgCADIgBACIgBACIgCACIgBACIgCACIgCACIgCACIgCACIgCABIgCACIgCACIgCABIgDABIgCACIgCABIgDACIgDABIgCABIgDABIgDAAIgDABIgCAAIgDAAIgDABIgDAAIgCAAg");
	this.shape.setTransform(150.425,367.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#30343D").s().p("AgfBHIgEAAIgFAAIgDAAIgFgBIgEgBIgDgCIgFgCIgDgBIgEgCIgDgCIgDgCIgEgDIgCgDIgDgCIgCgEIgDgDIgBgCIgCgDIgBgCIgCgDIAAgCIgBgEIgBgEIAAgEIAAgEIAAgEIABgEIABgDIABgEIACgCIABgEIACgDIACgDIACgEIADgCIACgDIACgDIADgDIADgCIACgCIAEgDIADgCIACgCIAEgCIAEgDIADgBIAFgCIADgCIAEgBIAEgDIAEgBIAEgCIAFgBIADgCIAFgCIAEgCIAEgBIADgBIAEgCIAEgBIAEgCIAEAAIAEgBIAEgBIAEAAIADABIAEAAIADACIADACIADACIACACIACACIAEABIAEABIADACIAEABIADABIAEABIADABIACADIADACIADABIACACIACADIADADIACADIACADIABADIABADIABAEIAAAEIABAFIgBAEIAAADIgBAFIgBACIgBAEIAAADIgCADIgBAEIgCADIgCACIgCAEIgCACIgCADIgDADIgDACIgCACIgEACIgDADIgCACIgEABIgDACIgDACIgEACIgDACIgEABIgEACIgDABIgEACIgDACIgEABIgEABIgFABIgDABIgFABIgEACIgDABIgFABIgDABIgEAAIgDABIgEAAIgEAAIgEAAIgDAAg");
	this.shape_1.setTransform(107.85,356.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},34).to({state:[{t:this.shape}]},20).to({state:[{t:this.shape}]},30).to({state:[{t:this.shape}]},10).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},34).wait(20).to({_off:false},0).wait(81));

	// Bras_gauche
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#30343D").s().p("AgeFWQgGgFgBgIQgCgQAHgQQAGgPANgKQAEgLALgEQgPkkAEkmQAAgQAQAAQASgBgBARQgDExAREwQAAAJgGAEQgEASgNAOQgNAOgRAGIgFABQgFAAgFgEg");
	this.shape_2.setTransform(70.3015,420.4743);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#30343D").s().p("AEKCKIgDAAIgEAAIgDAAIgDgBIgEAAIgDAAIgEAAIgDgBIgDAAIgEAAIgDgBIgDAAIgDAAIgDgBIgDAAIgDgBIgDAAIgCgBIgDgBIgDgBIgCAAIgCgBIgDgBIgDgBIgCgBIgDgBIgCgBIgCgCIgCgBIgDgCIgCgBIgCgCIgCgBIgCgCIgCgCIgBAAIgCgBIgDgBIgEgBIgDAAIgEgBIgEgBIgDgBIgEgBIgDAAIgEgBIgDgBIgDAAIgEgBIgDgBIgEgBIgEAAIgDgBIgEgBIgDAAIgDgBIgEgBIgDgBIgEAAIgDgBIgEgBIgEgBIgDAAIgEgBIgDgBIgDAAIgDgBIgEgBIgCgBIgEgBIgDAAIgDgBIgEgBIgDgBIgEgBIgDgBIgDgBIgEgBIgDgBIgDgBIgEgBIgDgBIgEgBIgDgBIgDgBIgDgCIgDgBIgEgBIgEgBIgDgBIgEgBIgDgCIgDgBIgEgBIgCgBIgEgCIgEgBIgCgBIgEgCIgDgBIgEgBIgEgBIgDgCIgEgBIgDgBIgDgCIgEgBIgDgBIgEgCIgDgBIgDgBIgEgBIgDgCIgEgBIgDgBIgDgBIgDgBIgEgBIgCgBIgDgBIgEgCIgDgBIgDgBIgDgBIgDgBIgEgCIgDgBIgCgBIgEgBIgDgBIgDgCIgDgBIgDgBIgDgBIgDgCIgEgBIgDgCIgDgBIgDgCIgDgBIgEgCIgDAAIgEgCIgDgBIgDgCIgEgBIgDgCIgDgBIgDgCIgDgBIgDgBIgEgCIgDgBIgEgCIgDgBIgDgBIgDgCIgEgBIgCgCIgEgBIgDgCIgDgBIgEgCIgCgBIgEgCIgDgBIgDgCIgDgBIgDgCIgDgBIgEgCIgDgBIgCgCIgEgBIgDgCIgCgCIgEgBIgDgCIgDgCIgDgBIgDgCIgCgCIgEgBIgDgCIgCgCIgDgCIgDgBIgCgCIgCgCIgDgCIgDgBIgCgCIgDgCIgDgDIgCgCIgDgCIgDgCIgCgCIgCgCIgDgDIgCgCIgBgCIgBgCIgBgCIgBgDIAAgCIgBgDIAAgCIABgCIAAgDIABgCIABgDIABgCIABgCIACgCIACgBIACgCIACgBIACgBIADgBIACAAIADgBIACAAIADABIACAAIACABIADABIACABIACACIACABIACACIACACIADACIABACIAEACIACACIADACIACACIAEACIACACIADACIADACIADACIADACIADABIADACIADACIADABIADACIADACIAEABIACACIADACIAEABIACACIAEABIADACIADACIADABIAEACIACABIAEACIADABIADACIAEABIADACIADABIAEACIADABIAEACIADABIADACIAEABIADACIADABIAEACIADABIAEACIADABIADACIAEABIADACIADABIAEACIADABIAEACIADABIADACIAEABIADACIADABIAEABIADABIADACIADABIADABIAEACIADABIADABIAEABIACABIADACIAEABIADABIADABIAEABIADABIADABIAEACIACABIAEABIADABIADABIAEACIADABIADABIAEAAIADACIADABIAEABIADABIADACIADABIADABIAEABIADACIADABIAEABIADABIAEACIADABIADABIADABIACABIAEABIAEABIADACIAEABIADABIADABIAEABIADABIADABIADABIADABIADABIAEABIADAAIADABIADABIADABIAEABIADABIADAAIADABIADABIADABIAEAAIADABIADABIAEABIADAAIAEABIADABIAEAAIAEABIADABIAEABIADAAIADABIAEABIADAAIAEABIAEABIADABIAEAAIADABIADABIAEABIADAAIAEABIADABIABgCIACgCIACgCIADgCIACgBIACgBIADgCIACgBIACgBIADgBIACgBIADgBIADgBIAEgBIACgBIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAAAIAAgBIABgBIAAAAIAAgBIAAAAIABgBIAAAAIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIAAAAIABgBIAAAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAAAIAAgBIAAgBIABgBIAAgCIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgEIABAAIAAgDIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAgBIAAAAIAAAAIACgCIAAAAIAAgBIABAAIAAAAIABgBIAAAAIABAAIAAgBIABAAIAAAAIABgBIAAAAIABAAIAAAAIAAgBIABAAIABAAIAAgBIACAAIAAAAIADAAIAAgBIAHAAIABABIACAAIAAAAIABAAIABABIAAAAIABAAIABABIAAAAIABAAIAAAAIABABIABAAIAAAAIABABIAAAAIAAAAIABABIAAAAIABAAIAAABIAAAAIACACIAAAAIAAAAIAAABIABABIAAAAIABAAIAAABIAAAAIAAABIABAAIAAABIABAAIAAABIAAAAIAAABIABABIAAABIAAAAIAAADIABAAIAAAEIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIgBABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBAAIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIgBABIAAABIAAABIgBAAIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIgBABIAAABIAAABIAAABIgBABIAAAAIAAABIAAABIAAAAIAAABIgBABIAAABIAAABIAAABIAAAAIgBABIAAABIAAABIAAAAIAAABIAAABIgBAAIAAABIAAABIAAAAIgBABIAAAAIAAABIAAAAIgBABIAAAAIAAABIAAAAIgBABIAAABIgBAAIAAABIAAABIAAAAIADAAIADAAIADAAIAEAAIADgBIAEAAIADAAIAEAAIAEAAIADAAIAEAAIADAAIADAAIAEAAIADAAIAEAAIAEAAIADAAIAEAAIADAAIADAAIAEAAIADAAIAEAAIADAAIACABIACAAIADABIACACIACABIACABIACACIACACIABACIABACIABADIAAACIABADIAAACIAAADIgBADIgBADIgBADIgBACIABAEIAAADIABAEIAAADIAAADIAAADIAAAEIgBADIAAADIgBADIgBACIgCADIgCADIgBADIgCACIgCADIgCADIgCABIgCACIgCACIgCABIgDACIgCABIgCABIgBABIgCABIgBAAIgCABIgCABIgCABIgDAAIgCABIgBAAIgDgBIgDAAIgDABIgDAAIgDAAIgDAAIgDAAIgEAAIgDABIgEAAIgEAAIgDAAIgEAAIgDAAIgFABIgDAAg");
	this.shape_3.setTransform(107.1,399.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},34).to({state:[{t:this.shape_2}]},20).to({state:[{t:this.shape_2}]},30).to({state:[{t:this.shape_3}]},10).wait(41));

	// Bras_droite
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#30343D").s().p("AgeFWQgGgFgBgIQgCgQAHgQQAGgPANgKQAEgLALgEQgPkkAEkmQAAgQAQAAQASgBgBARQgDExAREwQAAAJgGAEQgEASgNAOQgNAOgRAGIgFABQgFAAgFgEg");
	this.shape_4.setTransform(229.7485,420.4743,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#30343D").s().p("AhkEZIgCAAIgEgBIgCgBIgDgBIgDgBIgCgBIgDgBIgCgCIgDgBIgCgCIgBgCIgCgCIgDgCIgCgCIgBgCIgBgDIgCgBIgCgDIgBgDIgBgCIgCgCIAAgEIgBgCIgBgDIgBgEIAAgDIgBgDIAAgDIgBgDIAAgDIABgEIAAgCIABgDIAAgDIABgCIAAgDIABgDIABgDIAAgCIACgDIABgDIABgCIACgCIABgDIACgCIABgCIACgDIABgCIADgDIACgBIABgCIACgDIADgCIACgBIACgCIABgCIADgCIACgCIACgBIACgCIADgBIADgBIACgCIADgBIAEgCIADgBIADgBIADgBIACgBIACgBIADgBIABAAIABgCIABgCIABgDIACgDIABgDIADgCIACgEIABgCIACgDIACgEIACgCIACgDIACgEIACgDIACgCIACgEIACgDIABgCIACgEIADgDIABgCIACgEIACgDIABgDIADgDIABgDIACgDIABgDIACgDIACgDIACgEIABgCIACgDIABgEIACgCIACgDIACgEIABgDIABgDIACgEIACgCIABgEIACgDIAAgDIABgDIABgDIACgCIACgEIABgDIABgDIACgDIABgDIABgDIACgEIACgDIABgEIABgDIABgDIACgEIACgDIABgDIABgEIABgDIACgEIABgDIACgDIACgEIABgDIABgDIABgEIACgDIABgEIACgDIACgDIABgEIABgDIABgDIACgEIACgDIABgEIACgDIABgDIABgEIACgDIACgDIABgEIACgDIABgEIABgDIABgDIACgEIACgDIABgDIACgEIABgDIABgEIACgDIABgDIACgEIABgDIABgDIABgDIABgDIABgDIABgEIABgDIABgDIABgDIABgDIABgEIAAgDIABgCIABgEIABgDIABgDIABgDIABgDIABgDIABgEIAAgCIAAgCIABgEIABgCIAAgCIABgDIABgDIABgDIABgCIABgDIACgCIABgCIACgBIADgBIACgCIACgBIACgBIADAAIADgBIABAAIADABIADAAIACABIACABIACACIADABIACABIABACIACACIABADIABACIABADIAAADIABACIAAACIgBADIAAADIgCACIgBADIAAAEIgBADIgBADIgBAEIAAADIgBADIgBAEIAAACIgBAEIgCADIAAADIgBADIgBADIgBADIgBAEIgBACIgBAEIgBADIgBADIgBADIgBAEIAAAAIAAABIgBAAIAAAAIgBADIgBACIAAAEIgCACIgBAEIgCADIgBACIgBAEIgBADIgBADIgCADIgBADIgCADIgCAEIAAABIgBACIgBADIAAACIgBABIAAABIgFAKIgCADIgBAEIgBADIgCADIgCAEIgBADIgBAEIgCADIgBADIgBAEIgCADIgCADIgBAEIgCADIgBAEIgBADIgBADIgCAEIgCACIgBAEIgBADIgBADIgCADIgCAEIgBADIgBAEIgBADIgBADIgCADIgBADIgCADIgBAEIgCADIgBACIgBAEIgBADIgCADIgCAEIgBACIgBAEIgBADIgCADIgBAEIgCACIgCAEIgBADIgBADIgCADIgBAEIgDACIgBADIgCAEIgBADIgCADIgCADIgBADIgCADIgBADIgCADIgBADIgDADIgBADIgCADIgBADIgCADIgCADIgCADIgBACIgBADIgCAEIgCACIgCADIgCADIgBADIgCACIgDAEIgCACIgBADIgCADIgCADIgCACIgCAEIgBADIgCACIgBADIgCADIgCADIACABIACADIABADIABACIABADIABADIAAADIABAEIAAADIAAAEIgBAEIAAADIAAAEIgBADIAAACIgBAEIgBADIAAACIgBAEIgCADIgBACIgBAEIgBACIgBADIgCACIgBADIgCADIgCACIgCADIgBACIgCACIgDACIgCADIgCADIgCACIgDACIgCACIgCACIgDABIgCACIgCACIgDACIgDACIgDABIgCABIgDABIgDABIgDABIgDABIgDABIgDAAg");
	this.shape_5.setTransform(118.4,413.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},34).to({state:[{t:this.shape_4}]},20).to({state:[{t:this.shape_4}]},30).to({state:[{t:this.shape_4}]},10).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},34).wait(20).to({_off:false},0).wait(81));

	// Bouche
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DD3D59").s().p("AhaJmQiNgIiHgfQjhg0iwhtQh8hNh1huQhIhFg/hOQgmgugsg/Qh5ishRjEQFEiTEmgjQGegxEkC7QCGhICVgrQDkhCDsAJQEBAJDxBhQCaA9CEBbQiSFIkFDnQieCNjLBmQlNColXAAQglAAglgBg");
	this.shape_6.setTransform(148.5596,412.3663,0.1115,0.1115);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF5F0").s().p("AjZFsQnmg0m8jVQAvg6A2gyQEAj3GLhUQDMgsDeAHQDuAIDKA4QGFBsDcEGQAkApAfAxQoNDooqAAQiNAAiQgPg");
	this.shape_7.setTransform(148.3952,389.3961,0.1115,0.1115);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9F1D2E").s().p("AhXXWQkMgLj9hsQiNg9iFhbQnWlDi1p+QhhlWAGk8QBCiiBfiSQCLjUC/iiQCviWDChgQFdivF3AFQFfAEFIClQC3BdDlC3QDPCkCjDTQBzCWBZCpQAEEbhUEnQicImmVFOQiyCTi/BcQk5CVlJAAIg8gBg");
	this.shape_8.setTransform(148.7201,402.1208,0.1115,0.1115);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF5F0").s().p("AlXHDQjNgPjUguQh/gcjBg3Qimgvh2g0QhigrhZg4QjRiFiijGQAug2BghHIAtgeQA4giA1gTQBYghC6AKQCJAHEBAlIHBA/QEGAhCwAEQEYAFHbgwQG/gtCQgoQAwgNAmgEQBQgIBKAUQAtAMAzAbQCXBQChCDQkREtksCfQjNBtjTAnQhzAUjeAJQiUAFm+AGIhwABQiWAAhUgGg");
	this.shape_9.setTransform(148.8169,408.4538,0.071,0.071);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF5F0").s().p("AF8F4Ik8gEIo/gEQkRgCicgIQl0gTkihWQhegchHgfQhdgnhUg4QkJiripkvQF/BMGJAFQBuACBtgFQA+gCBygHQFDgUGzgeQEygTCXADQDDAEErAhQDIAWI+BJQB3AQCVALIAzAEQA8AEAuABQCeAHD7gWQCOgMB/gRQhpCBiFBmQhZBEhmA2QiIBIiyA6Qj+BSkdAeQi3ATl5AJIhcABIhBAAg");
	this.shape_10.setTransform(148.3554,401.7922,0.071,0.071);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9F1D2E").s().p("AAmNwQk0gFijgJQmQgWjJg0QpuiioWqpQknl4jVnIQIlCQIsAuQFhAdF6gbQD+gSBfgFQDlgKEDAEQF1AGH2A2QGeAsF9gOQIYgUIGhhQkkIolZF6QoLI/o+BbQjZAjmhAAQiIAAidgEg");
	this.shape_11.setTransform(148.6554,404.926,0.071,0.071);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},54).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},30).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},10).wait(41));

	// Jambe_droite
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#30343D").s().p("AhJD2QgQgDAEgQQAFgRAQACIAAgBQgIjiALjYQABgRARAAQARAAgBARQgKDTAHDRQAbgLAcADQAeADAXARQAKAHgCAKQgBALgLADQgvARg0AAQgXAAgZgDg");
	this.shape_12.setTransform(156.812,455.0704);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#30343D").s().p("AAADQIgDAAIgEAAIgDAAIgEAAIgDAAIgDAAIgEAAIgDAAIgDAAIgEAAIgDAAIgDAAIgDgBIgDAAIgDAAIgDgBIgDAAIgDgBIgCgBIgDgBIgCgBIgBgBIgDgCIgBgBIgDgCIgBgBIgCgDIgBgCIgBgCIgBgCIgBgCIgBgEIAAgDIAAgDIAAgCIABgDIAAgDIABgCIABgCIACgDIABgCIABgCIACgCIACgCIACgCIACgCIACgBIADgCIACgBIADgBIADgCIADgBIADgBIACgBIADAAIADgBIADgBIADgBIADAAIADAAIADgBIADAAIADAAIADAAIADgBIADAAIAEAAIADgBIADAAIADgBIADAAIAEAAIADAAIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgCIAAgEIAAgDIAAgEIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgBIAAgDIAAAAIAEAAIAYgFQAAgBABAAQAAAAABgBQAAAAABAAQAAgBABAAIAFgCIACAAIABgBIABABIABACIAAACIAAADIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAACIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAADIADACIADABIACABIADACIACABIACACIACACIACACIABACIACACIABADIABACIABACIABADIAAADIAAACIAAADIAAACIAAADIgBADIgBADIgBACIgBADIgBACIgBADIgCABIgCACIgCACIgBACIgDACIgCABIgCACIgDABIgCACIgDABIgDAAIgCABIgDAAIgDABIgDAAIgDAAIgEAAIgDAAIgDAAIgDAAIgEAAIgCAAIgDAAIgCAAIgEAAIgDAAIgEABIgCAAg");
	this.shape_13.setTransform(141.575,453.4625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},34).to({state:[{t:this.shape_12}]},20).to({state:[{t:this.shape_12}]},30).to({state:[{t:this.shape_12}]},10).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},34).wait(20).to({_off:false},0).wait(81));

	// Jambe_gauche
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#30343D").s().p("AhGDxQgFgBgEgGQgEgFAAgFIABgeQAAgGADgFQAEgFAFgBQA+gMA4AUIgUmcQAAgRARAAQASAAAAARIAVGsQAAAHgEAFIgEAHQgBALgLADQgoALgpAAQgaAAgbgEg");
	this.shape_14.setTransform(135.775,455.3492);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#30343D").s().p("AgBETIgDAAIgFAAIgEAAIgFAAIgEAAIgFAAIgEAAIgEAAIgFAAIgEAAIgEAAIgEAAIgFAAIgDAAIgFgBIgDgBIgFAAIgDgBIgDgCIgDgBIgDgBIgCgCIgDgCIgCgCIgDgCIgBgBIgDgEIgCgDIgCgCIgBgDIAAgDIgBgEIgBgFIAAgDIABgEIAAgDIABgDIABgEIABgDIACgDIABgDIADgDIACgCIACgDIADgCIADgCIACgCIAEgDIADgBIADgCIAEgBIAEgCIAEgBIAEgCIADgBIAEgBIADgBIAFgBIADAAIAEAAIAFAAIADgBIAFAAIADAAIAFgBIADAAIAFgBIAEAAIAEgBIAEgBIAFAAIAEAAIAFAAIAAgEIAAgFIAAgEIAAgFIAAgEIAAgGIAAgEIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgEIAAgFIAAgFIAAgFIAAgDIAAgFIAAgEIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgGIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgEIAAgFIAAgFIAAgEIAAgFIAAgEIAAgFIAAgCIAAgCIAAgFIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIAAgBIAAAAIAAAAIAAgBIABAAIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIAAgBIACgBIABAAIAAgBIAAAAIAAAAIABAAIAAgBIABAAIAAAAIAAAAIABAAIAAAAIABgBIAAAAIABAAIAAAAIABgBIABAAIABAAIABAAIAAgBIACAAIABAAIAEAAIABgBIADAAIABABIADAAIAAAAIADAAIAAABIACAAIAAAAIAAAAIABABIAAAAIABAAIAAAAIAAABIABAAIAAAAIABAAIAAAAIABABIABAAIAAAAIAAAAIABABIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAABIABAAIAAABIAAABIAAAAIABAAIAAABIAAAAIAAAAIABABIAAAAIAAAAIAAABIABAAIAAABIAAAAIABAAIAAABIABABIAAAAIAAABIAAABIABAAIAAABIAAABIAAABIABABIAAACIAAABIAAAEIABABIAAAHIgBAAIAAADIAAAAIAAADIgBAAIAAACIAAAAIAAABIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAFIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAEIAAAFIAAADIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAAIADABIADABIAEACIADADIAEACIACACIACACIACADIADADIACACIABAEIABACIABADIABAEIABADIAAAEIAAADIAAADIgBAEIAAAEIgBADIgBAEIgCADIgBADIgCAEIgDABIgCADIgCADIgDACIgCACIgDACIgDACIgDADIgDABIgFABIgDABIgDABIgFAAIgDABIgEABIgDAAIgFAAIgEAAIgFAAIgEAAIgEAAIgEAAIgDAAIgEAAIgEAAIgFAAIgEAAIgEAAg");
	this.shape_15.setTransform(120.15,452.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},34).to({state:[{t:this.shape_14}]},20).to({state:[{t:this.shape_14}]},30).to({state:[{t:this.shape_14}]},10).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},34).wait(20).to({_off:false},0).wait(81));

	// Corps
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D63C41").s().p("AA/BuQgpgHgWgeQgXgfAIgsQAGghgRgUQgPgSgbgEQgbgGgWAQQgXAQgEAbQgBAGgGAEQgFAEgHgBQgGgCgEgFQgEgFABgHQAHgoAigXQAhgXAoAHQArAIAVAfQAWAfgIApQgGAfAQAVQAOATAdAGQAbAEAWgPQAXgQAEgaQABgHAGgEQAFgDAHABQAHABADAFQAEAGgBAGQgHAkgbAWQgbAXgjAAg");
	this.shape_16.setTransform(102.6843,406.6683);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D63C41").s().p("AA/BuQgrgIgVgfQgWgfAIgpQAFgegOgVQgPgUgdgGQgbgFgWAQQgWAQgFAaQgBAHgGAEQgGADgGgBQgHgBgDgFQgEgGABgGQAIgpAggXQAigXAoAIQAqAHAVAgQAWAggHApQgGAhARAUQAPASAbAEQAaAFAXgPQAWgQAFgbQABgGAGgEQAFgEAHABQAHACADAFQAEAGgBAGQgHAjgbAXQgbAXgjAAg");
	this.shape_17.setTransform(126.9511,411.3078);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D63C41").s().p("ABKB+QgvgIgZghQgaglAJgxQAGgkgRgZQgSgZgjgGQgggGgcATQgbASgGAhQgBAGgFAEQgGAEgGgBQgHgBgEgGQgEgGACgGQAHgtAngbQAmgbAtAJQAxAIAZAlQAYAkgIAwQgHAkATAZQASAYAiAGQAgAFAbgSQAcgTAFggQABgHAGgEQAGgEAGACQAHABAEAFQADAGgBAGQgIAugmAaQgdAUgjAAQgLAAgJgCg");
	this.shape_18.setTransform(174.4657,404.2718);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D63C41").s().p("AinBLQgSgmAPglQAQgnAmgRQAogSAmAOQAkAPARAoQAOAdAYAIQAXAIAcgMQAagLALgaQAKgagMgaQgDgGADgGQADgGAGgDQAGgDAFADQAHACACAGQARAmgPAmQgPAngmARQgmARglgMQglgNgSgrQgNgbgYgKQgZgJgcAMQgaAMgKAZQgKAaALAaQADAGgDAGQgCAHgHACQgCACgEAAQgLAAgDgKg");
	this.shape_19.setTransform(145,382.4875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D63C41").s().p("AhlBRQgogIgYgiQgXgjAIgnQABgHAFgEQAGgDAHABQAHABADAGQAEAFgCAHQgFAcAQAWQAQAYAcAFQAeAGAWgPQAVgOAGgeQAIgsAggVQAggVAtAIQAoAIAXAjQAYAigIAoQgBAHgGADQgFAEgHgBQgGgBgFgGQgDgFABgHQAFgcgPgWQgQgYgcgFQgbgFgUALQgaANgGAgQgIAmgYAWQgbAWgjAAQgKAAgNgDg");
	this.shape_20.setTransform(188.85,385.3046);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D63C41").s().p("AAPBQQgegeAAgyQAAgigVgWQgWgWglAAQggAAgXAXQgYAYAAAfQAAAHgFAFQgFAFgGAAQgGAAgGgFQgEgEAAgIQAAgtAgggQAighAtAAQAyAAAfAfQAeAfAAAwQAAApAZAUQAWASAhAAQAgAAAYgXQAYgYgBggQABgGAEgFQAFgFAGAAQAHAAAFAFQAEAFABAGQgBAuggAgQghAhguAAQgyAAgfgfg");
	this.shape_21.setTransform(140.8,336.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D63C41").s().p("AhNAcQgFgFAAgHQgBgGAFgFQAfghAugDQAtgCAiAfQAFADAAAHQABAHgFAFQgEAFgHAAQgGAAgGgEQgYgVggABQggABgWAYQgFAGgHAAQgGAAgFgEg");
	this.shape_22.setTransform(195.55,352.1189);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D63C41").s().p("AgQBPQgFgEAAgHQgBgGAEgFQAVgZgDggQgBgggZgVQgFgFgBgGQAAgHAEgFQAEgFAHgBQAHAAAFAEQAhAdAEAvQAEAtgeAjQgFAFgGAAQgHAAgEgEg");
	this.shape_23.setTransform(189.4707,346.9975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D63C41").s().p("AgjApQgHgBgDgFQgFgGACgGQAEgeAZgTQAYgSAfAEQAHABADAGQAEAFAAAHQgBAGgFAEQgGAEgGgBQgSgCgOAKQgOAKgDARQgBAGgEAEQgFAEgGAAg");
	this.shape_24.setTransform(173.95,425.706);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D63C41").s().p("AAXAxQgHgBgEgFQgEgFABgHQADgRgMgOQgKgOgRgCQgHgBgEgFQgEgFABgHQABgGAFgFQAFgEAHABQAdAEAUAYQATAYgEAfQAAAGgFAEQgFAEgGAAg");
	this.shape_25.setTransform(168.0563,424.9222);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D63C41").s().p("AAWAmQgEgEgBgGQgCgRgOgLQgNgLgSACQgHABgFgEQgFgFgBgGQAAgHAEgFQAEgFAGgBQAggDAXATQAZATADAeQABAHgEAFQgEAFgHABIgCAAQgGAAgFgEg");
	this.shape_26.setTransform(136.5822,366.0546);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D63C41").s().p("AgjAuQgEgEgBgGQgBgHAEgFQAEgGAHgBQARgCAKgOQALgOgDgRQgBgHAEgFQAEgGAHgBQAHAAAFAEQAFAEABAGQAEAfgSAYQgTAZgeAEIgCABQgGAAgFgEg");
	this.shape_27.setTransform(135.8412,360.1222);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D63C41").s().p("AATBMQgHgCgCgGQgDgGACgHQAMgegNgdQgNgegegLQgHgCgCgHQgDgGACgGQADgGAGgDQAGgDAGADQAqAQATAqQATApgRArQgDAKgMAAg");
	this.shape_28.setTransform(212.7266,399.8625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D63C41").s().p("AhBApQgGgCgDgGQgDgGACgGQADgHAFgDQAGgCAHACQAfALAcgOQAdgNALgfQADgHAFgDQAGgCAHACQAGACADAGQADAGgCAGQgQArgpAUQgXALgYAAQgTAAgSgHg");
	this.shape_29.setTransform(215.7206,391.1056);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D63C41").s().p("AANBPQgmgZgJgtQgKgsAZgnQAEgFAHgCQAGgBAFAEQAFAEACAGQABAHgEAFQgQAbAGAfQAGAgAbASQAGAEABAGQACAHgEAFQgFAIgJAAQgEAAgEgDg");
	this.shape_30.setTransform(90.1147,379.6639);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D63C41").s().p("AhJAkQgFgDgCgHQgCgGAEgGQAXgmAugLQAsgKAmAYQAGADACAHQACAGgEAFQgDAGgHABQgGACgHgEQgbgQgfAIQgfAGgSAcQgEAIgJAAQgFAAgEgDg");
	this.shape_31.setTransform(85.75,387.0758);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D63C41").s().p("AgIA/QgFgEgBgHQgBgGAEgGQANgSgDgWQgDgWgTgOQgFgEgBgGQgBgHADgFQAEgGAHgBQAHgBAFAEQAcAVAGAkQAFAkgVAcQgFAHgIAAQgDAAgGgDg");
	this.shape_32.setTransform(177.8449,358.24);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D63C41").s().p("AgIA/QgFgEgBgHQgBgGAEgGQANgSgDgWQgDgWgTgOQgFgEgBgGQgBgHADgFQAEgGAHgBQAHgBAFAEQAcAVAGAkQAFAjgVAdQgFAHgIAAQgEAAgFgDg");
	this.shape_33.setTransform(220.446,376.215);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D63C41").s().p("AAcAsQgdgBgVgUQgVgVAAgcQAAgHAFgEQAFgGAGAAQAHABAFAEQAEAFAAAHQAAAPALALQAMALAQAAQAGAAAFAFQAFAEAAAIQAAAGgEAFQgFAFgHAAg");
	this.shape_34.setTransform(92.4977,414.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D63C41").s().p("Ag+BAQgEgEgBgIQAAgxAjgiQAigkAyAAQAGAAAFAEQAFAFAAAHQAAAGgFAFQgFAFgGAAQglAAgYAaQgaAZABAkQAAAIgFAEQgEAEgHABQgHgBgFgEg");
	this.shape_35.setTransform(90.5746,358.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D63C41").s().p("AhjASQgGgEgBgGQgBgHAEgEQAEgGAGgBQAHgBAFAEQAnAaAugJQAvgIAbgnQAEgFAHgBQAGgBAGADQAFAEABAHQACAGgEAGQgVAdghARQggAQgjAAQgtAAgmgag");
	this.shape_36.setTransform(159.6855,371.4639);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D63C41").s().p("AgaBOQgFgFABgGQAAgHAFgEQAYgXABggQABgggVgZQgFgFABgGQAAgGAFgFQAFgFAGAAQAHABADAFQAfAigCAtQgBAughAgQgEAEgHgBQgHABgFgGg");
	this.shape_37.setTransform(110.2786,392.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D63C41").s().p("AgCApQhFgEgugxQgFgGABgGQAAgHAFgEQAFgFAGABQAHAAAEAFQAnAoA3ACQA2ACApgkQAFgFAHABQAGAAAFAFQAFAFgBAGQAAAHgFAFQgwArhAAAg");
	this.shape_38.setTransform(110.3748,383.65);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D63C41").s().p("Ag9A9QgFgFAAgHQABgwAighQAighAwABQAHAAAEAFQAFAFAAAGQgBAHgEAFQgFAEgHAAQgiAAgYAYQgZAXAAAjQgBAHgEAEQgFAFgHAAQgGAAgFgFg");
	this.shape_39.setTransform(110.575,369.2496);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D63C41").s().p("AAxBDQgwgBghgiQgggiAAgwQAAgHAEgEQAFgFAHAAQAGAAAGAFQAEAFAAAHQgBAiAZAYQAXAZAiAAQAHAAAFAFQAEAFAAAHQAAAGgEAFQgFAFgHAAg");
	this.shape_40.setTransform(107.6,372.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D63C41").s().p("AglA6QgDgGACgGQADgGAGgDQAYgLAIgYQAJgYgKgWQgCgGACgGQACgHAGgDQAGgCAGACQAHADACAGQAQAkgOAjQgOAkgjARIgHABQgKAAgEgKg");
	this.shape_41.setTransform(178.1129,338.4125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D63C41").s().p("AAlAeQgLgYgYgIQgXgJgXAKQgHACgGgCQgGgCgDgGQgCgGACgGQACgHAHgDQAjgPAkAOQAkAOAQAjQADAGgCAGQgDAHgGACIgGACQgKAAgFgKg");
	this.shape_42.setTransform(178.9569,335.0678);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D63C41").s().p("AgyBBQgGAAgFgFQgFgEAAgHQABgwAiggQAigiAwABQAGAAAFAFQAFAFgBAGQAAAHgEAEQgFAFgHAAQgiAAgYAYQgZAXAAAiQgBAHgEAFQgEAEgIAAg");
	this.shape_43.setTransform(143.05,399.8246);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D63C41").s().p("AgfAgQgigiABgwQAAgGAFgFQAEgFAHAAQAHABAEAEQAFAFAAAHQgBAiAZAYQAXAZAjABQAGAAAFAFQAFAEgBAHQAAAHgEAEQgFAFgHAAQgwgBgggig");
	this.shape_44.setTransform(140.0769,402.675);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D63C41").s().p("AAAAhQg0AAgmgjQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAEQAdAcAmgBQApgBAbgbQAFgFAHAAQAGAAAFAEQAFAFAAAHQAAAGgFAFQglAlg1ABg");
	this.shape_45.setTransform(195.475,361.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D63C41").s().p("ABlBEQgFgFABgHQgBgngcgcQgcgcgoAAQgmAAgdAcQgdAcAAAnQABAHgFAFQgFAEgGAAQgHAAgFgEQgFgFABgHQAAg1AlglQAmglA0AAQA1AAAmAlQAlAlAAA1QABAHgFAFQgFAEgGAAQgHAAgFgEg");
	this.shape_46.setTransform(193.3,368.275);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D63C41").s().p("AgvBEQgGAAgFgEQgEgEgBgHQAAgGAEgFQAFgFAHgBQAjgBAWgaQAXgZgBgiQgBgHAFgFQAEgFAHAAQAGAAAFAEQAFAFABAGQACAxghAiQggAkgvABg");
	this.shape_47.setTransform(145.6813,425.8975);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D63C41").s().p("AAxB0QguAAghggQgjgggBgxQgCguAhgjQAhgkAvgBQAHAAAFAEQAEAGABAGQAAAGgFAGQgEAEgHAAQgiABgXAaQgYAZABAhQABAkAZAXQAZAYAigCQAHABAFAEQAFAFAAAHQAAAGgEAFQgFAEgHABg");
	this.shape_48.setTransform(155.5492,421.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D63C41").s().p("AAzByQgEgFAAgGQAAgHAGgFQAegdABgrQACgqgegfQgdgfgqgBQgrgBgfAdQgFAFgHgBQgGAAgFgFQgFgFABgGQAAgHAFgEQAognA5ACQA3ABAnApQAmApgBA3QgCA4gpAnQgEAEgHAAQgHAAgFgFg");
	this.shape_49.setTransform(116.0503,365.8222);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D63C41").s().p("ABXBpQgGgEgBgGQgCgHADgFQAWgmgLgpQgLgogkgWQgmgWgoALQgqALgVAkQgEAGgGACQgHABgFgDQgGgEgCgGQgCgGAEgGQAdgxA2gOQA1gOAxAdQAwAcAOA3QAOA2gcAwQgFAIgJAAQgFAAgDgCg");
	this.shape_50.setTransform(193.2942,406.8944);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D63C41").s().p("AhGA2QgfgYgKglQgCgHAEgFQADgGAHgCQAGgCAGAEQAGADABAHQAJAgAdARQAdARAggJQAggIARgdQASgcgJghQgBgGADgGQADgGAHgCQAGgBAGADQAGADACAHQALAtgYAoQgYApgtAMQgOADgOAAQgmAAgfgXg");
	this.shape_51.setTransform(156.8249,358.2275);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D63C41").s().p("AhGA2QgfgYgKglQgBgGADgGQADgGAHgCQAGgBAGADQAGADACAHQAIAgAdARQAdARAggIQAggJASgdQARgcgJghQgBgGADgGQAEgGAGgBQAHgCAFADQAGAEACAGQALAugYAnQgYApgtAMQgOADgNAAQgnAAgfgXg");
	this.shape_52.setTransform(121.6888,343.5886);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DB5B58").s().p("ADyIFQgYgNgQgXQgQAXgZANQgbAOgeAAQgeAAgagOQgagNgQgXQgQAXgZANQgbAOgeAAQgfAAgagOQgagNgRgXQgQAXgZANQgbAOgeAAQgkAAgegUQgdgTgOgfQgfAcgrAAQguAAghghQggghAAguIABgPQgKACgMAAQguAAghghQghghAAguQAAgjAWgeQgkgKgXgdQgYgeAAgnQAAgiATgcQATgaAegNQgggiAAgsQAAgvAgggQAhghAuAAIALABQgEgPAAgPQAAguAhghQAhggAuAAQAYAAAUAJQABguAggfQAhggAtAAQAlAAAdAWQALgjAdgWQAegWAlAAQAZAAAWALQAWAKAQATQAOgcAagQQAbgRAgAAQAfAAAbASQAbAQAOAcQAPgTAXgLQAWgLAaAAQAlAAAeAWQAdAWAKAjQAdgWAlAAQAuAAAgAgQAhAfABAuQAUgJAYAAQAuAAAhAgQAgAhAAAuQAAAPgEAPIALgBQAuAAAhAhQAhAgAAAvQAAAtggAhQAeANATAaQATAcAAAiQAAAmgYAfQgXAdgkAKQAVAdAAAkQAAAuggAhQghAhguAAQgNAAgJgCQABAHAAAIQAAAuggAhQghAhguAAQgrAAgggdQgMAggcATQgdAUgjAAQgcAAgZgOg");
	this.shape_53.setTransform(150.175,378.525);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D63C41").s().p("ADKIHQgpAlg5AAQg4AAgqglQgoAlg6AAQg5AAgqglQgpAlg6AAQgjABgfgRQgfgPgUgbQgfARgiAAQg2gBgngjQgoglgEg0Qg3gDgognQgmgoAAg4QAAgcAKgYQghgTgTggQgUggAAgmQAAghAQgdQAOgcAagTQgUggAAgnQAAg0AigmQAignAzgHIAAgEQAAg4AogpQAogpA5AAIAXACQAMgsAlgdQAlgdAvAAQAbAAAbAMQASgfAfgSQAggSAlAAQAtAAAjAaQAUgXAbgMQAbgMAeAAQAeAAAbAMQAcANASAWQAlgbAtABQAlAAAgASQAgASARAfQAagMAcAAQAwAAAlAdQAkAdAMAsIAXgCQA4AAApApQApApAAA4IAAAEQAyAHAhAnQAjAnAAAzQAAAmgTAhQAaATAOAcQAOAdABAhQAAAmgUAgQgTAhghASQAKAaAAAaQABA4gnAoQgnAng4ADQgEA0gnAlQgnAjg2ABQgjAAgfgRQgTAbgdAPQgeARgjgBQg1AAgoglg");
	this.shape_54.setTransform(150.15,378.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},54).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},30).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},10).wait(41));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(216.5,562.9,17.099999999999994,-82.59999999999997);
// library properties:
lib.properties = {
	id: '187389BB13CCDC4D9A4C9CFF59FC05E6',
	width: 300,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['187389BB13CCDC4D9A4C9CFF59FC05E6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
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
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
