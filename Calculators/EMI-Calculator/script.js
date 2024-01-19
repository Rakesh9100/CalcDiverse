function calculateEMI() {
    // Get input values
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value) / 100;
    var years = parseInt(document.getElementById("years").value);
    var months = parseInt(document.getElementById("months").value);

    // Check for blank or faulty inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(years) || isNaN(months)) {
        alert("Please enter valid numeric values for all fields.");
        return;
    }

    // Convert years and months to total months
    var totalMonths = years * 12 + months;

    // Calculate EMI
    var monthlyRate = rate / 12;
    var emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);

    // Display result
    document.getElementById("result").innerHTML = `<span class="red">₹</span> ${emi.toFixed(2)} /- <span class="red">per month</span>`;
}
