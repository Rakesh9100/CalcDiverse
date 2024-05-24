function calculateBasicTrigo() {
    let angle = parseFloat(document.getElementById('angle').value);
    let unit = document.getElementById('unit').value;

    if (angle === "" || angle <= 0) {
        alert('Please enter a valid positive angle for basic Trigonometry.');
        return;
    }

    if (isNaN(angle) || (angle < 0 && unit === 'radians')) {
        alert('Please enter a valid positive angle for basic Trigonometry.');
        return;
    }

    if (unit === 'degrees') {
        angle = angle * Math.PI / 180;
    }

    document.getElementById('sinResult').innerText = Math.sin(angle).toFixed(3);
    document.getElementById('cosResult').innerText = Math.cos(angle).toFixed(3);
    document.getElementById('tanResult').innerText = Math.tan(angle).toFixed(3);
    document.getElementById('cscResult').innerText = (1 / Math.sin(angle)).toFixed(3);
    document.getElementById('secResult').innerText = (1 / Math.cos(angle)).toFixed(3);
    document.getElementById('cotResult').innerText = (1 / Math.tan(angle)).toFixed(3);
}

function clearBasicTrigo() {
    document.getElementById('angle').value = '';
    document.getElementById('sinResult').innerText = '';
    document.getElementById('cosResult').innerText = '';
    document.getElementById('tanResult').innerText = '';
    document.getElementById('cscResult').innerText = '';
    document.getElementById('secResult').innerText = '';
    document.getElementById('cotResult').innerText = '';
}
function calculateInverseTrigo() {
    let inverseAngle = parseFloat(document.getElementById('inverseAngle').value);

    if (isNaN(inverseAngle) || inverseAngle === "") {
        alert('Please enter a valid numeric value for Inverse Trigonometry.');
        return;
    }

    let asinResult = Math.asin(inverseAngle);
    document.getElementById('asinResult').innerText = isNaN(asinResult) ? (inverseAngle > 1 ? '+∞' : '-∞') : asinResult.toFixed(3);

    let acosResult = Math.acos(inverseAngle);
    document.getElementById('acosResult').innerText = isNaN(acosResult) ? (inverseAngle > 1 ? '+∞' : '-∞') : acosResult.toFixed(3);

    let atanResult = Math.atan(inverseAngle);
    document.getElementById('atanResult').innerText = isNaN(atanResult) ? (inverseAngle > 1 ? '+∞' : '-∞') : atanResult.toFixed(3);

    let acscResult = 1 / Math.asin(inverseAngle);
    document.getElementById('acscResult').innerText = isNaN(acscResult) ? (inverseAngle > 0 ? '+∞' : '-∞') : acscResult.toFixed(3);

    let asecResult = 1 / Math.acos(inverseAngle);
    document.getElementById('asecResult').innerText = isNaN(asecResult) ? (inverseAngle > 0 ? '+∞' : '-∞') : asecResult.toFixed(3);

    let acotResult = 1 / Math.atan(inverseAngle);
    document.getElementById('acotResult').innerText = isNaN(acotResult) ? (inverseAngle === 0 ? '+∞' : '-∞') : acotResult.toFixed(3);
}


function clearInverseTrigo() {
    document.getElementById('inverseAngle').value = '';
    document.getElementById('asinResult').innerText = '';
    document.getElementById('acosResult').innerText = '';
    document.getElementById('atanResult').innerText = '';
    document.getElementById('acscResult').innerText = '';
    document.getElementById('asecResult').innerText = '';
    document.getElementById('acotResult').innerText = '';
}
