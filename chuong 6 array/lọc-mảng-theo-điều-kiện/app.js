/**
 * filter(callbackFn) lọc mảng theo điều kiện cho trước
 * return 1 mảng mới
 */

const numberList = [1, 3, 2, 6, 7];

numberList.filter((x) => x % 2 === 0); // [2,6]
numberList.filter((x) => x > 2); // [3,6,7]
numberList.filter((x) => x < 10 || x % 5 === 0);

const wordList = ['easy', 'frontend', 'easier'];
wordList.filter((x) => x.startsWith('ea')); //["easy","easier"]

// cài đặt hàm filter
const numberList = [1, 3, 2, 6, 7];
function filter(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return false;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callbackFn(element, i)) {
      newArr.push(element);
    }
  }
  return newArr;
}
function callbackFn(element, i) {
  if (element % 2 === 0) {
    return element;
  }
}

console.log(filter(numberList, callbackFn));
