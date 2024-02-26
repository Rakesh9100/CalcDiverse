function calculateCompatibility() {
    // Get values from the form
    var person1 = document.getElementById("person1").value;
    var person2 = document.getElementById("person2").value;
    var hobbies = parseInt(document.getElementById("hobbies").value);
    var communication = parseInt(document.getElementById("communication").value);
    var support = parseInt(document.getElementById("support").value);
    var trust = parseInt(document.getElementById("trust").value);
    var spendingTime = parseInt(document.getElementById("spendingTime").value);

    // Calculate the average score
    var totalScore = hobbies + communication + support + trust + spendingTime;
    var averageScore = totalScore / 5;

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `${person1} and ${person2} have a compatibility score of ${averageScore.toFixed(2)}/10.`;

    if (averageScore >= 7) {
        resultElement.style.color = "#27ae60";
        resultElement.innerHTML += " Congratulations! They have a strong connection.";
    } else {
        resultElement.style.color = "#e74c3c";
        resultElement.innerHTML += " It seems there might be some differences. Communication is key!";
    }
}
