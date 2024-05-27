function navigateToCalculator() {
    const select = document.getElementById('calculator');
    if (select.value !== "None") {
        window.location.href = `./${select.value}/index.html`;
    }
}
