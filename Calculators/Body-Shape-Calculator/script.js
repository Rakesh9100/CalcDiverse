function calculateShape() {
    const bustInput = document.getElementById("bust");
    const waistInput = document.getElementById("waist");
    const hipsInput = document.getElementById("hips");

    // Get unit values from each select element
    const bustUnit = bustInput.parentElement.querySelector(".unit-selector").value;
    const waistUnit = waistInput.parentElement.querySelector(".unit-selector").value;
    const hipsUnit = hipsInput.parentElement.querySelector(".unit-selector").value;

    let convertedBust = parseFloat(bustInput.value);
    let convertedWaist = parseFloat(waistInput.value);
    let convertedHips = parseFloat(hipsInput.value);

    // Convert to centimeters if selected
    if (bustUnit === "centimeters") {
        convertedBust *= 2.54;
    }
    if (waistUnit === "centimeters") {
        convertedWaist *= 2.54;
    }
    if (hipsUnit === "centimeters") {
        convertedHips *= 2.54;
    }

    let resultText;
    let suggestionText;

    if (convertedBust > convertedWaist && convertedBust > convertedHips) {
        resultText = "RESULT:-Triangle Shape";
        suggestionText = "SUGGESTION:-Wear clothes like A-line skirts, V-neck tops, and wrap dresses.";
    } else if (convertedWaist > convertedBust && convertedWaist > convertedHips) {
        resultText = "RESULT:-Inverted Triangle Shape";
        suggestionText = "SUGGESTION:-Wear clothes like wide-leg pants, boat neck tops, and structured jackets.";
    } else if (convertedHips > convertedBust && convertedHips > convertedWaist) {
        resultText = "RESULT:-Rectangle Shape";
        suggestionText = "SUGGESTION:-Wear clothes like high-waisted pants, peplum tops, and belted dresses.";
    } else if (convertedBust === convertedWaist && convertedBust === convertedHips) {
        resultText = "RESULT:-Hourglass Shape";
        suggestionText = "SUGGESTION:-Wear clothes like wrap dresses, pencil skirts, and fitted tops.";
    } else if (convertedBust === convertedWaist || convertedBust === convertedHips || convertedWaist === convertedHips) {
        resultText = "RESULT:-Diamond Shape";
        suggestionText = "SUGGESTION:-Wear clothes like bootcut pants, off-the-shoulder tops, and empire waist dresses.";
    } else if (convertedBust < convertedWaist && convertedBust < convertedHips) {
        resultText = "RESULT:-Pear Shape";
        suggestionText = "SUGGESTION:-Wear clothes like bootcut pants, off-the-shoulder tops, and empire waist dresses.";
    } else if (convertedWaist < convertedBust && convertedWaist < convertedHips) {
        resultText = "RESULT:-Apple Shape";
        suggestionText = "SUGGESTION:-Wear clothes like A-line skirts, V-neck tops, and wrap dresses.";
    } else if (convertedHips < convertedBust && convertedHips < convertedWaist) {
        resultText = "RESULT:-Oval Shape";
        suggestionText = "SUGGESTION:-Wear clothes like wide-leg pants, boat neck tops, and structured jackets.";
    } else {
        resultText = "Invalid input. Please enter valid measurements.";
        suggestionText = "";
    }

    document.getElementById("result").innerHTML = resultText;
    document.getElementById("suggestion").innerHTML = suggestionText;
}
