'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // emthod that accepts an object argument with the given keys
  orderDelivery: function ({ starterIndex = 1, mainIndex = 1, time, address }) {
    console.log(
      'order delivery function',
      starterIndex,
      mainIndex,
      time,
      address
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log('Pasta with: ', ing1, ing2, ing3);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// calls the method and passes in an object with the given keys
restaurant.orderDelivery({
  time: '11:30',
  address: '123 lane, us',
  mainIndex: 2,
  starterIndex: 2,
});

// destructuring
// destructuring an array
let arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// swapping two variables, switching two variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// get two variables out of one function call
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destruct a 2d array
const nested = [2, 4, [5, 6]];
// emtpy comma to skip an element
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// destructuring objects and renaming variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log('destructuring objects: ', restaurantName, hours, tags);

const { menu = ['Salad'], starterMenu: starters = [] } = restaurant;
console.log('destructuring objects with default values: ', menu, starters);

// mutating object variables, swapping object variables, multi assignment
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested object variables assignment
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// spread operator
arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// shadow copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join two arrays or more
const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log('whole menu', wholeMenu);

// iterables: arrays, strings, maps, sets. NOT objects

// string spread operator
const str = 'Andrew';
const letters = [...str, '', 'R'];
console.log('string spread: ', letters);

// calling function with multiple arguments with spread operator
/*
const ingredients = [
  prompt("Let's make pasta! Ingrediant 1?"),
  prompt("Let's make pasta! Ingrediant 2?"),
  prompt("Let's make pasta! Ingrediant 3?"),
];
restaurant.orderPasta(...ingredients);
*/

// objects with spread operator
const newRestaurant = { ...restaurant, found: 'Andrew', foundedIn: 1995 };
newRestaurant.name = "Andrew' Place";
console.log('New restaurant:', newRestaurant);
