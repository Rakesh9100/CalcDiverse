let points = 0;
let lives = 3;
let level = 1;
let timer;
let timeLeft = 10;
let achievements = [];

document.getElementById('calculate').addEventListener('click', () => {
    const expression = document.getElementById('expression').value;
    console.log(expression);
    if (expression) {
        console.log("not empty");
        try {
            const result = eval(expression);
            document.getElementById('message').textContent = `Correct! The result is ${result}.`;
            points += 10 * level;
            playSound('correct');
            levelUp();
        } catch (error) {
            document.getElementById('message').textContent = 'Incorrect! Try again.';
            playSound('incorrect');
            lives--;
            document.getElementById('lives').textContent = `Lives: ${lives}`;
            if (lives === 0) {
                gameOver();
            } else {
                document.getElementById('message').textContent += ' Hint: Check your operators and parentheses.';
            }
        }
        updateGameInfo();
    }
    else {
        alert("Expression can not be empty!");
        window.location.reload();
    }
});

function updateGameInfo() {
    document.getElementById('points').textContent = `Points: ${points}`;
    document.getElementById('level').textContent = `Level: ${level}`;
    document.getElementById('timer').textContent = `Time: ${timeLeft}`;
    checkAchievements();
}

function levelUp() {
    level++;
    timeLeft += 1; // Add extra time for each level up
    clearInterval(timer);
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    clearInterval(timer);
    document.getElementById('message').textContent = 'Game Over! Try again.';
    saveScore();
    resetGame();
}

function resetGame() {
    console.log(lives);
    points = 0;
    lives--;
    if (lives == 0) {
        points = 0;
        lives = 3;
        level = 1;
        timeLeft = 10;
        updateGameInfo();
    }
    level = 1;
    timeLeft = 10;
    updateGameInfo();
}

function saveScore() {
    const leaderboard = document.getElementById('leaderboard-list');
    const scoreItem = document.createElement('li');
    scoreItem.textContent = `Score: ${points} (Level: ${level})`;
    leaderboard.appendChild(scoreItem);
}

function checkAchievements() {
    if (points >= 50 && !achievements.includes('First 50 Points')) {
        achievements.push('First 50 Points');
        document.getElementById('achievements').innerHTML += `<h2> Achievement unlocked </h2>: 
        1 . First 50 Points! `;
    }
    if (points >= 100 && !achievements.includes('Congrats for 100 points')) {
        achievements.push('Congrats for 100 points');
        document.getElementById('achievements').innerHTML += `
        <br>
        2 . Congrats for 100 points
        `;
    }
    if (points >= 200 && !achievements.includes('Math Master!')) {
        achievements.push('Math Master!');
        document.getElementById('achievements').innerHTML += `
        <br>
        3 . Math Master!
        `;
    }
}

function playSound(type) {
    const sound = document.getElementById(`${type}-sound`);
    sound.play();
}

startTimer();
