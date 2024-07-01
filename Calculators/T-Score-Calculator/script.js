function calculateTScore() {
    const sampleMean = parseFloat(document.getElementById("sampleMean").value);
    const populationMean = parseFloat(
        document.getElementById("populationMean").value
    );
    const sampleSD = parseFloat(document.getElementById("sampleSD").value);
    const sampleSize = parseInt(document.getElementById("sampleSize").value);

    if (
        isNaN(sampleMean) ||
        isNaN(populationMean) ||
        isNaN(sampleSD) ||
        isNaN(sampleSize)
    ) {
        document.getElementById("result").innerText = "Please enter valid numbers";
        return;
    }

    const tScore =
        (sampleMean - populationMean) / (sampleSD / Math.sqrt(sampleSize));

    document.getElementById("result").innerText = `T-score: ${tScore.toFixed(2)}`;
}
