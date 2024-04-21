/*
 * JavaScript Hoisting
 */

// person = 'Ali Hossain';

// console.log(typeof person);

// Declaration
var x;

// Initialisation
x = 10;

// Usage
console.log(x);

/*
let y = 20;
console.log(y);
*/

z = 30;
console.log(z);
var z;

/*
let game;
console.log(game);

game = 'Cricket';
console.log(game);
*/

// game = 'Cricket';
// let game;
const game = 'Cricket';
console.log(game);

/*
 * JavaScript Function Hoisting
 */

car('R15'); // Everything is fine
function car(bike) {
  console.log(`I love to have a ${bike}.`);
}

student('Ali'); // ReferenceError
let student = function (fname) {
  console.log(`My name is ${fname}`);
};
