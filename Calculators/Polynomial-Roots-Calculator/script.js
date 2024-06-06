// Function to show/hide coefficient inputs based on selected degree
function showCoefficientInputs() {
    const degree = parseInt(document.getElementById('degree').value);
    document.getElementById('d-group').style.display = degree >= 3 ? 'block' : 'none';
    document.getElementById('e-group').style.display = degree >= 4 ? 'block' : 'none';
}

// Function to evaluate polynomial at a given value of x
function evaluatePolynomial() {
    const degree = parseInt(document.getElementById('degree').value);
    const a = parseFloat(document.getElementById('a').value) || 0;
    const b = parseFloat(document.getElementById('b').value) || 0;
    const c = parseFloat(document.getElementById('c').value) || 0;
    const d = degree >= 3 ? (parseFloat(document.getElementById('d').value) || 0) : 0;
    const e = degree >= 4 ? (parseFloat(document.getElementById('e').value) || 0) : 0;
    const x = parseFloat(document.getElementById('xValue').value);

    if (isNaN(x)) {
        alert('Please enter a valid number for the value of x.');
        return;
    }

    let result = a * Math.pow(x, degree) + b * Math.pow(x, degree - 1) + c * Math.pow(x, degree - 2);
    if (degree >= 3) result += d * Math.pow(x, degree - 3);
    if (degree >= 4) result += e * Math.pow(x, degree - 4);

    document.getElementById('result').value = result.toFixed(4);
}

// Function to find roots of polynomial
function findRoots() {
    const degree = parseInt(document.getElementById('degree').value);
    const a = parseFloat(document.getElementById('a').value) || 0;
    const b = parseFloat(document.getElementById('b').value) || 0;
    const c = parseFloat(document.getElementById('c').value) || 0;
    const d = degree >= 3 ? (parseFloat(document.getElementById('d').value) || 0) : 0;
    const e = degree >= 4 ? (parseFloat(document.getElementById('e').value) || 0) : 0;

    let roots = [];

    if (degree === 2) {
        roots = solveQuadratic(a, b, c);
    } else if (degree === 3) {
        roots = solveCubic(a, b, c, d);
    } else if (degree === 4) {
        roots = solveQuartic(a, b, c, d, e);
    }

    document.getElementById('roots').value = roots.length > 0 ? roots.join(', ') : 'No real roots';
}

// Function to solve quadratic equation
function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1.toFixed(4), root2.toFixed(4)];
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root.toFixed(4)];
    } else {
        const realPart = (-b / (2 * a)).toFixed(4);
        const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(4);
        return [`${realPart} + ${imaginaryPart}i`, `${realPart} - ${imaginaryPart}i`];
    }
}

// Function to solve cubic equation (Cardano's method for simplicity)
function solveCubic(a, b, c, d) {
    // Normalized coefficients
    b /= a;
    c /= a;
    d /= a;

    const p = (3 * c - b * b) / 3;
    const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

    let roots = [];
    if (discriminant > 0) {
        const u = Math.cbrt(-q / 2 + Math.sqrt(discriminant));
        const v = Math.cbrt(-q / 2 - Math.sqrt(discriminant));
        roots.push((u + v - b / 3).toFixed(4));
    } else if (discriminant === 0) {
        const u = Math.cbrt(-q / 2);
        roots.push((2 * u - b / 3).toFixed(4));
        roots.push((-u - b / 3).toFixed(4));
    } else {
        const r = Math.sqrt(Math.pow(-p / 3, 3));
        const phi = Math.acos(-q / (2 * r));
        for (let k = 0; k < 3; k++) {
            const root = 2 * Math.cbrt(r) * Math.cos((phi + 2 * k * Math.PI) / 3) - b / 3;
            roots.push(root.toFixed(4));
        }
    }
    return roots;
}

// Function to solve quartic equation (Ferrari's method for simplicity)
function solveQuartic(a, b, c, d, e) {
    // Normalized coefficients
    b /= a;
    c /= a;
    d /= a;
    e /= a;

    // Substitutions and solving steps (simplified)
    const p = c - (3 * b * b) / 8;
    const q = b * b * b / 8 - b * c / 2 + d;
    const r = -3 * b * b * b * b / 256 + b * b * c / 16 - b * d / 4 + e;

    const cubicRoots = solveCubic(1, p / 2, (p * p - 4 * r) / 16, -q * q / 64);
    const z = cubicRoots[0]; // One real root

    const u = Math.sqrt(z * z - 4 * r);
    const v = Math.sqrt(2 * z - p);

    const root1 = (-b / 4 + (u + v) / 2).toFixed(4);
    const root2 = (-b / 4 + (u - v) / 2).toFixed(4);
    const root3 = (-b / 4 - (u + v) / 2).toFixed(4);
    const root4 = (-b / 4 - (u - v) / 2).toFixed(4);

    return [root1, root2, root3, root4];
}
