function calculateGST() {
    // Get the input values
    var amount = parseFloat(document.getElementById("amount").value);
    var taxRate = parseFloat(document.getElementById("taxRate").value);

    // Validate input
    if (isNaN(amount) || isNaN(taxRate)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Conversion rates (for demonstration purposes)
    var inrToUsdRate = 0.014; // 1 INR to USD
    var gstToUsdRate = 0.74; // 1 GST unit (currency) to USD

    // Calculate GST in INR
    var gstAmountInr = (amount * taxRate) / 100;
    var finalPriceInr = amount + gstAmountInr;

    // Convert GST and final price to USD
    var gstAmountUsd = gstAmountInr * gstToUsdRate;
    var finalPriceUsd = finalPriceInr * inrToUsdRate;

    // Display the result details
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <div class="result-details">
            <div><strong>Original Amount (INR):</strong> ₹${amount.toFixed(2)}</div>
            <div><strong>Tax Rate:</strong> ${taxRate}%</div>
            <div><strong>GST Amount (INR):</strong> ₹${gstAmountInr.toFixed(2)}</div>
            <div><strong>Final Price (INR):</strong> ₹${finalPriceInr.toFixed(2)}</div>
            <br>
            <div><strong>GST Amount (USD):</strong> $${gstAmountUsd.toFixed(2)}</div>
            <div><strong>Final Price (USD):</strong> $${finalPriceUsd.toFixed(2)}</div>
        </div>
    `;
}
