function calculateM() {
    // Get the input values
    var force = parseFloat(document.getElementById("force").value);
    var time = parseFloat(document.getElementById("time").value);

    // Validate input
    if (isNaN(force) || isNaN(time)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Calculate momentum
    var mom = (force * time);

    // Display the result 
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <div class="result-details">
            
            <div>Momentum:   ${mom.toFixed(2)}</div>
           
        </div>
    `;
}