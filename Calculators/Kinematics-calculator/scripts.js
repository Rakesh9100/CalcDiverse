function calculate1D() {
    var v0 = parseFloat(document.getElementById('v0-1d').value);
    var a = parseFloat(document.getElementById('a-1d').value);
    var t = parseFloat(document.getElementById('t-1d').value);

    var finalVelocity = v0 + a * t;
    document.getElementById('final-velocity').value = finalVelocity.toFixed(2);

    plotGraph1D(v0, a, t);
}

function calculate2D() {
    var v0x = parseFloat(document.getElementById('v0x-2d').value);
    var v0y = parseFloat(document.getElementById('v0y-2d').value);
    var ax = parseFloat(document.getElementById('ax-2d').value);
    var ay = parseFloat(document.getElementById('ay-2d').value);
    var t = parseFloat(document.getElementById('t-2d').value);

    var vx = v0x + ax * t;
    var vy = v0y + ay * t;

    var finalVelocity = Math.sqrt(vx * vx + vy * vy);
    document.getElementById('final-velocity').value = finalVelocity.toFixed(2);

    plotGraph2D(v0x, v0y, ax, ay, t);
}

function calculate3D() {
    var v0x = parseFloat(document.getElementById('v0x-3d').value);
    var v0y = parseFloat(document.getElementById('v0y-3d').value);
    var v0z = parseFloat(document.getElementById('v0z-3d').value);
    var ax = parseFloat(document.getElementById('ax-3d').value);
    var ay = parseFloat(document.getElementById('ay-3d').value);
    var az = parseFloat(document.getElementById('az-3d').value);
    var t = parseFloat(document.getElementById('t-3d').value);

    var vx = v0x + ax * t;
    var vy = v0y + ay * t;
    var vz = v0z + az * t;

    var finalVelocity = Math.sqrt(vx * vx + vy * vy + vz * vz);
    document.getElementById('final-velocity').value = finalVelocity.toFixed(2);

    plotGraph3D(v0x, v0y, v0z, ax, ay, az, t);
}

function plotGraph1D(v0, a, t) {
    var time = [];
    var velocity = [];
    for (var i = 0; i <= t; i++) {
        time.push(i);
        velocity.push(v0 + a * i);
    }

    var ctx = document.getElementById('motion-graph').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: time,
            datasets: [{
                label: 'Velocity vs Time (1D)',
                data: velocity,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { display: true, title: { display: true, text: 'Time (s)' } },
                y: { display: true, title: { display: true, text: 'Velocity (m/s)' } }
            }
        }
    });
}

function plotGraph2D(v0x, v0y, ax, ay, t) {
    var time = [];
    var velocity = [];
    for (var i = 0; i <= t; i++) {
        var vx = v0x + ax * i;
        var vy = v0y + ay * i;
        velocity.push(Math.sqrt(vx * vx + vy * vy));
        time.push(i);
    }

    var ctx = document.getElementById('motion-graph').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: time,
            datasets: [{
                label: 'Velocity vs Time (2D)',
                data: velocity,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { display: true, title: { display: true, text: 'Time (s)' } },
                y: { display: true, title: { display: true, text: 'Velocity (m/s)' } }
            }
        }
    });
}

function plotGraph3D(v0x, v0y, v0z, ax, ay, az, t) {
    var time = [];
    var velocity = [];
    for (var i = 0; i <= t; i++) {
        var vx = v0x + ax * i;
        var vy = v0y + ay * i;
        var vz = v0z + az * i;
        velocity.push(Math.sqrt(vx * vx + vy * vy + vz * vz));
        time.push(i);
    }

    var ctx = document.getElementById('motion-graph').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: time,
            datasets: [{
                label: 'Velocity vs Time (3D)',
                data: velocity,
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { display: true, title: { display: true, text: 'Time (s)' } },
                y: { display: true, title: { display: true, text: 'Velocity (m/s)' } }
            }
        }
    });
}