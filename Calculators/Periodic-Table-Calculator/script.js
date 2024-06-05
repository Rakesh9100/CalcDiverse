document.addEventListener('DOMContentLoaded', () => {
    // Call your function to create the periodic table
    createPeriodicTable();
});

function createPeriodicTable() {
    const elements = [
        { symbol: "H", name: "Hydrogen", atomicNumber: 1, atomicMass: 1.008 },
        { symbol: "He", name: "Helium", atomicNumber: 2, atomicMass: 4.0026 },
        { symbol: "Li", name: "Lithium", atomicNumber: 3, atomicMass: 6.94 },
        { symbol: "Be", name: "Beryllium", atomicNumber: 4, atomicMass: 9.0122 },
        { symbol: "B", name: "Boron", atomicNumber: 5, atomicMass: 10.81 },
        { symbol: "C", name: "Carbon", atomicNumber: 6, atomicMass: 12.011 },
        { symbol: "N", name: "Nitrogen", atomicNumber: 7, atomicMass: 14.007 },
        { symbol: "O", name: "Oxygen", atomicNumber: 8, atomicMass: 15.999 },
        { symbol: "F", name: "Fluorine", atomicNumber: 9, atomicMass: 18.998 },
        { symbol: "Ne", name: "Neon", atomicNumber: 10, atomicMass: 20.180 },
        { symbol: "Na", name: "Sodium", atomicNumber: 11, atomicMass: 22.990 },
        { symbol: "Mg", name: "Magnesium", atomicNumber: 12, atomicMass: 24.305 },
        { symbol: "Al", name: "Aluminium", atomicNumber: 13, atomicMass: 26.982 },
        { symbol: "Si", name: "Silicon", atomicNumber: 14, atomicMass: 28.085 },
        { symbol: "P", name: "Phosphorus", atomicNumber: 15, atomicMass: 30.974 },
        { symbol: "S", name: "Sulfur", atomicNumber: 16, atomicMass: 32.06 },
        { symbol: "Cl", name: "Chlorine", atomicNumber: 17, atomicMass: 35.45 },
        { symbol: "Ar", name: "Argon", atomicNumber: 18, atomicMass: 39.948 },
        { symbol: "K", name: "Potassium", atomicNumber: 19, atomicMass: 39.098 },
        { symbol: "Ca", name: "Calcium", atomicNumber: 20, atomicMass: 40.078 },
        { symbol: "Sc", name: "Scandium", atomicNumber: 21, atomicMass: 44.956 },
        { symbol: "Ti", name: "Titanium", atomicNumber: 22, atomicMass: 47.867 },
        { symbol: "V", name: "Vanadium", atomicNumber: 23, atomicMass: 50.942 },
        { symbol: "Cr", name: "Chromium", atomicNumber: 24, atomicMass: 51.996 },
        { symbol: "Mn", name: "Manganese", atomicNumber: 25, atomicMass: 54.938 },
        { symbol: "Fe", name: "Iron", atomicNumber: 26, atomicMass: 55.845 },
        { symbol: "Co", name: "Cobalt", atomicNumber: 27, atomicMass: 58.933 },
        { symbol: "Ni", name: "Nickel", atomicNumber: 28, atomicMass: 58.693 },
        { symbol: "Cu", name: "Copper", atomicNumber: 29, atomicMass: 63.546 },
        { symbol: "Zn", name: "Zinc", atomicNumber: 30, atomicMass: 65.38 },
        { symbol: "Ga", name: "Gallium", atomicNumber: 31, atomicMass: 69.723 },
        { symbol: "Ge", name: "Germanium", atomicNumber: 32, atomicMass: 72.63 },
        { symbol: "As", name: "Arsenic", atomicNumber: 33, atomicMass: 74.922 },
        { symbol: "Se", name: "Selenium", atomicNumber: 34, atomicMass: 78.971 },
        { symbol: "Br", name: "Bromine", atomicNumber: 35, atomicMass: 79.904 },
        { symbol: "Kr", name: "Krypton", atomicNumber: 36, atomicMass: 83.798 },
        { symbol: "Rb", name: "Rubidium", atomicNumber: 37, atomicMass: 85.468 },
        { symbol: "Sr", name: "Strontium", atomicNumber: 38, atomicMass: 87.62 },
        { symbol: "Y", name: "Yttrium", atomicNumber: 39, atomicMass: 88.906 },
        { symbol: "Zr", name: "Zirconium", atomicNumber: 40, atomicMass: 91.224 },
        { symbol: "Nb", name: "Niobium", atomicNumber: 41, atomicMass: 92.906 },
        { symbol: "Mo", name: "Molybdenum", atomicNumber: 42, atomicMass: 95.95 },
        { symbol: "Tc", name: "Technetium", atomicNumber: 43, atomicMass: 98 },
        { symbol: "Ru", name: "Ruthenium", atomicNumber: 44, atomicMass: 101.07 },
        { symbol: "Rh", name: "Rhodium", atomicNumber: 45, atomicMass: 102.91 },
        { symbol: "Pd", name: "Palladium", atomicNumber: 46, atomicMass: 106.42 },
        { symbol: "Ag", name: "Silver", atomicNumber: 47, atomicMass: 107.87 },
        { symbol: "Cd", name: "Cadmium", atomicNumber: 48, atomicMass: 112.41 },
        { symbol: "In", name: "Indium", atomicNumber: 49, atomicMass: 114.82 },
        { symbol: "Sn", name: "Tin", atomicNumber: 50, atomicMass: 118.71 },
        { symbol: "Sb", name: "Antimony", atomicNumber: 51, atomicMass: 121.76 },
        { symbol: "Te", name: "Tellurium", atomicNumber: 52, atomicMass: 127.6 },
        { symbol: "I", name: "Iodine", atomicNumber: 53, atomicMass: 126.90 },
        { symbol: "Xe", name: "Xenon", atomicNumber: 54, atomicMass: 131.29 },
        { symbol: "Cs", name: "Cesium", atomicNumber: 55, atomicMass: 132.91 },
        { symbol: "Ba", name: "Barium", atomicNumber: 56, atomicMass: 137.33 },
        { symbol: "La", name: "Lanthanum", atomicNumber: 57, atomicMass: 138.91 },
        { symbol: "Ce", name: "Cerium", atomicNumber: 58, atomicMass: 140.12 },
        { symbol: "Pr", name: "Praseodymium", atomicNumber: 59, atomicMass: 140.91 },
        { symbol: "Nd", name: "Neodymium", atomicNumber: 60, atomicMass: 144.24 },
        { symbol: "Pm", name: "Promethium", atomicNumber: 61, atomicMass: 145 },
        { symbol: "Sm", name: "Samarium", atomicNumber: 62, atomicMass: 150.36 },
        { symbol: "Eu", name: "Europium", atomicNumber: 63, atomicMass: 151.96 },
        { symbol: "Gd", name: "Gadolinium", atomicNumber: 64, atomicMass: 157.25 },
        { symbol: "Tb", name: "Terbium", atomicNumber: 65, atomicMass: 158.93 },
        { symbol: "Dy", name: "Dysprosium", atomicNumber: 66, atomicMass: 162.50 },
        { symbol: "Ho", name: "Holmium", atomicNumber: 67, atomicMass: 164.93 },
        { symbol: "Er", name: "Erbium", atomicNumber: 68, atomicMass: 167.26 },
        { symbol: "Tm", name: "Thulium", atomicNumber: 69, atomicMass: 168.93 },
        { symbol: "Yb", name: "Ytterbium", atomicNumber: 70, atomicMass: 173.05 },
        { symbol: "Lu", name: "Lutetium", atomicNumber: 71, atomicMass: 174.97 },
        { symbol: "Hf", name: "Hafnium", atomicNumber: 72, atomicMass: 178.49 },
        { symbol: "Ta", name: "Tantalum", atomicNumber: 73, atomicMass: 180.95 },
        { symbol: "W", name: "Tungsten", atomicNumber: 74, atomicMass: 183.84 },
        { symbol: "Re", name: "Rhenium", atomicNumber: 75, atomicMass: 186.21 },
        { symbol: "Os", name: "Osmium", atomicNumber: 76, atomicMass: 190.23 },
        { symbol: "Ir", name: "Iridium", atomicNumber: 77, atomicMass: 192.22 },
        { symbol: "Pt", name: "Platinum", atomicNumber: 78, atomicMass: 195.08 },
        { symbol: "Au", name: "Gold", atomicNumber: 79, atomicMass: 196.97 },
        { symbol: "Hg", name: "Mercury", atomicNumber: 80, atomicMass: 200.59 },
        { symbol: "Tl", name: "Thallium", atomicNumber: 81, atomicMass: 204.38 },
        { symbol: "Pb", name: "Lead", atomicNumber: 82, atomicMass: 207.2 },
        { symbol: "Bi", name: "Bismuth", atomicNumber: 83, atomicMass: 208.98 },
        { symbol: "Po", name: "Polonium", atomicNumber: 84, atomicMass: 209 },
        { symbol: "At", name: "Astatine", atomicNumber: 85, atomicMass: 210 },
        { symbol: "Rn", name: "Radon", atomicNumber: 86, atomicMass: 222 },
        { symbol: "Fr", name: "Francium", atomicNumber: 87, atomicMass: 223 },
        { symbol: "Ra", name: "Radium", atomicNumber: 88, atomicMass: 226 },
        { symbol: "Ac", name: "Actinium", atomicNumber: 89, atomicMass: 227 },
        { symbol: "Th", name: "Thorium", atomicNumber: 90, atomicMass: 232.04 },
        { symbol: "Pa", name: "Protactinium", atomicNumber: 91, atomicMass: 231.04 },
        { symbol: "U", name: "Uranium", atomicNumber: 92, atomicMass: 238.03 },
        { symbol: "Np", name: "Neptunium", atomicNumber: 93, atomicMass: 237 },
        { symbol: "Pu", name: "Plutonium", atomicNumber: 94, atomicMass: 244 },
        { symbol: "Am", name: "Americium", atomicNumber: 95, atomicMass: 243 },
        { symbol: "Cm", name: "Curium", atomicNumber: 96, atomicMass: 247 },
        { symbol: "Bk", name: "Berkelium", atomicNumber: 97, atomicMass: 247 },
        { symbol: "Cf", name: "Californium", atomicNumber: 98, atomicMass: 251 },
        { symbol: "Es", name: "Einsteinium", atomicNumber: 99, atomicMass: 252 },
        { symbol: "Fm", name: "Fermium", atomicNumber: 100, atomicMass: 257 },
        { symbol: "Md", name: "Mendelevium", atomicNumber: 101, atomicMass: 258 },
        { symbol: "No", name: "Nobelium", atomicNumber: 102, atomicMass: 259 },
        { symbol: "Lr", name: "Lawrencium", atomicNumber: 103, atomicMass: 262 },
        { symbol: "Rf", name: "Rutherfordium", atomicNumber: 104, atomicMass: 267 },
        { symbol: "Db", name: "Dubnium", atomicNumber: 105, atomicMass: 270 },
        { symbol: "Sg", name: "Seaborgium", atomicNumber: 106, atomicMass: 271 },
        { symbol: "Bh", name: "Bohrium", atomicNumber: 107, atomicMass: 270 },
        { symbol: "Hs", name: "Hassium", atomicNumber: 108, atomicMass: 277 },
        { symbol: "Mt", name: "Meitnerium", atomicNumber: 109, atomicMass: 276 },
        { symbol: "Ds", name: "Darmstadtium", atomicNumber: 110, atomicMass: 281 },
        { symbol: "Rg", name: "Roentgenium", atomicNumber: 111, atomicMass: 282 },
        { symbol: "Cn", name: "Copernicium", atomicNumber: 112, atomicMass: 285 },
        { symbol: "Nh", name: "Nihonium", atomicNumber: 113, atomicMass: 286 },
        { symbol: "Fl", name: "Flerovium", atomicNumber: 114, atomicMass: 289 },
        { symbol: "Mc", name: "Moscovium", atomicNumber: 115, atomicMass: 290 },
        { symbol: "Lv", name: "Livermorium", atomicNumber: 116, atomicMass: 293 },
        { symbol: "Ts", name: "Tennessine", atomicNumber: 117, atomicMass: 294 },
        { symbol: "Og", name: "Oganesson", atomicNumber: 118, atomicMass: 294 }
    ];

    const periodicTable = document.getElementById('periodic-table');
    elements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = 'element';
        elementDiv.innerHTML = `<strong>${element.symbol}</strong><br>${element.atomicNumber}`;
        elementDiv.addEventListener('click', () => fetchElementInfo(element));
        periodicTable.appendChild(elementDiv);
    });
}

