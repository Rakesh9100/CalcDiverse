localStorage.clear();

function calculateBSA() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (weight && height) {
        const bsa = Math.sqrt((weight * height) / 3600).toFixed(2);
        const bsaResult = `Body Surface Area (BSA): ${bsa} m²`;

        document.getElementById('result').innerText = bsaResult;

        let tip = '';
        if (bsa < 1.5) {
            tip = 'You have a relatively small body surface area. Make sure to maintain a balanced diet and stay active to keep your body healthy.';
        } else if (bsa >= 1.5 && bsa <= 2.0) {
            tip = 'Your body surface area is within the average range. Continue to follow a healthy lifestyle and regular exercise.';
        } else {
            tip = 'You have a relatively large body surface area. Ensure you stay hydrated and monitor your nutritional intake for optimal health.';
        }

        document.getElementById('tip').innerText = tip;

        // Save results to local storage
        localStorage.setItem('weight', weight);
        localStorage.setItem('height', height);
        localStorage.setItem('bsaResult', bsaResult);
        localStorage.setItem('tip', tip);

        Swal.fire({
            title: 'Results',
            html: `${bsaResult}<br>${tip}`,
            icon: 'info'
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Please enter both weight and height.',
            icon: 'error'
        });
    }
}

function clearFields() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
}

function resetForm() {
    clearFields();
    document.getElementById('result').innerText = '';
    document.getElementById('tip').innerText = '';
    localStorage.clear();
    Swal.fire({
        title: 'Form Reset',
        text: 'The form has been reset.',
        icon: 'success'
    });
}
