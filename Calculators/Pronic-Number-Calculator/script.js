function checkPronicNumber() {
    let number = parseInt(document.getElementById('number').value);

    if (isNaN(number)) {
        alert('Please enter a valid number.');
        return;
    }

    let isPronic = false;
    let explanation = '';

    for (let i = 0; i <= Math.sqrt(number); i++) {
        if (i * (i + 1) === number) {
            isPronic = true;
            explanation = `Explanation: ${number} is the product of ${i} and ${i + 1} (consecutive integers).`;
            break;
        }
    }

    document.getElementById('result').innerText = isPronic
        ? `${number} is a Pronic number.`
        : `${number} is not a Pronic number.`;

    document.getElementById('explanation').innerText = explanation;
}

function findPronicNumbersInRange() {
    let from = parseInt(document.getElementById('from').value);
    let to = parseInt(document.getElementById('to').value);

    if (isNaN(from) || isNaN(to) || from >= to) {
        alert('Please enter valid range values.');
        return;
    }

    let pronicNumbers = [];

    for (let i = from; i <= to; i++) {
        for (let j = 0; j <= Math.sqrt(i); j++) {
            if (j * (j + 1) === i) {
                pronicNumbers.push(i);
                break;
            }
        }
    }

    document.getElementById('rangeResult').innerText = `Pronic numbers in the range ${from} to ${to}: ${pronicNumbers.join(', ')}`;
}

function clearCheckSection() {
    document.getElementById('number').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('explanation').innerText = '';
}

function clearRangeSection() {
    document.getElementById('from').value = '';
    document.getElementById('to').value = '';
    document.getElementById('rangeResult').innerText = '';
}
