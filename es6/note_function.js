/**
 * ! default parameter
 */

function sum(a = 5, b = 10) {
  return a + b;
}

sum(undefined, undefined); // "undefined" tương đương k truyền value
sum(undefined, null); // "null" ở đây có truyền giá trị, nhưng khi + null sẽ chuyển về 0
// 5 + null = 5 + Number(null) = 5 + 0 = 5
// 5 + undefined = 5 + Number(undefined) = 5 + NaN = NaN

/**
 * ! rest oparator
 */

//ES5

function sum() {
  let sum = 0;

  console.log(arguments); // Array like object

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

function sum() {
  return [...arguments].reduce((total, number) => total + number, 0);
}

console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

//todo : ES6 rest => thường dùng

function sum(...numberList) {
  // rest / group
  console.log(name);
  return numberList.reduce((total, number) => total + number, 0);
}
console.log(sum('easy', 1));
console.log(sum('easy', 1, 2));
console.log(sum('easy', 1, 2, 3));

const numberList = [1, 2, 3];
console.log(sum(...numberList)); // spread / expand

/**
 * các loại function
 *
 * function sum() // declaration
 * const sum = function() // expression
 * const sum = () => {} // arrow function
 */
