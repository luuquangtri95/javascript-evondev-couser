function isDecreasingNumber(n) {
  // checking input
  if (!Number(n) || n < 0) return false;

  // conver number to Arr
  const numberList = n.toString().split('').map(Number);

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    let nextNumber = numberList[i + 1];

    if (number - nextNumber < 0 || number === nextNumber) {
      return false;
    }

    return true;
  }
}

console.log(isDecreasingNumber(11)); //--> false
console.log(isDecreasingNumber(321)); //--> true
console.log(isDecreasingNumber(12321)); //--> false
