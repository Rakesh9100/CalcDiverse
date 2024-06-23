function calculatePaint() {
    // Get the input values
    var roomWidth = parseFloat(document.getElementById("roomWidth").value);
    var roomLength = parseFloat(document.getElementById("roomLength").value);
    var roomHeight = parseFloat(document.getElementById("roomHeight").value);
    var numDoors = parseFloat(document.getElementById("numDoors").value);
    var numWindows = parseFloat(document.getElementById("numWindows").value);
    var coats = parseFloat(document.getElementById("coats").value);
    var coveragePerLiter = parseFloat(document.getElementById("coveragePerLiter").value);

    // Calculate the area of the walls
    var wallArea = 2 * (roomWidth * roomHeight + roomLength * roomHeight);

    // Calculate the area of doors and windows
    var doorArea = numDoors * 2; // Assume doors are 2 sqm each
    var windowArea = numWindows * 1.5; // Assume windows are 1.5 sqm each

    // Subtract the area of the doors and windows
    wallArea -= doorArea + windowArea;

    // Calculate the total paint needed
    var totalPaintNeeded = wallArea / coveragePerLiter * coats;

    // Display the result
    var resultText = "Total surface area to be painted: " + (wallArea + doorArea + windowArea).toFixed(2) + " square meters<br>";
    resultText += "Total surface area to be painted after deducting doors and windows: " + (wallArea).toFixed(2) + " square meters<br>";
    resultText += "Total paint required for " + coats + " coats: " + totalPaintNeeded.toFixed(2) + " liters";
    document.getElementById("result").innerHTML = resultText;
}
