// Introduction to Async JavaScript

/*
? Synchoronous 
? Single Threaded 
*/

// function a() {
//   console.log('a');
// }
// console.log('End');
// a();

// const a = function () {
//   console.log('Function Working');
//   let aTime = new Date().getTime();
//   while (aTime + 5000 >= new Date().getTime());
//   console.log('Competed');
// };
// console.log('First Line');
// a();
// console.log('Last Line');

// asynchronous JavaScript
/*
 * setTimeout
 * setInterval
 * promises
 * fetch
 * axios
 * XMLHttpRecquest
 */
// setTimeout(callback, timeinms);
// console.log('Hello');
// console.log('Hello2');
// setTimeout(function () {
//   console.log('Hello3');
// }, 5000);
// console.log('Hello4');
// console.log('Hello5');

/*
let coffee = new Promise((res, rej) => {
  if (false) {
    return res(); // Resolved
  } else {
    return rej(); // Rejected
  }
});
coffee
  .then(function () {
    console.log('Resolved');
  })
  .catch(function () {
    console.log('Rejected');
  });
*/
/*
let mathAns = new Promise((res, rej) => {
  let n = Math.floor(Math.random() * 10);
  if (n < 5) {
    return res();
  } else {
    return rej();
  }
});
mathAns
  .then(function () {
    console.log('Bellow');
  })
  .catch(function () {
    console.log('Above');
  });
*/

// const step1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('Step One Done');
//   }, 5000);
// });

// const step2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('Step Two Done');
//   }, 3000);
// });

// step1.then(function (res) {
//   console.log(res);
// });

// step2.then(function (res) {
//   console.log(res);
// });
// Promise.all([step1, step2]).then(res => console.log(res));
// Promise.race([step1, step2]).then(res => console.log(res));

// let promise1 = new Promise((res, rej) => {
//   return res('Step One Done');
// });

// let promise2 = promise1.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res('Step Two Done');
//   });
// });
// promise2.then(function (data) {
//   console.log(data);
// });

// Understanding Fetch

// function randomUser() {
//   fetch(`https://randomuser.me/api/`)
//     .then(function (raw) {
//       return raw.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function () {
//       console.log('No Data Found');
//     });
// }
// randomUser();

// async function myFunction() {
//   return 'Hello';
// }
// console.log(myFunction());

// function myFunction() {
//   return Promise.resolve('Hello');
// }
// console.log(myFunction());

async function randomUser() {
  let urlAPI = await fetch(`https://randomuser.me/api/`);
  let rawData = await urlAPI.json();
  // console.log(rawData);
  console.log(
    `${rawData.results[0].name.title} ${rawData.results[0].name.first} ${rawData.results[0].name.last}`
  );
  console.log(`${rawData.results[0].gender}`);
  console.log(`${rawData.results[0].location.country}`);
}
randomUser();
