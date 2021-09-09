// initialize greeting function
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Invoke the function
greet('Daniel');

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// const result = multiply(5, 5);

// console.log(result);

const sum = function(a,b) {
    return a + b;
}

console.log(sum(20,5));

const multiply = (num1, num2) => num1 * num2;
// const mutiply2 = (a,b) => {
//     return a * b;
// }

const americas = {
    name: 'The United State of America',
    yearFounded: 1776,
    details: {
        symbol: 'eagle',
        currecy: 'USD',
        printDetails() {
            console.log(`The symbol is the ${this.symbol} and the currency is ${this.currecy}`)
        }
    },
    decribe(){
        console.log(`${this.name} was founded in ${this.yearFounded}`);
    }
}

americas.decribe();
americas.details.printDetails();

function Country(name, yearFounded) {
    this.name = name;
    this.yearFounded = yearFounded;

    this.decribe = function() {
        console.log(`${this.name} was founded in ${this.yearFounded}`);
    }
}

const america = new Country('The United States of America', 1776);

america.decribe();

class State {
    constructor(name, yearFounded) {
        this.name = name;
        this.yearFounded = yearFounded;
    }
    describe() {
        console.log(`${this.name} was founded in ${this.yearFounded}`);
    }
}

const usa = new State('The United States of America', 1776);

usa.describe();

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
}

function summary() {
    console.log(`${this.title} was written by ${this.author}`);
}

summary.call(book);
summary.apply(book);



function printThis() {
    console.log(this);
}

printThis.call(book);
printThis.apply(book);

function longerSummary(genre, year) {
    console.log(`${this.title} was writter by ${this.author}. It is a ${genre} novel written in ${year}`);
}

longerSummary.call(book, 'fantasy', '1949');
longerSummary.apply(book, ['fantasy', '1949']);

const myBook = summary.bind(book);

myBook();

const book2 = {
    title: 1984,
    author: 'George Orwell'
}

myBook.bind(book2);

myBook();

const whoAmI = {
    name: 'Daniel',
    regularFunction: function() {
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name);
    }
}

whoAmI.regularFunction();
whoAmI.arrowFunction();

const button = document.createElement('button');
button.textContent = 'Click me';
document.body.append(button);

class Display {
    constructor() {
        this.buttonText = 'Clicked!'
        button.addEventListener('click', event => {
            event.target.textContent = this.buttonText;
        })
    }
}

new Display();

// let username = ''

function showMessage(message) {
    message = message || 'empty message'
    alert(message)
}

showMessage();

function showCount(count) {
    // if count is undefined o null, show 'unknown'
    alert(count ?? 'unknown');
}

showCount(0);
showCount(null);
showCount();

// "get" - return a value
// "calc" - calculate something
// "create" - create something
// "set" - set a value
// "check" - check something and return a boolean, etc

const getCars = (name = 'Ford', year = '2020', color = 'Gray') => {
    return {
        name,
        color,
        year
    };
}

getCars('Ford', null, 'Blue')