function sumAllMinDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const newNumberList = [...numberList];
  let sum = 0;

  for (let number of newNumberList) {
    console.log(number);
    let digitNumber = Array.from(number.toString()).map(Number);
    sum += Math.min(...digitNumber);
  }

  return sum;
}

console.log(sumAllMinDigits([123]));
console.log(sumAllMinDigits([123, 532]));

/**
 * sum = 0
 * ! i:0
 * digitNumber = [1,2,3]
 * sum = sum + Math.min(1,2,3) = 0 + 1 = 1
 */
