function calculateMobility() {
    var velocity = parseFloat(document.getElementById('velocity').value);
    var electricField = parseFloat(document.getElementById('electricField').value);

    if (isNaN(velocity) || isNaN(electricField)) {
        alert('Please enter valid numbers for velocity and electric field');
        return;
    }

    var mobility = velocity/electricField;

    document.getElementById('result').innerHTML = 'Mobility: ' + mobility.toFixed(2) + ' m2/V.s';
}
