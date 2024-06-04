function checkKaprekar() {
    const number = document.getElementById('number').value;
    const resultElement = document.getElementById('result');
    
    if (number === '') {
        resultElement.textContent = 'Please enter a number.';
        return;
    }
    
    const num = parseInt(number, 10);
    const square = num * num;
    const squareStr = square.toString();
    const len = squareStr.length;
    
    for (let i = 1; i < len; i++) {
        const leftPart = parseInt(squareStr.substring(0, i), 10);
        const rightPart = parseInt(squareStr.substring(i), 10);
        
        if (leftPart + rightPart === num && rightPart !== 0) {
            resultElement.textContent = `${num} is a Kaprekar number. ${square} can be split into ${leftPart} and ${rightPart} and their sum is ${num}.`;
            return;
        }
    }
    
    resultElement.textContent = `${num} is not a Kaprekar number.`;
}
