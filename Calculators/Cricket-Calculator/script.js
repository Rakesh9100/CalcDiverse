function calculateStrikeRate() {
    const runsInput = document.getElementById("runs");
    const ballsInput = document.getElementById("balls");

    const runs = parseInt(runsInput.value);
    const balls = parseInt(ballsInput.value);

    if (!isNaN(runs) && !isNaN(balls) && Number.isInteger(runs) && Number.isInteger(balls) && runsInput.value.indexOf('.') === -1 && ballsInput.value.indexOf('.') === -1) {
        if (runs >= 0 && balls >= 0) {
            if (runs === 0 && balls >= 0) {
                const strikeRate = balls !== 0 ? (runs / balls) * 100 : 0;
                document.getElementById("strike-rate-result").textContent = `Strike Rate: ${strikeRate.toFixed(2)}`;
            } else if (runs > 0 && balls > 0) {
                const strikeRate = (runs / balls) * 100;
                document.getElementById("strike-rate-result").textContent = `Strike Rate: ${strikeRate.toFixed(2)}`;
            } else {
                alert("Please enter valid positive integer Runs and positive integer Balls (both greater than zero) before calculating Strike Rate.");
            }
        } else {
            alert("Please enter non-negative integer Runs and non-negative integer Balls before calculating Strike Rate.");
        }
    } else {
        alert("Please enter valid non-negative integer Runs and non-negative integer Balls (both should be whole numbers) without decimal points before calculating Strike Rate.");
        // Clear input fields if invalid input is detected
        runsInput.value = "";
        ballsInput.value = "";
    }
}

function calculateEconomyRate() {
    const runsConcededInput = document.getElementById("runs-conceded");
    const oversInput = document.getElementById("overs");

    const runsConceded = parseFloat(runsConcededInput.value);
    const oversString = oversInput.value;

    // Extracting before and after decimal parts
    const beforeDecimal = parseInt(oversString.split('.')[0]) || 0;
    const afterDecimal = parseInt(oversString.split('.')[1]) || 0;

    if (!isNaN(runsConceded) && !isNaN(beforeDecimal) && !isNaN(afterDecimal) &&
        Number.isInteger(beforeDecimal) && runsConceded >= 0 && runsConceded % 1 === 0 && oversString >= 0 && afterDecimal >= 0 && afterDecimal <= 5) {

        // Original formula for overs (before and after decimal parts)
        const totalOvers = beforeDecimal + (afterDecimal / 6);

        if (totalOvers >= 0) {
            if (runsConceded > 0 && totalOvers === 0) {
                alert("Economy Rate: Not defined");
            } else {
                const economyRate = totalOvers !== 0 ? runsConceded / totalOvers : 0;
                document.getElementById("economy-rate-result").textContent = `Economy Rate: ${economyRate.toFixed(2)}`;
            }
        } else {
            alert("Please enter valid non-negative integer Runs Conceded and valid non-negative Overs (should be a decimal) before calculating Economy Rate.");
        }
    } else {
        alert("Please enter valid non-negative integer Runs Conceded and valid non-negative Overs (should be a decimal) before calculating Economy Rate.");
        // Clear input fields if invalid input is detected
        runsConcededInput.value = "";
        oversInput.value = "";
    }
}

