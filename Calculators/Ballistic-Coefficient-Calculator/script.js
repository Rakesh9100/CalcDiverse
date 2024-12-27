function calculateBallisticDetails() {
    const mass = parseFloat(document.getElementById('mass').value);
    const diameter = parseFloat(document.getElementById('diameter').value);
    const dragCoefficient = parseFloat(document.getElementById('drag-coefficient').value);
    const velocity = parseFloat(document.getElementById('velocity').value);
    const windSpeed = parseFloat(document.getElementById('wind-speed').value);
    const angle = parseFloat(document.getElementById('angle').value);

    if (isNaN(mass) || isNaN(diameter) || isNaN(dragCoefficient) || isNaN(velocity) || isNaN(windSpeed) || isNaN(angle)) {
        alert('Please enter valid numeric values.');
        return;
    }
}