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

/* Reviewing functions

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntillRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntillRetirement(1990, "Daniel"));
console.log(yearsUntillRetirement(1950, "Mike"));

*/

/* Introductions to Arrays

const soda1 = "Coca-Cola";
const soda2 = "Fanta";
const soda3 = "Sprite";

//Literal syntax
const sodas = ["Coca-Cola", "Fanta", "Sprite"];
console.log(sodas);

console.log(sodas[0]);
console.log(sodas.length);

//Get the last element of the array
console.log(sodas[sodas.length - 1]);

//Mutate the array

sodas[2] = "Pepsi";
console.log(sodas);

const daniel = ["Daniel", "Savescu", 2023 - 1990, "programmer", sodas];
console.log(daniel);

const calculateAge = function (birthYear) {
  return 2023 - birthYear;
};

const years = new Array(1990, 1991, 1992);

const firstAge = calculateAge(years[0]);
const secondAge = calculateAge(years[1]);
const thirdAge = calculateAge(years[years.length - 1]);

console.log(firstAge, secondAge, thirdAge);

const ages = [
  calculateAge(years[0]),
  calculateAge(years[1]),
  calculateAge(years[years.length - 1]),
];
console.log(ages);

//Arrays assignment

const populations = [19, 6, 1441, 33];
if (populations.length === 4) {
  console.log(true);
} else {
  console.log(false);
}

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percentages = [
  percentageOfWorld3(populations[0]),
  percentageOfWorld3(populations[1]),
  percentageOfWorld3(populations[2]),
  percentageOfWorld3(populations[3]),
];

console.log(percentages[0], percentages[1], percentages[2], percentages[3]);

*/

/* Arrays Methods

const sodas = ["Coca-Cola", "Fanta", "Sprite"];

//Add elements (push for the end of the array)
const newLength = sodas.push("Pepesi"); //Is returs the new array length
console.log(sodas);
console.log(newLength);

//Add elements to the front of the array
sodas.unshift("Mirinda");
console.log(sodas);

//Remove elements from end of the array
sodas.pop();
console.log(sodas);
const poppedElement = sodas.pop(); //Returs the value of the removed element
console.log(poppedElement);

//Remove the elements from the front of the array
sodas.shift();
console.log(sodas);

//Returs the index of an element
console.log(sodas.indexOf("Coca-Cola"));

//Returns -1 if the element does not exists
console.log(sodas.indexOf("Pop-Cola"));

//Returns true if the array includes the element and false if NOT
console.log(sodas.includes("Coca-Cola"));
console.log(sodas.includes("Pop-Cola"));

if (sodas.includes("Coca-Cola")) {
  console.log("The most consumed soda!");
}

//Arrays functions assignment

const neighbours = ["Moldova", "Hungary", "Ukraine", "Bulgary"];
neighbours.push("Utopia");
neighbours.pop();

if (neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

const newCountry = neighbours.indexOf("Hungary");
neighbours[newCountry] = "France";

console.log(neighbours);

*/

/* Introduction to Objects

const daniel = {
  firstName: "Daniel",
  lastName: "Savescu",
  age: 2023 - 1990,
  job: "programmer",
  friends: ["Florin", "Gabriel", "David"],
};

//Object assignment

const myCountry = {
  country: "Romania",
  capital: "Bucharest",
  language: "romanian",
  population: 19000000,
  neighbours: ["Moldova", "Hungary", "Bulgary", "Ukraine"]
};

*/

