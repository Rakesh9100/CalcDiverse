function calculateSGPA() {
    var form = document.getElementById("sgpaForm");
    var resultDiv = document.getElementById("result1");
    var mandatoryCourses = [
        ["course1", "grade1", "credit1"],
        ["course2", "grade2", "credit2"],
        ["course3", "grade3", "credit3"],
        ["course4", "grade4", "credit4"],
    ];

    var optionalCourses = [
        ["optional1", "optionalGrade1", "optionalCredit1"],
        ["optional2", "optionalGrade2", "optionalCredit2"],
    ];

    var totalCredits = 0;
    var totalGradePoints = 0;
    for (var i = 0; i < mandatoryCourses.length; i++) {
        var course = mandatoryCourses[i];
        var credit = parseFloat(form[course[2]].value);
        if (!isNaN(credit)) {
            totalCredits += credit;
            totalGradePoints += calculateGradePoints(form[course[1]].value) * credit;
        }
    }

    for (var j = 0; j < optionalCourses.length; j++) {
        var optionalCourse = optionalCourses[j];
        var optionalCredit = parseFloat(form[optionalCourse[2]].value);
        if (!isNaN(optionalCredit)) {
            totalCredits += optionalCredit;
            totalGradePoints +=
                calculateGradePoints(form[optionalCourse[1]].value) * optionalCredit;
        }
    }

    var gpa = totalGradePoints / totalCredits;
    if (!isNaN(gpa)) {
        resultDiv.innerHTML = "<p>Your SGPA is: " + gpa.toFixed(2) + "</p>";
    } else {
        resultDiv.innerHTML =
            "<p>Please enter valid numeric values for credits.</p>";
    }
    return [totalGradePoints, totalCredits];
}

function calculateCGPA() {
    var [totalGradePoints, totalCredits] = calculateSGPA();
    var form = document.getElementById("cgpaForm");
    var previousCGPA = parseFloat(form.previouscgpa.value);
    var previousCredits = parseFloat(form.previousCredits.value);
    var resultDiv = document.getElementById("result2");
    var cgpa =
        (totalGradePoints + previousCGPA * previousCredits) /
        (totalCredits + previousCredits);

    if (!isNaN(cgpa)) {
        resultDiv.innerHTML = "<p>Your CGPA is: " + cgpa.toFixed(2) + "</p>";
    } else {
        resultDiv.innerHTML =
            "<p>Please enter valid numeric values for credits and GPA.</p>";
    }
}

function calculateGradePoints(grade) {
    switch (grade) {
        case "O":
            return 10;
        case "E":
            return 9;
        case "A":
            return 8;
        case "B":
            return 7;
        case "C":
            return 6;
        case "D":
            return 5;
        case "F":
            return 2;
        case "M":
            return 0;
        case "S":
            return 0;
        default:
            return 0;
    }
}
