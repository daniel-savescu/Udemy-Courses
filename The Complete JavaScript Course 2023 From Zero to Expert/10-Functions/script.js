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
