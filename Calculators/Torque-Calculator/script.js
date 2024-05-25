function showMethod() {
    const method = document.getElementById('method').value;
    const methods = document.querySelectorAll('.method');
    methods.forEach(m => m.style.display = 'none');
    document.getElementById(method).style.display = 'block';
}

function calculateTorque() {
    const method = document.getElementById('method').value;

    let torque = 0;

    if (method === 'force-radius') {
        const force = parseFloat(document.getElementById('force').value);
        const forceUnit = document.getElementById('force-unit').value;
        const radius = parseFloat(document.getElementById('radius').value);
        const radiusUnit = document.getElementById('radius-unit').value;

        const forceConversion = {
            'N': 1,
            'lbf': 4.44822,
            'kN': 1000,
            'kgf': 9.80665
        };

        const radiusConversion = {
            'm': 1,
            'cm': 0.01,
            'mm': 0.001,
            'ft': 0.3048,
            'in': 0.0254
        };

        const forceInN = force * forceConversion[forceUnit];
        const radiusInM = radius * radiusConversion[radiusUnit];

        torque = forceInN * radiusInM;
    }

    if (method === 'power-angular-velocity') {
        const power = parseFloat(document.getElementById('power').value);
        const powerUnit = document.getElementById('power-unit').value;
        const angularVelocity = parseFloat(document.getElementById('angular-velocity').value);
        const angularVelocityUnit = document.getElementById('angular-velocity-unit').value;

        const powerConversion = {
            'W': 1,
            'kW': 1000,
            'hp': 745.7
        };

        const angularVelocityConversion = {
            'rad/s': 1,
            'rpm': 2 * Math.PI / 60
        };

        const powerInW = power * powerConversion[powerUnit];
        const angularVelocityInRadS = angularVelocity * angularVelocityConversion[angularVelocityUnit];

        torque = powerInW / angularVelocityInRadS;
    }

    if (method === 'moment-angular-acceleration') {
        const moment = parseFloat(document.getElementById('moment').value);
        const angularAcceleration = parseFloat(document.getElementById('angular-acceleration').value);

        torque = moment * angularAcceleration;
    }

    document.getElementById('torque-result').textContent = torque.toFixed(2);
}


