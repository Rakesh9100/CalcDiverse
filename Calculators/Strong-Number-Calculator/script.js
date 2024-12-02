document.getElementById('myform').addEventListener('submit', function (event) {
    event.preventDefault();
    check();
});

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function check() {
    const num = document.getElementById('no').value;
    if (num === "" || num.includes('.') || num < 0) {
        alert("Please enter a valid whole number.");
        return;
    }

    const numValue = parseInt(num, 10);
    let sum = 0;
    let temp = numValue;

    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }

    if (sum === numValue) {
        document.getElementById("strongNumbers").innerHTML = `Yes, ${numValue} is a strong number .
    <br/> Explanation: Sum of the factorial of the digits of ${numValue} equals ${numValue} itself`;
    } else {
        document.getElementById("strongNumbers").innerHTML = `No, ${numValue} is not a strong number. <br/> 
    Explanation: sum of the factorial of ${numValue} is not equals ${numValue} itself`;
    }
}
