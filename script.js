'use strict';
var score = Number(document.querySelector('.score').textContent);
var highscore = document.querySelector('.label-highscore');
var btnAgain = document.querySelector('.again');

let randomNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    dicreaseScore('⛔ No Number');
  } else if (guess > randomNumber) {
    dicreaseScore('📈 too high');
  } else if (guess < randomNumber) {
    dicreaseScore('📉 too low');
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🎉🥳 you got it';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (document.querySelector('.highscore').textContent < score)
      document.querySelector('.highscore').textContent = score;
  }
});

function dicreaseScore(message) {
  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent > 0
    ? (document.querySelector('.score').textContent = score--)
    : (document.querySelector('.message').textContent = 'You Lost');
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start Guessing ...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.with = '15rem';
});
