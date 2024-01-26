function calculateStrikeRate() {
    const runs = document.getElementById("runs").value;
    const balls = document.getElementById("balls").value;

    // Check if runs and balls are not empty
    if (runs !== "" && balls !== "") {
        const strikeRate = (runs / balls) * 100;
        document.getElementById("strike-rate-result").textContent = `Strike Rate: ${strikeRate.toFixed(2)}`;
    } else {
        // Display an alert if either runs or balls is empty
        alert("Please enter both Runs and Balls before calculating Strike Rate.");
    }
}
function calculateEconomyRate() {
    const runsConceded = document.getElementById("runs-conceded").value;
    const overs = document.getElementById("overs").value;

    // Check if runsConceded and overs are not empty
    if (runsConceded !== "" && overs !== "") {
        const economyRate = runsConceded / (overs * 6);
        document.getElementById("economy-rate-result").textContent = `Economy Rate: ${economyRate.toFixed(2)}`;
    } else {
        alert("Please enter both Runs Conceded and Overs before calculating Economy Rate.");
    }
}

function calculateRequiredRunRate() {
    const target = document.getElementById("target").value;
    const ballsRemaining = document.getElementById("balls-remaining").value;

    // Check if target and ballsRemaining are not empty
    if (target !== "" && ballsRemaining !== "") {
        const requiredRunRate = (target / (ballsRemaining / 6)).toFixed(2);
        document.getElementById("required-run-rate-result").textContent = `Required Run Rate: ${requiredRunRate}`;
    } else {
        alert("Please enter both Target and Balls Remaining before calculating Required Run Rate.");
    }
}

function calculateProjectedScore() {
    const currentScore = document.getElementById("current-score").value;
    const oversRemaining = document.getElementById("overs-remaining").value;
    const runsPerOver = document.getElementById("runs-per-over").value;

    // Check if currentScore, oversRemaining, and runsPerOver are not empty
    if (currentScore !== "" && oversRemaining !== "" && runsPerOver !== "") {
        const projectedScore = Number(currentScore) + (Number(oversRemaining) * Number(runsPerOver));
        document.getElementById("projected-score-result").textContent = `Projected Score: ${projectedScore.toFixed(0)}`;
    } else {
        alert("Please enter Current Score, Overs Remaining, and Runs Per Over before calculating Projected Score.");
    }
}

function calculateTarget() {
    const oppositionScore = parseFloat(document.getElementById("opposition-score").value);

    if (!isNaN(oppositionScore)) {
        // Check if opposition score is a valid number
        const target = oppositionScore + 1;
        document.getElementById("target-result").textContent = `Target: ${target.toFixed(0)}`;
    } else {
        alert("Please enter the Opposition Score before calculating Target.");
    }
}

