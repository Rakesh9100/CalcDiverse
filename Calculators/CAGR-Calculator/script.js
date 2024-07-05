document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById('calculateBtn');
    calculateBtn.addEventListener('click', calculateCAGR);

    function calculateCAGR() {
        const initialValue = parseFloat(document.getElementById('initialValue').value.replace(/,/g, ''));
        const finalValue = parseFloat(document.getElementById('finalValue').value.replace(/,/g, ''));
        const duration = parseFloat(document.getElementById('durationOfInvest').value);

        if (!isNaN(initialValue) && !isNaN(finalValue) && !isNaN(duration)) {
            const cagr = ((Math.pow(finalValue / initialValue, 1 / duration) - 1) * 100).toFixed(2);
            document.getElementById('calCagr').value = cagr + '%';
            renderChart(initialValue, finalValue);
        } else {
            alert('Please enter valid numbers');
        }
    }

    function renderChart(initialValue, finalValue) {
        Highcharts.chart('cagrChart', {
            chart: {
                type: 'pie',
                innerSize: '50%' // This makes it a doughnut chart
            },
            title: {
                text: 'CAGR Breakdown'
            },
            series: [{
                name: 'Value',
                colorByPoint: true,
                data: [{
                    name: 'Initial Value',
                    y: initialValue,
                    color: '#db620a'
                }, {
                    name: 'Final Value',
                    y: finalValue,
                    color: '#053c6d'
                }]
            }]
        });
    }

    // Initial chart rendering with default values
    const initialValueDefault = 100000;
    const finalValueDefault = 1000000;
    const durationDefault = 5;
    const cagrDefault = ((Math.pow(finalValueDefault / initialValueDefault, 1 / durationDefault) - 1) * 100).toFixed(2);
    document.getElementById('initialValue').value = initialValueDefault.toLocaleString();
    document.getElementById('finalValue').value = finalValueDefault.toLocaleString();
    document.getElementById('durationOfInvest').value = durationDefault;
    document.getElementById('calCagr').value = cagrDefault + '%';
    renderChart(initialValueDefault, finalValueDefault);
});
