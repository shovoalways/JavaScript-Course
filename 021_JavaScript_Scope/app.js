/*
 * JavaScript Scope
 */

let car = 'Bentley'; // Global Scope

console.log(car);

if (true) {
  console.log(car);
  let bike = 'R15';
  /*
  * Local Scope
  ! Locally Scope variables are only accessible inside the scope that they've been defined and declared
  ? Local Scope provides with some level of security to our code
  */
  console.log(bike);
  if (true) {
    let fish = 'Rui';
    console.log(fish);
  }
  // console.log(fish); // Not Accessible
}
// console.log(bike);

function firstName() {
  let cycle = 'Duronto';
  cycle = 'Hero';
  console.log(cycle);
  console.log(car);

  // Automatically Global Variable
  person = 'Ali Hossain'; // Not Recomanded
  console.log(person);
  function lastName() {
    let fruits = 'Mango';
    console.log(cycle);
    console.log(fruits);
  }
  // console.log(fruits); // Not Accessible
  lastName();
}
firstName();
console.log(person);

let x = 100;
console.log(x);
function main() {
  let x = 10;
  console.log(x);
}
main();
console.log(x);

// Automatically Global Variable
/*
? You can access this outside scope
! It will not work with strict Mode]
! Its a bad prectice
*/
function autoGlobal() {
  name = 'Ali Hossain';
}
autoGlobal();
console.log(name);
