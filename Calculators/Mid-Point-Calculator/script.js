
function calculateMidpoint() {
    const x1 = document.getElementById("x1").value;
    const y1 = document.getElementById("y1").value;
    const x2 = document.getElementById("x2").value;
    const y2 = document.getElementById("y2").value;
    const midpointX = (parseFloat(x1) + parseFloat(x2)) / 2;
    const midpointY = (parseFloat(y1) + parseFloat(y2)) / 2;
    const midpointString = `(${midpointX}, ${midpointY})`;
    localStorage.setItem("midpoint", midpointString);
    document.getElementById("result").innerHTML = `The midpoint is ${midpointString}`;
  }
  const midpoint = localStorage.getItem("midpoint");
  if (midpoint) {
    document.getElementById("result").innerHTML = `The midpoint is ${midpoint}`;
  }