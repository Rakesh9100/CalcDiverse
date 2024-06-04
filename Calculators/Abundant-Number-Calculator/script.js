const checkAbundant = () => {
    let num = document.querySelector(".number").value;
    if (!isNaN(num) && num.trim() !== "") {
        num = parseInt(num);

        let sum = 0;
        let txt = document.querySelector(".text");
        let s = document.querySelector(".showHow");
        let divisors = [];
        for (let i = 1; i < num; i++) {
            if (num % i == 0) {
                sum = sum + i;
                divisors.push(i);

            }
        }

        s.textContent = divisors.join('+') + `=${sum}`;
        if (sum > num) {
            s.textContent += ` >  ${num}`
            txt.textContent = "It is an Abundant Number!";
        } else {
            s.textContent += ` <=  ${num}`
            txt.textContent = "Not an Abundant Number!";
        }
    } else {
        alert("Please enter a Number!");
    }

}
