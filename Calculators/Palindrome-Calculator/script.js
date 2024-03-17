function checkPalindrome() {
    var userInput = document.getElementById("input").value;
    var reversedInput = userInput.split('').reverse().join('');
    var isPalindrome = (userInput === reversedInput);

    if (isPalindrome) {
        document.getElementById("result").innerText = userInput + " is a palindrome.";
    } else {
        document.getElementById("result").innerText = userInput + " is not a palindrome.";
    }
}
