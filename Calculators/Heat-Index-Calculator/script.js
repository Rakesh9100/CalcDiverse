document.getElementById('heatIndexForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const temperature = parseFloat(document.getElementById('temperature').value);
    const humidity = parseFloat(document.getElementById('humidity').value);
    
    const heatIndex = calculateHeatIndex(temperature, humidity);
    
    document.getElementById('result').textContent = `Heat Index: ${heatIndex.toFixed(2)}°F`;
});

function calculateHeatIndex(T, R) {
    const HI = -42.379 + 2.04901523 * T + 10.14333127 * R - 0.22475541 * T * R 
                - 0.00683783 * T * T - 0.05481717 * R * R + 0.00122874 * T * T * R 
                + 0.00085282 * T * R * R - 0.00000199 * T * T * R * R;

    if (R < 13 && (T >= 80 && T <= 112)) {
        const adjustment = ((13 - R) / 4) * Math.sqrt((17 - Math.abs(T - 95)) / 17);
        return HI - adjustment;
    } else if (R > 85 && (T >= 80 && T <= 87)) {
        const adjustment = ((R - 85) / 10) * ((87 - T) / 5);
        return HI + adjustment;
    } else {
        return HI;
    }
}
