function calculateAspectRatio() {
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;

    if (width && height && width > 0 && height > 0) {
        const gcd = findGCD(width, height);
        const aspectRatio = `${width / gcd}:${height / gcd}`;
        document.getElementById('aspectRatio').innerHTML = `Aspect Ratio: ${aspectRatio}`;
    } else {
        document.getElementById('aspectRatio').innerHTML = 'Enter valid width and height.';
    }
}

function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b);
}