/* Dot and Brakets Object notation

const daniel = {
  firstName: "Daniel",
  lastName: "Savescu",
  age: 2023 - 1990,
  job: "programmer",
  friends: ["Florin", "Gabriel", "David"],
};

console.log(daniel.lastName);
console.log(daniel["lastName"]);

const nameKey = "Name";
console.log(daniel["first" + nameKey]);

// const interest = prompt(
//   "What do you need to know about me? : firstName, lastName, age, job, friends"
// );
// if (daniel[interest]) {
//   console.log(daniel[interest]);
// } else {
//   console.log(
//     "Wrong request ! What do you need to know about me? : firstName, lastName, age, job, friends"
//   );
// }

//Add items to object

daniel.location = "Romania";
daniel["GitHub"] = "github.com/daniel-savescu";

console.log(daniel);

//Dot and Braket Object Assignment
const myCountry = {
  country: "Romania",
  capital: "Bucharest",
  language: "romanian",
  population: 19,
  neighbours: ["Moldova", "Hungary", "Bulgary", "Ukraine"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking pleople, ${myCountry.neighbours.length} neighbours countries and a capital called ${myCountry.capital}`
);

const morePopulation = myCountry.population + 2;

console.log(
  `${myCountry.country} has ${morePopulation} million ${myCountry.language}-speaking pleople, ${myCountry.neighbours.length} neighbours countries and a capital called ${myCountry.capital}`
);

const lessPopulation = myCountry["population"] - 2;

console.log(
  `${myCountry.country} has ${lessPopulation} million ${myCountry.language}-speaking pleople, ${myCountry.neighbours.length} neighbours countries and a capital called ${myCountry.capital}`
);

*/

/* Object methods

const daniel = {
  firstName: "Daniel",
  lastName: "Savescu",
  birthYear: 1990,
  job: "programmer",
  friends: ["Florin", "Gabriel", "David"],
  hasDriversLicense: false,
  // calculateAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },
  // calculateAge: function () {
  //   return 2023 - this.birthYear;
  // },
  calculateAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  summary: function () {
    return `${this.firstName} is a ${2023 - this.birthYear} old ${
      this.job
    } and ${
      this.hasDriversLicense
        ? "has a diver's license"
        : "does not have a drivers license"
    }`;
  },
};
console.log(daniel.calculateAge());
console.log(daniel.age);
console.log(daniel.summary());

//Object methods assignment

const myCountry = {
  country: "Romania",
  capital: "Bucharest",
  language: "romanian",
  population: 19,
  neighbours: ["Moldova", "Hungary", "Bulgary", "Ukraine"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbours countries and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
    return this.isIsland;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

*/

/* For loop

for (let index = 1; index <= 10; index++) {
  console.log(`Player ${index} has connected.`);
}

//For statement assignment

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

*/

/*Looping arrays; Break; Continue statement assignment

const danielArray = [
  "Daniel",
  "Savescu",
  2023 - 1990,
  "programmer",
  ["Florin", "Gabriel", "David"],
];

const types = [];

for (let i = 0; i < danielArray.length; i++) {
  console.log(danielArray[i], typeof danielArray[i]);

  //First way to populate the array
  //types[i] = typeof danielArray[i];

  //Using push method
  types.push(typeof danielArray[i]);
}

for (let i = 0; i < types.length; i++) {
  console.log(types[i]);
}

const years = [1990, 2007, 1969, 2021];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

for (let i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}

//Continue keyword
for (let i = 0; i < danielArray.length; i++) {
  if (typeof danielArray[i] !== "string") continue;
  console.log(danielArray[i], typeof danielArray[i]);
}

//Break statement
for (let i = 0; i < danielArray.length; i++) {
  if (typeof danielArray[i] === "number") break;
  console.log(danielArray[i], typeof danielArray[i]);
}

//Looping arrays; Break; Continue statement assignment
const populations = [19, 6, 1441, 33];
const percentageOfWorld1 = (population) => (population / 7900) * 100;

const percentage2 = [];

for (let i = 0; i < populations.length; i++) {
  percentage2.push(percentageOfWorld1(populations[i]));
}

for (let i = 0; i < percentage2.length; i++) {
  console.log(percentage2[i]);
}
*/

/* Backwards loops and loops inside loops

const danielArray = [
  "Daniel",
  "Savescu",
  2023 - 1990,
  "programmer",
  ["Florin", "Gabriel", "David"],
];

for (let i = danielArray.length - 1; i >= 0; i--) {
  console.log(danielArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Repeating exercise ${rep}`);
  }
}

//Backwards loops and loops inside loops assignment

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

*/

/*While loop

let rep = 1;

while (rep <= 10) {
  console.log(`${rep} exercise`);
  rep++;
}

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled : ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }


//While loop assignment

const populations = [19, 6, 1441, 33];
const percentageOfWorld1 = (population) => (population / 7900) * 100;

const percentage2 = [];

let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentage2.push(perc);
  i++;
}
console.log(percentage2);

*/
