const conversionRates = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0095,
    AUD: 0.018
};

function increment(id) {
    let input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decrement(id) {
    let input = document.getElementById(id);
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

function updateCurrency() {
    calculateTotal(); 
}

function calculateTotal() {
    const currency = document.getElementById("currency").value;

    // Notes
    const notes2000 = parseInt(document.getElementById("notes2000").value) || 0;
    const notes500 = parseInt(document.getElementById("notes500").value) || 0;
    const notes200 = parseInt(document.getElementById("notes200").value) || 0;
    const notes100 = parseInt(document.getElementById("notes100").value) || 0;
    const notes50 = parseInt(document.getElementById("notes50").value) || 0;
    const notes20 = parseInt(document.getElementById("notes20").value) || 0;
    const notes10 = parseInt(document.getElementById("notes10").value) || 0;

    // Coins
    const coins10 = parseInt(document.getElementById("coins10").value) || 0;
    const coins5 = parseInt(document.getElementById("coins5").value) || 0;
    const coins2 = parseInt(document.getElementById("coins2").value) || 0;
    const coins1 = parseInt(document.getElementById("coins1").value) || 0;

    // Total
    
    const totalINR = (notes2000 * 2000) + (notes500 * 500) + (notes200 * 200) +
                     (notes100 * 100) + (notes50 * 50) + (notes20 * 20) +
                     (notes10 * 10) + (coins10 * 10) + (coins5 * 5) +
                     (coins2 * 2) + (coins1 * 1);

    const totalInSelectedCurrency = totalINR * conversionRates[currency];

    let resultText = `Total Amount: ${currency} ${totalInSelectedCurrency.toFixed(2)}`;
    document.getElementById("result").innerText = resultText;
}
