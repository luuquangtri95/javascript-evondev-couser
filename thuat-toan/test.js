let numberList = [1, 2, 3, 4, 5];

// [[1,2]]

function groupNumber(numberList, sum) {
  let newArr = [];
  let newArrList = [];

  for (let i = 0; i < numberList.length - 1; i++) {
    for (j = i + 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === sum) {
        newArr.push(numberList[i], numberList[j]);
        // newArrList.push(newArr);
        // newArr = [];
      }
    }

    break;
  }

  return newArr;
}

console.log(groupNumber(numberList, 6));

// 1 lần i chạy => n j

/**
 * length: 5
 * ! i:0
 * ? j:1
 * 1 + 2 = 3 => false
 * ? j:2
 * 1 + 3 = 4 => false
 * ? j:3
 * 1 + 4 = 5 => false
 * ? j:4
 * 1 + 5 = 6 => true [1,5]
 *
 * ! i:1
 * ? j:2
 * 2 + 3 = 5 => false
 * ? j:3
 * 2 + 4 = 6 => true [2,4]
 * ? j:4
 * 2 + 5 = 7 => false
 *
 * ! i:2
 * ? j:3
 * 3 + 4 = 7 => false
 * ? j:4
 * 3 + 5 = 8 => false
 *
 * ! i:3
 * ? j:4
 * 4 + 5 = 9 => false
 *
 * ! i:4 =>> number.length - 1 cho for i
 * ? j:5 => ??? undefined
 */

let arr = [1, 2, 3, 4, 5];

function group(numberList) {
  let newArrList = [];
  let newArr = [];

  for (let i = 0; i < numberList.length; i++) {
    newArr.push(numberList[i]); // i = 0

    if (newArr.length === 2) {
      // newArr.push(numberList[i]);
      newArrList.push(newArr);
      newArr = [];
    }

    if (i === numberList.length - 1 && newArr.length >= 1) {
      newArrList.push(newArr);
    }
  }

  return newArrList;
}

console.log(group(arr));

/**
 * lenth: 5
 * newArr = []
 *
 * ! i:0
 * newArr = [1] => if => false
 *
 * ! i:1
 * newArr = [1,2] => if = true => newArrList = [[1,2]] =>> reset newArr = []
 *
 * ! i:2
 * newArr = [3] => if false
 *
 * ! i:3
 * newArr = [3,4] => if = true => newArrList = [[1,2],[3,4]] =>> reset newArr = []
 *
 * ! i:4
 * newArr = [5] ?????
 */

