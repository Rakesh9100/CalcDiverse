document.getElementById("generate-chart").addEventListener("click", function () {
    const labelsInput = document.getElementById("labels").value;
    const valuesInput = document.getElementById("values").value;

    if (!labelsInput || !valuesInput) {
        alert("Please fill in both labels and values!");
        return;
    }

    const labels = labelsInput.split(",").map(label => label.trim());
    const values = valuesInput.split(",").map(value => parseFloat(value.trim()));

    if (labels.length !== values.length) {
        alert("The number of labels must match the number of values!");
        return;
    }

    // Create the chart
    const ctx = document.getElementById("chart").getContext("2d");

    // Destroy the previous chart instance if it exists
    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Values',
                data: values,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});