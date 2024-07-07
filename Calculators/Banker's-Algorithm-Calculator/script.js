function reset() {
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= 3; j++) {
            document.getElementById('a' + i + j).value = '';
            document.getElementById('m' + i + j).value = '';
            document.getElementById('n' + i + j).value = '';
        }
        document.getElementById('p' + i).value = '';
    }
    document.getElementById('av11').value = '';
    document.getElementById('av12').value = '';
    document.getElementById('av13').value = '';
    document.getElementById('resourceA').value = '';
    document.getElementById('resourceB').value = '';
    document.getElementById('resourceC').value = '';
    document.body.style.backgroundColor = "#ffffff";
}

function example() {
    sam = [
        [0, 1, 0],
        [2, 0, 0],
        [3, 0, 2],
        [2, 1, 1],
        [0, 0, 2]
    ];

    max = [
        [7, 5, 3],
        [3, 2, 2],
        [9, 0, 2],
        [2, 2, 2],
        [4, 3, 3]
    ];
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= 3; j++) {
            document.getElementById('a' + i + j).value = sam[i - 1][j - 1];
            document.getElementById('m' + i + j).value = max[i - 1][j - 1];
        }
    }
    document.getElementById('resourceA').value = 10;
    document.getElementById('resourceB').value = 5;
    document.getElementById('resourceC').value = 7;
}


function find_avai() {
    var a = document.getElementById('resourceA').value;
    var b = document.getElementById('resourceB').value;
    var c = document.getElementById('resourceC').value;
    var x = 0;
    var y = 0;
    var z = 0;
    for (var i = 1; i <= 5; i++) {
        var x = x + parseInt(document.getElementById('a' + i + '1').value);
        var y = y + parseInt(document.getElementById('a' + i + '2').value);
        var z = z + parseInt(document.getElementById('a' + i + '3').value);
    }
    document.getElementById('av11').value = a - x;
    document.getElementById('av12').value = b - y;
    document.getElementById('av13').value = c - z;
}

function find_need() {
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= 3; j++) {
            document.getElementById('n' + i + j).value = parseInt(document.getElementById('m' + i + j).value) - parseInt(document.getElementById('a' + i + j).value);
        }
    }
}


function run_algo() {

    var resourceA = parseInt(document.getElementById('resourceA').value);
    var resourceB = parseInt(document.getElementById('resourceB').value);
    var resourceC = parseInt(document.getElementById('resourceC').value);


    find_avai();
    find_need();

    var k = 1; // AVAILABLE
    var q = 1; // PROCESS

    for (var j = 1; j <= 5; j++) {
        x1 = parseInt(document.getElementById('av11').value);
        x2 = parseInt(document.getElementById('av12').value);
        x3 = parseInt(document.getElementById('av13').value);

        for (var i = k; i <= 5; i++) {
            var ex1 = parseInt(document.getElementById('a' + i + '1').value);
            var ex2 = parseInt(document.getElementById('a' + i + '2').value);
            var ex3 = parseInt(document.getElementById('a' + i + '3').value);

            if (ex1 != 0 || ex2 != 0 || ex3 != 0) {
                if (
                    x1 >= parseInt(document.getElementById('n' + i + '1').value) &&
                    x2 >= parseInt(document.getElementById('n' + i + '2').value) &&
                    x3 >= parseInt(document.getElementById('n' + i + '3').value)
                ) {
                    document.getElementById('p' + q).value = 'P' + i;
                    document.getElementById('av11').value =
                        parseInt(document.getElementById('av11').value) +
                        parseInt(document.getElementById('a' + i + '1').value);
                    document.getElementById('av12').value =
                        parseInt(document.getElementById('av12').value) +
                        parseInt(document.getElementById('a' + i + '2').value);
                    document.getElementById('av13').value =
                        parseInt(document.getElementById('av13').value) +
                        parseInt(document.getElementById('a' + i + '3').value);
                    document.getElementById('a' + i + '1').value = '0';
                    document.getElementById('a' + i + '2').value = '0';
                    document.getElementById('a' + i + '3').value = '0';
                    k = i + 1;
                    if (k == 6) {
                        k = 1;
                    }
                    q = q + 1;
                    break;
                }
            }
        }
    }

    if (q != 6) {
        // document.body.style.backgroundColor = 'red';
        alert("Deadlock!!");
    } else {
        // document.body.style.backgroundColor = 'green';
        alert("Safe!!");
    }
}

function req_res() {


    var processId = prompt("Enter Process ID (1-5):");
    var requestA = parseInt(prompt("Enter requested amount of Resource A for Process P" + processId + ":"));
    var requestB = parseInt(prompt("Enter requested amount of Resource B for Process P" + processId + ":"));
    var requestC = parseInt(prompt("Enter requested amount of Resource C for Process P" + processId + ":"));


    var availableA = parseInt(document.getElementById('av11').value);
    var availableB = parseInt(document.getElementById('av12').value);
    var availableC = parseInt(document.getElementById('av13').value);


    var allocationMatrix = [
        [],
        [0, parseInt(document.getElementById('a11').value), parseInt(document.getElementById('a12').value), parseInt(document.getElementById('a13').value)],
        [0, parseInt(document.getElementById('a21').value), parseInt(document.getElementById('a22').value), parseInt(document.getElementById('a23').value)],
        [0, parseInt(document.getElementById('a31').value), parseInt(document.getElementById('a32').value), parseInt(document.getElementById('a33').value)],
        [0, parseInt(document.getElementById('a41').value), parseInt(document.getElementById('a42').value), parseInt(document.getElementById('a43').value)],
        [0, parseInt(document.getElementById('a51').value), parseInt(document.getElementById('a52').value), parseInt(document.getElementById('a53').value)]
    ];

    var maxMatrix = [
        [],
        [0, parseInt(document.getElementById('m11').value), parseInt(document.getElementById('m12').value), parseInt(document.getElementById('m13').value)],
        [0, parseInt(document.getElementById('m21').value), parseInt(document.getElementById('m22').value), parseInt(document.getElementById('m23').value)],
        [0, parseInt(document.getElementById('m31').value), parseInt(document.getElementById('m32').value), parseInt(document.getElementById('m33').value)],
        [0, parseInt(document.getElementById('m41').value), parseInt(document.getElementById('m42').value), parseInt(document.getElementById('m43').value)],
        [0, parseInt(document.getElementById('m51').value), parseInt(document.getElementById('m52').value), parseInt(document.getElementById('m53').value)]
    ];


    if (requestA > maxMatrix[processId][1] || requestB > maxMatrix[processId][2] || requestC > maxMatrix[processId][3]) {
        alert("Requested resources exceed the maximum claim of Process P" + processId + ".");
        return;
    }


    if (requestA > availableA || requestB > availableB || requestC > availableC) {
        alert("Insufficient available resources. Process P" + processId + " must wait.");
        return;
    }


    availableA -= requestA;
    availableB -= requestB;
    availableC -= requestC;

    allocationMatrix[processId][1] += requestA;
    allocationMatrix[processId][2] += requestB;
    allocationMatrix[processId][3] += requestC;


    document.getElementById('av11').value = availableA;
    document.getElementById('av12').value = availableB;
    document.getElementById('av13').value = availableC;


    document.getElementById('a' + processId + '1').value = allocationMatrix[processId][1];
    document.getElementById('a' + processId + '2').value = allocationMatrix[processId][2];
    document.getElementById('a' + processId + '3').value = allocationMatrix[processId][3];

    alert("Resources allocated successfully for Process P" + processId + ".");
}
