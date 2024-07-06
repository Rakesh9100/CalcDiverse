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

    
    //Calculate the Trisection point
    const m1 = ((ax + bx + cx) / 3).toFixed(2);
    const m2 = ((ay + by + cy) / 3).toFixed(2);

    let centroidtext=Math.sqrt((m2-cy)*(m2-cy)/(m1-cx)*(m1-cx));

    // Display the result
    document.getElementById('result').textContent = `Centroid Points: (${m1}, ${m2})`;


    // Draw the triangle and lines on canvas
    let canvas = document.getElementById("triangleCanvas");
    let ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set styles
    ctx.strokeStyle = '#ffffff'; 
    ctx.fillStyle =  '#ffffff'; 
    ctx.font = '14px Arial';

    // Draw triangle
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.lineTo(cx, cy);
    ctx.closePath();
    ctx.stroke();

    //change style
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
     ctx.fillStyle =  '#ffffff'; 
    // Draw points A, B, C and their coordinates
    ctx.fillText(`A (${ax}, ${ay})`, ax - 30, ay - 10);
    ctx.fillText(`B (${bx}, ${by})`, bx - 30, by + 15);
    ctx.fillText(`C (${cx}, ${cy})`, cx + 5, cy + 15);


     //change style
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

    // Label centroid
    //  ctx.fillStyle = 'red';
    //ctx.fillText(`Centroid (${m1}, ${m2})`, m1, m2+100 );


    var canvas1 = document.getElementById("triangleCanvas");
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;
    var width = x + canvas1.width;
    var height = y + canvas1.height;
    if (x > 0 && y > 0) 
        {
    canvas1.width = Math.max(50, width);
    canvas1.height = Math.max(30, height);
    }           
  
  
   // document.getElementById('centroidtext').textContent = `Centroid Points: (${m1}, ${m2})`

}

// Clear the input fields and result when the page is loaded or refreshed
window.onload = function () {
    document.getElementById('x1').value = '';
    document.getElementById('y1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('y2').value = '';
    document.getElementById('result').textContent = '';
}

















// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Triangle Centroid Calculation</title>
// <style>
//     body {
//         font-family: Arial, sans-serif;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100vh;
//         margin: 0;
//     }
//     #triangleCanvas {
//         border: 1px solid #000;
//     }
// </style>
// </head>
// <body>
//     <div>
//         <label>Enter coordinates for Point A (x, y): </label>
//         <input type="text" id="pointA">
//         <br>
//         <label>Enter coordinates for Point B (x, y): </label>
//         <input type="text" id="pointB">
//         <br>
//         <label>Enter coordinates for Point C (x, y): </label>
//         <input type="text" id="pointC">
//         <br>
//         <button onclick="calculateCentroid()">Calculate Centroid</button>
//     </div>
//     <canvas id="triangleCanvas" width="400" height="400"></canvas>
//     <script src="script.js"></script>
// </body>
// </html>






// function calculateCentroid() {
//     // Get coordinates from input fields
//     let pointA = document.getElementById("pointA").value.trim().split(",");
//     let pointB = document.getElementById("pointB").value.trim().split(",");
//     let pointC = document.getElementById("pointC").value.trim().split(",");

//     // Convert input values to numbers
//     let ax = parseFloat(pointA[0]);
//     let ay = parseFloat(pointA[1]);
//     let bx = parseFloat(pointB[0]);
//     let by = parseFloat(pointB[1]);
//     let cx = parseFloat(pointC[0]);
//     let cy = parseFloat(pointC[1]);

//     // Calculate midpoints
//     let midpointABx = (ax + bx) / 2;
//     let midpointABy = (ay + by) / 2;
//     let midpointBCx = (bx + cx) / 2;
//     let midpointBCy = (by + cy) / 2;
//     let midpointCAx = (cx + ax) / 2;
//     let midpointCAy = (cy + ay) / 2;

//     // Calculate centroid coordinates
//     let centroidX = (ax + bx + cx) / 3;
//     let centroidY = (ay + by + cy) / 3;

//     // Draw the triangle and lines on canvas
//     let canvas = document.getElementById("triangleCanvas");
//     let ctx = canvas.getContext("2d");

//     // Clear canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Set styles
//     ctx.strokeStyle = '#ffffff'; 
//     ctx.fillStyle =  '#ffffff'; 
//     ctx.font = '14px Arial';

//     // Draw triangle
//     ctx.beginPath();
//     ctx.moveTo(ax, ay);
//     ctx.lineTo(bx, by);
//     ctx.lineTo(cx, cy);
//     ctx.closePath();
//     ctx.stroke();

//     //change style
//     ctx.strokeStyle = '#FFA500'; // Orange
//     ctx.fillStyle = '#FFA500'; // Orange

//     // Draw lines from vertices to midpoints through centroid
//     ctx.beginPath();
//     ctx.moveTo(ax, ay);
//     ctx.lineTo(midpointBCx, midpointBCy);
//     ctx.moveTo(bx, by);
//     ctx.lineTo(midpointCAx, midpointCAy);
//     ctx.moveTo(cx, cy);
//     ctx.lineTo(midpointABx, midpointABy);
//     ctx.stroke();

//     // Draw points A, B, C and their coordinates
//     ctx.fillText(`A (${ax}, ${ay})`, ax - 30, ay - 10);
//     ctx.fillText(`B (${bx}, ${by})`, bx + 5, by - 10);
//     ctx.fillText(`C (${cx}, ${cy})`, cx + 5, cy + 15);

//     // Draw midpoints and label them
//     ctx.beginPath();
//     ctx.arc(midpointABx, midpointABy, 3, 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.fillText(`(${midpointABx.toFixed(2)}, ${midpointABy.toFixed(2)})`, midpointABx + 10, midpointABy + 10);
//     ctx.beginPath();
//     ctx.arc(midpointBCx, midpointBCy, 3, 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.fillText(`(${midpointBCx.toFixed(2)}, ${midpointBCy.toFixed(2)})`, midpointBCx + 10, midpointBCy + 10);
//     ctx.beginPath();
//     ctx.arc(midpointCAx, midpointCAy, 3, 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.fillText(`(${midpointCAx.toFixed(2)}, ${midpointCAy.toFixed(2)})`, midpointCAx + 10, midpointCAy - 10);

//     // Draw centroid
//     ctx.beginPath();
//     ctx.arc(centroidX, centroidY, 5, 0, 2 * Math.PI);
//     ctx.fill();

//     // Label centroid
//     ctx.fillStyle = 'black';
//     ctx.fillText(`Centroid (${centroidX.toFixed(2)}, ${centroidY.toFixed(2)})`, centroidX - 80, centroidY - 10);
// }
