'use strict'

function validate() {
    // Get the input values
    var a = parseFloat(document.forms["input_form"]["aterm"].value);
    var b = parseFloat(document.forms["input_form"]["bterm"].value);
    var c = parseFloat(document.forms["input_form"]["cterm"].value);

    var outputText, outputValue;

    // Validate the inputs
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        outputText = "All coefficients must be numbers!";
    } else if (a === 0) {
        outputText = "<em>a</em> cannot be zero!";
    } else {
        // Calculate the discriminant
        var discriminant = Math.pow(b, 2) - 4 * a * c;

        outputText = "For the equation <strong>" + (a === 1 ? "" : a) + "x\u00B2 + " + (b === 1 ? "" : b) + "x + " + c + " = 0</strong>,";

        if (discriminant > 0) {
            outputValue = "The discriminant (D) is <strong>" + discriminant + "</strong>. There are two distinct real roots.";
        } else if (discriminant === 0) {
            outputValue = "The discriminant (D) is <strong>" + discriminant + "</strong>. There is exactly one real root.";
        } else {
            outputValue = "The discriminant (D) is <strong>" + discriminant + "</strong>. There are no real roots (complex roots).";
        }
    }

    // Output the result
    document.getElementById("output_text").innerHTML = outputText;
    document.getElementById("outputValue").innerHTML = outputValue;
}
