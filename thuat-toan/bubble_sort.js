const arr = [10, 9, 6, 8, 7, 5];

function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      let currNumber = numberList[i];
      let nextNumber = numberList[j];

      let temp;
      if (currNumber > nextNumber) {
        temp = numberList[i];
        numberList[i] = numberList[j];
        numberList[j] = temp;
      }
    }
  }

  return numberList;
}

console.log(bubbleSort(arr));

/**
 * 10 9 6 8 7 5 => length 6
 * ! i = 0
 * ? j = 1;
 * 9 10 6 8 7 5
 * j = 2;
 * 9 6 10 8 7 5
 * j = 3
 * 9 6 8 10 7 5
 * j = 4
 * 9 6 8 7 10 5
 * j = 5
 * 9 6 8 7 5 10
 *
 * ! i = 1
 * ? j = 2
 * 6 9 8 7 5 10
 * j = 3
 * 6 8 9 7 5 10
 * j = 4
 * 6 8 7 9 5 10
 * j = 5
 * 6 8 7 5 9 10
 *
 * ! i = 2
 * ? j = 3
 * 6 8 7 5 9 10
 * j = 4
 * 6 7 8 5 9 10
 * j = 5
 * 6 7 5 8 9 10
 *
 * ! i = 3
 * ? j = 4
 * 6 7 5 8 9 10
 * j = 5
 * 6 5 7 8 9 10
 *
 * ! i = 4
 * 5 6 7 8 9 10
 */

function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] > numberList[j + 1]) {
        let temp = numberList[j];
        numberList[j] = numberList[j + 1];
        numberList[j + 1] = temp;
      }
    }
  }

  return numberList;
}

console.log(bubbleSort([2, 1, 5, 7, 8]));

/**
 * length: 5
 * ! i = 4
 * ? j = 0
 * 2 > 1 => 1 2 5 7 8
 * ? j = 1
 * 2 > 5 => 1 2 5 7 8
 * ? j = 2
 * 5 > 7 => 1 2 5 7 8
 * ? j = 3
 * 7  > 8 => 1 2 5 7 8
 *
 * ! i = 3
 * ? j = 0
 * 1 > 2 => 1 2 5 7 8
 * ? j = 1
 * 2 > 5 => 1 2 5 7 8
 * ? j = 2
 * 5 > 7 => 1 2 5 7 8
 */
