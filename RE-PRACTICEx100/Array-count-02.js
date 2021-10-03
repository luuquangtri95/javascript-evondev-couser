function countNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length) return 0;

  let newArr = [];

  for (let i = 0; i < numberList.length; i++) {
    let currNumber = numberList[i];
    let nextNumber = numberList[i + 1];

    if (currNumber > nextNumber) {
      console.log(nextNumber);
    }
  }

  return newArr.length;
}

console.log(countNumbers([1, 2, 3])); // 0
console.log(countNumbers([1, 2, 3, 10, 9, 8])); // 2 (9 và 8 thoả điều kiện)
