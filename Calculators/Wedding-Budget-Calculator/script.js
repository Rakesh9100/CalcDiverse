function calculateBudget() {
    const totalBudget =
        parseFloat(document.getElementById("total-budget").value) || 0;
    const venue = parseFloat(document.getElementById("venue").value) || 0;
    const catering = parseFloat(document.getElementById("catering").value) || 0;
    const photography =
        parseFloat(document.getElementById("photography").value) || 0;
    const decor = parseFloat(document.getElementById("decor").value) || 0;
    const music = parseFloat(document.getElementById("music").value) || 0;
    const attire = parseFloat(document.getElementById("attire").value) || 0;
    const other = parseFloat(document.getElementById("other").value) || 0;

    if (
        totalBudget === 0 &&
        venue === 0 &&
        catering === 0 &&
        photography === 0 &&
        decor === 0 &&
        music === 0 &&
        attire === 0 &&
        other === 0
    ) {
        alert("Please input at least one field.");
        return;
    }

    if (
        totalBudget < 0 ||
        venue < 0 ||
        catering < 0 ||
        photography < 0 ||
        decor < 0 ||
        music < 0 ||
        attire < 0 ||
        other < 0
    ) {
        alert("The expense cannot be negative");
        return;
    }

    const totalExpenses =
        venue + catering + photography + decor + music + attire + other;
    const remainingBudget = totalBudget - totalExpenses;

    if (remainingBudget < 0) {
        alert("Your expenses are greater than your Budget. Please update it");
        return;
    }

    document.getElementById("total-expenses").textContent =
        totalExpenses.toFixed(2);
    document.getElementById("remaining-budget").textContent =
        remainingBudget.toFixed(2);

    document.getElementById("result").style.display = "block";
}
