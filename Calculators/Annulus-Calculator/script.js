document.getElementById('annulusForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const outerRadius = parseFloat(document.getElementById('outerRadius').value);
    const innerRadius = parseFloat(document.getElementById('innerRadius').value);

    if (isNaN(outerRadius) || isNaN(innerRadius) || outerRadius <= 0 || innerRadius <= 0 || outerRadius <= innerRadius) {
        alert('Please enter valid radii. The outer radius must be greater than the inner radius.');
        return;
    }

    const area = Math.PI * (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2));
    document.getElementById('result').innerText = `Area of the Annulus: ${area.toFixed(2)} square units`;
});
