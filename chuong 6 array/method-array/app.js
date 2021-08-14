/**
 * method trong mảng phần 1:
 * length: trả về độ dài của mảng =>> bắt đầu từ 1 2 ...
 * reverse(): đảo ngược giá trị array
 * join(): nối các phần tử thành string
 * includes(): kiểm tra array có chứa phần tử đó hay không
 * indexOf(): trả về phần tử tìm thấy đầu tiên
 * lastIndexOf(): trả về phần tử tìm thấy cuối cùng được tìm thấy
 * push(): thêm phần tử mới vào "cuối" mảng
 * unshift(): thêm phần tử mới vào "đầu" mảng
 * pop(): xoá phần tử "cuối" cùng trong mảng
 * shift(): xoá phần tử "đầu tiên" trong mảng
 */

const arrayName = [1, 2, 3, 4, 5, 2];
console.log(arrayName.length);
// console.log(arrayName.reverse());
console.log(arrayName.join(' '));
console.log(arrayName.includes('tri'));
console.log(arrayName.lastIndexOf(2));
console.log(arrayName.push('java'));
console.log(arrayName.unshift('script'));
console.log(arrayName.pop());
console.log(arrayName.shift());
console.log(arrayName);
