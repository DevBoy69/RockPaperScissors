function computerPlay() {
	let rand =  Math.floor(Math.random() * 3) + 1;
	if (rand == 1) {
		return 'rock';
	} else if (rand == 2) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return "draw";
	}
	
	if (playerSelection == 'rock') {
		return ((computerSelection == 'paper') ? 'lose' : 'win');
	} else if ( playerSelection == 'paper') {
		return ((computerSelection == 'scissors') ? 'lose' : 'win');
	} else {
		return ((computerSelection == 'rock') ? 'lose' : 'win');
	}
}

function playSound() {
	let audio = new Audio('sounds/smb_kick.wav');
	audio.play();
}

function givePoint(result, playerSelection, computerSelection) {
	if (result == 'win') {
		display.textContent = `${playerSelection} beats ${computerSelection}, you win!`;
		playerScore++;
		playerDisplay.textContent = playerScore;

	} else if (result == 'lose') {
		display.textContent = `${computerSelection} beats ${playerSelection}, you lose!`;
		computerScore++;
		computerDisplay.textContent = computerScore;
	} else {
		display.textContent = `you both picked ${computerSelection}, it's a draw! `;
	}
}

function checkWinner(playerScore, computerScore) {
	if (playerScore == 5) {
		display.textContent = 'Congratulation! You are the RPS champion!';
		reset();
	} else if (computerScore == 5) {
		display.textContent = 'Game over! You lost to a computer!';
		reset();
	}
}

function reset() {
	playerScore = 0;
	computerScore = 0;
	playerDisplay.textContent = 0;
	computerDisplay.textContent = 0;
}

const buttons = document.querySelectorAll('.buttons > button');
const display = document.querySelector('.result-display');
const playerDisplay = document.querySelector('.playerDisplay');
const computerDisplay = document.querySelector('.computerDisplay');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		playSound();
		let playerSelection = button.id;
		let computerSelection = computerPlay();
		let result = playRound(playerSelection, computerSelection);
		givePoint(result, playerSelection, computerSelection);
		checkWinner(playerScore, computerScore);
	});
});

