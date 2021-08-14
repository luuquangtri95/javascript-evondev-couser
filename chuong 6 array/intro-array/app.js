/**
 * mảng
 * 2 cach tạo mảng
 * literal
 */
const student = []; //literal
const student2 = new Array(); //constructor
//exemple array
// [0, false, undefined...["tri", 0907512309, []]]

const student3 = ['luu', 'quang', 'tri', 'nyc'];
/**
 * 0: luu
 * 1: quang
 * 2: tri
 * 3: nyc
 */
// index vị trí phần tử giá tri trong mảng, bắt đầu từ 0
//length: độ dài của mảng, nó đếm từ 1
/**
 * 1:luu
 * 2:quang
 * 3:tri
 * 4:nyc
 */

// truy xuất trong mảng =>> student3[index]
console.log(student3[0]);
console.log(student3[1]);
console.log(student3[2]);
console.log(student3[3]);
// lấy phần tử cuối cùng trong mảng sẽ là độ dài của mảng - 1 =>> array.length - 1
console.log(student3[student3.length - 1]);
