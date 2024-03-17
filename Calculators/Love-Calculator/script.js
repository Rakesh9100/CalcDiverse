var name1 = document.getElementById("name1");
var name2 = document.getElementById("name2");
var calcBtn = document.querySelector("#btn");
var loveScore = Math.random() * 100;

var loveInfo = document.getElementById("loveInfo");
var reloadBtn = document.getElementById("reload");
loveScore = Math.floor(loveScore) + 1;

const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s"
    body.appendChild(heart);
}

//capitalize input values
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Love Score Counter
function love() {
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    (async function () {
        var i = 0;
        while (i < loveScore) {
            document.getElementById("score").innerHTML = i + "%";
            await sleep(20);
            i++;
        }
    })();
}

const hash = function (str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed,
        h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 =
        Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
        Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 =
        Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
        Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

// Add eventlistener to button
calcBtn.addEventListener("click", function (e) {
    if (
        hash(name1.value.toUpperCase()) === 493572976860604 &&
        hash(name2.value.toUpperCase()) === 8563725863411927
    ) {
        loveScore = Math.random() * (100 - 90) + 90;
    } else {
        loveScore = Math.random() * 100; //delete this line if you want to keep the same value in the same session.
    }
    e.preventDefault();
    if (name1.value == "" && name2.value == "") {
        alert("You can't leave fields empty");
        return;
    }
    else if (name1.value == "") {
        alert("Please Enter Your Name");
    }
    else if (name2.value == "") {
        alert("Please Enter His/Her Name");
    }
    love();
    if (loveScore > 90) {
        setInterval(createHeart, 100);
        setInterval(function name(params) {
            var heartArr = document.querySelectorAll(".fa-heart")
            if (heartArr.length > 200) {
                heartArr[0].remove()
            }
        }, 100)
    }
});

//if loveScore is greater than 90, then call the createHeart function


//function to reset the values
function reset() {
    window.location.reload();
}

function validateName(inputId) {
    let input = document.getElementById(inputId);
    let value = input.value;
    let regex = /^[A-Za-z ]+$/;

    if (!regex.test(value)) {
        alert("Please enter only characters in the name field.");
        input.value = value.replace(/[^A-Za-z ]/g, ''); // Remove any non-alphabetic characters
    }
}
