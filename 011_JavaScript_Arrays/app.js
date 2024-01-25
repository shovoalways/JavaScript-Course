// JavaScript Arrays

// const language2 = new Array('HTML', 'CSS', 'JavaScript', 'PHP', true, 50);

const language = ['HTML', 'CSS', 'JavaScript', 'PHP', true, 50];
language[4] = 'Tailwind CSS';
language[5] = 'react.js';
language[6] = 'vue.js';
language[7] = 'laravel';
language[10] = 'Bootstrap';

// First Item
// console.log(language[0]);
// Last Item
console.log(language[language.length - 1]);
// Delete or Remove Last Item
language.pop();
// ADD last item
language.push('Angular.js');
// Add first
language.unshift('Basic Computing');
// Delete first item
language.shift();

console.log(language);
// console.log(language.at(5));
// console.log(language.toString());
// console.log(language.join(' * '));
// console.log(language.length);
// console.log(language[2]);

const person = [];
person['firstName'] = 'Ali';
person['lastName'] = 'Hossain';
person[2] = 35;
// console.log(person.length);
// console.log(person);
// console.log(person[2]);

// const num = [20];
const num = new Array(20);

// console.log(num);

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const p = [2, 3, 4];
const z = x.concat(y, p);
// console.log(z);

const a = [
  [1, 2, 3, [3, 5, 8]],
  [4, 5, 6],
  [2, 4, 6],
];
// console.log(a);
// console.log(a.flat());
language.splice(2, 0, 'info', 'info2');
language.splice(2, 2);
console.log(language);
