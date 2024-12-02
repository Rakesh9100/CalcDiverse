document.getElementById('annulusForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const outerRadius = parseFloat(document.getElementById('outerRadius').value);
    const innerRadius = parseFloat(document.getElementById('innerRadius').value);

    if (isNaN(outerRadius) || isNaN(innerRadius) || outerRadius <= 0 || innerRadius <= 0 || outerRadius <= innerRadius) {
        alert('Please enter valid radii. The outer radius must be greater than the inner radius.');
        return;
    }

    // Calculate the area of the annulus
    const area = Math.PI * (Math.pow(outerRadius, 2) - Math.pow(innerRadius, 2));
    document.getElementById('result').innerText = `Area of the Annulus: ${area.toFixed(2)} square units`;

    // Show the diagram and animate the circles
    const diagram = document.getElementById('diagram');
    const outerCircle = document.getElementById('outer-circle');
    const innerCircle = document.getElementById('inner-circle');

    diagram.style.display = 'block'; // Show diagram
    diagram.classList.add('fade-in');

    // Set the dimensions of the circles
    outerCircle.style.width = `${outerRadius * 40}px`; // Multiply by 40 for better scaling
    outerCircle.style.height = `${outerRadius * 40}px`;
    innerCircle.style.width = `${innerRadius * 40}px`;
    innerCircle.style.height = `${innerRadius * 40}px`;
});
