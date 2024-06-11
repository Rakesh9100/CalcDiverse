document.getElementById('inflation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateInflation();
});

let chart;

function calculateInflation() {
    const amount = parseFloat(document.getElementById('amount').value);
    const startYear = parseInt(document.getElementById('start-year').value);
    const endYear = parseInt(document.getElementById('end-year').value);

    // Check if inputs are valid
    if (isNaN(amount) || isNaN(startYear) || isNaN(endYear) || startYear < 1973 || startYear > 2073 || endYear < 1973 || endYear > 2073 || startYear >= endYear) {
        displayDataNotAvailable();
        return;
    }

    // Display a loading spinner
    const resultText = document.getElementById('result-text');
    resultText.innerHTML = 'Calculating... <div class="spinner"></div>';
    document.getElementById('result').style.display = 'block';

    let finalAmount = amount;
    let yearData = [];

    for (let year = startYear; year < endYear; year++) {
        const inflationRate = inflationData.find(data => data.year === year).rate / 100;
        finalAmount += finalAmount * inflationRate;
        yearData.push({ year, amount: finalAmount });
    }

    setTimeout(() => {
        resultText.innerHTML = `
            The value of ₹${amount.toFixed(2)} in ${startYear} is equivalent to ₹${finalAmount.toFixed(2)} in ${endYear}.
        `;
        updateChart(yearData);
    }, 1000); // Simulate a delay for demonstration
}

function updateChart(yearData) {
    const ctx = document.getElementById('inflation-chart').getContext('2d');
    const labels = yearData.map(data => data.year);
    const data = yearData.map(data => data.amount);

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Inflation Value Over Time',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function displayDataNotAvailable() {
    const resultText = document.getElementById('result-text');
    resultText.innerHTML = 'Data not available for the selected years.  \n Please Enter The Valid Year select between 1973 to 2053 ';
    document.getElementById('result').style.display = 'none';
    alert("wrong data entered enter year between 1973 and 2053"); 

    if (chart) {
        chart.destroy();
    }
}
