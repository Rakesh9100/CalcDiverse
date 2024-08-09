function calculateRegression() {
    const xValues = document.getElementById('xValues').value.split(',').map(Number);
    const yValues = document.getElementById('yValues').value.split(',').map(Number);

    if (xValues.length !== yValues.length) {
        alert("X and Y values must have the same length.");
        return;
    }

    const n = xValues.length;
    const xMean = xValues.reduce((a, b) => a + b) / n;
    const yMean = yValues.reduce((a, b) => a + b) / n;

    let numerator = 0;
    let denominator = 0;

    for (let i = 0; i < n; i++) {
        numerator += (xValues[i] - xMean) * (yValues[i] - yMean);
        denominator += (xValues[i] - xMean) ** 2;
    }

    const slope = numerator / denominator;
    const intercept = yMean - slope * xMean;

    document.getElementById('equation').innerText = `y = ${slope.toFixed(2)}x + ${intercept.toFixed(2)}`;

    drawGraph(xValues, yValues, slope, intercept);
}

function drawGraph(xValues, yValues, slope, intercept) {
    const ctx = document.getElementById('regressionChart').getContext('2d');

    const regressionLine = xValues.map(x => slope * x + intercept);

    const data = {
        labels: xValues,
        datasets: [
            {
                label: 'Data Points',
                data: xValues.map((x, i) => ({ x, y: yValues[i] })),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                pointRadius: 5,
                pointHoverRadius: 7,
                type: 'scatter',
            },
            {
                label: 'Regression Line',
                data: xValues.map((x, i) => ({ x, y: regressionLine[i] })),
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: false,
                type: 'line',
                pointRadius: 0,
            }
        ]
    };

    const options = {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'X Values',
                    color: 'black'
                },
                ticks: {
                    color: 'black'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Y Values',
                    color: 'black'
                },
                ticks: {
                    color: 'black'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'black'
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'scatter',
        data: data,
        options: options
    });
}
