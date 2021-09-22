/**
 * map(): duêtj qua từng phần tử trong mảng và trả ra 1 mảng mới mà không thay đổi mảng ban đầu
 */

const listNumber = [1, 2, 3, 4, 5];
//tra ra 1 mảng mới mà các số trong mảng cũ nhân 2
const listNumberDouble = listNumber.map((value, index) => {
  return value * 2;
});

console.log(listNumberDouble);

// hậu nguyễn
/**
 * biến đỔi phần tử này sang phần tử khác (ánh xạ)
 * =>> số lượng phần tử không đổi
 * return 1 mảng mới
 */

const numberList = [1, 2, 3, 4];
console.log(numberList.map((x) => x * 2));

const wordList = ['easy', 'frontend'];
console.log(wordList.map((x) => `super-${x}`));

/**
 * map(mappingFn)
 * map(transformFn)
 * map(callbackFn)
 */

function map(numberList, mappingFn) {
  if (!Array.isArray(numberList) || typeof mappingFn !== 'function') return undefined;
  let newArr = [];

  for (let i = 0; i < numberList.length; i++) {
    const element = numberList[i];
    const newElement = mappingFn(element, i);
    newArr.push(newElement);
  }

  return newArr;
}

function mappingFn(element, idx) {
  if (idx % 2) {
    return element * 2;
  } else {
    return element * 3;
  }
}

// map([1, 2, 3, 4], mappingFn);

console.log(map([1, 2, 3], (x) => x + 1));
console.log(map([1, 2, 3], (x, idx) => (idx % 2 === 0 ? x + 1 : x * 2)));
