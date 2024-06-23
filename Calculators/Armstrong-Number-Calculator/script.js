// Function to find Armstrong numbers based on user input
function findArmstrongNumbers() {
    const numOfDigits = document.forms.myform.numOfDigits.value;

    // Validate user input
    if (numOfDigits === "" || Number.isNaN(numOfDigits) || numOfDigits < 1 || numOfDigits > 7) {
        alert("Please enter a valid number between 1 and 7");
    } else {
        const n = parseInt(numOfDigits);
        const myElement = document.getElementById("armstrongNumbers");
        const chunkSize = 1000;

        let startRange = Math.pow(10, n - 1);
        let endRange = Math.pow(10, n);

        let armstrongNumbers = [];

        // Process the range in smaller chunks to improve responsiveness
        for (let chunkStart = startRange; chunkStart <= endRange; chunkStart += chunkSize) {
            let chunkEnd = Math.min(chunkStart + chunkSize, endRange);

            // Check for Armstrong numbers in the current chunk
            for (let num = chunkStart; num < chunkEnd; num++) {
                if (isArmstrongOptimized(num, n)) {
                    armstrongNumbers.push(num);
                }
            }
        }

        myElement.textContent = "Armstrong Numbers: " + armstrongNumbers.join(", ");
    }
}

// Function to check if a number is an Armstrong number 
function isArmstrongOptimized(num, power) {
    let temp = num;
    let sumOfPowers = 0;

    // Compute the sum of digits raised to the power    
    while (temp > 0) {
        let digit = temp % 10;
        sumOfPowers += Math.pow(digit, power);
        temp = Math.floor(temp / 10);
    }
    const additionalContent = document.getElementById('additionalContent');
    additionalContent.innerText = 'Explanation: A number that is equal to the sum of cubes of its digits.';
   
    // Check whether sum of powers equals the original number or not
    return sumOfPowers === num;
}
