function findArmstrongNumbers() {
    const n = parseInt(document.forms.myform.numOfDigits.value);
    const myElement = document.getElementById("armstrongNumbers");

    let startRange = Math.pow(10, n - 1);
    let endRange = Math.pow(10, n);

    let armstrongNumbers = [];

    // Optimize the range based on the number of digits
    const maxSum = 9 ** n * n;
    for (let num = startRange; num <= endRange; num++) {
        if (isArmstrongOptimized(num, n, maxSum)) {
            armstrongNumbers.push(num);
        }
    }

    myElement.textContent = "Armstrong Numbers: " + armstrongNumbers.join(", ");
}

function isArmstrongOptimized(num, power, maxSum) {
    let temp = num;
    let sumOfPowers = 0;

    while (temp > 0 && sumOfPowers <= maxSum) {
        let digit = temp % 10;
        sumOfPowers += Math.pow(digit, power);
        temp = Math.floor(temp / 10);
    }

    return sumOfPowers === num;
}
