function findMax(numbeList) {
  if (!Array.isArray(numbeList)) return [];

  for (let i = 0; i < numbeList.length; i++) {
    for (let j = 0; j < numbeList.length; j++) {
      let temp;
      if (numbeList[j] < numbeList[j + 1]) {
        temp = numbeList[j];
        numbeList[j] = numbeList[j + 1];
        numbeList[j + 1] = temp;
      }
    }
  }

  return numbeList;
}

console.log(findMax([1, 2, 3, 6, 4, 5]));

// 1 2 3 4 5
// 1 2 so sanh => 1 < 2 => 2 1 =>> 2 1 3 4 5
// 1 3 so sanh => 1 < 3 => 3 1 => 2 3 1 4 5
// 1 4 so sanh => 1 < 4 => 4 1 => 2 3 4 1 5
// ------------------------------ 2 3 4 5 1  i = 0

// 2 3 -------------------------- 3 2 4 5 1

/**
 *
 * temp;
 * 1 2 => 1 < 2 => temp = 1
 * 1 = 2
 * 2 = temp
 */

// tìm phần tử lớn thứ 2 trong mảng

function findSecondNumberInArray(numberList) {}

console.log(findSecondNumberInArray([5, 2, 1, 6, 4])); // 5
