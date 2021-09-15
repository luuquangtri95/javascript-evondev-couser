/**
 * Tìm các mảng con có chứa số dương chẳn liên tiếp
Viết hàm findAllPositiveEvenSubArr(numberList) để tìm ra tất cả các mảng con chỉ chứa các số dương
chẳn.
 */

function findAllPositiveEvenSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  // create subArrlist and subArr
  let subArrList = [];
  let subArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];

    // check number even push subArr
    if (number % 2 === 0) {
      subArr.push(number);
    }

    if (subArr.length > 0 && (number % 2 === 1 || i === numberList.length - 1)) {
      subArrList.push(subArr);
      // reset subArr if number is odd
      subArr = [];
    }
  }

  // return subArrlist
  return subArrList;
}
console.log(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20]));
