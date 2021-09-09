/**
 * Dãy số fibonaci nhỏ hơn n
 * 
Viết hàm generateFibonaci(n) để tạo ra mảng các số fibonaci nhỏ hơn n (0 < n < 1000)

Fibonaci là dãy số tự nhiên có 2 phần tử đầu tiên là 0 và 1.

Phân tử tiếp theo sẽ bằng tổng 2 phần tử trước đó
 */

function generateFibonaci(n) {
  let array = [0, 1];

  for (let i = 1; i < n; i++) {
    if (array[i] + array[i - 1] < n) {
      array.push(array[i] + array[i - 1]);
    }
  }

  return array;
}
console.log(generateFibonaci(5));
console.log(generateFibonaci(10));
