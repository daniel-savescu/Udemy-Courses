/* Linkin the JS file 

let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN");

*/

/* Values and Variable 

console.log(40 + 8 + 23 - 10);
console.log("Daniel");
console.log(23);
let firstName = "Daniel";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions

let daniel_matilda = "DM";
let $function = 8;
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

*/

/* Values and Variables Asignment 

let country = "Romania";
let continet = "Europe";
let population = 19120000;

console.log(country);
console.log(continet);
console.log(population);

*/

/* Data Types

let javaScriptIsFun = true;

console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 26);
console.log(typeof "John");

javaScriptIsFun = "YES!";

console.log(typeof javaScriptIsFun);

let age;
console.log(age);
console.log(typeof age);

age = 30;
console.log(age);
console.log(typeof age);

console.log(typeof null);

//Data Type Asignment

let isIsland = false;
let language;
let country = "Romania";
let population = 19120000;

console.log(isIsland);
console.log(language);
console.log(country);
console.log(population);

*/

/* let, var, const 

let age = 30;
age = 31;

const birthYear = 1990;
// birthYear = 1989;

// const job;

var job = "programmer";
job = "teacher";

carBrand = "Ford";
console.log(carBrand);

//let, var, const Assignment

const isIsland = false;
const language = "romanian";
const country = "Romania";
let population = 19120000;

console.log(isIsland);
console.log(language);
console.log(country);
console.log(population);

*/

/* Basic Operators


//Mathematical operators
const currentYear = 2023;
const myCurrentAge = currentYear - 1990;
console.log(myCurrentAge);
console.log(myCurrentAge * 2, myCurrentAge / 2);

// ** exponantial operator
console.log(2 ** 3);

//string concatenation
const firstName = "Daniel";
const lastName = "Savescu";

console.log(firstName + " " + lastName);

//typeof operator
console.log(typeof firstName);

//asignment operator
let n = 10 + 5;
console.log(n);

n += 10;
console.log(n);

n *= 4;
console.log(n);

//Increment operator and decrement operator
n++;
console.log(n);

n--;
console.log(n);

//Comparison Operators
console.log(10 > 9);

const legalAge = 18;
console.log(legalAge >= 18);

const legal = legalAge >= 18;
console.log(legal);

console.log(currentYear - 1990 < currentYear - legalAge);

//Basic operators assigment
let population = 19120000;
let halfOfPopulation = population / 2;
console.log("Half of current population: " + halfOfPopulation);
population++;
console.log(population);
let finlandPopulation = 6000000;
const checkPopulation = population > finlandPopulation;
console.log(checkPopulation);
const averagePopulation = 33000000;
const checkAverage = population < averagePopulation;
const language = "romanian";
const country = "Romania";
const continent = "Europe";
const description =
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " people speak " +
  language +
  " language";
console.log(description);

*/

/* Operator Precedence 

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const ageDaniel = 33;
const ageDaniela = 60;

const averageAge = (ageDaniel + ageDaniela) / 2;
console.log(ageDaniel, ageDaniela, averageAge);

*/

/*Strings and template literals

const firstName = "Daniel";
const job = "programmer";
const birthYear = 1990;
const year = 2023;

const daniel =
  "I'm " + firstName + " a " + (year - birthYear) + " years old " + job + "!";
console.log(daniel);

const danielNew = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
console.log(danielNew);

console.log(`this is a regular string using backticks`);

console.log(
  "String with \n\
multiple\n\
lines"
);

console.log(`String
with multiple
line using
backticks`);


//String and template literals asignment

const language = "romanian";
const country = "Romania";
const continent = "Europe";
let population = 19120000;

console.log(
  `${country} is in ${continent}, and its ${population} pleople speak ${language}`
);

*/

/*Tacking Decisions : if / else Statements

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1990;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//If else assignment

let population = 19120000;
const averagePopulation = 33000000;
const romaniaAveragePopulatior = averagePopulation - population;
if (population > averagePopulation) {
  console.log("Romania population is grater then average.");
} else {
  console.log(
    `Romania population is ${romaniaAveragePopulatior} milion below average.`
  );
}

*/

/*Type Conversion and coercion

//Type Conversion
const inputYear = "1990";
console.log(inputYear + 10);
console.log(Number(inputYear) + 10);
console.log(typeof Number(inputYear));
console.log(typeof NaN);
console.log(String(8), 8);

//Type Coercion
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);

let n = "1" + 1;
n = n - 1;
console.log(n);

//Type conversion and type coercion assignment

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

*/

/* Falsty and Truthly Values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean(1));
console.log(Boolean("Dan"));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height) {
  console.log("Yey! The variable it's defined");
} else {
  console.log("The variable is undefined");
}

*/
