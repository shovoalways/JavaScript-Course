/*
 * JavaScript this
 */

// 'use strict';
// “this” in Global Context
// console.log(this);

var firstName = 'Ali';

// “this” in Regular Functions
function myFunction() {
  return this;
}

// console.log(myFunction());

//“this” in Arrow Functions
const myFunc = () => {
  // console.log(this);
};
myFunc();

// “this” in Event Handlers
const myBtn = document.querySelector('button');
myBtn.addEventListener('click', function () {
  console.log(this);
});

var fName = 'Shovo';
// let fName = 'Shovo';

// “this” in Methods of an Object
const student = {
  fName: 'Ali',
  sInfo: function () {
    // console.log(`${student.fName} loves to read`);
    return `${this.fName} loves to read`;
  },
  // Example using arrow function 👇
  arrowFunction: () => {
    return `${this.fName} loves to read`;
  },
};

console.log(student.sInfo());
student.fName = 'Shovo';
console.log(student.sInfo());
console.log(student.arrowFunction());

/*
 * The object that is exceuting the current function.   
 ? Method 👉 object
 ? Function 👉 (Window, Global)
 */

function newPhone() {
  let phone = 'Android';
  console.log(this.phone);
}
newPhone();

const game = {
  gName: 'NfS',
  gInfo: function () {
    console.log(`Love to play ${this.gName}`);
  },
};

const aGame = {
  gName: 'Car Game',
};
// The bind() method is used to create a new function with a specified value of “this” and initial arguments.
const bindGame = game.gInfo.bind(aGame);
console.log(game.gInfo());
console.log(bindGame());
