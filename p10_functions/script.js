'use strict';

const bookings = [];

// defulat parameters
const createBooking = function (
  flightNum = 2,
  passengerNum = 2,
  price = '$300'
) {
  const booking = {
    flightNum,
    passengerNum,
    price,
  };
  bookings.push(booking);
};

createBooking('123');
// skip parameters and leave as default
createBooking(undefined, undefined, '$562');
console.log(bookings);

const flight = '1234';
const andrew = {
  name: 'Andrew',
  passport: '123435',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH456';
  passenger.name = 'Mr. ' + passenger.name;
};

checkIn(flight, andrew);
console.log(flight, andrew);

const bob = Object.entries(andrew);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
// higher-order function
const transformer = function (str, fn) {
  console.log('Original string: ', str);
  console.log('Transformer String: ', fn(str));
  console.log(`String transformed by: ${fn.name}`);
};

transformer('JS is the best', upperFirstWord);

const high5 = () => console.log('high 5');
document.body.addEventListener('click', high5);

// higher order function returns a function
// returning a function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Andrew');
greet('Whats up')('Andrew');

// bind method
// setting this value
const book = function (flightNumber, passengerName, passportNumber) {
  console.log(
    `${this.flightNumber} is set to fly`,
    passengerName,
    passportNumber
  );
};
const flight123 = {
  flightNumber: 88812345,
};
// set defaults for a function's parameter
const bookFlight = book.bind(flight123, 123, 'Bob');
bookFlight(567);

// closures - closure
const secureBook = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log('passengercount increased: ', passengerCount);
  };
};

const booker = secureBook();
booker();
