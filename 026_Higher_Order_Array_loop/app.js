/*
 * JavaScript Higher Order Array Loop
 */

// ['', '', '', 1, true][({}, {}, {})];

const fruits = ['Mango', 'Banana', 'Orange', 'Graps'];

for (let fruit = 0; fruit < fruits.length; fruit++) {
  // console.log(fruits[fruit]);
}

for (const fruit of fruits) {
  // console.log(fruit);
}

const myName = 'Ali Hossain';
for (const name of myName) {
  // console.log(`Each char is ${name}`);
}

const country = new Map([
  ['Bn', 'Bangladesh'],
  ['In', 'India'],
  ['Pk', 'Pakistan'],
  ['Np', 'Nepal'],
]);

country.set('Vu', 'Vutan');

// country.set('Bn', 'Bangladesh');

// for (const key of country) {
//   console.log(key);
// }

for (const [key, value] of country) {
  // console.log(key, ':', value);
}

const myCountry = {
  Bn: 'Bangladesh',
  In: 'India',
  Pk: 'Pakistan',
  Np: 'Nepal',
};
// for (const key of myCountry) {
//   console.log(key);
// }

// for (const key in myCountry) {
//   console.log(key, ':', myCountry[key]);
// }

for (const key of Object.keys(myCountry)) {
  // console.log(key);
}

for (const key in fruits) {
  // console.log(fruits[key]);
}

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// fruits.forEach(fruit => {
//   console.log(fruit);
// });

// function myFruit(fruit) {
//   console.log(fruit);
// }
// fruits.forEach(myFruit);

fruits.forEach((fruit, index, arr) => {
  // console.log(fruit, index, arr);
});

const stack = [
  {
    name: 'MERN Stack',
    property: 'Mongo, Express, React, Node',
  },
  {
    name: 'Laravel',
    property: 'JavaScript, Vue, PHP, Laravel, MySQL',
  },
  {
    name: 'WordPress',
    property: 'JavaScript, PHP, WordPress, MySQL',
  },
];
stack.forEach(info => {
  console.log(`Want to learn ${info.name}? Learn this ${info.property}`);
});
