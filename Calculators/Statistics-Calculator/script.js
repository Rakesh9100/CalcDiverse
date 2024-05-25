function clearData() {
    document.getElementById("dataSet").value = "";
    document.getElementById("statsList").innerHTML = "";
}

function calculateStats() {
    const dataSet = document.getElementById("dataSet").value.replace(/\s/g, '');
    const numbers = dataSet.split(",").map(Number);
    const statsList = document.getElementById("statsList");
    if (dataSet == "") {
        statsList.innerHTML = `<li><span>Please enter a valid dataset!</span></li>`;
    } else if (!/^(\d+(\.\d+)?,)*\d+(\.\d+)?$/.test(dataSet)) {
        statsList.innerHTML = `<li><span>Dataset should only contain numbers!</span></li>`;
    } else {
        const max = Math.max(...numbers);
        const min = Math.min(...numbers);
        const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
        const sortedNumbers = numbers.sort((a, b) => a - b);
        const middle = Math.floor(numbers.length / 2);
        const median = numbers.length % 2 === 0 ? (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2 : sortedNumbers[middle];
        const mode = findMode(numbers);
        const variance = calculateVariance(numbers, mean);
        const standardDeviation = Math.sqrt(variance);
        const range = max - min;
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const count = numbers.length;

        statsList.innerHTML = `
    <li><span>Mean:</span><span>${mean.toFixed(2)}</span></li><hr>
    <li><span>Median:</span><span>${median}</span></li><hr>
    <li><span>Mode:</span><span>${mode.join(', ')}</span></li><hr>
    <li><span>Variance:</span><span>${variance.toFixed(2)}</span></li><hr>
    <li><span>Standard Deviation:</span><span>${standardDeviation.toFixed(2)}</span></li><hr>
    <li><span>Range:</span><span>${range}</span></li><hr>
    <li><span>Maximum:</span><span>${max}</span></li><hr>
    <li><span>Minimum:</span><span>${min}</span></li><hr>
    <li><span>Sum:</span><span>${sum}</span></li><hr>
    <li><span>Count:</span><span>${count}</span></li><hr>
    `;
    }
}

function findMode(numbers) {
    const frequency = {};
    let maxFrequency = 0;

    for (const num of numbers) {
        frequency[num] = (frequency[num] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, frequency[num]);
    }

    const mode = [];
    for (const num in frequency) {
        if (frequency[num] === maxFrequency) {
            mode.push(num);
        }
    }

    return mode;
}

function calculateVariance(numbers, mean) {
    return (
        numbers.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) /
        numbers.length
    );
}
