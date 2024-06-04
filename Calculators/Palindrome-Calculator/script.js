function checkPalindrome() {
    var userInput = document.getElementById("input").value;
    var reversedInput = userInput.split('').reverse().join('');
    var isPalindrome = (userInput === reversedInput);
    var resultElement = document.getElementById("result");

    if (isPalindrome) {
        document.getElementById("result").innerHTML = `<span class="red"></span> ${userInput} <span class="red">is a palindrome.</span>`;
    }
    else {
        document.getElementById("result").innerHTML =`<span class="red"></span> ${userInput} <span class="red">is not a palindrome.</span>`;
    }
}
