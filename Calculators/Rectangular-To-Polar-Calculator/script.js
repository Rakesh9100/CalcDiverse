function convertToPolar() {
  let x = parseFloat(document.getElementById('xInput').value);
  let y = parseFloat(document.getElementById('yInput').value);

  if (isNaN(x) || isNaN(y)) {
      alert('Please enter valid numerical values for X and Y.');
      return;
  }


  let r = Math.sqrt(x * x + y * y);
  let theta = Math.atan2(y, x);

  let thetaDegrees = (theta * 180) / Math.PI;

  document.querySelector('.answer').innerHTML = "r = " + r.toFixed(2) + ", θ = " + thetaDegrees.toFixed(2) + " degrees";
}
