const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');

function graphEquation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const equationInput = document.getElementById('equation').value;

    try {
        const func = new Function('x', `return ${equationInput};`);

        ctx.beginPath();
        ctx.strokeStyle = '#007BFF';
        ctx.lineWidth = 2;

        for (let x = -canvas.width / 2; x <= canvas.width / 2; x += 0.1) {
            const y = func(x);
            const pixelX = x * 10 + canvas.width / 2;
            const pixelY = canvas.height - (y * 10 + canvas.height / 2);

            if (pixelX === 0) {
                ctx.moveTo(pixelX, pixelY);
            } else {
                ctx.lineTo(pixelX, pixelY);
            }
        }

        ctx.stroke();
    } catch (error) {
        alert('Invalid equation. Please enter a valid mathematical expression.');
    }
}
