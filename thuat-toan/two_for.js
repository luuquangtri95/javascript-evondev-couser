const numberList = [1, 5, 3, 2, 4]; // sum = 5

function chunkArr(numberList, sum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let newArr = [];
  let newArrList = [];

  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === sum) {
        newArr.push(i, j);
        newArrList.push(newArr);
        //after push newArr then reset newArr
        newArr = [];
      }
    }
  }

  return newArrList;
}

console.log(chunkArr(numberList, 5));

/**
 * length: 5
 * for i
 * for j = i + 1
 *
 * ! i = 0
 * ? j = 1
 * 1 + 5 => false
 * ? j = 2
 * 1 + 3 => false
 * ? j = 3
 * 1 + 2 => false
 * ? j = 4
 * 1 + 4 => true => [1,4]  =>  index => [0,4]
 *
 * ! i = 1
 * ? j = 2
 * 5 + 3 => false
 * ? j = 3
 * 5 + 2 => false
 * ? j = 4
 * 5 + 4 => false
 *
 * ! i = 2
 * ? j = 3
 * 3 + 2 => true => [2,3] => index => [2,3]
 * ? j = 4
 * 3 + 4 => false
 *
 * ! i = 3
 * ? j = 4
 * 2 + 4 => false
 *
 * ! i = 4 => length chỉ nên chạy tới length - 1
 * ? j = 5 ??????? => undefined
 */
