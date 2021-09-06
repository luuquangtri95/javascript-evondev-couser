/**
 * Kiểm tra mảng có số fibonaci nhỏ hơn 100 không?
Viết hàm hasFibonaciNumber(numberList) để kiểm tra xem trong mảng numberList có chứa một số
fibonaci nhỏ hơn 100 không?
Việc đầu tiên là viết hàm để generate ra cái list fibonaci numbers nhỏ hơn 100. Nếu bạn chưa biết
fibonaci là gì thì đọc ở đây nhé
Việc tiếp theo là kiểm tra trong mảng đầu vào có chứa con số fibonaci nhỏ hơn 100 không? Trả về
true nếu có, ngược lại trả về false.
 */

function hasFibonaciNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.lengths < 1) return false;

  let arrFibo = generateFibonancy(11);
  return numberList.some((item) => {
    if (arrFibo.includes(item) && item < 100) {
      return true;
    }
  });
}

function generateFibonancy(number) {
  let array = [0, 1];

  for (let i = 1; i < number; i++) {
    array.push(array[i] + array[i - 1]);
  }
  return array;
}
console.log(hasFibonaciNumber([4, 6, 7]));
console.log(hasFibonaciNumber([0, 1, 2, 3, 4, 5]));
console.log(hasFibonaciNumber([89]));
