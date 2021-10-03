/**
 * ! đặt cờ hiệu
 * =>> sử dụng tốt với for
 */

function flag(numbers) {
  let flag = false;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      flag = true;
      break;
    }
  }

  return flag;
}

console.log(flag([1, 2, 3, 4, 5]));

/**
 * ! lính canh
 * =>> hữu ích trong thuật toán sort...vv
 * ! hoặc giữ giá trị gì đó sử dụng sau
 */

function findMax(a, b, c) {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}

console.log(findMax(1, 5, 2));
