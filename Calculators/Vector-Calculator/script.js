function radToDeg(radians) {
    return radians * (180 / Math.PI);
}

function calc() {
    const ax = parseFloat(document.getElementById("ax").value);
    const ay = parseFloat(document.getElementById("ay").value);
    const az = parseFloat(document.getElementById("az").value); // Get the z-component for Vector A
    const bx = parseFloat(document.getElementById("bx").value);
    const by = parseFloat(document.getElementById("by").value);
    const bz = parseFloat(document.getElementById("bz").value); // Get the z-component for Vector B

    const operation = document.getElementById("operation").value;

    if (isNaN(ax) || isNaN(ay) || isNaN(az) || isNaN(bx) || isNaN(by) || isNaN(bz)) {
        alert("Please enter proper values for x, y, and z");
        return;
    }

    let result, angleResult;
    switch (operation) {
        case "add":
            const cx_add = ax + bx;
            const cy_add = ay + by;
            const cz_add = az + bz;
            result = `Vector C Add = <${cx_add}, ${cy_add}, ${cz_add}>`;
            break;
        case "subtract":
            const cx_subtract = ax - bx;
            const cy_subtract = ay - by;
            const cz_subtract = az - bz;
            result = `Vector C Subtract = <${cx_subtract}, ${cy_subtract}, ${cz_subtract}>`;
            break;
        case "dot":
            const dotProduct = ax * bx + ay * by + az * bz;
            const magnitudeA = Math.sqrt(ax * ax + ay * ay + az * az);
            const magnitudeB = Math.sqrt(bx * bx + by * by + bz * bz);
            const cosineTheta = dotProduct / (magnitudeA * magnitudeB);
            const angleRadians = Math.acos(cosineTheta);
            const angleDegrees = radToDeg(angleRadians);
            result = `Vector C Dot = ${dotProduct}`;
            angleResult = `Angle between vectors = ${angleDegrees.toFixed(2)} degrees`;
            break;
        case "cross":
            const cx = ay * bz - az * by;
            const cy = az * bx - ax * bz;
            const cz = ax * by - ay * bx;
            result = `Vector C Cross = <${cx}, ${cy}, ${cz}>`;
            break;
        default:
            result = "Invalid operation";
    }

    // Update the results display to handle the absence of angleResult gracefully
    document.getElementById("results").innerHTML = result + (angleResult ? ("<br>" + angleResult) : "");
}
