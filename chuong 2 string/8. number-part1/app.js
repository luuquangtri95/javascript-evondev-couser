/**
 * Sô nguyên: 1 2 3 4 999 88
 * số thập phân: 3.4 5.3 1.2 ...9.9
 */

console.log(5 + 7);
console.log(typeof 10);

const number1 = '5';
const number2 = '2.3';
console.log(parseInt(number1));
console.log(Number(number1));
console.log(parseFloat(number2));

//Math.abs(): giá tri tuyệt đối
console.log(Math.abs(-3));

/**
 * Math.floor(value) => làm tròn xuống => vd 4.3 => 4
 */

console.log(Math.floor(4.7)); // vẫn là 4

/**
 * Math.ceil(value) => làm tròn leen => vd 4.3 => 5
 */
console.log(Math.ceil(4.3)); // => 5

/**
 * Math.round(value) => làm tròn gần nhất
 * gia trị từ 4 - 4.4 =>> sẽ làm tròn thành 4
 * giá tri từ 4.5 - 4.9 =>> làm tròn lên 5
 */
console.log(Math.round(4.3)); // => 4
console.log(Math.round(4.5)); // => 5

/**
 * toFixed(number) => vd: 0.3333333 => 0.33
 * toFixed(2)
 * =>> lưu ý: toFixed trả về "String"
 */

console.log(+(1 / 3).toFixed(2));

/**
 * Math.random => sẽ random 1 số từ 0 - 1
 */
console.log(Math.trunc(Math.random() * 10));
