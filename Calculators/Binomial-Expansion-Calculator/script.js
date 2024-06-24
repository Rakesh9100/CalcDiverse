document.getElementById('calculate').addEventListener('click', function(event) {
    event.preventDefault();
    
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const n = parseInt(document.getElementById('n').value);

    if (isNaN(a) || isNaN(b) || isNaN(n)) {
        alert("Please fill all the fields a, b and n!")
        return
    }
    if (n < 0) {
        alert("Enter a positive value for n!")
        return
    }
    
    let answer = ""
    for (let k = 0; k <= n; k++) {
        
        const coeff = binomialCoefficient(n, k);

        let item = coeff * Math.pow(a, n-k) * Math.pow(b, k);

        if (!Number.isInteger(item)) item = item.toFixed(2)
        if (item === 0) continue
        else if (item < 0) item = ` - ${-1 * item}`;
        else item = ` + ${item}`;

        const full_item = k===0 ? item : k===1 ? item + `x` : item + `x<sup>${k}</sup>`;

        answer = answer +  full_item
    }

    if (answer === "") answer = "0"
    document.getElementById('result').innerHTML = `(${a} + ${b}x)<sup>${n}</sup> = ` + answer;
});

function binomialCoefficient(n, k) {
    let res = 1;
    if (k > n - k) k = n - k;
    for (let i = 0; i < k; ++i) {
        res *= (n - i);
        res /= (i + 1);
    }
    return res;
}

document.getElementById('clear').addEventListener('click', function(event) {
    event.preventDefault();
    
    document.getElementById('a').value = ""
    document.getElementById('b').value = ""
    document.getElementById('n').value = ""
    
    document.getElementById('result').innerHTML = ``;
});
