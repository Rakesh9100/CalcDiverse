const jokes = [
    "What did the server say to the website? 404 you!",
    "Why did the browser break up with the server? Too many 404s!",
    "Why was the web page late? It got stuck in a 404 traffic jam!",
    "I just saw a 404 error page... It was a real site for sore eyes!",
    "Why did the 404 error fail the test? It just couldn't find the answer!"
];

document.addEventListener("DOMContentLoaded", function () {
    generateQuestion(); // ✅ Ensure question appears only after DOM loads
});

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const expression = `${num1} ${operator} ${num2}`;

    // console.log("Generated Expression:", expression); // ✅ Debugging Log

    const questionElement = document.getElementById("question");

    if (questionElement) {
        questionElement.textContent = expression;
        questionElement.dataset.answer = eval(expression);
    } else {
        console.error("❌ Element #question not found in the DOM!");
    }
}

function checkAnswer() {
    const answer = document.getElementById("answer").value;
    const correctAnswer = document.getElementById("question").dataset.answer;
    const result = document.getElementById("result");
    const homeButton = document.getElementById("homeButton");

    if (parseInt(answer) === parseInt(correctAnswer)) {
        result.textContent = "✅ Correct!";
        result.style.color = "green";
        homeButton.classList.add("show");
    } else {
        result.textContent = jokes[Math.floor(Math.random() * jokes.length)];
        result.style.color = "red";
        homeButton.classList.remove("show");
    }
}

particlesJS("particles-js", {
    particles: {
        number: {
            value: 100
        },
        size: {
            value: 9,
            random: true
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.8,
            random: true
        },
        move: {
            speed: 2,
            direction: "none",
            random: true,
            out_mode: "out"
        },
        line_linked: {
            enable: false
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        },
        modes: {
            repulse: {
                distance: 100
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", generateQuestion);