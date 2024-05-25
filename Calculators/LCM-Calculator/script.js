function calculateLCM() {
    var inputNumbers = document.getElementById("numbers").value;
    var numbersArray = inputNumbers.split(",").map((num) => parseInt(num.trim()));

    if (numbersArray.every((num) => !isNaN(num))) {
        var lcm = calculateLCMFromArray(numbersArray);
        document.getElementById("result").innerHTML = "LCM: " + lcm;
    } else {
        let res = document.getElementById("result");
        res.innerHTML = "Please enter valid numbers.";
        // document.getElementById("desp").style.display = "none";

    }
}

let counter = 1;

function calculateLCMFromArray(numbersArray) {
    if (numbersArray.length === 0) return 0;
    let resDiv = document.getElementById("answer");
    resDiv.innerHTML = "";
    counter = 1;

    var lcm = numbersArray[0];

    for (var i = 1; i < numbersArray.length; i++) {
        lcm = calculateLCMHelper(lcm, numbersArray[i], resDiv);
    }

    return lcm;
}

function calculateLCMHelper(a, b, resDiv) {
    let lcmVal = Math.abs(a * b) / calculateGCD(a, b, resDiv);
    displayStep(
        "LCM of " + a + " and " + b + " is: " + lcmVal.toFixed(0),
        resDiv, "p"
    );
    return lcmVal;
}

function calculateGCD(a, b, resDiv) {
    displayStep(
        "Step " +
        counter++ +
        ": Use Euclidean algorithm to find GCD(" +
        a +
        ", " +
        b +
        ")",
        resDiv, "div"
    );
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
        displayStep("GCD(" + a + ", " + b + ") = " + a, resDiv, "p");
    }
    displayStep("GCD is " + a, resDiv, "p");
    return a;
}

// display each step
function displayStep(resText, resDiv, element) {
    // document.getElementById("desp").style.display = "block";
    var resElement = document.createElement(element);
    // resElement.innerHTML = resText;
    // Simulate typing effect
    var i = 0;
    function typeText() {
        if (i < resText.length) {
            resElement.innerHTML += resText.charAt(i);
            i++;
            setTimeout(typeText, 50); // Adjust the delay as needed
        }
    }

    typeText();

    void resElement.offsetWidth;

    if (element === "div") {
        var newEucStep = document.createElement("div");
        newEucStep.classList.add("step");
        resElement.classList.add("stepHeading");
        newEucStep.id = "eucStep" + Date.now();
        resDiv.appendChild(newEucStep);
        newEucStep.appendChild(resElement);
    } else {
        var latestEucStep = document.querySelector(".step:last-child");
        resElement.classList.add("gcd");
        if (latestEucStep) {
            // resElement.innerHTML = resText;

            latestEucStep.appendChild(resElement);
        } else {
            console.error("No 'eucstep' found.");
        }
    }
    resDiv.scrollTop = resDiv.scrollHeight;
}
