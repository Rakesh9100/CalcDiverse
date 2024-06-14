document.getElementById('automorphic-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = parseInt(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (isNaN(number)) {
        resultDiv.innerHTML = '<p>Please enter a valid number.</p>';
        return;
    }

    const square = number * number;
    const numberStr = number.toString();
    const squareStr = square.toString();

    if (squareStr.endsWith(numberStr)) {
        resultDiv.innerHTML = `<p>${number} is an Automorphic number because ${number}^2 = ${square}.</p>`;
    } else {
        resultDiv.innerHTML = `<p>${number} is not an Automorphic number because ${number}^2 = ${square}.</p>`;
    }
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('number').value = '';
    document.getElementById('result').innerHTML = '';
});

document.getElementById('reload-button').addEventListener('click', function() {
    location.reload();
});

document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('result').innerHTML = '';
});
