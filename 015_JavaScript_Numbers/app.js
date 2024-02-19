// JavaScript Numbers
const x = 5555555555555555;
const y = 0.6;
const z = 0.7;
const l = (y + z).toFixed(2); // String Value
// console.log(new Number(l));

const a = 10;
const b = 20;
const c = 248;
const d = 'javascript';
const e = c - d;

// console.log(b + a + l + c);
// console.log(c - l);
// console.log(c * l);
// console.log(c / l);

// console.log(e);

/*
let num = 2;
let value = '';
while (num != Infinity) {
  num = num * num;
  value = value + num + '<br>';
}
document.getElementById('title').innerHTML = value;
*/

// console.log(c.toString(16));

const g = 300;
const h = new Number(300);
const r = 324329.374786587;

// console.log(g == h);
// console.log(g === h);

// console.log(r.toPrecision(3));
// console.log(r.toFixed(2));

let newNum = Number.EPSILON;
newNum = Number.MAX_VALUE;
newNum = Number.MIN_VALUE;
newNum = Number.POSITIVE_INFINITY;
newNum = Number.NEGATIVE_INFINITY;
newNum = Number.NaN;
console.log(newNum);
