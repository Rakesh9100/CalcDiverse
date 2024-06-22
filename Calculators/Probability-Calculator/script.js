function showInputs() {
    var option = document.getElementById("option").value;
    var inputsDiv = document.getElementById("inputs");
    inputsDiv.innerHTML = "";

    if (option === "coins") {
        inputsDiv.innerHTML = '<label for="numCoins">Number of Coins (1-3):</label>' +
            '<select id="numCoins">' +
            '<option value="1">1</option>' +
            '<option value="2">2</option>' +
            '<option value="3">3</option>' +
            '</select>';
    } else if (option === "dices") {
        inputsDiv.innerHTML = '<label for="numDices">Number of Dices (1-2):</label>' +
            '<select id="numDices">' +
            '<option value="1">1</option>' +
            '<option value="2">2</option>' +
            '</select>';
    } else if (option === "events") {
        inputsDiv.innerHTML = '<label for="probEvent1">Probability of Event A(Between 0 and 1):</label>' +
            '<input type="number" id="probEvent1" step="0.01">' +
            '<label for="probEvent2">Probability of Event B:(Between 0 and 1)</label>' +
            '<input type="number" id="probEvent2" step="0.01">';
    }

    if (option) {
        inputsDiv.style.display = "block";
    } else {
        inputsDiv.style.display = "none";
    }
}

function calculate() {
    var option = document.getElementById("option").value;
    var resultDiv = document.getElementById("result");
    var resultText = "";

    if (option === "coins") {
        var numCoins = parseInt(document.getElementById("numCoins").value);
        resultText = "Calculating probabilities for " + numCoins + " coin(s) toss...<br>";
        if (numCoins == 1) {
            resultText += "Probability of Getting Head= 0.5<br>Probability of Getting Tails= 0.5";
        } else if (numCoins == 2) {
            resultText += "Probability of Getting 1 Head and 1 Tails= 0.33<br>Probability of Getting 2 Tails= 0.33<br>Probability of Getting 2 Heads= 0.33";
        } else if (numCoins == 3) {
            resultText += "Probability of Getting 1 Head and 2 Tails= 3/8<br>Probability of Getting 1 Tails and 2 Heads= 3/8<br>Probability of Getting 3 Heads= 1/8<br>Probability of Getting 3 Tails= 1/8";
        }
    } else if (option === "dices") {
        var numDices = parseInt(document.getElementById("numDices").value);
        resultText = "Calculating probabilities for " + numDices + " dice(s) throw...<br>";
        if (numDices == 1) {
            resultText += "Probability of Getting 1=1/6<br>Probability of Getting 2=1/6<br>Probability of Getting 3=1/6<br>Probability of Getting 4=1/6<br>Probability of Getting 5=1/6<br>Probability of Getting 6=1/6<br>Probability of Getting even number=1/2<br>Probability of Getting odd number=1/2";
        } else if (numDices == 2) {
            resultText += "Probability of Getting even Number on both Dices=1/4<br>Probability of Getting odd Number on both Dices=1/4<br>Probability of Getting Same number on both Dices=1/6<br>Probability of Getting different number on both Dices=5/6<br>Probability of Getting First value more than second value=5/12";
        }
    } else if (option === "events") {
        var probEvent1 = parseFloat(document.getElementById("probEvent1").value);
        var probEvent2 = parseFloat(document.getElementById("probEvent2").value);
        resultText = "Calculating probabilities for two events with probabilities: " + probEvent1 + " and " + probEvent2 + ":-<br>" + "1)Probability of event A NOT occurring: P(A')=" + (1 - probEvent1) + ".<br>" + "2)Probability of event B NOT occurring: P(B')=" + (1 - probEvent2) + ".<br>" + "3)Probability of event A and event B both occurring: P(A∩B)=" + (probEvent1 * probEvent2) + ".<br>" + "4)Probability that A or B or both occur: P(A∪B)=" + (probEvent2 + probEvent1 - (probEvent1 * probEvent2)) + ".<br>" + "5)Probability that A or B occurs but NOT both: P(AΔB)=" + ((probEvent2 + probEvent1 - (2 * probEvent1 * probEvent2))) + ".<br>" + "6)Probability of neither A nor B occurring: P((A∪B)=" + (1 - (probEvent2 + probEvent1 - (probEvent1 * probEvent2))) + ".<br>" + "7)Probability of A occurring but NOT B=" + (probEvent1 * (1 - probEvent2)) + ".<br>" + "8)Probability of B occurring but NOT A=" + (probEvent2 * (1 - probEvent1)) + ".";

    } else {
        resultText = "Please select an option.";
    }

    resultDiv.innerHTML = resultText;
}