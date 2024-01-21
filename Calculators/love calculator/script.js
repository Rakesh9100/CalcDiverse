function calculateLove() {
    var name1 = document.getElementById("name1").value.trim();
    var name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    var lovePercentage = Math.floor(Math.random() * 101); // Random number between 0 and 100

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `${name1} and ${name2}'s love is ${lovePercentage}%`;
}

