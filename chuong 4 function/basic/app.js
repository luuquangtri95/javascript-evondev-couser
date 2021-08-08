/**
 * function (ham)
 * khai báo function
 * cú pháp (systax): function functionName(parameters){
 *  // your code here
 * }
 *
 *
 * =>> sử dụng camelCase =>> có ý nghĩa
 * =>> nến có thêm giá trị mặc định cho parameters => function functionName(parameters = defaultValue)
 */
console.log(calcSum(1, 2)); // =>> function không bị hosting khi gọi hàm trước khi định nghĩa hàm đó
function calcSum(a = 0, b = 0) {
  return a + b;
  // không có return, hàm trả về " undefined"
}
console.log(calcSum(1, 2));
//calcSum(arguments) =>>  1, 2 truyền vào hàm sum goi là arguments (đối số)

function getName(name) {
  return name;
}
