function calculate() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    const slope = ((y2 - y1) / (x2 - x1)).toFixed(3);

    const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)).toFixed(3);

    document.getElementById('slope').innerText = `Slope: ${slope}`;
    document.getElementById('distance').innerText = `Distance: ${distance}`;
}
