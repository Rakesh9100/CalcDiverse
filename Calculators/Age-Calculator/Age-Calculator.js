let currDate = new Date();

let currYear = currDate.getFullYear().toString();

let currMonth = (currDate.getMonth() + 1) < 10 ? "0" + (currDate.getMonth() + 1).toString() : (currDate.getMonth() + 1).toString();

let currDay = (currDate.getDate() < 10 ? "0" + currDate.getDate().toString() : currDate.toString());
console.log(currDate);
//setting max date value
document.getElementById("birthday").max = currYear + "-" + currMonth + "-" + currDay;

//date format displayed is DD/MM/YYYY
document.getElementById("date1").innerHTML = currDay+"-"+currMonth+"-"+currYear;

//function to calculate age from date of birth
function getDOB() {
    let dob = document.getElementById("birthday").value;

    // date format displayed is MM/DD/YYYY
    let differnceDate = new Date(currDate - new Date(dob));
    let years = differnceDate.toISOString().slice(0, 4) - 1970;
    let months = differnceDate.getMonth();
    let days = differnceDate.getDate();
    let wishText = `<div class = "dob"><center>YOUR AGE </center></div>`;
    document.getElementById("text").innerHTML = wishText + years + " Years " + months + " Months " + days + " Days";
}
