/**
 * liệt kê ước số của n
 * vd: 10 => 1 2 5 10
 */
export function getDivisorList(number) {
  if (!Number(number) || number < 0) return false;
  let newArr = [];

  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      newArr.push(i);
    }
  }

  return newArr;
}
