const checkFascinating = () => {
    let n = document.querySelector(".number").value;
    let txt = document.querySelector(".text");
    let s = document.querySelector(".showHow");
    if (n === "" || Number.isNaN(n) || n < 100 || n > 999) {
        txt.textContent = ("Please enter a valid number between 100 and 999");
        s.textContent = ``
    }
    else {
        let n2 = 2 * n;
        let n3 = 3 * n;
        let newnum = '' + n + '' + n2 + '' + n3;
        let result = newnum;
        if (result.length > 9) {
            txt.textContent = "${n} is not a Fascinating Number!";
            s.textContent = ``
        }
        else {
            result = result.split('').sort((a, b) => a - b).join('');
            let flag = 0;
            for (let i = 1; i <= 9; i++) {
                if (result[i - 1] != i) {
                    flag = 1;
                    txt.textContent = `${n} is not a Fascinating Number!`;
                    s.textContent = `PROOF: n = ${n},  2*n = ${2 * n}, 3*n = ${3 * n}  and after concatenating  n , 2*n , 3*n we get : ${newnum} which does not contain all the digit from 1 to 9`;

                    break;
                }
            }
            if (flag == 0) {
                txt.textContent = `${n} is a Fascinating Number!`;
                s.textContent = `PROOF: n = ${n}, 2 * n = ${2 * n}, 3 * n = ${3 * n}  and after concatenating  n, 2*n, 3*n we get : ${newnum} which contain all the digit from 1 to 9`;

            }
        }
    }

}
