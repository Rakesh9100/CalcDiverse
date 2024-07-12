document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('fractal-canvas');
    const ctx = canvas.getContext('2d');
    const generateBtn = document.getElementById('generate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const fractalTypeSelect = document.getElementById('fractal-type');
    const parameter1Input = document.getElementById('parameter1');
    const parameter2Input = document.getElementById('parameter2');
    const resolutionInput = document.getElementById('resolution');
    const colorPaletteSelect = document.getElementById('color-palette');

    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    generateBtn.addEventListener('click', generateFractal);
    resetBtn.addEventListener('click', resetFractal);

    function generateFractal() {
        const fractalType = fractalTypeSelect.value;
        const parameter1 = parseFloat(parameter1Input.value);
        const parameter2 = parseFloat(parameter2Input.value);
        const resolution = parseInt(resolutionInput.value);
        const colorPalette = colorPaletteSelect.value;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (fractalType === 'mandelbrot') {
            generateMandelbrot(parameter1, parameter2, resolution, colorPalette);
        } else if (fractalType === 'julia') {
            generateJulia(parameter1, parameter2, resolution, colorPalette);
        }

        canvas.style.display = 'block';
        resetBtn.style.display = 'block';
        window.scrollTo(0, document.body.scrollHeight);
    }

    function resetFractal() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = 'none';
        resetBtn.style.display = 'none';
        fractalTypeSelect.value = 'mandelbrot';
        parameter1Input.value = 0.355;
        parameter2Input.value = 0.355;
        resolutionInput.value = 500;
        colorPaletteSelect.value = 'default';
    }

    function generateMandelbrot(p1, p2, res, palette) {
        const maxIter = 1000;
        const escapeRadius = 2;
        const zoom = 1;
        const panX = 0.5;
        const panY = 0;

        for (let x = 0; x < canvas.width; x++) {
            for (let y = 0; y < canvas.height; y++) {
                let zx = (x / res - panX) / zoom;
                let zy = (y / res - panY) / zoom;
                let i = maxIter;

                while (zx * zx + zy * zy < escapeRadius * escapeRadius && i > 0) {
                    let tmp = zx * zx - zy * zy + p1;
                    zy = 2.0 * zx * zy + p2;
                    zx = tmp;
                    i--;
                }

                const color = getColor(i, maxIter, palette);
                ctx.fillStyle = color;
                ctx.fillRect(x, y, 1, 1);
            }
        }
    }

    function generateJulia(p1, p2, res, palette) {
        const maxIter = 1000;
        const escapeRadius = 2;
        const zoom = 1;
        const panX = 0.5;
        const panY = 0;

        for (let x = 0; x < canvas.width; x++) {
            for (let y = 0; y < canvas.height; y++) {
                let zx = (x / res - panX) / zoom;
                let zy = (y / res - panY) / zoom;
                let i = maxIter;

                while (zx * zx + zy * zy < escapeRadius * escapeRadius && i > 0) {
                    let tmp = zx * zx - zy * zy + p1;
                    zy = 2.0 * zx * zy + p2;
                    zx = tmp;
                    i--;
                }

                const color = getColor(i, maxIter, palette);
                ctx.fillStyle = color;
                ctx.fillRect(x, y, 1, 1);
            }
        }
    }

    function getColor(iter, maxIter, palette) {
        if (palette === 'rainbow') {
            const hue = (iter / maxIter) * 360;
            return `hsl(${hue}, 100%, 50%)`;
        } else if (palette === 'grayscale') {
            const value = (iter / maxIter) * 255;
            return `rgb(${value}, ${value}, ${value})`;
        } else {
            const value = (iter / maxIter) * 255;
            return `rgb(${value}, ${0}, ${255 - value})`;
        }
    }
});
