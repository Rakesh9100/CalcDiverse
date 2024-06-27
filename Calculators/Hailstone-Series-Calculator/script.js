function generateSeries() {
    const startValue = parseInt(document.getElementById('startValue').value);
    const numTerms = parseInt(document.getElementById('numTerms').value);
    let current = startValue;
    let series = [current];

    for (let i = 1; i < numTerms; i++) {
        if (current % 2 === 0) {
            current = current / 2;
        } else {
            current = 3 * current + 1;
        }
        series.push(current);
    }

    document.getElementById('output').innerText = series.join(' ');
}
