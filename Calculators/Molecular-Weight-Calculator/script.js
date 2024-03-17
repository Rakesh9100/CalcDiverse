const atomicWeights = {
    H: 1.00794,
    He: 4.002602,
    Li: 6.941,
    Be: 9.012182,
    B: 10.811,
    C: 12.0107,
    N: 14.0067,
    O: 15.9994,
    F: 18.9984032,
    Ne: 20.1797,
    Na: 22.98976928,
    Mg: 24.3050,
    Al: 26.9815386,
    Si: 28.0855,
    P: 30.973762,
    S: 32.065,
    Cl: 35.453,
    Ar: 39.948,
    K: 39.0983,
    Ca: 40.078,
    Sc: 44.955912,
    Ti: 47.867,
    V: 50.9415,
    Cr: 51.9961,
    Mn: 54.938045,
    Fe: 55.845,
    Co: 58.933195,
    Ni: 58.6934,
    Cu: 63.546,
    Zn: 65.409,
    Ga: 69.723,
    Ge: 72.64,
    As: 74.92160,
    Se: 78.96,
    Br: 79.904,
    Kr: 83.798,
    Rb: 85.4678,
    Sr: 87.62,
    Y: 88.90585,
    Zr: 91.224,
    Nb: 92.90638,
    Mo: 95.94,
    Tc: 98.9063,
    Ru: 101.07,
    Rh: 102.90550,
    Pd: 106.42,
    Ag: 107.8682,
    Cd: 112.411,
    In: 114.818,
    Sn: 118.710,
    Sb: 121.760,
    Te: 127.60,
    I: 126.90447,
    Xe: 131.293,
    Cs: 132.9054519,
    Ba: 137.327,
    La: 138.90547,
    Ce: 140.116,
    Pr: 140.90765,
    Nd: 144.242,
    Pm: 146.9151,
    Sm: 150.36,
    Eu: 151.964,
    Gd: 157.25,
    Tb: 158.92535,
    Dy: 162.500,
    Ho: 164.93032,
    Er: 167.259,
    Tm: 168.93421,
    Yb: 173.04,
    Lu: 174.967,
    Hf: 178.49,
    Ta: 180.9479,
    W: 183.84,
    Re: 186.207,
    Os: 190.23,
    Ir: 192.217,
    Pt: 195.084,
    Au: 196.966569,
    Hg: 200.59,
    Tl: 204.3833,
    Pb: 207.2,
    Bi: 208.98040,
    Po: 208.9824,
    At: 209.9871,
    Rn: 222.0176,
    Fr: 223.0197,
    Ra: 226.0254,
    Ac: 227.0278,
    Th: 232.03806,
    Pa: 231.03588,
    U: 238.02891,
    Np: 237.0482,
    Pu: 244.0642,
    Am: 243.0614,
    Cm: 247.0703,
    Bk: 247.0703,
    Cf: 251.0796,
    Es: 252.0829,
    Fm: 257.0951,
    Md: 258.0986,
    No: 259.1009,
    Lr: 260.1053,
    Rf: 261.1087,
    Db: 262.1138,
    Sg: 263.1182,
    Bh: 262.1229,
    Hs: 265,
    Mt: 266,
    Ds: 269,
    Rg: 272,
    Uub: 285,
    Uut: 284,
    Uuq: 289,
    Uup: 288,
    Uuh: 292,
    Uuo: 294
};

function calculateMolecularWeight() {
    const chemicalFormulaInput = document.getElementById('chemicalFormula');
    const resultElement = document.getElementById('output');

    let chemicalFormula = chemicalFormulaInput.value.toUpperCase();

    if (!chemicalFormula || chemicalFormula.trim() === '') {
        resultElement.innerHTML = '<b>Enter a valid chemical formula!</b>';
        return;
    }

    let formattedFormula = '';

    let molecularWeight = 0;
    let currentElement = '';
    let currentCount = 0;

    for (let i = 0; i < chemicalFormula.length; i++) {
        const char = chemicalFormula[i];

        if (char >= 'A' && char <= 'Z') {
            // A new element is found
            if (currentElement) {
                formattedFormula += `<i>${currentElement}</i>${currentCount > 1 ? `<sub>${currentCount}</sub>` : ''}`;
                molecularWeight += (atomicWeights[currentElement] || 0) * (currentCount || 1);
            }

            currentElement = char;
            currentCount = 0;
        } else if (char >= '0' && char <= '9') {
            // Update the currentCount if a digit is found
            currentCount = currentCount * 10 + parseInt(char);
        } else {
            // Invalid character found
            resultElement.innerHTML = 'Invalid input';
            return;
        }
    }

    // Calculate the weight for the last element
    formattedFormula += `<i>${currentElement}</i>${currentCount > 1 ? `<sub>${currentCount}</sub>` : ''}`;
    molecularWeight += (atomicWeights[currentElement] || 0) * (currentCount || 1);

    resultElement.innerHTML = `<b>Chemical Formula:</b> <span style="font-size:1.5rem;">${formattedFormula}</span><br>
                                <b>Molecular Weight:</b> ${molecularWeight.toFixed(2)} g/mol`;
}



