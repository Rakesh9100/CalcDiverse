$(document).ready(function () {
    $("#blood-sugar-calculator").submit(function (event) {
        event.preventDefault();
        var testType = $("#test-type").val();
        var age = parseInt($("#age").val());
        var bloodSugarLevel = parseInt($("#blood-sugar-level").val());

        var normalRange, preDiabetesRange, diabetesRange, lowBloodSugarRange;
        /*if-else loop for test results*/
        /* Fasting */
        if (testType === "fasting") {
            if (age <= 5) {
                normalRange = [70, 99];
                preDiabetesRange = [100, 125];
                diabetesRange = [126, Infinity];
                lowBloodSugarRange = [0, 69];
            } else if (age <= 12) {
                normalRange = [70, 99];
                preDiabetesRange = [100, 125];
                diabetesRange = [126, Infinity];
                lowBloodSugarRange = [0, 69];
            } else if (age <= 19) {
                normalRange = [70, 99];
                preDiabetesRange = [100, 125];
                diabetesRange = [126, Infinity];
                lowBloodSugarRange = [0, 69];
            } else if (age <= 59) {
                normalRange = [70, 99];
                preDiabetesRange = [100, 125];
                diabetesRange = [126, Infinity];
                lowBloodSugarRange = [0, 69];
            } else {
                normalRange = [70, 99];
                preDiabetesRange = [100, 125];
                diabetesRange = [126, Infinity];
                lowBloodSugarRange = [0, 69];
            }
            /*if-else loop for test results*/
            /* Random */
        } else {
            if (age <= 5) {
                normalRange = [70, 140];
                preDiabetesRange = [140, 199];
                diabetesRange = [200, Infinity];
                lowBloodSugarRange = [0, 69];
            } else if (age <= 12) {
                normalRange = [70, 140];
                preDiabetesRange = [140, 199];
                diabetesRange = [200, Infinity];
                lowBloodSugarRange = [0, 69];
            } else if (age <= 19) {
                normalRange = [70, 140];
                preDiabetesRange = [140, 199];
                diabetesRange = [200, Infinity];
                lowBloodSugarRange = [0, 69];
            } else if (age <= 59) {
                normalRange = [70, 140];
                preDiabetesRange = [140, 199];
                diabetesRange = [200, Infinity];
                lowBloodSugarRange = [0, 69];
            } else {
                normalRange = [70, 140];
                preDiabetesRange = [140, 199];
                diabetesRange = [200, Infinity];
                lowBloodSugarRange = [0, 69];
            }
        }
        /* Giving results and changing color with changing results */

        if (bloodSugarLevel < lowBloodSugarRange[1]) {
            $("#blood-sugar-status").text("Low Blood Sugar");
            document.getElementById("box").style.background = "#F7BAC5";
        } else if (
            bloodSugarLevel >= normalRange[0] &&
            bloodSugarLevel <= normalRange[1]
        ) {
            $("#blood-sugar-status").text("Normal");
            document.getElementById("box").style.background = "#C6F7D0";
        } else if (
            bloodSugarLevel >= preDiabetesRange[0] &&
            bloodSugarLevel <= preDiabetesRange[1]
        ) {
            $("#blood-sugar-status").text("Pre-Diabetes");
            document.getElementById("box").style.background = "#F7DC6F";
        } else if (bloodSugarLevel >= diabetesRange[0]) {
            $("#blood-sugar-status").text("Diabetes");
            document.getElementById("box").style.background = "#F74F47";
        }
    });
});
