function calculateFocalLength() {
    let mirrorType = document.getElementById('mirrorType').value;
    let objectDistance = parseFloat(document.getElementById('objectDistanceInput').value);
    let imageDistance = parseFloat(document.getElementById('imageDistanceInput').value);
    let result = document.getElementById('result');

    if (isNaN(objectDistance) || isNaN(imageDistance)) {
        result.innerHTML = "Please enter valid numbers for object and image distances.";
    } else {
        let focalLength;

        if (mirrorType === 'concave') {
            focalLength = (objectDistance * imageDistance) / (objectDistance + imageDistance);
        } else if (mirrorType === 'convex') {
            focalLength = (objectDistance * imageDistance) / (objectDistance - imageDistance);
        }

        result.innerHTML = `Focal Length: ${focalLength.toFixed(2)} cm`;
    }
}

function resetCalculator() {
    document.getElementById('mirrorType').value = 'concave';
    clearInputs();
    clearResult();
}

function clearInputs() {
    document.getElementById('objectDistanceInput').value = '';
    document.getElementById('imageDistanceInput').value = '';
}

function clearResult() {
    document.getElementById('result').innerHTML = '';
}
