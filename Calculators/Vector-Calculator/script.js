"use strict";
var ax, ay, bx, by;
function radToDeg(rads) {
	return rads * (180 / Math.PI);
}

function calc() {
	ax = parseInt(document.getElementById("ax").value);
	ay = parseInt(document.getElementById("ay").value);
	bx = parseInt(document.getElementById("bx").value);
	by = parseInt(document.getElementById("by").value);
	if (isNaN(ay) || isNaN(bx) || isNaN(by)) {
		alert("Please enter proper values for x and y");
		return;
	}
	var cx = ax + bx;
	var cy = ay + by;
	var cxdot = ax * bx;
	var cydot = ay * by;
	var angle = radToDeg(Math.atan(cy / cx));
	// A + B, angel = tan^-1(y/x)
	var easyAnswerHighlight = '<div id="vectC" style="display:inline;"> \ <div id="vectCchild" style="display:inline; -moz-user-select: none; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -ms-user-select: none; user-select: none;"> \ Vector C = \ </div> \ <' + cx + ", " + cy + '></div><br> \
	<div id="vectCDot" style="display:inline;"> \ <div id="vectCDotchild" style="display:inline; -moz-user-select: none; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -ms-user-select: none; user-select: none;"> \ Vector C Dot = \ </div> \ <' + cxdot + ", " + cydot + '></div><br> \
	<div id="angle" style="display:inline;"> \ <div id="angleChild" style="display:inline; -moz-user-select: none; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -ms-user-select: none; user-select: none;"> \ Angle = \ </div> \ '  + angle + '</div>';
	document.getElementById("results").innerHTML = easyAnswerHighlight;
} 