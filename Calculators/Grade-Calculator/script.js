function addSubjectField() {
    var subjectFields = document.getElementById('subjectFields');
    var subjectNumber = subjectFields.children.length / 2 + 1;

    var label = document.createElement('label');
    label.setAttribute('for', 'subject' + subjectNumber);
    label.textContent = 'Enter marks for Subject ' + subjectNumber + ':';

    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'subject' + subjectNumber);
    input.setAttribute('class', 'marks');
    input.setAttribute('placeholder', 'Enter marks (e.g., 85,100)');

    subjectFields.appendChild(label);
    subjectFields.appendChild(input);
}

function calculateGrade() {
    // Get marks for each subject
    var marksInputs = document.getElementsByClassName('marks');
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
    var resultElement = document.getElementById('result');
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
