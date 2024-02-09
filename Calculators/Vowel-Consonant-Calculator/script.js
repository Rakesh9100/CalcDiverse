let count = document.querySelector("#countButton");
let reset = document.querySelector("#reset-btn");
let input = document.querySelector("#input");

count.addEventListener("click", function () {
    let inputText = document.getElementById("inputText").value.toLowerCase();
    let vowels = 0;
    let consonants = 0;
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (/[aeiou]/.test(char)) {
            vowels++;
        } else if (/[a-z]/.test(char)) {
            consonants++;
        }
    }
    var result = "Vowels: " + vowels + "<br>Consonants: " + consonants;
    document.getElementById("result").innerHTML = result;
});

reset.addEventListener("click", () => {
    document.getElementById("inputText").value = "";
    document.getElementById("result").innerHTML = "";

})
