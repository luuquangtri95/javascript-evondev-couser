/**
 * type coercion: chuyển đổi giá trị từ kiểu này sang kiểu khác
 * (tự động chuyển kiểu dữ liệu)
 * type conversion: tự động ép kiểu hoặc ng dùng tự ép kiểu
 * đối với đấu + (nó sẽ tự động chuyển về String)
 * (- * /) => (chuyển tự động về Number)
 */

console.log(1 + 2); //3
console.log(10 + 10); //20
console.log(10 + '10'); // 1010

/**
 * String(10) = "10"
 * 10 sẽ cố gắng chuyển đổi về string => "10" + "10" = "1010"
 */

console.log('10' - 10);
/**
 * Number("10") = 10
 * 10 - 10 = 0
 */
console.log(null + ''); // "null"
console.log(typeof (null + undefined)); // NaN
