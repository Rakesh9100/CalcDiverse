function toggleInputFields() {
    const mode = document.getElementById('mode').value;
    if (mode === 'sip') {
        document.getElementById('monthly-investment-group').style.display = 'block';
        document.getElementById('lumpsum-investment-group').style.display = 'none';
    } else {
        document.getElementById('monthly-investment-group').style.display = 'none';
        document.getElementById('lumpsum-investment-group').style.display = 'block';
    }
}

function calculate() {
    const mode = document.getElementById('mode').value;
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);
    let result = 0;

    if (mode === 'sip') {
        const monthlyAmount = parseFloat(document.getElementById('monthly-amount').value);
        const months = years * 12;
        const monthlyRate = rate / 12;
        result = monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    } else if (mode === 'lumpsum') {
        const amount = parseFloat(document.getElementById('amount').value);
        result = amount * Math.pow(1 + rate, years);
    }

    document.getElementById('result').innerHTML = `<h3>Future Value: ₹${result.toFixed(2)}</h3>`;
}

// Initial setup
toggleInputFields();
