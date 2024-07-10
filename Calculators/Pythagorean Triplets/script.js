function calculate() {
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);
    var side3 = parseInt(document.getElementById("side3").value);

    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
        document.getElementById("result").textContent = "Please enter valid positive numbers.";
        return;
    }

    // Checking if (side1, side2, side3) form a Pythagorean triplet
    var sides = [side1, side2, side3];
    sides.sort((a, b) => a - b);

    if (sides[0] * sides[0] + sides[1] * sides[1] === sides[2] * sides[2]) {
        document.getElementById("result").textContent = `(${sides[0]}, ${sides[1]}, ${sides[2]}) form a Pythagorean triplet.`;
    } else {
        document.getElementById("result").textContent = `(${sides[0]}, ${sides[1]}, ${sides[2]}) do not form a Pythagorean triplet.`;
    }
}
