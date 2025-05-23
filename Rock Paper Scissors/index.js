const choices = ["rock", "paper", "scissors"];
const emojiMap = {
  rock: "✊",
  paper: "🖐",
  scissors: "✌️"
};

let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("player").textContent = emojiMap[playerChoice];
  document.getElementById("computer").textContent = emojiMap[computerChoice];

  const result = getWinner(playerChoice, computerChoice);
  const winnerText = document.getElementById("winner");

  if (result === "player") {
    playerScore++;
    winnerText.textContent = "🎉 You Win!";
  } else if (result === "computer") {
    computerScore++;
    winnerText.textContent = "😢 You Lose!";
  } else {
    winnerText.textContent = "🤝 It's a Draw!";
  }

  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;

  winnerText.style.animation = "none";
  winnerText.offsetHeight;
  winnerText.style.animation = "";
}

function getWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  document.getElementById("playerScore").textContent = 0;
  document.getElementById("computerScore").textContent = 0;
  document.getElementById("player").textContent = "❔";
  document.getElementById("computer").textContent = "❔";
  document.getElementById("winner").textContent = "Let's play!";
  document.getElementById("finalResult").classList.add("hidden");
}

function endGame() {
  const finalResult = document.getElementById("finalResult");
  finalResult.classList.remove("hidden");

  if (playerScore > computerScore) {
    finalResult.textContent = `🏆 Final Result: You Win! ${playerScore} - ${computerScore}`;
  } else if (playerScore < computerScore) {
    finalResult.textContent = `💔 Final Result: You Lose! ${playerScore} - ${computerScore}`;
  } else {
    finalResult.textContent = `🤝 Final Result: It's a Draw! ${playerScore} - ${computerScore}`;
  }
}
