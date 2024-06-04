function calculate() {
    const stream = document.getElementById('stream').value;
    const physics = parseFloat(document.getElementById('physics').value);
    const chemistry = parseFloat(document.getElementById('chemistry').value);
    const maths = parseFloat(document.getElementById('matbio').value);

    let cutOff;

    if (stream === 'Engineering') {
        cutOff = (physics / 2 + chemistry / 2) + maths;
    } else if (stream === 'Medical') {
        cutOff = (physics / 2 + chemistry / 2) + maths;
    }

    document.getElementById('result').innerHTML = `
        ${stream} Cut-off: ${cutOff.toFixed(2)}
    `;
}
