/**
 * reduce((a,b)=>{}, initialize value): nó sẽ gom phần tử trong mảng thành 1 giá trị
 */
const listNumber = [1, 2, 3, 4, 5];
const reduce = listNumber.reduce((a, b) => {
  return a + b;
}, 0);

console.log(reduce);

// hậu nguyễn

/**
 * reduce(callbackFn, initialValue)
 */

const result = [2, 4, 6].reduce((sum, number) => sum + number, 0);
console.log(result);

/**
 * tự code hàm reduce dự vào for...i
 * rules:
 * -  arr.length = 0 va inititalValue === undefined -> throw error
 * -  arr.length = 0 and initialValue !== undefined -> return initialValue
 */
function reduce(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
    throw new Error('invalid parameter');
  }
  // arr is an array
  if (arr.length === 0) {
    if (initialValue === undefined) throw new Error('should have initalvalue when arr is empty');
    return initialValue;
  }
  const hasInitialValue = initialValue !== undefined;
  const accumulator = hasInitialValue ? initialValue : arr[0];
}
