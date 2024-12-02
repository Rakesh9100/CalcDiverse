var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContext = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Remove the initial setting of the result
// document.querySelector("#result").innerHTML = "00.00";

function calculate() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    modal.style.display = "block";
    modalText.innerHTML = "ALL fields are required!";
  } else if (
    !isPositiveNumber(height.value) ||
    !isPositiveNumber(weight.value) ||
    !isValidCombination(age.value, height.value)
  ) {
    modal.style.display = "block";
    modalText.innerHTML =
      "Please enter valid values for age, height, and weight!";
  } else {
    countBmi();
  }

    var heightUnit = document.getElementById("heightUnit").value;
    var heightValue;

    if (heightUnit === "cm") {
        heightValue = document.getElementById("height").value;
    } else {
        var heightFeet = document.getElementById("heightFeet").value;
        heightValue = convertFeetToCm(heightFeet);
    }

    if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)) {
        modal.style.display = "block";
        modalText.innerHTML = 'ALL fields are required!';
    } else if (!isPositiveNumber(height.value) || !isPositiveNumber(weight.value)) {
        modal.style.display = "block";
        modalText.innerHTML = 'Please enter valid positive values for height and weight!';
    } else {
        countBmi(heightValue);
    }
}
function isPositiveNumber(value) {
    return /^\d*\.?\d+$/.test(value) && parseFloat(value) > 0;
}

function isValidCombination(age, height) {
      age = parseInt(age);
      height = parseFloat(height);

      if (age < 1 || age > 120) {
        return false; // Age should be between 1 and 120
      }

      if (age <= 5) {
        // Typical height range for age 0-5 years in cm
        return height >= 60 && height <= 120;
      } 
      else if (age <= 10) {
        // Typical height range for age 6-10 years in cm
        return height >= 100 && height <= 150;
      }
      // For adults, No restriction
      return height >= 140 && height <= 220;
}

function convertFeetToCm(feet) {
    return (feet * 30.48) ;
}
  
function toggleHeightInput() {
    var heightUnit = document.getElementById("heightUnit").value;
    var heightLabel = document.querySelector("label[for='height']");

    if (heightUnit === "cm") {
        document.getElementById("heightCmInput").style.display = "block";
        document.getElementById("heightFeetInput").style.display = "none";
        heightLabel.textContent = "Height(cm)";
    } else {
        document.getElementById("heightCmInput").style.display = "none";
        document.getElementById("heightFeetInput").style.display = "block";
        heightLabel.textContent = "Height(feet)";

    }
}
function countBmi(heightValue) {
    var p = [age.value, heightValue, weight.value];
    if (male.checked) {
        p.push("male");
    } else if (female.checked) {
        p.push("female");
    }

    if (!isPositiveNumber(p[0]) || !isPositiveNumber(p[1]) || !isPositiveNumber(p[2])) {
        modal.style.display = "block";
        modalText.innerHTML = 'Please enter valid positive values for age, height, and weight!';
        return;
    }

    var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);
    var result = '';
    if (bmi < 18.5) {
        result = 'Underweight';
    } else if (18.5 <= bmi && bmi < 25) {
        result = 'Healthy';
    } else if (25 <= bmi && bmi < 30) {
        result = 'Overweight';
    } else if (30 <= bmi && bmi < 35) {
        result = 'Obese (Class 1)';
    } else if (35 <= bmi && bmi < 40) {
        result = 'Obese (Class 2)';
    } else if (bmi >= 40) {
        result = 'Obese (Class 3)';
    }

    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}