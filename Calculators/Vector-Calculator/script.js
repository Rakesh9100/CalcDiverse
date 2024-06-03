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

	const operation = document.getElementById("operation").value;

	if (isNaN(ay) || isNaN(bx) || isNaN(by)) {
		alert("Please enter proper values for x and y");
		return;
	}
	let result, angleResult;
    switch (operation) {
        case "add":
            const cx_add = ax + bx;
            const cy_add = ay + by;
            result = `Vector C Add = <${cx_add}, ${cy_add}>`;
            break;
        case "subtract":
            const cx_subtract = ax - bx;
            const cy_subtract = ay - by;
            result = `Vector C Subtract = <${cx_subtract}, ${cy_subtract}>`;
            break;
        case "dot":
            const dotProduct = ax * bx + ay * by;
            const magnitudeA = Math.sqrt(ax * ax + ay * ay);
            const magnitudeB = Math.sqrt(bx * bx + by * by);
            const cosineTheta = dotProduct / (magnitudeA * magnitudeB);
            const angleRadians = Math.acos(cosineTheta);
            const angleDegrees = radToDeg(angleRadians);
            result = `Vector C Dot = ${dotProduct}`;
            angleResult = `Angle between vectors = ${angleDegrees} degrees`;
            break;
        default:
            result = "Invalid operation";
    }
    document.getElementById("results").innerHTML = result + "<br>" + (angleResult ? angleResult : "");
	
} 