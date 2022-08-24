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
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀

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
const mark = new Person(95, 1.88);
const john = new Person(85, 1.76);

mark.bmi = mark.mass / mark.height ** 2;
john.bmi = john.mass / john.height ** 2;

const markHigherBMI = mark.bmi > john.bmi;

console.log(mark.bmi, john.bmi);
console.log(markHigherBMI);

const BMIs = `Mark's BMI is ${mark.bmi / 2} and John's is ${john.bmi - 5}`;
console.log(BMIs);

mark.setAge(15);

if (mark.age > 18) {
  console.log("he can drive!");
} else console.log("he cant drive");
