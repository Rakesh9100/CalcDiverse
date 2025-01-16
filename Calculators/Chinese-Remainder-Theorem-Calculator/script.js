function addEquation() {
    const inputsDiv = document.getElementById("inputs");
    const newEquation = document.createElement("div");
    newEquation.className = "equation";
    newEquation.innerHTML = `
      <input type="number" placeholder="Remainder" class="remainder">
      <span>mod</span>
      <input type="number" placeholder="Modulo" class="modulo">
      <button class="remove-btn" onclick="removeEquation(this)">-</button>
    `;
    inputsDiv.appendChild(newEquation);
}

function removeEquation(button) {
    button.parentElement.remove();
}

function solve() {
    const remainders = Array.from(document.querySelectorAll(".remainder")).map(input => parseInt(input.value));
    const modulos = Array.from(document.querySelectorAll(".modulo")).map(input => parseInt(input.value));

    if (remainders.includes(NaN) || modulos.includes(NaN) || modulos.includes(0)) {
        alert("Please fill all fields correctly. Modulo cannot be 0.");
        return;
    }

    if (!areCoprime(modulos)) {
        document.getElementById("output").innerHTML = "The modulos are not pairwise coprime. Please use coprime values.";
        return;
    }

    const m = modulos.reduce((acc, curr) => acc * curr, 1); // Find m
    const M = modulos.map(mod => m / mod); // Find Mi
    const y = M.map((Mi, index) => modularInverse(Mi, modulos[index])); // Find yi
    const x = remainders.reduce((sum, a, index) => sum + a * M[index] * y[index], 0) % m;

    // Generate explanation
    let explanation = `<p>Using Chinese Remainder Theorem, solve the system of equations:</p>`;
    explanation += `<p>${remainders.map((a, i) => `x ≡ ${a} (mod ${modulos[i]})`).join("<br>")}</p>`;
    explanation += `<p>1. Verify moduli are pairwise coprime: ${modulos.map((m1, i) =>
      modulos.slice(i + 1).map(m2 => `gcd(${m1}, ${m2}) = ${gcd(m1, m2)}`).join(", ")
    ).join(", ")}.</p>`;
    explanation += `<p>2. Calculate M = ${modulos.join(" × ")} = ${m}</p>`;
    explanation += `<p>3. Calculate Mi and modular inverses:</p>`;
    M.forEach((Mi, index) => {
        explanation += `<p>M${index + 1} = ${Mi}, inverse (mod ${modulos[index]}) = ${y[index]}</p>`;
    });
    explanation += `<p>4. Calculate x using: x = Σ(ai * Mi * yi) mod M = ${x}</p>`;
    explanation += `<p><strong>Final Answer: x = ${x}</strong></p>`;

    document.getElementById("output").innerHTML = explanation;
}

function areCoprime(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (gcd(numbers[i], numbers[j]) !== 1) return false;
        }
    }
    return true;
}

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function modularInverse(a, m) {
    a = a % m;
    for (let x = 1; x < m; x++) {
        if ((a * x) % m === 1) return x;
    }
    return null;
}