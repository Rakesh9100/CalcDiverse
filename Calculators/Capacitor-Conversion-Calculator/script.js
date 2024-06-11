document.getElementById('picofarad').addEventListener('input', function () {
    let pF = parseFloat(this.value);
    document.getElementById('nanofarad').value = pF / 1000;
    document.getElementById('microfarad').value = pF / 1000000;
    document.getElementById('farad').value = pF / 1000000000000;
});

document.getElementById('nanofarad').addEventListener('input', function () {
    let nF = parseFloat(this.value);
    document.getElementById('picofarad').value = nF * 1000;
    document.getElementById('microfarad').value = nF / 1000;
    document.getElementById('farad').value = nF / 1000000;
});

document.getElementById('microfarad').addEventListener('input', function () {
    let uF = parseFloat(this.value);
    document.getElementById('picofarad').value = uF * 1000000;
    document.getElementById('nanofarad').value = uF * 1000;
    document.getElementById('farad').value = uF / 1000;
});

document.getElementById('farad').addEventListener('input', function () {
    let F = parseFloat(this.value);
    document.getElementById('picofarad').value = F * 1000000000000;
    document.getElementById('nanofarad').value = F * 1000000000;
    document.getElementById('microfarad').value = F * 1000000;
});

document.getElementById('code').addEventListener('input', function () {
    let code = parseInt(this.value);
    let chart = {
        100: 10,
        150: 15,
        220: 22,
        330: 33,
        470: 47,
        101: 100,
        121: 120,
        131: 130,
        151: 150,
        181: 180,
        221: 220,
        331: 330,
        471: 470,
        561: 560,
        681: 680,
        102: 1000,
        152: 1500,
        222: 2200,
        332: 3300,
        472: 4700,
        502: 5000,
        562: 5600,
        682: 6800,
        103: 10000,
        153: 15000,
        223: 22000,
        333: 33000,
        473: 47000,
        683: 68000,
        104: 100000,
        154: 150000,
        204: 200000,
        224: 220000,
        334: 330000,
        474: 470000,
        684: 680000,
        105: 1000000,
        155: 1500000,
        225: 2200000,
        335: 3300000,
        000: 0,
        555: 555,
        888: 888,
        999: 999 // Add more as needed
    };
    let pF = chart[code] || 0;
    document.getElementById('picofarad').value = pF;
    document.getElementById('nanofarad').value = pF / 1000;
    document.getElementById('microfarad').value = pF / 1000000;
    document.getElementById('farad').value = pF / 1000000000000;
});
