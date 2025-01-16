const screen = document.getElementById("screen");
const timer = document.getElementById("timer");
const btnStart = document.getElementById("btnStart");
const btnRestart = document.getElementById("btnRestart"); 

btnStart.addEventListener('click', () => {
    startGame();
});

btnRestart.addEventListener('click', () => {
    resetGame();
});

btnRestart.style.display = "none"; 
btnStart.innerText = 'Start game';

let startTime;

function getRandomTime(min, max) {
    const randomDelay = Math.floor(Math.random() * (max - min + 1) + min);
    return randomDelay;
}

function startGame() {
    screen.style.background = "red";
    btnStart.style.display = "none";

    let delay = getRandomTime(300, 10000); 
    setTimeout(() => {
        screen.style.background = "green";
        console.log(`Waited for: ${delay}ms`); 
        startTime = Date.now();
    }, delay);
}

screen.addEventListener('click', () => {
    if (screen.style.background === "green") {
        const reactionTime = Date.now() - startTime; 
        timer.innerText = `Your score: ${reactionTime}ms`;
        restartGame();
    }
});

function restartGame() {
    btnRestart.style.display = "block"; 
}

function resetGame() {
    timer.innerText = '';  
    screen.style.background = "#c0ba68"; 
    btnStart.style.display = "block";
    btnRestart.style.display = "none";
}
