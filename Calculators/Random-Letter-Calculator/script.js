var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var isPaused = false;

function setPause() {
    isPaused = !isPaused;
}

var letter = setInterval(function () {
    if (isPaused) {

        var randomLetter = Math.round(Math.random() * (letters.length - 1));

        document.getElementById("changing").innerHTML = letters[randomLetter];
    }
}, 150);

document.getElementById('changing').addEventListener('click', function () {
    if (!isPaused) {
        var clickedLetter = this.textContent;
        document.getElementById('clickedLetter').textContent = `You clicked: ${clickedLetter}`;
    }
});
