const secretNumTextContent = document.querySelector('.number');
const input = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const scoreTextContent = document.querySelector('.score');
const hightscoreTextContent = document.querySelector('.highscore');

let guess;
let secretNum;
let score = 20;
let highscore = 0;

const getRandomNum = (min, max) => {
  secretNum = Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomNum(0, 20);

input.addEventListener('input', e => {
  guess = Number(e.target.value);
});

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

btnCheck.addEventListener('click', () => {
  if (!guess) {
    displayMessage('⛔️ No number!');
  }

  //When players wins
  else if (guess === secretNum) {
    displayMessage('Correct Number!');
    secretNumTextContent.textContent = secretNum;
    document.body.style.background = '#60b347';
    input.disabled = true;

    if (guess > highscore) {
      highscore = score;
      hightscoreTextContent.textContent = highscore;
    } else {
      hightscoreTextContent.textContent = highscore;
    }
  }

  //When guess is wrong
  else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? '📈 Too high!' : '📉 Too low');
      score--;
      scoreTextContent.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreTextContent.textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', () => {
  input.disabled = false;
  score = 20;
  getRandomNum(0, 20);
  scoreTextContent.textContent = score;
  document.body.style.background = '#222';
  secretNumTextContent.textContent = '?';
  input.value = '';
});
