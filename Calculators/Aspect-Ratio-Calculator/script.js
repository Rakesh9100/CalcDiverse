function calculateAspectRatio() {
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;

    if (width && height && width > 0 && height > 0) {
        const gcd = findGCD(width, height);
        const aspectRatio = `${width / gcd}:${height / gcd}`;
        document.getElementById('aspectRatio').innerHTML = `Your Aspect Ratio is : ${aspectRatio}`;
    } else {
        document.getElementById('aspectRatio').innerHTML = 'Enter valid width and height.';
    }
}

function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b);
}

function toggleMode() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    updateToggleButton();
}

function updateToggleButton() {
    const button = document.getElementById('toggleMode');
    if (document.body.classList.contains('light-mode')) {
        button.textContent = 'Switch to Dark Mode';
    } else {
        button.textContent = 'Switch to Light Mode';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const preferredMode = localStorage.getItem('preferredMode');
    if (preferredMode) {
        document.body.classList.add(preferredMode);
    } else {
        document.body.classList.add('dark-mode');
    }
    updateToggleButton();
});

window.addEventListener('beforeunload', () => {
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('preferredMode', 'light-mode');
    } else {
        localStorage.setItem('preferredMode', 'dark-mode');
    }
});
