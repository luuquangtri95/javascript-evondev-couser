/**
 * isNaN(value): kiểm tra không phải số =>> trả về true/false
 * => Not a Number
 */
console.log(isNaN('this is a string')); // true =>> bởi hàm check không phải là sô, đây là chuỗi mà
console.log(isNaN('12345')); //false =>> hàm này sẽ conver '12345' thành số 12345, đây là số nên trả vè false
