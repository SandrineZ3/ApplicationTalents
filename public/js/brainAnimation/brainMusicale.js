var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function brainCharacterAnimationMusicale() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("413CE3CDF281E246A24738DB38EE3999");
	var libMusicale=comp.getLibrary();
	handleCompleteMusicale({},comp);
}
function handleCompleteMusicale(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var libMusicale=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new libMusicale.brainMusicale();
	stage = new libMusicale.Stage(canvas);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = libMusicale.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);
	AdobeAn.compositionLoaded(libMusicale.properties.id);
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


	(lib.Notes = function(mode,startPosition,loop,reversed) {
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
		this.shape.graphics.f("#30343D").s().p("Ah5CtQgOgSADgYQADgXASgPQAYgVAogEQgphNgdhAQgDgGABgFQgDgGABgGQACgGAHgEQAwgbArgiQABgGAGgFQAFgEAGAAIADgDQAMgLANAMQAMAMgNALIgFAEQApBIA/A4QAFAFAAAGQAKAKgIAJQgQAVgMAMQgRARgSAHQgUAIgQgDQgUgDgFgUQgEgSAHgSQAHgRAQgLQAOgJAUgDQgcgegWgfQgkAigrAYIA6BxQAGANgKAJQAAAVgLAWQgKAWgQAPQgSAQgVAAQgWAAgOgTgAhUhSIAGAMQAsgaAggdIAAgBIgFgIQgjAbgqAZg");
		this.shape.setTransform(26.9428,-10.8074);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#30343D").s().p("AgHCrQgegCgTgWQgUgYABgcQABgeAagQQAegSAuAIIhKihQgDgFAAgGQABgHAGgEQAFgEAFgBIApgUQAPgHAJAPQAJAPgPAHIgjARIBSCyQADAGgCAHQADAYgIAXQgJAXgSAQQgTARgYAAIgHgBgAgUBKQgQAFgEAQQgEAPANANQAOAOAQAAQAQAAAMgPQAQgUgCgZQgWgGgSAAQgLAAgKADg");
		this.shape_1.setTransform(-1.1226,12.8032);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#30343D").s().p("AhACcQgXgIgMgUQgPgZAIgZQAIgZAbgNQAegNApANQgfg+gug3QgHgHACgJQADgJAJgEICeg1QAQgFAEAQQAEARgPAFIiFAtQA2BIAfBPQADAIgFAGQgEAGgIABQgIAogeATQgFAKgMgCQgJADgKAAQgMAAgNgFg");
		this.shape_2.setTransform(-29.2981,12.82);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Notes, new cjs.Rectangle(-40.2,-29.9,80.5,59.9), null);


	(lib.Brain_danse = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// MergedLayer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#30343D").s().p("ADmA9IgSgBQgQgCgPgGQgPgHgKgMQgLgOAEgQQADgQAKgMIAFgGQAMgWAZgEQARgDARAFQAWAHANAVQANAWgDAZQgDAZgWAKQgMAGgOAAIgCAAgAjIA8IgTgBQgQgCgOgGQgPgHgLgMQgKgOADgQQADgQALgMIAFgGQALgWAZgEQASgDAQAFQAXAHAMAVQANAWgDAZQgDAZgWAKQgMAGgNAAIgCAAg");
		this.shape.setTransform(21.4594,-39.4512);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#30343D").s().p("Ag0D/QgJAAgFgHQgFgGACgJQAGgTARgNQAQgNAVgDQAOgCAcADQAfADAMAAQgLgTgYgSQgMgJgegTIhFgoIgXgPQgMgJgHgKQgHgMADgUIAHggIA3jkQAEgRARAFQARAFgEAQIg3DkIgGASQgDANACAGQACAFAGAEIAKAGIA7AiQAhAUAXAQQA2AmAMArQADAHgEAGQABAHgDAGQgDAGgHACQg/AYhDAAIgagBgAgKDdQAMAAAQgDIgCAAIgHAAQgKAAgJADg");
		this.shape_1.setTransform(34.2302,52.4213);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#30343D").s().p("AgoD7QgNgWAOgWQANgVAYgFQAXgEA+gFQhfhKh3gXQgIgBgDgJQgEgIAFgHQAkgxArheIBFicQAHgPAPAJQAPAJgHAPIhIChQggBGgeAvQCGAhBmBfQAIAHgDAJQgCAIgJAEIgEAEQhGAvhUAGQgJAAgGgJg");
		this.shape_2.setTransform(1.2797,53.4847);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#30343D").s().p("AkIB5QgHgFAAgIIAAgDQgbgRgGgXQgGgaAXgZQATgUAbgMQAYgLAfABQAHAAAGAGIAKAMIAUATQAzAwA4AVQBDAZA+giQBog5BMiAQAJgOAPAJQAPAJgJAOQgqBHg6A4QhGBDg6ATQg8AThCgZQg6gVg1gyQgEAQgMAKIgBABIgMAdQgLAdgagCQgEAAgFgCIgMAFIgFABQgGAAgEgEgAjFAGIAFAEIABgBIgDgEg");
		this.shape_3.setTransform(-79.9083,3.3535);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#30343D").s().p("AkRDxQgQgFgHgEQgWgHgOgSQgOgTACgXQAFgtAmgjQAQgVALgIQARgPARACIAIACQAygRA/AGQAxAFBBAVIBNAaQAtAOAjADQBeALAogmQAZgYAAgqQAAgXgLgxQgUhSgfhGQgGgPAPgJQAPgJAGAPQAzBzANBkQAMBSgwAmQgxAnhKgCQhBgChbgeQgygSgbgHQgtgNgigDIgGAAQADAPgPAFQgSAGgLAaQgGAPgIAcQgWA5grANQgCAGgFADQgDACgDAAIgGgCg");
		this.shape_4.setTransform(76.0437,5.4347);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#D63C41").s().p("AA/BuQgpgIgWgdQgXggAIgsQAGgggRgVQgQgRgagFQgbgEgWAPQgWAPgGAbQAAAHgGAEQgGADgGgBQgGgBgFgFQgDgGABgGQAHgpAhgWQAjgYAnAIQArAIAVAfQAVAegHAqQgGAfAPAVQAQAUAcAEQAaAGAXgQQAXgQAEgaQABgHAFgEQAHgEAGACQAHABADAFQAEAGgBAGQgHAkgbAWQgcAXgiAAg");
		this.shape_5.setTransform(-21.7,4.3593);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#D63C41").s().p("AA/BuQgrgHgVgfQgWgfAIgqQAFgdgOgVQgOgVgegFQgbgFgWAPQgWAQgFAbQgBAGgGAEQgFAEgHgBQgHgCgDgFQgEgGABgGQAHgoAigXQAhgXAoAHQAqAIAVAfQAWAggHAqQgGAgARAVQAPARAbAFQAbAFAWgQQAWgQAFgaQABgHAGgEQAFgDAHABQAGABAEAFQAEAGgBAGQgHAkgbAWQgbAXgjAAg");
		this.shape_6.setTransform(2.5657,8.9683);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#D63C41").s().p("ABKB+QgvgIgZgiQgagkAJgxQAGgkgRgZQgSgZgjgHQghgFgbASQgbATgGAgQgBAHgFAEQgGAEgGgCQgHgBgEgFQgDgFABgHQAHguAngaQAmgbAtAJQAxAIAZAlQAYAkgIAvQgHAmATAYQASAXAiAGQAhAHAagTQAcgUAFggQABgGAGgEQAGgEAGABQAHABAEAGQADAGgBAGQgIAugmAaQgdAUgjAAIgUgCg");
		this.shape_7.setTransform(50.075,1.9718);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#D63C41").s().p("AinBLQgRgmAPgmQAPgmAmgRQAogSAlAOQAlAPARAoQANAcAZAJQAYAIAbgMQAagMAKgZQAKgagLgaQgDgGADgGQADgHAGgCQAFgDAGADQAHACACAGQASAmgPAmQgQAmglARQgoARgkgMQglgNgSgqQgNgbgYgKQgZgJgcAMQgaALgKAaQgKAaALAaQACAGgCAGQgCAHgGACIgGACQgMAAgDgKg");
		this.shape_8.setTransform(20.6,-19.8125);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#D63C41").s().p("AhlBSQgpgIgXgjQgXgiAIgoQACgHAFgDQAFgEAHABQAHABADAGQAEAGgCAGQgEAcAPAWQAQAYAbAFQAfAGAWgOQAWgPAFgeQAJgrAggWQAggVAsAJQApAIAWAiQAYAjgIAnQgCAHgFAEQgGADgGgBQgGgBgEgGQgEgFABgHQAGgcgQgWQgQgXgcgGQgbgFgVALQgYANgHAhQgHAlgZAWQgaAWgkAAQgMAAgLgCg");
		this.shape_9.setTransform(64.45,-17.0328);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#D63C41").s().p("AAPBRQgegfAAgxQAAgkgVgVQgWgWglAAQggAAgYAYQgXAXAAAgQAAAHgFAEQgEAFgHAAQgHAAgFgFQgEgFAAgGQgBgtAighQAhghAtAAQAyAAAfAfQAfAfAAAxQgBAoAaAUQAVASAhAAQAhAAAXgXQAXgYAAggQAAgGAFgFQAFgFAGAAQAIAAAEAFQAEAFABAGQgBAuggAhQghAgguAAQgyAAgfgeg");
		this.shape_10.setTransform(16.4,-66.075);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#D63C41").s().p("AhNAbQgFgEAAgHQAAgGAEgFQAeghAvgDQAtgCAiAfQAFADAAAHQAAAGgEAFQgFAFgGABQgHAAgFgEQgYgVggABQggABgWAYQgFAGgHAAQgFAAgGgFg");
		this.shape_11.setTransform(71.15,-50.1812);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#D63C41").s().p("AgQBPQgFgEAAgHQgBgGAEgGQAVgYgDggQgBgggZgWQgFgEgBgHQAAgGAEgFQAEgFAHgBQAHAAAFAEQAiAeADAuQAEAsgeAjQgFAGgGAAQgGAAgFgEg");
		this.shape_12.setTransform(65.0707,-55.3028);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#D63C41").s().p("AgjApQgHgBgEgFQgDgGABgGQAEgeAZgSQAYgTAfAFQAHABADAFQAFAGgBAGQgBAHgGAEQgFAEgGgBQgSgDgOAKQgOAKgDASQgCANgNAAg");
		this.shape_13.setTransform(49.55,23.381);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#D63C41").s().p("AAXAxQgGAAgEgGQgEgFAAgHQACgRgLgOQgJgNgSgDQgHAAgEgGQgEgFABgHQABgGAFgEQAFgEAHAAQAdAEAUAZQATAYgEAeQAAAGgFAEQgFAEgGAAg");
		this.shape_14.setTransform(43.6563,22.5972);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#D63C41").s().p("AAhAqQgHAAgEgEQgFgEAAgGQgDgSgOgKQgNgLgRACQgHABgFgEQgFgEgBgHQgBgGAEgGQAFgFAGgBQAegDAYATQAZATAEAeQABAHgFAFQgEAGgHAAg");
		this.shape_15.setTransform(12.2063,-36.2772);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#D63C41").s().p("AgZAyQgNAAgDgOQAAgGAEgGQAEgFAGgBQASgDAJgOQALgNgCgSQgBgGAEgGQADgFAHgBQAHgBAFAEQAGAEABAGQAEAfgTAYQgSAZgeAFg");
		this.shape_16.setTransform(11.4578,-42.2031);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#D63C41").s().p("AATBMQgHgCgCgGQgDgGACgGQAMgfgNgdQgNgegegLQgHgCgCgHQgDgGACgGQADgGAGgDQAGgCAGACQAqAQATAqQATApgQArQgEAKgMAAIgFgBg");
		this.shape_17.setTransform(88.3339,-2.4694);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#D63C41").s().p("AhBAqQgGgCgDgHQgDgGACgGQADgGAFgDQAGgDAHACQAeALAdgOQAdgNALgfQADgHAFgDQAGgCAHACQAGACADAGQADAGgCAGQgQArgpAUQgVALgaAAQgTAAgSgGg");
		this.shape_18.setTransform(91.3374,-11.2444);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#D63C41").s().p("AANBPQgmgYgJguQgKgsAZgmQAEgGAHgBQAGgBAFADQAFAEACAGQABAHgEAFQgQAcAGAfQAGAgAbARQAGAEABAHQACAGgEAGQgFAHgJAAQgFAAgDgDg");
		this.shape_19.setTransform(-34.2853,-22.6611);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#D63C41").s().p("AhJAkQgGgDgBgHQgBgGADgGQAYgmAtgLQArgLAnAZQAHADABAHQACAGgEAFQgEAFgGACQgGACgGgEQgdgQgeAIQgfAGgRAcQgGAIgJAAQgDAAgFgDg");
		this.shape_20.setTransform(-38.65,-15.2454);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#D63C41").s().p("AgIA/QgFgEgBgHQgBgGAEgGQANgSgDgWQgDgWgTgOQgFgEgBgGQgBgHADgGQAEgFAHgBQAHgBAFAEQAcAWAGAjQAFAjgVAdQgFAHgIAAQgEAAgFgDg");
		this.shape_21.setTransform(53.446,-44.0861);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#D63C41").s().p("AgHA/QgGgEgBgHQgBgGAEgGQAMgSgCgWQgEgWgSgOQgFgEgBgHQgBgGAEgGQAEgFAGgBQAHgBAFAEQAcAWAGAjQAFAjgVAdQgFAHgIAAQgEAAgEgDg");
		this.shape_22.setTransform(96.0471,-26.0861);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#D63C41").s().p("AAbArQgcABgVgWQgVgUAAgdQAAgGAFgFQAEgFAHABQAHgBAEAFQAFAFAAAGQAAARALAKQAMALAPAAQAHAAAFAFQAFAFAAAGQAAAHgEAFQgGAEgGAAg");
		this.shape_23.setTransform(-31.9,11.75);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#D63C41").s().p("Ag+BAQgFgEAAgHQAAgyAigiQAigkAyAAQAHgBAEAFQAFAFAAAHQABAGgFAFQgFAFgHAAQgkAAgZAaQgZAZAAAlQAAAGgEAFQgFAFgHAAQgGAAgFgFg");
		this.shape_24.setTransform(-33.7981,-43.5523);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#D63C41").s().p("AhjASQgGgDgBgHQgCgHAEgEQAFgGAGgBQAGgBAGAEQAnAaAugJQAvgIAbgmQAEgGAHgBQAGgBAFAEQAGADABAHQABAGgDAGQgWAdggARQggAQgjAAQguAAglgag");
		this.shape_25.setTransform(35.3,-30.885);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#D63C41").s().p("AgbBOQgEgFAAgGQAAgHAFgEQAZgWABghQAAgggVgYQgEgFAAgHQAAgHAFgEQAFgFAHABQAGAAAEAFQAfAigCAtQgCAughAfQgEAFgHAAQgGAAgGgGg");
		this.shape_26.setTransform(-14.0965,-9.5025);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#D63C41").s().p("AgCAoQhEgCgvgyQgFgFABgHQAAgHAFgEQAFgFAGABQAHAAAEAFQAmAoA4ACQA2ADApglQAFgFAHABQAHAAAEAFQAFAFgBAGQAAAHgFAFQgwArhAAAg");
		this.shape_27.setTransform(-14.025,-18.6525);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#D63C41").s().p("Ag9A8QgFgEAAgHQABgwAiggQAigiAwABQAGAAAFAFQAFAEAAAHQAAAHgFAEQgFAFgHAAQgigBgYAZQgZAXAAAjQgBAGgEAFQgFAEgHAAQgGAAgFgFg");
		this.shape_28.setTransform(-13.825,-33.0754);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#D63C41").s().p("AAxBDQgwgBghgiQghghABgxQAAgGAEgFQAFgFAHABQAHAAAEAEQAFAFAAAHQgBAiAYAYQAYAZAiABQAHAAAFAFQAEAEAAAHQAAAGgFAFQgEAFgHAAg");
		this.shape_29.setTransform(-16.7764,-30.2023);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#D63C41").s().p("AglA6QgDgGACgGQADgHAGgCQAXgKAJgZQAJgXgKgYQgCgGACgGQACgGAGgDQAGgCAGACQAHACACAHQAQAjgOAkQgOAlgjAPQgDACgEAAQgKAAgEgKg");
		this.shape_30.setTransform(53.7129,-63.8875);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#D63C41").s().p("AAlAeQgKgXgYgJQgYgJgXAKQgHACgGgBQgGgDgDgGQgCgGACgGQACgHAHgCQAjgQAkAOQAlAOAPAjQADAGgCAHQgDAGgGADIgGABQgKAAgFgKg");
		this.shape_31.setTransform(54.5693,-67.2697);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#D63C41").s().p("Ag9A8QgFgEAAgHQABgwAighQAighAwABQAGAAAFAEQAFAFgBAHQAAAGgFAFQgEAFgHAAQgjAAgXAXQgZAYgBAiQAAAHgEAFQgFAEgHAAQgGAAgFgFg");
		this.shape_32.setTransform(18.6523,-2.4754);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#D63C41").s().p("AgfAgQgigiABgwQAAgGAFgFQAEgFAHAAQAHAAAFAFQAEAFAAAHQAAAiAYAYQAXAZAjAAQAGAAAFAFQAFAFgBAHQAAAHgEAEQgFAFgHAAQgwgBgggig");
		this.shape_33.setTransform(15.6769,0.375);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#D63C41").s().p("AAAAhQg0AAgmgjQgFgFAAgGQAAgHAFgFQAFgFAGAAQAHAAAFAFQAcAaAnAAQAogBAcgbQAFgFAHAAQAGAAAFAFQAFAEAAAHQAAAHgFAEQgkAlg2ABg");
		this.shape_34.setTransform(71.075,-41.3023);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#D63C41").s().p("ABlBDQgEgEgBgHQAAgogcgbQgcgcgoAAQgnAAgcAcQgcAbAAAoQAAAHgFAEQgFAFgGABQgHgBgFgFQgEgEgBgHQABg1AlgkQAmgmA0AAQA1AAAmAmQAmAkAAA1QAAAHgFAEQgFAFgGABQgHgBgFgFg");
		this.shape_35.setTransform(68.9,-34.05);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#D63C41").s().p("AgvBEQgGAAgFgEQgEgFgBgGQAAgHAEgFQAFgFAHAAQAigBAXgaQAXgZgBgiQgBgHAFgFQAEgFAHAAQAGgBAFAFQAFAEABAHQACAwggAjQggAjgwACg");
		this.shape_36.setTransform(21.2814,23.5725);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#D63C41").s().p("AgeBVQgjgigCgvQgBgvAhgjQAhgjAvgCQAGAAAFAEQAFAFAAAHQABAHgFAEQgEAFgHAAQgjACgXAZQgYAZACAiQABAiAZAYQAYAYAjgBQAHAAAEAEQAFAFABAGQAAAHgFAFQgFAFgGAAIgEAAQgtAAghgfg");
		this.shape_37.setTransform(31.1717,18.8475);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#D63C41").s().p("AA0BzQgFgFAAgHQAAgHAFgEQAfgdABgsQACgqgegfQgdgfgqgBQgrgBgfAdQgFAFgHAAQgGAAgFgFQgFgFABgHQAAgGAFgFQAognA5ACQA3ABAnApQAnApgCA3QgCA5gpAmQgEAFgHAAQgGAAgFgFg");
		this.shape_38.setTransform(-8.3497,-36.5028);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#D63C41").s().p("ABWBoQgFgDgCgGQgCgHAEgGQAWgkgLgqQgLgoglgWQgkgWgpAKQgqALgWAlQgDAGgHACQgGABgGgDQgFgEgCgGQgCgHADgFQAdgxA3gOQA1gOAwAdQAxAcAOA3QAOA0gdAyQgFAIgIAAQgFAAgEgDg");
		this.shape_39.setTransform(68.9053,4.5944);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#D63C41").s().p("AhGA2QgfgYgKglQgBgGADgGQADgGAHgCQAGgBAGADQAGAEABAGQAJAfAdASQAeARAfgIQAggJASgdQARgcgJghQgBgGADgGQADgGAHgBQAGgCAGADQAGAEACAGQALAugYAoQgYAogtAMQgOADgOAAQgmAAgfgXg");
		this.shape_40.setTransform(32.4388,-44.1114);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#D63C41").s().p("AhGA2QgfgYgKglQgBgHADgFQADgGAHgCQAGgCAGAEQAGADACAHQAIAfAdASQAdARAggJQAggIASgdQARgcgJghQgBgHADgFQAEgGAGgCQAHgBAFADQAGAEACAGQALAugYAnQgYApgtAMQgOADgNAAQgnAAgfgXg");
		this.shape_41.setTransform(-2.7112,-58.7225);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#DB5B58").s().p("ADyIFQgYgNgQgXQgQAXgZANQgbAOgeAAQgeAAgagOQgagNgQgXQgPAXgaANQgbAOgeAAQgfAAgagOQgagNgRgXQgQAXgZANQgbAOgeAAQgkAAgegUQgdgTgOggQgfAdgrAAQguAAghghQggghAAguIABgPIgWACQguAAghghQggghAAguQAAglAVgcQgkgKgXgeQgYgeAAgmQAAgiATgcQATgbAegNQggggAAguQAAguAhghQAgggAvAAIALAAQgFgOAAgPQAAguAhghQAhggAuAAQAYAAAUAJQABguAggfQAhggAtAAQAlAAAdAVQALgiAdgWQAegWAlAAQAZAAAXALQAVAKAQATQAOgcAagQQAbgRAgAAQAfAAAcARQAaARAOAcQAQgTAWgLQAXgLAZAAQAlAAAeAWQAdAWAKAiQAegVAlAAQAtAAAhAgQAgAfABAuQAUgJAYAAQAuAAAhAgQAgAhAAAuQAAAOgEAPIALAAQAuAAAhAgQAhAhAAAuQAAAuggAgQAeANATAbQATAcAAAiQAAAmgYAeQgXAegkAKQAVAcAAAlQAAAuggAhQghAhguAAIgWgCQABAHAAAIQAAAuggAhQghAhguAAQgrAAgggdQgMAggcATQgdAUgjAAQgcAAgZgOg");
		this.shape_42.setTransform(25.775,-23.775);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#D63C41").s().p("ADKIIQgoAkg6AAQg5AAgpglQgpAlg5AAQg5AAgqglQgpAlg5AAQgkAAgfgPQgfgQgUgbQgeARgkAAQg1gBgngjQgoglgFg0Qg3gCgmgoQgngoAAg3QAAgcAKgZQgggSgUghQgTgggBgmQAAghAPgdQAPgbAagUQgTgggBgnQABgzAhgnQAigmAzgIIAAgDQAAg6AognQApgpA5AAQAMAAAKACQAMgsAlgdQAlgdAuAAQAcAAAaALQATgfAggSQAfgTAlABQAsgBAlAbQATgXAbgMQAcgMAdAAQAeAAAbAMQAcANASAXQAlgcAtABQAlgBAgATQAfASATAfQAagLAcAAQAvAAAlAdQAkAdAMAsQAKgCANAAQA5AAApApQAoAngBA6IAAADQAzAIAhAmQAjAnAAAzQAAAmgUAhQAaATAPAcQAOAdAAAhQAAAmgTAgQgTAhghASQALAZgBAcQAAA3gnAoQgnAog2ACQgFA0gnAlQgoAjg1ABQgkAAgegRQgSAbgeAQQgeAPgiAAQg2AAgogkg");
		this.shape_43.setTransform(25.75,-23.8);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#30343D").s().p("AgWAxQgIgCgHgGIgGgHQgHgGgCgHQgDgIAAgIQABgIAEgIQADgIAGgGIAFgFQAMgQAUgDQARgCAQAJQATALAGAVQAGATgNARQgMAPgRADQgKAFgKABIgGAAQgHAAgHgBg");
		this.shape_44.setTransform(7.9387,-36.5548);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44,p:{skewY:0,x:7.9387}},{t:this.shape_43,p:{skewY:0,x:25.75}},{t:this.shape_42,p:{skewY:0,x:25.775}},{t:this.shape_41,p:{skewY:0,x:-2.7112}},{t:this.shape_40,p:{skewY:0,x:32.4388}},{t:this.shape_39,p:{skewY:0,x:68.9053}},{t:this.shape_38,p:{skewY:0,x:-8.3497}},{t:this.shape_37,p:{skewY:0,x:31.1717}},{t:this.shape_36,p:{skewY:0,x:21.2814}},{t:this.shape_35,p:{skewY:0,x:68.9}},{t:this.shape_34,p:{skewY:0,x:71.075}},{t:this.shape_33,p:{skewY:0,x:15.6769}},{t:this.shape_32,p:{skewY:0,x:18.6523}},{t:this.shape_31,p:{skewY:0,x:54.5693}},{t:this.shape_30,p:{skewY:0,x:53.7129}},{t:this.shape_29,p:{skewY:0,x:-16.7764}},{t:this.shape_28,p:{skewY:0,x:-13.825}},{t:this.shape_27,p:{skewY:0,x:-14.025}},{t:this.shape_26,p:{skewY:0,x:-14.0965}},{t:this.shape_25,p:{skewY:0,x:35.3}},{t:this.shape_24,p:{skewY:0,x:-33.7981}},{t:this.shape_23,p:{skewY:0,x:-31.9}},{t:this.shape_22,p:{skewY:0,x:96.0471}},{t:this.shape_21,p:{skewY:0,x:53.446}},{t:this.shape_20,p:{skewY:0,x:-38.65}},{t:this.shape_19,p:{skewY:0,x:-34.2853}},{t:this.shape_18,p:{skewY:0,x:91.3374}},{t:this.shape_17,p:{skewY:0,x:88.3339}},{t:this.shape_16,p:{skewY:0,x:11.4578}},{t:this.shape_15,p:{skewY:0,x:12.2063}},{t:this.shape_14,p:{skewY:0,x:43.6563}},{t:this.shape_13,p:{skewY:0,x:49.55}},{t:this.shape_12,p:{skewY:0,x:65.0707}},{t:this.shape_11,p:{skewY:0,x:71.15}},{t:this.shape_10,p:{skewY:0,x:16.4}},{t:this.shape_9,p:{skewY:0,x:64.45}},{t:this.shape_8,p:{skewY:0,x:20.6}},{t:this.shape_7,p:{skewY:0,x:50.075}},{t:this.shape_6,p:{skewY:0,x:2.5657}},{t:this.shape_5,p:{skewY:0,x:-21.7}},{t:this.shape_4,p:{regX:0,regY:0,rotation:0,x:76.0437,y:5.4347,skewX:0,skewY:0}},{t:this.shape_3,p:{regX:0,regY:0,rotation:0,x:-79.9083,y:3.3535,skewX:0,skewY:0}},{t:this.shape_2,p:{skewY:0,x:1.2797}},{t:this.shape_1,p:{skewY:0,x:34.2302}},{t:this.shape,p:{skewY:0,x:21.4594}}]}).to({state:[{t:this.shape_44,p:{skewY:0,x:7.9387}},{t:this.shape_43,p:{skewY:0,x:25.75}},{t:this.shape_42,p:{skewY:0,x:25.775}},{t:this.shape_41,p:{skewY:0,x:-2.7112}},{t:this.shape_40,p:{skewY:0,x:32.4388}},{t:this.shape_39,p:{skewY:0,x:68.9053}},{t:this.shape_38,p:{skewY:0,x:-8.3497}},{t:this.shape_37,p:{skewY:0,x:31.1717}},{t:this.shape_36,p:{skewY:0,x:21.2814}},{t:this.shape_35,p:{skewY:0,x:68.9}},{t:this.shape_34,p:{skewY:0,x:71.075}},{t:this.shape_33,p:{skewY:0,x:15.6769}},{t:this.shape_32,p:{skewY:0,x:18.6523}},{t:this.shape_31,p:{skewY:0,x:54.5693}},{t:this.shape_30,p:{skewY:0,x:53.7129}},{t:this.shape_29,p:{skewY:0,x:-16.7764}},{t:this.shape_28,p:{skewY:0,x:-13.825}},{t:this.shape_27,p:{skewY:0,x:-14.025}},{t:this.shape_26,p:{skewY:0,x:-14.0965}},{t:this.shape_25,p:{skewY:0,x:35.3}},{t:this.shape_24,p:{skewY:0,x:-33.7981}},{t:this.shape_23,p:{skewY:0,x:-31.9}},{t:this.shape_22,p:{skewY:0,x:96.0471}},{t:this.shape_21,p:{skewY:0,x:53.446}},{t:this.shape_20,p:{skewY:0,x:-38.65}},{t:this.shape_19,p:{skewY:0,x:-34.2853}},{t:this.shape_18,p:{skewY:0,x:91.3374}},{t:this.shape_17,p:{skewY:0,x:88.3339}},{t:this.shape_16,p:{skewY:0,x:11.4578}},{t:this.shape_15,p:{skewY:0,x:12.2063}},{t:this.shape_14,p:{skewY:0,x:43.6563}},{t:this.shape_13,p:{skewY:0,x:49.55}},{t:this.shape_12,p:{skewY:0,x:65.0707}},{t:this.shape_11,p:{skewY:0,x:71.15}},{t:this.shape_10,p:{skewY:0,x:16.4}},{t:this.shape_9,p:{skewY:0,x:64.45}},{t:this.shape_8,p:{skewY:0,x:20.6}},{t:this.shape_7,p:{skewY:0,x:50.075}},{t:this.shape_6,p:{skewY:0,x:2.5657}},{t:this.shape_5,p:{skewY:0,x:-21.7}},{t:this.shape_4,p:{regX:25.4,regY:-23.7,rotation:126.9885,x:101.45,y:-18.1,skewX:0,skewY:0}},{t:this.shape_3,p:{regX:29.8,regY:-12.1,rotation:89.9991,x:-50.05,y:-8.75,skewX:0,skewY:0}},{t:this.shape_2,p:{skewY:0,x:1.2797}},{t:this.shape_1,p:{skewY:0,x:34.2302}},{t:this.shape,p:{skewY:0,x:21.4594}}]},6).to({state:[{t:this.shape_44,p:{skewY:180,x:27.2613}},{t:this.shape_43,p:{skewY:180,x:9.45}},{t:this.shape_42,p:{skewY:180,x:9.425}},{t:this.shape_41,p:{skewY:180,x:37.9112}},{t:this.shape_40,p:{skewY:180,x:2.7612}},{t:this.shape_39,p:{skewY:180,x:-33.7053}},{t:this.shape_38,p:{skewY:180,x:43.5497}},{t:this.shape_37,p:{skewY:180,x:4.0283}},{t:this.shape_36,p:{skewY:180,x:13.9186}},{t:this.shape_35,p:{skewY:180,x:-33.7}},{t:this.shape_34,p:{skewY:180,x:-35.875}},{t:this.shape_33,p:{skewY:180,x:19.5231}},{t:this.shape_32,p:{skewY:180,x:16.5477}},{t:this.shape_31,p:{skewY:180,x:-19.3693}},{t:this.shape_30,p:{skewY:180,x:-18.5129}},{t:this.shape_29,p:{skewY:180,x:51.9764}},{t:this.shape_28,p:{skewY:180,x:49.025}},{t:this.shape_27,p:{skewY:180,x:49.225}},{t:this.shape_26,p:{skewY:180,x:49.2965}},{t:this.shape_25,p:{skewY:180,x:-0.1}},{t:this.shape_24,p:{skewY:180,x:68.9981}},{t:this.shape_23,p:{skewY:180,x:67.1}},{t:this.shape_22,p:{skewY:180,x:-60.8471}},{t:this.shape_21,p:{skewY:180,x:-18.246}},{t:this.shape_20,p:{skewY:180,x:73.85}},{t:this.shape_19,p:{skewY:180,x:69.4853}},{t:this.shape_18,p:{skewY:180,x:-56.1374}},{t:this.shape_17,p:{skewY:180,x:-53.1339}},{t:this.shape_16,p:{skewY:180,x:23.7422}},{t:this.shape_15,p:{skewY:180,x:22.9937}},{t:this.shape_14,p:{skewY:180,x:-8.4563}},{t:this.shape_13,p:{skewY:180,x:-14.35}},{t:this.shape_12,p:{skewY:180,x:-29.8707}},{t:this.shape_11,p:{skewY:180,x:-35.95}},{t:this.shape_10,p:{skewY:180,x:18.8}},{t:this.shape_9,p:{skewY:180,x:-29.25}},{t:this.shape_8,p:{skewY:180,x:14.6}},{t:this.shape_7,p:{skewY:180,x:-14.875}},{t:this.shape_6,p:{skewY:180,x:32.6343}},{t:this.shape_5,p:{skewY:180,x:56.9}},{t:this.shape_4,p:{regX:25.4,regY:-23.7,rotation:0,x:-66.25,y:-18.1,skewX:-126.9885,skewY:53.0115}},{t:this.shape_3,p:{regX:29.8,regY:-12.1,rotation:0,x:85.25,y:-8.75,skewX:-89.9991,skewY:90.0009}},{t:this.shape_2,p:{skewY:180,x:33.9203}},{t:this.shape_1,p:{skewY:180,x:0.9698}},{t:this.shape,p:{skewY:180,x:13.7406}}]},4).to({state:[{t:this.shape_44,p:{skewY:180,x:27.2613}},{t:this.shape_43,p:{skewY:180,x:9.45}},{t:this.shape_42,p:{skewY:180,x:9.425}},{t:this.shape_41,p:{skewY:180,x:37.9112}},{t:this.shape_40,p:{skewY:180,x:2.7612}},{t:this.shape_39,p:{skewY:180,x:-33.7053}},{t:this.shape_38,p:{skewY:180,x:43.5497}},{t:this.shape_37,p:{skewY:180,x:4.0283}},{t:this.shape_36,p:{skewY:180,x:13.9186}},{t:this.shape_35,p:{skewY:180,x:-33.7}},{t:this.shape_34,p:{skewY:180,x:-35.875}},{t:this.shape_33,p:{skewY:180,x:19.5231}},{t:this.shape_32,p:{skewY:180,x:16.5477}},{t:this.shape_31,p:{skewY:180,x:-19.3693}},{t:this.shape_30,p:{skewY:180,x:-18.5129}},{t:this.shape_29,p:{skewY:180,x:51.9764}},{t:this.shape_28,p:{skewY:180,x:49.025}},{t:this.shape_27,p:{skewY:180,x:49.225}},{t:this.shape_26,p:{skewY:180,x:49.2965}},{t:this.shape_25,p:{skewY:180,x:-0.1}},{t:this.shape_24,p:{skewY:180,x:68.9981}},{t:this.shape_23,p:{skewY:180,x:67.1}},{t:this.shape_22,p:{skewY:180,x:-60.8471}},{t:this.shape_21,p:{skewY:180,x:-18.246}},{t:this.shape_20,p:{skewY:180,x:73.85}},{t:this.shape_19,p:{skewY:180,x:69.4853}},{t:this.shape_18,p:{skewY:180,x:-56.1374}},{t:this.shape_17,p:{skewY:180,x:-53.1339}},{t:this.shape_16,p:{skewY:180,x:23.7422}},{t:this.shape_15,p:{skewY:180,x:22.9937}},{t:this.shape_14,p:{skewY:180,x:-8.4563}},{t:this.shape_13,p:{skewY:180,x:-14.35}},{t:this.shape_12,p:{skewY:180,x:-29.8707}},{t:this.shape_11,p:{skewY:180,x:-35.95}},{t:this.shape_10,p:{skewY:180,x:18.8}},{t:this.shape_9,p:{skewY:180,x:-29.25}},{t:this.shape_8,p:{skewY:180,x:14.6}},{t:this.shape_7,p:{skewY:180,x:-14.875}},{t:this.shape_6,p:{skewY:180,x:32.6343}},{t:this.shape_5,p:{skewY:180,x:56.9}},{t:this.shape_4,p:{regX:25.4,regY:-23.7,rotation:0,x:-66.25,y:-18.1,skewX:-126.9885,skewY:53.0115}},{t:this.shape_3,p:{regX:29.8,regY:-12.1,rotation:0,x:85.25,y:-8.75,skewX:-89.9991,skewY:90.0009}},{t:this.shape_2,p:{skewY:180,x:33.9203}},{t:this.shape_1,p:{skewY:180,x:0.9698}},{t:this.shape,p:{skewY:180,x:13.7406}}]},3).to({state:[]},1).to({state:[{t:this.shape_44,p:{skewY:0,x:7.9387}},{t:this.shape_43,p:{skewY:0,x:25.75}},{t:this.shape_42,p:{skewY:0,x:25.775}},{t:this.shape_41,p:{skewY:0,x:-2.7112}},{t:this.shape_40,p:{skewY:0,x:32.4388}},{t:this.shape_39,p:{skewY:0,x:68.9053}},{t:this.shape_38,p:{skewY:0,x:-8.3497}},{t:this.shape_37,p:{skewY:0,x:31.1717}},{t:this.shape_36,p:{skewY:0,x:21.2814}},{t:this.shape_35,p:{skewY:0,x:68.9}},{t:this.shape_34,p:{skewY:0,x:71.075}},{t:this.shape_33,p:{skewY:0,x:15.6769}},{t:this.shape_32,p:{skewY:0,x:18.6523}},{t:this.shape_31,p:{skewY:0,x:54.5693}},{t:this.shape_30,p:{skewY:0,x:53.7129}},{t:this.shape_29,p:{skewY:0,x:-16.7764}},{t:this.shape_28,p:{skewY:0,x:-13.825}},{t:this.shape_27,p:{skewY:0,x:-14.025}},{t:this.shape_26,p:{skewY:0,x:-14.0965}},{t:this.shape_25,p:{skewY:0,x:35.3}},{t:this.shape_24,p:{skewY:0,x:-33.7981}},{t:this.shape_23,p:{skewY:0,x:-31.9}},{t:this.shape_22,p:{skewY:0,x:96.0471}},{t:this.shape_21,p:{skewY:0,x:53.446}},{t:this.shape_20,p:{skewY:0,x:-38.65}},{t:this.shape_19,p:{skewY:0,x:-34.2853}},{t:this.shape_18,p:{skewY:0,x:91.3374}},{t:this.shape_17,p:{skewY:0,x:88.3339}},{t:this.shape_16,p:{skewY:0,x:11.4578}},{t:this.shape_15,p:{skewY:0,x:12.2063}},{t:this.shape_14,p:{skewY:0,x:43.6563}},{t:this.shape_13,p:{skewY:0,x:49.55}},{t:this.shape_12,p:{skewY:0,x:65.0707}},{t:this.shape_11,p:{skewY:0,x:71.15}},{t:this.shape_10,p:{skewY:0,x:16.4}},{t:this.shape_9,p:{skewY:0,x:64.45}},{t:this.shape_8,p:{skewY:0,x:20.6}},{t:this.shape_7,p:{skewY:0,x:50.075}},{t:this.shape_6,p:{skewY:0,x:2.5657}},{t:this.shape_5,p:{skewY:0,x:-21.7}},{t:this.shape_4,p:{regX:25.4,regY:-23.7,rotation:126.9885,x:101.45,y:-18.1,skewX:0,skewY:0}},{t:this.shape_3,p:{regX:29.8,regY:-12.1,rotation:89.9991,x:-50.05,y:-8.75,skewX:0,skewY:0}},{t:this.shape_2,p:{skewY:0,x:1.2797}},{t:this.shape_1,p:{skewY:0,x:34.2302}},{t:this.shape,p:{skewY:0,x:21.4594}}]},3).to({state:[{t:this.shape_44,p:{skewY:180,x:27.2613}},{t:this.shape_43,p:{skewY:180,x:9.45}},{t:this.shape_42,p:{skewY:180,x:9.425}},{t:this.shape_41,p:{skewY:180,x:37.9112}},{t:this.shape_40,p:{skewY:180,x:2.7612}},{t:this.shape_39,p:{skewY:180,x:-33.7053}},{t:this.shape_38,p:{skewY:180,x:43.5497}},{t:this.shape_37,p:{skewY:180,x:4.0283}},{t:this.shape_36,p:{skewY:180,x:13.9186}},{t:this.shape_35,p:{skewY:180,x:-33.7}},{t:this.shape_34,p:{skewY:180,x:-35.875}},{t:this.shape_33,p:{skewY:180,x:19.5231}},{t:this.shape_32,p:{skewY:180,x:16.5477}},{t:this.shape_31,p:{skewY:180,x:-19.3693}},{t:this.shape_30,p:{skewY:180,x:-18.5129}},{t:this.shape_29,p:{skewY:180,x:51.9764}},{t:this.shape_28,p:{skewY:180,x:49.025}},{t:this.shape_27,p:{skewY:180,x:49.225}},{t:this.shape_26,p:{skewY:180,x:49.2965}},{t:this.shape_25,p:{skewY:180,x:-0.1}},{t:this.shape_24,p:{skewY:180,x:68.9981}},{t:this.shape_23,p:{skewY:180,x:67.1}},{t:this.shape_22,p:{skewY:180,x:-60.8471}},{t:this.shape_21,p:{skewY:180,x:-18.246}},{t:this.shape_20,p:{skewY:180,x:73.85}},{t:this.shape_19,p:{skewY:180,x:69.4853}},{t:this.shape_18,p:{skewY:180,x:-56.1374}},{t:this.shape_17,p:{skewY:180,x:-53.1339}},{t:this.shape_16,p:{skewY:180,x:23.7422}},{t:this.shape_15,p:{skewY:180,x:22.9937}},{t:this.shape_14,p:{skewY:180,x:-8.4563}},{t:this.shape_13,p:{skewY:180,x:-14.35}},{t:this.shape_12,p:{skewY:180,x:-29.8707}},{t:this.shape_11,p:{skewY:180,x:-35.95}},{t:this.shape_10,p:{skewY:180,x:18.8}},{t:this.shape_9,p:{skewY:180,x:-29.25}},{t:this.shape_8,p:{skewY:180,x:14.6}},{t:this.shape_7,p:{skewY:180,x:-14.875}},{t:this.shape_6,p:{skewY:180,x:32.6343}},{t:this.shape_5,p:{skewY:180,x:56.9}},{t:this.shape_4,p:{regX:25.4,regY:-23.7,rotation:0,x:-66.25,y:-18.1,skewX:-126.9885,skewY:53.0115}},{t:this.shape_3,p:{regX:29.8,regY:-12.1,rotation:0,x:85.25,y:-8.75,skewX:-89.9991,skewY:90.0009}},{t:this.shape_2,p:{skewY:180,x:33.9203}},{t:this.shape_1,p:{skewY:180,x:0.9698}},{t:this.shape,p:{skewY:180,x:13.7406}}]},1).to({state:[{t:this.shape_44,p:{skewY:0,x:7.9387}},{t:this.shape_43,p:{skewY:0,x:25.75}},{t:this.shape_42,p:{skewY:0,x:25.775}},{t:this.shape_41,p:{skewY:0,x:-2.7112}},{t:this.shape_40,p:{skewY:0,x:32.4388}},{t:this.shape_39,p:{skewY:0,x:68.9053}},{t:this.shape_38,p:{skewY:0,x:-8.3497}},{t:this.shape_37,p:{skewY:0,x:31.1717}},{t:this.shape_36,p:{skewY:0,x:21.2814}},{t:this.shape_35,p:{skewY:0,x:68.9}},{t:this.shape_34,p:{skewY:0,x:71.075}},{t:this.shape_33,p:{skewY:0,x:15.6769}},{t:this.shape_32,p:{skewY:0,x:18.6523}},{t:this.shape_31,p:{skewY:0,x:54.5693}},{t:this.shape_30,p:{skewY:0,x:53.7129}},{t:this.shape_29,p:{skewY:0,x:-16.7764}},{t:this.shape_28,p:{skewY:0,x:-13.825}},{t:this.shape_27,p:{skewY:0,x:-14.025}},{t:this.shape_26,p:{skewY:0,x:-14.0965}},{t:this.shape_25,p:{skewY:0,x:35.3}},{t:this.shape_24,p:{skewY:0,x:-33.7981}},{t:this.shape_23,p:{skewY:0,x:-31.9}},{t:this.shape_22,p:{skewY:0,x:96.0471}},{t:this.shape_21,p:{skewY:0,x:53.446}},{t:this.shape_20,p:{skewY:0,x:-38.65}},{t:this.shape_19,p:{skewY:0,x:-34.2853}},{t:this.shape_18,p:{skewY:0,x:91.3374}},{t:this.shape_17,p:{skewY:0,x:88.3339}},{t:this.shape_16,p:{skewY:0,x:11.4578}},{t:this.shape_15,p:{skewY:0,x:12.2063}},{t:this.shape_14,p:{skewY:0,x:43.6563}},{t:this.shape_13,p:{skewY:0,x:49.55}},{t:this.shape_12,p:{skewY:0,x:65.0707}},{t:this.shape_11,p:{skewY:0,x:71.15}},{t:this.shape_10,p:{skewY:0,x:16.4}},{t:this.shape_9,p:{skewY:0,x:64.45}},{t:this.shape_8,p:{skewY:0,x:20.6}},{t:this.shape_7,p:{skewY:0,x:50.075}},{t:this.shape_6,p:{skewY:0,x:2.5657}},{t:this.shape_5,p:{skewY:0,x:-21.7}},{t:this.shape_4,p:{regX:25.4,regY:-23.7,rotation:126.9885,x:101.45,y:-18.1,skewX:0,skewY:0}},{t:this.shape_3,p:{regX:29.8,regY:-12.1,rotation:89.9991,x:-50.05,y:-8.75,skewX:0,skewY:0}},{t:this.shape_2,p:{skewY:0,x:1.2797}},{t:this.shape_1,p:{skewY:0,x:34.2302}},{t:this.shape,p:{skewY:0,x:21.4594}}]},4).to({state:[{t:this.shape_44,p:{skewY:180,x:27.2613}},{t:this.shape_43,p:{skewY:180,x:9.45}},{t:this.shape_42,p:{skewY:180,x:9.425}},{t:this.shape_41,p:{skewY:180,x:37.9112}},{t:this.shape_40,p:{skewY:180,x:2.7612}},{t:this.shape_39,p:{skewY:180,x:-33.7053}},{t:this.shape_38,p:{skewY:180,x:43.5497}},{t:this.shape_37,p:{skewY:180,x:4.0283}},{t:this.shape_36,p:{skewY:180,x:13.9186}},{t:this.shape_35,p:{skewY:180,x:-33.7}},{t:this.shape_34,p:{skewY:180,x:-35.875}},{t:this.shape_33,p:{skewY:180,x:19.5231}},{t:this.shape_32,p:{skewY:180,x:16.5477}},{t:this.shape_31,p:{skewY:180,x:-19.3693}},{t:this.shape_30,p:{skewY:180,x:-18.5129}},{t:this.shape_29,p:{skewY:180,x:51.9764}},{t:this.shape_28,p:{skewY:180,x:49.025}},{t:this.shape_27,p:{skewY:180,x:49.225}},{t:this.shape_26,p:{skewY:180,x:49.2965}},{t:this.shape_25,p:{skewY:180,x:-0.1}},{t:this.shape_24,p:{skewY:180,x:68.9981}},{t:this.shape_23,p:{skewY:180,x:67.1}},{t:this.shape_22,p:{skewY:180,x:-60.8471}},{t:this.shape_21,p:{skewY:180,x:-18.246}},{t:this.shape_20,p:{skewY:180,x:73.85}},{t:this.shape_19,p:{skewY:180,x:69.4853}},{t:this.shape_18,p:{skewY:180,x:-56.1374}},{t:this.shape_17,p:{skewY:180,x:-53.1339}},{t:this.shape_16,p:{skewY:180,x:23.7422}},{t:this.shape_15,p:{skewY:180,x:22.9937}},{t:this.shape_14,p:{skewY:180,x:-8.4563}},{t:this.shape_13,p:{skewY:180,x:-14.35}},{t:this.shape_12,p:{skewY:180,x:-29.8707}},{t:this.shape_11,p:{skewY:180,x:-35.95}},{t:this.shape_10,p:{skewY:180,x:18.8}},{t:this.shape_9,p:{skewY:180,x:-29.25}},{t:this.shape_8,p:{skewY:180,x:14.6}},{t:this.shape_7,p:{skewY:180,x:-14.875}},{t:this.shape_6,p:{skewY:180,x:32.6343}},{t:this.shape_5,p:{skewY:180,x:56.9}},{t:this.shape_4,p:{regX:25.4,regY:-23.7,rotation:0,x:-66.25,y:-18.1,skewX:-126.9885,skewY:53.0115}},{t:this.shape_3,p:{regX:29.8,regY:-12.1,rotation:0,x:85.25,y:-8.75,skewX:-89.9991,skewY:90.0009}},{t:this.shape_2,p:{skewY:180,x:33.9203}},{t:this.shape_1,p:{skewY:180,x:0.9698}},{t:this.shape,p:{skewY:180,x:13.7406}}]},4).to({state:[{t:this.shape_44,p:{skewY:0,x:7.9387}},{t:this.shape_43,p:{skewY:0,x:25.75}},{t:this.shape_42,p:{skewY:0,x:25.775}},{t:this.shape_41,p:{skewY:0,x:-2.7112}},{t:this.shape_40,p:{skewY:0,x:32.4388}},{t:this.shape_39,p:{skewY:0,x:68.9053}},{t:this.shape_38,p:{skewY:0,x:-8.3497}},{t:this.shape_37,p:{skewY:0,x:31.1717}},{t:this.shape_36,p:{skewY:0,x:21.2814}},{t:this.shape_35,p:{skewY:0,x:68.9}},{t:this.shape_34,p:{skewY:0,x:71.075}},{t:this.shape_33,p:{skewY:0,x:15.6769}},{t:this.shape_32,p:{skewY:0,x:18.6523}},{t:this.shape_31,p:{skewY:0,x:54.5693}},{t:this.shape_30,p:{skewY:0,x:53.7129}},{t:this.shape_29,p:{skewY:0,x:-16.7764}},{t:this.shape_28,p:{skewY:0,x:-13.825}},{t:this.shape_27,p:{skewY:0,x:-14.025}},{t:this.shape_26,p:{skewY:0,x:-14.0965}},{t:this.shape_25,p:{skewY:0,x:35.3}},{t:this.shape_24,p:{skewY:0,x:-33.7981}},{t:this.shape_23,p:{skewY:0,x:-31.9}},{t:this.shape_22,p:{skewY:0,x:96.0471}},{t:this.shape_21,p:{skewY:0,x:53.446}},{t:this.shape_20,p:{skewY:0,x:-38.65}},{t:this.shape_19,p:{skewY:0,x:-34.2853}},{t:this.shape_18,p:{skewY:0,x:91.3374}},{t:this.shape_17,p:{skewY:0,x:88.3339}},{t:this.shape_16,p:{skewY:0,x:11.4578}},{t:this.shape_15,p:{skewY:0,x:12.2063}},{t:this.shape_14,p:{skewY:0,x:43.6563}},{t:this.shape_13,p:{skewY:0,x:49.55}},{t:this.shape_12,p:{skewY:0,x:65.0707}},{t:this.shape_11,p:{skewY:0,x:71.15}},{t:this.shape_10,p:{skewY:0,x:16.4}},{t:this.shape_9,p:{skewY:0,x:64.45}},{t:this.shape_8,p:{skewY:0,x:20.6}},{t:this.shape_7,p:{skewY:0,x:50.075}},{t:this.shape_6,p:{skewY:0,x:2.5657}},{t:this.shape_5,p:{skewY:0,x:-21.7}},{t:this.shape_4,p:{regX:25.4,regY:-23.7,rotation:126.9885,x:101.45,y:-18.1,skewX:0,skewY:0}},{t:this.shape_3,p:{regX:29.8,regY:-12.1,rotation:89.9991,x:-50.05,y:-8.75,skewX:0,skewY:0}},{t:this.shape_2,p:{skewY:0,x:1.2797}},{t:this.shape_1,p:{skewY:0,x:34.2302}},{t:this.shape,p:{skewY:0,x:21.4594}}]},4).to({state:[{t:this.shape_44,p:{skewY:0,x:7.9387}},{t:this.shape_43,p:{skewY:0,x:25.75}},{t:this.shape_42,p:{skewY:0,x:25.775}},{t:this.shape_41,p:{skewY:0,x:-2.7112}},{t:this.shape_40,p:{skewY:0,x:32.4388}},{t:this.shape_39,p:{skewY:0,x:68.9053}},{t:this.shape_38,p:{skewY:0,x:-8.3497}},{t:this.shape_37,p:{skewY:0,x:31.1717}},{t:this.shape_36,p:{skewY:0,x:21.2814}},{t:this.shape_35,p:{skewY:0,x:68.9}},{t:this.shape_34,p:{skewY:0,x:71.075}},{t:this.shape_33,p:{skewY:0,x:15.6769}},{t:this.shape_32,p:{skewY:0,x:18.6523}},{t:this.shape_31,p:{skewY:0,x:54.5693}},{t:this.shape_30,p:{skewY:0,x:53.7129}},{t:this.shape_29,p:{skewY:0,x:-16.7764}},{t:this.shape_28,p:{skewY:0,x:-13.825}},{t:this.shape_27,p:{skewY:0,x:-14.025}},{t:this.shape_26,p:{skewY:0,x:-14.0965}},{t:this.shape_25,p:{skewY:0,x:35.3}},{t:this.shape_24,p:{skewY:0,x:-33.7981}},{t:this.shape_23,p:{skewY:0,x:-31.9}},{t:this.shape_22,p:{skewY:0,x:96.0471}},{t:this.shape_21,p:{skewY:0,x:53.446}},{t:this.shape_20,p:{skewY:0,x:-38.65}},{t:this.shape_19,p:{skewY:0,x:-34.2853}},{t:this.shape_18,p:{skewY:0,x:91.3374}},{t:this.shape_17,p:{skewY:0,x:88.3339}},{t:this.shape_16,p:{skewY:0,x:11.4578}},{t:this.shape_15,p:{skewY:0,x:12.2063}},{t:this.shape_14,p:{skewY:0,x:43.6563}},{t:this.shape_13,p:{skewY:0,x:49.55}},{t:this.shape_12,p:{skewY:0,x:65.0707}},{t:this.shape_11,p:{skewY:0,x:71.15}},{t:this.shape_10,p:{skewY:0,x:16.4}},{t:this.shape_9,p:{skewY:0,x:64.45}},{t:this.shape_8,p:{skewY:0,x:20.6}},{t:this.shape_7,p:{skewY:0,x:50.075}},{t:this.shape_6,p:{skewY:0,x:2.5657}},{t:this.shape_5,p:{skewY:0,x:-21.7}},{t:this.shape_4,p:{regX:25.4,regY:-23.6,rotation:0,x:101.4,y:-18.2,skewX:0,skewY:0}},{t:this.shape_3,p:{regX:0,regY:0,rotation:0,x:-79.9083,y:3.3535,skewX:0,skewY:0}},{t:this.shape_2,p:{skewY:0,x:1.2797}},{t:this.shape_1,p:{skewY:0,x:34.2302}},{t:this.shape,p:{skewY:0,x:21.4594}}]},4).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-110.5,-91.6,221.1,171.1);


	(lib.Notes_animated = function(mode,startPosition,loop,reversed) {
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
		this.instance = new lib.Notes();

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:110,y:-168},34).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-40.2,-197.9,190.5,227.9);


// stage content:
	(lib.brainMusicale = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// Notes
		this.instance = new lib.Notes_animated("synched",0);
		this.instance.setTransform(84.85,233.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

		// Corps
		this.instance_1 = new lib.Brain_danse("synched",0);
		this.instance_1.setTransform(138,394.35,1,1,0,0,0,0,-6.2);

		this.instance_2 = new lib.Notes_animated("synched",9);
		this.instance_2.setTransform(179.15,239.35,1,1,0,0,0,55,-84);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{startPosition:0}}]}).to({state:[{t:this.instance_1,p:{startPosition:17}},{t:this.instance_2}]},14).wait(21));

		this._renderFirstFrame();

	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(177.5,275.2,80.80000000000001,204.8);
// library properties:
	lib.properties = {
		id: '413CE3CDF281E246A24738DB38EE3999',
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
	an.compositions['413CE3CDF281E246A24738DB38EE3999'] = {
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
