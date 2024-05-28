function calculate() {
    var voltage = parseFloat(document.getElementById('voltage').value);
    var current = parseFloat(document.getElementById('current').value);

    // Check if voltage and current are provided
    if (isNaN(voltage) || isNaN(current)) {
        alert("Please enter both voltage and current.");
        return;
    }

    // Calculate power (P = V * I)
    var power = voltage * current;

    // Display result
    document.getElementById('result').innerText = "Power (W): " + power;

    // Add to history
    addToHistory(voltage, current, power);
}

function addToHistory(voltage, current, power) {
    var historyList = document.getElementById('history-list');
    var newEntry = document.createElement('li');
    newEntry.textContent = `Voltage: ${voltage} V, Current: ${current} A, Power: ${power} W`;
    historyList.appendChild(newEntry);
}
