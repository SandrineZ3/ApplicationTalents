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
	AdobeAn.makeResponsiveResult(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);
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
		this.shape.setTransform(115.425,47.375);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#30343D").s().p("AgfBHIgFAAIgDAAIgFgBIgDgBIgFgBIgDgBIgFgBIgDgCIgEgCIgDgDIgDgCIgEgCIgCgDIgDgDIgCgCIgDgEIgCgCIgBgCIgBgDIgBgDIgBgCIgBgEIgBgEIAAgEIAAgEIAAgEIABgEIABgEIABgDIACgDIABgDIACgEIACgDIACgCIACgEIADgDIADgCIACgCIADgDIACgDIAEgCIACgCIADgCIAEgDIAEgBIAEgCIADgCIAEgCIAEgBIAEgCIAEgCIAEgCIAFgCIADgBIAFgCIAEgBIAFgDIACgBIAEgBIAEgCIAEAAIAEgBIAEgBIAEAAIAEAAIAEAAIADABIADABIADABIADACIACADIACADIAEAAIADABIAFABIADABIADACIAEABIACACIADACIADABIADACIACADIADACIACADIACADIABADIACADIACAEIAAADIABAFIAAADIAAAEIgBAFIAAADIgCAEIgBADIgBADIgBAEIgBACIgCAEIgCADIgCACIgCAEIgCACIgDACIgDADIgCADIgDACIgEABIgCACIgEADIgDACIgDABIgEACIgEACIgDACIgEABIgDACIgEABIgDABIgEABIgEACIgEACIgFABIgEABIgEABIgDABIgFABIgDAAIgDABIgFAAIgDABIgEAAIgEABIgDgBg");
		this.shape_1.setTransform(72.85,36.55);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},34).to({state:[{t:this.shape}]},20).to({state:[{t:this.shape}]},30).to({state:[{t:this.shape}]},10).wait(41));
		this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},34).wait(20).to({_off:false},0).wait(81));

		// Bras_gauche
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#30343D").s().p("AgeFWQgGgFgBgIQgCgQAHgQQAGgPANgKQAEgLALgEQgPkkAEkmQAAgQAQAAQASgBgBARQgDExAREwQAAAJgGAEQgEASgNAOQgNAOgRAGIgFABQgFAAgFgEg");
		this.shape_2.setTransform(35.3015,100.4743);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#30343D").s().p("AEKCKIgDAAIgEAAIgEAAIgCgBIgEAAIgDAAIgDAAIgEgBIgDAAIgDAAIgEgBIgDAAIgDAAIgDgBIgDAAIgDgBIgDAAIgCgBIgDgBIgDgBIgCAAIgCgBIgDgBIgDgBIgCgBIgCgBIgDgBIgDgCIgBgBIgDgCIgCgBIgCgCIgCgBIgCgCIgCgCIgBAAIgCgBIgDgBIgEgBIgDAAIgEgBIgEgBIgDgBIgEgBIgDAAIgDgBIgEgBIgDAAIgEgBIgEgBIgDgBIgEAAIgDgBIgDgBIgEAAIgDgBIgEgBIgEgBIgDAAIgEgBIgDgBIgEgBIgDAAIgDgBIgEgBIgDAAIgDgBIgEgBIgCgBIgDgBIgEAAIgDgBIgEgBIgDgBIgDgBIgEgBIgDgBIgDgBIgEgBIgDgBIgEgBIgDgBIgDgBIgEgBIgDgBIgDgCIgEgBIgDgBIgEgBIgDgBIgDgBIgEgCIgDgBIgEgBIgDgBIgDgCIgEgBIgDgBIgDgCIgEgBIgDgBIgEgBIgDgCIgDgBIgEgBIgDgCIgEgBIgEgBIgDgCIgDgBIgEgBIgDgBIgEgCIgDgBIgDgBIgDgBIgDgBIgEgBIgDgBIgCgBIgEgCIgDgBIgDgBIgDgBIgDgBIgDgCIgEgBIgDgBIgCgBIgEgBIgDgCIgDgBIgDgBIgDgBIgDgCIgEgBIgDgCIgDgBIgEgCIgCgBIgEgCIgDAAIgDgCIgEgBIgDgCIgDgBIgEgCIgDgBIgDgCIgEgBIgCgBIgEgCIgDgBIgDgCIgEgBIgDgBIgDgCIgEgBIgCgCIgEgBIgDgCIgDgBIgEgCIgDgBIgDgCIgDgBIgDgCIgDgBIgDgCIgDgBIgDgCIgEgBIgDgCIgCgBIgEgCIgDgCIgDgBIgDgCIgDgCIgDgBIgDgCIgDgCIgCgBIgEgCIgCgCIgDgCIgDgBIgCgCIgCgCIgDgCIgDgBIgCgCIgDgCIgDgDIgCgCIgDgCIgCgCIgDgCIgDgCIgCgDIgBgCIgCgCIgCgCIgBgCIAAgDIAAgCIgBgDIAAgCIABgCIAAgDIAAgCIABgDIACgCIACgCIABgCIACgBIACgCIACgBIADgBIACgBIACAAIADgBIACAAIACABIADAAIADABIACABIACABIACACIACABIACACIACACIACACIACACIAEACIACACIADACIADACIADACIACACIADACIADACIADACIADACIADABIADACIADACIADABIADACIADACIADABIADACIAEACIADABIACACIAEABIADACIADACIADABIADACIADABIAEACIADABIAEACIADABIADACIAEABIADACIADABIAEACIADABIAEACIADABIADACIAEABIADACIADABIAEACIADABIAEACIADABIADACIAEABIADACIADABIAEACIADABIAEACIADABIADACIAEABIACABIAEABIADACIADABIADABIAEACIADABIADABIAEABIACABIAEACIADABIADABIAEABIACABIAEABIADABIADACIADABIAEABIADABIAEABIADACIADABIAEABIACAAIAEACIADABIADABIAEABIADACIADABIAEABIADABIADACIAEABIACABIAEABIAEACIACABIAEABIADABIACABIAEABIAEABIADACIAEABIADABIAEABIADABIADABIADABIADABIADABIAEABIACABIAEAAIADABIADABIADABIAEABIACABIAEAAIADABIADABIAEABIADAAIADABIAEABIADABIADAAIAEABIADABIAEAAIAEABIADABIAEABIADAAIAEABIADABIADAAIAEABIADABIAEABIAEAAIADABIAEABIADABIADAAIAEABIACABIACgCIACgCIACgCIACgCIACgBIADgBIADgCIACgBIACgBIADgBIACgBIADgBIAEgBIADgBIACgBIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAAAIABgBIAAgBIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIABgBIAAAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAAAIAAgBIAAgBIABgBIAAgCIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgEIAAAAIAAgDIABAAIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAAAIABgBIAAgBIABAAIAAAAIACgCIABAAIAAgBIAAAAIABAAIAAgBIAAAAIABAAIAAgBIABAAIAAAAIABgBIAAAAIAAAAIABAAIAAgBIABAAIABAAIAAgBIACAAIABAAIACAAIAAgBIAHAAIABABIABAAIABAAIABAAIABABIAAAAIABAAIABABIABAAIAAAAIABAAIAAABIABAAIAAAAIABABIAAAAIAAAAIAAABIABAAIAAAAIAAABIABAAIACACIAAAAIAAAAIAAABIACABIAAAAIAAAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABABIAAABIAAAAIAAADIAAAAIAAAEIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBAAIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIgBABIAAABIAAABIAAAAIAAAAIAAABIAAABIgBAAIAAABIAAABIAAAAIAAABIAAABIgBABIAAABIgBABIAAAAIAAABIAAABIAAAAIAAABIgBABIAAABIAAABIAAABIAAAAIgBABIAAABIAAABIAAAAIgBABIAAABIAAAAIAAABIgBABIAAAAIAAABIAAAAIAAABIAAAAIgBABIAAAAIAAABIAAAAIgBABIAAABIAAAAIAAABIgBABIAAAAIADAAIADAAIAEAAIADAAIADgBIAEAAIADAAIAEAAIAEAAIADAAIAEAAIADAAIAEAAIADAAIADAAIAEAAIADAAIAEAAIAEAAIADAAIAEAAIADAAIADAAIAEAAIACAAIADABIADAAIACABIACACIACABIACABIACACIABACIABACIACACIABADIAAACIABADIAAACIAAADIgBADIgBADIgBADIgCACIABAEIABADIAAAEIABADIAAADIAAADIgBAEIAAADIgBADIgBADIAAACIgCADIgBADIgCADIgCACIgCADIgCADIgCABIgCACIgCACIgCABIgCACIgDABIgCABIgBABIgCABIAAAAIgDABIgCABIgCABIgCAAIgDABIgBAAIgDgBIgCAAIgEABIgDAAIgCAAIgEAAIgDAAIgDAAIgFABIgDAAIgEAAIgDAAIgEAAIgEAAIgDABIgEAAg");
		this.shape_3.setTransform(72.1,79.025);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},34).to({state:[{t:this.shape_2}]},20).to({state:[{t:this.shape_2}]},30).to({state:[{t:this.shape_3}]},10).wait(41));

		// Bras_droite
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#30343D").s().p("AgeFWQgGgFgBgIQgCgQAHgQQAGgPANgKQAEgLALgEQgPkkAEkmQAAgQAQAAQASgBgBARQgDExAREwQAAAJgGAEQgEASgNAOQgNAOgRAGIgFABQgFAAgFgEg");
		this.shape_4.setTransform(194.7485,100.4743,1,1,0,0,180);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#30343D").s().p("AhkEYIgCAAIgEAAIgDAAIgCgBIgDgBIgDgCIgCgCIgCgBIgDgCIgCgBIgCgCIgBgCIgCgCIgDgCIgBgCIgBgDIgCgCIgBgCIgCgCIgBgDIgCgDIgBgCIgBgEIAAgDIgBgDIAAgDIgBgDIAAgDIAAgEIAAgCIAAgDIAAgDIABgDIAAgCIABgEIAAgCIABgDIAAgCIABgDIACgDIABgCIACgDIABgDIABgCIABgCIACgDIACgCIACgCIACgCIABgDIACgCIADgBIACgCIABgDIACgCIACgCIADgBIACgBIACgDIACgBIADgCIADgBIACAAIAEgCIADgBIADgCIADgBIACgBIADgBIADgBIACAAIABAAIAAgDIABgDIACgCIACgDIACgDIACgDIABgCIACgEIADgDIABgCIACgEIACgDIACgCIACgEIACgDIACgCIACgEIABgDIADgCIACgEIABgDIACgCIACgEIACgDIACgDIABgDIACgDIABgDIADgDIABgDIABgDIACgEIACgCIACgDIABgEIACgDIABgDIACgDIABgDIACgDIACgEIABgCIABgDIABgEIABgDIACgDIABgDIACgCIABgEIABgDIACgDIABgEIACgDIABgDIABgEIABgDIACgDIABgEIACgDIACgEIABgCIABgEIABgEIACgDIACgDIABgEIACgDIAAgEIACgDIABgDIACgEIACgCIABgEIACgEIABgDIABgDIABgEIACgDIACgEIABgCIABgEIACgEIABgCIACgEIACgEIABgDIABgDIABgDIACgEIACgDIABgDIACgEIABgEIABgCIACgEIACgDIABgDIABgEIABgDIABgEIACgDIABgDIABgEIABgDIABgDIABgDIABgDIABgDIABgEIABgCIAAgDIABgEIACgCIABgEIAAgDIABgDIABgDIAAgEIABgCIABgDIAAgDIABgCIABgDIAAgDIABgDIABgCIABgDIABgCIABgCIABgCIACgDIADgBIACgCIABgBIADgBIADAAIACgBIACAAIACAAIADAAIADABIACAAIACABIADABIACACIABABIACADIACACIABACIABACIABADIAAACIABADIAAADIgBACIAAADIgBACIgBAEIgBADIgBAEIgBADIgBADIgBADIAAADIgBADIAAAEIgBACIgBADIgBAEIgBADIgBADIgBADIgBADIgBADIgBAEIgBADIgBAEIgBADIAAACIgBABIAAABIgBAAIAAAAIgBAEIgBABIgBADIgBAEIgBACIgBADIgBAEIgCADIgCADIgBADIgBADIgBADIgCAEIgCADIAAABIgBADIgBADIgBAAIAAACIgBABIgEAKIgCAEIgBADIgCADIgBAEIgBADIgBADIgCADIgCAEIgBADIgBADIgCAEIgBADIgCADIgCAEIgBADIgBADIgBAEIgCADIgCADIgBAEIgCADIgBAEIgBADIgBADIgBADIgCADIgCADIgBAEIgBADIgBADIgBAEIgCADIgCADIgBADIgBACIgBAEIgCADIgBADIgCAEIgBADIgCADIgBADIgBADIgCADIgCAEIgBADIgCADIgBAEIgBACIgCAEIgCADIgCADIgBADIgCADIgBADIgCADIgCADIgCADIgBADIgBADIgCADIgCADIgCADIgCADIgBADIgCADIgCACIgBAEIgBADIgCACIgCAEIgCACIgCADIgCADIgBADIgCACIgDADIgBADIgCADIgCACIgBAEIgDACIgBADIgCADIgBADIgCADIgCADIACACIACABIABADIABADIABADIABADIAAAEIABADIAAADIAAAEIgBADIAAAEIgBADIAAADIgBAEIAAACIgBADIAAAEIgBADIgBACIgBAEIgCACIgBADIgCADIgBADIgBACIgCACIgCADIgCACIgBACIgCADIgDADIgCACIgDACIgBADIgDACIgCACIgDACIgCABIgCADIgDACIgCABIgCABIgEACIgCACIgDABIgDABIgDABIgDAAIgDAAIgDAAg");
		this.shape_5.setTransform(83.4,93.9);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},34).to({state:[{t:this.shape_4}]},20).to({state:[{t:this.shape_4}]},30).to({state:[{t:this.shape_4}]},10).wait(41));
		this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},34).wait(20).to({_off:false},0).wait(81));

		// Bouche
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#DD3D59").s().p("AhaJmQiNgIiHgfQjhg0iwhtQh8hNh1huQhIhFg/hOQgmgugsg/Qh5ishRjEQFEiTEmgjQGegxEkC7QCGhICVgrQDkhCDsAJQEBAJDxBhQCaA9CEBbQiSFIkFDnQieCNjLBmQlNColXAAQglAAglgBg");
		this.shape_6.setTransform(113.5596,92.3663,0.1115,0.1115);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FFF5F0").s().p("AjZFsQnmg0m8jVQAvg6A2gyQEAj3GLhUQDMgsDeAHQDuAIDKA4QGFBsDcEGQAkApAfAxQoNDooqAAQiNAAiQgPg");
		this.shape_7.setTransform(113.3952,69.3961,0.1115,0.1115);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#9F1D2E").s().p("AhXXWQkMgLj9hsQiNg9iFhbQnWlDi1p+QhhlWAGk8QBCiiBfiSQCLjUC/iiQCviWDChgQFdivF3AFQFfAEFIClQC3BdDlC3QDPCkCjDTQBzCWBZCpQAEEbhUEnQicImmVFOQiyCTi/BcQk5CVlJAAIg8gBg");
		this.shape_8.setTransform(113.7201,82.1208,0.1115,0.1115);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FFF5F0").s().p("AlXHDQjNgPjUguQh/gcjBg3Qimgvh2g0QhigrhZg4QjRiFiijGQAug2BghHIAtgeQA4giA1gTQBYghC6AKQCJAHEBAlIHBA/QEGAhCwAEQEYAFHbgwQG/gtCQgoQAwgNAmgEQBQgIBKAUQAtAMAzAbQCXBQChCDQkREtksCfQjNBtjTAnQhzAUjeAJQiUAFm+AGIhwABQiWAAhUgGg");
		this.shape_9.setTransform(113.8169,88.4538,0.071,0.071);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FFF5F0").s().p("AF8F4Ik8gEIo/gEQkRgCicgIQl0gTkihWQhegchHgfQhdgnhUg4QkJiripkvQF/BMGJAFQBuACBtgFQA+gCBygHQFDgUGzgeQEygTCXADQDDAEErAhQDIAWI+BJQB3AQCVALIAzAEQA8AEAuABQCeAHD7gWQCOgMB/gRQhpCBiFBmQhZBEhmA2QiIBIiyA6Qj+BSkdAeQi3ATl5AJIhcABIhBAAg");
		this.shape_10.setTransform(113.3554,81.7921,0.071,0.071);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#9F1D2E").s().p("AAmNwQk0gFijgJQmQgWjJg0QpuiioWqpQknl4jVnIQIlCQIsAuQFhAdF6gbQD+gSBfgFQDlgKEDAEQF1AGH2A2QGeAsF9gOQIYgUIGhhQkkIolZF6QoLI/o+BbQjZAjmhAAQiIAAidgEg");
		this.shape_11.setTransform(113.6554,84.926,0.071,0.071);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},54).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},30).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},10).wait(41));

		// Jambe_droite
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#30343D").s().p("AhJD2QgQgDAEgQQAFgRAQACIAAgBQgIjiALjYQABgRARAAQARAAgBARQgKDTAHDRQAbgLAcADQAeADAXARQAKAHgCAKQgBALgLADQgvARg0AAQgXAAgZgDg");
		this.shape_12.setTransform(121.812,135.0704);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#30343D").s().p("AAADQIgDAAIgEAAIgDAAIgEAAIgDAAIgDAAIgEAAIgDAAIgDAAIgEAAIgDAAIgDAAIgDgBIgDAAIgDAAIgDgBIgDAAIgDgBIgCgBIgDgBIgCgBIgBgBIgDgCIgBgBIgDgCIgBgBIgCgDIgBgCIgBgCIgBgCIgBgCIgBgEIAAgDIAAgDIAAgCIABgDIAAgDIABgCIABgCIACgDIABgCIABgCIACgCIACgCIACgCIACgCIACgBIADgCIACgBIADgBIADgCIADgBIADgBIACgBIADAAIADgBIADgBIADgBIADAAIADAAIADgBIADAAIADAAIADAAIADgBIADAAIAEAAIADgBIADAAIADgBIADAAIAEAAIADAAIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgCIAAgEIAAgDIAAgEIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgEIAAgDIAAgEIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgEIAAgDIAAgBIAAgDIAEAAIAYgFQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIAFgCIACAAIABgBIABABIABACIAAACIAAADIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAAEIAAADIAAAEIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAAEIAAACIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAAEIAAADIAAADIAAADIADACIADABIACABIADACIACABIACACIACACIACACIABACIACACIABADIABACIABACIABADIAAADIAAACIAAADIAAACIAAADIgBADIgBADIgBACIgBADIgBACIgBADIgCABIgCACIgCACIgBACIgDACIgCABIgCACIgDABIgCACIgDABIgDAAIgCABIgDAAIgDABIgDAAIgDAAIgEAAIgDAAIgDAAIgDAAIgEAAIgCAAIgDAAIgCAAIgEAAIgDAAIgEABIgCAAg");
		this.shape_13.setTransform(106.575,133.475);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},34).to({state:[{t:this.shape_12}]},20).to({state:[{t:this.shape_12}]},30).to({state:[{t:this.shape_12}]},10).wait(41));
		this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},34).wait(20).to({_off:false},0).wait(81));

		// Jambe_gauche
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#30343D").s().p("AhGDxQgFgBgEgGQgEgFAAgFIABgeQAAgGADgFQAEgFAFgBQA+gMA4AUIgUmcQAAgRARAAQASAAAAARIAVGsQAAAHgEAFIgEAHQgBALgLADQgoALgpAAQgaAAgbgEg");
		this.shape_14.setTransform(100.775,135.3492);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#30343D").s().p("AAAETIgFAAIgEAAIgFAAIgEAAIgEAAIgEAAIgFAAIgEAAIgFAAIgEAAIgEAAIgEAAIgFgBIgDAAIgFAAIgEAAIgDgBIgEgBIgDgBIgDgCIgDgBIgCgCIgDgBIgCgDIgDgCIgBgCIgDgCIgCgDIgCgDIgBgDIgBgDIAAgFIgBgDIAAgFIABgCIAAgEIAAgEIABgDIACgDIACgDIACgDIACgDIABgCIADgDIADgCIADgDIACgBIAEgCIADgCIADgCIAEgCIAEgBIAEgCIADAAIAFgBIADgBIADgBIAFgCIADAAIAFAAIADgBIAFAAIADAAIAEgBIAFAAIADAAIAFgBIAEAAIAEgBIAEAAIAFAAIAEgBIAFAAIAAgFIAAgEIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgEIAAgGIAAgEIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgEIAAgEIAAgFIAAgFIAAgFIAAgEIAAgFIAAgEIAAgGIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgGIAAgEIAAgEIAAgFIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgEIAAgFIAAgFIAAgEIAAgFIAAgEIAAgFIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgEIAAgFIAAgCIAAgCIAAgGIABAAIAAgCIAAAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAAAIABAAIAAgBIAAAAIABgBIAAAAIABAAIAAAAIAAAAIAAgBIABAAIABgCIABAAIAAAAIAAAAIAAgBIAAAAIABgBIAAAAIABAAIAAAAIABgBIAAAAIABAAIAAAAIABgBIABAAIAAAAIABAAIABgBIABAAIAAAAIACAAIABgBIAEAAIABAAIADAAIABAAIADAAIAAABIADAAIAAAAIABAAIAAABIABAAIABAAIAAAAIABABIAAAAIAAAAIACAAIAAABIAAAAIABAAIAAABIABAAIAAABIAAAAIABAAIAAABIAAAAIAAAAIABAAIAAABIAAAAIABAAIAAABIABAAIAAAAIAAABIABAAIAAAAIAAAAIAAABIABAAIAAABIABAAIAAAAIAAABIABAAIAAACIAAAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAACIAAAAIAAAEIABAAIAAAEIAAAAIAAAIIAAAAIAAADIgBAAIAAADIAAABIAAABIAAAAIAAABIAAAEIAAAFIAAAFIAAAEIAAAFIAAAEIAAAGIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAEIAAAGIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAGIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAGIAAAEIAAAFIAAAEIAAAFIAAAFIAAAEIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAFIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAAEIAAAFIAAADIAAAAIADACIAEACIADACIADABIAEACIACADIACACIADADIACACIABAEIACACIABADIABAEIACADIAAAEIAAADIAAADIAAAEIAAADIgBADIgBAFIgBACIgCAEIgBADIgCADIgDADIgCADIgCABIgCADIgDACIgDADIgDABIgDACIgEACIgDACIgEABIgDAAIgFABIgDAAIgEAAIgEAAIgEAAIgEAAIgEAAIgFAAIgEAAIgEAAIgDAAIgDAAIgFAAIgEAAIgFABIgDAAg");
		this.shape_15.setTransform(85.15,132.75);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},34).to({state:[{t:this.shape_14}]},20).to({state:[{t:this.shape_14}]},30).to({state:[{t:this.shape_14}]},10).wait(41));
		this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},34).wait(20).to({_off:false},0).wait(81));

		// Corps
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#D63C41").s().p("AA/BuQgpgHgWgeQgXgfAIgsQAGghgRgUQgPgSgbgEQgbgGgWAQQgXAQgEAbQgBAGgGAEQgFAEgHgBQgGgCgEgFQgEgFABgHQAHgoAigXQAhgXAoAHQArAIAVAfQAWAfgIApQgGAfAQAVQAOATAdAGQAbAEAWgPQAXgQAEgaQABgHAGgEQAFgDAHABQAHABADAFQAEAGgBAGQgHAkgbAWQgbAXgjAAg");
		this.shape_16.setTransform(67.6843,86.6683);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#D63C41").s().p("AA/BuQgrgIgVgfQgWgfAIgpQAFgegOgVQgPgUgdgGQgbgFgWAQQgWAQgFAaQgBAHgGAEQgGADgGgBQgHgBgDgFQgEgGABgGQAIgpAggXQAigXAoAIQAqAHAVAgQAWAggHApQgGAhARAUQAPASAbAEQAaAFAXgPQAWgQAFgbQABgGAGgEQAFgEAHABQAHACADAFQAEAGgBAGQgHAjgbAXQgbAXgjAAg");
		this.shape_17.setTransform(91.9511,91.3078);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#D63C41").s().p("ABKB+QgvgIgZghQgaglAJgxQAGgkgRgZQgSgZgjgGQgggGgcATQgbASgGAhQgBAGgFAEQgGAEgGgBQgHgBgEgGQgEgGACgGQAHgtAngbQAmgbAtAJQAxAIAZAlQAYAkgIAwQgHAkATAZQASAYAiAGQAgAFAbgSQAcgTAFggQABgHAGgEQAGgEAGACQAHABAEAFQADAGgBAGQgIAugmAaQgdAUgjAAQgLAAgJgCg");
		this.shape_18.setTransform(139.4657,84.2718);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#D63C41").s().p("AinBLQgSgmAPglQAQgnAmgRQAogSAmAOQAkAPARAoQAOAdAYAIQAXAIAcgMQAagLALgaQAKgagMgaQgDgGADgGQADgGAGgDQAGgDAFADQAHACACAGQARAmgPAmQgPAngmARQgmARglgMQglgNgSgrQgNgbgYgKQgZgJgcAMQgaAMgKAZQgKAaALAaQADAGgDAGQgCAHgHACQgCACgEAAQgLAAgDgKg");
		this.shape_19.setTransform(110,62.4875);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#D63C41").s().p("AhlBRQgogIgYgiQgXgjAIgnQABgHAFgEQAGgDAHABQAHABADAGQAEAFgCAHQgFAcAQAWQAQAYAcAFQAeAGAWgPQAVgOAGgeQAIgsAggVQAggVAtAIQAoAIAXAjQAYAigIAoQgBAHgGADQgFAEgHgBQgGgBgFgGQgDgFABgHQAFgcgPgWQgQgYgcgFQgbgFgUALQgaANgGAgQgIAmgYAWQgbAWgjAAQgKAAgNgDg");
		this.shape_20.setTransform(153.85,65.3046);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#D63C41").s().p("AAPBQQgegeAAgyQAAgigVgWQgWgWglAAQggAAgXAXQgYAYAAAfQAAAHgFAFQgFAFgGAAQgGAAgGgFQgEgEAAgIQAAgtAgggQAighAtAAQAyAAAfAfQAeAfAAAwQAAApAZAUQAWASAhAAQAgAAAYgXQAYgYgBggQABgGAEgFQAFgFAGAAQAHAAAFAFQAEAFABAGQgBAuggAgQghAhguAAQgyAAgfgfg");
		this.shape_21.setTransform(105.8,16.25);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#D63C41").s().p("AhNAcQgFgFAAgHQgBgGAFgFQAfghAugDQAtgCAiAfQAFADAAAHQABAHgFAFQgEAFgHAAQgGAAgGgEQgYgVggABQggABgWAYQgFAGgHAAQgGAAgFgEg");
		this.shape_22.setTransform(160.55,32.1188);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#D63C41").s().p("AgQBPQgFgEAAgHQgBgGAEgFQAVgZgDggQgBgggZgVQgFgFgBgGQAAgHAEgFQAEgFAHgBQAHAAAFAEQAhAdAEAvQAEAtgeAjQgFAFgGAAQgHAAgEgEg");
		this.shape_23.setTransform(154.4707,26.9975);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#D63C41").s().p("AgjApQgHgBgDgFQgFgGACgGQAEgeAZgTQAYgSAfAEQAHABADAGQAEAFAAAHQgBAGgFAEQgGAEgGgBQgSgCgOAKQgOAKgDARQgBAGgEAEQgFAEgGAAg");
		this.shape_24.setTransform(138.95,105.706);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#D63C41").s().p("AAXAxQgHgBgEgFQgEgFABgHQADgRgMgOQgKgOgRgCQgHgBgEgFQgEgFABgHQABgGAFgFQAFgEAHABQAdAEAUAYQATAYgEAfQAAAGgFAEQgFAEgGAAg");
		this.shape_25.setTransform(133.0563,104.9222);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#D63C41").s().p("AAWAmQgEgEgBgGQgCgRgOgLQgNgLgSACQgHABgFgEQgFgFgBgGQAAgHAEgFQAEgFAGgBQAggDAXATQAZATADAeQABAHgEAFQgEAFgHABIgCAAQgGAAgFgEg");
		this.shape_26.setTransform(101.5822,46.0545);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#D63C41").s().p("AgjAuQgEgEgBgGQgBgHAEgFQAEgGAHgBQARgCAKgOQALgOgDgRQgBgHAEgFQAEgGAHgBQAHAAAFAEQAFAEABAGQAEAfgSAYQgTAZgeAEIgCABQgGAAgFgEg");
		this.shape_27.setTransform(100.8412,40.1222);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#D63C41").s().p("AATBMQgHgCgCgGQgDgGACgHQAMgegNgdQgNgegegLQgHgCgCgHQgDgGACgGQADgGAGgDQAGgDAGADQAqAQATAqQATApgRArQgDAKgMAAg");
		this.shape_28.setTransform(177.7266,79.8625);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#D63C41").s().p("AhBApQgGgCgDgGQgDgGACgGQADgHAFgDQAGgCAHACQAfALAcgOQAdgNALgfQADgHAFgDQAGgCAHACQAGACADAGQADAGgCAGQgQArgpAUQgXALgYAAQgTAAgSgHg");
		this.shape_29.setTransform(180.7206,71.1056);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#D63C41").s().p("AANBPQgmgZgJgtQgKgsAZgnQAEgFAHgCQAGgBAFAEQAFAEACAGQABAHgEAFQgQAbAGAfQAGAgAbASQAGAEABAGQACAHgEAFQgFAIgJAAQgEAAgEgDg");
		this.shape_30.setTransform(55.1147,59.6639);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#D63C41").s().p("AhJAkQgFgDgCgHQgCgGAEgGQAXgmAugLQAsgKAmAYQAGADACAHQACAGgEAFQgDAGgHABQgGACgHgEQgbgQgfAIQgfAGgSAcQgEAIgJAAQgFAAgEgDg");
		this.shape_31.setTransform(50.75,67.0757);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#D63C41").s().p("AgIA/QgFgEgBgHQgBgGAEgGQANgSgDgWQgDgWgTgOQgFgEgBgGQgBgHADgFQAEgGAHgBQAHgBAFAEQAcAVAGAkQAFAkgVAcQgFAHgIAAQgDAAgGgDg");
		this.shape_32.setTransform(142.8449,38.24);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#D63C41").s().p("AgIA/QgFgEgBgHQgBgGAEgGQANgSgDgWQgDgWgTgOQgFgEgBgGQgBgHADgFQAEgGAHgBQAHgBAFAEQAcAVAGAkQAFAjgVAdQgFAHgIAAQgEAAgFgDg");
		this.shape_33.setTransform(185.446,56.215);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#D63C41").s().p("AAcAsQgdgBgVgUQgVgVAAgcQAAgHAFgEQAFgGAGAAQAHABAFAEQAEAFAAAHQAAAPALALQAMALAQAAQAGAAAFAFQAFAEAAAIQAAAGgEAFQgFAFgHAAg");
		this.shape_34.setTransform(57.4977,94.05);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#D63C41").s().p("Ag+BAQgEgEgBgIQAAgxAjgiQAigkAyAAQAGAAAFAEQAFAFAAAHQAAAGgFAFQgFAFgGAAQglAAgYAaQgaAZABAkQAAAIgFAEQgEAEgHABQgHgBgFgEg");
		this.shape_35.setTransform(55.5746,38.75);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#D63C41").s().p("AhjASQgGgEgBgGQgBgHAEgEQAEgGAGgBQAHgBAFAEQAnAaAugJQAvgIAbgnQAEgFAHgBQAGgBAGADQAFAEABAHQACAGgEAGQgVAdghARQggAQgjAAQgtAAgmgag");
		this.shape_36.setTransform(124.6855,51.4639);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#D63C41").s().p("AgaBOQgFgFABgGQAAgHAFgEQAYgXABggQABgggVgZQgFgFABgGQAAgGAFgFQAFgFAGAAQAHABADAFQAfAigCAtQgBAughAgQgEAEgHgBQgHABgFgGg");
		this.shape_37.setTransform(75.2786,72.8);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#D63C41").s().p("AgCApQhFgEgugxQgFgGABgGQAAgHAFgEQAFgFAGABQAHAAAEAFQAnAoA3ACQA2ACApgkQAFgFAHABQAGAAAFAFQAFAFgBAGQAAAHgFAFQgwArhAAAg");
		this.shape_38.setTransform(75.3748,63.65);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#D63C41").s().p("Ag9A9QgFgFAAgHQABgwAighQAighAwABQAHAAAEAFQAFAFAAAGQgBAHgEAFQgFAEgHAAQgiAAgYAYQgZAXAAAjQgBAHgEAEQgFAFgHAAQgGAAgFgFg");
		this.shape_39.setTransform(75.575,49.2496);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#D63C41").s().p("AAxBDQgwgBghgiQgggiAAgwQAAgHAEgEQAFgFAHAAQAGAAAGAFQAEAFAAAHQgBAiAZAYQAXAZAiAAQAHAAAFAFQAEAFAAAHQAAAGgEAFQgFAFgHAAg");
		this.shape_40.setTransform(72.6,52.125);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#D63C41").s().p("AglA6QgDgGACgGQADgGAGgDQAYgLAIgYQAJgYgKgWQgCgGACgGQACgHAGgDQAGgCAGACQAHADACAGQAQAkgOAjQgOAkgjARIgHABQgKAAgEgKg");
		this.shape_41.setTransform(143.1129,18.4125);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#D63C41").s().p("AAlAeQgLgYgYgIQgXgJgXAKQgHACgGgCQgGgCgDgGQgCgGACgGQACgHAHgDQAjgPAkAOQAkAOAQAjQADAGgCAGQgDAHgGACIgGACQgKAAgFgKg");
		this.shape_42.setTransform(143.9569,15.0678);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#D63C41").s().p("AgyBBQgGAAgFgFQgFgEAAgHQABgwAiggQAigiAwABQAGAAAFAFQAFAFgBAGQAAAHgEAEQgFAFgHAAQgiAAgYAYQgZAXAAAiQgBAHgEAFQgEAEgIAAg");
		this.shape_43.setTransform(108.05,79.8246);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#D63C41").s().p("AgfAgQgigiABgwQAAgGAFgFQAEgFAHAAQAHABAEAEQAFAFAAAHQgBAiAZAYQAXAZAjABQAGAAAFAFQAFAEgBAHQAAAHgEAEQgFAFgHAAQgwgBgggig");
		this.shape_44.setTransform(105.0769,82.675);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#D63C41").s().p("AAAAhQg0AAgmgjQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAEQAdAcAmgBQApgBAbgbQAFgFAHAAQAGAAAFAEQAFAFAAAHQAAAGgFAFQglAlg1ABg");
		this.shape_45.setTransform(160.475,41.025);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#D63C41").s().p("ABlBEQgFgFABgHQgBgngcgcQgcgcgoAAQgmAAgdAcQgdAcAAAnQABAHgFAFQgFAEgGAAQgHAAgFgEQgFgFABgHQAAg1AlglQAmglA0AAQA1AAAmAlQAlAlAAA1QABAHgFAFQgFAEgGAAQgHAAgFgEg");
		this.shape_46.setTransform(158.3,48.275);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#D63C41").s().p("AgvBEQgGAAgFgEQgEgEgBgHQAAgGAEgFQAFgFAHgBQAjgBAWgaQAXgZgBgiQgBgHAFgFQAEgFAHAAQAGAAAFAEQAFAFABAGQACAxghAiQggAkgvABg");
		this.shape_47.setTransform(110.6813,105.8975);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#D63C41").s().p("AAxB0QguAAghggQgjgggBgxQgCguAhgjQAhgkAvgBQAHAAAFAEQAEAGABAGQAAAGgFAGQgEAEgHAAQgiABgXAaQgYAZABAhQABAkAZAXQAZAYAigCQAHABAFAEQAFAFAAAHQAAAGgEAFQgFAEgHABg");
		this.shape_48.setTransform(120.5492,101.15);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#D63C41").s().p("AAzByQgEgFAAgGQAAgHAGgFQAegdABgrQACgqgegfQgdgfgqgBQgrgBgfAdQgFAFgHgBQgGAAgFgFQgFgFABgGQAAgHAFgEQAognA5ACQA3ABAnApQAmApgBA3QgCA4gpAnQgEAEgHAAQgHAAgFgFg");
		this.shape_49.setTransform(81.0503,45.8222);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#D63C41").s().p("ABXBpQgGgEgBgGQgCgHADgFQAWgmgLgpQgLgogkgWQgmgWgoALQgqALgVAkQgEAGgGACQgHABgFgDQgGgEgCgGQgCgGAEgGQAdgxA2gOQA1gOAxAdQAwAcAOA3QAOA2gcAwQgFAIgJAAQgFAAgDgCg");
		this.shape_50.setTransform(158.2942,86.8944);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#D63C41").s().p("AhGA2QgfgYgKglQgCgHAEgFQADgGAHgCQAGgCAGAEQAGADABAHQAJAgAdARQAdARAggJQAggIARgdQASgcgJghQgBgGADgGQADgGAHgCQAGgBAGADQAGADACAHQALAtgYAoQgYApgtAMQgOADgOAAQgmAAgfgXg");
		this.shape_51.setTransform(121.8249,38.2275);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#D63C41").s().p("AhGA2QgfgYgKglQgBgGADgGQADgGAHgCQAGgBAGADQAGADACAHQAIAgAdARQAdARAggIQAggJASgdQARgcgJghQgBgGADgGQAEgGAGgBQAHgCAFADQAGAEACAGQALAugYAnQgYApgtAMQgOADgNAAQgnAAgfgXg");
		this.shape_52.setTransform(86.6888,23.5886);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#DB5B58").s().p("ADyIFQgYgNgQgXQgQAXgZANQgbAOgeAAQgeAAgagOQgagNgQgXQgQAXgZANQgbAOgeAAQgfAAgagOQgagNgRgXQgQAXgZANQgbAOgeAAQgkAAgegUQgdgTgOgfQgfAcgrAAQguAAghghQggghAAguIABgPQgKACgMAAQguAAghghQghghAAguQAAgjAWgeQgkgKgXgdQgYgeAAgnQAAgiATgcQATgaAegNQgggiAAgsQAAgvAgggQAhghAuAAIALABQgEgPAAgPQAAguAhghQAhggAuAAQAYAAAUAJQABguAggfQAhggAtAAQAlAAAdAWQALgjAdgWQAegWAlAAQAZAAAWALQAWAKAQATQAOgcAagQQAbgRAgAAQAfAAAbASQAbAQAOAcQAPgTAXgLQAWgLAaAAQAlAAAeAWQAdAWAKAjQAdgWAlAAQAuAAAgAgQAhAfABAuQAUgJAYAAQAuAAAhAgQAgAhAAAuQAAAPgEAPIALgBQAuAAAhAhQAhAgAAAvQAAAtggAhQAeANATAaQATAcAAAiQAAAmgYAfQgXAdgkAKQAVAdAAAkQAAAuggAhQghAhguAAQgNAAgJgCQABAHAAAIQAAAuggAhQghAhguAAQgrAAgggdQgMAggcATQgdAUgjAAQgcAAgZgOg");
		this.shape_53.setTransform(115.175,58.525);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#D63C41").s().p("ADKIHQgpAlg5AAQg4AAgqglQgoAlg6AAQg5AAgqglQgpAlg6AAQgjABgfgRQgfgPgUgbQgfARgiAAQg2gBgngjQgoglgEg0Qg3gDgognQgmgoAAg4QAAgcAKgYQghgTgTggQgUggAAgmQAAghAQgdQAOgcAagTQgUggAAgnQAAg0AigmQAignAzgHIAAgEQAAg4AogpQAogpA5AAIAXACQAMgsAlgdQAlgdAvAAQAbAAAbAMQASgfAfgSQAggSAlAAQAtAAAjAaQAUgXAbgMQAbgMAeAAQAeAAAbAMQAcANASAWQAlgbAtABQAlAAAgASQAgASARAfQAagMAcAAQAwAAAlAdQAkAdAMAsIAXgCQA4AAApApQApApAAA4IAAAEQAyAHAhAnQAjAnAAAzQAAAmgTAhQAaATAOAcQAOAdABAhQAAAmgUAgQgTAhghASQAKAaAAAaQABA4gnAoQgnAng4ADQgEA0gnAlQgnAjg2ABQgjAAgfgRQgTAbgdAPQgeARgjgBQg1AAgoglg");
		this.shape_54.setTransform(115.15,58.55);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},54).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},30).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},10).wait(41));

		this._renderFirstFrame();

	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(146.5,82.9,52.099999999999994,77.4);
// library properties:
	lib.properties = {
		id: '187389BB13CCDC4D9A4C9CFF59FC05E6',
		width: 230,
		height: 160,
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


	an.makeResponsiveResult = function(isResp, respDim, isScale, scaleType, domContainers) {
		var lastW, lastH, lastS=1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih=window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
			if (isResp) {
				if (iw < 500 || ih < 500) {
					if (iw < ih) {
						sRatio = xRatio/2.1;
					}
					else {
						sRatio = yRatio/3;
					}
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
