document.getElementById("calculate-btn").addEventListener("click", function () {
    const valuesInput = document.getElementById("values-input").value;
    const numbers = valuesInput.split(",").map((num) => parseFloat(num.trim()));

    const arithmeticMean =
        numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

    let geometricMean = 1;
    for (const num of numbers) {
        geometricMean *= num;
    }
    geometricMean = Math.pow(geometricMean, 1 / numbers.length);

    const harmonicMean =
        numbers.length / numbers.reduce((sum, num) => sum + 1 / num, 0);

    document.getElementById("arithmetic-mean").textContent =
        arithmeticMean.toFixed(2);
    document.getElementById("geometric-mean").textContent =
        geometricMean.toFixed(2);
    document.getElementById("harmonic-mean").textContent =
        harmonicMean.toFixed(2);
});
