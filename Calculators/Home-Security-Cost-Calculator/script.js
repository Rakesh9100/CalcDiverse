function calculateCost() {
    const cameraCount = parseInt(document.getElementById('cameraCount').value);
    const sensorCount = parseInt(document.getElementById('sensorCount').value);
    const alarmCount = parseInt(document.getElementById('alarmCount').value);
    const monitoring = parseInt(document.getElementById('monitoring').value);
    const currencyRate = parseFloat(document.getElementById('currency').value);
    const currencySymbol = document.getElementById('currency').selectedOptions[0].textContent;

    const cameraCost = cameraCount * 100; // assuming each camera costs $100
    const sensorCost = sensorCount * 50;  // assuming each sensor costs $50
    const alarmCost = alarmCount * 75;    // assuming each alarm costs $75
    const totalCostUSD = cameraCost + sensorCost + alarmCost + monitoring;
    const totalCost = totalCostUSD * currencyRate;

    document.getElementById('totalCost').textContent = totalCost.toFixed(2);
    document.getElementById('currencySymbol').textContent = currencySymbol;
}
