// Final Exam Grade Calculator — standalone, no external dependencies
// Formula: required = (target - current*(100-weight)/100) / (weight/100)

function calculate() {
    const current = parseFloat(document.getElementById('current').value);
    const target = parseFloat(document.getElementById('target').value);
    const weight = parseFloat(document.getElementById('weight').value);

    const resultDiv = document.getElementById('result');
    const explainDiv = document.getElementById('explain');
    resultDiv.innerHTML = '';
    explainDiv.innerHTML = '';

    if (isNaN(current) || isNaN(target) || isNaN(weight)) {
        resultDiv.innerHTML = '<span class="error">Please fill in all three fields.</span>';
        return;
    }
    if (current < 0 || current > 100 || target < 0 || target > 100 || weight < 1 || weight > 100) {
        resultDiv.innerHTML = '<span class="error">Grades must be between 0 and 100; weight must be between 1 and 100.</span>';
        return;
    }

    const currentWeight = 100 - weight;
    const needed = (target - (current * currentWeight) / 100) / (weight / 100);

    let msg, cls;
    if (needed <= 0) {
        msg = 'You already have enough to reach ' + target + '% — enjoy the final! 🎉';
        cls = 'good';
    } else if (needed > 100) {
        msg = 'The target of ' + target + '% is out of reach: you would need ' + needed.toFixed(1) + '% on the final.';
        cls = 'bad';
    } else {
        msg = 'You need <strong>' + needed.toFixed(1) + '%</strong> on the final exam.';
        cls = 'good';
    }
    resultDiv.innerHTML = '<span class="' + cls + '">' + msg + '</span>';

    if (needed >= 0 && needed <= 100) {
        explainDiv.innerHTML =
            'Check: ' + current + '% × ' + currentWeight + '% of course + ' +
            needed.toFixed(1) + '% × ' + weight + '% of course = ' +
            ((current * currentWeight) / 100 + (needed * weight) / 100).toFixed(1) + '%';
    }
}
