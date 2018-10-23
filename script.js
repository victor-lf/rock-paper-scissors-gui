const btns = document.querySelectorAll('button');
const resultDiv = document.createElement('div');
document.body.appendChild(resultDiv);
const message = document.createElement('p');
const h1 = document.querySelector('h1');

let computerSelection;
let roundResult;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * 3);
    computerSelection = choices[random];
}

function playRound(playerSelection, computerSelection) {
    // capitalize first letter
    playerSelection = playerSelection.charAt(0).toUpperCase() +
            playerSelection.slice(1);

    if ( (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
         (playerSelection === 'Paper' && computerSelection === 'Rock') ||
         (playerSelection === 'Scissors' && computerSelection === 'Paper') ) {

        playerScore++;
        roundResult = `You win! ${playerSelection} beats ${computerSelection}`;

    } else if ( (playerSelection === 'Rock' && computerSelection === 'Paper') ||
                (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
                (playerSelection === 'Scissors' && computerSelection === 'Rock') ) {

        computerScore++;
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;

    } else roundResult = 'Draw!';

}

function showResult(computerSelection, roundResult) {
    resultDiv.innerHTML = '<br>Computer chose ' + computerSelection + '<br>' +
            roundResult + '<br><br>Player score: ' + playerScore + '<br>' +
            'Computer score: ' + computerScore;

    if (playerScore === 5 || computerScore === 5) {
        message.textContent = (playerScore === 5) ? 'You win!' : 'You lose!';
        message.style.color = (playerScore === 5) ? 'green' : 'red';
        resultDiv.appendChild(message);
        playerScore = 0;
        computerScore = 0;
    }
}

btns.forEach(function (btn) {
    btn.addEventListener('click', () => computerPlay());
    btn.addEventListener('click', (e) => playRound(e.target.id, computerSelection));
    btn.addEventListener('click', () => showResult(computerSelection, roundResult));
});
