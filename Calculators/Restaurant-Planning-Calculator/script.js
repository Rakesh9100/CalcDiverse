document.getElementById("calculator-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch the input values
    let space = parseFloat(document.getElementById("space").value);
    let staff = parseFloat(document.getElementById("staff").value);
    let rent = parseFloat(document.getElementById("rent").value);
    let utilities = parseFloat(document.getElementById("utilities").value);
    let equipment = parseFloat(document.getElementById("equipment").value);
    let salary = parseFloat(document.getElementById("salary").value);

    // Perform calculations
    let initialCost = equipment + rent + utilities;
    let monthlyCost = rent + utilities + (salary * staff);

    // Update the result section with the calculations
    document.getElementById("initial-cost").textContent = initialCost.toFixed(2);
    document.getElementById("monthly-cost").textContent = monthlyCost.toFixed(2);

    // Generate insights based on inputs
    let insights = "";

    if (space < 500) {
        insights += "<p>Consider expanding your space to accommodate more customers and increase revenue.</p>";
    } else {
        insights += "<p>Your space is sufficient for a moderate-sized restaurant. Ensure it's well-utilized.</p>";
    }

    if (staff < 5) {
        insights += "<p>With a small staff, focus on efficiency and multi-tasking to keep operations smooth.</p>";
    } else {
        insights += "<p>With a larger staff, ensure proper training and delegation to maintain high service quality.</p>";
    }

    if (rent > 5000) {
        insights += "<p>Your rent is quite high. Consider negotiating with the landlord or finding a more affordable location.</p>";
    } else {
        insights += "<p>Your rent is manageable. Ensure it's balanced with your expected revenue.</p>";
    }

    if (utilities > 1000) {
        insights += "<p>High utility costs may impact your budget. Invest in energy-efficient appliances to save costs.</p>";
    } else {
        insights += "<p>Your utility costs are within a reasonable range. Regularly monitor and optimize usage.</p>";
    }

    if (equipment > 20000) {
        insights += "<p>Your initial equipment cost is significant. Ensure you're investing in quality equipment that lasts.</p>";
    } else {
        insights += "<p>Your equipment cost is reasonable. Maintain and service equipment regularly to extend its life.</p>";
    }

    if (salary < 3000) {
        insights += "<p>With lower salaries, ensure your staff are motivated through other means such as incentives and a good working environment.</p>";
    } else {
        insights += "<p>Competitive salaries will help in retaining skilled staff. Regularly review and adjust salaries based on performance.</p>";
    }

    // Update the insights section
    document.getElementById("insights").innerHTML = insights;

    // Show the result section
    document.getElementById("result").style.display = "block";
});
