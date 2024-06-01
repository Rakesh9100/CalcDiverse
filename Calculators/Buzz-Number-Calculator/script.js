const checkBuzz = () => {
    let num = document.querySelector("input").value;
    let txt = document.querySelector(".msg");
    let h = document.querySelector("h3");
    if (!isNaN(num) && num.trim() !== "") {
        num = parseInt(num);
        if (num % 7 === 0 || num % 10 === 7) {
            // alert("buzz");
            h.textContent = `${num} is a BUZZ NUMBER!`;

            txt.textContent = `PROOF:${num}%7=${num%7} i.e divisible by 7 OR ${num}%10=${num%10} i.e. last digit is 7`;

        } else {
            h.textContent = `${num} is a NOT BUZZ NUMBER!`;
            txt.textContent = `PROOF:${num}%7=${num%7} i.e not divisible by 7 OR ${num}%10=${num%10} i.e. last digit is not 7`;
        }
    } else
        alert("enter the number");
}
