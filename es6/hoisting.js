/**
 * hoisting là 1 quá trình mà trình biên dịch cấp bộ nhớ cho phần khai báo biến và phần khai báo hàm trước khi thực thi code
 * =>> đưa phần khai báo lên đầu trước khi thực thi hàm hoặc biến
 *
 * todo => cụ thể hơn là đưa phần declaration lên trên đầu
 */

/**
 * 2 thằng bị hoisting
 *
 * !function deceleration   => function sayHello()
 * !var => var count = 1
 */

// =>>>>>>>>>>>> ! IMPORTANCE

console.log(num); // todo: => return "undefined" do var num bị hosting đưa lên đầu (var num; => num lúc này là undefined)
var num; // Declaration =>> bị hoisted
num = 6; //initialization

//=> ví dụ 1
// ! var n; => code var sẽ bị hoisting declaration
console.log(n);
var n = 10;

// => ví dụ 2
console.log(n); // todo: không có phần declaration nên n sẽ báo chưa được định nghĩa
n = 6; // !initialization
