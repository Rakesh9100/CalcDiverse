document.getElementById('energyType').addEventListener('change', function () {
    let energyType = document.getElementById('energyType').value;
    if (energyType === 'kinetic') {
        document.getElementById('kineticEnergyInputs').style.display = 'block';
        document.getElementById('potentialEnergyInputs').style.display = 'none';
    } else {
        document.getElementById('kineticEnergyInputs').style.display = 'none';
        document.getElementById('potentialEnergyInputs').style.display = 'block';
    }
});

function calculateEnergy() {
    let energyType = document.getElementById('energyType').value;
    let result = document.getElementById('result');

    if (energyType === 'kinetic') {
        let mass = parseFloat(document.getElementById('massKEInput').value);
        let velocity = parseFloat(document.getElementById('velocityInput').value);
        if (isNaN(mass) || isNaN(velocity)) {
            result.innerHTML = "Please enter valid numbers for mass and velocity.";
        } else {
            let kineticEnergy = 0.5 * mass * velocity * velocity;
            result.innerHTML = `Kinetic Energy: ${kineticEnergy} Joules`;
        }
    } else if (energyType === 'potential') {
        let mass = parseFloat(document.getElementById('massPEInput').value);
        let height = parseFloat(document.getElementById('heightInput').value);
        let g = 9.81; // Acceleration due to gravity in m/s^2
        if (isNaN(mass) || isNaN(height)) {
            result.innerHTML = "Please enter valid numbers for mass and height.";
        } else {
            let potentialEnergy = mass * g * height;
            result.innerHTML = `Potential Energy: ${potentialEnergy} Joules`;
        }
    }
}
