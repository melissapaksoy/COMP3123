// MELISSA PAKSOY
// 100966275


//EX1 

function greeting() {
  const wrestlers = ["Randy Savage", "Ric Flair", "Hulk Hogan"];
  const greet = (name) => `Hello ${name}`;
  for (const w of wrestlers) {
    console.log(greet(w));
  }
}

greeting();

//EX2

function capitalizeFLetter (str = "") {
    if (!str) return str;
const [firstLetter, ...lastLetter] = str;
return firstLetter.toUpperCase() + lastLetter.join("").toLowerCase();
}

console.log(capitalizeFLetter('fooBar'));
console.log(capitalizeFLetter('nodeJs'));


//EX3

  const colors = ["red", "green", "blue"];
  const capitalizedColors = colors.map(capitalizeFLetter);
  console.log(capitalizedColors);


//EX4

var values = [1, 60, 34, 30, 20, 5];

function filterLessThan20(num) {
  return num.filter((n) => n < 20);
}

console.log(filterLessThan20(values));


//EX5


const array = [1,2,3,4]

const calculateSum = (arr) => arr.reduce((a,b) => a + b, 0);
const calculateProduct = (arr) => arr.reduce((a,b) => a * b, 1 );

console.log(calculateSum(array));
console.log(calculateProduct(array));

//EX6

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  details() {
    return `Model: ${this.model}, Year: ${this.year}`
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  info() {
    return `${this.model} has a balance of $${this.balance}`
  }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());