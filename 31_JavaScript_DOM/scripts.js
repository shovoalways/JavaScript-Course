// console.log(window);
// console.log(window.document);
// console.log(document);
// console.log(document.baseURI);
// console.log(document.links);
// console.log(document.links[1]);

// document.querySelector('.title').innerText = 'Watching movie is fun';
// document.querySelector('.title').textContent = 'Watching movie is fun';
// document.querySelector('.title').innerHTML = '<span>Hacker 😂</span>';

// console.log(document.querySelector('.title').id);
// console.log(document.querySelector('.title').className);

// console.log(document.querySelector('.title').getAttribute('id'));

// document.querySelector('p').setAttribute('class', 'text-red text-xl');
// document.getElementById('title').setAttribute('class', 'text-red text-xl');

// const nothing = [0, 1, 2, 3];

const menuItem = document.querySelectorAll('a');
// menuItem[0].style.color = '#fff';
// menuItem[1].style.color = '#fff';
menuItem.forEach(function (i) {
  i.style.color = '#fff';
});

const cusClass = document.getElementsByClassName('title');

// cusClass.forEach(function (i) {
//   console.log(i);
// });

const convertedClass = Array.from(cusClass);

// for (let i = 0; i < convertedClass.length; i++) {
//   console.log(convertedClass[i]);
// }

convertedClass.forEach(function (i) {
  i.style.color = '#ff0000';
});

document.getElementsByTagName();
