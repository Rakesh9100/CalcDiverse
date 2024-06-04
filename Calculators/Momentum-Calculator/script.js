function calculateM() {
    // Get the input values
    var mass = parseFloat(document.getElementById("mass").value);
    var velocity = parseFloat(document.getElementById("velocity").value);

    // Validate input
    if (isNaN(mass) || isNaN(velocity)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Calculate momentum
    var mom = (mass * velocity);

    // Display the result 
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <div class="result-details">
            
            <div>Momentum:   ${mom.toFixed(2)}</div>
           
        </div>
    `;
}
