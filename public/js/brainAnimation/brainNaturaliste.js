var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function brainCharacterAnimationNaturaliste() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("C4D6806AC293F44A91126781B8BFEE49");
	var libNaturaliste=comp.getLibrary();
	handleCompleteNaturaliste({},comp);
}
function handleCompleteNaturaliste(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var libNaturaliste=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new libNaturaliste.brainNaturaliste();
	stage = new libNaturaliste.Stage(canvas);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = libNaturaliste.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsiveNaturaliste(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);
	AdobeAn.compositionLoaded(libNaturaliste.properties.id);
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


	(lib.Loupe = function(mode,startPosition,loop,reversed) {
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
		this.shape.graphics.f().s("#D63C41").ss(3,1,1).p("AAThMIglCZ");
		this.shape.setTransform(-2.375,12.825);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f().s("#30343D").ss(3,1,1).p("AAYAAQAAA1gHAmQgFAagGAIQgDADgDAAQgJAAgHglQgHgmAAg1QAAg0AHgmQAHglAJAAQADAAACACQAHAHAFAcQAHAmAAA0g");
		this.shape_1.setTransform(0.9,-7.55);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#D63C41").s().p("AgDB+QAFgIAFgaQAGgmABg1QgBg0gGglQgGgdgGgHQAGAHAGAdQAGAlABA0QgBA1gGAmQgFAagFAIQgIgHgFgcQgHgmAAg1QAAg0AHglQAFgaAGgJQADgDACAAQAKAAAHAmQAHAlAAA0QAAA1gHAmQgHAlgKAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
		this.shape_2.setTransform(1.95,-7.7);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Loupe, new cjs.Rectangle(-5.8,-21.8,10.6,43.900000000000006), null);


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
		this.shape.graphics.f("#30343D").s().p("ABBCiQgIgBgFgHQhTh2g8iKIgBAAQhEAkhEAPQgkAHgTgBQgjgDgDgdQgDgaAigSQAggTAfgJQBAgTBEAJQAHgBAGACQAGADADAHQA3CLBXB/QBth0ByhoQAMgLAMAMQANANgNALQh8BxhxB6QgEAFgGAAIgEgBg");
		this.shape.setTransform(-31.6,-10.2,1,1,0,0,180,31.6,-10.2);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Bras_droite, new cjs.Rectangle(-32.2,-16.2,64.5,32.5), null);


// stage content:
	(lib.brainNaturaliste = function(mode,startPosition,loop,reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);

		// Arbre
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#30343D").s().p("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");
		this.shape.setTransform(328.59,65.1801,2.7636,2.7636,0,0,180);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

		// Yeux
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#30343D").s().p("AC+A/IgUgLQgTgLgMgTQgLgUADgVQAEgWAQgPQAQgQAWgBQAGAAAFAEQAIAAAHADQAIADAHAFIAMAIQAGAFAFAHQAXAPAKAaQAKAcgSAZQgMARgUABIgIAAQgZAAgXgLgAi9AdIgHAAIgJgBIgFgBQgPAAgOgCQgPgCgLgDQgMgDgHgFQgGgFADgGIADgCQAEgIARgFQATgEAXAAQAWAAAUADQAYAEASAHQAHAEACACQADADgCAEIAAAEQgBADgCACIgHAFQgFACgHABQgHACgJAAIgKAAIgHABIgHAAg");
		this.shape_1.setTransform(120.6456,189.8888);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(50));

		// Jambes
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#30343D").s().p("AgVDbIgFACQgJAFgIgFQgIgFgBgKIgrmuQgCgRASAAQARAAACARIAoGSIADACIACABQAcgGAcAIQAcAHAWAVQAIAJgFAKQgEAKgMABIgRABQgsAAgmgXg");
		this.shape_2.setTransform(97.2177,275.2208,1,1,0,0,180);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#30343D").s().p("Ag/DfQgLgEgBgKQgBgLAJgHQAugjA7AGQgmi6gSi9QgCgRASAAQAQAAACARQAUDIAoC/QACAHgEAHQgEAGgGABQgCAIgGADQgcARgeADIgPABQgYAAgWgIg");
		this.shape_3.setTransform(119.9096,276.8922,1,1,0,0,180);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(50));

		// Loupe
		this.instance = new lib.Loupe();
		this.instance.setTransform(236.7,196.45,1,1,0,0,0,-0.5,0.1);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.2,rotation:32.7291,x:235.4,y:227.95},24).to({regY:0.1,rotation:0,x:236.7,y:196.45},25).wait(1));

		// Bras_droite
		this.instance_1 = new lib.Bras_droite();
		this.instance_1.setTransform(214.5,219.35);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:32.7291,x:204.35,y:235.15},24).to({rotation:0,x:214.5,y:219.35},25).wait(1));

		// Bras_gauche
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#30343D").s().p("AgbD8IgEgCIgBAAIgGgDQgMAGgPgEQgOgEgLgMQgIgHgJgNIgPgWIgigxQgGgKAIgKQAAgOANgEQCEgxB7hGQhuhmhshpQgMgLAMgMQAMgNAMAMQBsBpB/B1QAGAGgBAJQgCAIgHADQh3BHh7AwQAXAPAPASIAVAdQAMATAAAPIAGADQANAHgGAPQgFALgIAAIgHgBgAhUCsIgOgNIAKANIAEAAg");
		this.shape_4.setTransform(20.7587,216.5983,1,1,0,0,180);

		this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(50));

		// Corps
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#D63C41").s().p("AA/BvQgpgIgWgeQgXggAIgrQAGgggRgVQgQgSgagEQgbgFgWAPQgWAPgGAcQAAAGgGAEQgGAEgGgBQgHgBgEgGQgDgFABgHQAHgoAhgXQAigXAoAHQArAIAVAfQAVAfgHAqQgGAfAQAUQAOATAdAGQAbAFAWgQQAXgPAEgbQABgHAFgDQAHgEAGABQAHABADAFQAEAGgBAHQgHAjgbAXQgcAWgiAAg");
		this.shape_5.setTransform(153.55,229.0433,1,1,0,0,180);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#D63C41").s().p("AA/BuQgrgIgVgfQgWgfAIgpQAGgegPgVQgOgUgegGQgbgFgWAQQgWAQgFAaQgBAHgGAEQgFADgHgBQgGgBgEgFQgEgGABgGQAHgoAigXQAhgXAoAHQAqAHAWAgQAWAggIApQgGAhARAUQAPASAbAFQAbAEAWgPQAWgQAFgaQABgHAGgEQAFgEAHACQAHABADAFQAEAGgBAGQgHAkgbAWQgbAXgjAAg");
		this.shape_6.setTransform(129.2657,233.6683,1,1,0,0,180);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#D63C41").s().p("ABKB/QgvgJgZghQgagkAJgyQAGgkgRgZQgRgZgkgGQgggGgcATQgbASgGAhQgBAGgFAEQgGAEgGgBQgHgBgEgGQgDgFABgHQAHgtAngbQAmgaAuAIQAwAJAZAkQAYAkgIAwQgHAkATAZQASAYAiAGQAgAGAcgTQAbgTAFggQACgHAFgEQAGgDAGABQAHABAEAFQADAGgBAGQgIAugmAaQgcAUgkAAg");
		this.shape_7.setTransform(81.775,226.6322,1,1,0,0,180);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#D63C41").s().p("AioBLQgQgmAPgmQAPgnAmgQQAogSAlAOQAlAOARApQANAcAZAJQAXAHAcgLQAagMAKgZQALgagMgaQgDgGADgGQACgHAGgCQAGgDAHACQAGADADAGQAQAmgPAmQgPAmgmARQgoARgjgMQgmgNgSgqQgMgbgYgKQgZgJgcAMQgaAMgKAZQgKAaALAaQACAGgCAGQgCAGgGADIgHABQgLAAgEgJg");
		this.shape_8.setTransform(111.225,204.8556,1,1,0,0,180);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#D63C41").s().p("AhlBSQgpgIgXgjQgXgiAIgoQACgHAFgEQAFgDAHABQAHABADAGQAEAFgBAHQgGAcAQAWQAQAYAbAFQAfAGAVgPQAXgOAFgeQAJgrAggWQAggVAsAIQAoAJAXAiQAYAigIAoQgBAHgGADQgFAEgHgBQgHgBgDgGQgEgGABgGQAGgcgQgWQgQgYgcgFQgbgFgVALQgYANgHAhQgHAlgZAWQgaAWgkAAQgMAAgLgCg");
		this.shape_9.setTransform(67.4,207.6546,1,1,0,0,180);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#D63C41").s().p("AAPBRQgegeAAgyQAAgjgWgWQgVgWglAAQghAAgXAYQgXAXAAAgQAAAGgFAFQgFAFgGAAQgHAAgFgFQgEgFAAgGQAAguAgggQAhghAuAAQAyAAAfAfQAeAgAAAwQAAAoAaAVQAVARAhAAQAhAAAXgXQAXgYAAggQAAgGAFgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAtggAiQghAgguAAQgzAAgegeg");
		this.shape_10.setTransform(115.425,158.6,1,1,0,0,180);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#D63C41").s().p("AhNAcQgFgFAAgGQAAgHAEgFQAfghAugCQAtgCAiAeQAFAEAAAGQAAAHgEAFQgFAFgGAAQgGAAgFgEQgZgVggABQghABgVAZQgFAFgHAAQgHAAgEgEg");
		this.shape_11.setTransform(60.7,174.4938,1,1,0,0,180);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#D63C41").s().p("AgQBQQgFgFAAgGQgBgHAFgFQAUgZgDggQgBgggZgVQgFgFgBgGQAAgHAEgFQAEgFAHgBQAHAAAFAEQAiAfADAtQAEAsgeAkQgFAFgGAAQgHAAgEgDg");
		this.shape_12.setTransform(66.779,169.3475,1,1,0,0,180);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#D63C41").s().p("AgjApQgHgBgEgFQgEgGABgGQAFgeAZgTQAYgSAfAFQAHABAEAFQAEAFgBAHQgBAGgGAEQgFAEgHgBQgRgCgOAKQgOAKgDASQgCANgOAAg");
		this.shape_13.setTransform(82.275,248.0718,1,1,0,0,180);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#D63C41").s().p("AAXAxQgGAAgEgGQgEgFAAgHQADgSgMgNQgJgNgSgDQgHAAgEgGQgEgFABgHQABgGAFgEQAFgEAHAAQAeAEATAZQATAXgEAfQAAAGgFAEQgFAEgGAAg");
		this.shape_14.setTransform(88.1937,247.2972,1,1,0,0,180);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#D63C41").s().p("AAhAqQgGAAgFgEQgEgEgBgGQgDgSgNgKQgNgLgSACQgHABgFgEQgFgFgBgGQgBgHAEgFQAFgFAGgBQAfgEAYAUQAYATAEAeQABAHgFAFQgEAGgHAAg");
		this.shape_15.setTransform(119.6437,188.416,1,1,0,0,180);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#D63C41").s().p("AgZAyQgFAAgFgEQgEgEgBgGQgBgHAEgFQAEgFAGgBQASgDAKgOQAKgOgCgRQgBgHAEgFQAEgFAGgBQAHgBAFAEQAGADABAHQAEAfgTAYQgSAZgeAFg");
		this.shape_16.setTransform(120.3669,182.49,1,1,0,0,180);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#D63C41").s().p("AATBMQgHgCgCgGQgDgGACgHQAMgegNgdQgNgegegLQgHgCgCgHQgDgGACgGQADgGAGgDQAGgDAGADQAqAQATAqQATApgQArQgEAKgLAAg");
		this.shape_17.setTransform(43.5161,222.2125,1,1,0,0,180);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#D63C41").s().p("AhBApQgGgCgDgGQgDgGACgGQADgHAFgCQAGgDAHACQAfALAcgOQAdgOALgeQADgHAFgDQAGgCAHACQAGACADAGQADAGgCAGQgQArgpAUQgVALgaAAQgTAAgSgHg");
		this.shape_18.setTransform(40.5126,213.4556,1,1,0,0,180);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#D63C41").s().p("AANBPQgmgZgJgtQgKgsAZgmQAEgGAHgBQAGgCAFAEQAFAEACAGQABAHgEAFQgQAcAGAeQAGAgAbASQAGAEABAHQACAGgEAGQgFAHgIAAQgFAAgEgDg");
		this.shape_19.setTransform(166.1333,202.0275,1,1,0,0,180);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#D63C41").s().p("AhJAlQgFgEgCgHQgBgGADgGQAYgmAtgKQArgLAoAYQAFADACAHQACAHgEAEQgEAGgGABQgGACgGgEQgbgPggAHQgfAHgRAbQgFAIgJAAQgFAAgEgCg");
		this.shape_20.setTransform(170.5,209.4271,1,1,0,0,180);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#D63C41").s().p("AgHA/QgGgEgBgHQgBgHAEgFQAMgSgCgWQgDgWgTgOQgFgEgBgHQgBgGAEgGQAEgFAGgBQAHgBAFAEQAcAWAGAjQAFAjgVAdQgFAHgIAAQgEAAgEgDg");
		this.shape_21.setTransform(78.4029,180.6139,1,1,0,0,180);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#D63C41").s().p("AgIA/QgFgEgBgHQgBgHAEgFQAMgSgCgWQgEgXgSgNQgGgEgBgHQgBgGAEgGQAEgFAHgBQAGgBAGAEQAcAWAFAjQAGAigVAeQgGAHgHAAQgFAAgEgDg");
		this.shape_22.setTransform(35.7945,198.6139,1,1,0,0,180);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#D63C41").s().p("AAbAsQgcAAgVgVQgVgVAAgcQAAgHAFgFQAEgFAHAAQAHAAAEAFQAFAFAAAGQAAAQALALQAMAMAPgBQAIAAAEAFQAFAFAAAGQAAAHgEAFQgFAEgHABg");
		this.shape_23.setTransform(163.75,236.425,1,1,0,0,180);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#D63C41").s().p("Ag+BAQgFgFAAgGQAAgyAjgiQAigkAxAAQAHgBAFAFQAEAFABAHQAAAGgFAFQgFAFgGAAQglAAgYAaQgaAZAAAkQAAAHgEAFQgFAFgHAAQgGAAgFgFg");
		this.shape_24.setTransform(165.6254,181.1477,1,1,0,0,180);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#D63C41").s().p("AhjASQgGgDgBgHQgCgHAEgEQAEgGAHgBQAGgBAGAEQAnAaAugJQAvgIAbgnQAEgFAHgBQAGgBAFADQAGAEABAHQABAGgDAGQgWAdggARQggAQgjAAQguAAglgag");
		this.shape_25.setTransform(96.55,193.8139,1,1,0,0,180);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#D63C41").s().p("AgbBOQgEgFAAgGQAAgHAFgEQAZgXABghQAAgfgVgZQgEgFAAgGQAAgHAFgEQAFgFAHABQAGAAAEAFQAfAigCAtQgCAughAfQgEAFgHAAQgGAAgGgGg");
		this.shape_26.setTransform(145.9465,215.1975,1,1,0,0,180);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#D63C41").s().p("AgCAoQhFgDgugyQgFgFABgGQAAgHAFgEQAFgFAGABQAHAAAFAFQAlAoA4ACQA2ADApglQAFgFAHABQAHAAAEAFQAFAFgBAGQAAAHgFAFQgwAqhAAAg");
		this.shape_27.setTransform(145.875,206.0225,1,1,0,0,180);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#D63C41").s().p("AgyBBQgGAAgFgFQgFgEAAgHQABgwAiggQAigiAwABQAGAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAQgigBgYAZQgZAXAAAiQAAAHgFAFQgFAEgGAAg");
		this.shape_28.setTransform(145.675,191.6246,1,1,0,0,180);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#D63C41").s().p("AAxBDQgvgBgigiQghgiABgwQAAgGAEgFQAFgFAHAAQAGAAAFAFQAFAFAAAHQAAAjAYAXQAXAZAiAAQAHABAFAEQAEAFAAAHQAAAGgFAFQgEAFgHAAg");
		this.shape_29.setTransform(148.6264,194.475,1,1,0,0,180);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#D63C41").s().p("AglA6QgDgGACgGQADgGAGgDQAYgKAIgYQAKgXgLgYQgCgGACgGQACgHAGgCQAGgDAGACQAHADACAGQAQAjgOAkQgPAlgiAQQgDABgEAAQgKAAgEgKg");
		this.shape_30.setTransform(78.1178,160.7932,1,1,0,0,180);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#D63C41").s().p("AAlAeQgKgXgYgJQgYgJgXAKQgGACgHgCQgGgCgDgGQgCgGACgGQADgHAGgCQAjgQAkAOQAlAOAPAjQADAGgCAGQgDAHgGACQgDACgDAAQgKAAgFgKg");
		this.shape_31.setTransform(77.2807,157.4303,1,1,0,0,180);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#D63C41").s().p("Ag9A9QgFgFAAgHQABgwAiggQAigiAwABQAGgBAFAGQAFAEAAAHQgBAHgEAFQgFAEgHAAQgiAAgYAXQgZAYgBAjQAAAGgEAFQgFAFgHAAQgHgBgEgEg");
		this.shape_32.setTransform(113.175,222.1996,1,1,0,0,180);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#D63C41").s().p("AgfAgQgighABgwQAAgHAEgFQAGgFAGABQAHAAAFAFQAEAEAAAHQAAAjAYAYQAXAYAjABQAGAAAFAFQAFAEgBAHQAAAHgEAEQgFAFgHAAQgwgBgggig");
		this.shape_33.setTransform(116.1504,225.0477,1,1,0,0,180);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#D63C41").s().p("AAAAhQg0AAgmgjQgEgFgBgHQAAgGAFgFQAEgFAIAAQAGAAAEAFQAdAbAngBQAoAAAcgcQAEgFAIAAQAGAAAFAEQAFAFgBAHQABAGgFAFQglAlg1ABg");
		this.shape_34.setTransform(60.75,183.375,1,1,0,0,180);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#D63C41").s().p("ABlBEQgEgFgBgHQAAgngcgcQgcgcgoAAQgnAAgcAcQgcAcAAAnQAAAHgFAFQgFAEgGAAQgHAAgFgEQgEgFgBgHQAAg1AmglQAmglA0AAQA2AAAlAlQAmAlAAA1QAAAHgFAFQgFAEgGAAQgHAAgFgEg");
		this.shape_35.setTransform(62.95,190.625,1,1,0,0,180);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#D63C41").s().p("AguBEQgHAAgFgEQgEgFgBgGQAAgHAFgFQAEgFAHAAQAjgCAWgZQAXgZgBgiQgBgHAFgFQAEgFAHAAQAHgBAFAFQAEAFABAGQACAwggAiQghAkgvACg");
		this.shape_36.setTransform(110.5661,248.2725,1,1,0,0,180);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#D63C41").s().p("AAwB0QguAAggggQgjgggCgwQgBgvAhgjQAhgjAvgCQAHAAAEAEQAFAFAAAHQABAHgFAEQgEAFgHAAQgjACgXAZQgXAZABAiQABAiAZAYQAYAYAjgBQAGgBAFAFQAFAEABAHQAAAHgFAFQgEAFgHAAg");
		this.shape_37.setTransform(100.6783,243.5225,1,1,0,0,180);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#D63C41").s().p("AA0ByQgFgFAAgGQAAgHAFgEQAfgeABgrQACgqgegfQgdgfgqgBQgrgBgfAdQgFAFgHAAQgGAAgFgFQgFgFABgHQAAgHAFgEQApgnA4ACQA3ABAnApQAmApgBA3QgCA5gpAmQgFAEgGAAQgHAAgEgFg");
		this.shape_38.setTransform(140.1995,188.1722,1,1,0,0,180);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#D63C41").s().p("ABWBoQgFgDgCgHQgCgGAEgGQAWglgLgpQgLgpglgWQglgWgoALQgqALgWAlQgDAGgHABQgGACgGgDQgFgEgCgGQgCgHAEgFQAbgxA4gOQA0gOAyAdQAvAcAPA3QAOA1gdAxQgEAHgJAAQgFAAgEgCg");
		this.shape_39.setTransform(62.9085,229.2583,1,1,0,0,180);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#D63C41").s().p("AhGA2QgfgYgKglQgBgHADgFQADgGAHgCQAGgBAGADQAGADACAHQAIAgAdARQAdARAggJQAggIASgdQARgcgJghQgBgGADgGQADgGAHgBQAGgCAGADQAGAEACAGQALAugYAnQgYApgtAMQgOADgOAAQgmAAgfgXg");
		this.shape_40.setTransform(99.4112,180.5886,1,1,0,0,180);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#D63C41").s().p("AhGA2QgfgYgKglQgBgHADgFQAEgGAGgCQAHgCAFAEQAGADACAHQAIAfAdARQAdASAggJQAhgIARgdQARgdgIggQgCgHADgFQAEgGAGgCQAHgBAFADQAGADACAHQALAugXAnQgYApguALQgPAEgMAAQgnAAgfgXg");
		this.shape_41.setTransform(134.5586,165.9775,1,1,0,0,180);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#DB5B58").s().p("ADyIFQgYgNgPgYQgRAYgZANQgaAOgfAAQgeAAgagOQgagNgQgYQgPAYgaANQgaAOgfAAQgfAAgagOQgagNgQgYQgRAYgZANQgaAOgeAAQglAAgegUQgdgTgOgfQgfAcgrAAQguAAghggQggghAAgvQAAgIABgIQgMADgKAAQguAAghggQgggiAAgtQAAglAVgdQgkgKgXgeQgYgdAAgnQAAgiATgcQATgbAegNQggggAAgtQAAgvAhggQAhghAuAAIALAAQgEgOAAgPQAAguAgghQAhghAuABQAWAAAWAJQABguAgggQAhgfAtgBQAkAAAeAXQALgjAdgWQAegWAlAAQAZAAAXALQAWALAPASQAOgcAagPQAbgRAgAAQAfAAAcARQAaAQAOAcQAPgTAXgLQAXgLAZAAQAlAAAeAWQAdAWALAjQAegXAkAAQAtABAhAfQAgAgABAuQAWgJAWAAQAugBAhAhQAgAhAAAuQAAAPgEAOIALAAQAvAAAgAhQAhAgAAAvQAAAtggAgQAeANATAbQATAcAAAiQAAAngYAdQgXAegkAKQAVAdAAAlQAAAtggAiQghAgguAAQgKAAgMgDQABAIAAAIQAAAvggAhQghAgguAAQgrAAgggdQgMAggcATQgcAUgjAAQgdAAgZgOg");
		this.shape_42.setTransform(106.075,200.9,1,1,0,0,180);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#D63C41").s().p("ADKIIQgqAlg4AAQg5AAgpgmQgpAmg5AAQg6gBgpgkQgqAkg4ABQgkAAgfgQQgfgQgUgbQggAQgiAAQg1ABgogkQgnglgEg1Qg4gBgmgoQgngoAAg3QAAgcAKgaQghgRgTghQgUggAAgmQAAghAPgdQAPgcAagTQgUgiAAgkQAAg0AignQAigmAzgIIAAgEQAAg4AogpQAogoA5AAIAXACQAMgtAlgcQAlgdAuAAQAeAAAZALQASgfAfgTQAggSAlAAQAtAAAkAaQATgWAbgMQAbgMAeAAQAeAAAbAMQAbANATAWQAlgbAtAAQAlAAAgASQAfATASAfQAZgLAeAAQAuAAAlAdQAlAcAMAtIAXgCQA5AAAoAoQAoApAAA4IAAAEQAzAIAiAmQAiAnAAA0QAAAkgUAiQAaATAPAcQAPAdAAAhQAAAmgUAgQgTAhghARQAKAaAAAcQAAA3gmAoQgnAog4ABQgEA1gnAlQgoAkg1gBQgiAAgggQQgTAbgdAQQgeAQgiAAQg2AAgoglg");
		this.shape_43.setTransform(106.075,200.9,1,1,0,0,180);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(50));

		this._renderFirstFrame();

	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(154.8,-23,306,326.4);
// library properties:
	lib.properties = {
		id: 'C4D6806AC293F44A91126781B8BFEE49',
		width: 300,
		height: 300,
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
	an.compositions['C4D6806AC293F44A91126781B8BFEE49'] = {
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


	an.makeResponsiveNaturaliste = function(isResp, respDim, isScale, scaleType, domContainers) {
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
						sRatio = xRatio/2;
					}
					else {
						sRatio = yRatio/2;
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
