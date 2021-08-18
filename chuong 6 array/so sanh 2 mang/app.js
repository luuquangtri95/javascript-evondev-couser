// cách so sánh 2 mảng

/**
 * JSON.stringify(value): chuyển giá trị sang dưới dạng json string
 * JSON.stringify([1,2,3]) =>> "[1,2,3]"
 *
 * JSON.parse(value): JSON.parse("[1,2,3]") =>> [1,2,3]
 */

const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); //false

const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str); //true
