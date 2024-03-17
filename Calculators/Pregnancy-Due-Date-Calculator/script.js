function calculateDueDate() {
    // Get the last menstrual period date
    var lastMenstrualDate = document.getElementById("lastMenstrualDate").value;

    // Validate input
    if (!lastMenstrualDate) {
        alert("Please enter the last menstrual period date.");
        return;
    }

    // Placeholder logic for due date calculation (not accurate)
    var dueDate = new Date(lastMenstrualDate);
    dueDate.setDate(dueDate.getDate() + 280); // Assuming a pregnancy duration of 280 days

    // Display the result
    var formattedDueDate = dueDate.toDateString();
    document.getElementById("result").innerHTML = "Estimated Due Date: " + formattedDueDate;
}
