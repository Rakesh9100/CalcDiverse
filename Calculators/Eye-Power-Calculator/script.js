document
    .getElementById("calculateFocalLengthButton")
    .addEventListener("click", function () {
        var diopter = parseFloat(document.getElementById("diopter").value);
        var focalLengthResult = document.getElementById("focalLengthResult");

        if (!isNaN(diopter) && diopter !== 0) {
            var focalLength = 1 / diopter;
            focalLengthResult.innerText =
                "Focal Length: " + focalLength.toFixed(2) + " meters";
            focalLengthResult.style.color = "#28a745"; // Green color for output
        } else {
            focalLengthResult.innerText =
                "Please enter a valid diopter value (non-zero).";
            focalLengthResult.style.color = "#dc3545"; // Red color for error
        }
    });

document
    .getElementById("calculateDiopterButton")
    .addEventListener("click", function () {
        var focalLength = parseFloat(document.getElementById("focalLength").value);
        var diopterResult = document.getElementById("diopterResult");

        if (!isNaN(focalLength) && focalLength !== 0) {
            var diopter = 1 / focalLength;
            diopterResult.innerText = "Diopter Value: " + diopter.toFixed(2) + " D";
            diopterResult.style.color = "#28a745"; // Green color for output
        } else {
            diopterResult.innerText = "Please enter a valid focal length (non-zero).";
            diopterResult.style.color = "#dc3545"; // Red color for error
        }
    });
