document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("calculatorSearch");
        const calculatorBoxes = document.querySelectorAll(".box");

        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase();

            calculatorBoxes.forEach(function (box) {
                const calculatorTitle = box.querySelector("h2").innerText.toLowerCase();

                if (calculatorTitle.includes(searchTerm)) {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            });
        });
    });

