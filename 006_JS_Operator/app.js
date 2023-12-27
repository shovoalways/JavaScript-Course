// JavaScript Operator

/*
 * Arithmemtic Operator
 */
let a = 50;
let b = 20;
let c = a % b;

console.log(c);
/*
let userInput = prompt('Enter a Number');
let number = parseInt(userInput);

if (number % 2 === 0) {
  console.log(`${number} is even number`);
} else {
  console.log(`${number} is odd number`);
}
*/

let x = 10;
x = x + 1;
x++; // Increment
console.log(`Increment ${x}`);

let y = 20;
y = y - 1;
y--; // Decrement
console.log(`Decrement ${y}`);

/*
 * Comparison Operator
 */
let p = 5;
let q = 10;
console.log(p == q); // equal to
console.log(p === q); // equal value and equal type
console.log(p !== q); //not equal value or not equal type
console.log(p > q); // Greater Than
console.log(p < q); // Less Than
console.log(p <= q); // Less then Equal to
console.log(p >= q); // Greater Than Equal to

/*
 * Logical Operator
 */

// && AND Operator
// || OR Operator
// !(p<q) NOT Operator

/*
 * Assignment Operator
 */

let j = 10;
let k = 20;
j = j + k;
j += k;

j = j - k;
j -= k;

j = j * k;
j *= k;

j = j / k;
j /= k;
j %= k;
j **= k;

console.log(j);

/*
 * Conditional (Ternary) Operator
 */
let t = a < b ? 'True' : 'False';
let g = a < b ? true : false;
console.log(t);

if (a > b) console.log('True');
else console.log('False');

let firstName = 'Ali';
