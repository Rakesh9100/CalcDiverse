document.getElementById('workForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const force = parseFloat(document.getElementById('force').value);
    const displacement = parseFloat(document.getElementById('displacement').value);
    const angle = parseFloat(document.getElementById('angle').value);
    const unit = document.getElementById('unit').value; //retrieving unit value
    
    let errorMessage = '';

    if (isNaN(force) || isNaN(displacement) || isNaN(angle)) {
        errorMessage = 'Please enter valid numbers for force, displacement, and angle.';
    } else if (force <= 0) {
        errorMessage = 'Force must be a positive number.';
    } else if (displacement <= 0) {
        errorMessage = 'Displacement must be a positive number.';
    } else if (angle < 0 || angle > 360) {
        errorMessage = 'Angle must be between 0 and 360 degrees.';
    }

    if (errorMessage) {
        document.getElementById('result').innerText = errorMessage;
        document.getElementById('result').style.color = 'red';
    } else {
        const radians = angle * (Math.PI / 180);
        let work = force * displacement * Math.cos(radians); //modified for unit conversion

        //conversion logic
        const conversionFactor = {
            ElectronVolt: 6.242e+18,
            Calorie: 0.239005736,
            KiloCalorie: 0.000239005736,
            'Foot-pound': 0.737562149,
            'KiloWatt-Hour': 2.77778e-7

        };

        if (unit!== 'Joule'){
            work*= conversionFactor[unit];
        }
        document.getElementById('result').innerText = `Work Done: ${work.toFixed(2)} ${unit === 'Joule' ? 'J': unit}`;
        document.getElementById('result').style.color = 'green';
    }
}); 

