const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");

function graphEquation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const equationInput = document.getElementById("equation").value;
    const parsedEquation = equationInput.replace(/ /g, "").split("=");

    try {
        const yFunc =
            parsedEquation[0] === "y" ?
            new Function("x", `return ${parsedEquation[1]};`) :
            null;
        const xyFunc =
            parsedEquation[1] === "0" ?
            new Function("x", "y", `return ${parsedEquation[0]};`) :
            null;

        ctx.beginPath();
        ctx.strokeStyle = "#007BFF";
        ctx.lineWidth = 2;

        if (yFunc) {
            for (let x = -canvas.width / 20; x <= canvas.width / 20; x += 0.1) {
                const y = yFunc(x);
                const pixelX = x * 20 + canvas.width / 2;
                const pixelY = canvas.height - (y * 20 + canvas.height / 2);

                if (x === -canvas.width / 20) {
                    ctx.moveTo(pixelX, pixelY);
                } else {
                    ctx.lineTo(pixelX, pixelY);
                }
            }
        } else if (xyFunc) {
            for (let x = -canvas.width / 20; x <= canvas.width / 20; x += 0.1) {
                for (let y = -canvas.height / 20; y <= canvas.height / 20; y += 0.1) {
                    if (Math.abs(xyFunc(x, y)) < 0.1) {
                        const pixelX = x * 20 + canvas.width / 2;
                        const pixelY = canvas.height - (y * 20 + canvas.height / 2);
                        ctx.fillRect(pixelX, pixelY, 1, 1);
                    }
                }
            }
        }

        ctx.stroke();
    } catch (error) {
        alert("Invalid equation. Please enter a valid mathematical expression.");
    }
}
