function calculatefunction() {
    let interest = parseFloat(document.getElementById("interest").value);
    let capital = parseInt(document.getElementById("capital").value);
    let date = parseInt(document.getElementById("date").value);
    let type = document.getElementById("type").value;
    let rtn = parseInt(document.getElementById("return_amount").value);

    if (isNaN(interest) == true || isNaN(capital) == true || isNaN(date) == true || isNaN(rtn) == true) {
        document.getElementById("result").innerText = `Enter values in every field`;
    }
    else {
        if (type == 'simple') {
            if (capital * interest / 100 < rtn) {
                let y = date + parseFloat(capital * 100 / (100 * rtn - capital * interest));
                let year = Math.ceil(y);
                document.getElementById("result").innerText = `The Loan would be paid by the year:${year}`;
            }
            else {
                document.getElementById("result").innerText = `The Loan can't be cleared with this amount of return`;
            }
        }
        else {
            let t;
            if (capital * interest / 100 < rtn) {
                for (t = 1; (capital + interest * capital / 100) > rtn; t++) {
                    capital = (capital + interest * capital / 100) - rtn;
                    console.log(`${t}`)
                }
                document.getElementById("result").innerText = `The Loan would be paid by the year:${date + t}`;
            }
            else {
                document.getElementById("result").innerText = `The Loan can't be cleared with this amount of return`;
            }
        }
    }
}