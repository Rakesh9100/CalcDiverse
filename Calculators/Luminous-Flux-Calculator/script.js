document
    .getElementById("flux-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const intensity = parseFloat(document.getElementById("intensity").value);
        const angle = parseFloat(document.getElementById("angle").value);

        if (isNaN(intensity) || isNaN(angle) || intensity <= 0 || angle <= 0 || angle > 360) {
            alert(
                "Please enter valid positive numbers for intensity and angle (angle should be between 0 and 360 degrees)."
            );
            return;
        }

        const angleInRadians = angle * (Math.PI / 180);
        const luminousFlux =
            intensity * (2 * Math.PI * (1 - Math.cos(angleInRadians / 2)));

        document.getElementById(
            "result"
        ).textContent = `Luminous Flux: ${luminousFlux.toFixed(2)} lm`;
    });
