// JavaScript Date
const myDate = new Date();

// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(
//   myDate.toLocaleString('default', {
//     weekday: 'long',
//   })
// );

// let updateDate = new Date(2024, 3, 5);
// let updateDate = new Date(2024, 3, 5, 11, 34, 25, 0);
let updateDate = new Date('01-15-2002');
// console.log(updateDate);

let myTime = Date.now();
/*
function simpleTask() {
  for (let step = 0; step < 100000; step++) {
    console.log('Walking east to one step');
  }
}
let startTime = Date.now();
simpleTask();
let endTime = Date.now();
console.log(`The task took ${endTime - startTime} millisecond to complete`);
*/
console.log(Math.floor(myTime / 1000));

console.log(myDate.getDate());
console.log(myDate.getFullYear());
