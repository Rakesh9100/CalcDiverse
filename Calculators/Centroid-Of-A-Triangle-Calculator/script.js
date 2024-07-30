function calculateTriangleCentroidpoint(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get the values from the input fields
    const ax = parseFloat(document.getElementById('x1').value);
    const ay = parseFloat(document.getElementById('y1').value);
    const bx = parseFloat(document.getElementById('x2').value);
    const by = parseFloat(document.getElementById('y2').value);
    const cx = parseFloat(document.getElementById('x3').value);
    const cy = parseFloat(document.getElementById('y3').value);

    // Calculate midpoints
    let midpointABx = (ax + bx) / 2;
    let midpointABy = (ay + by) / 2;
    let midpointBCx = (bx + cx) / 2;
    let midpointBCy = (by + cy) / 2;
    let midpointCAx = (cx + ax) / 2;
    let midpointCAy = (cy + ay) / 2;

    // Calculate the Trisection point
    const m1 = ((ax + bx + cx) / 3).toFixed(2);
    const m2 = ((ay + by + cy) / 3).toFixed(2);

    let centroidtext = Math.sqrt((m2 - cy) * (m2 - cy) / (m1 - cx) * (m1 - cx));

    // Display the result
    document.getElementById('result').textContent = `Centroid Points: (${m1}, ${m2})`;

    // Draw the triangle and lines on canvas
    let canvas = document.getElementById("triangleCanvas");
    let ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set styles
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = '#ffffff';
    ctx.font = '14px Arial';

    // Draw triangle
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.lineTo(cx, cy);
    ctx.closePath();
    ctx.stroke();

    // Change style
    ctx.strokeStyle = '#FFA500'; // Orange
    ctx.fillStyle = '#FFA500'; // Orange

    // Draw lines from vertices to midpoints through centroid
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(midpointBCx, midpointBCy);
    ctx.moveTo(bx, by);
    ctx.lineTo(midpointCAx, midpointCAy);
    ctx.moveTo(cx, cy);
    ctx.lineTo(midpointABx, midpointABy);
    ctx.stroke();

    // Set styles
    ctx.strokeStyle = '#ffffff';
    ctx.fillStyle = '#ffffff';
    // Draw points A, B, C and their coordinates
    ctx.fillText(`A (${ax}, ${ay})`, ax - 30, ay - 10);
    ctx.fillText(`B (${bx}, ${by})`, bx - 30, by + 15);
    ctx.fillText(`C (${cx}, ${cy})`, cx + 5, cy + 15);

    // Change style
    ctx.strokeStyle = '#FFA500'; // Orange
    ctx.fillStyle = '#FFA500'; // Orange

    // Draw midpoints and label them
    ctx.beginPath();
    ctx.arc(midpointABx, midpointABy, 3, 0, 2 * Math.PI);
    ctx.fill();
    //ctx.fillText(`(${midpointABx.toFixed(2)}, ${midpointABy.toFixed(2)})`, midpointABx + 10, midpointABy + 10);
    ctx.beginPath();
    ctx.arc(midpointBCx, midpointBCy, 3, 0, 2 * Math.PI);
    ctx.fill();
    //ctx.fillText(`(${midpointBCx.toFixed(2)}, ${midpointBCy.toFixed(2)})`, midpointBCx + 10, midpointBCy + 10);
    ctx.beginPath();
    ctx.arc(midpointCAx, midpointCAy, 3, 0, 2 * Math.PI);
    ctx.fill();
    //ctx.fillText(`(${midpointCAx.toFixed(2)}, ${midpointCAy.toFixed(2)})`, midpointCAx + 10, midpointCAy - 10);

    // Draw centroid
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(m1, m2, 5, 0, 2 * Math.PI);
    ctx.fill();

    var canvas1 = document.getElementById("triangleCanvas");
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;
    var width = x + canvas1.width;
    var height = y + canvas1.height;
    if (x > 0 && y > 0) {
        canvas1.width = Math.max(50, width);
        canvas1.height = Math.max(30, height);
    }
}

// Clear the input fields and result when the page is loaded or refreshed
window.onload = function () {
    document.getElementById('x1').value = '';
    document.getElementById('y1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('y2').value = '';
    document.getElementById('result').textContent = '';
}
