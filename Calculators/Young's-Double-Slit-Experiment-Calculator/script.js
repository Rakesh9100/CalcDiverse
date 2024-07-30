function calculate() {
    const d = parseFloat(document.getElementById('d').value);
    const lambda = parseFloat(document.getElementById('lambda').value);
    const L = parseFloat(document.getElementById('L').value);
    const m = parseInt(document.getElementById('m').value);

    if (isNaN(d) || isNaN(lambda) || isNaN(L) || isNaN(m)) {
        alert('Please enter valid numbers');
        return;
    }

    const y_bright = (m * lambda * L) / d;
    const y_dark = ((m + 0.5) * lambda * L) / d;
    const fringe_spacing = (lambda * L) / d;

    document.getElementById('bright-fringe').textContent = `Position of Bright Fringe (y_m): ${y_bright.toFixed(5)} meters`;
    document.getElementById('dark-fringe').textContent = `Position of Dark Fringe (y_m): ${y_dark.toFixed(5)} meters`;
    document.getElementById('fringe-spacing').textContent = `Fringe Spacing (Δy): ${fringe_spacing.toFixed(5)} meters`;
}
