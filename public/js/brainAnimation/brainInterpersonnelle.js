var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function brainCharacterAnimationInterpersonnelle() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("CD482840D6856540B01D8416294FF8F7");
	var libInterpersonnelle=comp.getLibrary();
	handleCompleteInterpersonnelle({},comp);
}
function handleCompleteInterpersonnelle(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var libInterpersonnelle=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new libInterpersonnelle.brainInterpersonnelle();
	stage = new libInterpersonnelle.Stage(canvas);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjsInterpersonnelle.Ticker.framerate = libInterpersonnelle.properties.fps;
		createjsInterpersonnelle.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);
	AdobeAn.compositionLoaded(libInterpersonnelle.properties.id);
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
// helper functions:

	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


	(lib.Yeux_fermé = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#30343D").s().p("AClAPQgQAAgNgDQgPgCgGgDQgGgCACgEQABgDAJgDIAGgDQAQgGAfABQATAAAMAEIAHACQAIAEACADQAEADgHAFIgHACQgLAEgVABIgPAAgAjOAJIgGgCQgJgEgBgDQgCgDAGgCQAGgEAPgCQANgDAQAAIAPAAQAeACAJAFQAHAFgEAEQgDAFgOADQgMADgTAAIgMABQgWAAgNgFg");
		this.shape.setTransform(0.0227,-0.05);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Yeux_fermé, new cjs.Rectangle(-22.3,-1.5,44.7,3), null);


	(lib.Bras_gauche = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#30343D").s().p("AABD6Qg2ixAejDQgGgBgEgHQgSgeAAgdQAAgVALggQARg0AgAHQAiAJAIBJQADAYgKAUQgGAOgbAxIgFAFQgVC0AxCaQAOAqgRAFIgDABQgPAAgMgng");
		this.shape.setTransform(-0.3545,0.4176,1,1,-14.9983);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Bras_gauche, new cjs.Rectangle(-10.7,-27.6,21.4,55.3), null);


	(lib.Bras_droite = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#30343D").s().p("AABD6Qg2ixAejDQgGgBgEgHQgSgeAAgdQAAgVALggQARg0AgAHQAiAJAIBJQADAYgKAUQgGAOgbAxIgFAFQgVC0AxCaQAOAqgRAFIgDABQgPAAgMgng");
		this.shape.setTransform(0.3545,0.4176,1,1,0,14.9983,-165.0017);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Bras_droite, new cjs.Rectangle(-10.7,-27.6,21.4,55.3), null);


	(lib.Zzz = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AgcAfIABgIIAhglIAIgIIgMABIgVAAIABgJIAvAAIgBAHIggAlIgJAIIAMAAIAYAAIgDAJg");
		this.shape.setTransform(3.3,-4.7);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("AgdAfIACgIIAgglIAIgIIgKABIgXAAIACgJIAwAAIgCAHIggAlIgJAIIAMAAIAXAAIgBAJg");
		this.shape_1.setTransform(-2.7,-4.7);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#000000").s().p("AgkArIABgIIAqgzIAJgLIAFgGIgHABIgDAAIgDAAIgEAAIgcAAIACgKIA7AAIgBAJIgtA2IgLANIADgBIAuAAIgCAKg");
		this.shape_2.setTransform(-9.275,-5.9);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Zzz, new cjs.Rectangle(-15.2,-14.3,23.5,17.3), null);


	(lib.Bouche_ouverte = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#DD3D59").s().p("AhaJmQiNgIiHgfQjhg0iwhtQh8hNh1huQhIhFg/hOQgmgugsg/Qh5ishRjEQFEiUEmgiQGegxEkC7QCGhICVgrQDkhCDsAJQEBAJDxBhQCaA9CEBbQiSFIkFDnQieCNjLBmQlNColXAAQglAAglgBg");
		this.shape.setTransform(-0.1196,7.2924,0.0809,0.0809);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFF5F0").s().p("AjaFsQnkg0m8jVQAug6A2gyQEAj3GKhUQDNgsDfAHQDtAIDKA4QGFBsDcEGQAkApAgAxQoODooqAAQiNAAiRgPg");
		this.shape_1.setTransform(-0.2389,-9.3731,0.0809,0.0809);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#9F1D2E").s().p("AhXXWQkMgLj9hsQiNg9iFhbQnWlDi1p+QhhlWAGk8QBCiiBfiSQCLjUC/iiQCviWDChgQFdivF3AFQFfAEFIClQC3BdDlC3QFmEcDYGaQAEEbhUEnQicImmVFOQiyCTi/BcQk5CVlJAAIg8gBg");
		this.shape_2.setTransform(-0.0031,-0.141,0.0809,0.0809);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Bouche_ouverte, new cjs.Rectangle(-13.1,-12.4,26.299999999999997,24.700000000000003), null);


	(lib.Bouche_fermé = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#9F1D2E").s().p("EAlVACIQixgIingRIjmgXInEgzIlUgmQjIgWiNgNQlmgglEgIQlwgJk8AeQiqASiqAdIlRA7QkJAtiuAPQh4AKiCgCQhKgBhigJQhigIhLgMQi9gciVgrIACgJQCgARC1ALQC5ALCbgFQCMgDC2gYIFjgtQCRgRDGgQQBygIDlgQQGAgcEvgPQC6gLCeAAICtADICsAJQFgATFOArQDnAeHBBGQDdAkB1ARQClAaCwAHIAAAJQhaAKhLACIgrAAQhAAAhJgFg");
		this.shape.setTransform(-0.0316,-0.0076,0.0677,0.0677);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Bouche_fermé, new cjs.Rectangle(-18.5,-0.9,37,1.9), null);


	(lib.Brain = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// brains
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#D63C41").s().p("AA/BuQgogHgXgeQgXggAIgrQAGghgRgUQgPgSgbgEQgbgFgWAPQgXAQgEAbQgBAGgGAEQgGAEgGgBQgHgCgDgFQgEgGABgGQAIgoAggXQAhgXApAHQArAIAVAfQAWAfgIApQgGAfAQAVQAOATAdAGQAbAEAWgPQAWgPAFgbQABgHAGgDQAFgEAHABQAGABAEAFQAEAGgBAHQgHAjgbAXQgcAWgjAAQgJAAgIgCg");
		this.shape.setTransform(-46.8439,28.4882,1.0002,0.9999);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#D63C41").s().p("AA/BuQgrgIgVgfQgWgfAIgpQAFgegOgVQgPgUgdgGQgbgFgWAQQgXAQgEAaQgCAHgFAEQgFADgHgBQgHgBgDgFQgEgGABgGQAHgpAhgWQAigYAoAIQAqAHAVAgQAWAggIApQgFAhARAUQAPASAbAEQAaAFAXgPQAWgQAFgaQABgHAFgEQAGgEAHACQAGABAEAFQAEAGgBAGQgHAkgbAWQgcAXgjAAg");
		this.shape_1.setTransform(-22.5402,33.1039,1.0002,0.9999);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#D63C41").s().p("ABLB+QgvgHgagiQgagkAJgyQAHgkgSgZQgRgZgkgGQgggGgcATQgbASgFAhQgBAGgGAEQgFAEgHgBQgHgBgDgGQgEgFABgHQAIgtAmgbQAmgaAuAIQAwAJAZAkQAZAkgJAwQgGAlASAYQASAYAiAGQAgAGAcgTQAbgTAGggQABgHAFgEQAGgDAGABQAHABAEAFQADAGgBAGQgHAugnAaQgdAUgiAAQgMAAgIgCg");
		this.shape_2.setTransform(24.9421,26.0861,1.0002,0.9999);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#D63C41").s().p("AinBLQgRgmAPglQAPgnAmgRQAogSAlAOQAlAPARAoQANAdAZAIQAYAIAbgMQAagLAKgaQALgagMgaQgCgGACgGQACgGAGgDQAHgDAGADQAGACADAGQARAmgQAmQgPAngmARQgnARgjgMQgngNgRgrQgNgbgYgKQgZgJgcAMQgaAMgKAZQgKAaALAaQADAGgDAGQgCAHgGACQgDACgEAAQgKAAgEgKg");
		this.shape_3.setTransform(-4.4955,4.2895,1.0002,0.9999);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#D63C41").s().p("AhlBRQgpgIgXgiQgXgjAIgnQABgHAGgEQAFgDAHABQAGABAEAGQAEAFgBAHQgGAcAQAWQAQAYAbAFQAfAGAVgPQAWgOAGgeQAJgrAfgWQAhgVAsAIQApAJAXAiQAXAigIAoQgBAHgGADQgGAEgGgBQgHgBgDgGQgEgFABgHQAGgcgQgWQgQgYgbgFQgcgFgVALQgZANgGAgQgHAmgZAWQgaAWgkAAQgNAAgKgDg");
		this.shape_4.setTransform(39.3432,7.1008,1.0002,0.9999);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#D63C41").s().p("AAOBRQgdgeAAgyQAAgjgWgWQgVgWgkAAQgiAAgXAYQgYAXAAAgQAAAGgEAFQgFAFgHAAQgGAAgFgFQgFgFAAgGQABguAgghQAhggAvAAQAxAAAfAfQAeAgAAAwQAAAnAZAWQAWARAgAAQAiAAAXgYQAXgXAAggQAAgGAFgFQAEgEAHgBQAHABAEAEQAFAFABAGQgBAtggAiQghAggvAAQgyAAgfgeg");
		this.shape_5.setTransform(-8.6892,-41.9508,1.0002,0.9999);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#D63C41").s().p("AhNAcQgFgFAAgGQAAgHAEgFQAfghAugDQAtgCAiAfQAFADAAAHQAAAHgEAFQgEAFgHAAQgHAAgFgEQgYgVggABQggABgWAZQgFAFgHAAQgGAAgFgEg");
		this.shape_6.setTransform(46.0442,-26.0829,1.0002,0.9999);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#D63C41").s().p("AgQBPQgFgEgBgHQAAgGAEgFQAVgagDgfQgCgggYgVQgFgFgBgGQAAgHAEgFQAEgFAHgBQAHAAAFAEQAhAdAEAvQADAugdAiQgFAFgHAAQgGAAgEgEg");
		this.shape_7.setTransform(39.9793,-31.204,1.0002,0.9999);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#D63C41").s().p("AgjApQgHgBgEgFQgDgGAAgGQAFgeAZgTQAZgSAeAEQAHABAEAGQAEAFgBAHQgBAHgGADQgFAEgHgBQgRgCgOAKQgOAKgDARQAAAGgFAEQgFAEgGAAg");
		this.shape_8.setTransform(24.4478,47.4997,1.0002,0.9999);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#D63C41").s().p("AAXAxQgGgBgEgFQgEgFAAgHQADgSgLgNQgKgOgSgCQgHgBgEgFQgEgFABgHQABgHAFgEQAFgEAHABQAeAEATAZQATAXgEAfQAAAGgFAEQgFAEgGAAg");
		this.shape_9.setTransform(18.522,46.7338,1.0002,0.9999);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#D63C41").s().p("AAWAmQgEgEgBgGQgDgSgNgKQgNgLgSACQgGABgGgEQgFgEgBgHQAAgHAEgFQAEgFAGgBQAfgDAYATQAYATAEAeQABAHgFAFQgEAFgGABIgCAAQgGAAgFgEg");
		this.shape_10.setTransform(-12.9085,-12.1481,1.0002,0.9999);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#D63C41").s().p("AgjAuQgEgEgBgGQgBgHAEgFQAEgFAGgBQASgDAKgOQAKgOgCgRQgBgHAEgFQAEgFAHgBQAGgBAGAEQAFAEABAGQAEAfgSAYQgTAZgeAEIgCABQgGAAgFgEg");
		this.shape_11.setTransform(-13.6559,-18.0623,1.0002,0.9999);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#D63C41").s().p("AASBMQgGgCgDgGQgCgGACgHQAMgegOgdQgMgegfgLQgGgDgDgGQgCgGACgGQADgGAGgDQAGgDAGADQAqAQATAqQATApgRArQgEAKgLAAg");
		this.shape_12.setTransform(63.2428,21.6578,1.0002,0.9999);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#D63C41").s().p("AhBApQgGgCgDgGQgDgGACgGQACgHAHgCQAGgDAGACQAfALAcgOQAegOAKgeQADgHAGgDQAGgCAGACQAGACADAGQADAGgCAGQgPAqgqAVQgXALgYAAQgTAAgSgHg");
		this.shape_13.setTransform(66.2141,12.9014,1.0002,0.9999);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#D63C41").s().p("AANBPQglgZgKgtQgKgsAagnQAEgFAGgBQAHgCAEAEQAFAEACAGQABAHgDAFQgRAbAHAfQAFAgAcASQAFAEACAGQABAHgEAFQgEAIgJAAQgEAAgFgDg");
		this.shape_14.setTransform(-59.4054,1.474,1.0002,0.9999);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#D63C41").s().p("AhJAkQgFgDgCgHQgCgGAEgGQAYgmAtgLQAsgKAnAYQAFAEACAGQABAGgDAFQgEAGgGABQgHACgFgEQgcgQgfAIQggAHgRAbQgEAIgJAAQgGAAgDgDg");
		this.shape_15.setTransform(-63.7864,8.8718,1.0002,0.9999);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#D63C41").s().p("AgIA+QgFgEgBgGQgBgHAEgFQAMgSgCgWQgEgXgSgNQgGgEgBgHQgBgHAEgFQAEgFAHgBQAGgBAGAEQAcAVAGAkQAFAjgVAdQgFAHgIAAQgFAAgEgEg");
		this.shape_16.setTransform(28.3375,-19.9476,1.0002,0.9999);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#D63C41").s().p("AgIA/QgFgEgBgHQgBgGAEgGQANgSgDgWQgEgXgSgNQgFgDgBgHQgCgHAEgFQAEgGAHgBQAHgBAFAEQAcAWAGAjQAFAkgVAcQgFAHgIAAQgFAAgEgDg");
		this.shape_17.setTransform(70.9586,-1.9633,1.0002,0.9999);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#D63C41").s().p("AAbArQgcABgUgVQgWgUAAgdQAAgHAFgFQAEgEAHgBQAHAAAEAFQAGAFAAAGQAAAQAKALQAMAMAQAAQAHgBAFAFQAEAFAAAGQAAAIgEAEQgFAEgHAAg");
		this.shape_18.setTransform(-57.0465,35.8444,1.0002,0.9999);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#D63C41").s().p("AgzBFQgGAAgFgFQgFgFAAgGQAAgyAjgjQAigjAxgBQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgGAAQglAAgYAaQgaAZABAkQAAAHgFAFQgFAEgGABg");
		this.shape_19.setTransform(-58.9222,-19.4272,1.0002,0.9999);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#D63C41").s().p("AhkASQgFgEgBgGQgBgHADgEQAEgGAHgBQAGgBAGAEQAnAaAugJQAvgIAbgnQAEgFAHgBQAGgBAFADQAGAEABAHQACAGgEAGQgWAdggARQggAQgjAAQguAAgmgag");
		this.shape_20.setTransform(10.1981,-6.7391,1.0002,0.9999);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#D63C41").s().p("AgaBOQgFgFABgGQAAgHAFgFQAYgWABghQAAgfgVgZQgEgFAAgGQAAgHAFgEQAFgFAHABQAHAAADAFQAfAigCAtQgCAughAfQgEAEgGAAQgIAAgEgFg");
		this.shape_21.setTransform(-39.2152,14.6182,1.0002,0.9999);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#D63C41").s().p("AgBAoQhFgDgvgyQgFgFABgGQAAgHAFgEQAFgFAGABQAHAAAFAFQAlAnA4ADQA3ACApgkQAFgFAGABQAHAAAEAFQAFAFgBAGQAAAHgFAEQgwArhAAAg");
		this.shape_22.setTransform(-39.1688,5.4688,1.0002,0.9999);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#D63C41").s().p("Ag9A8QgFgFABgGQAAgwAjghQAhghAwABQAGAAAFAEQAFAFAAAHQAAAGgGAFQgEAFgHAAQgjgBgXAZQgZAXAAAiQAAAHgFAFQgFAEgGAAQgIAAgEgFg");
		this.shape_23.setTransform(-38.9438,-8.9282,1.0002,0.9999);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#D63C41").s().p("AgfAgQgigjABgvQAAgGAFgFQAEgFAHAAQAHAAAEAFQAFAFAAAHQAAAiAYAYQAXAZAjAAQAGAAAFAFQAFAFgBAHQAAAHgEAEQgFAFgHAAQgwgBgggig");
		this.shape_24.setTransform(-41.9173,-6.078,1.0002,0.9999);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#D63C41").s().p("AglA6QgDgGADgGQACgGAGgDQAYgLAIgXQAJgXgKgYQgCgGACgGQACgHAGgCQAGgDAHACQAGADADAGQAPAkgOAjQgOAkgjARIgGABQgLAAgEgKg");
		this.shape_25.setTransform(28.6112,-39.7828,1.0002,0.9999);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#D63C41").s().p("AAlAeQgKgYgYgIQgYgJgXAKQgGACgGgCQgHgCgCgGQgDgGACgGQADgHAGgDQAkgPAjAOQAlAOAQAjQACAGgCAGQgCAHgHACQgDACgDAAQgLAAgEgKg");
		this.shape_26.setTransform(29.4543,-43.1329,1.0002,0.9999);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#D63C41").s().p("AgyBBQgGAAgFgEQgFgFAAgHQABgwAiggQAigiAwABQAGAAAFAFQAFAEAAAHQAAAHgFAFQgFAEgHAAQgigBgYAZQgZAXAAAjQAAAGgFAFQgFAEgGAAg");
		this.shape_27.setTransform(-6.4638,21.6199,1.0002,0.9999);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#D63C41").s().p("AAxBDQgwgBghgiQghgiABgwQAAgGAEgFQAFgFAHABQAHAAAEAEQAFAFAAAHQgBAjAZAYQAXAYAiABQAHAAAFAFQAEAEAAAHQAAAGgFAFQgEAFgHAAg");
		this.shape_28.setTransform(-9.4146,24.4929,1.0002,0.9999);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#D63C41").s().p("AAAAhQg0AAgmgjQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAcAbAngBQAoAAAcgcQAFgFAGAAQAHAAAFAEQAFAFAAAHQAAAGgFAFQglAlg1ABg");
		this.shape_29.setTransform(45.9942,-17.1773,1.0002,0.9999);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#D63C41").s().p("ABlBEQgFgFAAgHQAAgogcgbQgcgcgoAAQgnAAgcAcQgcAbAAAoQAAAHgFAFQgFAEgGAAQgHAAgFgEQgFgFAAgHQAAg1AmglQAmglA0AAQA1AAAmAlQAmAlAAA1QAAAHgFAFQgFAEgGAAQgHAAgFgEg");
		this.shape_30.setTransform(43.7939,-9.9278,1.0002,0.9999);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#D63C41").s().p("AgvBEQgGAAgFgEQgFgFAAgGQAAgHAEgFQAFgFAGAAQAjgCAWgZQAYgYgCgkQAAgGAEgFQAFgFAHAAQAGgBAFAFQAFAEABAHQABAxggAhQggAkgvACg");
		this.shape_31.setTransform(-3.8125,47.7162,1.0002,0.9999);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#D63C41").s().p("AAwB0QguAAggggQgjgggBgwQgCgvAhgjQAhgjAvgCQAHAAAEAEQAFAFAAAHQABAGgFAFQgEAFgHAAQgjABgWAaQgYAYABAjQABAjAZAXQAZAYAigBQAHgBAFAFQAFAFAAAGQAAAHgEAFQgFAEgHABg");
		this.shape_32.setTransform(6.0623,42.9665,1.0002,0.9999);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#D63C41").s().p("AA0ByQgFgFAAgGQAAgHAFgEQAfgeACgrQABgqgegfQgdgfgqgBQgrgBgfAdQgFAFgGgBQgHAAgFgFQgEgEAAgHQAAgHAFgEQApgnA4ACQA3ABAnApQAmApgBA3QgCA4goAnQgFAEgHAAQgHAAgEgFg");
		this.shape_33.setTransform(-33.4901,-12.3804,1.0002,0.9999);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#D63C41").s().p("ABXBpQgGgEgCgGQgCgHAEgFQAWgmgLgpQgKgogmgWQgkgWgpALQgpALgWAkQgEAGgGACQgHACgGgEQgFgDgCgHQgCgGAEgGQAcgwA3gPQA1gOAxAdQAwAcAOA3QAOA2gcAwQgFAIgJAAQgFAAgDgCg");
		this.shape_34.setTransform(43.8131,28.692,1.0002,0.9999);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#D63C41").s().p("AhFA2QgggYgKglQgBgHADgFQAEgGAGgCQAHgCAFAEQAGADACAHQAIAgAdARQAdARAggJQAhgIARgdQARgcgIghQgCgGADgGQAEgGAGgCQAHgBAFADQAGAEACAGQALAugXAnQgYApguAMQgNADgOAAQgnAAgegXg");
		this.shape_35.setTransform(7.3047,-19.9747,1.0002,0.9999);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#D63C41").s().p("AhGA2QgfgYgKglQgCgGAEgGQADgGAHgCQAGgBAGADQAGAEABAGQAJAgAdARQAdARAggIQAggJARgdQASgcgJghQgBgGADgGQADgGAHgBQAGgCAGADQAGAEABAGQAMAugYAoQgYAogtAMQgOADgOAAQgmAAgfgXg");
		this.shape_36.setTransform(-27.8284,-34.6126,1.0002,0.9999);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#DB5B58").s().p("ADyIFQgYgNgPgXQgQAXgaANQgaAOgfAAQgeAAgagOQgagNgQgXQgPAXgaANQgbAOgeAAQgfAAgagOQgagNgQgXQgQAXgaANQgaAOgeAAQglAAgegUQgdgTgNgfQggAcgqAAQgvAAggghQghggAAgvQAAgIABgHQgJACgNAAQguAAghghQggggAAgvQAAgkAVgdQgkgKgXgdQgYgfAAgmQAAgiATgcQATgaAegNQggghAAgtQAAgvAhggQAhghAuAAIALABQgEgPAAgPQAAguAgghQAhggAuAAQAWAAAWAJQABguAhgfQAgggAuAAQAlAAAdAWQAKgjAegWQAdgWAlAAQAZAAAXALQAWAKAPATQAOgbAbgRQAbgRAfAAQAgAAAbASQAaAQAOAcQAQgTAWgLQAXgLAZAAQAlAAAeAWQAdAWALAjQAdgWAlAAQAtAAAhAgQAgAfABAuQAWgJAWAAQAuAAAhAgQAhAhAAAuQAAAPgEAPIALgBQAuAAAhAhQAgAgAAAvQAAAsggAiQAfANASAaQATAcAAAiQAAAngYAeQgXAdgkAKQAWAdAAAkQAAAvghAgQghAhguAAQgMAAgKgCIABAPQAAAvggAgQghAhguAAQgrAAgggdQgMAggcATQgcAUgjAAQgdAAgZgOg");
		this.shape_37.setTransform(0.6373,0.3216,1.0002,0.9999);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#D63C41").s().p("ADKIIQgpAkg5ABQg5AAgpgmQgpAmg6AAQg5AAgpgmQgpAmg6AAQgjAAgfgQQgfgQgUgcQgfARgiAAQg3ABgngkQgnglgEg1Qg4gBgngoQgmgoAAg4QAAgcAKgZQgggRgUghQgUggAAgmQABghAPgdQAOgcAZgTQgTgiAAgkQAAg0AjgnQAhgmAzgIIgBgEQAAg4ApgpQApgoA4AAIAXACQAMgtAkgcQAlgdAwAAQAdAAAZALQARgfAggTQAggSAlAAQAuAAAjAaQATgWAbgMQAbgNAeAAQAdAAAcANQAbANAUAWQAjgbAuAAQAlAAAgASQAfATASAfQAagLAcAAQAwAAAkAdQAlAcAMAtIAXgCQA5AAAoAoQAoApAAA4IAAAEQAyAIAiAmQAjAnAAA0QAAAmgUAgQAaATAOAcQAPAdABAhQAAAmgUAgQgTAhghARQAKAZAAAcQAAA4gmAoQgnAog4ABQgEA1goAlQgnAkg1gBQgjAAgfgRQgUAcgdAQQgdAQgjAAQg2gBgngkg");
		this.shape_38.setTransform(0.6623,0.3466,1.0002,0.9999);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Brain, new cjs.Rectangle(-79.8,-55.3,160.89999999999998,111.3), null);


	(lib.Yeux = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#30343D").s().p("AClBBQgQgBgNgJQgPgJgGgQQgGgPACgQQABgQAJgOQACgFAEgEQAQgbAfAEQATACAMAPQAOAQADAVQAEAUgHAUQgJAcgeAFIgJABIgGAAgAioBAQgQgBgNgJQgPgJgGgQQgGgPACgPQABgQAJgOQACgFAEgEQAQgbAfAEQATACAMAPQAOAQADAVQAEAUgHAUQgJAcgeAFIgIAAIgHAAg");
		this.shape.setTransform(0.0227,-0.0058);

		this.instance = new lib.Yeux_fermé();

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},49).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-22.3,-6.5,44.7,13);


	(lib.Zzz_animated = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// Calque_1
		this.instance = new lib.Zzz("synched",0);
		this.instance.setTransform(-17.85,11.85,1,1,0,0,0,-3.5,-5.7);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:105.35,y:-66.85},38).to({_off:true},1).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-29.6,-77.5,150,98);


	(lib.Corps_gonfle = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// Calque_1
		this.instance = new lib.Brain();
		this.instance.setTransform(0,0.1,1.0378,1.0371,0,0,0,0,0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleX:1,scaleY:1,y:0.05},19).to({scaleX:1.0357,scaleY:1.0353,y:0.1},19).to({_off:true},1).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-82.8,-57.3,167,115.4);


	(lib.Bouche_respire = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// Layer_16
		this.instance = new lib.Bouche_fermé("synched",0);
		this.instance.setTransform(-2.45,-0.05);

		this.instance_1 = new lib.Bouche_ouverte();
		this.instance_1.setTransform(0.1,1.25);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_1}]},19).to({state:[]},1).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-21,-11.2,37.1,24.7);


	(lib.Brain_sleep = function(mode,startPosition,loop,reversed) {
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
		this.instance = new lib.Yeux_fermé();
		this.instance.setTransform(0.1,-9.35);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

		// Bouche
		this.instance_1 = new lib.Bouche_respire("synched",0);
		this.instance_1.setTransform(-0.15,25.55,1,1,0,0,0,-2.5,1.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({startPosition:0},0).wait(1));

		// Zzz
		this.instance_2 = new lib.Zzz_animated("synched",0);
		this.instance_2.setTransform(114.15,-29.45,1,1,0,0,0,46.3,-26.2);

		this.instance_3 = new lib.Zzz_animated("synched",19,false);
		this.instance_3.setTransform(114.15,-29.45,1,1,0,0,0,46.3,-26.2);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{regX:46.3,regY:-26.2,x:114.15,y:-29.45}}]}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{regX:45.2,regY:-25.8,x:109.05,y:-33.6}}]},19).to({state:[{t:this.instance_2,p:{regX:46.3,regY:-26.2,x:114.15,y:-29.45}}]},20).wait(1));

		// Corps
		this.instance_4 = new lib.Corps_gonfle("synched",0);
		this.instance_4.setTransform(-0.2,-0.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({startPosition:0},0).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-83,-78.7,268,136.6);


