document.getElementById('tileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let areaWidth = parseFloat(document.getElementById('areaWidth').value);
    let areaHeight = parseFloat(document.getElementById('areaHeight').value);
    let tileWidth = parseFloat(document.getElementById('tileWidth').value);
    let tileHeight = parseFloat(document.getElementById('tileHeight').value);

    if (isNaN(areaWidth) || isNaN(areaHeight) || isNaN(tileWidth) || isNaN(tileHeight)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }

    let area = areaWidth * areaHeight;
    let tileArea = tileWidth * tileHeight;

    if (tileArea === 0) {
        document.getElementById('result').innerText = 'Tile dimensions cannot be zero.';
        return;
    }

    let tilesNeeded = Math.ceil(area / tileArea);

    document.getElementById('result').innerText = `Tiles needed: ${tilesNeeded}`;
});
