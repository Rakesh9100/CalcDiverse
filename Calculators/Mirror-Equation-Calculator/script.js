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
    document.getElementById('objectDistanceInput').value = '';
    document.getElementById('imageDistanceInput').value = '';
    document.getElementById('result').innerHTML = '';
}

function clearResult() {
    document.getElementById('result').innerHTML = '';
}

function clearAndReset() {
    resetCalculator();
    clearResult();
}
