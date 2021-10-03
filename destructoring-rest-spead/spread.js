// !rest parameter

function logger(a, b, ...params) {
  console.log(params);
}

console.log(logger(1, 2, 3, 4)); //[1,2,3,4]
console.log(logger(1, 2, 3, 4)); //[3,4]

function logger({ name, price, ...rest }) {
  console.log(name);
  console.log(price);
  console.log(rest);
}

console.log(
  logger({
    name: 'trie',
    price: 1000,
    desc: 'abc',
  })
);

// =>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SPREAD

// ! spread voi array
let arr1 = ['js', 'java', 'php'];
let arr2 = ['dart', 'python'];

let arr3 = [...arr1, ...arr2];
let arr4 = [...arr2, ...arr1];
console.log(arr3);

// ! spread voi obj
let obj1 = {
  name: 'tri',
};

let obj2 = {
  price: '100',
};

let obj3 = {
  ...obj1,
  ...obj2,
};

console.log(obj3);
