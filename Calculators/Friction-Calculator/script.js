document.getElementById('friction-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let normalForce = parseFloat(document.getElementById('normal-force').value);
    let coefficient = parseFloat(document.getElementById('coefficient').value);
    let frictionForce = normalForce * coefficient;
    
    document.getElementById('friction-force').textContent = frictionForce.toFixed(2);
});