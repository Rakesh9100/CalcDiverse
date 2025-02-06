
function updateLimitsDisplay() {
    const type = document.getElementById("integration-type").value;
    const container = document.getElementById("limits-container");
    container.innerHTML = '';

    const variables = type === 'single' ? ['x'] : 
                    type === 'double' ? ['x', 'y'] : 
                    ['x', 'y', 'z'];

    variables.forEach(variable => {
        const group = document.createElement('div');
        group.className = 'limit-group';
        group.innerHTML = `
            <div style="flex: 1;">
                <label>Lower ${variable}:</label>
                <input type="number" id="lower_${variable}" step="any">
            </div>
            <div style="flex: 1;">
                <label>Upper ${variable}:</label>
                <input type="number" id="upper_${variable}" step="any">
            </div>
        `;
        container.appendChild(group);
    });
}

function evaluateFunction(func, variables) {
    try {
        // Safety check for the function
        if (func.includes('document') || func.includes('window') || func.includes('eval')) {
            throw new Error('Invalid function');
        }
        return new Function(...Object.keys(variables), `return ${func}`)(...Object.values(variables));
    } catch (error) {
        throw new Error('Invalid function expression');
    }
}

function trapezoidalRule(func, a, b, n = 1000) {
    const h = (b - a) / n;
    let sum = (evaluateFunction(func, {x: a}) + evaluateFunction(func, {x: b})) / 2;
    
    for (let i = 1; i < n; i++) {
        const x = a + i * h;
        sum += evaluateFunction(func, {x});
    }
    return sum * h;
}

function doubleIntegral(func, ax, bx, ay, by, n = 50) {
    const hx = (bx - ax) / n;
    const hy = (by - ay) / n;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const x = ax + (i + 0.5) * hx;  // Use midpoint method
            const y = ay + (j + 0.5) * hy;
            sum += evaluateFunction(func, {x, y});
        }
    }
    return sum * hx * hy;
}

function tripleIntegral(func, ax, bx, ay, by, az, bz, n = 20) {
    const hx = (bx - ax) / n;
    const hy = (by - ay) / n;
    const hz = (bz - az) / n;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                const x = ax + (i + 0.5) * hx;  // Use midpoint method
                const y = ay + (j + 0.5) * hy;
                const z = az + (k + 0.5) * hz;
                sum += evaluateFunction(func, {x, y, z});
            }
        }
    }
    return sum * hx * hy * hz;
}

function getLimits(variable) {
    const lower = parseFloat(document.getElementById(`lower_${variable}`).value);
    const upper = parseFloat(document.getElementById(`upper_${variable}`).value);
    if (isNaN(lower) || isNaN(upper)) {
        throw new Error(`Please enter valid limits for ${variable}`);
    }
    return [lower, upper];
}

function calculateIntegral() {
    try {
        const type = document.getElementById("integration-type").value;
        const func = document.getElementById("function").value;

        if (!func) {
            throw new Error("Please enter a function");
        }

        let result;
        if (type === "single") {
            const [a, b] = getLimits('x');
            result = trapezoidalRule(func, a, b);
        } else if (type === "double") {
            const [ax, bx] = getLimits('x');
            const [ay, by] = getLimits('y');
            result = doubleIntegral(func, ax, bx, ay, by);
        } else if (type === "triple") {
            const [ax, bx] = getLimits('x');
            const [ay, by] = getLimits('y');
            const [az, bz] = getLimits('z');
            result = tripleIntegral(func, ax, bx, ay, by, az, bz);
        }

        document.getElementById("result").innerText = result.toFixed(6);
    } catch (error) {
        document.getElementById("result").innerHTML = `<span style="color: #e74c3c">Error: ${error.message}</span>`;
    }
}

// Initialize the limits display
updateLimitsDisplay();
