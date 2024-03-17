function calculateBayesianTheorem() {
    // Get values from input fields
    var probabilityA = parseFloat(document.getElementById("probabilityA").value);
    var probabilityBGivenA = parseFloat(document.getElementById("probabilityBGivenA").value);
    var probabilityNotA = parseFloat(document.getElementById("probabilityNotA").value);

    // Validate input
    if (
        isNaN(probabilityA) || isNaN(probabilityBGivenA) || isNaN(probabilityNotA) ||
        probabilityA < 0 || probabilityBGivenA < 0 || probabilityNotA < 0 ||
        probabilityA > 1 || probabilityBGivenA > 1 || probabilityNotA > 1
    ) {
        alert("Please enter valid probabilities between 0 and 1.");
        return;
    }

    // Calculate Bayesian Theorem
    var probabilityB = (probabilityBGivenA * probabilityA) + ((1 - probabilityA) * probabilityNotA);
    var probabilityAGivenB = (probabilityBGivenA * probabilityA) / probabilityB;

    // Display the result
    document.getElementById("result").innerHTML =
        "P(A|B) ≈ " + probabilityAGivenB.toFixed(4);
}
