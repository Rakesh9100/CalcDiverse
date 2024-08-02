document.getElementById("catenaryForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const span = parseFloat(document.getElementById("span").value);
    const sag = parseFloat(document.getElementById("sag").value);
    let a = parseFloat(document.getElementById("parameterA").value);
    const numPoints = parseInt(document.getElementById("numPoints").value);

    if (isNaN(a)) {
        a = (span / 2) / Math.cosh((sag / 2));
    }

    const points = calculateCatenaryPoints(span, a, numPoints);
    drawCatenary(points);
    document.getElementById("catenaryCanvas").style.display = 'block';
});

function calculateCatenaryPoints(span, a, numPoints) {
    const points = [];
    const step = span / (numPoints - 1);
    for (let i = 0; i < numPoints; i++) {
        const x = -span / 2 + i * step;
        const y = a * Math.cosh(x / a);
        points.push({
            x,
            y
        });
    }
    return points;
}

function drawCatenary(points) {
    const canvas = document.getElementById("catenaryCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    const xScale = canvas.width / (points[points.length - 1].x - points[0].x);
    const yScale = canvas.height / Math.max(...points.map(p => p.y));

    points.forEach((point, index) => {
        const x = (point.x - points[0].x) * xScale;
        const y = canvas.height - point.y * yScale;

        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });

    ctx.strokeStyle = "#007bff";
    ctx.lineWidth = 2;
    ctx.stroke();
}
