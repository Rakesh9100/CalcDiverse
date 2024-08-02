document.getElementById("npsForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const scoresInput = document.getElementById("scores").value;
    const scores = scoresInput.split(",").map((s) => s.trim());
    const errorMessage = document.getElementById("errorMessage");

    if (!scoresInput) {
        showError("Input cannot be empty");
        return;
    }

    for (let score of scores) {
        if (isNaN(score) || score === "") {
            showError("All inputs must be numbers");
            return;
        }
        if (Number(score) < 0 || Number(score) > 10) {
            showError("Scores must be between 0 and 10");
            return;
        }
    }

    const numScores = scores.map(Number);
    const promoters = numScores.filter((score) => score >= 9);
    const detractors = numScores.filter((score) => score <= 6);
    const totalRespondents = numScores.length;
    const nps = ((promoters.length - detractors.length) / totalRespondents) * 100;

    document.getElementById("npsScore").textContent = nps.toFixed(2);
    document.getElementById("result").classList.remove("hidden");
    errorMessage.classList.add("hidden");
});

function showError(message) {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
}
