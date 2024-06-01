function calculate() {
    // Get Input
    let mass1 = parseFloat(document.getElementById("mass1Input").value);
    let mass2 = parseFloat(document.getElementById("mass2Input").value);
    let distance = parseFloat(document.getElementById("distanceInput").value);


    if (isNaN(mass1) || isNaN(mass2) || isNaN(distance)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }
    // Universal Gravitional Constant (G) = 6.67 * 10 ^ -11 = 6.67*(0.00000000001);
    // Calculate Gravitational Force using the formula: Gravitational Force = (G*(m1*m2))/(r)^2
    const Gravitational_Force = (6.67 * (0.00000000001) * (mass1 * mass2)) / (distance * distance);

    // Display the result
    document.getElementById("result").innerText = `Gravitational Force: ${Gravitational_Force} Newton`;
}