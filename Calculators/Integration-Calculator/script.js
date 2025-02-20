
// Tab switching functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Original integration calculator functions
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
            <div>
                <label>Lower ${variable}:</label>
                <input type="number" id="lower_${variable}" step="any">
            </div>
            <div>
                <label>Upper ${variable}:</label>
                <input type="number" id="upper_${variable}" step="any">
            </div>
        `;
        container.appendChild(group);
    });
}

// Initialize the limits display
updateLimitsDisplay();

// Keep the original calculation functions
function evaluateFunction(func, variables) {
    try {
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
            const x = ax + (i + 0.5) * hx;
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
                const x = ax + (i + 0.5) * hx;
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

function calculateSeries() {
    const type = document.getElementById('series-type').value;
    const terms = parseInt(document.getElementById('series-terms').value);
    const firstTerm = parseFloat(document.getElementById('series-first').value);
    const ratio = parseFloat(document.getElementById('series-ratio').value);
    
    try {
        let sum = 0;
        let currentTerm = firstTerm;
        let series = [];

        if (type === 'arithmetic') {
            // Arithmetic series: an = a1 + (n-1)d
            for (let i = 0; i < terms; i++) {
                sum += currentTerm;
                series.push(currentTerm);
                currentTerm += ratio; // Add common difference
            }
        } else {
            // Geometric series: an = a1 * r^(n-1)
            for (let i = 0; i < terms; i++) {
                sum += currentTerm;
                series.push(currentTerm);
                currentTerm *= ratio; // Multiply by common ratio
            }
        }

        // Display results
        const seriesResult = document.getElementById('series-result');
        seriesResult.innerHTML = `
            <div>Series: ${series.join(', ')}</div>
            <div>Sum: ${sum.toFixed(4)}</div>
        `;
    } catch (error) {
        document.getElementById('series-result').innerHTML = 
            `<span style="color: #e74c3c">Error: ${error.message}</span>`;
    }
}

// Add keyboard shortcuts and event listeners
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'Enter') {
        // Ctrl+Enter triggers calculation based on active tab
        const activeTab = document.querySelector('.tab.active').dataset.tab;
        switch(activeTab) {
            case 'integration':
                calculateIntegral();
                break;
            case 'differentiation':
                calculateDerivative();
                break;
            case 'series':
                calculateSeries();
                break;
        }
    }
});

// Add input validation
function validateNumericInput(input) {
    input.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9.-]/g, '');
    });
}

// Apply validation to all numeric inputs
document.querySelectorAll('input[type="number"]').forEach(validateNumericInput);

// Add loading states to buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.innerText;
        this.innerText = 'Calculating...';
        this.disabled = true;

        // Re-enable button after calculation
        setTimeout(() => {
            this.innerText = originalText;
            this.disabled = false;
        }, 1000);
    });
});

// Add responsive design adjustments
function adjustLayoutForScreenSize() {
    const container = document.querySelector('.container');
    if (window.innerWidth < 768) {
        container.style.margin = '0';
        container.style.borderRadius = '0';
        document.body.style.padding = '0';
    } else {
        container.style.margin = '0 auto';
        container.style.borderRadius = '20px';
        document.body.style.padding = '2rem';
    }
}

// Call on load and resize
window.addEventListener('load', adjustLayoutForScreenSize);
window.addEventListener('resize', adjustLayoutForScreenSize);

// Add tooltip functionality
function createTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    
    element.addEventListener('mouseenter', () => {
        document.body.appendChild(tooltip);
        const rect = element.getBoundingClientRect();
        tooltip.style.top = `${rect.bottom + 5}px`;
        tooltip.style.left = `${rect.left}px`;
    });

    element.addEventListener('mouseleave', () => {
        if (tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
        }
    });
}

// Add tooltips to function inputs
createTooltip(
    document.getElementById('function'),
    'Enter mathematical expressions using JavaScript syntax'
);

// Add error handling for invalid functions
function validateFunction(func) {
    const dangerousTerms = ['document', 'window', 'eval', 'setTimeout', 'setInterval'];
    return !dangerousTerms.some(term => func.includes(term));
}

// Add local storage for recent calculations
function saveToHistory(type, input, result) {
    const history = JSON.parse(localStorage.getItem('calculatorHistory') || '[]');
    history.unshift({
        type,
        input,
        result,
        timestamp: new Date().toISOString()
    });
    
    // Keep only last 10 calculations
    if (history.length > 10) {
        history.pop();
    }
    
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
}

// Initialize tooltips and other UI enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add some example functions to help users
    const examples = {
        integration: ['Math.sin(x)', 'x * x', 'Math.exp(x)'],
        differentiation: ['x * x', 'Math.sin(x)', 'Math.exp(x)'],
        series: ['2', '3', '5']
    };

    // Add example function dropdown
    const functionInputs = document.querySelectorAll('input[type="text"]');
    functionInputs.forEach(input => {
        const datalist = document.createElement('datalist');
        datalist.id = input.id + '-examples';
        examples[input.closest('.tab-content').id]?.forEach(example => {
            const option = document.createElement('option');
            option.value = example;
            datalist.appendChild(option);
        });
        input.setAttribute('list', datalist.id);
        document.body.appendChild(datalist);
    });
});