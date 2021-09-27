function findMaxSumArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let subArr = [numberList[0]];
  let subArrList = [];

  for (let i = 1; i < numberList.length; i++) {
    let prevNumber = numberList[i - 1];
    let currNumber = numberList[i];

    if (prevNumber >= currNumber) {
      if (subArr.length >= 2) subArrList.push(subArr);

      subArr = [currNumber];
    }

    if (prevNumber < currNumber) {
      subArr.push(currNumber);
    }
    /**
     * => if i not run last numberList length then func push 1 time to subArrlist and return
     *
     * when i run last numberList and subArr length start 2
     * subArrlist push subArr
     */
    if (i === numberList.length - 1 && subArr.length >= 2) {
      subArrList.push(subArr);
    }
  }

  for (let i = 0; i < subArrList.length - 1; i++) {
    return Math.max(sum(subArrList[i]), sum(subArrList[i + 1]));
  }
}

function sum(arr) {
  return arr.reduce((a, b) => a + b);
}

console.log(findMaxSumArray([])); // 0
console.log(findMaxSumArray([1, 2, 3])); // 6
console.log(findMaxSumArray([1, 2, 3, 0, 10, 20]));

let arr = [1, 2];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] + arr[i + 1]);
}

/**
 * khi i : 0
 * log 1: arr[i] = 0 => arr[i+1] = 1 => 0 + 1 = 1
 *
 * khi i = 1
 * log 2: arr[i] = 1 => arr[1+2] = 2 ??? làm gì có index 2 => undefined arr[i+1]
 */
