function isIncreasingNumberByDistance(n, x) {
  // checking input
  if (!Number(n) || n < 0) return false;
  let flag = false;

  // conver number to Array
  const numberList = n.toString().split('').map(Number);

  for (let i = 0; i < numberList.length; i++) {
    let number = numberList[i];
    let nextNumber = numberList[i + 1];

    if (nextNumber - number < 0 || nextNumber === number) {
      return false;
    }

    if (nextNumber - number === x) {
      flag = true;
    }
  }

  return flag;
}

console.log(isIncreasingNumberByDistance(11, 1)); //--> false
console.log(isIncreasingNumberByDistance(123, 1)); //--> true
console.log(isIncreasingNumberByDistance(135, 2)); //--> true
console.log(isIncreasingNumberByDistance(135, 1)); //--> false
