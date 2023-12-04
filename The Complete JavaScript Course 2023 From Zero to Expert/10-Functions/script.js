'use strict';

/*Functions default parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
*/

/* Functions passing as : value vs reference
const flight = 'LH234';
const daniel = {
  name: 'Daniel Savescu',
  passport: 2454365464,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 2454365464) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

//checkIn(flight, daniel);
//console.log(flight);
//console.log(daniel);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(daniel);
checkIn(flight, daniel);
*/

/*Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const sayHello = function () {
  console.log('Hello!');
};

document.body.addEventListener('click', sayHello);

['Daniel', 'John', 'Sandra'].forEach(sayHello);

*/
