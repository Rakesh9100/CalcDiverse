function calculateManhattanDistance() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        resultDiv.textContent = "Please enter valid coordinates.";
        return;
    }
    
    const distance = Math.abs(x2 - x1) + Math.abs(y2 - y1);
    resultDiv.textContent = `The Manhattan Distance between (${x1}, ${y1}) and (${x2}, ${y2}) is: ${distance}`;
}