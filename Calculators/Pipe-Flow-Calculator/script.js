function updateForm() {
    const solveFor = document.querySelector('input[name="solveFor"]:checked').value;
    const inputFields = document.getElementById('inputFields');
    let fieldsHTML = "";

    if (solveFor === 'flowRate') {
        fieldsHTML += `
            <div class="input-group">
                <label for="velocity">Velocity (V) in m/s:</label>
                <input type="number" id="velocity" step="any">
            </div>
            <div class="input-group">
                <label for="diameter">Diameter (D) in m:</label>
                <input type="number" id="diameter" step="any">
            </div>
        `;
    } else if (solveFor === 'velocity') {
        fieldsHTML += `
            <div class="input-group">
                <label for="flowRate">Flow Rate (Q) in m³/s:</label>
                <input type="number" id="flowRate" step="any">
            </div>
            <div class="input-group">
                <label for="diameter">Diameter (D) in m:</label>
                <input type="number" id="diameter" step="any">
            </div>
        `;
    } else if (solveFor === 'diameter') {
        fieldsHTML += `
            <div class="input-group">
                <label for="flowRate">Flow Rate (Q) in m³/s:</label>
                <input type="number" id="flowRate" step="any">
            </div>
            <div class="input-group">
                <label for="velocity">Velocity (V) in m/s:</label>
                <input type="number" id="velocity" step="any">
            </div>
        `;
    }

    inputFields.innerHTML = fieldsHTML;
}

function calculatePipeFlow() {
    const solveFor = document.querySelector('input[name="solveFor"]:checked').value;
    const flowRate = parseFloat(document.getElementById('flowRate') ? document.getElementById('flowRate').value : NaN);
    const velocity = parseFloat(document.getElementById('velocity') ? document.getElementById('velocity').value : NaN);
    const diameter = parseFloat(document.getElementById('diameter') ? document.getElementById('diameter').value : NaN);
    let resultsText = "";

    if (solveFor === 'flowRate' && !isNaN(velocity) && !isNaN(diameter)) {
        // Calculate Flow Rate
        const calculatedFlowRate = (velocity * Math.PI * Math.pow(diameter, 2)) / 4;
        resultsText = `Flow Rate (Q): ${calculatedFlowRate.toFixed(4)} m³/s`;
    } else if (solveFor === 'velocity' && !isNaN(flowRate) && !isNaN(diameter)) {
        // Calculate Velocity
        const calculatedVelocity = (4 * flowRate) / (Math.PI * Math.pow(diameter, 2));
        resultsText = `Velocity (V): ${calculatedVelocity.toFixed(4)} m/s`;
    } else if (solveFor === 'diameter' && !isNaN(flowRate) && !isNaN(velocity)) {
        // Calculate Diameter
        const calculatedDiameter = Math.sqrt((4 * flowRate) / (Math.PI * velocity));
        resultsText = `Diameter (D): ${calculatedDiameter.toFixed(4)} m`;
    } else {
        resultsText = "Please provide the required values.";
    }

    document.getElementById('results').innerText = resultsText;
}
