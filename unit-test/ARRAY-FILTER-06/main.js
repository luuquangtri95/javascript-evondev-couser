/**
 * Tìm tất cả các số mà bắt đầu bằng chữ số lẻ
 * 
Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số có "chữ số đầu tiên" là chữ số lẻ
 */

function findAllNumbers(numberList) {
  if (!Array.isArray(numberList)) return [];
  const newNumberList = [...numberList];

  return newNumberList.filter((number) => checkItemNumber(number));
}

function checkItemNumber(number) {
  const firstNumber = Number(number.toString().split('').slice(0, 1));
  if (firstNumber % 2 !== 0) {
    return true;
  }
  return false;
}

console.log(findAllNumbers([1, 5, 6])); // [1, 5]
console.log(findAllNumbers([234, 421, 123])); // [123]
