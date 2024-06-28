document.addEventListener('DOMContentLoaded', function () {
    const initialNetSales = 1000000;
    const initialRawMaterialCosts = 300000;
    const initialEmployeeCosts = 200000;
    const initialOtherExpenses = 100000;

    document.getElementById('netSales').value = initialNetSales;
    document.getElementById('rawMaterialCosts').value = initialRawMaterialCosts;
    document.getElementById('employeeCosts').value = initialEmployeeCosts;
    document.getElementById('otherExpenses').value = initialOtherExpenses;

    const calculateEBITDA = () => {
        const netSales = parseFloat(document.getElementById('netSales').value) || 0;
        const rawMaterialCosts = parseFloat(document.getElementById('rawMaterialCosts').value) || 0;
        const employeeCosts = parseFloat(document.getElementById('employeeCosts').value) || 0;
        const otherExpenses = parseFloat(document.getElementById('otherExpenses').value) || 0;

        const ebitda = netSales - rawMaterialCosts - employeeCosts - otherExpenses;

        document.getElementById('calEBITDA').value = ebitda;

        Highcharts.chart('ebitdaChart', {
            chart: {
                type: 'pie',
                plotShadow: false,
            },
            title: {
                text: 'EBITDA Breakdown'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    innerSize: '50%',
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}: {point.y:.1f}%'
                    }
                }
            },
            series: [{
                name: 'Percentage',
                colorByPoint: true,
                data: [{
                    name: 'Raw Material Costs',
                    y: rawMaterialCosts
                }, {
                    name: 'Employee Costs',
                    y: employeeCosts
                }, {
                    name: 'Other Expenses',
                    y: otherExpenses
                }, {
                    name: 'EBITDA',
                    y: ebitda
                }]
            }]
        });
    };

    document.getElementById('calculateBtn').addEventListener('click', calculateEBITDA);

    // Initial calculation
    calculateEBITDA();
});
