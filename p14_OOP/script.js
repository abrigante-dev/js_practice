'use strict';

class Person {
  constructor(firstName, birthYear) {
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  getName() {
    return this.firstName;
  }
  // getter
  get ageOf() {
    return 2022 - this.birthYear;
  }
  // setter
  set ageOf(age) {
    this.age = age;
    return age;
  }
  setFirstName(firstName) {
    this.firstName = firstName;
  }
  // static method
  static hey() {
    console.log('only avaliable for the class, not an instance of the class');
  }
}

const andrew = new Person('Andrew', 1994);
const bob = new Person('Bob', 1801);
console.log(andrew, bob);

// instanceOf
console.log(andrew instanceof Person);

// prototypes
// add method to a protitype
// add method to a class using prototype
Person.prototype.calcAge = function () {
  this.age = 2022 - this.birthYear;
  return this.age;
};

Person.prototype.specis = 'Human';

console.log("Andrew's age", andrew.calcAge());
console.log(andrew.__proto__);
console.log(andrew.__proto__.__proto__);

// ES6 Classes
// inheritance from Person class
class PersonCl extends Person {
  //   constructor(name, birthYear) {
  //     super(name, birthYear);
  //   }
}

const bill = new PersonCl('Bill', 1901);
console.log(bill.calcAge());
// add function to prototype class
PersonCl.prototype.greet = function () {
  console.log('Hello', this.firstName);
};
bill.greet();
console.log(andrew.ageOf);

// object create method
// object.create()
const steven = Object.create(Person);
console.log(steven);

// inheritance
// inheritance with super method
class Parent extends Person {
  constructor(firstName, birthYear, proffesion) {
    super(firstName, birthYear);
    this.proffesion = proffesion;
    console.log(this);
  }
}

const rocco = new Parent('Rocco', 1950, 'Cook');
console.log(rocco.specis);

class Student extends Person {
  constructor(firstName, birthYear, grade) {
    super(firstName, birthYear);
    this.grade = grade;
  }
}

const billy = new Student('Billy', 2010, 5);
console.log('Billy age', billy.ageOf);
console.log(billy.birthYear);
