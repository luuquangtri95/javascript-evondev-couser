/**
 * viết hàm calcAvgOfAllEvenNumbers(numberList)
 * trả về 1 con số duy nhất cho biết trung bình cộng của tất cả số chẵn trong mảng, làm tròn về số nguyên gần nhất
 */

export function calcAvgOfAllEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;
  if (
    numberList.findIndex((number) => number % 2 === 0) < 0 ||
    numberList.some((number) => number <= 0)
  )
    return 0;

  let evenNumber = numberList.filter((number) => number % 2 === 0);
  let calcEvenNumber = evenNumber.reduce((prev, cur) => prev + cur, 0);

  return Math.round(calcEvenNumber / evenNumber.length);
}

console.log(calcAvgOfAllEvenNumbers(1, 2, 4, 8));
