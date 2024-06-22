document.getElementById('calculate').addEventListener('click', function(event) {
    event.preventDefault();
    
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const n = parseInt(document.getElementById('n').value);

    if (!a || !b || !n) {
        alert("Please fill all the fields a, b and n!")
        return
    }
    
    let result = `(${a} + ${b}x)<sup>${n}</sup> = `;
    for (let k = 0; k <= n; k++) {
        const coeff = binomialCoefficient(n, k);
        const item = coeff * Math.pow(a, n-k) * Math.pow(b, k);
        const full_item = k===0 ? item : k===1 ? item + `x` : item + `x<sup>${k}</sup>`;

        result = k == 0 && item > 0 ? result + `${full_item}` : item > 0 ? result + ` +${full_item}` : result + ` ${full_item}`
    }
    
    document.getElementById('result').innerHTML = result;
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