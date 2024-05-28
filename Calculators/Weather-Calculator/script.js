document.getElementById('calculate').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const humidity = parseFloat(document.getElementById('humidity').value);
    const windSpeed = parseFloat(document.getElementById('windSpeed').value);
    
    const results = `
        <p> Temperature Conversion: ${convertTemperature(temperature)} °F </p>
        <p> Wind Chill: ${findWindChill(temperature, windSpeed)} °C </p>
        <p> Dew Point: ${findDewPoint(temperature, humidity)} °C </p>
        <p> Heat Index: ${findHeatIndex(temperature, humidity)} °C </p>
        <p> Human Thermal Comfort: ${findHumanThermalComfort(temperature, humidity, windSpeed)} </p>
    `;
    
    document.getElementById('results').innerHTML = results;
});

function convertTemperature(celsius) {

    return (celsius * 9/5) + 32;         
}

function findWindChill(temperature, windSpeed) {
    
    if (temperature > 10 || windSpeed < 4.8) {
        return "❌";
    }
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
}

function findDewPoint(temperature, humidity) {
    
    const a = 17.27;
    const b = 237.7;
    const alpha = ((a * temperature) / (b + temperature)) + Math.log(humidity / 100);
    const dewPoint = (b * alpha) / (a - alpha);
    return dewPoint.toFixed(2);       
}

function findHeatIndex(temperature, humidity) {

    const T = temperature;
    const R = humidity;
    const HI = -8.78469475556 + 1.61139411 * T + 2.33854883889 * R + -0.14611605 * T * R + -0.012308094 * Math.pow(T, 2) + -0.0164248277778 * Math.pow(R, 2) + 0.002211732 * Math.pow(T, 2) * R + 0.00072546 * T * Math.pow(R, 2) + -0.000003582 * Math.pow(T, 2) * Math.pow(R, 2);
    return HI.toFixed(2);
}

function findHumanThermalComfort(temperature, humidity, windSpeed) {
    
    const THI = temperature - ((0.55 - (0.55 * (humidity / 100))) * (temperature - 14.5));
    if (THI < 15) {
        return "Cold";
    } else if (THI >= 15 && THI <= 25) {
        return "Comfortable";
    } else {
        return "Hot";
    }
}
