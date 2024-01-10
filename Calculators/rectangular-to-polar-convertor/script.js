function convertToPolar() {
  var x = parseFloat(document.getElementById('xInput').value);
  var y = parseFloat(document.getElementById('yInput').value);

  if (isNaN(x) || isNaN(y)) {
      alert('Please enter valid numerical values for X and Y.');
      return;
  }


  var r = Math.sqrt(x * x + y * y);
  var theta = Math.atan2(y, x);

  var thetaDegrees = (theta * 180) / Math.PI;

  document.getElementById('result').innerHTML = "r = " + r.toFixed(2) + ", θ = " + thetaDegrees.toFixed(2) + " degrees";
}