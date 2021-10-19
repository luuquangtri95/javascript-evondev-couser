function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // swap
      let temp;

      if (numberList[j] > numberList[j + 1]) {
        // temp = numberList[j];
        // numberList[j] = numberList[j + 1];
        // numberList[j + 1] = temp;

        // [x, y] = [y, x];
        [numberList[j], numberList[j + 1]] = [numberList[j + 1], numberList[j]];
      }
    }
  }

  return numberList;
}
console.log(bubbleSort([1, 5, 2, 3, 8]));

/**
 *  !i: 4
 *  ? j: 0
 * 1 > 5 => sai
 * ? j: 1
 * 5 > 2 => đúng => swap => 1 2 5 3 8
 * ? j: 2
 * 5 > 3 => đúng => swap => 1 2 3 5 8
 * ? j: 3
 * 5 > 5 => sai
 *
 *
 * !i: 3
 * ? j:0
 * 1 > 2 => sai
 * ? j:1
 * 2 > 3 => sai
 * ? j:2
 * 3 > 5 => sai
 *
 *  ...
 *
 */
