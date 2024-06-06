function handleOptionChange() {
    const option = document.getElementById('option-select').value;
    document.getElementById('single-number-section').style.display = option === "single" ? 'block' : 'none';
    document.getElementById('range-section').style.display = option === "range" ? 'block' : 'none';
}

function calculateDigitSum(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function isMagicNumber(num) {
    let steps = [];
    while (num >= 10) {
        let currentNum = num;
        let digitSum = calculateDigitSum(num);
        steps.push(`${currentNum} → ${currentNum.toString().split('').join(' + ')} = ${digitSum}`);
        num = digitSum;
    }
    if(num>10)
    steps.push(`${num}`);
    return { isMagic: num === 1, steps: steps };
}

function checkMagicNumber() {
    const num = document.getElementById('number').value;
    const resultDiv = document.getElementById('result');
    const stepsDiv = document.getElementById('steps');
    if (num === "") {
        resultDiv.textContent = "Please enter a number.";
        stepsDiv.textContent = "";
        return;
    }
    const { isMagic, steps } = isMagicNumber(parseInt(num));
    resultDiv.textContent = isMagic ? `${num} is a Magic Number!` : `${num} is not a Magic Number.`;
    stepsDiv.innerHTML = `Steps: <br>${steps.join(' <br>')} <br> The recursive sum ${isMagic ? 'adds' : "doesn't add"} to 1. <br> So, the number ${isMagic ? 'is' : "is not "} a magic number`;

}

function findMagicNumbersInRange() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const rangeResultDiv = document.getElementById('range-result');
    if (isNaN(start) || isNaN(end) || start > end) {
        rangeResultDiv.textContent = "Please enter a valid range.";
        return;
    }

    let magicNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isMagicNumber(i).isMagic) {
            magicNumbers.push(i);
        }
    }
    
    rangeResultDiv.textContent = magicNumbers.length > 0 ?
        `Magic Numbers in range ${start} to ${end}: ${magicNumbers.join(", ")}` :
        `No Magic Numbers found in the range ${start} to ${end}.`;
}
