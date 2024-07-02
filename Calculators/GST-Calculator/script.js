function calculateGST() {
    var amount = parseFloat(document.getElementById("amount").value);
    var quantity = parseInt(document.getElementById("quantity").value);
    var taxRate = parseFloat(document.getElementById("taxRate").value);
    var operation = document.getElementById("operation").value;

    if (isNaN(amount) || isNaN(taxRate) || isNaN(quantity) || quantity <= 0) {
        alert("Please enter valid numbers.");
        return;
    }

    var totalAmount = amount * quantity;
    var gstAmountInr;
    var finalPriceInr;

    if (operation === "add") {
        gstAmountInr = (totalAmount * taxRate) / 100;
        finalPriceInr = totalAmount + gstAmountInr;
    } else {
        gstAmountInr = totalAmount - (totalAmount * 100) / (100 + taxRate);
        finalPriceInr = totalAmount - gstAmountInr;
    }

    var inrToUsdRate = 0.014; // 1 INR to USD
    var gstToUsdRate = 0.74; // 1 GST unit (currency) to USD

    var gstAmountUsd = gstAmountInr * gstToUsdRate;
    var finalPriceUsd = finalPriceInr * inrToUsdRate;

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <div class="ult-details">
            <div><strong>Original Amount (INR):</strong> ₹${amount.toFixed(2)}</div>
            <div><strong>Quantity:</strong> ${quantity}</div>
            <div><strong>Total Amount (INR):</strong> ₹${totalAmount.toFixed(2)}</div>
            <div><strong>Tax Rate:</strong> ${taxRate}%</div>
            <div><strong>GST Amount (INR):</strong> ₹${gstAmountInr.toFixed(2)}</div>
            <div><strong>Final Price (INR):</strong> ₹${finalPriceInr.toFixed(2)}</div>
            <br>
            <div><strong>GST Amount (USD):</strong> $${gstAmountUsd.toFixed(2)}</div>
            <div><strong>Final Price (USD):</strong> $${finalPriceUsd.toFixed(2)}</div>
        </div>
    `;
}
