function checkPalindrome() {
    var userInput = document.getElementById("input").value;
    var reversedInput = userInput.split('').reverse().join('');
    var isPalindrome = (userInput === reversedInput);
    let resultDiv = document.querySelector('.result');
    let formDiv = document.getElementById('calculatorForm');
    formDiv.style.display = 'none'; 
    resultDiv.style.display = '';

    if (isPalindrome) {
        document.getElementById("result").innerHTML =  ` ${userInput} is a palindrome.`;
    } else {
        document.getElementById("result").innerHTML =` ${userInput} is not a palindrome.`;
    }
}