function calculateRequiredRunRate() {
    const targetInput = document.getElementById("target");
    const ballsRemainingInput = document.getElementById("balls-remaining");
    const wicketsRemainingInput = document.getElementById("wickets-remaining");

    const target = parseFloat(targetInput.value);
    const ballsRemaining = parseFloat(ballsRemainingInput.value);
    const wicketsRemaining = parseInt(wicketsRemainingInput.value);

    // Clear previous result
    document.getElementById("required-run-rate-result").textContent = "";

    if (!isNaN(target) && !isNaN(ballsRemaining) && !isNaN(wicketsRemaining) &&
        target >= 0 && target % 1 === 0 && ballsRemaining >= 0 && ballsRemaining % 1 === 0 &&
        wicketsRemaining >= 0 && wicketsRemaining <= 10 && wicketsRemaining % 1 === 0) {

        if (wicketsRemaining === 0) {
            alert("Team is all out!");
        } else if (wicketsRemaining < 0 || wicketsRemaining > 10) {
            alert("Range of wickets remaining is from 0 to 10");
        }

        if (target === 0) {
            alert("Congratulations! You won!");
        }

        if (ballsRemaining === 0 && target > 0) {
            alert("You lost! Balls are exhausted, and the target is still not achieved.");
        }

        if (ballsRemaining !== 0) {
            const requiredRunRate = (target / (ballsRemaining / 6)).toFixed(2);
            document.getElementById("required-run-rate-result").textContent = `Required Run Rate: ${requiredRunRate}`;
        } else {
            alert("Required Run Rate: Not defined");
        }

    } else {
        alert("Please enter valid non-negative integer Target, Balls Remaining and Wickets Remaining (should be between 0 and 10) before calculating Required Run Rate.");
        // Clear input fields if invalid input is detected
        targetInput.value = "";
        ballsRemainingInput.value = "";
        wicketsRemainingInput.value = "";
    }
}

function calculateProjectedScore() {
    const currentScore = parseFloat(document.getElementById("current-score").value);
    const oversRemainingInput = document.getElementById("overs-remaining");
    const runsPerOverInput = document.getElementById("runs-per-over");

    const oversRemainingString = oversRemainingInput.value;
    const runsPerOver = parseFloat(runsPerOverInput.value);

    // Extracting before and after decimal parts
    const beforeDecimal = parseInt(oversRemainingString.split('.')[0]) || 0;
    const afterDecimal = parseInt(oversRemainingString.split('.')[1]) || 0;

    if (!isNaN(currentScore) && !isNaN(beforeDecimal) && !isNaN(afterDecimal) &&
        Number.isInteger(beforeDecimal) && currentScore >= 0 && currentScore % 1 === 0 &&
        runsPerOver >= 0 && runsPerOver % 1 === 0 && afterDecimal >= 0 && afterDecimal <= 5) {

        // Total overs calculation using the formula discussed earlier
        const totalOvers = beforeDecimal + (afterDecimal / 6);

        if (totalOvers >= 0) {
            const projectedScore = currentScore + (totalOvers * runsPerOver);
            document.getElementById("projected-score-result").textContent = `Projected Score: ${projectedScore.toFixed(0)}`;
        } else {
            alert("Please enter valid non-negative integer Current Score, valid non-negative Overs Remaining (up to 5 decimal places), and valid non-negative integer Runs Per Over before calculating Projected Score.");
        }
    } else {
        alert("Please enter valid non-negative integer Current Score, valid non-negative Overs Remaining (up to 5 decimal places), and valid non-negative integer Runs Per Over before calculating Projected Score.");
        // Clear input fields if invalid input is detected
        oversRemainingInput.value = "";
        runsPerOverInput.value = "";
    }
}

function calculateTarget() {
    const oppositionScoreInput = document.getElementById("opposition-score");
    const oppositionScore = parseFloat(oppositionScoreInput.value);

    if (!isNaN(oppositionScore) && oppositionScore >= 0 && oppositionScore % 1 === 0) {
        const target = oppositionScore + 1;
        document.getElementById("target-result").textContent = `Target: ${target.toFixed(0)}`;
    } else {
        alert("Please enter a valid non-negative integer Opposition Score before calculating the Target.");
        // Clear input field if invalid input is detected
        oppositionScoreInput.value = "";
    }
}


function calculateRunRate() {
    var runsScored = parseInt(document.getElementById("runsScored").value);
    var oversPlayed = parseInt(document.getElementById("oversPlayed").value);
    var runsConceded = parseInt(document.getElementById("runsConceded").value);
    var oversBowled = parseInt(document.getElementById("oversBowled").value);
  
    if (!isNaN(runsScored) && !isNaN(oversPlayed) && !isNaN(runsConceded) &&!isNaN(oversBowled) ) {
        var netRunRate = ((runsScored / oversPlayed) - (runsConceded / oversBowled)).toFixed(2);

        document.getElementById("net-runrate-result").innerHTML = "Net Run Rate: " + netRunRate;
    } else {
        alert("Please enter all required details.");
        // Clear input field if invalid input is detected
        oppositionScoreInput.value = "";
    }
    
}

