var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function brainCharacterAnimationInterpersonnelle() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("7B0D81A140ACC840ABAF2C4B06A06A7D");
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
		createjs.Ticker.framerate = libInterpersonnelle.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsiveInterpersonnelle(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);
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



	(lib.Bouche = function(mode,startPosition,loop,reversed) {
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
		this.shape.graphics.f("#FFF5F0").s().p("AlXHDQjNgPjUguQh/gcjBg3Qimgvh2g0QhigrhZg4QjRiFiijGQAug2BghHIAtgeQA4giA1gTQBYghC6AKQCJAHEBAlIHBA/QEGAhCwAEQEYAFHbgwQG/gtCQgoQAwgNAmgEQBQgIBKAUQAtAMAzAbQCXBQChCDQkREtksCfQjNBtjTAnQhzAUjeAJQiUAFm+AGIhwABQiWAAhUgGg");
		this.shape.setTransform(0.1658,3.2614,0.0704,0.0701);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFF5F0").s().p("AF8F4Ik8gEIo/gEQkRgCicgIQl0gTkihWQhegchHgfQhdgnhUg4QkJiripkvQF/BMGJAFQBuACBtgFQA+gCBygHQFDgUGzgeQEygTCXADQDDAEErAhQDIAWI+BJQB3AQCVALIAzAEQA8AEAuABQCeAHD7gWQCOgMB/gRQhpCBiFBmQhZBEhmA2QiIBIiyA6Qj+BSkdAeQi3ATl5AJIhcABIhBAAg");
		this.shape_1.setTransform(-0.2915,-3.3187,0.0704,0.0701);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#9F1D2E").s().p("AAmNwQk0gFijgJQmQgWjJg0QpuiioWqpQknl4jVnIQIlCQIsAuQFhAdF6gbQD+gSBfgFQDlgKEDAEQF1AGH2A2QGeAsF9gOQIYgUIGhhQkkIolZF6QoLI/o+BbQjZAjmhAAQiIAAidgEg");
		this.shape_2.setTransform(0.0057,-0.2232,0.0704,0.0701);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#DD3D59").s().p("AhaJmQiNgIiHgfQjhg0iwhtQh8hNh1huQhIhFg/hOQgmgugsg/Qh5ishRjEQFEiUEmgiQGegxEkC7QCGhICVgrQDkhCDsAJQEBAJDxBhQCaA9CEBbQiSFIkFDnQieCNjLBmQlNColXAAQglAAglgBg");
		this.shape_3.setTransform(0.0761,6.238,0.0604,0.0604);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFF5F0").s().p("AjaFsQnkg0m8jVQAug6A2gyQEAj3GKhUQDNgsDfAHQDtAIDKA4QGFBsDcEGQAkApAgAxQoODooqAAQiNAAiRgPg");
		this.shape_4.setTransform(-0.0129,-6.2014,0.0604,0.0604);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#9F1D2E").s().p("AhXXWQkMgLj9hsQiNg9iFhbQnWlDi1p+QhhlWAGk8QBCiiBfiSQCLjUC/iiQCviWDChgQFdivF3AFQFfAEFIClQC3BdDlC3QFmEcDYGaQAEEbhUEnQicImmVFOQiyCTi/BcQk5CVlJAAIg8gBg");
		this.shape_5.setTransform(0.163,0.6896,0.0604,0.0604);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FFF5F0").s().p("Am5GvQkigQkMhJQkOhJirhFQkzh8j9i9QAaguA6g5QA6g5BLg1QATgNAdgRQA7giA3gTQBcghDEAKQCQAIEOAkIHXA/QEUAhC3AEQEnAFHzgwQHWgtCYgnQCBglB6AfQAyANAyAaQBBAeBDA3QAkAeA3AxQikCajFB5Qj+CdkoBgQjXBGjtAYQiZAQloAKQjJAGiSAAQiEAAhXgFg");
		this.shape_6.setTransform(0.9598,3.917,0.0475,0.0475);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FFF5F0").s().p("AqcHkQq5gqkkiLQh/g9hWhTQiGiEhNjYQBoh5CJhNQCahYC/gTQB2gNDVAOQJCAlIcA5QMdgEFyhFQBcgQA+gEQCBgHB5AcQCOAiCRBYQCYBbB2CEQgxBlhEBgQgrA+hmB/QhEBVleBLQl5BQmlAAIj+gEQirgChIACQh2AFiBAAQj1AAkbgRg");
		this.shape_7.setTransform(0.5692,-1.2176,0.0475,0.0475);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#DD3D59").s().p("AwnEYQBEj3CgiiQChijD4hQQDrhKEFAPQEFAPDcBkQDnBqCDCxQB3CgAgDfQhXAohRARQh+AajHABIgWABQn6AAxSibg");
		this.shape_8.setTransform(0.4731,1.284,0.0475,0.0475);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#9F1D2E").s().p("AldPEQl6gQkphJQoTiDnclrQlFj5kWlTQGronIjibQC3g0CqgBQCAgBDLAhQFTA1BEAJQEZAjEsAEQEaAEEBgYQBGgHEwgoQC7gYB3ADQChAECwAyQJTCpHYIvQlKFIltDqQnyE/oTB6QjgA0kQAaQifAQiaAFQiEAEh0AAQhtAAhegDg");
		this.shape_9.setTransform(0.6725,1.2551,0.0475,0.0475);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FFF5F0").s().p("Am9GbQkVgPkAhGQn1iImxlDQAYgrAugrQAqgoBKg0QARgNAcgQQA4ggA1gTQBYgeC6AJQCKAHECAjIHCA8QEGAgCxADQEZAFHcguQHAgrCRgmQAxgMAlgEQBQgHBKASQA0AOAsAYQA+AcBOA/QApAiA7A0QiMCEjbB4QjzCIknBfQjMBDjjAXQiQAPlbAKQi8AFiJAAQiCAAhUgFg");
		this.shape_10.setTransform(0.6928,4.3922,0.0441,0.0441);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#FFF5F0").s().p("Ap6HPQqagokXiFQkZiGh+leQBqhrB/hDQCqhaDQgRQBtgJCfAPQJVA5D+AMQGPATE8giIE0gYQFxgUEuASQByAIBiAcQBxAgBuBqQBeBcAUBAQguBghABZQgkAzhkB9QhBBRlOBHQlnBMmTAAIjygDQijgChFACQhwAFh6AAQjsAAkOgRg");
		this.shape_11.setTransform(0.4776,-1.6707,0.0441,0.0441);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#DD3D59").s().p("Av3AsQA3g2BjhEQDHiIDjg/QE8haFGBEQGZBVGQFFQhKAhh8ApQj3BRj6AkQi/AbiuAAQo0AAmXkdg");
		this.shape_12.setTransform(0.1521,3.0421,0.0441,0.0441);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#9F1D2E").s().p("AlNRQQlpgQkbhFQn7h9nHlbQk2jukKlDQE5tZIai9QCvg9CyATQB5ANDbBGQEQBXCGAeQELA7EdABQEAgBDngzQB+gcDihMQDBhABqgOQChgXCoAsQJ1CmGxOrQk7E6ldDgQnbEwn7B1QjXAxkDAaQicAOiOAFQiCAFhyAAQhkAAhXgEg");
		this.shape_13.setTransform(0.5858,1.2173,0.0441,0.0441);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#DC9B7D").s().p("AABBBQiAgFiBghQiNgkhkg4QCiAaBaAMQCDAQB1AFIA+ABQAQABAPgBIAfAAQAxgBBLgIQAzgFBJgOQArgJBQgXQgmAbgQAJQgNAIgtAVQhBAbg8AOQg/APhCAGIghACIghACIgRAAIgwgBg");
		this.shape_14.setTransform(0.5892,7.4608,0.0449,0.0449);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#DC9B7D").s().p("AFiAnQhIgIgvgCIg6gEIg7gDIg7gBQgUgBgnABQh0AAh2AJQhvAHiAAPQBhgyCGgbQB0gZB+gBQAaAAAjABIA9AEIB5ATQB0AXBzA4Ih4gNg");
		this.shape_15.setTransform(0.4813,-5.4177,0.0449,0.0449);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#DC9B7D").s().p("ACUCUQg1hgg6hUQg8hZhEhMQgigmgpglQgMgMgcgXIgWgRQgPgKgIgDQAMgBAQAFIAbAIQAZAJAaAPQAsAYAxAnQBRBDBEBiQBABdAnBoQArBwAJBmQhFiAgjg+g");
		this.shape_16.setTransform(11.8661,-0.9283,0.0449,0.0449);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#DC9B7D").s().p("AjyCUQALhFAWg6IAZg8QAUgnALgTQBEhyBqhSQA0goA6gcQAdgOAfgMQAlgNAZgEQg0AggzApQgvAlgtAsQhYBXg9BnQgdAwgaA6IgWA4IgKAdIgJAdQgcBigVCTQgbh8AViFg");
		this.shape_17.setTransform(-10.7658,-0.8676,0.0449,0.0449);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#FFF5F0").s().p("AnBFEQkXgPkChGQn3iIm4lIQA2ggA+gTQBMgWBhACQBdACBfATQAxAJAdAJQCsAyGAAxQGQAyFEAJQA3ABBQAAQCTgBCKgHQGvgXDJhPQCKg1CAgbQB9gcCXgIQBUgEAqAAQBJABBGALQBWANBKAYQiNCFjcB7Qj2CIkpBfQjOBDjlAYQiSAPldAKQi+AFiKAAQiEAAhUgFg");
		this.shape_18.setTransform(0.6869,4.5633,0.0449,0.0449);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#FFF5F0").s().p("AUDGKQijgDizgeQhtgRjNguQjQguhsgSQi2geijgDQjygFmgBEQjcAkhjAMQi1AXiaAAQjPAAi9g2QiIgmh+hBQBshrB8hTQBJgxBPgoQAzgaBWgnQClhKCfguQCzgyElgeQEUgcFKABQDcABByAGQC4AJC1AcQCCAUCHAfQBKARCAAhQCzAuBYAbQBYAbA/AbIBYAqQBqA2BdA8QBSA2A4A6QArAsAiAvQiPBFiXAnQi8AwjNAAIgjAAg");
		this.shape_19.setTransform(0.4779,-2.1387,0.0449,0.0449);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#DD3D59").s().p("Ap3L4QkbgBhDhTQhYhvAYjcQAXjVB2jmQB9jzC3ipQDNi8DmgvQBGgOBKAAQB+gBB7AnQFPBrDeFtQDaFnAsH2QmxA6m7AmQpVA0jJAAIgIAAg");
		this.shape_20.setTransform(0.4143,1.7422,0.0449,0.0449);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#9F1D2E").s().p("AlQOfQlsgPkehGQn/h+nKleQk5jvkMlHQGaoRIQiWQCwgyCkgBQB7gBDDAfQFIA0BAAIQEOAiEiAEQEOAED4gYQBEgHEkgmQC1gXByADQCbAECqAwQI8CjHHIZQk9E8lgDiQngEzn/B1QldBRmuAPQiBAEhwAAQhpAAhYgEg");
		this.shape_21.setTransform(0.5734,1.7356,0.0449,0.0449);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#DC9B7D").s().p("AAFCUQiagKiahVQhGgnhAgyQhHg7grg1ICGBQQBBAkBKAfQCXA/CJAIQCSAMCNg8QB2gyCJh4QghAxgNARQgmAugQAPIgeAbIggAZIgQANIgiAWQgNAJgFACIglATIgmAQIgmANIgpALQg5ANhBAAIgpgBg");
		this.shape_22.setTransform(1.263,12.7011,0.0505,0.0505);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#DC9B7D").s().p("ACzAVQhWgOhbADQhQAChhARQhQAOhmAZQAfgdAwgcQArgYAtgRQBggjBegCQBngDBbAhIAMAEIAhAPIArAYQAoAZAkAlQh1glg+gKg");
		this.shape_23.setTransform(1.2958,-11.0035,0.0505,0.0505);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#DC9B7D").s().p("AAYGsIgQg8IgMg8IgLg8QgUh6gGh7QgGh+AHh2QAKiPAYhlQAOBmAKCNQAJB6AGB4QAGBsAECGIACB5QAABHgCA0IgTg6g");
		this.shape_24.setTransform(6.9358,1.1403,0.0505,0.0505);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#DC9B7D").s().p("AgpGMIACiFQADhYAAgsIADiDQADjGgBhCIgCiEQgChBgEhFQAKAVAOArQAKAhAHAgQAEAQAKAyIALBDQARB+gDCOIgGCHIgHBDIgJBDQgIA2gPBOIgQBBIgTBBQgDgtABhag");
		this.shape_25.setTransform(-4.488,0.9612,0.0505,0.0505);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#DD3D59").s().p("AgKGvQlGgOkEkQQiKiQhEiSQE5jvFRgoQH+g9G9GuQhRCLiPB9QkADfkqAAIgjgBg");
		this.shape_26.setTransform(1.1721,9.3997,0.0505,0.0505);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#FFF5F0").s().p("AjFHQQlngxlAixQAUhyAnhmQA8iaBjhwQCKicDJgzQBzgeDCABQDTAACIAoQD3BJCODOQB4CuAeD2QmMDem0AAQh2AAh7gRg");
		this.shape_27.setTransform(1.1721,-6.9792,0.0505,0.0505);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#9F1D2E").s().p("An8dGQjfiIh8kUQhTi3AcojQAHiBAWkfQASjjAAhNQAAiHgql/QgolfAIhnQAyqaFujuQB+hRChgcQBSgOCAAAQIoABDfF8QBPCGAoC8QAPBIAaDMQAXC1geF/QgQDIgZEAQgCA1AmGUQApG0gBE7QAACqhPCYQhJCOiFBsQh/BpihA5QigA5ikABQlHgBjfiJg");
		this.shape_28.setTransform(1.2067,0.879,0.0505,0.0505);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#9F1D2E").s().p("EAlVACIQixgIingRIjmgXInEgzIlUgmQjIgWiNgNQlmgglEgIQlwgJk8AeQiqASiqAdIlRA7QkJAtiuAPQh4AKiCgCQhKgBhigJQhigIhLgMQi9gciVgrIACgJQCgARC1ALQC5ALCbgFQCMgDC2gYIFjgtQCRgRDGgQQBygIDlgQQGAgcEvgPQC6gLCeAAICtADICsAJQFgATFOArQDnAeHBBGQDdAkB1ARQClAaCwAHIAAAJQhaAKhLACIgrAAQhAAAhJgFg");
		this.shape_29.setTransform(0.8483,0.8144,0.045,0.045);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},3).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},3).to({state:[{t:this.shape_29}]},3).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-19,-11.3,38,24.8);


	(lib.B_Yeux = function(mode,startPosition,loop,reversed) {
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
		this.shape.graphics.f("#30343D").s().p("AC4BmIgCAAIgEgBIgDAAIgDgBIgEgBIgDgBIgDgCIgDgCIgDgBIgEgDIgCgCIgDgDIgCgCIgDgEIgCgDIgBgDIgCgEIgBgDIgBgEIgBgEIAAgEIgBgEIAAgEIAAgEIAAgEIABgEIAAgFIABgEIAAgEIABgFIABgEIABgEIABgEIABgEIABgDIABgEIABgEIACgDIACgEIABgDIACgEIACgDIADgEIACgDIADgDIACgEIADgDIACgEIADgDIACgDIADgDIADgDIADgBIADgCIADgBIADgDIADgEIADgDIACgDIADgDIACgDIADgDIADgDIADgDIAEgCIADgDIADgBIADgBIADgBIADAAIADAAIAEAAIAEABIAEABIADABIADABIADACIACACIACACIACACIACADIACADIACADIACAEIABADIABAEIAAAEIABAEIAAADIABAEIAAADIAAAEIgBAEIAAAEIAAAEIAAAEIgBAEIAAAEIgBAFIAAAEIgBAFIAAAEIgBAFIgBADIgBAEIgBAFIgBAEIgBAEIgCADIgBAEIgBAEIgBAEIgCAEIgBAEIgCADIgCAEIgBAEIgCADIgCAEIgDADIgCADIgCAEIgCADIgCADIgCADIgDADIgCADIgDACIgDADIgDACIgDACIgDABIgDACIgEABIgDABIgEABIgEABIgEAAIgEAAIgDAAgADdgeIgCAEIgDADIgCAEIgCAEIgCADIgCAEIgCADIgCAEIgCACIgCAEIgCADIgBAEIgBADIAAAEIAAAEIAAADIABAEIAAgEIABgDIABgCIACgDIACgCIACgDIACgBIADgCIADgBIADgBIABgEIABgEIABgEIABgEIABgFIABgEIABgFIAAgEIABgEIAAgEIgDAEgAjdBmIgCAAIgEgBIgDAAIgDgBIgEgBIgDgBIgDgCIgDgCIgDgBIgEgDIgCgCIgDgDIgCgCIgDgEIgCgDIgBgDIgCgEIgBgDIgBgEIgBgEIAAgEIgBgEIAAgEIAAgEIAAgEIABgEIAAgFIABgEIAAgEIABgFIABgEIABgEIABgEIABgEIABgDIABgEIABgEIACgDIACgEIABgDIACgEIACgDIADgEIACgDIADgDIACgEIADgDIACgEIADgDIACgDIADgDIADgDIADgBIADgCIADgBIADgDIADgEIADgDIACgDIADgDIACgDIADgDIADgDIADgDIAEgCIADgDIADgBIADgBIADgBIADAAIADAAIAEAAIAEABIAEABIADABIADABIADACIACACIACACIACACIACADIACADIACADIACAEIABADIABAEIAAAEIABAEIAAADIABAEIAAADIAAAEIgBAEIAAAEIAAAEIAAAEIgBAEIAAAEIgBAFIAAAEIgBAFIAAAEIgBAFIgBADIgBAEIgBAFIgBAEIgBAEIgCADIgBAEIgBAEIgBAEIgCAEIgBAEIgCADIgCAEIgBAEIgCADIgCAEIgDADIgCADIgCAEIgCADIgCADIgCADIgDADIgCADIgDACIgDADIgDACIgDACIgDABIgDACIgEABIgDABIgEABIgEABIgEAAIgEAAIgDAAgAi4geIgCAEIgDADIgCAEIgCAEIgCADIgCAEIgCADIgCAEIgCACIgCAEIgCADIgBAEIgBADIAAAEIAAAEIAAADIABAEIAAgEIABgDIABgCIACgDIACgCIACgDIACgBIADgCIADgBIADgBIABgEIABgEIABgEIABgEIABgFIABgEIABgFIAAgEIABgEIAAgEIgDAEg");
		this.shape.setTransform(0.025,0.025);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#30343D").s().p("ADDAXIgEAAIgEAAIgDAAIgCAAIgEAAIgDAAIgDAAIgEAAIgDAAIgDgBIgDAAIgDAAIgEgBIgCAAIgDgBIgCgBIgDAAIgCgCIgBAAIgCgBIgBgBIgBgBIgBAAIAAgBIgBgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIABgBIABgBIABAAIABgBIABgBIACgBIACgBIABAAIACgBIACAAIADgBIACgBIADgBIACgBIADgBIACgBIADAAIACgBIADgBIADAAIADAAIADgBIADAAIADgBIADAAIADgBIACgBIADgBIACgBIADgBIADAAIADgBIAEAAIADgBIADAAIADAAIADAAIADAAIADAAIAEAAIAEAAIAEAAIADAAIADAAIADABIACAAIACABIACAAIACABIACABIACAAIACACIABAAIABABIAAABIABABIAAAAIABABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBAAIAAABIgBABIAAABIgBABIgBABIgBABIgBABIgBABIgBAAIgCABIgBABIgBABIgBABIgCABIgBABIgCABIgCABIgBABIgCAAIgCABIgDABIgCAAIgCABIgCABIgCAAIgCACIgDAAIgCABIgDABIgDAAIgDABIgDAAIgDAAIgDABIgEAAIgDAAIgEAAIgEAAgADdgGIgCABIgDABIgCAAIgCABIgCABIgCABIgCAAIgCABIgCABIgCAAIgCABIgBABIgBABIAAAAIAAABIAAABIABABIAAgBIABgBIABAAIACgBIACAAIACgBIACAAIADAAIADgBIADAAIABgBIABgBIABAAIABgBIABgBIABgBIABgBIAAgBIABgBIAAgBIgDABgAjSAXIgEAAIgEAAIgDAAIgCAAIgEAAIgDAAIgDAAIgEAAIgDAAIgDgBIgDAAIgDAAIgEgBIgCAAIgDgBIgCgBIgDAAIgCgCIgBAAIgCgBIgBgBIgBgBIgBAAIAAgBIgBgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIABgBIABgBIABAAIABgBIABgBIACgBIACgBIABAAIACgBIACAAIADgBIACgBIADgBIACgBIADgBIACgBIADAAIACgBIADgBIADAAIADAAIADgBIADAAIADgBIADAAIADgBIACgBIADgBIACgBIADgBIADAAIADgBIAEAAIADgBIADAAIADAAIADAAIADAAIADAAIAEAAIAEAAIAEAAIADAAIADAAIADABIACAAIACABIACAAIACABIACABIACAAIACACIABAAIABABIAAABIABABIAAAAIABABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBAAIAAABIgBABIAAABIgBABIgBABIgBABIgBABIgBABIgBAAIgCABIgBABIgBABIgBABIgCABIgBABIgCABIgCABIgBABIgCAAIgCABIgDABIgCAAIgCABIgCABIgCAAIgCACIgDAAIgCABIgDABIgDAAIgDABIgDAAIgDAAIgDABIgEAAIgDAAIgEAAIgEAAgAi4gGIgCABIgDABIgCAAIgCABIgCABIgCABIgCAAIgCABIgCABIgCAAIgCABIgBABIgBABIAAAAIAAABIAAABIABABIAAgBIABgBIABAAIACgBIACAAIACgBIACAAIADAAIADgBIADAAIABgBIABgBIABAAIABgBIABgBIABgBIABgBIAAgBIABgBIAAgBIgDABg");
		this.shape_1.setTransform(0.025,0);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},34).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-27.2,-10.2,54.5,20.5);


	(lib.A_Yeux = function(mode,startPosition,loop,reversed) {
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
		this.shape.graphics.f("#30343D").s().p("ADJBUIgCAAIgEAAIgDAAIgEgBIgEgBIgDgBIgFgBIgCgCIgEgCIgDgCIgCgDIgDgCIgCgDIgCgDIgBgDIgBgCIgBgDIgBgCIgCgEIgBgEIAAgEIgBgEIAAgEIAAgEIgBgFIABgEIAAgFIABgEIAAgFIABgEIACgDIABgFIABgEIACgEIABgEIABgDIACgEIACgEIACgDIABgEIACgDIACgDIACgDIACgDIACgDIACgDIADgEIACgDIACgDIACgDIAAABIABgBIAAAAIABgBIAAgBIABAAIAAAAIABgBIABgCIABgCIADgCIADgCIACgBIADgBIAEgBIAEAAIAEAAIADABIAEgBIAEgBIACgBIADAAIAEAAIADAAIAEABIADABIADABIAEABIACACIACABIAEACIADADIACADIACADIACADIACADIABAEIACADIABAEIABAEIABAEIABADIABAEIAAAEIABAFIAAAEIAAAEIAAAEIgBAEIAAAFIgBADIAAAFIgBAEIgBADIgCADIgBAEIgBADIgBAEIgCAEIgDADIgCAEIgBADIgDAEIgDADIgCADIgDADIgDADIgCADIgDADIgDACIgDADIgDACIgDACIgDACIgCACIgFACIgDACIgEACIgEABIgCABIgEABIgEAAIgCAAgAjlBUIgCAAIgEAAIgDAAIgEgBIgEgBIgDgBIgFgBIgCgCIgDgCIgEgCIgCgDIgDgCIgCgDIgCgDIgBgDIgBgCIgBgDIgBgCIgBgEIgCgEIAAgEIgBgEIAAgEIAAgEIgBgFIABgEIAAgFIABgEIAAgFIACgEIABgDIABgFIABgEIABgEIACgEIABgDIACgEIACgEIABgDIACgEIACgDIACgDIACgDIACgDIACgDIADgDIACgEIACgDIACgDIADgDIAAABIAAgBIAAAAIABgBIAAgBIABAAIAAAAIABgBIAAgCIACgCIADgCIADgCIACgBIADgBIAEgBIAEAAIAEAAIADABIAEgBIAEgBIACgBIAEAAIADAAIADAAIAEABIADABIADABIAEABIACACIACABIAEACIACADIADADIACADIACADIACADIABAEIACADIABAEIABAEIABAEIABADIABAEIAAAEIABAFIAAAEIAAAEIAAAEIgBAEIAAAFIgBADIAAAFIgBAEIgBADIgCADIgBAEIgBADIgBAEIgCAEIgDADIgCAEIgCADIgCAEIgDADIgCADIgDADIgCADIgDADIgDADIgDACIgDADIgDACIgDACIgDACIgDACIgDACIgEACIgEACIgEABIgDABIgDABIgEAAIgCAAg");
		this.shape.setTransform(0,0.025);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#30343D").s().p("ADTAOIgEAAIgEAAIgCAAIgCAAIgEAAIgDAAIgEAAIgEAAIgDAAIgFAAIgCgBIgEAAIgDAAIgCgBIgDAAIgCgBIgCAAIgBgBIgBAAIgBgBIgBAAIgCgBIgBgBIAAAAIgBgBIAAgBIAAAAIgBgBIABAAIAAgBIABgBIAAgBIABAAIACgBIABAAIABgBIACgBIABAAIABgBIACgBIACAAIACAAIABgBIACAAIACgBIACAAIACgBIACAAIACgBIADgBIACgBIACAAIACgBIAAABIABgBIACAAIABAAIABAAIABgBIADAAIADAAIACgBIADAAIAEAAIAEAAIAEAAIADAAIAEAAIAEAAIACAAIADAAIAEAAIADAAIAEAAIADAAIADAAIAEAAIACABIACAAIAEAAIADABIACAAIACABIACAAIACABIABAAIACABIABABIABABIABAAIABABIABABIAAAAIABABIAAABIAAABIgBAAIAAABIgBAAIAAABIgBABIgBAAIgCABIgBAAIgBABIgBAAIgCABIgDAAIgCABIgBABIgDAAIgDABIgCAAIgDABIgDABIgCAAIgDABIgDAAIgDAAIgDABIgDAAIgDABIgCAAIgFAAIgDABIgEAAIgEAAIgCAAgAjcAOIgDAAIgEAAIgCAAIgCAAIgEAAIgDAAIgEAAIgEAAIgDAAIgFAAIgCgBIgDAAIgEAAIgCgBIgDAAIgCgBIgCAAIgBgBIgBAAIgBgBIgBAAIgBgBIgCgBIAAAAIgBgBIAAgBIAAAAIgBgBIABAAIAAgBIABgBIAAgBIACAAIABgBIABAAIABgBIABgBIACAAIABgBIACgBIACAAIABAAIACgBIACAAIACgBIACAAIACgBIACAAIADgBIACgBIACgBIACAAIADgBIAAABIAAgBIACAAIABAAIAAAAIACgBIADAAIADAAIACgBIADAAIAEAAIAEAAIAEAAIADAAIAEAAIAEAAIACAAIAEAAIADAAIADAAIAEAAIADAAIADAAIAEAAIACABIACAAIAEAAIACABIADAAIACABIACAAIACABIABAAIACABIABABIABABIABAAIABABIABABIAAAAIABABIAAABIAAABIgBAAIAAABIgBAAIAAABIgBABIgBAAIgCABIgBAAIgBABIgBAAIgCABIgDAAIgCABIgCABIgCAAIgDABIgCAAIgDABIgCABIgDAAIgDABIgDAAIgDAAIgDABIgDAAIgDABIgDAAIgDAAIgEABIgEAAIgEAAIgDAAg");

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},44).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-28.1,-8.4,56.3,16.9);


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

		// A_Yeux
		this.instance = new lib.A_Yeux("synched",0);
		this.instance.setTransform(135.6,54.9);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

		// A_Bouche
		this.instance_1 = new lib.Bouche("single",0);
		this.instance_1.setTransform(133.35,90.75);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({mode:"synched"},0).wait(41).to({mode:"single"},0).wait(36));

		// A_Jambe_gauche
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#30343D").s().p("AgVDbIgFACQgJAFgIgFQgIgFgBgKIgrmuQgCgRASAAQARAAACARIAoGSIADACIACABQAcgGAcAIQAcAHAWAVQAIAJgFAKQgEAKgMABIgRABQgsAAgmgXg");
		this.shape.setTransform(92.4177,134.6208,1,1,0,0,180);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

		// A_Jambe_droite
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#30343D").s().p("Ag/DfQgLgEgBgKQgBgLAJgHQAugjA7AGQgmi6gSi9QgCgRASAAQAQAAACARQAUDIAoC/QACAHgEAHQgEAGgGABQgCAIgGADQgcARgeADIgPABQgYAAgWgIg");
		this.shape_1.setTransform(115.1096,136.2922,1,1,0,0,180);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(90));

		// A_Bras_gauche
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#30343D").s().p("AgbD8IgEgCIgBAAIgGgDQgMAGgPgEQgOgEgLgMQgIgHgJgNIgPgWIgigxQgGgKAIgKQAAgOANgEQCEgxB7hGQhuhmhshpQgMgLAMgMQAMgNAMAMQBsBpB/B1QAGAGgBAJQgCAIgHADQh3BHh7AwQAXAPAPASIAVAdQAMATAAAPIAGADQANAHgGAPQgFALgIAAIgHgBgAhUCsIgOgNIAKANIAEAAg");
		this.shape_2.setTransform(15.9587,75.9983,1,1,0,0,180);

		this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(90));

		// A_Corps
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#D63C41").s().p("AA/BvQgpgIgWgeQgXggAIgrQAGgggRgVQgQgSgagEQgbgFgWAPQgWAPgGAcQAAAGgGAEQgGAEgGgBQgHgBgEgGQgDgFABgHQAHgoAhgXQAigXAoAHQArAIAVAfQAVAfgHAqQgGAfAQAUQAOATAdAGQAbAFAWgQQAXgPAEgbQABgHAFgDQAHgEAGABQAHABADAFQAEAGgBAHQgHAjgbAXQgcAWgiAAg");
		this.shape_3.setTransform(148.75,88.4433,1,1,0,0,180);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#D63C41").s().p("AA/BuQgrgIgVgfQgWgfAIgpQAGgegPgVQgOgUgegGQgbgFgWAQQgWAQgFAaQgBAHgGAEQgFADgHgBQgGgBgEgFQgEgGABgGQAHgoAigXQAhgXAoAHQAqAHAWAgQAWAggIApQgGAhARAUQAPASAbAFQAbAEAWgPQAWgQAFgaQABgHAGgEQAFgEAHACQAHABADAFQAEAGgBAGQgHAkgbAWQgbAXgjAAg");
		this.shape_4.setTransform(124.4657,93.0683,1,1,0,0,180);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#D63C41").s().p("ABKB/QgvgJgZghQgagkAJgyQAGgkgRgZQgRgZgkgGQgggGgcATQgbASgGAhQgBAGgFAEQgGAEgGgBQgHgBgEgGQgDgFABgHQAHgtAngbQAmgaAuAIQAwAJAZAkQAYAkgIAwQgHAkATAZQASAYAiAGQAgAGAcgTQAbgTAFggQACgHAFgEQAGgDAGABQAHABAEAFQADAGgBAGQgIAugmAaQgcAUgkAAg");
		this.shape_5.setTransform(76.975,86.0322,1,1,0,0,180);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#D63C41").s().p("AioBLQgQgmAPgmQAPgnAmgQQAogSAlAOQAlAOARApQANAcAZAJQAXAHAcgLQAagMAKgZQALgagMgaQgDgGADgGQACgHAGgCQAGgDAHACQAGADADAGQAQAmgPAmQgPAmgmARQgoARgjgMQgmgNgSgqQgMgbgYgKQgZgJgcAMQgaAMgKAZQgKAaALAaQACAGgCAGQgCAGgGADIgHABQgLAAgEgJg");
		this.shape_6.setTransform(106.425,64.2556,1,1,0,0,180);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#D63C41").s().p("AhlBSQgpgIgXgjQgXgiAIgoQACgHAFgEQAFgDAHABQAHABADAGQAEAFgBAHQgGAcAQAWQAQAYAbAFQAfAGAVgPQAXgOAFgeQAJgrAggWQAggVAsAIQAoAJAXAiQAYAigIAoQgBAHgGADQgFAEgHgBQgHgBgDgGQgEgGABgGQAGgcgQgWQgQgYgcgFQgbgFgVALQgYANgHAhQgHAlgZAWQgaAWgkAAQgMAAgLgCg");
		this.shape_7.setTransform(62.6,67.0546,1,1,0,0,180);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#D63C41").s().p("AAPBRQgegeAAgyQAAgjgWgWQgVgWglAAQghAAgXAYQgXAXAAAgQAAAGgFAFQgFAFgGAAQgHAAgFgFQgEgFAAgGQAAguAgggQAhghAuAAQAyAAAfAfQAeAgAAAwQAAAoAaAVQAVARAhAAQAhAAAXgXQAXgYAAggQAAgGAFgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAtggAiQghAgguAAQgzAAgegeg");
		this.shape_8.setTransform(110.625,18,1,1,0,0,180);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#D63C41").s().p("AhNAcQgFgFAAgGQAAgHAEgFQAfghAugCQAtgCAiAeQAFAEAAAGQAAAHgEAFQgFAFgGAAQgGAAgFgEQgZgVggABQghABgVAZQgFAFgHAAQgHAAgEgEg");
		this.shape_9.setTransform(55.9,33.8938,1,1,0,0,180);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#D63C41").s().p("AgQBQQgFgFAAgGQgBgHAFgFQAUgZgDggQgBgggZgVQgFgFgBgGQAAgHAEgFQAEgFAHgBQAHAAAFAEQAiAfADAtQAEAsgeAkQgFAFgGAAQgHAAgEgDg");
		this.shape_10.setTransform(61.979,28.7475,1,1,0,0,180);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#D63C41").s().p("AgjApQgHgBgEgFQgEgGABgGQAFgeAZgTQAYgSAfAFQAHABAEAFQAEAFgBAHQgBAGgGAEQgFAEgHgBQgRgCgOAKQgOAKgDASQgCANgOAAg");
		this.shape_11.setTransform(77.475,107.4718,1,1,0,0,180);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#D63C41").s().p("AAXAxQgGAAgEgGQgEgFAAgHQADgSgMgNQgJgNgSgDQgHAAgEgGQgEgFABgHQABgGAFgEQAFgEAHAAQAeAEATAZQATAXgEAfQAAAGgFAEQgFAEgGAAg");
		this.shape_12.setTransform(83.3937,106.6972,1,1,0,0,180);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#D63C41").s().p("AAhAqQgGAAgFgEQgEgEgBgGQgDgSgNgKQgNgLgSACQgHABgFgEQgFgFgBgGQgBgHAEgFQAFgFAGgBQAfgEAYAUQAYATAEAeQABAHgFAFQgEAGgHAAg");
		this.shape_13.setTransform(114.8437,47.816,1,1,0,0,180);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#D63C41").s().p("AgZAyQgFAAgFgEQgEgEgBgGQgBgHAEgFQAEgFAGgBQASgDAKgOQAKgOgCgRQgBgHAEgFQAEgFAGgBQAHgBAFAEQAGADABAHQAEAfgTAYQgSAZgeAFg");
		this.shape_14.setTransform(115.5669,41.89,1,1,0,0,180);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#D63C41").s().p("AATBMQgHgCgCgGQgDgGACgHQAMgegNgdQgNgegegLQgHgCgCgHQgDgGACgGQADgGAGgDQAGgDAGADQAqAQATAqQATApgQArQgEAKgLAAg");
		this.shape_15.setTransform(38.7161,81.6125,1,1,0,0,180);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#D63C41").s().p("AhBApQgGgCgDgGQgDgGACgGQADgHAFgCQAGgDAHACQAfALAcgOQAdgOALgeQADgHAFgDQAGgCAHACQAGACADAGQADAGgCAGQgQArgpAUQgVALgaAAQgTAAgSgHg");
		this.shape_16.setTransform(35.7126,72.8556,1,1,0,0,180);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#D63C41").s().p("AANBPQgmgZgJgtQgKgsAZgmQAEgGAHgBQAGgCAFAEQAFAEACAGQABAHgEAFQgQAcAGAeQAGAgAbASQAGAEABAHQACAGgEAGQgFAHgIAAQgFAAgEgDg");
		this.shape_17.setTransform(161.3333,61.4275,1,1,0,0,180);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#D63C41").s().p("AhJAlQgFgEgCgHQgBgGADgGQAYgmAtgKQArgLAoAYQAFADACAHQACAHgEAEQgEAGgGABQgGACgGgEQgbgPggAHQgfAHgRAbQgFAIgJAAQgFAAgEgCg");
		this.shape_18.setTransform(165.7,68.8271,1,1,0,0,180);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#D63C41").s().p("AgHA/QgGgEgBgHQgBgHAEgFQAMgSgCgWQgDgWgTgOQgFgEgBgHQgBgGAEgGQAEgFAGgBQAHgBAFAEQAcAWAGAjQAFAjgVAdQgFAHgIAAQgEAAgEgDg");
		this.shape_19.setTransform(73.6029,40.0139,1,1,0,0,180);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#D63C41").s().p("AgIA/QgFgEgBgHQgBgHAEgFQAMgSgCgWQgEgXgSgNQgGgEgBgHQgBgGAEgGQAEgFAHgBQAGgBAGAEQAcAWAFAjQAGAigVAeQgGAHgHAAQgFAAgEgDg");
		this.shape_20.setTransform(30.9945,58.0139,1,1,0,0,180);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#D63C41").s().p("AAbAsQgcAAgVgVQgVgVAAgcQAAgHAFgFQAEgFAHAAQAHAAAEAFQAFAFAAAGQAAAQALALQAMAMAPgBQAIAAAEAFQAFAFAAAGQAAAHgEAFQgFAEgHABg");
		this.shape_21.setTransform(158.95,95.825,1,1,0,0,180);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#D63C41").s().p("Ag+BAQgFgFAAgGQAAgyAjgiQAigkAxAAQAHgBAFAFQAEAFABAHQAAAGgFAFQgFAFgGAAQglAAgYAaQgaAZAAAkQAAAHgEAFQgFAFgHAAQgGAAgFgFg");
		this.shape_22.setTransform(160.8253,40.5477,1,1,0,0,180);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#D63C41").s().p("AhjASQgGgDgBgHQgCgHAEgEQAEgGAHgBQAGgBAGAEQAnAaAugJQAvgIAbgnQAEgFAHgBQAGgBAFADQAGAEABAHQABAGgDAGQgWAdggARQggAQgjAAQguAAglgag");
		this.shape_23.setTransform(91.75,53.2139,1,1,0,0,180);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#D63C41").s().p("AgbBOQgEgFAAgGQAAgHAFgEQAZgXABghQAAgfgVgZQgEgFAAgGQAAgHAFgEQAFgFAHABQAGAAAEAFQAfAigCAtQgCAughAfQgEAFgHAAQgGAAgGgGg");
		this.shape_24.setTransform(141.1465,74.5975,1,1,0,0,180);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#D63C41").s().p("AgCAoQhFgDgugyQgFgFABgGQAAgHAFgEQAFgFAGABQAHAAAFAFQAlAoA4ACQA2ADApglQAFgFAHABQAHAAAEAFQAFAFgBAGQAAAHgFAFQgwAqhAAAg");
		this.shape_25.setTransform(141.075,65.4225,1,1,0,0,180);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#D63C41").s().p("AgyBBQgGAAgFgFQgFgEAAgHQABgwAiggQAigiAwABQAGAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAQgigBgYAZQgZAXAAAiQAAAHgFAFQgFAEgGAAg");
		this.shape_26.setTransform(140.875,51.0246,1,1,0,0,180);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#D63C41").s().p("AAxBDQgvgBgigiQghgiABgwQAAgGAEgFQAFgFAHAAQAGAAAFAFQAFAFAAAHQAAAjAYAXQAXAZAiAAQAHABAFAEQAEAFAAAHQAAAGgFAFQgEAFgHAAg");
		this.shape_27.setTransform(143.8265,53.875,1,1,0,0,180);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#D63C41").s().p("AglA6QgDgGACgGQADgGAGgDQAYgKAIgYQAKgXgLgYQgCgGACgGQACgHAGgCQAGgDAGACQAHADACAGQAQAjgOAkQgPAlgiAQQgDABgEAAQgKAAgEgKg");
		this.shape_28.setTransform(73.3178,20.1932,1,1,0,0,180);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#D63C41").s().p("AAlAeQgKgXgYgJQgYgJgXAKQgGACgHgCQgGgCgDgGQgCgGACgGQADgHAGgCQAjgQAkAOQAlAOAPAjQADAGgCAGQgDAHgGACQgDACgDAAQgKAAgFgKg");
		this.shape_29.setTransform(72.4807,16.8303,1,1,0,0,180);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#D63C41").s().p("Ag9A9QgFgFAAgHQABgwAiggQAigiAwABQAGgBAFAGQAFAEAAAHQgBAHgEAFQgFAEgHAAQgiAAgYAXQgZAYgBAjQAAAGgEAFQgFAFgHAAQgHgBgEgEg");
		this.shape_30.setTransform(108.375,81.5996,1,1,0,0,180);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#D63C41").s().p("AgfAgQgighABgwQAAgHAEgFQAGgFAGABQAHAAAFAFQAEAEAAAHQAAAjAYAYQAXAYAjABQAGAAAFAFQAFAEgBAHQAAAHgEAEQgFAFgHAAQgwgBgggig");
		this.shape_31.setTransform(111.3504,84.4477,1,1,0,0,180);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#D63C41").s().p("AAAAhQg0AAgmgjQgEgFgBgHQAAgGAFgFQAEgFAIAAQAGAAAEAFQAdAbAngBQAoAAAcgcQAEgFAIAAQAGAAAFAEQAFAFgBAHQABAGgFAFQglAlg1ABg");
		this.shape_32.setTransform(55.95,42.775,1,1,0,0,180);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#D63C41").s().p("ABlBEQgEgFgBgHQAAgngcgcQgcgcgoAAQgnAAgcAcQgcAcAAAnQAAAHgFAFQgFAEgGAAQgHAAgFgEQgEgFgBgHQAAg1AmglQAmglA0AAQA2AAAlAlQAmAlAAA1QAAAHgFAFQgFAEgGAAQgHAAgFgEg");
		this.shape_33.setTransform(58.15,50.025,1,1,0,0,180);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#D63C41").s().p("AguBEQgHAAgFgEQgEgFgBgGQAAgHAFgFQAEgFAHAAQAjgCAWgZQAXgZgBgiQgBgHAFgFQAEgFAHAAQAHgBAFAFQAEAFABAGQACAwggAiQghAkgvACg");
		this.shape_34.setTransform(105.7661,107.6725,1,1,0,0,180);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#D63C41").s().p("AAwB0QguAAggggQgjgggCgwQgBgvAhgjQAhgjAvgCQAHAAAEAEQAFAFAAAHQABAHgFAEQgEAFgHAAQgjACgXAZQgXAZABAiQABAiAZAYQAYAYAjgBQAGgBAFAFQAFAEABAHQAAAHgFAFQgEAFgHAAg");
		this.shape_35.setTransform(95.8783,102.9225,1,1,0,0,180);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#D63C41").s().p("AA0ByQgFgFAAgGQAAgHAFgEQAfgeABgrQACgqgegfQgdgfgqgBQgrgBgfAdQgFAFgHAAQgGAAgFgFQgFgFABgHQAAgHAFgEQApgnA4ACQA3ABAnApQAmApgBA3QgCA5gpAmQgFAEgGAAQgHAAgEgFg");
		this.shape_36.setTransform(135.3995,47.5722,1,1,0,0,180);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#D63C41").s().p("ABWBoQgFgDgCgHQgCgGAEgGQAWglgLgpQgLgpglgWQglgWgoALQgqALgWAlQgDAGgHABQgGACgGgDQgFgEgCgGQgCgHAEgFQAbgxA4gOQA0gOAyAdQAvAcAPA3QAOA1gdAxQgEAHgJAAQgFAAgEgCg");
		this.shape_37.setTransform(58.1085,88.6583,1,1,0,0,180);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#D63C41").s().p("AhGA2QgfgYgKglQgBgHADgFQADgGAHgCQAGgBAGADQAGADACAHQAIAgAdARQAdARAggJQAggIASgdQARgcgJghQgBgGADgGQADgGAHgBQAGgCAGADQAGAEACAGQALAugYAnQgYApgtAMQgOADgOAAQgmAAgfgXg");
		this.shape_38.setTransform(94.6112,39.9886,1,1,0,0,180);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#D63C41").s().p("AhGA2QgfgYgKglQgBgHADgFQAEgGAGgCQAHgCAFAEQAGADACAHQAIAfAdARQAdASAggJQAhgIARgdQARgdgIggQgCgHADgFQAEgGAGgCQAHgBAFADQAGADACAHQALAugXAnQgYApguALQgPAEgMAAQgnAAgfgXg");
		this.shape_39.setTransform(129.7586,25.3775,1,1,0,0,180);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#DB5B58").s().p("ADyIFQgYgNgPgYQgRAYgZANQgaAOgfAAQgeAAgagOQgagNgQgYQgPAYgaANQgaAOgfAAQgfAAgagOQgagNgQgYQgRAYgZANQgaAOgeAAQglAAgegUQgdgTgOgfQgfAcgrAAQguAAghggQggghAAgvQAAgIABgIQgMADgKAAQguAAghggQgggiAAgtQAAglAVgdQgkgKgXgeQgYgdAAgnQAAgiATgcQATgbAegNQggggAAgtQAAgvAhggQAhghAuAAIALAAQgEgOAAgPQAAguAgghQAhghAuABQAWAAAWAJQABguAgggQAhgfAtgBQAkAAAeAXQALgjAdgWQAegWAlAAQAZAAAXALQAWALAPASQAOgcAagPQAbgRAgAAQAfAAAcARQAaAQAOAcQAPgTAXgLQAXgLAZAAQAlAAAeAWQAdAWALAjQAegXAkAAQAtABAhAfQAgAgABAuQAWgJAWAAQAugBAhAhQAgAhAAAuQAAAPgEAOIALAAQAvAAAgAhQAhAgAAAvQAAAtggAgQAeANATAbQATAcAAAiQAAAngYAdQgXAegkAKQAVAdAAAlQAAAtggAiQghAgguAAQgKAAgMgDQABAIAAAIQAAAvggAhQghAgguAAQgrAAgggdQgMAggcATQgcAUgjAAQgdAAgZgOg");
		this.shape_40.setTransform(101.275,60.3,1,1,0,0,180);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#D63C41").s().p("ADKIIQgqAlg4AAQg5AAgpgmQgpAmg5AAQg6gBgpgkQgqAkg4ABQgkAAgfgQQgfgQgUgbQggAQgiAAQg1ABgogkQgnglgEg1Qg4gBgmgoQgngoAAg3QAAgcAKgaQghgRgTghQgUggAAgmQAAghAPgdQAPgcAagTQgUgiAAgkQAAg0AignQAigmAzgIIAAgEQAAg4AogpQAogoA5AAIAXACQAMgtAlgcQAlgdAuAAQAeAAAZALQASgfAfgTQAggSAlAAQAtAAAkAaQATgWAbgMQAbgMAeAAQAeAAAbAMQAbANATAWQAlgbAtAAQAlAAAgASQAfATASAfQAZgLAeAAQAuAAAlAdQAlAcAMAtIAXgCQA5AAAoAoQAoApAAA4IAAAEQAzAIAiAmQAiAnAAA0QAAAkgUAiQAaATAPAcQAPAdAAAhQAAAmgUAgQgTAhghARQAKAaAAAcQAAA3gmAoQgnAog4ABQgEA1gnAlQgoAkg1gBQgiAAgggQQgTAbgdAQQgeAQgiAAQg2AAgoglg");
		this.shape_41.setTransform(101.275,60.3,1,1,0,0,180);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(90));

		// B_Yeux
		this.instance_2 = new lib.B_Yeux("synched",0);
		this.instance_2.setTransform(256.3,56.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

		// B_Bouche
		this.instance_3 = new lib.Bouche("single",18);
		this.instance_3.setTransform(254,90.95,1.1635,1.1635,0,0,0,0,1.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({regY:1.1,scaleX:1,scaleY:1,x:255.95,y:91.85,mode:"synched",startPosition:0},0).wait(36));

		// B_Jambe_droite
		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#30343D").s().p("AgVDbIgFACQgJAFgIgFQgIgFgBgKIgrmuQgCgRASAAQARAAACARIAoGSIADACIACABQAcgGAcAIQAcAHAWAVQAIAJgFAKQgEAKgMABIgRABQgsAAgmgXg");
		this.shape_42.setTransform(301.6323,135.2208);

		this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(90));

		// B_Jambe_gauche
		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#30343D").s().p("Ag/DfQgLgEgBgKQgBgLAJgHQAugjA7AGQgmi6gSi9QgCgRASAAQAQAAACARQAUDIAoC/QACAHgEAHQgEAGgGABQgCAIgGADQgcARgeADIgPABQgYAAgWgIg");
		this.shape_43.setTransform(278.9405,136.8922);

		this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(90));

		// B_Bras_droite
		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#30343D").s().p("AgbD8IgEgCIgBAAIgGgDQgMAGgPgEQgOgEgLgMQgIgHgJgNIgPgWIgigxQgGgKAIgKQAAgOANgEQCEgxB7hGQhuhmhshpQgMgLAMgMQAMgNAMAMQBsBpB/B1QAGAGgBAJQgCAIgHADQh3BHh7AwQAXAPAPASIAVAdQAMATAAAPIAGADQANAHgGAPQgFALgIAAIgHgBgAhUCsIgOgNIAKANIAEAAg");
		this.shape_44.setTransform(378.0913,76.5983);

		this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(90));

		// B_Corps
		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#D63C41").s().p("AA/BvQgpgIgWgeQgXggAIgrQAGgggRgVQgQgSgagEQgbgFgWAPQgWAPgGAcQAAAGgGAEQgGAEgGgBQgHgBgEgGQgDgFABgHQAHgoAhgXQAigXAoAHQArAIAVAfQAVAfgHAqQgGAfAQAUQAOATAdAGQAbAFAWgQQAXgPAEgbQABgHAFgDQAHgEAGABQAHABADAFQAEAGgBAHQgHAjgbAXQgcAWgiAAg");
		this.shape_45.setTransform(245.3,89.0433);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#D63C41").s().p("AA/BuQgrgIgVgfQgWgfAIgpQAGgegPgVQgOgUgegGQgbgFgWAQQgWAQgFAaQgBAHgGAEQgFADgHgBQgGgBgEgFQgEgGABgGQAHgoAigXQAhgXAoAHQAqAHAWAgQAWAggIApQgGAhARAUQAPASAbAFQAbAEAWgPQAWgQAFgaQABgHAGgEQAFgEAHACQAHABADAFQAEAGgBAGQgHAkgbAWQgbAXgjAAg");
		this.shape_46.setTransform(269.5843,93.6683);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#D63C41").s().p("ABKB/QgvgJgZghQgagkAJgyQAGgkgRgZQgRgZgkgGQgggGgcATQgbASgGAhQgBAGgFAEQgGAEgGgBQgHgBgEgGQgDgFABgHQAHgtAngbQAmgaAuAIQAwAJAZAkQAYAkgIAwQgHAkATAZQASAYAiAGQAgAGAcgTQAbgTAFggQACgHAFgEQAGgDAGABQAHABAEAFQADAGgBAGQgIAugmAaQgcAUgkAAg");
		this.shape_47.setTransform(317.075,86.6322);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#D63C41").s().p("AioBLQgQgmAPgmQAPgnAmgQQAogSAlAOQAlAOARApQANAcAZAJQAXAHAcgLQAagMAKgZQALgagMgaQgDgGADgGQACgHAGgCQAGgDAHACQAGADADAGQAQAmgPAmQgPAmgmARQgoARgjgMQgmgNgSgqQgMgbgYgKQgZgJgcAMQgaAMgKAZQgKAaALAaQACAGgCAGQgCAGgGADIgHABQgLAAgEgJg");
		this.shape_48.setTransform(287.625,64.8556);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#D63C41").s().p("AhlBSQgpgIgXgjQgXgiAIgoQACgHAFgEQAFgDAHABQAHABADAGQAEAFgBAHQgGAcAQAWQAQAYAbAFQAfAGAVgPQAXgOAFgeQAJgrAggWQAggVAsAIQAoAJAXAiQAYAigIAoQgBAHgGADQgFAEgHgBQgHgBgDgGQgEgGABgGQAGgcgQgWQgQgYgcgFQgbgFgVALQgYANgHAhQgHAlgZAWQgaAWgkAAQgMAAgLgCg");
		this.shape_49.setTransform(331.45,67.6546);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#D63C41").s().p("AAPBRQgegeAAgyQAAgjgWgWQgVgWglAAQghAAgXAYQgXAXAAAgQAAAGgFAFQgFAFgGAAQgHAAgFgFQgEgFAAgGQAAguAgggQAhghAuAAQAyAAAfAfQAeAgAAAwQAAAoAaAVQAVARAhAAQAhAAAXgXQAXgYAAggQAAgGAFgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAtggAiQghAgguAAQgzAAgegeg");
		this.shape_50.setTransform(283.425,18.6);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#D63C41").s().p("AhNAcQgFgFAAgGQAAgHAEgFQAfghAugCQAtgCAiAeQAFAEAAAGQAAAHgEAFQgFAFgGAAQgGAAgFgEQgZgVggABQghABgVAZQgFAFgHAAQgHAAgEgEg");
		this.shape_51.setTransform(338.15,34.4938);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#D63C41").s().p("AgQBQQgFgFAAgGQgBgHAFgFQAUgZgDggQgBgggZgVQgFgFgBgGQAAgHAEgFQAEgFAHgBQAHAAAFAEQAiAfADAtQAEAsgeAkQgFAFgGAAQgHAAgEgDg");
		this.shape_52.setTransform(332.071,29.3475);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#D63C41").s().p("AgjApQgHgBgEgFQgEgGABgGQAFgeAZgTQAYgSAfAFQAHABAEAFQAEAFgBAHQgBAGgGAEQgFAEgHgBQgRgCgOAKQgOAKgDASQgCANgOAAg");
		this.shape_53.setTransform(316.575,108.0718);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#D63C41").s().p("AAXAxQgGAAgEgGQgEgFAAgHQADgSgMgNQgJgNgSgDQgHAAgEgGQgEgFABgHQABgGAFgEQAFgEAHAAQAeAEATAZQATAXgEAfQAAAGgFAEQgFAEgGAAg");
		this.shape_54.setTransform(310.6563,107.2972);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#D63C41").s().p("AAhAqQgGAAgFgEQgEgEgBgGQgDgSgNgKQgNgLgSACQgHABgFgEQgFgFgBgGQgBgHAEgFQAFgFAGgBQAfgEAYAUQAYATAEAeQABAHgFAFQgEAGgHAAg");
		this.shape_55.setTransform(279.2063,48.416);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#D63C41").s().p("AgZAyQgFAAgFgEQgEgEgBgGQgBgHAEgFQAEgFAGgBQASgDAKgOQAKgOgCgRQgBgHAEgFQAEgFAGgBQAHgBAFAEQAGADABAHQAEAfgTAYQgSAZgeAFg");
		this.shape_56.setTransform(278.4831,42.49);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#D63C41").s().p("AATBMQgHgCgCgGQgDgGACgHQAMgegNgdQgNgegegLQgHgCgCgHQgDgGACgGQADgGAGgDQAGgDAGADQAqAQATAqQATApgQArQgEAKgLAAg");
		this.shape_57.setTransform(355.3339,82.2125);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#D63C41").s().p("AhBApQgGgCgDgGQgDgGACgGQADgHAFgCQAGgDAHACQAfALAcgOQAdgOALgeQADgHAFgDQAGgCAHACQAGACADAGQADAGgCAGQgQArgpAUQgVALgaAAQgTAAgSgHg");
		this.shape_58.setTransform(358.3374,73.4556);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#D63C41").s().p("AANBPQgmgZgJgtQgKgsAZgmQAEgGAHgBQAGgCAFAEQAFAEACAGQABAHgEAFQgQAcAGAeQAGAgAbASQAGAEABAHQACAGgEAGQgFAHgIAAQgFAAgEgDg");
		this.shape_59.setTransform(232.7167,62.0275);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#D63C41").s().p("AhJAlQgFgEgCgHQgBgGADgGQAYgmAtgKQArgLAoAYQAFADACAHQACAHgEAEQgEAGgGABQgGACgGgEQgbgPggAHQgfAHgRAbQgFAIgJAAQgFAAgEgCg");
		this.shape_60.setTransform(228.35,69.4271);

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#D63C41").s().p("AgHA/QgGgEgBgHQgBgHAEgFQAMgSgCgWQgDgWgTgOQgFgEgBgHQgBgGAEgGQAEgFAGgBQAHgBAFAEQAcAWAGAjQAFAjgVAdQgFAHgIAAQgEAAgEgDg");
		this.shape_61.setTransform(320.4471,40.6139);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#D63C41").s().p("AgIA/QgFgEgBgHQgBgHAEgFQAMgSgCgWQgEgXgSgNQgGgEgBgHQgBgGAEgGQAEgFAHgBQAGgBAGAEQAcAWAFAjQAGAigVAeQgGAHgHAAQgFAAgEgDg");
		this.shape_62.setTransform(363.0555,58.6139);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#D63C41").s().p("AAbAsQgcAAgVgVQgVgVAAgcQAAgHAFgFQAEgFAHAAQAHAAAEAFQAFAFAAAGQAAAQALALQAMAMAPgBQAIAAAEAFQAFAFAAAGQAAAHgEAFQgFAEgHABg");
		this.shape_63.setTransform(235.1,96.425);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#D63C41").s().p("Ag+BAQgFgFAAgGQAAgyAjgiQAigkAxAAQAHgBAFAFQAEAFABAHQAAAGgFAFQgFAFgGAAQglAAgYAaQgaAZAAAkQAAAHgEAFQgFAFgHAAQgGAAgFgFg");
		this.shape_64.setTransform(233.2246,41.1477);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#D63C41").s().p("AhjASQgGgDgBgHQgCgHAEgEQAEgGAHgBQAGgBAGAEQAnAaAugJQAvgIAbgnQAEgFAHgBQAGgBAFADQAGAEABAHQABAGgDAGQgWAdggARQggAQgjAAQguAAglgag");
		this.shape_65.setTransform(302.3,53.8139);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#D63C41").s().p("AgbBOQgEgFAAgGQAAgHAFgEQAZgXABghQAAgfgVgZQgEgFAAgGQAAgHAFgEQAFgFAHABQAGAAAEAFQAfAigCAtQgCAughAfQgEAFgHAAQgGAAgGgGg");
		this.shape_66.setTransform(252.9035,75.1975);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#D63C41").s().p("AgCAoQhFgDgugyQgFgFABgGQAAgHAFgEQAFgFAGABQAHAAAFAFQAlAoA4ACQA2ADApglQAFgFAHABQAHAAAEAFQAFAFgBAGQAAAHgFAFQgwAqhAAAg");
		this.shape_67.setTransform(252.975,66.0225);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#D63C41").s().p("AgyBBQgGAAgFgFQgFgEAAgHQABgwAiggQAigiAwABQAGAAAFAFQAFAEAAAHQAAAGgFAFQgFAFgHAAQgigBgYAZQgZAXAAAiQAAAHgFAFQgFAEgGAAg");
		this.shape_68.setTransform(253.175,51.6246);

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#D63C41").s().p("AAxBDQgvgBgigiQghgiABgwQAAgGAEgFQAFgFAHAAQAGAAAFAFQAFAFAAAHQAAAjAYAXQAXAZAiAAQAHABAFAEQAEAFAAAHQAAAGgFAFQgEAFgHAAg");
		this.shape_69.setTransform(250.2236,54.475);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#D63C41").s().p("AglA6QgDgGACgGQADgGAGgDQAYgKAIgYQAKgXgLgYQgCgGACgGQACgHAGgCQAGgDAGACQAHADACAGQAQAjgOAkQgPAlgiAQQgDABgEAAQgKAAgEgKg");
		this.shape_70.setTransform(320.7322,20.7932);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#D63C41").s().p("AAlAeQgKgXgYgJQgYgJgXAKQgGACgHgCQgGgCgDgGQgCgGACgGQADgHAGgCQAjgQAkAOQAlAOAPAjQADAGgCAGQgDAHgGACQgDACgDAAQgKAAgFgKg");
		this.shape_71.setTransform(321.5693,17.4303);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#D63C41").s().p("Ag9A9QgFgFAAgHQABgwAiggQAigiAwABQAGgBAFAGQAFAEAAAHQgBAHgEAFQgFAEgHAAQgiAAgYAXQgZAYgBAjQAAAGgEAFQgFAFgHAAQgHgBgEgEg");
		this.shape_72.setTransform(285.675,82.1996);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#D63C41").s().p("AgfAgQgighABgwQAAgHAEgFQAGgFAGABQAHAAAFAFQAEAEAAAHQAAAjAYAYQAXAYAjABQAGAAAFAFQAFAEgBAHQAAAHgEAEQgFAFgHAAQgwgBgggig");
		this.shape_73.setTransform(282.6996,85.0477);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#D63C41").s().p("AAAAhQg0AAgmgjQgEgFgBgHQAAgGAFgFQAEgFAIAAQAGAAAEAFQAdAbAngBQAoAAAcgcQAEgFAIAAQAGAAAFAEQAFAFgBAHQABAGgFAFQglAlg1ABg");
		this.shape_74.setTransform(338.1,43.375);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#D63C41").s().p("ABlBEQgEgFgBgHQAAgngcgcQgcgcgoAAQgnAAgcAcQgcAcAAAnQAAAHgFAFQgFAEgGAAQgHAAgFgEQgEgFgBgHQAAg1AmglQAmglA0AAQA2AAAlAlQAmAlAAA1QAAAHgFAFQgFAEgGAAQgHAAgFgEg");
		this.shape_75.setTransform(335.9,50.625);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#D63C41").s().p("AguBEQgHAAgFgEQgEgFgBgGQAAgHAFgFQAEgFAHAAQAjgCAWgZQAXgZgBgiQgBgHAFgFQAEgFAHAAQAHgBAFAFQAEAFABAGQACAwggAiQghAkgvACg");
		this.shape_76.setTransform(288.2839,108.2725);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#D63C41").s().p("AAwB0QguAAggggQgjgggCgwQgBgvAhgjQAhgjAvgCQAHAAAEAEQAFAFAAAHQABAHgFAEQgEAFgHAAQgjACgXAZQgXAZABAiQABAiAZAYQAYAYAjgBQAGgBAFAFQAFAEABAHQAAAHgFAFQgEAFgHAAg");
		this.shape_77.setTransform(298.1717,103.5225);

		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("#D63C41").s().p("AA0ByQgFgFAAgGQAAgHAFgEQAfgeABgrQACgqgegfQgdgfgqgBQgrgBgfAdQgFAFgHAAQgGAAgFgFQgFgFABgHQAAgHAFgEQApgnA4ACQA3ABAnApQAmApgBA3QgCA5gpAmQgFAEgGAAQgHAAgEgFg");
		this.shape_78.setTransform(258.6505,48.1722);

		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#D63C41").s().p("ABWBoQgFgDgCgHQgCgGAEgGQAWglgLgpQgLgpglgWQglgWgoALQgqALgWAlQgDAGgHABQgGACgGgDQgFgEgCgGQgCgHAEgFQAbgxA4gOQA0gOAyAdQAvAcAPA3QAOA1gdAxQgEAHgJAAQgFAAgEgCg");
		this.shape_79.setTransform(335.9415,89.2583);

		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("#D63C41").s().p("AhGA2QgfgYgKglQgBgHADgFQADgGAHgCQAGgBAGADQAGADACAHQAIAgAdARQAdARAggJQAggIASgdQARgcgJghQgBgGADgGQADgGAHgBQAGgCAGADQAGAEACAGQALAugYAnQgYApgtAMQgOADgOAAQgmAAgfgXg");
		this.shape_80.setTransform(299.4388,40.5886);

		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#D63C41").s().p("AhGA2QgfgYgKglQgBgHADgFQAEgGAGgCQAHgCAFAEQAGADACAHQAIAfAdARQAdASAggJQAhgIARgdQARgdgIggQgCgHADgFQAEgGAGgCQAHgBAFADQAGADACAHQALAugXAnQgYApguALQgPAEgMAAQgnAAgfgXg");
		this.shape_81.setTransform(264.2914,25.9775);

		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("#DB5B58").s().p("ADyIFQgYgNgPgYQgRAYgZANQgaAOgfAAQgeAAgagOQgagNgQgYQgPAYgaANQgaAOgfAAQgfAAgagOQgagNgQgYQgRAYgZANQgaAOgeAAQglAAgegUQgdgTgOgfQgfAcgrAAQguAAghggQggghAAgvQAAgIABgIQgMADgKAAQguAAghggQgggiAAgtQAAglAVgdQgkgKgXgeQgYgdAAgnQAAgiATgcQATgbAegNQggggAAgtQAAgvAhggQAhghAuAAIALAAQgEgOAAgPQAAguAgghQAhghAuABQAWAAAWAJQABguAgggQAhgfAtgBQAkAAAeAXQALgjAdgWQAegWAlAAQAZAAAXALQAWALAPASQAOgcAagPQAbgRAgAAQAfAAAcARQAaAQAOAcQAPgTAXgLQAXgLAZAAQAlAAAeAWQAdAWALAjQAegXAkAAQAtABAhAfQAgAgABAuQAWgJAWAAQAugBAhAhQAgAhAAAuQAAAPgEAOIALAAQAvAAAgAhQAhAgAAAvQAAAtggAgQAeANATAbQATAcAAAiQAAAngYAdQgXAegkAKQAVAdAAAlQAAAtggAiQghAgguAAQgKAAgMgDQABAIAAAIQAAAvggAhQghAgguAAQgrAAgggdQgMAggcATQgcAUgjAAQgdAAgZgOg");
		this.shape_82.setTransform(292.775,60.9);

		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("#D63C41").s().p("ADKIIQgqAlg4AAQg5AAgpgmQgpAmg5AAQg6gBgpgkQgqAkg4ABQgkAAgfgQQgfgQgUgbQggAQgiAAQg1ABgogkQgnglgEg1Qg4gBgmgoQgngoAAg3QAAgcAKgaQghgRgTghQgUggAAgmQAAghAPgdQAPgcAagTQgUgiAAgkQAAg0AignQAigmAzgIIAAgEQAAg4AogpQAogoA5AAIAXACQAMgtAlgcQAlgdAuAAQAeAAAZALQASgfAfgTQAggSAlAAQAtAAAkAaQATgWAbgMQAbgMAeAAQAeAAAbAMQAbANATAWQAlgbAtAAQAlAAAgASQAfATASAfQAZgLAeAAQAuAAAlAdQAlAcAMAtIAXgCQA5AAAoAoQAoApAAA4IAAAEQAzAIAiAmQAiAnAAA0QAAAkgUAiQAaATAPAcQAPAdAAAhQAAAmgUAgQgTAhghARQAKAaAAAcQAAA3gmAoQgnAog4ABQgEA1gnAlQgoAkg1gBQgiAAgggQQgTAbgdAQQgeAQgiAAQg2AAgoglg");
		this.shape_83.setTransform(292.775,60.9);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).wait(90));

		this._renderFirstFrame();

	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(150,84.7,244.10000000000002,75.3);
// library properties:
	lib.properties = {
		id: '7B0D81A140ACC840ABAF2C4B06A06A7D',
		width: 300,
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
	an.compositions['7B0D81A140ACC840ABAF2C4B06A06A7D'] = {
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


	an.makeResponsiveInterpersonnelle = function(isResp, respDim, isScale, scaleType, domContainers) {
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
						sRatio = yRatio/3.5;
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
