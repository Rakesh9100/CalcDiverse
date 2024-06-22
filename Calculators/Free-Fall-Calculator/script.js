function calculateFreeFall() {
    // Get the input values
    const height = document.getElementById('height').value;
    const gravity = document.getElementById('gravity').value;
    const initialVelocity = document.getElementById('initialVelocity').value;

    // Input validation
    if (height === "" || gravity === "" || initialVelocity === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Convert input values to numbers
    const heightNum = parseFloat(height);
    const gravityNum = parseFloat(gravity);
    const initialVelocityNum = parseFloat(initialVelocity);

    // Calculate the time to fall using the quadratic formula
    const a = 0.5 * gravityNum;
    const b = initialVelocityNum;
    const c = -heightNum;

    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        document.getElementById('timeResult').textContent = "No real solutions for the time.";
        document.getElementById('velocityResult').textContent = "";
        return;
    }

    const time1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const time2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    const time = Math.max(time1, time2); // We take the positive time value

    // Calculate the final velocity
    const finalVelocity = initialVelocityNum + gravityNum * time;

    // Display the results
    document.getElementById('timeResult').textContent = `Time to fall: ${time.toFixed(2)} seconds`;
    document.getElementById('velocityResult').textContent = `Final velocity: ${finalVelocity.toFixed(2)} m/s`;
}
