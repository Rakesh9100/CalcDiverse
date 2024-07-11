document.getElementById("echoForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const distance = parseFloat(document.getElementById("distance").value);
        const medium = document.getElementById("medium").value;
        const errorDiv = document.getElementById("error");
        errorDiv.textContent = "";

        if (isNaN(distance) || distance <= 0) {
            errorDiv.textContent = "Please enter a valid distance greater than zero.";
            return;
        }

        let speedOfSound;

        switch (medium) {
            case "air":
                speedOfSound = 343; // m/s
                break;
            case "water":
                speedOfSound = 1497; // m/s
                break;
            case "steel":
                speedOfSound = 5960; // m/s
                break;
            default:
                errorDiv.textContent = "Invalid medium selected.";
                return;
        }

        const echoTime = (2 * distance) / speedOfSound;

        document.getElementById("result").textContent = `The echo time is ${echoTime.toFixed(2)} seconds.`;
    });
