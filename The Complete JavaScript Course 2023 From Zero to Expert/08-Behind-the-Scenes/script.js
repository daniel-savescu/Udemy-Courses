'use strict';

/* Variable Scope In Practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Daniel';
calcAge(1990);

*/

/*Hoisting and Temporal Dead Zone (TDZ)

//Variable hoisting
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Daniel';
let job = 'programmer';
const year = 1990;

//Functions

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

//Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All product deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

*/

/*This keyword in practice

console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAge(1990);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAgeArrow(1990);

const daniel = {
  year: 1990,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

daniel.calcAge();

const elena = {
  year: 2017,
};

elena.calcAge = daniel.calcAge;
elena.calcAge();

*/

/*Regular function vs Arrow function

var firstName = 'Matilda';

const daniel = {
  firstName: 'Daniel',
  year: 1990,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    //Solution 1
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

daniel.greet();
daniel.calcAge();

//arguments keyword works in anonimous functions and regular functions
//but not in arrow functions

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 3, 4, 5);

*/
