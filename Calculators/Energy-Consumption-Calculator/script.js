let applianceCount = 2;

function addAppliance() {
    applianceCount++;
    const container = document.getElementById('applianceContainer');

    const applianceRow = document.createElement('div');
    applianceRow.className = 'appliance-row';

    const applianceLabel = document.createElement('label');
    applianceLabel.setAttribute('for', `appliance${applianceCount}`);
    applianceLabel.innerText = `Appliance ${applianceCount}:`;
    applianceRow.appendChild(applianceLabel);

    const applianceInput = document.createElement('input');
    applianceInput.type = 'text';
    applianceInput.id = `appliance${applianceCount}`;
    applianceInput.placeholder = `e.g. Appliance ${applianceCount}`;
    applianceRow.appendChild(applianceInput);

    const powerLabel = document.createElement('label');
    powerLabel.setAttribute('for', `power${applianceCount}`);
    powerLabel.innerText = 'Power (W):';
    applianceRow.appendChild(powerLabel);

    const powerInput = document.createElement('input');
    powerInput.type = 'number';
    powerInput.id = `power${applianceCount}`;
    powerInput.placeholder = 'e.g. 100';
    applianceRow.appendChild(powerInput);

    const hoursLabel = document.createElement('label');
    hoursLabel.setAttribute('for', `hours${applianceCount}`);
    hoursLabel.innerText = 'Hours/day:';
    applianceRow.appendChild(hoursLabel);

    const hoursInput = document.createElement('input');
    hoursInput.type = 'number';
    hoursInput.id = `hours${applianceCount}`;
    hoursInput.placeholder = 'e.g. 24';
    applianceRow.appendChild(hoursInput);

    container.appendChild(applianceRow);
}

function calculateEnergy() {
    let totalEnergy = 0;

    for (let i = 1; i <= applianceCount; i++) {
        const power = document.getElementById(`power${i}`).value;
        const hours = document.getElementById(`hours${i}`).value;

        if (power && hours) {
            totalEnergy += (power * hours * 365) / 1000; // kWh per year
        }
    }

    document.getElementById('result').innerHTML = `Total Energy Consumption: ${totalEnergy.toFixed(2)} kWh per year`;
}

function resetForm() {
    applianceCount = 2;
    const container = document.getElementById('applianceContainer');
    container.innerHTML = `
        <div class="appliance-row">
            <label for="appliance1">Appliance 1:</label>
            <input type="text" id="appliance1" placeholder="e.g. Refrigerator">
            <label for="power1">Power (W):</label>
            <input type="number" id="power1" placeholder="e.g. 100">
            <label for="hours1">Hours/day:</label>
            <input type="number" id="hours1" placeholder="e.g. 24">
        </div>
        <div class="appliance-row">
            <label for="appliance2">Appliance 2:</label>
            <input type="text" id="appliance2" placeholder="e.g. TV">
            <label for="power2">Power (W):</label>
            <input type="number" id="power2" placeholder="e.g. 150">
            <label for="hours2">Hours/day:</label>
            <input type="number" id="hours2" placeholder="e.g. 4">
        </div>
    `;
    document.getElementById('result').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.add-button').addEventListener('click', addAppliance);
    document.querySelector('.calculate-button').addEventListener('click', calculateEnergy);
    document.querySelector('.reset-button').addEventListener('click', resetForm);
});
