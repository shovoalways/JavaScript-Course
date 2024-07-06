/*
 * JavaScript Filter Map and reduce
 */
const fruits = ['Mango', 'Banana', 'Orange', 'Graps'];
const country = new Map([
  ['Bn', 'Bangladesh'],
  ['In', 'India'],
  ['Pk', 'Pakistan'],
  ['Np', 'Nepal'],
]);

country.set('Bu', 'Butan');
const myCountry = {
  Bn: 'Bangladesh',
  In: 'India',
  Pk: 'Pakistan',
  Np: 'Nepal',
};

const stack = [
  {
    name: 'MERN Stack',
    property: 'Mongo, Express, React, Node',
    foundation: 'JavaScript',
    tranding: true,
    price: 5000,
  },
  {
    name: 'MEAN Stack',
    property: 'Mongo, Express, Angular, Node',
    foundation: 'JavaScript',
    tranding: false,
    price: 3000,
  },
  {
    name: 'Laravel',
    property: 'JavaScript, Vue, PHP, Laravel, MySQL',
    foundation: 'PHP',
    tranding: true,
    price: 4000,
  },
  {
    name: 'WordPress',
    property: 'JavaScript, PHP, WordPress, MySQL',
    foundation: 'PHP',
    tranding: false,
    price: 3500,
  },
];

// fruits.forEach(fruit => console.log(fruit));
const fruitCapB = fruits.filter(fruit => fruit.toLowerCase().startsWith('b'));

const fruitsLen5 = fruits.filter(fruit => fruit.length === 5);

const fruitStartG = fruits.filter(fruit =>
  fruit.toLocaleLowerCase().includes('g')
);
// console.log(fruitStartG);

const numbers = [1, 2, 3, 4, 5, 6, 7];
const big5 = numbers.filter(num => {
  return num > 5;
});
// console.log(big5);

const forNums = [];
numbers.forEach(num => {
  if (num > 5) {
    forNums.push(num);
  }
});
// console.log(forNums);

let userStack = stack.filter(sk => sk.foundation === 'JavaScript');

// console.log(userStack);

// const myNum = numbers.map(num => num + 5);
const myNum = numbers
  .map(num => num + 5)
  .map(num => num * 5)
  .filter(num => num >= 50);

// console.log(myNum);

/*
 * Reduce


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10


 */

// const myTotal = numbers.reduce((acc, curValue) => acc + curValue, 0);
const myTotal = numbers.reduce((acc, curValue) => {
  // console.log(`Accumulator ${acc} and Current Value ${curValue}`);
  return acc + curValue;
}, 0);

// console.log(myTotal);

const coursePrice = stack.reduce((acc, course) => acc + course.price, 0);
console.log(coursePrice);
