// scripts.js

const electronegativityValues = {
    H: 2.20, He: 0,
    Li: 0.98, Be: 1.57, B: 2.04, C: 2.55, N: 3.04, O: 3.44, F: 3.98, Ne: 0,
    Na: 0.93, Mg: 1.31, Al: 1.61, Si: 1.90, P: 2.19, S: 2.58, Cl: 3.16, Ar: 0,
    K: 0.82, Ca: 1.00, Sc: 1.36, Ti: 1.54, V: 1.63, Cr: 1.66, Mn: 1.55, Fe: 1.83, Co: 1.88, Ni: 1.91, Cu: 1.90, Zn: 1.65, Ga: 1.81, Ge: 2.01, As: 2.18, Se: 2.55, Br: 2.96, Kr: 3.00,
    Rb: 0.82, Sr: 0.95, Y: 1.22, Zr: 1.33, Nb: 1.60, Mo: 2.16, Tc: 1.90, Ru: 2.20, Rh: 2.28, Pd: 2.20, Ag: 1.93, Cd: 1.69, In: 1.78, Sn: 1.96, Sb: 2.05, Te: 2.10, I: 2.66, Xe: 2.60,
    Cs: 0.79, Ba: 0.89, La: 1.10, Ce: 1.12, Pr: 1.13, Nd: 1.14, Pm: 1.13, Sm: 1.17, Eu: 1.20, Gd: 1.20, Tb: 1.10, Dy: 1.22, Ho: 1.23, Er: 1.24, Tm: 1.25, Yb: 1.10, Lu: 1.27,
    Hf: 1.30, Ta: 1.50, W: 2.36, Re: 1.90, Os: 2.20, Ir: 2.20, Pt: 2.28, Au: 2.54, Hg: 2.00, Tl: 1.62, Pb: 2.33, Bi: 2.02, Po: 2.00, At: 2.20, Rn: 0,
    Fr: 0.70, Ra: 0.89, Ac: 1.10, Th: 1.30, Pa: 1.50, U: 1.38, Np: 1.36, Pu: 1.28, Am: 1.30, Cm: 1.30, Bk: 1.30, Cf: 1.30, Es: 1.30, Fm: 1.30, Md: 1.30, No: 1.30, Lr: 1.30,
    Rf: 0, Db: 0, Sg: 0, Bh: 0, Hs: 0, Mt: 0, Ds: 0, Rg: 0, Cn: 0, Nh: 0, Fl: 0, Mc: 0, Lv: 0, Ts: 0, Og: 0
};

const elements = Object.keys(electronegativityValues);

document.addEventListener('DOMContentLoaded', function() {
    const element1Dropdown = document.getElementById('element1');
    const element2Dropdown = document.getElementById('element2');

    elements.forEach(element => {
        const option1 = document.createElement('option');
        option1.value = element;
        option1.textContent = element;
        element1Dropdown.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = element;
        option2.textContent = element;
        element2Dropdown.appendChild(option2);
    });
});

document.getElementById('calculator-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const element1 = document.getElementById('element1').value;
    const element2 = document.getElementById('element2').value;

    const electronegativity1 = getElectronegativity(element1);
    const electronegativity2 = getElectronegativity(element2);
    const difference = Math.abs(electronegativity1 - electronegativity2);
    const polarity = determinePolarity(electronegativity1, electronegativity2);

    document.getElementById('electronegativity1').value = electronegativity1.toFixed(2);
    document.getElementById('electronegativity2').value = electronegativity2.toFixed(2);
    document.getElementById('difference').value = difference.toFixed(2);
    document.getElementById('polarity').value = polarity;
});

function getElectronegativity(element) {
    return electronegativityValues[element];
}

function determinePolarity(electronegativity1, electronegativity2) {
    const difference = Math.abs(electronegativity1 - electronegativity2);
    if (difference < 0.5) {
        return "Non-polar covalent bond";
    } else if (difference >= 0.5 && difference <= 1.7) {
        return "Polar covalent bond";
    } else {
        return "Ionic bond";
    }
}
