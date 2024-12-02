document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const outputContainer = document.getElementById('output-container');
    const canvas = document.getElementById('rdChart');
    const ctx = canvas.getContext('2d');
    const resultDiv = document.querySelector('.result');

    if (!calculateBtn || !outputContainer || !ctx || !resultDiv) {
        console.error('Required elements are missing.');
        return;
    }

    let chartInstance = null;

    function createChart(totalInvestment, interestEarned) {
        if (chartInstance) {
            console.log('Destroying existing chart instance.');
            chartInstance.destroy();
        }

        chartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Total Investment', 'Total Interest'],
                datasets: [{
                    data: [totalInvestment, interestEarned],
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

        console.log('New chart instance created.');
    }

    function updateResult(totalInvestment, interestEarned, maturityAmount) {
        resultDiv.innerHTML = ` 
            <h2>Results:</h2>
            <p><strong>Total Investment:</strong> ₹${totalInvestment.toFixed(2)}</p>
            <p><strong>Total Interest Earned:</strong> ₹${interestEarned.toFixed(2)}</p>
            <p><strong>Total Maturity Amount:</strong> ₹${maturityAmount.toFixed(2)}</p>
        `;
        resultDiv.style.display = 'block';
    }

    function loadChartData() {
        const storedData = localStorage.getItem('chartData');
        if (storedData) {
            const data = JSON.parse(storedData);
            outputContainer.style.display = 'block';
            updateResult(data.totalInvestment, data.interestEarned, data.totalInvestment + data.interestEarned);
            createChart(data.totalInvestment, data.interestEarned);

            localStorage.removeItem('chartData');
        }
    }

    calculateBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const monthlyInstallment = parseFloat(document.getElementById('monthly-installment').value);
        const annualRate = parseFloat(document.getElementById('rate').value);
        const months = parseInt(document.getElementById('months').value);

        if (isNaN(monthlyInstallment) || monthlyInstallment <= 0 ||
            isNaN(annualRate) || annualRate <= 0 ||
            isNaN(months) || months <= 0) {
            alert('Please enter valid values.');
            return;
        }

        const monthlyRate = annualRate / 12 / 100;
        let maturityAmount = 0;

        for (let i = 0; i < months; i++) {
            maturityAmount += monthlyInstallment * Math.pow(1 + monthlyRate, months - i);
        }

        const totalInvestment = monthlyInstallment * months;
        const interestEarned = maturityAmount - totalInvestment;

        localStorage.setItem('chartData', JSON.stringify({
            totalInvestment: totalInvestment,
            interestEarned: interestEarned
        }));

        outputContainer.style.display = 'block';
        updateResult(totalInvestment, interestEarned, maturityAmount);
        createChart(totalInvestment, interestEarned);
    });

    resetBtn.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('monthly-installment').value = '';
        document.getElementById('rate').value = '';
        document.getElementById('months').value = '';

        if (chartInstance) {
            chartInstance.destroy();
            chartInstance = null;
        }
        resultDiv.innerHTML = '';
        outputContainer.style.display = 'none';
    });

    loadChartData();
});
