function calculateHeartRate() {
    // Get values from input fields
    var age = document.getElementById("age").value;
    var restingHeartRate = document.getElementById("restingHeartRate").value;

    // Validate input
    if (!age || !restingHeartRate) {
        alert("Please enter both age and resting heart rate.");
        return;
    }

    // Calculate maximum heart rate using the formula: 220 - age
    var maxHeartRate = 220 - parseInt(age);

    // Calculate target heart rate using the formula: (Max Heart Rate - Resting Heart Rate) * 0.6 + Resting Heart Rate
    var targetHeartRate = Math.round((maxHeartRate - restingHeartRate) * 0.6 + parseInt(restingHeartRate));

    // Display the result
    document.getElementById("result").innerHTML = "Your target heart rate is: " + targetHeartRate + " beats per minute.";
}
