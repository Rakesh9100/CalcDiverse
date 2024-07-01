function calculateSunlightHours() {
    const latitude = parseFloat(document.getElementById('latitude').value);
    const date = new Date(document.getElementById('date').value);

    if (isNaN(latitude) || !date) {
        document.getElementById('result').innerText = 'Please enter a valid latitude and date.';
        return;
    }

    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const declination = 23.45 * Math.sin(2 * Math.PI * (284 + dayOfYear) / 365);
    const hourAngle = Math.acos(-Math.tan(latitude * Math.PI / 180) * Math.tan(declination * Math.PI / 180));
    const sunlightHours = 2 * hourAngle * 180 / Math.PI / 15;

    const hours = Math.floor(sunlightHours);
    const minutes = Math.floor((sunlightHours - hours) * 60);

    document.getElementById('result').innerText = `Sunlight hours: ${hours} hours and ${minutes} minutes.`;
}
