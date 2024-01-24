function calculateStrikeRate() {
    const runs = document.getElementById("runs").value;
    const balls = document.getElementById("balls").value;
    const strikeRate = (runs / balls) * 100;
    document.getElementById("strike-rate-result").textContent = `Strike Rate: ${strikeRate.toFixed(2)}`;
}

function calculateEconomyRate() {
    const runsConceded = document.getElementById("runs-conceded").value;
    const overs = document.getElementById("overs").value;
    const economyRate = runsConceded / (overs);
    document.getElementById("economy-rate-result").textContent = `Economy Rate: ${economyRate.toFixed(2)}`;
}

function calculateRequiredRunRate() {
    const target = document.getElementById("target").value;
    const ballsRemaining = document.getElementById("balls-remaining").value;
    const requiredRunRate = (target / (ballsRemaining / 6)).toFixed(2);
    document.getElementById("required-run-rate-result").textContent = `Required Run Rate: ${requiredRunRate}`;
}

function calculateProjectedScore() {
    const currentScore = parseFloat(document.getElementById("current-score").value);
    const oversRemaining = parseFloat(document.getElementById("overs-remaining").value);
    const runsPerOver = parseFloat(document.getElementById("runs-per-over").value);
    const projectedScore = currentScore + (oversRemaining * runsPerOver);
    document.getElementById("projected-score-result").textContent = `Projected Score: ${projectedScore.toFixed(0)}`;
}

function calculateTarget() {
    const oppositionScore = parseFloat(document.getElementById("opposition-score").value);
    const target = oppositionScore + 1;
    document.getElementById("target-result").textContent = `Target: ${target.toFixed(0)}`;
}
