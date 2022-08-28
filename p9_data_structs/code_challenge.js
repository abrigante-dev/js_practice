'use strict';

// add button and text area
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// code challenge #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// deconstruct the entries of the scored property of the game object
for (const [goalNumber, player] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1}: ${player}`);
}

// use Object.values to get each of the odds and average them
let total = 0;
for (const odd of Object.values(game.odds)) {
  console.log(odd);
  total += odd;
}
console.log('Average odds: ', total / 3);

const scorers = {};
for (const player of game.scored) {
  if (!scorers[player]) {
    scorers[player] = 1;
  } else {
    scorers[player] += 1;
  }
}
console.log(scorers);

// code challenge #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
const events = [];
// map get all values
for (const event of gameEvents.values()) {
  if (!events.includes(event)) {
    events.push(event);
  }
}
console.log('events:', events);
gameEvents.delete(64);
// map size / map length
console.log(90 / gameEvents.size);

//destructuring a map key value pair
for (const [time, event] of gameEvents) {
  if (time <= 45) {
    console.log(event, 'In the first half');
  } else {
    console.log(event, 'In the second half');
  }
}

// code challenge #4
// function turns two words into camel case
const btnSubmit = document.querySelector('button');
btnSubmit.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // splits the lines by new line char
  let lines = text.split('\n');
  console.log(lines);
  for (const [index, line] of lines.entries()) {
    const words = line.split('_');
    words[0] = words[0].toLocaleLowerCase();
    words[1] = words[1][0].toLocaleUpperCase() + words[1].slice(1);
    lines[index] = words.join('');
  }
  console.log(lines.join('\n'););
  
});
