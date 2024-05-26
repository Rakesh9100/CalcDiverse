function showDimensions() {
    const shape = document.getElementById('shape').value;
    document.getElementById('length-row').style.display = 'none';
    document.getElementById('width-row').style.display = 'none';
    document.getElementById('height-row').style.display = 'none';
    document.getElementById('radius-row').style.display = 'none';
    document.getElementById('slant-height-row').style.display = 'none';
    document.getElementById('base-length-row').style.display = 'none';
    document.getElementById('base-width-row').style.display = 'none';
    document.getElementById('minor-radius-row').style.display = 'none';

    switch (shape) {
        case 'cube':
            document.getElementById('length-row').style.display = 'block';
            break;
        case 'cuboid':
            document.getElementById('length-row').style.display = 'block';
            document.getElementById('width-row').style.display = 'block';
            document.getElementById('height-row').style.display = 'block';
            break;
        case 'cone':
            document.getElementById('radius-row').style.display = 'block';
            document.getElementById('slant-height-row').style.display = 'block';
            break;
        case 'cylinder':
            document.getElementById('radius-row').style.display = 'block';
            document.getElementById('height-row').style.display = 'block';
            break;
        case 'sphere':
            document.getElementById('radius-row').style.display = 'block';
            break;
        case 'triangularPrism':
            document.getElementById('base-length-row').style.display = 'block';
            document.getElementById('height-row').style.display = 'block';
            document.getElementById('length-row').style.display = 'block';
            break;
        case 'rectangularPrism':
            document.getElementById('length-row').style.display = 'block';
            document.getElementById('width-row').style.display = 'block';
            document.getElementById('height-row').style.display = 'block';
            break;
        case 'torus':
            document.getElementById('radius-row').style.display = 'block';
            document.getElementById('minor-radius-row').style.display = 'block';
            break;
        default:
            break;
    }
}

function calculate(event) {
    event.preventDefault();
    const shape = document.getElementById('shape').value;
    let result;

    function validateInputs(...inputs) {
        for (const input of inputs) {
            if (input < 0) {
                document.getElementById('result').textContent = "Lengths can't be negative Dude!!!";
                return false;
            }
        }
        return true;
    }

    switch (shape) {
        case 'cube':
            const length = parseFloat(document.getElementById('length').value);
            if (!validateInputs(length)) return;
            result = 6 * length * length;
            break;
        case 'cuboid':
            const l = parseFloat(document.getElementById('length').value);
            const w = parseFloat(document.getElementById('width').value);
            const h = parseFloat(document.getElementById('height').value);
            if (!validateInputs(l, w, h)) return;
            result = 2 * (l * w + l * h + w * h);
            break;
        case 'cone':
            const rCone = parseFloat(document.getElementById('radius').value);
            const slantHeight = parseFloat(document.getElementById('slant-height').value);
            if (!validateInputs(rCone, slantHeight)) return;
            result = Math.PI * rCone * (rCone + slantHeight);
            break;
        case 'cylinder':
            const rCylinder = parseFloat(document.getElementById('radius').value);
            const hCylinder = parseFloat(document.getElementById('height').value);
            if (!validateInputs(rCylinder, hCylinder)) return;
            result = 2 * Math.PI * rCylinder * (rCylinder + hCylinder);
            break;
        case 'sphere':
            const rSphere = parseFloat(document.getElementById('radius').value);
            if (!validateInputs(rSphere)) return;
            result = 4 * Math.PI * Math.pow(rSphere, 2);
            break;
        case 'triangularPrism':
            const bLength = parseFloat(document.getElementById('base-length').value);
            const height = parseFloat(document.getElementById('height').value);
            const lengthPrism = parseFloat(document.getElementById('length').value);
            if (!validateInputs(bLength, height, lengthPrism)) return;
            const baseArea = 0.5 * bLength * height;
            const perimeter = 3 * bLength;
            result = 2 * baseArea + perimeter * lengthPrism;
            break;
        case 'rectangularPrism':
            const lRect = parseFloat(document.getElementById('length').value);
            const wRect = parseFloat(document.getElementById('width').value);
            const hRect = parseFloat(document.getElementById('height').value);
            if (!validateInputs(lRect, wRect, hRect)) return;
            result = 2 * (lRect * wRect + lRect * hRect + wRect * hRect);
            break;
        case 'torus':
            const rMajor = parseFloat(document.getElementById('radius').value);
            const rMinor = parseFloat(document.getElementById('minor-radius').value);
            if (!validateInputs(rMajor, rMinor)) return;
            result = 4 * Math.PI * Math.PI * rMajor * rMinor;
            break;
        default:
            result = 'Please select a shape and provide valid inputs';
    }

    document.getElementById('result').textContent = `Surface Area: ${result.toFixed(2)}`;
}
