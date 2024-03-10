// JavaScript Memory

/*
? Call Stack
! Primitive Data Type
* String, Number, Boolean, Undefined, Null, Symb, BigInt
*/
let fullName = 'Ali Hossain';

let webDeveloper = fullName;
webDeveloper = 'Shovo';

// console.log(fullName);
// console.log(webDeveloper);

/*
? Heap
! Non Primitive Data Type
* Object, Array
*/

let student = {
  name: 'Ali',
  age: 30,
};

let people = student;
// people = {
//   name: 'Shovo',
//   age: 31,
// };
people.name = 'Shovo';
people.age = 31;

let car = ['BMW', 'Audi'];

let newCar = car;
newCar[0] = 'Toyota';

console.log(car);
console.log(newCar);
