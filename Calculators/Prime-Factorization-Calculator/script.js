function isPrime(input) {
    for (let i = 0; i <= Math.sqrt(input); i++) {
        if (input % i == 0) {
            return false;
        }
        return true;
    }
}

function getFactors(input) {
    document.getElementById('output').innerHTML = '';
    var input = document.getElementById("input").value;
    result = [];

    if (isNaN(input) || input === '') {
        alert("Please enter Integer value.");
        return reset_values();
    }
    else if (input == 0 || input == 1) {
        alert("Please enter a valid number.");
        return reset_values();
    }
    else {
        for (let i = 2; i <= input; i++) {
            while (isPrime(i) && input % i == 0) {
                result.push(i);
                input /= i;
            }
        }
    }

    const obj = {};
    result.forEach(function (x) {
        obj[x] = (obj[x] || 0) + 1;
    });
    //console.log(obj);
    //const exponential_values = [];

    let values = Object.keys(obj);

    values.forEach((e, index) => {
        //exponential_values.push(`${e} ${String.fromCharCode(0x2070 + obj[e])}`)
        //document.getElementById('output').innerText = `${e} `
        let exponent = obj[e];
        let supElement = document.createElement('sup');
        supElement.textContent = exponent;
        supElement.className = "sup_id";

        let spn = document.createElement('span');
        spn.textContent = " " + ' X ';
        spn.className = "spn";

        let container = document.createElement('div');
        container.textContent = e + '';
        container.appendChild(supElement);

        let out = document.getElementById('output');
        out.appendChild(container);

        if (index < values.length - 1) {
            container.appendChild(spn);
        }

    })
    //var out = exponential_values.toString();
    //var res = out.replaceAll(',', ' X ');

}


function reset_values() {
    document.getElementById('output').innerText = "";
    document.getElementById('input').value = "";
}