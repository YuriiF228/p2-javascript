const computerChoice = document.querySelector('#computer-choise'),
    playerChoice = document.querySelector('#player-choise'),
    possibleChoices = document.querySelectorAll('button');
    resultOutput = '';

const generateComputerChoise = function () {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

possibleChoices.forEach(button => button.addEventListener('click' , (event) => {
    const player = event.target.id;
    playerChoice.innerHTML = player;
    const computeredChoise = generateComputerChoise();
    computerChoice.innerHTML = computeredChoise;

    if (player === computeredChoise) {
        resultOutput.innerHTML = 'gelijkspel';
    } else if (
        (player === "rock" && computeredChoise === "scissors") ||
        (player === "paper" && computeredChoise === "rock") ||
        (player === "scissors" && computeredChoise === "paper")
    ) {
        resultOutput.innerHTML = 'je hebt gewonnen!';
    } else {
        resultOutput.innerHTML = 'noob hahahaha';
    }

    resultOutput = document.querySelector('#result');

}));



