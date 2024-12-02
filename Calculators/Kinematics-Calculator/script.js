function showSelectedDimension() {
    const dimension = document.getElementById('dimension-select').value;
    document.getElementById('1d-section').classList.add('hidden');
    document.getElementById('2d-section').classList.add('hidden');
    document.getElementById('3d-section').classList.add('hidden');
    document.getElementById(`${dimension}-section`).classList.remove('hidden');
}

function calculate1D() {
    var v0 = parseFloat(document.getElementById('v0-1d').value);
    var a = parseFloat(document.getElementById('a-1d').value);
    var t = parseFloat(document.getElementById('t-1d').value);

    var finalVelocity = v0 + a * t;
    var displacement = v0 * t + 0.5 * a * t * t;

    document.getElementById('final-velocity').value = finalVelocity.toFixed(2);
    document.getElementById('displacement').value = displacement.toFixed(2);

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
    var displacementX = v0x * t + 0.5 * ax * t * t;
    var displacementY = v0y * t + 0.5 * ay * t * t;
    var displacement = Math.sqrt(displacementX * displacementX + displacementY * displacementY);

    document.getElementById('final-velocity').value = finalVelocity.toFixed(2);
    document.getElementById('displacement').value = displacement.toFixed(2);

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
    var displacementX = v0x * t + 0.5 * ax * t * t;
    var displacementY = v0y * t + 0.5 * ay * t * t;
    var displacementZ = v0z * t + 0.5 * az * t * t;
    var displacement = Math.sqrt(displacementX * displacementX + displacementY * displacementY + displacementZ * displacementZ);

    document.getElementById('final-velocity').value = finalVelocity.toFixed(2);
    document.getElementById('displacement').value = displacement.toFixed(2);

    plotGraph3D(v0x, v0y, v0z, ax, ay, az, t);
}

function plotGraph1D(v0, a, t) {
    var time = [];
    var velocity = [];
    var displacement = [];
    for (var i = 0; i <= t; i += 0.1) {
        time.push(i);
        velocity.push(v0 + a * i);
        displacement.push(v0 * i + 0.5 * a * i * i);
    }

    var ctx = document.getElementById('motion-graph').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: time,
            datasets: [{
                label: 'Velocity (m/s)',
                data: velocity,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }, {
                label: 'Displacement (m)',
                data: displacement,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Time (s)'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    });
}

function plotGraph2D(v0x, v0y, ax, ay, t) {
    var time = [];
    var velocityX = [];
    var velocityY = [];
    var displacementX = [];
    var displacementY = [];
    for (var i = 0; i <= t; i += 0.1) {
        time.push(i);
        velocityX.push(v0x + ax * i);
        velocityY.push(v0y + ay * i);
        displacementX.push(v0x * i + 0.5 * ax * i * i);
        displacementY.push(v0y * i + 0.5 * ay * i * i);
    }

    var ctx = document.getElementById('motion-graph').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: time,
            datasets: [{
                label: 'Velocity X (m/s)',
                data: velocityX,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }, {
                label: 'Velocity Y (m/s)',
                data: velocityY,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            }, {
                label: 'Displacement X (m)',
                data: displacementX,
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false
            }, {
                label: 'Displacement Y (m)',
                data: displacementY,
                borderColor: 'rgba(255, 206, 86, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Time (s)'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    });
}

function plotGraph3D(v0x, v0y, v0z, ax, ay, az, t) {
    var time = [];
    var velocityMagnitude = [];
    var displacementMagnitude = [];
    for (var i = 0; i <= t; i += 0.1) {
        time.push(i);
        var vx = v0x + ax * i;
        var vy = v0y + ay * i;
        var vz = v0z + az * i;
        velocityMagnitude.push(Math.sqrt(vx * vx + vy * vy + vz * vz));
        var dx = v0x * i + 0.5 * ax * i * i;
        var dy = v0y * i + 0.5 * ay * i * i;
        var dz = v0z * i + 0.5 * az * i * i;
        displacementMagnitude.push(Math.sqrt(dx * dx + dy * dy + dz * dz));
    }

    var ctx = document.getElementById('motion-graph').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: time,
            datasets: [{
                label: 'Velocity Magnitude (m/s)',
                data: velocityMagnitude,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }, {
                label: 'Displacement Magnitude (m)',
                data: displacementMagnitude,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Time (s)'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    });
}

// Initialize with 1D section visible
showSelectedDimension();
