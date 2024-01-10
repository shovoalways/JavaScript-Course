// JavaScript Functions

/* ==============================
* Code-Driven Invocation:
? Functioned is invoked (called)
* Called directly from other parts of the JavaScript code.
* Used for tasks like calculations, data manipulation, and logic execution.
================================ */
function myFunction(fullName, age, dateOfBirth = 1991) {
  console.log(
    'Hello ' + fullName + ' I am ' + age + ' My Date of Bith ' + dateOfBirth
  );
}
myFunction('Ali', 30, 1995);
myFunction('Shovo', 35, true);

/* =============================
* Event-Driven Invocation
? Function When an event occurs
* Triggered by user interactions or system events.
* Common events: button clicks, form submissions, page loads, etc.
=============================== */
function isSubscribed() {
  console.log('Subcribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);

/* ====================================
? Automatic (Self-Invoked) Invocation
* Executes immediately after being defined.
* Commonly used with Immediately Invoked Function Expressions (IIFEs).
======================================= */
(function (message) {
  console.log('I am self-Invokeing Function', message);
})('Hello');

/* ===================
? Function Expression
===================== */
// Return a Value From a Function
// A function expression in JavaScript is a function that is stored as a value, and can be assigned to a variable or passed as an argument to another function.
let maths = function (x, y) {
  console.log('Testing if I am working of not');
  return x * y;
  // return undefined;
};
console.log(maths(3, 4));
console.log(maths(4, 4));
console.log(maths(4, 5));

/*
? Local Variables
? Variables declared within a JavaScript function, become LOCAL to the function.
? Local variables can only be accessed from within the function.
*/
function newFunc() {
  let firstName = 'Ali';
  console.log(firstName);
}

newFunc();

function newFuncs() {
  let firstName = 'Ali';
  console.log(firstName);
}

newFuncs();

/* ===================
? Anonymous Function
===================== */
let numbers = [4, 5, 6, 7, 8];
let sqNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(sqNumbers);

/* ===================
? Arrow Functions
===================== */

/*
let add = function (x, y) {
  return x + y;
};
console.log(add(5, 6));
*/
let add = (x, y) => x + y;
console.log(add(5, 6));

/* ===================
? Nested Functions
===================== */
function greet(firstName) {
  function sayHello() {
    alert('Hello ' + firstName);
  }
  return sayHello();
}
greet('Shovo');
