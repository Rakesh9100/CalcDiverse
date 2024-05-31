function openPage(calcName, element) {
    // Hide all elements with class="tabcontent" by default */
    let calc = document.getElementsByClassName("calculator-container");
    for (let i = 0; i < calc.length; i++) {
        calc[i].style.display = "none";
    }
    // Show the specific tab content
    document.getElementById(calcName).style.display = "block";

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function calculateRelGrade() {
    // Get marks, mean and std for each subject
    let marksInputs = document.querySelectorAll('#relative .marks');
    let totalPoints = 0;
    let totalObtained = 0;

    // Check if at least one subject is entered
    if (marksInputs.length === 0 || !marksInputs[0].value || !marksInputs[1].value || !marksInputs[2].value) {
        alert("Please enter at least one subject with marks.");
        return;
    }

    let marks = marksInputs[0].value.split(',').map(function (item) {
        return parseFloat(item);
    });

    let mean = parseFloat(marksInputs[1].value);
    let std = parseFloat(marksInputs[2].value);

    let percentage = marks[0] / marks[1];

    let grade;

    if (percentage >= 0.9 && marks[0] > mean + 1.5 * std) {
        grade = "S";
    } else if (marks[0] > mean + 0.5 * std) {
        grade = "A";
    } else if (marks[0] > mean - 0.5 * std) {
        grade = "B";
    } else if (marks[0] > mean - std) {
        grade = "C";
    } else if (marks[0] > mean - 1.5 * std) {
        grade = "D";
    } else if (marks[0] > mean - 2 * std) {
        grade = "E";
    } else {
        grade = "F";
    }

    let resultElement = document.querySelector('#relative .result');
    resultElement.innerHTML = "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Grade: " + grade;

}

// ------------------------------------------ Absolute Grade Calculator ---------------------------------------------

function calculateAbsGrade() {
    // Get marks for each subject
    var marksInputs = document.querySelectorAll('#absolute .marks');
    var totalPoints = 0;
    var totalObtained = 0;

    // Check if at least one subject is entered
    if (marksInputs.length === 0 || !marksInputs[0].value) {
        alert("Please enter at least one subject with marks.");
        return;
    }

    // Calculate total points and total obtained points
    for (var i = 0; i < marksInputs.length; i++) {
        var marks = marksInputs[i].value.split(',').map(function (item) {
            return parseFloat(item);
        });

        // Check if input is valid
        if (marks.length !== 2 || isNaN(marks[0]) || isNaN(marks[1]) || marks[0] > marks[1]) {
            alert("Please enter valid marks for all subjects.");
            return;
        }

        totalPoints += marks[1];
        totalObtained += marks[0];
    }

    // Calculate percentage
    var percentage = (totalObtained / totalPoints) * 100;

    // Determine the grade
    var grade = calculateGradeFromPercentage(percentage);

    // Display result
    var resultElement = document.querySelector('#absolute .result');
    resultElement.innerHTML = "Total Points: " + totalPoints + "<br>" +
        "Points Obtained: " + totalObtained + "<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Grade: " + grade;
}

function calculateGradeFromPercentage(percentage) {
    if (percentage >= 90) {
        return 'A';
    } else if (percentage >= 80) {
        return 'B';
    } else if (percentage >= 70) {
        return 'C';
    } else if (percentage >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// ------------------------------------------ Relative Grade Calculator ---------------------------------------------
