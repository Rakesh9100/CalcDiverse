const INF = null;

document.addEventListener("DOMContentLoaded", () => {
    setMode("addition");
});

function setMode(mode) {
    // Hide all input sections initially
    document.getElementById("point1").style.display = "none";
    document.getElementById("point2").style.display = "none";
    document.getElementById("scalar").style.display = "none";

    // Hide all result sections
    document.getElementById("additionResult").style.display = "none";
    document.getElementById("negationResult").style.display = "none";
    document.getElementById("multiplicationResult").style.display = "none";
    document.getElementById("allPointsResult").style.display = "none";

    // Show relevant inputs based on the mode
    if (mode === "addition") {
        document.getElementById("point1").style.display = "flex";
        document.getElementById("point2").style.display = "flex";
        document.getElementById("additionResult").style.display = "block";
    } else if (mode === "negation") {
        document.getElementById("point1").style.display = "flex";
        document.getElementById("negationResult").style.display = "block";
    } else if (mode === "multiplication") {
        document.getElementById("point1").style.display = "flex";
        document.getElementById("scalar").style.display = "flex";
        document.getElementById("multiplicationResult").style.display = "block";
    } else if (mode === "allPoints") {
        document.getElementById("allPointsResult").style.display = "block";
    }
}

function modInverse(a, p) {
    for (let i = 1; i < p; i++) {
        if ((a * i) % p === 1) {
            return i;
        }
    }
    return null;
}

function pointAddition(p1, p2, a, p) {
    if (p1 === INF) return p2;
    if (p2 === INF) return p1;

    let [x1, y1] = p1;
    let [x2, y2] = p2;

    let s;
    if (x1 === x2 && y1 === y2) {
        s = ((3 * x1 * x1 + a) * modInverse(2 * y1, p)) % p;
    } else {
        s = ((y2 - y1) * modInverse(x2 - x1, p)) % p;
    }

    const x3 = (s * s - x1 - x2) % p;
    const y3 = (s * (x1 - x3) - y1) % p;

    return [(x3 + p) % p, (y3 + p) % p];
}

function pointNegation(point, modulus) {
    const [x, y] = point;
    return [x, (modulus - y) % modulus];
}

function scalarMultiplication(k, point, a, p) {
    let result = INF;
    while (k > 0) {
        if (k % 2 === 1) {
            result = pointAddition(result, point, a, p);
        }
        k = Math.floor(k / 2);
        point = pointAddition(point, point, a, p);
    }
    return result;
}

// Function to generate all points on the elliptic curve
function generateAllPoints(a, b, p) {
    const points = [];
    for (let x = 0; x < p; x++) {
        for (let y = 0; y < p; y++) {
            if ((y * y) % p === (x * x * x + a * x + b) % p) {
                points.push([x, y]);
            }
        }
    }
    return points;
}

function calculate() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const p = parseInt(document.getElementById("p").value);
    const x1 = parseInt(document.getElementById("x1").value);
    const y1 = parseInt(document.getElementById("y1").value);
    const x2 = parseInt(document.getElementById("x2").value);
    const y2 = parseInt(document.getElementById("y2").value);
    const k = parseInt(document.getElementById("k").value);

    const point = [x1, y1];
    const point2 = [x2, y2];

    const additionResult = pointAddition(point, point2, a, p);
    const negationResult = pointNegation(point, p);
    const multiplicationResult = scalarMultiplication(k, point, a, p);

    document.getElementById(
        "additionResult"
    ).textContent = `Point Addition: (${additionResult[0]}, ${additionResult[1]})`;

    document.getElementById(
        "negationResult"
    ).textContent = `Point Negation: (${negationResult[0]}, ${negationResult[1]})`;
    document.getElementById(
        "multiplicationResult"
    ).textContent = `Scalar Multiplication: (${multiplicationResult[0]}, ${multiplicationResult[1]})`;

    // Generate and display all points on the curve
    const allPoints = generateAllPoints(a, b, p);
    const pointsText = allPoints
        .map((point) => `(${point[0]}, ${point[1]})`)
        .join(", ");
    document.getElementById(
        "allPointsResult"
    ).textContent = `All Points on the Curve: ${pointsText}`;
    const mode = document
        .querySelector(".btn.btn-primary")
        .textContent.toLowerCase();
    if (mode.includes("addition")) {
        document.getElementById(
            "additionResult"
        ).innerHTML = `Point Addition: (${x1}, ${y1}) + (${x2}, ${y2}) = [Result Here]`;
    } else if (mode.includes("negation")) {
        document.getElementById(
            "negationResult"
        ).innerHTML = `Point Negation: -(${x1}, ${y1}) = [Result Here]`;
    } else if (mode.includes("multiplication")) {
        document.getElementById(
            "multiplicationResult"
        ).innerHTML = `Scalar Multiplication: ${k} * (${x1}, ${y1}) = [Result Here]`;
    } else if (mode.includes("all points")) {
        document.getElementById(
            "allPointsResult"
        ).innerHTML = `All Points on the Curve: [List of Points]`;
    }
}
