'use strict';
let high_score = 0;
let number = Math.ceil(Math.random() * 20);
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a valid Number';
  }
  if (number > guess) {
    document.querySelector('.message').textContent = 'too low';
    document.querySelector('.score').textContent--;
  }
  if (number < guess) {
    (document.querySelector('.message').textContent = 'too high'),
      document.querySelector('.score').textContent--;
  }
  if (guess === number) {
    document.querySelector('.message').textContent = 'Found the number';
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (
      document.querySelector('.score').textContent >
      document.querySelector('.highscore').textContent
    ) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'guess the number';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  number = Math.ceil(Math.random() * 20);
});
