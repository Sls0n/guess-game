'use script';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.guess').addEventListener('click', function () {
  document.querySelector('.guess').style.boxShadow =
    '0px 0px 300px 200px rgba(26, 28, 34, 0.6)';
  document.querySelector('.btn').style.backgroundColor = '#007de4';
  document.querySelector('.btn').style.boxShadow =
    '0 1rem 5rem rgb(0, 124, 227, 0.34)';
});

document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);

  if (guessValue === secretNumber) {
    document.querySelector('.message').textContent = '😎 Correct Guess!';
    document.querySelector('.headertext').textContent = '🎉 Congrats you won!';
    document.querySelector('.header').style.boxShadow =
      'inset 0px 0px 300px 200px rgba(60, 179, 113, 0.6)';
    document.querySelector('.guess').style.boxShadow =
      '0 0 100rem 25rem rgba(60, 179, 113, 0.6)';
    document.querySelector('.btn').style.backgroundColor =
      'rgba(60, 179, 113, 0.753)';
    document.querySelector('.btn').style.boxShadow =
      '0 1rem 5rem rgb(60, 179, 100, 0.4)';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (!guessValue) {
    document.querySelector('.message').textContent = '⛔ Enter a number!';
    document.querySelector('.guess').style.boxShadow =
      '0 0 100rem 25rem rgb(212, 24, 33, 0.25)';
    document.querySelector('.btn').style.backgroundColor =
      'rgba(212, 24, 33, 0.753)';
    document.querySelector('.btn').style.boxShadow =
      '0 1rem 5rem rgb(212, 24, 33, 0.34)';
  } else if (guessValue > 20 || guessValue < 0) {
    document.querySelector('.message').textContent = '⛔ Between 1 & 20 only!';
    document.querySelector('.guess').style.boxShadow =
      '0 0 100rem 25rem rgb(212, 24, 33, 0.25)';
    document.querySelector('.btn').style.backgroundColor =
      'rgba(212, 24, 33, 0.753)';
    document.querySelector('.btn').style.boxShadow =
      '0 1rem 5rem rgb(212, 24, 33, 0.34)';
  } else if (guessValue > secretNumber) {
    document.querySelector('.message').textContent = '📈 High guess';
    document.querySelector('.guess').style.boxShadow =
      '0 0 100rem 25rem rgb(212, 24, 33, 0.25)';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.btn').style.backgroundColor =
      'rgba(212, 24, 33, 0.753)';
    document.querySelector('.btn').style.boxShadow =
      '0 1rem 5rem rgb(212, 24, 33, 0.34)';
    highscore = 0;
  } else if (guessValue < secretNumber) {
    document.querySelector('.message').textContent = '📉 Low Guess';
    document.querySelector('.guess').style.boxShadow =
      '0 0 100rem 25rem rgb(212, 24, 33, 0.25)';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.btn').style.backgroundColor =
      'rgba(212, 24, 33, 0.753)';
    document.querySelector('.btn').style.boxShadow =
      '0 1rem 5rem rgb(212, 24, 33, 0.34)';
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = '❓ Start guessing...';
  document.querySelector('.header').style.boxShadow = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.headertext').textContent =
    'Guess The Number (1-20) 💡';
  document.querySelector('.btn').style.backgroundColor = '#007de4';
  document.querySelector('.btn').style.boxShadow =
    '0 1rem 5rem rgb(0, 124, 227, 0.34)';
  document.querySelector('.guess').style.boxShadow =
    '0px 0px 300px 200px rgba(26, 28, 34, 0.6)';
});
