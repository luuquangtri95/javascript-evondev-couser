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

function isDecreasingNumber(n) {
  let remaining = n;
  while (remaining >= 10) {
    let currNumber = remaining % 10; // 1

    remaining = Math.trunc(remaining / 10); // 1232

    let remainingNumber = remaining % 10; // 2

    if (currNumber > remainingNumber || currNumber === remainingNumber) return false;
  }

  return true;
}

console.log(isDecreasingNumber(11)); //--> false
console.log(isDecreasingNumber(321)); //--> true
console.log(isDecreasingNumber(12321)); //--> false
