/**
 * @param {length}: kiểm tra độ dài của chuỗi
 * @param {index}: bắt đầU từ 0, vị trí từng ký tự trong chuỗi bao gồm cả khoảng trắng
 * my job front end dev - my name is Tri - i love front end dev
 * 012345678910...............................................37
 */
const name = 'tri';
const job = 'front end dev';
const newStr = `my name is ${name} - i love ${job}`;
console.log(newStr.length);

/**
 * @param {split}: tách ra
 */

const myStr = 'FrontEnd Dev';
console.log(myStr.split('')); // tách ra từng ký tự
console.log(myStr.split(' ')); // tách ra theo khoảng trắng
console.log(myStr.split('/')); // tách ra theo dấu /
console.log(myStr.split('-')); // tách ra theo dấu -

/**
 * @param {toLowerCase}: in thường tất cả chữ trong string
 * @param {toUpperCase}: in hoa tất cả chữ trong string
 */
const myStr = 'FrontEnd Dev';
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());

/**
 * @param {startsWith}: trả về true - fasle =>> kiểm tra xem chuỗi bắt đầu
 */
const myStr = 'FrontEnd Dev';
console.log(myStr.startsWith('Front')); // kiểm tra xem chuỗi bắt đầu là Front đúng hay sai =>> đúng return true - sai return false (****  lưu ý: phân biệt chữ hoa và chữ thường)

/**
 * @param {endswith}: rả về true - fasle =>> kiểm tra xem chuỗi kết thúc
 */
const myStr = 'FrontEnd Dev';
console.log(myStr.endsWith('Dev'));

/**
 * @param {includes}: chứa => trả về true - false nếu trong chuỗi có chứa
 */
const myStr = 'FrontEnd Dev';
console.log(myStr.includes('Dev'));
console.log(myStr.includes('abc'));
// (*** lưu ý: phân biệt chữ hoa và thường)

/**
 * kiểm tra vị trí của 1 ký tự nào đó trong 1 chuỗi =>> indexOf
 * khác với indexOf là lastIndexOf =>> xem ví dụ
 */
const myStr = 'FrontEnd Dev D';
console.log(myStr.length);
console.log(myStr.indexOf('D'));

const myStr = 'FrontEnd Dev D';
console.log(myStr.length);
console.log(myStr.lastIndexOf('D')); // lấy vị trí cuối cùng của chữ D, không lấy chữ D lần đầu tiên đụng
