// activate strict mode
"use strict";

console.log("js p2");
// functions
// arrow function
const double = (num) => num * 2;
console.log(double(5));

// basic function
function logger(text) {
  console.log(text);
}
logger("log this please");

// arrow function with body
const add = (num1, num2) => {
  return num1 + num2;
};
console.log(`adding 2 + 5 = ${add(2, 5)}`);

// function expression
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
console.log(`You're age is ${calcAge(1995)}`);

const calcRetirement = function (birthYear) {
  const age = calcAge(birthYear);
  if (age > 65) {
    return 0;
  } else {
    return 65 - age;
  }
};

console.log(`I will retire in ${calcRetirement(1995)} years`);

// code challenge #1
// class example
class Team {
  constructor(teamName) {
    this.teamName = teamName;
  }
  setScores(scores) {
    this.scores = scores;
  }
  getAverage() {
    let total = 0;
    this.scores.forEach((element) => {
      total += element;
    });
    return total / this.scores.length;
  }
}

const dolphins = new Team("dolphins");
dolphins.setScores([12, 1000, 9]);
const koalas = new Team("koalas");
koalas.setScores([8, 9, 1]);

const calcAverageScore = (scores) => {
  let total = 0;
  scores.forEach((element) => {
    total += element;
  });
  return total / scores.length;
};

const checkWinner = function (dolAvg, koaAvg) {
  if (dolAvg > koaAvg * 2) {
    return `Dolphins win ${dolAvg} to ${koaAvg}`;
  } else if (koaAvg > dolAvg * 2) {
    return `Koalas win ${koaAvg} to ${dolAvg}`;
  } else {
    return "its a draw!";
  }
};
const dolAvg = calcAverageScore(dolphins.scores);
const koaAvg = calcAverageScore(koalas.scores);
console.log(checkWinner(dolAvg, koaAvg));

// arrays
const friends = ["Bob", "Jeff", "Doug"];
const years = new Array(2014, 2015, 2019);
friends[2] = "Jeff";
console.log(friends[friends.length - 1]);

const andrew = [29, "Andrew", friends];
console.log(andrew);

// array methods
// array push()
friends.push("Bill"); // => returns new length of the array
console.log("push", friends);

// array unshift() add to beggining of the array
friends.unshift("Jake");
console.log("unshift", friends);

// array pop() remove last element
friends.pop(); // => returns the removed element
console.log("pop", friends);

// array shift() removes first element
friends.shift();
console.log("shift", friends);

// array indexOf() returns the index of the element
console.log("indexOf", friends.indexOf("Jeff"));

// array includes() returns true or false if element is in array
console.log("includes", friends.includes("Nicole"));

// code challenge #2
const bills = [100, 40, 125, 555];
const tips = [];
const bill = 100;
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

bills.forEach((bill) => {
  tips.push(calcTip(bill));
});
console.log(bills, tips);

// objects
const nicole = {
  firstName: "Nicole",
  friends: ["Andrew", "Courtney"],
  birthYear: 1901,
  calcAge: function () {
    // return 2022 - this.birthYear;
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};
// object dot vs bracket notation
// dot notation
console.log("dot notation", nicole.calcAge());
// bracket notation - allows you to use a values
console.log("bracket notation", nicole["firstName"]);
const property = "firstName";
console.log("property value", nicole[property]);
// brakcet notation returns a boolean if key-value is found
if (nicole[property]) console.log(nicole[property]);

// add value to objects
nicole["job"] = "nurse";
console.log(
  "challenge",
  `${nicole.firstName} has ${nicole.friends.length} friends and ${nicole.friends[0]} is her favorite.`
);

// code challenge #3
// class example
/*
class Person {
  constructor(height, mass) {
    this.height = height;
    this.mass = mass;
  }
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}
const mark = new Person(1.69, 78);
const john = new Person(1.95, 92);
mark.calcBMI();
john.calcBMI();
console.log(`Mark's BMI is ${mark.bmi} and John's is ${john.bmi}`);
*/

// loops
// for loop
for (let i = 0; i < 3; i++) {
  console.log("For loop: ", i);
}

// for loop array
const foods = ["bread", "milk", "pizza"];
for (let i = 0; i < foods.length; i++) {
  console.log("Food array: ", foods[i]);
}

const yearsBorn = [1902, 1956, 1975, 2005];
const ages = [];
for (let i = 0; i < yearsBorn.length; i++) {
  ages.push(2022 - yearsBorn[i]);
}
console.log(ages);

// break terminates the loop, continue goes to the next iteration

// backwards loop
for (let i = 5; i > 0; i--) {
  console.log("backwards loop: ", i);
}

// while loop
let x = 0;
while (x < 3) {
  console.log("while loop: ", x);
  x++;
}

x = 0;
// do while
do {
  console.log("do while: ", x);
  x++;
} while (x < 3);
