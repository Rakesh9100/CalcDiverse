let startTime;
let endTime;
let typedText = "";
const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "The five boxing wizards jump quickly",
    "Pack my box with five dozen milk jugs",
    "How jumping frogs can level six piqued gymnasts",
    "The quick onyx goblin jumps over the lazy dwarf",
];

function getRandomSentence() {
    let randomIndex = Math.floor(Math.random() * sentences.length);
    document.getElementById("text-to-type").textContent = sentences[randomIndex];
}

function startTimer() {
    startTime = new Date();
}

function stopTimer() {
    endTime = new Date();
    calculateSpeed();
}

function checkInput() {
    if (!startTime) {
        startTimer();
    }
    typedText = document.getElementById("user-input").value;
    let textToType = document.getElementById("text-to-type").textContent;
    if (typedText === textToType) {
        stopTimer();
    }
}

function calculateSpeed() {
    let elapsedTime = (endTime - startTime) / 1000; // Convert to seconds
    let words = typedText.trim().split(/\s+/).length;
    let characters = typedText.length;
    let wordsPerSec = words / elapsedTime;
    let charactersPerSec = characters / elapsedTime;
    displaySpeed(wordsPerSec, charactersPerSec);
}

function displaySpeed(wordsPerSec, charactersPerSec) {
    let resultElement = document.getElementById("speed-result");
    resultElement.innerHTML = `Your typing speed is: i) ${wordsPerSec.toFixed(
    2
  )} words/sec 
                        ii) ${charactersPerSec.toFixed(2)} characters/sec.`;
    setTimeout(changeString, 1500);
}

function changeString() {
    getRandomSentence();
    resetInput();
}

function resetInput() {
    document.getElementById("user-input").value = "";
    document.getElementById("speed-result").innerHTML = "";
    startTime = null;
    endTime = null;
    typedText = "";
    getRandomSentence();
}
