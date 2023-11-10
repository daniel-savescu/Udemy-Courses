"use strict";

/* Strict mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) console.log("I can drive !");

// const interface = "Audio";
// const private = 1;

*/

/*Functions 

function message() {
  console.log("My name is Daniel");
}

//Calling, running, invoking function
message();
message();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Function assignment

function describeCountry(country, population, cityCapital) {
  return `${country} has ${population} million people and its capital city is ${cityCapital}.`;
}

const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);

*/

/* Function declaration / expressions ( anonymous functions )

//Function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}

let myAge = calcAge1(1990);
console.log(myAge);

//Function expression (Anonymous Function)
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age = calcAge2(1963);
console.log(age);

//Function declaration / expressions assigment

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const Romania = percentageOfWorld1(19);
console.log(Romania);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const China = percentageOfWorld2(1441);
console.log(China);

*/

/*Arrow functions

const calculateAge = (birthYear) => 2023 - birthYear;
const age = calculateAge(1990);
console.log(age);

const yearsUntillRetirement = (birthYear) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntillRetirement(1990));

//Arrow function assignment

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const China = percentageOfWorld3(1441);
console.log(China);

*/

/*Fuctions calling other function

function cutFruitInPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitInPieces(apples);
  const orangePieces = cutFruitInPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} oranges pieces.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//Functions calling another function assignment

const percentageOfWorld3 = (population) => (population / 7900) * 100;

function describePopulation(country, population) {
  const countryPrecentage = percentageOfWorld3(population);
  return `${country} has ${population} million pleople, with is about ${countryPrecentage} of the world.`;
}

console.log(describePopulation("China", 1441));

*/
