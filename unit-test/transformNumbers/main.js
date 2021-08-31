export function transformNumbers(numberList) {
  if (!Array.isArray(numberList)) return false;
  if (numberList.length <= 1) return [...numberList];

  let newArr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (i === 0) {
      newArr.push(numberList[i + 1]);
    }
    if (i === numberList.length - 1) {
      newArr.push(numberList[i - 1]);
    }
    if (i > 0 && i < numberList.length - 1) {
      newArr.push(numberList[i - 1] + numberList[i + 1]);
    }
  }

  return newArr;
}
