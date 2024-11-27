const computerChoice = document.querySelector('#computer-choise'),
    playerChoice = document.querySelector('#player-choise'),
    possibleChoices = document.querySelectorAll('button'),
    resultOutput = document.querySelector('#result');

const choices = [
    { name: "rock", img: "./image/stone.png" },
    { name: "paper", img: "./image/toilet-roll.png" },
    { name: "scissors", img: "./image/scissors.png" }
];
const generateComputerChoise = function () {
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

possibleChoices.forEach(button => button.addEventListener('click' , (event) => {
    const playerChoiceImg = button.querySelector('img');
    const playerChoiceAlt = playerChoiceImg.alt;

    playerChoice.innerHTML = `<img src="${playerChoiceImg.src}" alt="${playerChoiceAlt}">`;

    const computeredChoise = generateComputerChoise();
    computerChoice.innerHTML = `<img src="./image/${computeredChoise.name}.png" alt="${computeredChoise.name}">`;
    


    if (playerChoiceAlt === computeredChoise.name) {
        resultOutput.innerHTML = 'gelijkspel';
    } else if (
        (playerChoiceAlt === "rock" && computeredChoise.name === "scissors") ||
        (playerChoiceAlt === "paper" && computeredChoise.name === "rock") ||
        (playerChoiceAlt === "scissors" && computeredChoise.name === "paper")
    ) {
        resultOutput.innerHTML = 'je hebt gewonnen!';
    } else {
        resultOutput.innerHTML = 'noob hahahaha';
    }
}));