// stage content:
	(lib.brainInterpersonnelle = function(mode,startPosition,loop,reversed) {
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
		this.instance = new lib.Yeux_fermé();
		this.instance.setTransform(150.85,367.5);

		this.shape = new cjs.Shape();
		this.shape.graphics.f("#30343D").s().p("AgBBAQgQgBgNgJQgPgJgGgQQgGgPACgPQABgQAJgOQACgFAEgEQAQgbAeAEQATACAMAPQAOAQADAVQAEAUgHAUQgJAcgeAFIgIABIgGgBg");
		this.shape.setTransform(134.0727,366.3692);

		this.instance_1 = new lib.Yeux("synched",0);
		this.instance_1.setTransform(150.85,366.45);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},99).to({state:[{t:this.instance_1}]},30).to({state:[{t:this.instance_1}]},30).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},14).wait(52));
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({_off:false},0).wait(30).to({scaleY:0.4231,startPosition:15},0).wait(15).to({startPosition:30},0).wait(14).to({scaleY:1,startPosition:0},0).wait(52));

		// Bouche
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFF5F0").s().p("AlXHDQjNgPjUguQh/gbjBg3Qimgwh2gzQhigrhZg5QjRiFiijGQAug1BghIQASgNAbgRQA4ghA1gUQBYggC6AKQCJAHEBAkIHBBAQEGAhCwADQEYAGHbgwQG/gtCQgoQAwgNAmgEQBQgIBKATQAtAMAzAcQCXBPChCEQkREsksCgQjNBtjTAmQhzAVjeAIQiUAGm+AGg");
		this.shape_1.setTransform(152.8366,407.9185,0.0762,0.0762);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFF5F0").s().p("AalBVQgugCg8gEIgzgDQiVgLh3gQIl3gwIXGAoQh/AQiOANQjBAQiKAAQgpAAglgBgAsZgrIFYgXQEygUCXADQDDAFErAgQB9AOESAhgA5CgEQmJgGl/hLIYxAqImeAbQhyAHg+ACQhRADhTAAIg3AAgAsZgrg");
		this.shape_2.setTransform(152.3413,398.564,0.0762,0.0762);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFF5F0").s().p("AF8F4Ik8gEIo/gEQkRgCicgIQl0gTkihWQhegchHgfQhdgnhUg4QkJiripkvMBKVAB/QhpCBiFBmQhZBEhmA2QiIBIiyA6Qj+BSkdAeQi3ATl5AJIhdABIhAAAg");
		this.shape_3.setTransform(152.3413,400.7716,0.0762,0.0762);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#9F1D2E").s().p("ANSBeQkEgchtgIQjtgTkNgFQkDgEjlALQhfAEj+ASQl6AblggdQotgtoliPMBUVACGQoGBioYAUQhbADhdAAQkoAAk7gig");
		this.shape_4.setTransform(152.6632,398.3767,0.0762,0.0762);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#9F1D2E").s().p("AAmNwQk0gFijgJQmPgWjKg0QpuiioWqpQkml4jWnIMBUVACIQkkIolZF6QoLI/o+BbQjZAjmhAAQiIAAidgEg");
		this.shape_5.setTransform(152.6632,404.1351,0.0762,0.0762);

		this.instance_2 = new lib.Yeux_fermé();
		this.instance_2.setTransform(152.4,403.6,0.0762,0.0762,0,0,0,0.7,0.7);

		this.instance_3 = new lib.Brain();
		this.instance_3.setTransform(152.4,404.25,0.0762,0.0762,0,0,0,0.7,0.7);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#30343D").s().p("AAAAFIgBgBIgCgCIAAgCIAAgBIABgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIACACIABACIAAADQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAIgBAAg");
		this.shape_6.setTransform(151.075,403.4958);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FFF5F0").s().p("AglBrQjkgHjlgzIlmheQgsgMgpgJIehgLQBJgPA8gGQDQgXDvApIpEADQhhAUh4AjQj9BIhrAVQjBAljQAAIhLgBgAyohpQBvAGCQAhIqSAEQDSg2DBALgAuphCIAAAAg");
		this.shape_7.setTransform(151.5244,396.5048,0.0742,0.0742);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FFF5F0").s().p("AkwFhQovgOnpgvQi5gSiDglQjghAiviGQhfhIhFhSQDzibEPhFMAx2gASQGLBEFsDUIgqAjQgiAdg6AjQhyBKh0AqQlWB9rPA8QjhASjrAKIi+AGIh3ABQiTAAjDgFg");
		this.shape_8.setTransform(152.4336,398.5589,0.0742,0.0742);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FFF5F0").s().p("AXPFoQhcgDk0gpQkTgkjNgTQl0gikuACQjFACkMATQieAMlnAgQkEAXhVACQinADibgiQkYg+j6inQDbiND1haQB3gsCWgfQD5gzF2geQFYgbH3gDQGlgCCOACQDfAEClAOQHfArFMBnQD6BODPCAQAoAaAeAVQiwCnjVBNQieA5i0AAIggAAg");
		this.shape_9.setTransform(152.0959,404.6283,0.0742,0.0742);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#9F1D2E").s().p("APFF+Ql6g8hKgJQk3gnlOgFQk4gEkfAbQhNAIlSAsQjQAbiEgEQiygEjEg4Qlxhpjli8QhahIhihtIitjNMBYHgAtQjDD8jwC5Qk1DvleBjQjLA6i+ABIgEABQiNAAjfgkg");
		this.shape_10.setTransform(152.3278,404.0348,0.0742,0.0742);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#9F1D2E").s().p("AqrlFQLCBQKVI7g");
		this.shape_11.setTransform(168.181,398.5185,0.0742,0.0742);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#9F1D2E").s().p("AgvBmQkDgEjrgqQhvgUj1g8QhxgchXgQMAjLgATIAOgCQDAgaDWAZImkADQh1ASjKA1QjnA9iLAWQjWAkjzAAIg3gBgAy6hUQAyAFA/ALIncAEQC+gkCtAQgAxJhEIAAAAg");
		this.shape_12.setTransform(151.4261,396.7764,0.0742,0.0742);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#9F1D2E").s().p("AIylOIxjKdQICoqJhhzg");
		this.shape_13.setTransform(135.5729,398.7819,0.0742,0.0742);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.instance_3},{t:this.instance_2},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},129).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},30).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},15).to({state:[{t:this.shape_6},{t:this.instance_3},{t:this.instance_2},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},14).wait(52));

		// Bras_gauche
		this.instance_4 = new lib.Bras_gauche();
		this.instance_4.setTransform(75.5,389.5,1,1,0,0,0,10.7,27.7);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(185).to({_off:false},0).wait(6).to({regY:27.6,rotation:-150.0008,x:75.45,y:389.45},10).wait(39));

		// Bras_droite
		this.instance_5 = new lib.Bras_droite();
		this.instance_5.setTransform(239.9,361.8);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(185).to({_off:false},0).wait(6).to({regX:-9.7,regY:26.1,x:230.2,y:387.9},0).to({regY:26.2,rotation:-18.1698,x:230.25,y:388},4).to({rotation:10.7326,x:230.15,y:388.1},4).to({rotation:-18.1698,x:230.25,y:388},4).to({rotation:10.7326,x:230.15,y:388.1},4).to({rotation:-18.1698,x:230.25,y:388},4).to({rotation:10.7326,x:230.15,y:388.1},3).to({rotation:-18.1698,x:230.25,y:388},12).to({regX:-9.6,scaleX:0.9999,scaleY:0.9999,rotation:146.04,y:387.95},13).wait(1));

		// Jambes
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#30343D").s().p("AAYEEIhIgQQgHgCgDgGQgDgGADgHQgHgCgDgHQgEgGACgHQAYhLAUgoQAcg9AngnQASgQgBgNQgBgMgKgRIgpg2QgyhEgpgkQgMgLAMgNQAMgMANALQAtAqA0BFIApA5QAUAjgIAeQgEAMgNANIgXAXQgVAZgQAgQgVApgXBFQAmALAiAbQALAJgIALQgHAKgJAAIgEgBg");
		this.shape_14.setTransform(167.3998,453.7093);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#30343D").s().p("AhDD7QgFgGAAgHQADgkAjgOQASgIAYACQgRg9gPglQgJgZgRgkIgbg6QgGgNAGgOQADgGAMgSIBuihQAJgNAPAIQAPAJgKAOIhpCbIgKANQgIALABADIAMAXQAzBsAfByQABAGgCAGIgBAGQgDAPgOAKQgNAIgPgBIg4AIIgBAAQgGAAgGgFg");
		this.shape_15.setTransform(132.5315,454.0129);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},174).to({state:[{t:this.shape_15},{t:this.shape_14}]},11).wait(55));

		// Corps
		this.instance_6 = new lib.Brain_sleep("synched",0);
		this.instance_6.setTransform(200.6,363.9,1,1,0,0,0,49.6,-13);

		this.instance_7 = new lib.Brain();
		this.instance_7.setTransform(150.85,375.95);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},99).to({state:[{t:this.instance_7}]},30).to({state:[{t:this.instance_7}]},30).to({state:[{t:this.instance_7}]},15).to({state:[{t:this.instance_7}]},11).wait(55));
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},0).wait(141));

		this._renderFirstFrame();

	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(167.5,538.2,168.5,-58.400000000000034);
// library properties:
	lib.properties = {
		id: 'CD482840D6856540B01D8416294FF8F7',
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
	an.compositions['CD482840D6856540B01D8416294FF8F7'] = {
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


})(createjsInterpersonnelle = createjsInterpersonnelle||{}, AdobeAn = AdobeAn||{});
var createjsInterpersonnelle, AdobeAn;
