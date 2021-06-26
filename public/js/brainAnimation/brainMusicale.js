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
	exportRoot = new libMusicale.BrainAnim();
	stage = new libMusicale.Stage(canvas);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjsMusicale.Ticker.framerate = libMusicale.properties.fps;
		createjsMusicale.Ticker.addEventListener("tick", stage);
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
		this.shape.graphics.beginFill("#30343D").beginStroke().moveTo(-12.2,17.3).curveTo(-13.6,15.5,-13.3,13.1).curveTo(-13,10.8,-11.2,9.3).curveTo(-8.8,7.2,-4.8,6.8).curveTo(-8.9,-1,-11.8,-7.4).curveTo(-12.1,-8,-12,-8.5).curveTo(-12.3,-9.1,-12.2,-9.7).curveTo(-12,-10.3,-11.3,-10.7).curveTo(-6.5,-13.4,-2.2,-16.8).curveTo(-2.1,-17.4,-1.5,-17.9).curveTo(-1,-18.3,-0.4,-18.3).lineTo(-0,-18.6).curveTo(1.2,-19.7,2.5,-18.5).curveTo(3.7,-17.3,2.4,-16.2).lineTo(1.9,-15.8).curveTo(6,-8.6,12.3,-3).curveTo(12.8,-2.5,12.8,-1.9).curveTo(13.8,-0.9,13,0.1).curveTo(11.4,2.2,10.2,3.4).curveTo(8.5,5.1,6.7,5.8).curveTo(4.7,6.6,3.1,6.3).curveTo(1.1,6,0.6,4).curveTo(0.2,2.2,0.9,0.4).curveTo(1.6,-1.4,3.2,-2.5).curveTo(4.6,-3.4,6.6,-3.7).curveTo(3.8,-6.7,1.6,-9.8).curveTo(-2.1,-6.4,-6.4,-4).lineTo(-0.6,7.4).curveTo(0.1,8.7,-1,9.6).curveTo(-1,11.7,-2.1,13.9).curveTo(-3.1,16.1,-4.7,17.6).curveTo(-6.5,19.2,-8.6,19.2).curveTo(-10.8,19.2,-12.2,17.3).closePath().moveTo(-8.5,-8.3).lineTo(-7.9,-7.1).curveTo(-3.5,-9.7,-0.3,-12.6).lineTo(-0.3,-12.7).lineTo(-0.8,-13.5).curveTo(-4.3,-10.8,-8.5,-8.3).closePath();
		this.shape.setTransform(26.9428,-10.8074);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.beginFill("#30343D").beginStroke().moveTo(-0.8,17.1).curveTo(-3.8,16.9,-5.7,14.7).curveTo(-7.7,12.3,-7.6,9.5).curveTo(-7.5,6.5,-4.9,4.9).curveTo(-1.9,3.1,2.8,3.9).lineTo(-4.7,-12.3).curveTo(-5,-12.8,-5,-13.4).curveTo(-4.9,-14.1,-4.3,-14.5).curveTo(-3.8,-14.9,-3.3,-15).lineTo(0.9,-17).curveTo(2.4,-17.7,3.3,-16.2).curveTo(4.2,-14.7,2.7,-14).lineTo(-0.9,-12.3).lineTo(7.4,5.6).curveTo(7.7,6.2,7.5,6.9).curveTo(7.8,9.3,7,11.6).curveTo(6.1,13.9,4.3,15.5).curveTo(2.4,17.2,-0.1,17.2).lineTo(-0.8,17.1).closePath().moveTo(-2.1,7.4).curveTo(-3.7,7.9,-4.1,9.5).curveTo(-4.5,11,-3.2,12.3).curveTo(-1.8,13.7,-0.2,13.7).curveTo(1.5,13.7,2.7,12.2).curveTo(4.3,10.2,4.1,7.7).curveTo(1.9,7.1,0.1,7.1).curveTo(-1.1,7.1,-2.1,7.4).closePath();
		this.shape_1.setTransform(-1.1226,12.8032);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.beginFill("#30343D").beginStroke().moveTo(-6.5,15.6).curveTo(-8.8,14.8,-10,12.8).curveTo(-11.5,10.3,-10.7,7.8).curveTo(-9.9,5.3,-7.2,4).curveTo(-4.2,2.7,-0.1,4).curveTo(-3.2,-2.3,-7.8,-7.8).curveTo(-8.5,-8.5,-8.3,-9.4).curveTo(-8,-10.3,-7.1,-10.7).lineTo(8.8,-16).curveTo(10.4,-16.5,10.8,-14.9).curveTo(11.2,-13.2,9.7,-12.7).lineTo(-3.7,-8.2).curveTo(1.8,-1,4.9,7).curveTo(5.2,7.8,4.7,8.4).curveTo(4.3,9,3.5,9.1).curveTo(2.7,13.1,-0.4,15).curveTo(-0.9,16,-2.1,15.8).curveTo(-3,16.1,-4,16.1).curveTo(-5.2,16.1,-6.5,15.6).closePath();
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
		this.shape.graphics.beginFill("#30343D").beginStroke().moveTo(23,6.1).lineTo(21.2,6).curveTo(19.6,5.8,18.1,5.2).curveTo(16.6,4.5,15.6,3.3).curveTo(14.5,1.9,14.9,0.3).curveTo(15.2,-1.4,16.2,-2.6).lineTo(16.7,-3.2).curveTo(17.9,-5.4,20.4,-5.8).curveTo(22.1,-6.1,23.8,-5.6).curveTo(26,-4.9,27.3,-2.8).curveTo(28.6,-0.6,28.3,2).curveTo(28,4.5,25.8,5.5).curveTo(24.6,6.1,23.2,6.1).lineTo(23,6.1).closePath().moveTo(-20.1,6).lineTo(-22,5.9).curveTo(-23.6,5.7,-25,5.1).curveTo(-26.5,4.4,-27.6,3.2).curveTo(-28.6,1.8,-28.3,0.2).curveTo(-28,-1.5,-26.9,-2.7).lineTo(-26.4,-3.3).curveTo(-25.3,-5.5,-22.8,-5.9).curveTo(-21,-6.2,-19.4,-5.7).curveTo(-17.1,-5,-15.9,-2.9).curveTo(-14.6,-0.7,-14.9,1.9).curveTo(-15.2,4.4,-17.4,5.4).curveTo(-18.6,6,-19.9,6).lineTo(-20.1,6).closePath();
		this.shape.setTransform(21.4594,-39.4512);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.beginFill("#30343D").beginStroke().moveTo(-5.3,25.5).curveTo(-6.2,25.5,-6.7,24.8).curveTo(-7.2,24.2,-7,23.3).curveTo(-6.4,21.4,-4.7,20.1).curveTo(-3.1,18.8,-1,18.5).curveTo(0.5,18.3,3.3,18.6).curveTo(6.4,18.9,7.6,18.9).curveTo(6.5,17,4.1,15.2).curveTo(2.9,14.3,-0.2,12.4).lineTo(-7.1,8.4).lineTo(-9.4,6.9).curveTo(-10.6,6,-11.3,5).curveTo(-12,3.8,-11.7,1.8).lineTo(-11,-1.5).lineTo(-5.5,-24.3).curveTo(-5.1,-26,-3.4,-25.5).curveTo(-1.7,-25,-2.1,-23.4).lineTo(-7.6,-0.6).lineTo(-8.2,1.3).curveTo(-8.5,2.6,-8.3,3.2).curveTo(-8.1,3.7,-7.5,4.1).lineTo(-6.5,4.7).lineTo(-0.6,8.1).curveTo(2.8,10.1,5.1,11.7).curveTo(10.5,15.5,11.7,19.8).curveTo(12,20.5,11.6,21.1).curveTo(11.7,21.8,11.4,22.4).curveTo(11.1,23,10.4,23.2).curveTo(4.1,25.6,-2.7,25.6).lineTo(-5.3,25.5).closePath().moveTo(-1.1,22.1).curveTo(0.2,22.1,1.8,21.8).lineTo(1.6,21.8).lineTo(0.9,21.8).curveTo(-0.2,21.8,-1.1,22.1).closePath();
		this.shape_1.setTransform(34.2302,52.4213);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.beginFill("#30343D").beginStroke().moveTo(-4.1,25.1).curveTo(-5.4,22.9,-4,20.7).curveTo(-2.7,18.6,-0.3,18.1).curveTo(2.1,17.7,8.3,17.2).curveTo(-1.3,9.8,-13.2,7.5).curveTo(-14,7.4,-14.3,6.5).curveTo(-14.7,5.7,-14.2,5).curveTo(-10.6,0.1,-6.3,-9.4).lineTo(0.7,-25).curveTo(1.4,-26.5,2.9,-25.6).curveTo(4.4,-24.7,3.7,-23.2).lineTo(-3.6,-7.1).curveTo(-6.8,0,-9.8,4.7).curveTo(3.7,8,13.9,17.5).curveTo(14.7,18.2,14.4,19.1).curveTo(14.2,19.9,13.3,20.3).lineTo(12.9,20.7).curveTo(5.9,25.4,-2.6,26).curveTo(-3.5,26,-4.1,25.1).closePath();
		this.shape_2.setTransform(1.2797,53.4847);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.beginFill("#30343D").beginStroke().moveTo(-26.5,12.1).curveTo(-27.2,11.6,-27.2,10.8).lineTo(-27.2,10.5).curveTo(-29.9,8.8,-30.5,6.5).curveTo(-31.1,3.9,-28.8,1.4).curveTo(-26.9,-0.7,-24.2,-1.9).curveTo(-21.8,-3,-18.7,-2.9).curveTo(-18,-2.9,-17.4,-2.3).lineTo(-16.4,-1.1).lineTo(-14.4,0.9).curveTo(-9.3,5.7,-3.7,7.8).curveTo(3.1,10.3,9.3,6.9).curveTo(19.7,1.2,27.3,-11.7).curveTo(28.2,-13.1,29.7,-12.2).curveTo(31.2,-11.3,30.3,-9.9).curveTo(26.1,-2.8,20.3,2.9).curveTo(13.3,9.6,7.5,11.5).curveTo(1.5,13.4,-5.2,10.9).curveTo(-11,8.8,-16.3,3.8).curveTo(-16.7,5.4,-17.9,6.4).lineTo(-18,6.5).lineTo(-19.2,9.4).curveTo(-20.3,12.3,-22.9,12.1).curveTo(-23.3,12.1,-23.8,11.9).lineTo(-25,12.4).lineTo(-25.5,12.5).curveTo(-26.1,12.5,-26.5,12.1).closePath().moveTo(-19.8,0.6).lineTo(-19.3,1).lineTo(-19.2,0.9).lineTo(-19.5,0.5).closePath();
		this.shape_3.setTransform(-79.9083,3.3535);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.beginFill("#30343D").beginStroke().moveTo(-27.4,24.1).curveTo(-29,23.6,-29.7,23.2).curveTo(-31.9,22.5,-33.3,20.7).curveTo(-34.7,18.8,-34.5,16.5).curveTo(-34,12,-30.2,8.5).curveTo(-28.6,6.4,-27.5,5.6).curveTo(-25.8,4.1,-24.1,4.3).lineTo(-23.3,4.5).curveTo(-18.3,2.8,-12,3.4).curveTo(-7.1,3.9,-0.6,6).lineTo(7.2,8.6).curveTo(11.7,10,15.2,10.3).curveTo(24.6,11.4,28.6,7.6).curveTo(31.1,5.2,31.1,1).curveTo(31.1,-1.4,30,-6.3).curveTo(28,-14.5,24.9,-21.5).curveTo(24.3,-23,25.8,-23.9).curveTo(27.3,-24.8,27.9,-23.3).curveTo(33,-11.8,34.3,-1.8).curveTo(35.5,6.5,30.7,10.3).curveTo(25.8,14.2,18.4,14).curveTo(11.9,13.8,2.8,10.8).curveTo(-2.3,9,-5,8.3).curveTo(-9.5,7,-12.9,6.7).lineTo(-13.5,6.7).curveTo(-13.2,8.2,-14.7,8.7).curveTo(-16.5,9.3,-17.6,11.9).curveTo(-18.2,13.4,-19,16.2).curveTo(-21.2,21.9,-25.5,23.2).curveTo(-25.7,23.8,-26.2,24.1).curveTo(-26.5,24.3,-26.8,24.3).lineTo(-27.4,24.1).closePath();
		this.shape_4.setTransform(76.0437,5.4347);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.beginFill("#D63C41").beginStroke().moveTo(6.3,11).curveTo(2.2,10.2,-0,7.3).curveTo(-2.4,4.1,-1.6,-0.4).curveTo(-1,-3.6,-2.7,-5.7).curveTo(-4.3,-7.4,-6.9,-7.9).curveTo(-9.6,-8.3,-11.8,-6.8).curveTo(-14,-5.3,-14.6,-2.6).curveTo(-14.6,-1.9,-15.2,-1.5).curveTo(-15.8,-1.2,-16.4,-1.3).curveTo(-17,-1.4,-17.5,-1.9).curveTo(-17.8,-2.5,-17.7,-3.1).curveTo(-17,-7.2,-13.7,-9.4).curveTo(-10.2,-11.8,-6.3,-11).curveTo(-2,-10.2,0.2,-7.1).curveTo(2.3,-4.1,1.6,0.2).curveTo(1,3.3,2.5,5.4).curveTo(4.1,7.4,6.9,7.8).curveTo(9.5,8.4,11.8,6.8).curveTo(14.1,5.2,14.5,2.6).curveTo(14.6,1.9,15.1,1.5).curveTo(15.8,1.1,16.4,1.3).curveTo(17.1,1.4,17.4,1.9).curveTo(17.8,2.5,17.7,3.1).curveTo(17,6.7,14.3,8.9).curveTo(11.5,11.2,8.1,11.2).closePath();
		this.shape_5.setTransform(-21.7,4.3593);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.beginFill("#D63C41").beginStroke().moveTo(6.3,11).curveTo(2,10.3,-0.2,7.2).curveTo(-2.4,4.1,-1.6,-0.2).curveTo(-1.1,-3.1,-2.5,-5.2).curveTo(-3.9,-7.3,-6.9,-7.8).curveTo(-9.6,-8.3,-11.8,-6.8).curveTo(-14,-5.2,-14.5,-2.5).curveTo(-14.6,-1.9,-15.2,-1.5).curveTo(-15.7,-1.1,-16.4,-1.2).curveTo(-17.1,-1.4,-17.4,-1.9).curveTo(-17.8,-2.5,-17.7,-3.1).curveTo(-17,-7.1,-13.6,-9.4).curveTo(-10.3,-11.7,-6.3,-11).curveTo(-2.1,-10.2,0.1,-7.1).curveTo(2.3,-3.9,1.6,0.4).curveTo(1,3.6,2.7,5.7).curveTo(4.2,7.4,6.9,7.9).curveTo(9.6,8.4,11.8,6.8).curveTo(14,5.2,14.5,2.6).curveTo(14.6,1.9,15.2,1.5).curveTo(15.7,1.2,16.4,1.3).curveTo(17,1.4,17.4,1.9).curveTo(17.8,2.5,17.7,3.1).curveTo(17,6.7,14.3,8.9).curveTo(11.6,11.2,8.1,11.2).closePath();
		this.shape_6.setTransform(2.5657,8.9683);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.beginFill("#D63C41").beginStroke().moveTo(7.4,12.6).curveTo(2.7,11.8,0.2,8.4).curveTo(-2.5,4.8,-1.6,-0.2).curveTo(-1,-3.8,-2.7,-6.3).curveTo(-4.5,-8.8,-8,-9.5).curveTo(-11.3,-10,-14,-8.2).curveTo(-16.7,-6.3,-17.3,-3.1).curveTo(-17.4,-2.4,-17.9,-2).curveTo(-18.5,-1.6,-19.1,-1.8).curveTo(-19.8,-1.9,-20.2,-2.4).curveTo(-20.5,-2.9,-20.4,-3.6).curveTo(-19.7,-8.2,-15.8,-10.8).curveTo(-12,-13.5,-7.5,-12.6).curveTo(-2.6,-11.8,-0.1,-8.1).curveTo(2.4,-4.5,1.6,0.3).curveTo(0.9,4.1,2.8,6.5).curveTo(4.6,8.8,8,9.4).curveTo(11.3,10.1,13.9,8.2).curveTo(16.7,6.2,17.2,3).curveTo(17.3,2.4,17.9,2).curveTo(18.5,1.6,19.1,1.7).curveTo(19.8,1.8,20.2,2.4).curveTo(20.5,3,20.4,3.6).curveTo(19.6,8.2,15.8,10.8).curveTo(12.9,12.8,9.4,12.8).lineTo(7.4,12.6).closePath();
		this.shape_7.setTransform(50.075,1.9718);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.beginFill("#D63C41").beginStroke().moveTo(-16.8,7.5).curveTo(-18.5,3.7,-17,-0.2).curveTo(-15.5,-4,-11.7,-5.7).curveTo(-7.7,-7.5,-4,-6.1).curveTo(-0.3,-4.6,1.5,-0.6).curveTo(2.8,2.3,5.3,3.2).curveTo(7.7,4,10.4,2.8).curveTo(13,1.6,14,-1).curveTo(15,-3.6,13.9,-6.2).curveTo(13.6,-6.8,13.9,-7.4).curveTo(14.2,-8.1,14.8,-8.3).curveTo(15.3,-8.6,15.9,-8.3).curveTo(16.6,-8.1,16.8,-7.5).curveTo(18.6,-3.7,17.1,0.2).curveTo(15.5,4,11.8,5.7).curveTo(7.8,7.4,4.2,6.2).curveTo(0.5,4.9,-1.4,0.7).curveTo(-2.7,-2.1,-5.1,-3.1).curveTo(-7.6,-4,-10.4,-2.8).curveTo(-13,-1.7,-14,1).curveTo(-15,3.6,-13.9,6.2).curveTo(-13.7,6.8,-13.9,7.4).curveTo(-14.1,8.1,-14.7,8.3).lineTo(-15.3,8.5).curveTo(-16.5,8.5,-16.8,7.5).closePath();
		this.shape_8.setTransform(20.6,-19.8125);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.beginFill("#D63C41").beginStroke().moveTo(-10.2,8.2).curveTo(-14.3,7.4,-16.6,3.9).curveTo(-18.9,0.5,-18.1,-3.6).curveTo(-17.9,-4.3,-17.4,-4.6).curveTo(-16.9,-5,-16.2,-4.9).curveTo(-15.5,-4.8,-15.2,-4.2).curveTo(-14.8,-3.6,-15,-3).curveTo(-15.4,-0.2,-13.9,2.1).curveTo(-12.3,4.5,-9.6,5).curveTo(-6.5,5.6,-4.3,4.2).curveTo(-2.1,2.7,-1.6,-0.4).curveTo(-0.7,-4.7,2.6,-6.9).curveTo(5.8,-9,10.2,-8.1).curveTo(14.3,-7.3,16.5,-3.9).curveTo(18.9,-0.4,18.1,3.6).curveTo(17.9,4.3,17.4,4.7).curveTo(16.8,5,16.2,4.9).curveTo(15.6,4.8,15.2,4.2).curveTo(14.8,3.7,14.9,3).curveTo(15.5,0.2,13.9,-2.1).curveTo(12.3,-4.4,9.5,-5).curveTo(6.8,-5.5,4.7,-4.4).curveTo(2.3,-3.1,1.6,0.3).curveTo(0.9,4,-1.7,6.2).curveTo(-4.3,8.4,-7.9,8.4).curveTo(-9.1,8.4,-10.2,8.2).closePath();
		this.shape_9.setTransform(64.45,-17.0328);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.beginFill("#D63C41").beginStroke().moveTo(1.5,8.1).curveTo(-1.6,5,-1.6,0.1).curveTo(-1.6,-3.6,-3.7,-5.7).curveTo(-5.9,-7.9,-9.6,-7.9).curveTo(-12.8,-7.9,-15.2,-5.5).curveTo(-17.5,-3.2,-17.5,0.1).curveTo(-17.5,0.8,-18,1.2).curveTo(-18.4,1.7,-19.1,1.7).curveTo(-19.8,1.7,-20.3,1.2).curveTo(-20.7,0.7,-20.7,0.1).curveTo(-20.8,-4.5,-17.4,-7.8).curveTo(-14.1,-11.1,-9.6,-11.1).curveTo(-4.6,-11.1,-1.5,-8).curveTo(1.7,-4.9,1.7,0.1).curveTo(1.6,4.1,4.2,6.1).curveTo(6.3,7.9,9.6,7.9).curveTo(12.9,7.9,15.2,5.6).curveTo(17.5,3.2,17.5,-0.1).curveTo(17.5,-0.7,18,-1.2).curveTo(18.5,-1.7,19.1,-1.7).curveTo(19.9,-1.7,20.3,-1.2).curveTo(20.7,-0.7,20.8,-0.1).curveTo(20.7,4.6,17.5,7.9).curveTo(14.2,11.1,9.6,11.1).curveTo(4.6,11.1,1.5,8.1).closePath();
		this.shape_10.setTransform(16.4,-66.075);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.beginFill("#D63C41").beginStroke().moveTo(-7.8,2.7).curveTo(-8.3,2.3,-8.3,1.6).curveTo(-8.3,1,-7.9,0.5).curveTo(-4.9,-2.9,-0.2,-3.2).curveTo(4.4,-3.4,7.8,-0.3).curveTo(8.3,0.1,8.3,0.8).curveTo(8.3,1.4,7.9,1.9).curveTo(7.4,2.4,6.8,2.5).curveTo(6.1,2.5,5.6,2.1).curveTo(3.2,-0.1,-0.1,0.1).curveTo(-3.3,0.2,-5.5,2.6).curveTo(-6,3.2,-6.7,3.2).curveTo(-7.2,3.2,-7.8,2.7).closePath();
		this.shape_11.setTransform(71.15,-50.1812);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.beginFill("#D63C41").beginStroke().moveTo(-1.7,7.9).curveTo(-2.2,7.5,-2.2,6.8).curveTo(-2.3,6.2,-1.9,5.6).curveTo(0.3,3.2,0,-0.1).curveTo(-0.2,-3.3,-2.7,-5.5).curveTo(-3.2,-5.9,-3.3,-6.6).curveTo(-3.3,-7.2,-2.9,-7.7).curveTo(-2.5,-8.2,-1.8,-8.3).curveTo(-1.1,-8.3,-0.6,-7.9).curveTo(2.9,-4.9,3.2,-0.3).curveTo(3.6,4.2,0.6,7.7).curveTo(0.1,8.3,-0.6,8.3).curveTo(-1.2,8.3,-1.7,7.9).closePath();
		this.shape_12.setTransform(65.0707,-55.3028);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.beginFill("#D63C41").beginStroke().moveTo(-3.6,4.1).curveTo(-4.3,4,-4.7,3.5).curveTo(-5,2.9,-4.9,2.3).curveTo(-4.5,-0.8,-2,-2.6).curveTo(0.5,-4.5,3.6,-4).curveTo(4.3,-3.9,4.6,-3.4).curveTo(5.1,-2.8,5,-2.2).curveTo(4.9,-1.5,4.3,-1.1).curveTo(3.8,-0.7,3.2,-0.8).curveTo(1.4,-1.1,-0.1,-0).curveTo(-1.5,1,-1.8,2.8).curveTo(-2,4.1,-3.3,4.1).closePath();
		this.shape_13.setTransform(49.55,23.381);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.beginFill("#D63C41").beginStroke().moveTo(2.3,4.9).curveTo(1.7,4.9,1.3,4.3).curveTo(0.9,3.8,0.9,3.1).curveTo(1.1,1.4,0,-0).curveTo(-1,-1.4,-2.8,-1.7).curveTo(-3.5,-1.7,-3.9,-2.3).curveTo(-4.3,-2.8,-4.2,-3.5).curveTo(-4.1,-4.1,-3.6,-4.5).curveTo(-3.1,-4.9,-2.4,-4.9).curveTo(0.6,-4.5,2.6,-2).curveTo(4.5,0.5,4.1,3.5).curveTo(4.1,4.1,3.6,4.5).curveTo(3.1,4.9,2.5,4.9).closePath();
		this.shape_14.setTransform(43.6563,22.5972);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.beginFill("#D63C41").beginStroke().moveTo(3.3,4.2).curveTo(2.6,4.2,2.2,3.8).curveTo(1.7,3.4,1.7,2.8).curveTo(1.4,1,0,-0.1).curveTo(-1.4,-1.2,-3.1,-1).curveTo(-3.8,-0.9,-4.3,-1.3).curveTo(-4.8,-1.7,-4.9,-2.4).curveTo(-5,-3,-4.6,-3.6).curveTo(-4.1,-4.1,-3.5,-4.2).curveTo(-0.5,-4.5,2,-2.6).curveTo(4.5,-0.7,4.9,2.4).curveTo(5,3.1,4.5,3.6).curveTo(4.1,4.2,3.4,4.2).closePath();
		this.shape_15.setTransform(12.2063,-36.2772);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.beginFill("#D63C41").beginStroke().moveTo(-2.6,5).curveTo(-3.9,5,-4.2,3.6).curveTo(-4.2,3,-3.8,2.4).curveTo(-3.4,1.9,-2.8,1.8).curveTo(-1,1.5,0,0.1).curveTo(1.1,-1.3,0.9,-3.1).curveTo(0.8,-3.7,1.2,-4.3).curveTo(1.5,-4.8,2.2,-4.9).curveTo(2.9,-5,3.4,-4.6).curveTo(4,-4.2,4.1,-3.6).curveTo(4.5,-0.5,2.6,2).curveTo(0.8,4.5,-2.3,5).closePath();
		this.shape_16.setTransform(11.4578,-42.2031);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.beginFill("#D63C41").beginStroke().moveTo(1.9,7.6).curveTo(1.2,7.4,1,6.8).curveTo(0.7,6.2,0.9,5.6).curveTo(2.1,2.5,0.8,-0.5).curveTo(-0.6,-3.5,-3.6,-4.6).curveTo(-4.3,-4.8,-4.5,-5.5).curveTo(-4.8,-6.1,-4.6,-6.7).curveTo(-4.3,-7.3,-3.7,-7.6).curveTo(-3.1,-7.8,-2.5,-7.6).curveTo(1.8,-6,3.7,-1.8).curveTo(5.6,2.4,4,6.7).curveTo(3.6,7.7,2.4,7.7).lineTo(1.9,7.6).closePath();
		this.shape_17.setTransform(88.3339,-2.4694);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.beginFill("#D63C41").beginStroke().moveTo(-6.6,4.2).curveTo(-7.2,4,-7.5,3.3).curveTo(-7.8,2.7,-7.6,2.1).curveTo(-7.3,1.5,-6.8,1.2).curveTo(-6.2,0.9,-5.5,1.1).curveTo(-2.5,2.2,0.5,0.8).curveTo(3.4,-0.6,4.5,-3.7).curveTo(4.8,-4.4,5.3,-4.7).curveTo(5.9,-4.9,6.6,-4.7).curveTo(7.2,-4.5,7.5,-3.9).curveTo(7.8,-3.3,7.6,-2.7).curveTo(6,1.7,1.9,3.7).curveTo(-0.3,4.8,-2.9,4.8).curveTo(-4.8,4.8,-6.6,4.2).closePath();
		this.shape_18.setTransform(91.3374,-11.2444);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.beginFill("#D63C41").beginStroke().moveTo(1.3,7.9).curveTo(-2.6,5.5,-3.5,0.9).curveTo(-4.5,-3.6,-2,-7.4).curveTo(-1.6,-8,-0.9,-8.1).curveTo(-0.3,-8.2,0.3,-7.9).curveTo(0.8,-7.5,1,-6.9).curveTo(1.1,-6.2,0.7,-5.7).curveTo(-1,-2.9,-0.4,0.3).curveTo(0.3,3.5,3,5.2).curveTo(3.6,5.6,3.7,6.3).curveTo(3.9,6.9,3.5,7.5).curveTo(3,8.2,2.1,8.2).curveTo(1.6,8.2,1.3,7.9).closePath();
		this.shape_19.setTransform(-34.2853,-22.6611);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.beginFill("#D63C41").beginStroke().moveTo(-7.4,3.6).curveTo(-8,3.3,-8.1,2.6).curveTo(-8.2,2,-7.9,1.4).curveTo(-5.5,-2.5,-1,-3.6).curveTo(3.4,-4.7,7.3,-2.2).curveTo(8,-1.9,8.1,-1.2).curveTo(8.3,-0.6,7.9,-0).curveTo(7.5,0.5,6.9,0.7).curveTo(6.3,0.9,5.7,0.5).curveTo(2.8,-1.2,-0.2,-0.4).curveTo(-3.4,0.3,-5.1,3.1).curveTo(-5.7,3.9,-6.6,3.9).curveTo(-6.9,3.9,-7.4,3.6).closePath();
		this.shape_20.setTransform(-38.65,-15.2454);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.beginFill("#D63C41").beginStroke().moveTo(-0.9,6.3).curveTo(-1.4,5.9,-1.5,5.2).curveTo(-1.6,4.6,-1.2,4).curveTo(0.2,2.2,-0.2,-0.1).curveTo(-0.5,-2.3,-2.4,-3.7).curveTo(-2.9,-4.1,-3,-4.7).curveTo(-3.1,-5.4,-2.8,-6).curveTo(-2.4,-6.5,-1.7,-6.6).curveTo(-1,-6.7,-0.5,-6.3).curveTo(2.4,-4.1,3,-0.6).curveTo(3.5,3,1.4,5.9).curveTo(0.9,6.6,0.1,6.6).curveTo(-0.4,6.6,-0.9,6.3).closePath();
		this.shape_21.setTransform(53.446,-44.0861);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.beginFill("#D63C41").beginStroke().moveTo(-0.8,6.3).curveTo(-1.4,5.9,-1.5,5.2).curveTo(-1.6,4.6,-1.2,4).curveTo(0.1,2.2,-0.2,-0.1).curveTo(-0.6,-2.3,-2.4,-3.7).curveTo(-2.9,-4.1,-3,-4.8).curveTo(-3.1,-5.4,-2.7,-6).curveTo(-2.3,-6.5,-1.7,-6.6).curveTo(-1,-6.7,-0.5,-6.3).curveTo(2.4,-4.1,3,-0.6).curveTo(3.5,3,1.4,5.9).curveTo(0.9,6.6,0.1,6.6).curveTo(-0.4,6.6,-0.8,6.3).closePath();
		this.shape_22.setTransform(96.0471,-26.0861);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.beginFill("#D63C41").beginStroke().moveTo(2.7,4.3).curveTo(-0.2,4.4,-2.3,2.2).curveTo(-4.4,0.2,-4.4,-2.8).curveTo(-4.4,-3.4,-3.9,-3.9).curveTo(-3.5,-4.4,-2.8,-4.3).curveTo(-2.1,-4.4,-1.7,-3.9).curveTo(-1.2,-3.4,-1.2,-2.8).curveTo(-1.2,-1.1,0,-0).curveTo(1.2,1.1,2.7,1.1).curveTo(3.4,1.1,3.9,1.6).curveTo(4.4,2.1,4.4,2.7).curveTo(4.4,3.4,4,3.9).curveTo(3.4,4.3,2.8,4.3).closePath();
		this.shape_23.setTransform(-31.9,11.75);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.beginFill("#D63C41").beginStroke().moveTo(-6.3,6.4).curveTo(-6.8,6,-6.8,5.3).curveTo(-6.8,0.3,-3.4,-3.2).curveTo(0.1,-6.8,5.1,-6.8).curveTo(5.8,-6.9,6.2,-6.4).curveTo(6.7,-5.9,6.7,-5.2).curveTo(6.8,-4.6,6.3,-4.1).curveTo(5.8,-3.6,5.1,-3.6).curveTo(1.5,-3.6,-1.1,-1).curveTo(-3.6,1.6,-3.6,5.3).curveTo(-3.6,5.9,-4,6.4).curveTo(-4.5,6.9,-5.2,6.9).curveTo(-5.8,6.9,-6.3,6.4).closePath();
		this.shape_24.setTransform(-33.7981,-43.5523);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.beginFill("#D63C41").beginStroke().moveTo(-10,1.8).curveTo(-10.6,1.5,-10.7,0.8).curveTo(-10.9,0.1,-10.5,-0.4).curveTo(-10,-1,-9.4,-1.1).curveTo(-8.8,-1.2,-8.2,-0.8).curveTo(-4.3,1.9,0.4,1).curveTo(5.1,0.2,7.8,-3.7).curveTo(8.2,-4.3,8.9,-4.4).curveTo(9.5,-4.5,10,-4.1).curveTo(10.6,-3.8,10.7,-3.1).curveTo(10.8,-2.5,10.5,-1.9).curveTo(8.3,1.1,5.1,2.8).curveTo(1.9,4.4,-1.7,4.4).curveTo(-6.3,4.4,-10,1.8).closePath();
		this.shape_25.setTransform(35.3,-30.885);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.beginFill("#D63C41").beginStroke().moveTo(-2.8,7.8).curveTo(-3.2,7.3,-3.2,6.7).curveTo(-3.2,6,-2.7,5.6).curveTo(-0.2,3.4,-0.1,0.1).curveTo(0,-3.2,-2.2,-5.6).curveTo(-2.6,-6.1,-2.6,-6.8).curveTo(-2.6,-7.5,-2.1,-7.9).curveTo(-1.6,-8.4,-0.9,-8.3).curveTo(-0.3,-8.3,0.2,-7.8).curveTo(3.3,-4.4,3.1,0.2).curveTo(2.9,4.8,-0.5,7.9).curveTo(-0.9,8.4,-1.6,8.4).curveTo(-2.2,8.4,-2.8,7.8).closePath();
		this.shape_26.setTransform(-14.0965,-9.5025);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.beginFill("#D63C41").beginStroke().moveTo(-0.3,4).curveTo(-7.1,3.8,-11.8,-1.3).curveTo(-12.3,-1.8,-12.2,-2.5).curveTo(-12.2,-3.2,-11.7,-3.6).curveTo(-11.2,-4.1,-10.6,-4).curveTo(-9.9,-4,-9.5,-3.5).curveTo(-5.7,0.6,-0.1,0.8).curveTo(5.4,1.1,9.5,-2.7).curveTo(10,-3.2,10.7,-3.1).curveTo(11.4,-3.1,11.8,-2.6).curveTo(12.3,-2.1,12.2,-1.5).curveTo(12.2,-0.8,11.7,-0.3).curveTo(6.9,4.1,0.5,4.1).closePath();
		this.shape_27.setTransform(-14.025,-18.6525);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.beginFill("#D63C41").beginStroke().moveTo(-6.2,6).curveTo(-6.7,5.6,-6.7,4.9).curveTo(-6.6,0.1,-3.2,-3.2).curveTo(0.3,-6.6,5.1,-6.5).curveTo(5.7,-6.5,6.2,-6).curveTo(6.7,-5.6,6.7,-4.9).curveTo(6.7,-4.2,6.2,-3.8).curveTo(5.7,-3.3,5,-3.3).curveTo(1.6,-3.4,-0.9,-0.9).curveTo(-3.4,1.5,-3.4,5).curveTo(-3.5,5.6,-3.9,6.1).curveTo(-4.4,6.5,-5.1,6.5).curveTo(-5.7,6.5,-6.2,6).closePath();
		this.shape_28.setTransform(-13.825,-33.0754);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.beginFill("#D63C41").beginStroke().moveTo(4.9,6.7).curveTo(0.1,6.6,-3.3,3.2).curveTo(-6.6,-0.2,-6.5,-5.1).curveTo(-6.5,-5.7,-6.1,-6.2).curveTo(-5.6,-6.7,-4.9,-6.6).curveTo(-4.2,-6.6,-3.8,-6.2).curveTo(-3.3,-5.7,-3.3,-5).curveTo(-3.4,-1.6,-1,0.9).curveTo(1.5,3.4,4.9,3.5).curveTo(5.6,3.5,6.1,4).curveTo(6.5,4.4,6.5,5.1).curveTo(6.5,5.7,6,6.2).curveTo(5.6,6.7,4.9,6.7).closePath();
		this.shape_29.setTransform(-16.7764,-30.2023);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.beginFill("#D63C41").beginStroke().moveTo(-3.8,5.8).curveTo(-4.1,5.2,-3.9,4.6).curveTo(-3.6,3.9,-3,3.7).curveTo(-0.7,2.7,0.3,0.2).curveTo(1.2,-2.2,0.2,-4.6).curveTo(-0.1,-5.2,0.2,-5.8).curveTo(0.4,-6.4,1,-6.7).curveTo(1.6,-6.9,2.2,-6.7).curveTo(2.9,-6.5,3.1,-5.8).curveTo(4.7,-2.3,3.3,1.4).curveTo(1.9,5.1,-1.7,6.6).curveTo(-2,6.8,-2.4,6.8).curveTo(-3.4,6.8,-3.8,5.8).closePath();
		this.shape_30.setTransform(53.7129,-63.8875);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.beginFill("#D63C41").beginStroke().moveTo(3.7,3).curveTo(2.7,0.7,0.3,-0.3).curveTo(-2.2,-1.2,-4.5,-0.2).curveTo(-5.2,0.1,-5.8,-0.1).curveTo(-6.4,-0.4,-6.7,-1).curveTo(-6.9,-1.6,-6.7,-2.2).curveTo(-6.5,-2.9,-5.8,-3.1).curveTo(-2.3,-4.7,1.4,-3.3).curveTo(5.1,-1.9,6.6,1.7).curveTo(6.9,2.3,6.7,3).curveTo(6.4,3.6,5.8,3.9).lineTo(5.2,4).curveTo(4.2,4,3.7,3).closePath();
		this.shape_31.setTransform(54.5693,-67.2697);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.beginFill("#D63C41").beginStroke().moveTo(-6.2,6).curveTo(-6.7,5.6,-6.7,4.9).curveTo(-6.6,0.1,-3.2,-3.3).curveTo(0.3,-6.6,5.1,-6.5).curveTo(5.7,-6.5,6.2,-6.1).curveTo(6.7,-5.6,6.6,-4.9).curveTo(6.6,-4.3,6.1,-3.8).curveTo(5.7,-3.3,5,-3.3).curveTo(1.5,-3.3,-0.9,-1).curveTo(-3.4,1.5,-3.5,4.9).curveTo(-3.5,5.6,-3.9,6.1).curveTo(-4.4,6.5,-5.1,6.5).curveTo(-5.7,6.5,-6.2,6).closePath();
		this.shape_32.setTransform(18.6523,-2.4754);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.beginFill("#D63C41").beginStroke().moveTo(-3.2,3.2).curveTo(-6.6,-0.3,-6.5,-5.1).curveTo(-6.5,-5.7,-6,-6.2).curveTo(-5.6,-6.7,-4.9,-6.7).curveTo(-4.2,-6.7,-3.7,-6.2).curveTo(-3.3,-5.7,-3.3,-5).curveTo(-3.3,-1.6,-0.9,0.9).curveTo(1.5,3.4,5,3.4).curveTo(5.6,3.4,6.1,3.9).curveTo(6.6,4.4,6.5,5.1).curveTo(6.5,5.8,6.1,6.2).curveTo(5.6,6.7,4.9,6.7).curveTo(0.1,6.6,-3.2,3.2).closePath();
		this.shape_33.setTransform(15.6769,0.375);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.beginFill("#D63C41").beginStroke().moveTo(-0.1,3.3).curveTo(-5.3,3.3,-9.1,-0.3).curveTo(-9.6,-0.8,-9.6,-1.4).curveTo(-9.6,-2.1,-9.1,-2.6).curveTo(-8.6,-3.1,-8,-3.1).curveTo(-7.3,-3.1,-6.8,-2.6).curveTo(-4,0.1,0,0.1).curveTo(4,0,6.8,-2.8).curveTo(7.3,-3.3,8,-3.3).curveTo(8.6,-3.3,9.1,-2.8).curveTo(9.6,-2.4,9.6,-1.7).curveTo(9.6,-1,9.1,-0.6).curveTo(5.5,3.2,0.1,3.3).closePath();
		this.shape_34.setTransform(71.075,-41.3023);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.beginFill("#D63C41").beginStroke().moveTo(10.1,6.7).curveTo(9.7,6.3,9.6,5.6).curveTo(9.6,1.6,6.8,-1.2).curveTo(4,-4,0,-4).curveTo(-4,-4,-6.8,-1.2).curveTo(-9.6,1.6,-9.6,5.6).curveTo(-9.6,6.3,-10.1,6.7).curveTo(-10.6,7.2,-11.2,7.3).curveTo(-11.9,7.2,-12.4,6.7).curveTo(-12.8,6.3,-12.9,5.6).curveTo(-12.8,0.3,-9.1,-3.4).curveTo(-5.3,-7.2,0,-7.2).curveTo(5.3,-7.2,9.1,-3.4).curveTo(12.9,0.3,12.9,5.6).curveTo(12.9,6.3,12.4,6.7).curveTo(11.9,7.2,11.3,7.3).curveTo(10.6,7.2,10.1,6.7).closePath();
		this.shape_35.setTransform(68.9,-34.05);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.beginFill("#D63C41").beginStroke().moveTo(-4.8,6.8).curveTo(-5.4,6.8,-5.9,6.4).curveTo(-6.3,5.9,-6.4,5.3).curveTo(-6.4,4.6,-6,4.1).curveTo(-5.5,3.6,-4.8,3.6).curveTo(-1.4,3.5,1,0.9).curveTo(3.3,-1.7,3.2,-5.1).curveTo(3.1,-5.8,3.6,-6.3).curveTo(4,-6.8,4.7,-6.8).curveTo(5.3,-6.9,5.8,-6.4).curveTo(6.3,-6,6.4,-5.3).curveTo(6.6,-0.5,3.4,3.1).curveTo(0.2,6.6,-4.7,6.8).closePath();
		this.shape_36.setTransform(21.2814,23.5725);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.beginFill("#D63C41").beginStroke().moveTo(-3.1,8.5).curveTo(-6.6,5.1,-6.8,0.4).curveTo(-6.9,-4.4,-3.6,-7.9).curveTo(-0.3,-11.4,4.5,-11.6).curveTo(5.1,-11.6,5.6,-11.2).curveTo(6.1,-10.7,6.1,-10).curveTo(6.2,-9.3,5.7,-8.9).curveTo(5.3,-8.4,4.6,-8.4).curveTo(1.1,-8.2,-1.3,-5.7).curveTo(-3.7,-3.2,-3.5,0.3).curveTo(-3.4,3.7,-0.9,6.1).curveTo(1.6,8.5,5.1,8.4).curveTo(5.8,8.4,6.2,8.8).curveTo(6.7,9.3,6.8,9.9).curveTo(6.8,10.6,6.3,11.1).curveTo(5.8,11.6,5.2,11.6).lineTo(4.8,11.6).curveTo(0.3,11.6,-3.1,8.5).closePath();
		this.shape_37.setTransform(31.1717,18.8475);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.beginFill("#D63C41").beginStroke().moveTo(5.2,11.5).curveTo(4.7,11,4.7,10.3).curveTo(4.7,9.6,5.2,9.2).curveTo(8.3,6.3,8.4,1.9).curveTo(8.6,-2.4,5.6,-5.5).curveTo(2.7,-8.6,-1.6,-8.7).curveTo(-5.9,-8.8,-9,-5.9).curveTo(-9.5,-5.4,-10.2,-5.4).curveTo(-10.8,-5.4,-11.3,-5.9).curveTo(-11.8,-6.4,-11.7,-7.1).curveTo(-11.7,-7.7,-11.2,-8.2).curveTo(-7.2,-12.1,-1.5,-11.9).curveTo(4.1,-11.8,8,-7.7).curveTo(11.9,-3.6,11.7,2).curveTo(11.5,7.7,7.4,11.5).curveTo(7,12,6.3,12).curveTo(5.7,12,5.2,11.5).closePath();
		this.shape_38.setTransform(-8.3497,-36.5028);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.beginFill("#D63C41").beginStroke().moveTo(8.6,10.4).curveTo(8.1,10.1,7.9,9.5).curveTo(7.7,8.8,8.1,8.2).curveTo(10.3,4.6,9.2,0.4).curveTo(8.1,-3.7,4.4,-5.9).curveTo(0.8,-8.1,-3.4,-7.1).curveTo(-7.6,-6,-9.8,-2.3).curveTo(-10.1,-1.7,-10.8,-1.5).curveTo(-11.4,-1.4,-12,-1.7).curveTo(-12.5,-2.1,-12.7,-2.7).curveTo(-12.9,-3.4,-12.6,-3.9).curveTo(-9.7,-8.8,-4.2,-10.2).curveTo(1.2,-11.6,6,-8.7).curveTo(10.9,-5.9,12.3,-0.4).curveTo(13.7,4.9,10.8,9.9).curveTo(10.3,10.7,9.5,10.7).curveTo(9,10.7,8.6,10.4).closePath();
		this.shape_39.setTransform(68.9053,4.5944);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.beginFill("#D63C41").beginStroke().moveTo(-7.1,5.4).curveTo(-10.2,3,-11.2,-0.8).curveTo(-11.3,-1.4,-11,-2).curveTo(-10.7,-2.6,-10,-2.8).curveTo(-9.4,-2.9,-8.8,-2.6).curveTo(-8.2,-2.2,-8.1,-1.6).curveTo(-7.2,1.6,-4.3,3.4).curveTo(-1.3,5.1,1.9,4.3).curveTo(5.1,3.4,6.9,0.5).curveTo(8.6,-2.4,7.7,-5.7).curveTo(7.6,-6.3,7.9,-6.9).curveTo(8.2,-7.5,8.9,-7.6).curveTo(9.5,-7.8,10.1,-7.5).curveTo(10.7,-7.1,10.9,-6.5).curveTo(12,-1.9,9.6,2.2).curveTo(7.2,6.2,2.7,7.4).curveTo(1.3,7.7,-0.2,7.7).curveTo(-4,7.7,-7.1,5.4).closePath();
		this.shape_40.setTransform(32.4388,-44.1114);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.beginFill("#D63C41").beginStroke().moveTo(-7.1,5.4).curveTo(-10.2,3,-11.2,-0.8).curveTo(-11.3,-1.5,-11,-2).curveTo(-10.7,-2.6,-10,-2.8).curveTo(-9.4,-3,-8.8,-2.6).curveTo(-8.2,-2.3,-8,-1.6).curveTo(-7.2,1.6,-4.3,3.4).curveTo(-1.4,5.1,1.9,4.2).curveTo(5.1,3.4,6.9,0.5).curveTo(8.6,-2.4,7.7,-5.7).curveTo(7.6,-6.4,7.9,-6.9).curveTo(8.3,-7.5,8.9,-7.7).curveTo(9.6,-7.8,10.1,-7.5).curveTo(10.7,-7.1,10.9,-6.5).curveTo(12,-1.9,9.6,2.1).curveTo(7.2,6.2,2.7,7.4).curveTo(1.3,7.7,-0.1,7.7).curveTo(-4,7.7,-7.1,5.4).closePath();
		this.shape_41.setTransform(-2.7112,-58.7225);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.beginFill("#DB5B58").beginStroke().moveTo(24.2,51.7).curveTo(21.8,50.4,20.2,48.1).curveTo(18.6,50.4,16.1,51.7).curveTo(13.4,53.1,10.4,53.1).curveTo(7.4,53.1,4.8,51.7).curveTo(2.2,50.4,0.6,48.1).curveTo(-1,50.4,-3.6,51.7).curveTo(-6.3,53.1,-9.3,53.1).curveTo(-12.4,53.1,-15,51.7).curveTo(-17.6,50.4,-19.3,48.1).curveTo(-20.9,50.4,-23.4,51.7).curveTo(-26.1,53.1,-29.1,53.1).curveTo(-32.7,53.1,-35.7,51.1).curveTo(-38.6,49.2,-40,46).curveTo(-43.1,48.9,-47.4,48.9).curveTo(-52,48.9,-55.3,45.6).curveTo(-58.5,42.3,-58.5,37.7).lineTo(-58.4,36.2).lineTo(-60.6,36.4).curveTo(-65.2,36.4,-68.5,33.1).curveTo(-71.7,29.8,-71.7,25.2).curveTo(-71.7,21.5,-69.6,18.7).curveTo(-73.2,17.7,-75.5,14.7).curveTo(-77.9,11.7,-77.9,7.9).curveTo(-77.9,4.5,-76,1.7).curveTo(-74.1,-1.1,-71.1,-2.4).curveTo(-74.3,-5.6,-74.3,-10.2).curveTo(-74.3,-14.8,-71,-18.1).curveTo(-67.8,-21.3,-63.1,-21.3).lineTo(-62,-21.3).curveTo(-62.5,-22.7,-62.5,-24.2).curveTo(-62.5,-28.8,-59.2,-32.1).curveTo(-55.9,-35.3,-51.3,-35.3).curveTo(-48.9,-35.3,-46.9,-34.4).curveTo(-46.8,-39,-43.6,-42.1).curveTo(-40.3,-45.3,-35.8,-45.3).curveTo(-32.1,-45.3,-29.2,-43.2).curveTo(-28.1,-46.6,-25.2,-48.8).curveTo(-22.2,-51,-18.5,-51).curveTo(-16,-51,-13.7,-49.9).curveTo(-11.6,-48.9,-10,-47).curveTo(-8.6,-49.8,-6,-51.4).curveTo(-3.3,-53.1,-0.1,-53.1).curveTo(3.1,-53.1,5.9,-51.4).curveTo(8.5,-49.7,9.9,-46.9).curveTo(11.5,-48.8,13.7,-49.9).curveTo(16,-51,18.5,-51).curveTo(22.2,-51,25.2,-48.8).curveTo(28.1,-46.6,29.1,-43.2).curveTo(32.1,-45.3,35.8,-45.3).curveTo(40.3,-45.3,43.6,-42.1).curveTo(46.8,-39,46.9,-34.4).curveTo(48.9,-35.3,51.3,-35.3).curveTo(55.9,-35.3,59.2,-32.1).curveTo(62.4,-28.8,62.4,-24.2).curveTo(62.4,-22.8,62,-21.3).lineTo(63.1,-21.3).curveTo(67.7,-21.3,71,-18.1).curveTo(74.3,-14.8,74.3,-10.2).curveTo(74.3,-5.6,71.1,-2.4).curveTo(74.1,-1.1,76,1.7).curveTo(77.9,4.5,77.9,7.9).curveTo(77.9,11.7,75.5,14.7).curveTo(73.2,17.7,69.6,18.7).curveTo(71.7,21.5,71.7,25.2).curveTo(71.7,29.8,68.5,33.1).curveTo(65.2,36.4,60.6,36.4).lineTo(58.4,36.2).curveTo(58.5,36.9,58.5,37.7).curveTo(58.5,42.3,55.3,45.6).curveTo(52,48.9,47.4,48.9).curveTo(43.1,48.9,39.9,46).curveTo(38.7,49.2,35.9,51.1).curveTo(33,53.1,29.5,53.1).curveTo(26.7,53.1,24.2,51.7).closePath();
		this.shape_42.setTransform(25.775,-23.775);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.beginFill("#D63C41").beginStroke().moveTo(20.2,52).curveTo(16.2,55.6,10.4,55.6).curveTo(4.7,55.6,0.6,51.9).curveTo(-3.6,55.6,-9.3,55.6).curveTo(-15,55.6,-19.2,51.9).curveTo(-23.3,55.6,-29,55.6).curveTo(-32.6,55.6,-35.7,54.1).curveTo(-38.8,52.5,-40.8,49.8).curveTo(-43.8,51.5,-47.4,51.5).curveTo(-52.7,51.4,-56.6,47.9).curveTo(-60.6,44.2,-61.1,39).curveTo(-66.6,38.8,-70.4,34.8).curveTo(-74.3,30.8,-74.3,25.3).curveTo(-74.3,22.5,-73.3,20).curveTo(-76.5,18.2,-78.5,14.9).curveTo(-80.4,11.7,-80.5,7.9).curveTo(-80.5,4.6,-79,1.7).curveTo(-77.5,-1.1,-74.9,-3.1).curveTo(-76.8,-6.3,-76.9,-10.2).curveTo(-76.8,-15.3,-73.5,-19.2).curveTo(-70.1,-23,-65,-23.8).lineTo(-65,-24.1).curveTo(-65,-29.9,-61,-33.8).curveTo(-56.9,-37.9,-51.2,-37.9).curveTo(-50,-37.9,-49,-37.7).curveTo(-47.8,-42.1,-44.1,-45).curveTo(-40.4,-47.9,-35.8,-47.9).curveTo(-33,-47.9,-30.4,-46.8).curveTo(-28.5,-49.9,-25.3,-51.7).curveTo(-22.2,-53.6,-18.5,-53.5).curveTo(-14.1,-53.6,-10.4,-50.9).curveTo(-8.5,-53.2,-5.8,-54.4).curveTo(-3,-55.6,-0,-55.6).curveTo(3,-55.6,5.7,-54.4).curveTo(8.5,-53.1,10.3,-50.8).curveTo(14,-53.6,18.5,-53.5).curveTo(22.2,-53.6,25.4,-51.7).curveTo(28.5,-49.9,30.4,-46.8).curveTo(33,-47.9,35.8,-47.9).curveTo(40.5,-47.9,44.2,-45).curveTo(47.8,-42.1,49,-37.7).curveTo(50,-37.9,51.3,-37.9).curveTo(57,-37.9,61.1,-33.8).curveTo(65.1,-29.9,65,-24.1).lineTo(65,-23.8).curveTo(70.1,-23,73.4,-19.2).curveTo(76.9,-15.3,76.9,-10.2).curveTo(76.9,-6.4,74.9,-3.1).curveTo(77.5,-1.2,79,1.7).curveTo(80.4,4.6,80.4,7.9).curveTo(80.4,11.7,78.5,14.9).curveTo(76.6,18.2,73.3,20).curveTo(74.4,22.5,74.3,25.3).curveTo(74.3,30.8,70.4,34.8).curveTo(66.5,38.8,61.1,39).curveTo(60.6,44.2,56.7,47.9).curveTo(52.7,51.4,47.4,51.5).curveTo(43.8,51.5,40.8,49.8).curveTo(39,52.5,36,54.1).curveTo(33,55.6,29.6,55.6).curveTo(24.2,55.6,20.2,52).closePath();
		this.shape_43.setTransform(25.75,-23.8);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.beginFill("#30343D").beginStroke().moveTo(-2.3,4.9).curveTo(-3.1,4.7,-3.8,4.1).lineTo(-4.4,3.4).curveTo(-5.1,2.8,-5.3,2.1).curveTo(-5.6,1.3,-5.6,0.5).curveTo(-5.5,-0.4,-5.1,-1.2).curveTo(-4.8,-2,-4.2,-2.6).lineTo(-3.7,-3.1).curveTo(-2.5,-4.7,-0.5,-5).curveTo(1.3,-5.2,2.9,-4.3).curveTo(4.8,-3.2,5.4,-1.1).curveTo(6,0.9,4.7,2.6).curveTo(3.5,4.1,1.8,4.4).curveTo(0.8,4.9,-0.3,5).lineTo(-0.9,5).curveTo(-1.6,5,-2.3,4.9).closePath();
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
	(lib.BrainAnim = function(mode,startPosition,loop,reversed) {
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


})(createjsMusicale = createjsMusicale||{}, AdobeAn = AdobeAn||{});
var createjsMusicale, AdobeAn;