function fetchElementInfo(element) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${element.name}&exintro=true&explaintext=true&origin=*`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pages = data.query.pages;
            const page = pages[Object.keys(pages)[0]];
            const extract = page.extract;

            document.getElementById('element-name').innerText = `Name: ${element.name}`;
            document.getElementById('element-symbol').innerText = `Symbol: ${element.symbol}`;
            document.getElementById('element-atomic-number').innerText = `Atomic Number: ${element.atomicNumber}`;
            document.getElementById('element-atomic-mass').innerText = `Atomic Mass: ${element.atomicMass}`;
            document.getElementById('element-summary').innerText = `Summary: ${extract}`;
            
            document.getElementById('element-info').style.display = 'block';
        })
        .catch(error => console.error('Error fetching data:', error));
}

function calculateMass() {
    const input = document.getElementById('mass-input').value.trim();
    const elements = [
        { symbol: "H", name: "Hydrogen", atomicNumber: 1, atomicMass: 1.008 },
        { symbol: "He", name: "Helium", atomicNumber: 2, atomicMass: 4.0026 },
        { symbol: "Li", name: "Lithium", atomicNumber: 3, atomicMass: 6.94 },
        { symbol: "Be", name: "Beryllium", atomicNumber: 4, atomicMass: 9.0122 },
        { symbol: "B", name: "Boron", atomicNumber: 5, atomicMass: 10.81 },
        { symbol: "C", name: "Carbon", atomicNumber: 6, atomicMass: 12.011 },
        { symbol: "N", name: "Nitrogen", atomicNumber: 7, atomicMass: 14.007 },
        { symbol: "O", name: "Oxygen", atomicNumber: 8, atomicMass: 15.999 },
        { symbol: "F", name: "Fluorine", atomicNumber: 9, atomicMass: 18.998 },
        { symbol: "Ne", name: "Neon", atomicNumber: 10, atomicMass: 20.180 },
        { symbol: "Na", name: "Sodium", atomicNumber: 11, atomicMass: 22.990 },
        { symbol: "Mg", name: "Magnesium", atomicNumber: 12, atomicMass: 24.305 },
        { symbol: "Al", name: "Aluminium", atomicNumber: 13, atomicMass: 26.982 },
        { symbol: "Si", name: "Silicon", atomicNumber: 14, atomicMass: 28.085 },
        { symbol: "P", name: "Phosphorus", atomicNumber: 15, atomicMass: 30.974 },
        { symbol: "S", name: "Sulfur", atomicNumber: 16, atomicMass: 32.06 },
        { symbol: "Cl", name: "Chlorine", atomicNumber: 17, atomicMass: 35.45 },
        { symbol: "Ar", name: "Argon", atomicNumber: 18, atomicMass: 39.948 },
        { symbol: "K", name: "Potassium", atomicNumber: 19, atomicMass: 39.098 },
        { symbol: "Ca", name: "Calcium", atomicNumber: 20, atomicMass: 40.078 },
        { symbol: "Sc", name: "Scandium", atomicNumber: 21, atomicMass: 44.956 },
        { symbol: "Ti", name: "Titanium", atomicNumber: 22, atomicMass: 47.867 },
        { symbol: "V", name: "Vanadium", atomicNumber: 23, atomicMass: 50.942 },
        { symbol: "Cr", name: "Chromium", atomicNumber: 24, atomicMass: 51.996 },
        { symbol: "Mn", name: "Manganese", atomicNumber: 25, atomicMass: 54.938 },
        { symbol: "Fe", name: "Iron", atomicNumber: 26, atomicMass: 55.845 },
        { symbol: "Co", name: "Cobalt", atomicNumber: 27, atomicMass: 58.933 },
        { symbol: "Ni", name: "Nickel", atomicNumber: 28, atomicMass: 58.693 },
        { symbol: "Cu", name: "Copper", atomicNumber: 29, atomicMass: 63.546 },
        { symbol: "Zn", name: "Zinc", atomicNumber: 30, atomicMass: 65.38 },
        { symbol: "Ga", name: "Gallium", atomicNumber: 31, atomicMass: 69.723 },
        { symbol: "Ge", name: "Germanium", atomicNumber: 32, atomicMass: 72.63 },
        { symbol: "As", name: "Arsenic", atomicNumber: 33, atomicMass: 74.922 },
        { symbol: "Se", name: "Selenium", atomicNumber: 34, atomicMass: 78.971 },
        { symbol: "Br", name: "Bromine", atomicNumber: 35, atomicMass: 79.904 },
        { symbol: "Kr", name: "Krypton", atomicNumber: 36, atomicMass: 83.798 },
        { symbol: "Rb", name: "Rubidium", atomicNumber: 37, atomicMass: 85.468 },
        { symbol: "Sr", name: "Strontium", atomicNumber: 38, atomicMass: 87.62 },
        { symbol: "Y", name: "Yttrium", atomicNumber: 39, atomicMass: 88.906 },
        { symbol: "Zr", name: "Zirconium", atomicNumber: 40, atomicMass: 91.224 },
        { symbol: "Nb", name: "Niobium", atomicNumber: 41, atomicMass: 92.906 },
        { symbol: "Mo", name: "Molybdenum", atomicNumber: 42, atomicMass: 95.95 },
        { symbol: "Tc", name: "Technetium", atomicNumber: 43, atomicMass: 98 },
        { symbol: "Ru", name: "Ruthenium", atomicNumber: 44, atomicMass: 101.07 },
        { symbol: "Rh", name: "Rhodium", atomicNumber: 45, atomicMass: 102.91 },
        { symbol: "Pd", name: "Palladium", atomicNumber: 46, atomicMass: 106.42 },
        { symbol: "Ag", name: "Silver", atomicNumber: 47, atomicMass: 107.87 },
        { symbol: "Cd", name: "Cadmium", atomicNumber: 48, atomicMass: 112.41 },
        { symbol: "In", name: "Indium", atomicNumber: 49, atomicMass: 114.82 },
        { symbol: "Sn", name: "Tin", atomicNumber: 50, atomicMass: 118.71 },
        { symbol: "Sb", name: "Antimony", atomicNumber: 51, atomicMass: 121.76 },
        { symbol: "Te", name: "Tellurium", atomicNumber: 52, atomicMass: 127.6 },
        { symbol: "I", name: "Iodine", atomicNumber: 53, atomicMass: 126.90 },
        { symbol: "Xe", name: "Xenon", atomicNumber: 54, atomicMass: 131.29 },
        { symbol: "Cs", name: "Cesium", atomicNumber: 55, atomicMass: 132.91 },
        { symbol: "Ba", name: "Barium", atomicNumber: 56, atomicMass: 137.33 },
        { symbol: "La", name: "Lanthanum", atomicNumber: 57, atomicMass: 138.91 },
        { symbol: "Ce", name: "Cerium", atomicNumber: 58, atomicMass: 140.12 },
        { symbol: "Pr", name: "Praseodymium", atomicNumber: 59, atomicMass: 140.91 },
        { symbol: "Nd", name: "Neodymium", atomicNumber: 60, atomicMass: 144.24 },
        { symbol: "Pm", name: "Promethium", atomicNumber: 61, atomicMass: 145 },
        { symbol: "Sm", name: "Samarium", atomicNumber: 62, atomicMass: 150.36 },
        { symbol: "Eu", name: "Europium", atomicNumber: 63, atomicMass: 151.96 },
        { symbol: "Gd", name: "Gadolinium", atomicNumber: 64, atomicMass: 157.25 },
        { symbol: "Tb", name: "Terbium", atomicNumber: 65, atomicMass: 158.93 },
        { symbol: "Dy", name: "Dysprosium", atomicNumber: 66, atomicMass: 162.50 },
        { symbol: "Ho", name: "Holmium", atomicNumber: 67, atomicMass: 164.93 },
        { symbol: "Er", name: "Erbium", atomicNumber: 68, atomicMass: 167.26 },
        { symbol: "Tm", name: "Thulium", atomicNumber: 69, atomicMass: 168.93 },
        { symbol: "Yb", name: "Ytterbium", atomicNumber: 70, atomicMass: 173.05 },
        { symbol: "Lu", name: "Lutetium", atomicNumber: 71, atomicMass: 174.97 },
        { symbol: "Hf", name: "Hafnium", atomicNumber: 72, atomicMass: 178.49 },
        { symbol: "Ta", name: "Tantalum", atomicNumber: 73, atomicMass: 180.95 },
        { symbol: "W", name: "Tungsten", atomicNumber: 74, atomicMass: 183.84 },
        { symbol: "Re", name: "Rhenium", atomicNumber: 75, atomicMass: 186.21 },
        { symbol: "Os", name: "Osmium", atomicNumber: 76, atomicMass: 190.23 },
        { symbol: "Ir", name: "Iridium", atomicNumber: 77, atomicMass: 192.22 },
        { symbol: "Pt", name: "Platinum", atomicNumber: 78, atomicMass: 195.08 },
        { symbol: "Au", name: "Gold", atomicNumber: 79, atomicMass: 196.97 },
        { symbol: "Hg", name: "Mercury", atomicNumber: 80, atomicMass: 200.59 },
        { symbol: "Tl", name: "Thallium", atomicNumber: 81, atomicMass: 204.38 },
        { symbol: "Pb", name: "Lead", atomicNumber: 82, atomicMass: 207.2 },
        { symbol: "Bi", name: "Bismuth", atomicNumber: 83, atomicMass: 208.98 },
        { symbol: "Po", name: "Polonium", atomicNumber: 84, atomicMass: 209 },
        { symbol: "At", name: "Astatine", atomicNumber: 85, atomicMass: 210 },
        { symbol: "Rn", name: "Radon", atomicNumber: 86, atomicMass: 222 },
        { symbol: "Fr", name: "Francium", atomicNumber: 87, atomicMass: 223 },
        { symbol: "Ra", name: "Radium", atomicNumber: 88, atomicMass: 226 },
        { symbol: "Ac", name: "Actinium", atomicNumber: 89, atomicMass: 227 },
        { symbol: "Th", name: "Thorium", atomicNumber: 90, atomicMass: 232.04 },
        { symbol: "Pa", name: "Protactinium", atomicNumber: 91, atomicMass: 231.04 },
        { symbol: "U", name: "Uranium", atomicNumber: 92, atomicMass: 238.03 },
        { symbol: "Np", name: "Neptunium", atomicNumber: 93, atomicMass: 237 },
        { symbol: "Pu", name: "Plutonium", atomicNumber: 94, atomicMass: 244 },
        { symbol: "Am", name: "Americium", atomicNumber: 95, atomicMass: 243 },
        { symbol: "Cm", name: "Curium", atomicNumber: 96, atomicMass: 247 },
        { symbol: "Bk", name: "Berkelium", atomicNumber: 97, atomicMass: 247 },
        { symbol: "Cf", name: "Californium", atomicNumber: 98, atomicMass: 251 },
        { symbol: "Es", name: "Einsteinium", atomicNumber: 99, atomicMass: 252 },
        { symbol: "Fm", name: "Fermium", atomicNumber: 100, atomicMass: 257 },
        { symbol: "Md", name: "Mendelevium", atomicNumber: 101, atomicMass: 258 },
        { symbol: "No", name: "Nobelium", atomicNumber: 102, atomicMass: 259 },
        { symbol: "Lr", name: "Lawrencium", atomicNumber: 103, atomicMass: 262 },
        { symbol: "Rf", name: "Rutherfordium", atomicNumber: 104, atomicMass: 267 },
        { symbol: "Db", name: "Dubnium", atomicNumber: 105, atomicMass: 270 },
        { symbol: "Sg", name: "Seaborgium", atomicNumber: 106, atomicMass: 271 },
        { symbol: "Bh", name: "Bohrium", atomicNumber: 107, atomicMass: 270 },
        { symbol: "Hs", name: "Hassium", atomicNumber: 108, atomicMass: 277 },
        { symbol: "Mt", name: "Meitnerium", atomicNumber: 109, atomicMass: 276 },
        { symbol: "Ds", name: "Darmstadtium", atomicNumber: 110, atomicMass: 281 },
        { symbol: "Rg", name: "Roentgenium", atomicNumber: 111, atomicMass: 282 },
        { symbol: "Cn", name: "Copernicium", atomicNumber: 112, atomicMass: 285 },
        { symbol: "Nh", name: "Nihonium", atomicNumber: 113, atomicMass: 286 },
        { symbol: "Fl", name: "Flerovium", atomicNumber: 114, atomicMass: 289 },
        { symbol: "Mc", name: "Moscovium", atomicNumber: 115, atomicMass: 290 },
        { symbol: "Lv", name: "Livermorium", atomicNumber: 116, atomicMass: 293 },
        { symbol: "Ts", name: "Tennessine", atomicNumber: 117, atomicMass: 294 },
        { symbol: "Og", name: "Oganesson", atomicNumber: 118, atomicMass: 294 }
    ];

    const element = elements.find(el => el.symbol.toLowerCase() === input.toLowerCase());
    const result = document.getElementById('calculated-mass');
    
    if (element) {
        result.innerText = `Atomic Mass of ${element.name} (${element.symbol}) is ${element.atomicMass}`;
    } else {
        result.innerText = 'Element not found';
    }
}

const element = elements.find(el => el.symbol.toLowerCase() === input.toLowerCase());
const result = document.getElementById('calculated-mass');

if (element) {
    result.innerText = `Atomic Mass of ${element.name} (${element.symbol}) is ${element.atomicMass}`;
} else {
    result.innerText = 'Element not found';
}
