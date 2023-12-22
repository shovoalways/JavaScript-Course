// JavaScript Variables
/*
 * JavaScript variable names are case-sensitive
 * Variable names cannot contain spaces.
 * Variables cannot be the same as reserved keywords such as `if` or `const`.
 * By convention, JavaScript variable names are written in camelCase.
 * Variables should be given descriptive names that indicate their content and usage (e.g. `sellingPrice` and `costPrice` rather than `x` and `y`).
 */

var fruits = 'Graps';
let newFruits = 'Graps';
const newfruits = 'Graps';

// let firstName = 'Ali';
let firstName = 'Ali';
firstName = 'Shovo';

let age = 30;

document.getElementById('title').innerText = firstName;

// console.log(firstName);
// console.log(age);

/*
 * var JavaScript Variable
? var Hosted
 * You can redeclare
 * You can reassign
 ? Global Scooped
 */
var a = 7;
a = 11;
console.log(a);

{
  var lastName = 'Hossain';
  console.log(lastName);
  console.log(a);
}
console.log(lastName);
// var lastName;
// console.log(lastName);
// lastName = 'Hossain';

/*
 * let JavaScript Variable
 ! You can not redeclare
 * You can reassign
 ? Block Scooped
 */

let b = 10;
b = 11;
console.log(b);

// console.log(student);
// let student = 'Some One';

{
  let student = 'Some One';
  console.log(student);
}

/*
 * const JavaScript Variable
 ! You can not redeclare
 ! You can not reassign
 ? Block Scooped
 */

const c = 10;
// const c = 11;

const people = {
  personName: 'Ali',
  age: 30,
};
people.dateOfBirth = 1991;
people.age = 1991;

// people = 'Bangladesh';
console.log(c);
console.log(people);

{
  const country = 'Bangladesh';
  console.log(country);
}
const country = 'Bangladesh';

let story = "I'm ali Hossain";
let info = `I am from ${country}`;
console.log(story);
console.log(story + info);

// console.log(
//   `Like the crisp bite of a freshly harvested ${fruits}, innovation is the core that fuels ${fruits}'s extraordinary journey. In the orchard of technology, ${fruits}'s relentless pursuit of excellence bears fruit tenfold, shaping the world with each crisp idea. Every ${fruits} product is a testament to the company's tenacious commitment to blending artistry with technology. Through tenacious innovation, ${fruits} not only redefines industries but also crafts experiences that are as polished as the surface of a perfectly ripe ${fruits}. It's in the symmetry of the ${fruits} logo, the precision of the hardware, and the elegance of the software that the tenacious spirit of ${fruits} truly shines. `
// );
