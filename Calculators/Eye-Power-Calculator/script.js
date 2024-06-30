function calculateEyePower() {
  const leftEyePower = parseFloat(document.getElementById("left-eye").value);
  const rightEyePower = parseFloat(document.getElementById("right-eye").value);

  if (isNaN(leftEyePower) || isNaN(rightEyePower)) {
    document.getElementById("result").textContent =
      "Please enter valid numbers for both eyes.";
    return;
  }

  const totalPower = leftEyePower + rightEyePower;
  document.getElementById(
    "result"
  ).textContent = `Total Eye Power: ${totalPower}`;
}
