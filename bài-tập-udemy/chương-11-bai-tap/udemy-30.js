function mostFrequent(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const obj = {};
  let maxkey = numberList[0];

  for (let i = 0; i < numberList.length; i++) {
    const keyNumber = numberList[i];

    obj[keyNumber] = (obj[keyNumber] || 0) + 1;

    if (obj[keyNumber] > obj[maxkey]) {
      maxkey = keyNumber;
    }
  }
  console.log(obj);
  return maxkey;
}

console.log(mostFrequent([2, 2, 3, 3, 2, 3, 3, 2, 2]));
console.log(mostFrequent([2, 1, 3]));
console.log(mostFrequent([1, 2, 3]));
console.log(mostFrequent([3, 2, 1]));

function findAllNumbers(numberList) {
  let newArr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0 && numberList[i] % 2 === 0) {
      let firstEvenNumber = numberList[i]; //4
      for (let j = i + 1; j < numberList.length; j++) {
        if (numberList[j] === firstEvenNumber) {
          newArr.push(numberList[j]);
        }
      }
    }
    break;
  }
  return newArr;
}

console.log(findAllNumbers([1, 4, 5, -6, 4, 5, 4]));

/**
 * i:0
 * 4 => [4,4] => break
 * 5, -6, 4, 5, 4
 *
 * i:1
 * 5
 * -6, 4, 5, 4
 *
 * i:2
 * -6
 * 4, 5, 4
 *
 * i:3
 * 4 => [4,4,4]
 * 5, 4
 */

/**
 * i:0
 * 1
 *
 * ? => trúng điều kiện => phải là số chẵn
 *
 * ! i:1
 * even: 4
 * j: i+1 => j = 2 => 5
 *
 * ! i:2
 * j: i+1 => j = 3 => -6
 *
 * ! i:3
 * j: i+1 => j = 4 => 4 => [4]
 *
 * ! i:4
 * j: i+1 => j = 5 => 5
 *
 * ! i:5
 * j: i+1 => 6 => 4 => [4,4]
 */

function test(numberList, n) {
  for (let i = 0; i < n - 4; i++) {
    if (numberList[i] !== 5 + i) {
      return 5 + i;
    }
  }

  return n;
}
console.log(test([5, 6, 8, 9, 10], 10));

/**
 * i: 0 - 6
 *
 * ! i:0
 * 5 !== 5+0
 *
 * ! i:1
 * 6 !== 5+1
 *
 * ! i:2
 * 8 !== 5 + 2
 * 5 + 2 => 7
 *
 */
