function fac(x) {
    if (x == 0) {
        return 1;
    }
    let res = 1;
    for (let i = 1; i <= x; i++) {
        res = res * i;
    }
    return res;
}

function prob(p, n, i) {
    let n_fac = fac(n);
    console.log(n_fac);
    console.log(Number.MAX_VALUE);
    let i_fac = fac(i);
    let ncr = n_fac / fac(n - i);
    let big_number = ncr / i_fac;
    console.log(big_number);
    let pow1 = Math.pow(p, i);
    let pow2 = Math.pow((1 - p), (n - i));
    let res = big_number * pow1;
    console.log(res);
    res = res * pow2;
    console.log(res);
    console.log(p);
    res = Math.round(res * 100000000) / 100000000;
    return res;
}

function cum_prob(p, n, i) {
    let res = 0;
    for (let j = 1; j <= i; j++) {
        let pblty = prob(p, n, j);
        res = res + pblty;
        //console.log(res);
    }
    res = Math.round(res * 100000000) / 100000000;
    return res;
}
document.getElementById('calculate').addEventListener("click", function () {
    let p = document.getElementById('p').value;
    let n = document.getElementById('n').value;
    let i = document.getElementById('i').value;
    let res1 = prob(p, n, i);
    let res2 = cum_prob(p, n, i);
    document.getElementById("p1").innerHTML += res1;
    document.getElementById("p2").innerHTML += res2;
});
document.getElementById('clear').addEventListener("click", function () {
    location.reload();
});
