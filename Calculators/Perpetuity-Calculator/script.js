document.getElementById("calculateBtn").addEventListener("click", () => {
    const cashFlow = parseFloat(document.getElementById("cashFlow").value);
    const discountRate = parseFloat(document.getElementById("discountRate").value);

    if (isNaN(cashFlow) || cashFlow <= 0) {
        alert("Please enter a valid annual cash flow (greater than 0).");
        return;
    }

    if (isNaN(discountRate) || discountRate <= 0 || discountRate >= 100) {
        alert("Please enter a valid discount rate (greater than 0 and less than 100).");
        return;
    }

    const rateDecimal = discountRate / 100;
    const presentValue = cashFlow / rateDecimal;

    document.getElementById("presentValue").textContent = `Present Value (PV): ${presentValue.toFixed(2)}`;
});

document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("cashFlow").value = "";
    document.getElementById("discountRate").value = "";
    document.getElementById("presentValue").textContent = "Present Value (PV): --";
});