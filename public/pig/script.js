'use strict';
const score0El = document.getElementById('score--0');
const current0El = document.getElementById('current--0');
const score1El = document.getElementById('score--1');
const current1El = document.getElementById('current--1');
score0El.textContent = 0;
score1El.textContent = 0;
const diceEl = document.querySelector('.dice');
const bnew = document.querySelector('.btn--new');
const broll = document.querySelector('.btn--roll');
const bhold = document.querySelector('.btn--hold');
let winner = 0;
let player = 0;
let sum = 0;
diceEl.classList.add('hidden');
broll.addEventListener('click', function () {
  sum = document.getElementById(`current--${player}`).textContent;
  sum = Number(sum);
  let dice = Math.ceil(Math.random() * 6);
  document.getElementById(`score--${player}`).textContent = dice;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice === 1) {
    document.getElementById(`current--${player}`).textContent = 0;
    sum = 0;
    document.querySelector(`.player--0`).classList.toggle('player--active');
    document.querySelector(`.player--1`).classList.toggle('player--active');
    player = player === 0 ? 1 : 0;
  } else {
    sum += dice;
    document.getElementById(`current--${player}`).textContent = sum;
    if (document.getElementById(`current--${player}`).textContent >= 40) {
      alert(`player${player} has won`);
    }
  }
});
bhold.addEventListener('click', function () {
  document.querySelector(`.player--0`).classList.toggle('player--active');
  document.querySelector(`.player--1`).classList.toggle('player--active');
  player = player === 0 ? 1 : 0;
});
bnew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  document
    .querySelector(`.player--${player}`)
    .classList.remove('player--active');
  player = 0;
  document.querySelector(`.player--${player}`).classList.add('player--active');
  diceEl.classList.add('hidden');
});
