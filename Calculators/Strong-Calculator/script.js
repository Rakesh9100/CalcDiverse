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
    const num = parseInt(document.forms.myform.numOfDigits.value, 10);
    console.log(num);
    let sum = 0;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }
    if(sum===num)
    document.getElementById("strongNumbers").innerHTML=`Yes,${num} is a strong number`;
    else
    document.getElementById("strongNumbers").innerHTML=`No,${num} is not a strong number`;
}