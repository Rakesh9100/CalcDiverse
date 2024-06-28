// Function to calculate Speed

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navItems = document.querySelector('.nav-items');

    burgerMenu.addEventListener('click', function() {
        navItems.classList.toggle('active');
    });
});

document.querySelector('.btn-speed').addEventListener('click', () => {
    const distance = parseFloat(document.querySelector('.distance-for-speed').value);
    const time = parseFloat(document.querySelector('.speed-time').value);
    
    if (isNaN(distance)) {
        alert('Enter a valid number into the Distance input.');
    } else if (isNaN(time)) {
        alert('Enter a valid number into the Time input.');
    } else {
        const speedResult = distance / time;
        document.querySelector('.speed-result').innerHTML = `Speed: ${speedResult} ${document.getElementById('speed-measurement').value}`;
    }
});

// Function to calculate Acceleration
document.querySelector('.btn-acceleration').addEventListener('click', () => {
    const initialV = parseFloat(document.querySelector('.initial-v').value);
    const finalV = parseFloat(document.querySelector('.final-v').value);
    const time = parseFloat(document.querySelector('.acceleration-time').value);
    
    if (isNaN(initialV)) {
        alert('Enter a valid number into the Initial Velocity input.');
    } else if (isNaN(finalV)) {
        alert('Enter a valid number into the Final Velocity input.');
    } else if (isNaN(time)) {
        alert('Enter a valid number into the Time input.');
    } else {
        const accelerationResult = (finalV - initialV) / time;
        document.querySelector('.acceleration-result').innerHTML = `Acceleration: ${accelerationResult} ${document.getElementById('acceleration-measurement').value}`;
    }
});

// Function to calculate Force
document.querySelector('.btn-force').addEventListener('click', () => {
    const mass = parseFloat(document.querySelector('.mass').value);
    const acceleration = parseFloat(document.querySelector('.acceleration-for-force').value);
    
    if (isNaN(mass)) {
        alert('Enter a valid number into the Mass input.');
    } else if (isNaN(acceleration)) {
        alert('Enter a valid number into the Acceleration input.');
    } else {
        const forceResult = mass * acceleration;
        document.querySelector('.force-result').innerHTML = `Force: ${forceResult} N`;
    }
});

// Function to calculate Pressure
document.querySelector('.btn-pressure').addEventListener('click', () => {
    const area = parseFloat(document.querySelector('.area').value);
    const force = parseFloat(document.querySelector('.force-for-pressure').value);
    
    if (isNaN(area)) {
        alert('Enter a valid number into the Area input.');
    } else if (isNaN(force)) {
        alert('Enter a valid number into the Force input.');
    } else {
        const pressureResult = force / area;
        document.querySelector('.pressure-result').innerHTML = `Pressure: ${pressureResult} Pa`;
    }
});

// Function to calculate Work
document.querySelector('.btn-work').addEventListener('click', () => {
    const force = parseFloat(document.querySelector('.force-for-work').value);
    const distance = parseFloat(document.querySelector('.distance-for-work').value);
    
    if (isNaN(force)) {
        alert('Enter a valid number into the Force input.');
    } else if (isNaN(distance)) {
        alert('Enter a valid number into the Distance input.');
    } else {
        const workResult = force * distance;
        document.querySelector('.work-result').innerHTML = `Work: ${workResult} J`;
    }
});

// Function to calculate Kinetic Energy
document.querySelector('.btn-kinetic-energy').addEventListener('click', () => {
    const mass = parseFloat(document.querySelector('.mass-for-kinetic-energy').value);
    const velocity = parseFloat(document.querySelector('.velocity-for-kinetic-energy').value);
    
    if (isNaN(mass)) {
        alert('Enter a valid number into the Mass input.');
    } else if (isNaN(velocity)) {
        alert('Enter a valid number into the Velocity input.');
    } else {
        const kineticEnergyResult = 0.5 * mass * Math.pow(velocity, 2);
        document.querySelector('.kinetic-energy-result').innerHTML = `Kinetic Energy: ${kineticEnergyResult} J`;
    }
});

// Function to calculate Power
document.querySelector('.btn-power').addEventListener('click', () => {
    const energy = parseFloat(document.querySelector('.energy-for-power').value);
    const time = parseFloat(document.querySelector('.time-for-power').value);
    const powerMeasurement = document.getElementById('power-measurement').value;
    
    if (isNaN(energy)) {
        alert('Enter a valid number into the Energy input.');
    } else if (isNaN(time)) {
        alert('Enter a valid number into the Time input.');
    } else {
        let powerResult;
        if (powerMeasurement === "Horsepower") {
            powerResult = energy / time / 745;
        } else {
            powerResult = energy / time;
        }
        document.querySelector('.power-result').innerHTML = `Power: ${powerResult} ${powerMeasurement}`;
    }
});
