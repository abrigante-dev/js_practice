'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// displays money movements, takes in an array
// turn array into html elements
const displayMovements = function (movements) {
  // empty movement container
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    // create html string literal
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">$${mov}</div>
        </div>
    `;
    // insert the html string literal into the dom movement element
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
// array methods
const arr = ['a', 'b', 'c', 'd'];
// array slice
console.log(arr.slice(2));
// array get last element
console.log(arr.slice(-1)[0]);
// shallow array copy
arr.slice();

// array splice
// splice returns and deletes the slice'd part of the array
arr.splice(2); // => mutates the original array
// array reverse: mutates array
arr.reverse();

//concantinate arrays, combine arrays
const arr2 = ['g', 'h'];
const newArr = arr.concat(arr2);

// array at method
console.log(newArr.at(0)); // => functions like arr[0] bracket notation
// get last element of an array
console.log(newArr.at(-1));

// for each loops

// for of loop
for (const num of newArr) {
  console.log('new array for of loop', num);
}

// for each loop with index
newArr.forEach((element, index) => {
  console.log(index, 'index', element);
});

// maps
const myMap = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// map for each loop
myMap.forEach((value, key) => {
  console.log('map value:', value, 'map key:', key);
});

*/

// code challenge #1
/*
// declare the arrays
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

// function takes in two dog arrays and returns if puppy or adult
const checkDogs = function (dogsJulia, dogsKate) {
  // shallow copy of the array
  const newJulia = dogsJulia.slice();
  // remove first element from array
  newJulia.splice(0, 1);
  // remove last element from an array
  newJulia.splice(newJulia.length - 1, 1);
  // combine arrays, concat two arrays
  const combinedDogs = newJulia.concat(dogsKate);
  console.log(combinedDogs);

  combinedDogs.forEach((dog, i) => {
    const ageString =
      dog >= 3 ? `an adult, and is ${dog} years old` : `is still a puppy`;
    console.log(`Dog number ${i + 1} is ${ageString}`);
  });
};
checkDogs(dogsJulia, dogsKate);
*/

// array map method => returns a new array
const moves = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// map method
const movementsUSD = moves.map(mov => mov * eurToUsd);
const movementsEUR = movementsUSD.map(function (mov) {
  return mov / eurToUsd;
});
console.log(moves);
console.log(movementsUSD);
console.log(movementsEUR);
