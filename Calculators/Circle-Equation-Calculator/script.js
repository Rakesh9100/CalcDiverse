document.getElementById("extract").addEventListener("click", extractCenterRadius);
document.getElementById("convert").addEventListener("click", convertToGeneral);
document.getElementById("reset").addEventListener("click", resetForm); // Adding event listener for reset

function extractCenterRadius() {
  const equation = normalizeInput(document.getElementById("equation").value);
  const resultDiv = document.getElementById("result");

  // Match standard form: (x-h)^2 + (y-k)^2 = r^2
  const regex = /^\(x([-+]?\d*\.?\d*)\)\^2\+\(y([-+]?\d*\.?\d*)\)\^2=(\d*\.?\d+)$/;

  const matches = equation.match(regex);

  if (matches) {
    const h = -parseFloat(matches[1] || 0); // Handle empty values as 0
    const k = -parseFloat(matches[2] || 0);
    const r = Math.sqrt(parseFloat(matches[3]));

    // Format radius: integer if whole number, float if not
    const formattedRadius = Number.isInteger(r) ? r : r.toFixed(2);

    resultDiv.innerHTML = `<p>Center: (${h}, ${k})</p><p>Radius: ${formattedRadius}</p>`;
  } else {
    resultDiv.innerHTML = "<p>Invalid equation format! Please use the form (x-h)^2 + (y-k)^2 = r^2.</p>";
  }
}

function convertToGeneral() {
  const equation = normalizeInput(document.getElementById("equation").value);
  const resultDiv = document.getElementById("result");

  const regex = /^\(x([-+]?\d*\.?\d*)\)\^2\+\(y([-+]?\d*\.?\d*)\)\^2=(\d*\.?\d+)$/;

  const matches = equation.match(regex);

  if (matches) {
    const h = -parseFloat(matches[1] || 0); // Handle empty values as 0
    const k = -parseFloat(matches[2] || 0);
    const rSquared = parseFloat(matches[3]);

    const D = -2 * h;
    const E = -2 * k;
    const F = h * h + k * k - rSquared;

    resultDiv.innerHTML = `<p>General Form: x² + y² ${D >= 0 ? "+" : ""}${D}x ${E >= 0 ? "+" : ""}${E}y ${F >= 0 ? "+" : ""}${F} = 0</p>`;
  } else {
    resultDiv.innerHTML = "<p>Invalid equation format! Please use the form (x-h)^2 + (y-k)^2 = r^2.</p>";
  }
}

// Normalize input to remove all spaces and replace non-standard minus signs
function normalizeInput(input) {
  return input
    .replace(/−/g, "-") // Replace non-standard minus sign with standard hyphen
    .replace(/\s+/g, ""); // Remove all spaces
}

// Reset the form and result area
function resetForm() {
  document.getElementById("equation").value = ''; // Clear the input field
  document.getElementById("result").innerHTML = ''; // Clear the result area
}
