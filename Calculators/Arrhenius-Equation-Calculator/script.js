document.getElementById('btn1').addEventListener('click', function () {
    let v1 = document.getElementById('inp1').value;
    let v2 = document.getElementById('inp2').value;
    let v3 = document.getElementById('inp3').value;
    let x = -1 * (v2) / (8.314 * v3);
    let r1 = Math.pow(2.718281828459045, x);
    r1 = r1 * v1;
    document.getElementById('res1').innerHTML += r1;
    console.log(v1);
    console.log(v2);
    console.log(v3);
    console.log(x);
    console.log(r1);
});

document.getElementById('btn2').addEventListener('click', function () {
    let v4 = document.getElementById('inp4').value;
    let v5 = document.getElementById('inp5').value;
    let v6 = document.getElementById('inp6').value;
    let x = v5 / v4;
    let r2 = Math.log(x);
    r2 = r2 * 8.314 * v6;
    document.getElementById('res2').innerHTML += r2;
    console.log(v1);
    console.log(v2);
    console.log(v3);
    console.log(x);
    console.log(r1);
});

document.getElementById('btnn1').addEventListener('click', function () {
    location.reload();
});

document.getElementById('btnn2').addEventListener('click', function () {
    location.reload();
})
