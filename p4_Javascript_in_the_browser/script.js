'use strict';

/*
// get the message class from the html document
console.log(document.querySelector('.message').textContent);

// update element text
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// set and then get value from input element
document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// function for setting the display's message
const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// add event listener to a button
document.querySelector('.check').addEventListener('click', function () {
  // get the value form the input field
  // inputs are strings so we use the number function
  const guess = Number(document.querySelector('.guess').value);

  // if no number is entered
  if (!guess) {
    setMessage('No number!');

    // when player wins
  } else if (guess === secretNumber) {
    setMessage('Correct Number!');

    //change background color when win
    document.querySelector('body').style.backgroundColor = '#60b347';
    // adjust number box width
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // change highscore value
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      const guessMatch = guess > secretNumber ? 'Too high!' : 'Too low!';
      document.querySelector('.message').textContent = guessMatch;
      score--;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      score = 0;
    }
    document.querySelector('.score').textContent = score;
  }
});

// event handler for reset again button
// resets the appropriate fields
document.querySelector('.again').addEventListener('click', function () {
  // reset score
  score = 20;
  document.querySelector('.score').textContent = score;
  //reset secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // reset message
  document.querySelector('.message').textContent = 'Start guessing...';
  // clear guess box
  document.querySelector('.guess').value = '';
  // change background color to original
  document.querySelector('body').style.backgroundColor = '#222';
  // adjust number box width
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
