document.querySelector(".button").addEventListener("click", () => {
    const initialInvst = parseFloat(document.getElementById("initial-invst").value) || 0;
    const monthlyContro = parseFloat(document.getElementById("monthly-contro").value) || 0;
    const rateOfInterest = parseFloat(document.getElementById("interest").value) / 100 || 0;
    const time = parseFloat(document.getElementById("time").value);
    const compound = parseFloat(document.getElementById("compound").value);

    //function to stop computation and throw error on wrong inputs
    if (
        initialInvst > parseFloat(document.getElementById("initial-invst").getAttribute("max")) ||
        initialInvst < parseFloat(document.getElementById("initial-invst").getAttribute("min"))) {
        document.getElementById("initial-invst").classList.add("input-exceeded");
        alert("Initial investment should be between 0 and 1000000");
        return;
    } else {
        document.getElementById("initial-invst").classList.remove("input-exceeded");
    }

    if (
        monthlyContro < parseFloat(document.getElementById("monthly-contro").getAttribute("min")) ||
        monthlyContro > parseFloat(document.getElementById("monthly-contro").getAttribute("max"))) {
        document.getElementById("monthly-contro").classList.add("input-exceeded");
        alert("Monthy deposits should be between 0 and 10000");
        return;
    } else {
        document.getElementById("monthly-contro").classList.remove("input-exceeded");
    }

    if (
        rateOfInterest < parseFloat(document.getElementById("interest").getAttribute("min")) ||
        rateOfInterest > parseFloat(document.getElementById("interest").getAttribute("max"))) {
        document.getElementById("interest").classList.add("input-exceeded");
        alert("interest value should be between 0 and 10");
        return;
    } else {
        document.getElementById("interest").classList.remove("input-exceeded");
    }

    if (
        time < parseFloat(document.getElementById("time").getAttribute("min")) ||
        time > parseFloat(document.getElementById("time").getAttribute("max")) || !time) {
        document.getElementById("time").classList.add("input-exceeded");
        alert("time should be between 1 and 30 years");
        return;
    } else {
        document.getElementById("time").classList.remove("input-exceeded");
    }

    // Calculate the compound interest for the initial investment
    const totalSavingsInitial =
        initialInvst * Math.pow(1 + rateOfInterest / compound, compound * time);

    //calculate the compound interest for monthly investment
    let totalSavingsContributions = 0;
    for (let i = 1; i <= time * 12; i++) {
        totalSavingsContributions +=
            monthlyContro *
            Math.pow(1 + rateOfInterest / compound, compound * (time - i / 12));
    }

    // Total savings
    const totalSavings = totalSavingsInitial + totalSavingsContributions;

    // Calculate total interest earned
    const totalInvested = initialInvst + (monthlyContro * time * 12);
    const totalInterest = totalSavings - totalInvested;

    // Display results
    document.getElementById("r-invst").innerText = `${totalInvested.toFixed(
    2
  )}/-`;
    document.getElementById("r-t-s").innerText = `${totalSavings.toFixed(2)}/-`;
    document.getElementById("r-t-i").innerText = `${totalInterest.toFixed(2)}/-`;
});
