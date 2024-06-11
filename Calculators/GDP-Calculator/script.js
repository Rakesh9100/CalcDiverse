document.getElementById("GDPcalc").addEventListener("submit", function(e) {
    e.preventDefault();

    let personal = parseFloat(document.getElementById("personal").value);
    let investment = parseFloat(document.getElementById("investment").value);
    let consumption = parseFloat(document.getElementById("consumption").value);
    let exports = parseFloat(document.getElementById("exports").value);
    let imports = parseFloat(document.getElementById("imports").value);

    let GDP = personal + investment + consumption + exports - imports;

    let value = document.querySelector(".value");
    value.textContent =  GDP;
});
