function setPredefinedDistance(inputId, value) {
    const distanceInput = document.getElementById(inputId);
    switch (value) {
        case 'marathon':
            distanceInput.value = 42.195;
            break;
        case 'half_marathon':
            distanceInput.value = 21.0975;
            break;
        case '1k':
            distanceInput.value = 1;
            break;
        case '5k':
            distanceInput.value = 5;
            break;
        case '10k':
            distanceInput.value = 10;
            break;
        case '1mile':
            distanceInput.value = 1.60934;
            break;
        case '5miles':
            distanceInput.value = 5 * 1.60934;
            break;
        case '10miles':
            distanceInput.value = 10 * 1.60934;
            break;
        case '800meters':
            distanceInput.value = 0.8;
            break;
        case '1500meters':
            distanceInput.value = 1.5;
            break;
        default:
            distanceInput.value = '';
    }
}

function parseTime(timeStr) {
    const parts = timeStr.split(':');
    const hours = parseInt(parts[0], 10) || 0;
    const minutes = parseInt(parts[1], 10) || 0;
    const seconds = parseInt(parts[2], 10) || 0;
    return hours * 3600 + minutes * 60 + seconds;
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    return `${hours}:${minutes}:${seconds.toFixed(2)}`;
}

function convertPaceToSeconds(paceStr, paceUnit) {
    const parts = paceStr.split(':');
    const minutes = parseInt(parts[0], 10) || 0;
    const seconds = parseFloat(parts[1]) || 0;
    let paceInSeconds = minutes * 60 + seconds;

    if (paceUnit === 'mph') {
        paceInSeconds = 3600 / paceInSeconds;
    } else if (paceUnit === 'kph') {
        paceInSeconds = 3600 / (paceInSeconds / 1.60934);
    } else if (paceUnit === 'm/min') {
        paceInSeconds = 60 / paceInSeconds;
    } else if (paceUnit === 'm/sec') {
        paceInSeconds = 1 / paceInSeconds;
    } else if (paceUnit === 'yards/min') {
        paceInSeconds = 60 / (paceInSeconds * 0.9144);
    } else if (paceUnit === 'yards/sec') {
        paceInSeconds = 1 / (paceInSeconds * 0.9144);
    }

    return paceInSeconds;
}

function calculatePace() {
    const timeStr = document.getElementById('timePace').value;
    const distance = parseFloat(document.getElementById('distancePace').value);
    const distanceUnit = document.getElementById('distanceUnitPace').value;

    let distanceInKm = distance;

    if (distanceUnit === 'miles') {
        distanceInKm *= 1.60934;
    } else if (distanceUnit === 'meters') {
        distanceInKm /= 1000;
    } else if (distanceUnit === 'yards') {
        distanceInKm *= 0.0009144;
    }

    const timeInSeconds = parseTime(timeStr);
    const paceInSecondsPerKm = timeInSeconds / distanceInKm;

    if (paceInSecondsPerKm >= 3600) {
        const formattedTime = formatTime(paceInSecondsPerKm);
        document.getElementById('resultPace').innerText = `Pace: ${formattedTime} per km`;
    } else {
        const paceMinutes = Math.floor(paceInSecondsPerKm / 60);
        const paceSeconds = (paceInSecondsPerKm % 60).toFixed(2);

        let resultText = `Pace: ${paceMinutes} min ${paceSeconds} sec per km`;
        if (distanceUnit === 'miles') {
            const paceInSecondsPerMile = paceInSecondsPerKm / 1.60934;
            const paceMinutesMile = Math.floor(paceInSecondsPerMile / 60);
            const paceSecondsMile = (paceInSecondsPerMile % 60).toFixed(2);
            resultText = `Pace: ${paceMinutesMile} min ${paceSecondsMile} sec per mile`;
        }

        document.getElementById('resultPace').innerText = resultText;
    }
}

function calculateTime() {
    const distance = parseFloat(document.getElementById('distanceTime').value);
    const distanceUnit = document.getElementById('distanceUnitTime').value;
    const paceStr = document.getElementById('paceTime').value;
    const paceUnit = document.getElementById('paceUnitTime').value;
    const paceInSecondsPerKm = convertPaceToSeconds(paceStr, paceUnit);

    let distanceInKm = distance;

    if (distanceUnit === 'miles') {
        distanceInKm *= 1.60934;
    } else if (distanceUnit === 'meters') {
        distanceInKm /= 1000;
    } else if (distanceUnit === 'yards') {
        distanceInKm *= 0.0009144;
    }

    const timeInSeconds = paceInSecondsPerKm * distanceInKm;
    const formattedTime = formatTime(timeInSeconds);

    document.getElementById('resultTime').innerText = `Time: ${formattedTime}`;
}

function calculateDistance() {
    const timeStr = document.getElementById('timeDistance').value;
    const paceStr = document.getElementById('paceDistance').value;
    const paceUnit = document.getElementById('paceUnitDistance').value;
    const paceInSecondsPerKm = convertPaceToSeconds(paceStr, paceUnit);

    const timeInSeconds = parseTime(timeStr);
    const distanceInKm = timeInSeconds / paceInSecondsPerKm;

    document.getElementById('resultDistance').innerText = `Distance: ${distanceInKm.toFixed(2)} km`;
}

function clear_fun() {
    document.getElementById('timePace').value = '';
    document.getElementById('distancePace').value = '';
    document.getElementById('distanceUnitPace').value = '';
    document.getElementById('resultPace').innerText = '';

    document.getElementById('distanceTime').value = '';
    document.getElementById('distanceUnitTime').value = '';
    document.getElementById('paceTime').value = '';
    document.getElementById('resultTime').innerText = '';

    document.getElementById('timeDistance').value = '';
    document.getElementById('paceDistance').value = '';
    document.getElementById('paceUnitDistance').value = '';
    document.getElementById('resultDistance').innerText = '';
}
