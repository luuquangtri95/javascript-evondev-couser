// function isSymetricNumber(n) {
//   if (n < 0) return false;

//   let remaining = n;
//   let newNumber = 0;

//   while (remaining > 0) {
//     const currentNumber = remaining % 10;
//     newNumber = newNumber * 10 + currentNumber;

//     remaining = Math.trunc(remaining / 10);
//   }

//   return newNumber === n;
// }

// console.log(isSymetricNumber(123));

// /**
//  * 123
//  * 123 % 10 = 3 => chia lấy dư
//  * 123 / 10 = 12.... =>> chia lấy nguyên
//  */

function test(numberList) {
  let newArr = [];

  for (let i = 0; i < numberList.length - 1; i++) {
    console.log(i);
    if (numberList[i] < numberList[i + 1]) {
      newArr.push(numberList[i]);
    }
  }

  return newArr;
}

console.log(test([1, 2, 3, 4, 5]));

function capitalizeStr(str) {
  if (str.length === 0) return '';
  let stringArrList = [];

  const strArr = str.toLowerCase().split(' ');
  for (let value of strArr) {
    stringArrList.push(firstLetterUpperCase(value));
  }

  return stringArrList.join(' ').trim();
}

function firstLetterUpperCase(str) {
  let [firstLetter, ...restLetter] = str.split('');

  return `${firstLetter.toUpperCase()}${restLetter.join('')}`;
}
console.log(capitalizeStr('mr evon dep trai vo dich thien ha'));

var obj = {
  name: 'Holly',
  age: 35,
  role: 'producer',
};

function converObjToArray(obj) {
  if (!Object(obj)) return false;

  return Object.keys(obj).map((key) => [key, obj[key]]);
}

console.log(converObjToArray(obj));
