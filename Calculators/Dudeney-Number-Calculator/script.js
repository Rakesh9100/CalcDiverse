const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;

function isDudeneyNumber(num) {
    // Find the cube root of the number
    const cubeRoot = Math.cbrt(num);

    // Check if the cube root is an integer
    if (!Number.isInteger(cubeRoot)) {
        return false;
    }

    // Sum the digits of the number
    const sumOfDigits = num
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, digit) => acc + digit, 0);

    // Check if the sum of digits equals the cube root
    return sumOfDigits === cubeRoot;
}

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(!isDudeneyNumber(filterInput)) {
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a Dudeney Number!`;
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a Dudeney Number!`;
});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});