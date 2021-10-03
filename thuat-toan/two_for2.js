const numberList = [1, 5, 3, 2, 4]; // sum = 5

function chunkArr(numberList, sum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let newArr = [];
  let newArrList = [];

  for (let i = 0; i < numberList.length; i++) {
    for (let j = 0; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === sum) {
        newArr.push(i, j);
        newArrList.push(newArr);
        newArr = [];
      }
    }
  }

  return newArrList;
}

console.log(chunkArr(numberList, 5));
/**
 * length: 5
 * i = 0;
 * j = 0;
 *
 * ! i = 0
 * ? j = 0
 * 1 + 1 = 2 => false
 * ? j = 1
 * 1 + 5 = 6 => false
 * ? j = 2
 * 1 + 3 = 4 => false
 * ? j = 3
 * 1 + 2 => false
 * ? j = 4
 * 1 + 4 => true; => [0,4]
 *
 * ! i = 1
 * ? j = 0
 * 5 + 1 = 6 => false
 * ? j = 1
 * 5 + 5 = 10 => false
 * ? j = 2
 * 5 + 3 = 8 => false
 * ? j = 3
 * 5 + 2 = 7 => false
 * ? j = 4
 * 5 + 4 => 9 => false
 *
 * ! i = 2
 * ? j = 0
 * 3 + 1 = 4 => false
 * ? j = 1
 * 3 + 5 = 8 => false
 * ? j = 2
 * 3 + 3 = 6 => false
 * ? j = 3
 * 3 + 2 = 5 => true =>[2,3]
 * ? j = 4
 * 3 + 4 => false
 *
 * ! i = 3
 * ? j = 0
 * 2 + 1 = 3 => false
 * ? j = 1
 * 2 + 5 => 7 => false
 * ? j = 2
 * 2 + 3 => true => [3,2]
 * ? j = 3
 * 2 + 2 = 4 => false
 * ? j = 4
 * 2 + 4 = 6 => false
 *
 * ! i = 4
 * ? j = 0
 * 4 + 1 = 5 => true => [4,1]
 * ? j = 1
 * 4 + 5 = 9 => false
 * 4 + 3 = 7 => false
 * 4 + 2 = 6 => false
 * 4 + 4 = 8 => false
 */

[1, 5, 3, 2, 4];
