const words = [
    "serendipity", "ephemeral", "luminescence", "ethereal", "resonance", 
    "ineffable", "sonder", "labyrinthine", "sonder", "petrichor"
];

function generateWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    document.getElementById('wordDisplay').innerText = randomWord;
}
