// JavaScript Data Types
/*
? JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol => I will create a separate video on this 😊
8. Object
*/

/*
 * You can use single or double quotes
 * The sequence \'  inserts a single quote in a string
 */
let firstName = 'Ali';
firstName = 'Shovo';
// let fullName = 'My Name is \'Ali\'';
let fullName = "My Name is 'Ali'";

let finalName = `My Name is ${firstName}`;

/*
 * JavaScript has only one type of number
 */
let age = 30; // Without Decimals
let ageNew = 30.5; // With Decimals
let age2 = finalName + 5 + 10;
let calculation = age + age2 + firstName + age + age2;
/*
 ? BigInt
 * To create a BigInt, append n to the end of an integer or call BigInt()
 * BigInt can not mix with other data types
 * A BigInt can not have decimals
 */
let numberBig = 9n;
let numberBig2 = BigInt(age);

/*
 * Booleans can only have two values: true or false
 */
let ifAdult = false;

let someInfo = null;

/*
 * JavaScript arrays are written with square brackets.
 * Array items are separated by commas.
 */
let fruits = ['Apple', 'Lemon', 'Peer', 'Oranges', 32, true.undefined, null];

fruits[4] = 'Mango';

/*
 * JavaScript objects are written with curly braces {}
 */
let student = {
  fullName: 'Ali Hossain',
  age: 32,
  dateOfBirth: 1992,
};
console.log(finalName);
console.log(student);
console.log(typeof student);
