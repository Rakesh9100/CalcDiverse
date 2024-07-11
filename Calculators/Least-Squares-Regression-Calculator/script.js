let scatterChart; // Global variable to store the chart instance

function calculateRegression() {
    let rawData = document.getElementById('data-input').value.trim();
    let dataPoints = rawData.split(';').map(pair => pair.split(',').map(Number));

    // Extract x and y values
    let xValues = dataPoints.map(pair => pair[0]);
    let yValues = dataPoints.map(pair => pair[1]);

    // Calculate necessary sums
    let n = dataPoints.length;
    let sumX = xValues.reduce((acc, val) => acc + val, 0);
    let sumY = yValues.reduce((acc, val) => acc + val, 0);
    let sumXY = xValues.map((val, i) => val * yValues[i]).reduce((acc, val) => acc + val, 0);
    let sumX2 = xValues.map(val => val ** 2).reduce((acc, val) => acc + val, 0);
    let sumY2 = yValues.map(val => val ** 2).reduce((acc, val) => acc + val, 0);

    // Calculate slope (m) and intercept (b)
    let slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);
    let intercept = (sumY * sumX2 - sumX * sumXY) / (n * sumX2 - sumX ** 2);

    // Calculate R-squared
    let yMean = sumY / n;
    let SSTotal = sumY2 - n * yMean ** 2;
    let SSReg = slope * (sumXY - sumX * yMean);
    let SSR = SSReg / SSTotal;
    let rSquared = SSR.toFixed(4);

    // Calculate standard error
    let residuals = yValues.map((y, i) => y - (slope * xValues[i] + intercept));
    let sumResidualsSquared = residuals.map(val => val ** 2).reduce((acc, val) => acc + val, 0);
    let standardError = Math.sqrt(sumResidualsSquared / (n - 2)).toFixed(4);

    // Display results
    document.getElementById('equation').textContent = `y = ${slope.toFixed(4)}x + ${intercept.toFixed(4)}`;
    document.getElementById('r-squared').textContent = rSquared;
    document.getElementById('standard-error').textContent = standardError;

    // Plot data and regression line
    plotDataAndRegression(xValues, yValues, slope, intercept);
}

function plotDataAndRegression(xValues, yValues, slope, intercept) {
    let ctx = document.getElementById('chart').getContext('2d');

    // Scatter plot data
    let scatterData = {
        datasets: [{
            label: 'Data Points',
            data: xValues.map((x, i) => ({ x: x, y: yValues[i] })),
            backgroundColor: 'rgba(54, 162, 235, 0.8)',
            pointRadius: 5,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            showLine: false
        }]
    };

    // Line of best fit
    let lineOfBestFit = {
        datasets: [{
            label: 'Regression Line',
            data: xValues.map(x => ({ x: x, y: slope * x + intercept })),
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Adjust alpha for transparency
            borderColor: '#ff6347', // Orange-red color for contrast
            borderWidth: 2,
            fill: false, // Do not fill area under the line
            showLine: true
        }]
    };

    if (scatterChart) {
        // Update existing chart
        scatterChart.data.datasets[0].data = scatterData.datasets[0].data;
        scatterChart.data.datasets[1] = lineOfBestFit.datasets[0];
        scatterChart.update();
    } else {
        // Create new chart
        scatterChart = new Chart(ctx, {
            type: 'scatter',
            data: scatterData,
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    },
                    y: {
                        type: 'linear',
                        position: 'left'
                    }
                }
            }
        });

        scatterChart.data.datasets.push(lineOfBestFit.datasets[0]);
        scatterChart.update();
    }

    document.getElementById('output-section').style.display = 'block';
}
