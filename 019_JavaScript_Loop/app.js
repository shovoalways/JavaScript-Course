// JavaScript Loop

let car = ['BMW', 'Volvo', 'Toyota', 'Ford', 'Tesla', 'Lamburgini'];
car.push('Saab');

// console.log(car[0]);
// console.log(car[1]);

// for (let i = 0; i < car.length; i++) {
//   console.log(car[i]);
// }

// For In Loop
let person = {
  name: 'Ali',
  age: 30,
  country: 'Bangladesh',
  job: 'Web Developer',
};

// for (let i in person) {
//   let capLetter = i.charAt(0).toUpperCase() + i.slice(1);
//   console.log(capLetter + ': ' + person[i]);
// }

// forEach Method
// car.forEach(function (i) {
//   console.log(i);
// });

// For of

// for (let i of car) {
//   console.log(i);
// }

// While loop
let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}
