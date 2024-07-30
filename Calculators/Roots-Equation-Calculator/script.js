const generateInputs = () => {
    let numRoots = document.getElementById("numRoots").value;
    let rootsContainer = document.getElementById("rootsContainer");
    rootsContainer.innerHTML = '';

    if (!isNaN(numRoots) && numRoots.trim() !== "") {
        numRoots = parseInt(numRoots);
        for (let i = 1; i <= numRoots; i++) {
            let input = document.createElement("input");
            input.type = "number";
            input.placeholder = `Enter root ${i}`;
            input.className = "rootInput";
            rootsContainer.appendChild(input);
        }
        document.getElementById("generateEquationButton").style.display = "block";
    } else {
        alert("Please enter a valid number of roots!");
    }
}

const generateEquation = () => {
    let rootInputs = document.querySelectorAll(".rootInput");
    let roots = [];
    rootInputs.forEach(input => {
        if (!isNaN(input.value) && input.value.trim() !== "") {
            roots.push(parseFloat(input.value));
        }
    });

    if (roots.length > 0) {
        let equation = generatePolynomialFromRoots(roots);
        document.querySelector(".equation").textContent = equation;
    } else {
        alert("Please enter valid roots!");
    }
}

const generatePolynomialFromRoots = (roots) => {
    let coeffs = [1]; // Starting with the highest degree coefficient as 1

    roots.forEach(root => {
        // Multiply the current polynomial by (x - root)
        for (let i = coeffs.length - 1; i >= 0; i--) {
            coeffs[i + 1] = (coeffs[i + 1] || 0) - root * coeffs[i];
        }
    });

    // Construct the polynomial string from coefficients
    let equation = "";
    for (let i = 0; i < coeffs.length; i++) {
        let coeff = coeffs[i];
        let power = coeffs.length - 1 - i;

        if (coeff !== 0) {
            if (i > 0 && coeff > 0) {
                equation += " + ";
            } else if (i > 0 && coeff < 0) {
                equation += " - ";
                coeff = -coeff;
            }

            if (power === 0) {
                equation += coeff;
            } else if (power === 1) {
                equation += coeff === 1 ? "x" : `${coeff}x`;
            } else {
                equation += coeff === 1 ? `x^${power}` : `${coeff}x^${power}`;
            }
        }
    }

    return equation + " = 0";
}
