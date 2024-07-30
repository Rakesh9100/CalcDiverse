document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const outputContainer = document.getElementById('output-container');
    const canvas = document.getElementById('fdChart');
    const ctx = canvas.getContext('2d');
    const resultDiv = document.querySelector('.result');

    if (!calculateBtn || !resetBtn || !outputContainer || !ctx || !resultDiv) {
        console.error('Required elements are missing.');
        return;
    }

    let chartInstance = null;

    function createChart(principal, interestEarned) {
        if (chartInstance) {
            chartInstance.destroy();
        }

        chartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Total Investment', 'Total Return'],
                datasets: [{
                    data: [principal, interestEarned],
                    backgroundColor: ['#fcaf17', '#0b92fc'],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                const dataLabel = tooltipItem.label || '';
                                const value = tooltipItem.raw || 0;
                                return `${dataLabel}: ₹${value.toFixed(2)}`;
                            }
                        }
                    }
                },
                cutout: '50%'
            }
        });
    }

    function updateResult(principal, interestEarned, maturityAmount) {
        resultDiv.innerHTML = ` 
            <h2>Results: <h2/>
            <p><strong>Total Investment:</strong> ₹${principal.toFixed(2)}</p>
            <p><strong>Total Return:</strong> ₹${interestEarned.toFixed(2)}</p>
            <p><strong>Total Maturity Amount:</strong> ₹${maturityAmount.toFixed(2)}</p>
        `;
        resultDiv.style.display = 'block';
    }

    function loadChartData() {
        const storedData = localStorage.getItem('chartData');
        if (storedData) {
            const data = JSON.parse(storedData);
            outputContainer.style.display = 'block';
            createChart(data.principal, data.interestEarned);
            updateResult(data.principal, data.interestEarned, data.principal + data.interestEarned);

            localStorage.removeItem('chartData');
        }
    }

    calculateBtn.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent form submission
        const principal = parseFloat(document.getElementById('principal').value);
        const annualRate = parseFloat(document.getElementById('rate').value);
        const years = parseInt(document.getElementById('years').value);

        if (isNaN(principal) || principal <= 0 ||
            isNaN(annualRate) || annualRate <= 0 ||
            isNaN(years) || years <= 0) {
            alert('Please enter valid value.');
            return;
        }

        const timesCompounded = 4;
        const maturityAmount = principal * Math.pow((1 + annualRate / 100 / timesCompounded), timesCompounded * years);
        const interestEarned = maturityAmount - principal;

        localStorage.setItem('chartData', JSON.stringify({
            principal: principal,
            interestEarned: interestEarned
        }));

        outputContainer.style.display = 'block';
        createChart(principal, interestEarned);
        updateResult(principal, interestEarned, maturityAmount);
    });

    resetBtn.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('principal').value = '';
        document.getElementById('rate').value = '';
        document.getElementById('years').value = '';

        if (chartInstance) {
            chartInstance.destroy();
            chartInstance = null;
        }
        resultDiv.innerHTML = '';
        outputContainer.style.display = 'none';
    });

    loadChartData();
});
