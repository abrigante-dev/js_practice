let js = "amazing";
// if (js === "amazing") {
//   alert("JS is Fun! 55");
// } else {
//   alert("this is the else statement");
// }
/*
console.log(typeof js);
console.log(typeof "test");

const myName = "Andrew";

console.log(myName);
const now = 2022;

const myAge = 2022 - 1995;
const lName = "brig";
console.log("My age: " + myAge);
console.log(lName + " " + myAge);

const x = 5;
const y = 12;

console.log(x, y);
*/

// class example
class Person {
  constructor(mass, height) {
    this.mass = mass;
    this.height = height;
    this.bmi = mass / height ** 2;
  }
  setAge(age) {
    this.age = age;
  }
}

// creating object from class
const mark = new Person(95, 1.88);
const john = new Person(85, 1.76);

mark.bmi = mark.mass / mark.height ** 2;
john.bmi = john.mass / john.height ** 2;

const markHigherBMI = mark.bmi > john.bmi;

console.log(mark.bmi, john.bmi);
console.log(markHigherBMI);

const BMIs = `Mark's BMI is ${mark.bmi / 2} and John's is ${john.bmi - 5}`;
console.log(BMIs);

mark.setAge(25);

// if else
if (markHigherBMI) {
  console.log(
    `Mark's BMI of ${mark.bmi} is higher than John's bmi of ${john.bmi}`
  );
} else {
  console.log(
    `Mark's BMI of ${mark.bmi} is less than John's bmi of ${john.bmi}`
  );
}

// type conversion
console.log(mark.age + Number("5"), String(mark.age));

// type coercion
console.log("I am " + 27 + " years old");
console.log("23" - "10" - 3); // => 10
console.log("23" + "10" + 3); // => 23103
console.log("12" * "2"); // => 24

// falsy values = 0, undefined, null, NaN, ''
const money = 0;
if (money) {
  console.log("dont spend it all");
} else {
  console.log("get a job");
}

// == vs ===
// === checks the type also, no type coercion.
// try to always use ===
const age = 18;
console.log(age === 18); // => true
console.log(age === "18");
console.log(age == "18");

// if / else if
if (!age) {
  console.log("age error");
} else if (age !== 9) {
  console.log("age is 18");
}

// logic operators
const canDrive = true;
const canSee = true;
console.log(canDrive && canSee);

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
dolphins.setScores([96, 108, 89]);
const koalas = new Team("koalas");
koalas.setScores([88, 91, 110]);
if (dolphins.getAverage() > koalas.getAverage()) {
  console.log("dolphins win");
} else if (dolphins.getAverage() === koalas.getAverage()) {
  console.log("tie");
} else {
  console.log("koalas win");
}
console.log(dolphins.getAverage());

// switch statement
const day = "wednesday";

switch (day) {
  case "monday":
    console.log("it is monday");
    break;
  case "tuesday":
    console.log("it is tuesday");
    break;
  case "wednesday":
  case "thursday":
    console.log("it is wednesday or thursday");
    break;
  default:
    console.log("not a day");
    break;
}

// expressions vs statements
// expressions produce a value, statements are like a full sentance

// conditional ternary operator
mark.age >= 26
  ? console.log("Mark is an adult")
  : console.log("Mark is a child");

const drink = mark.age >= 21 ? "beer" : "water";
console.log(`his drink is ${drink}`);

console.log(`his drink is ${mark.age >= 21 ? "beer" : "water"}`);

// coding challenge #4
const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill is ${bill}, the tip is ${tip} and the total was ${bill + tip}`
);
