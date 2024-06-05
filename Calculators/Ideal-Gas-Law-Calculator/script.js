function showFields() {
    const find = document.getElementById('find').value;
    document.getElementById('gasForm').style.display = 'block';

    // Hide all fields initially
    document.getElementById('pressureField').style.display = 'none';
    document.getElementById('volumeField').style.display = 'none';
    document.getElementById('molesField').style.display = 'none';
    document.getElementById('temperatureField').style.display = 'none';

    // Show the appropriate fields based on what the user wants to find
    if (find === 'pressure') {
        document.getElementById('volumeField').style.display = 'block';
        document.getElementById('molesField').style.display = 'block';
        document.getElementById('temperatureField').style.display = 'block';
    } else if (find === 'volume') {
        document.getElementById('pressureField').style.display = 'block';
        document.getElementById('molesField').style.display = 'block';
        document.getElementById('temperatureField').style.display = 'block';
    } else if (find === 'moles') {
        document.getElementById('pressureField').style.display = 'block';
        document.getElementById('volumeField').style.display = 'block';
        document.getElementById('temperatureField').style.display = 'block';
    } else if (find === 'temperature') {
        document.getElementById('pressureField').style.display = 'block';
        document.getElementById('volumeField').style.display = 'block';
        document.getElementById('molesField').style.display = 'block';
    }
}

function calculate() {
    const R = 0.0821; // Ideal gas constant in L·atm/(K·mol)
    const find = document.getElementById('find').value;

    let pressure = parseFloat(document.getElementById('pressure').value);
    const pressureUnit = document.getElementById('pressureUnit').value;
    let volume = parseFloat(document.getElementById('volume').value);
    const volumeUnit = document.getElementById('volumeUnit').value;
    const moles = parseFloat(document.getElementById('moles').value);
    let temperature = parseFloat(document.getElementById('temperature').value);
    const temperatureUnit = document.getElementById('temperatureUnit').value;

    if (temperatureUnit === 'C') {
        temperature += 273.15; // Convert Celsius to Kelvin
    } else if (temperatureUnit === 'F') {
        temperature = (temperature - 32) * 5/9 + 273.15; // Convert Fahrenheit to Kelvin
    }

    if (volumeUnit === 'ml') {
        volume /= 1000; // Convert milliliters to liters
    } else if (volumeUnit === 'm3') {
        volume *= 1000; // Convert cubic meters to liters
    }

    if (pressureUnit === 'pa') {
        pressure /= 101325; // Convert Pascals to atm
    } else if (pressureUnit === 'kpa') {
        pressure /= 101.325; // Convert kPa to atm
    } else if (pressureUnit === 'mmhg') {
        pressure /= 760; // Convert mmHg to atm
    }

    let result;

    if (find === 'pressure') {
        if (volume && moles && temperature) {
            result = (moles * R * temperature) / volume;
            displayResult(`Pressure (P) = ${result.toFixed(2)} atm`);
        } else {
            displayResult("Please fill in Volume, Moles, and Temperature.");
        }
    } else if (find === 'volume') {
        if (pressure && moles && temperature) {
            result = (moles * R * temperature) / pressure;
            displayResult(`Volume (V) = ${result.toFixed(2)} liters`);
        } else {
            displayResult("Please fill in Pressure, Moles, and Temperature.");
        }
    } else if (find === 'moles') {
        if (pressure && volume && temperature) {
            result = (pressure * volume) / (R * temperature);
            displayResult(`Moles (n) = ${result.toFixed(2)}`);
        } else {
            displayResult("Please fill in Pressure, Volume, and Temperature.");
        }
    } else if (find === 'temperature') {
        if (pressure && volume && moles) {
            result = (pressure * volume) / (moles * R);
            displayResult(`Temperature (T) = ${result.toFixed(2)} K`);
        } else {
            displayResult("Please fill in Pressure, Volume, and Moles.");
        }
    }
}

function displayResult(message) {
    document.getElementById('result').textContent = message;
}
