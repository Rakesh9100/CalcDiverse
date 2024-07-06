function toggleCalculationInputs() {
    const calculationType = document.getElementById('calculationType').value;
    const centripetalAccelerationInputs = document.getElementById('centripetalAccelerationInputs');
    const angularFrequencyInputs = document.getElementById('angularFrequencyInputs');
    const periodInputs = document.getElementById('periodInputs');
    const frequencyInputs = document.getElementById('frequencyInputs');

    centripetalAccelerationInputs.style.display = 'none';
    angularFrequencyInputs.style.display = 'none';
    periodInputs.style.display = 'none';
    frequencyInputs.style.display = 'none';

    if (calculationType === 'centripetalAcceleration') {
        centripetalAccelerationInputs.style.display = 'block';
    } else if (calculationType === 'angularFrequency') {
        angularFrequencyInputs.style.display = 'block';
    } else if (calculationType === 'period') {
        periodInputs.style.display = 'block';
    } else if (calculationType === 'frequency') {
        frequencyInputs.style.display = 'block';
    }
}

function calculate() {
    const calculationType = document.getElementById('calculationType').value;
    let result = '';

    if (calculationType === 'centripetalAcceleration') {
        const velocity = parseFloat(document.getElementById('velocityInput').value);
        const radius = parseFloat(document.getElementById('radiusInput').value);
        if (isNaN(velocity) || isNaN(radius)) {
            result = 'Please enter valid numbers for velocity and radius.';
        } else {
            const centripetalAcceleration = (velocity * velocity) / radius;
            result = `Centripetal Acceleration: ${centripetalAcceleration.toFixed(2)} m/s²`;
        }
    } else if (calculationType === 'angularFrequency') {
        const velocity = parseFloat(document.getElementById('velocityAngularInput').value);
        const radius = parseFloat(document.getElementById('radiusAngularInput').value);
        if (isNaN(velocity) || isNaN(radius)) {
            result = 'Please enter valid numbers for velocity and radius.';
        } else {
            const angularFrequency = velocity / radius;
            result = `Angular Frequency: ${angularFrequency.toFixed(2)} rad/s`;
        }
    } else if (calculationType === 'period') {
        const velocity = parseFloat(document.getElementById('velocityPeriodInput').value);
        const radius = parseFloat(document.getElementById('radiusPeriodInput').value);
        if (isNaN(velocity) || isNaN(radius)) {
            result = 'Please enter valid numbers for velocity and radius.';
        } else {
            const period = (2 * Math.PI * radius) / velocity;
            result = `Period: ${period.toFixed(2)} s`;
        }
    } else if (calculationType === 'frequency') {
        const velocity = parseFloat(document.getElementById('velocityFrequencyInput').value);
        const radius = parseFloat(document.getElementById('radiusFrequencyInput').value);
        if (isNaN(velocity) || isNaN(radius)) {
            result = 'Please enter valid numbers for velocity and radius.';
        } else {
            const frequency = velocity / (2 * Math.PI * radius);
            result = `Frequency: ${frequency.toFixed(2)} Hz`;
        }
    }

    document.getElementById('result').innerHTML = result;
}

function resetCalculator() {
    document.getElementById('velocityInput').value = '';
    document.getElementById('radiusInput').value = '';
    document.getElementById('velocityAngularInput').value = '';
    document.getElementById('radiusAngularInput').value = '';
    document.getElementById('velocityPeriodInput').value = '';
    document.getElementById('radiusPeriodInput').value = '';
    document.getElementById('velocityFrequencyInput').value = '';
    document.getElementById('radiusFrequencyInput').value = '';
    document.getElementById('result').innerHTML = '';
}

function clearResult() {
    document.getElementById('result').innerHTML = '';
}
