const myStr = 'FrontEnd Dev';

/**
 * replace: thay thế
 * 2 param: ("chuỗi cần thay thế", "chuỗi mới")
 * =>> trường hợp chuỗi không có thì vẫn giữ nguyên chuỗi cũ
 */
const myStr = 'FrontEnd Dev';
console.log(myStr.replace('Dev', 'Designer'));

/**
 * repeat: lặp lại chuỗi
 */
const myStr = 'FrontEnd Dev';
console.log(myStr.repeat(5));

/**
 * slice: cắt
 * 2 param: (bắt đầu, kết thúc)
 * =>> kết quả là chuỗi cắt trong khoangr
 * vd: muốn lấy chữ front
 * 'FrontEnd Dev' =>> cắt (0,4) =>> kết quả "Fron" =>> (**** lưu ý quan trong: slice lấy start đến end - 1)
 * =>> muốn lấy đúng ký tự thì + 1 vào end
 * 'FrontEnd Dev' =>> cắt (0,5) =>> kết quả "Front" =>> kết quả đúng
 *
 *
 * =>> slice(0) lấy toàn chuỗi 'FrontEnd Dev' =>> slice(0) =>> 'FrontEnd Dev'
 *
 * =>> truyền vào số âm 'FrontEnd Dev D'
 * ---------------------------------- -1 =>> D sẽ là -1
 */
const myStr = 'FrontEnd Dev D';
console.log(myStr.slice(0, 4));
console.log(myStr.slice(0));
console.log(myStr.slice(-7)); //d Dev D

/**
 * Trim: cắt (khoảng trống)
 * trimStart: loại bỏ khoảng trống bên trái
 * trimEnd: loại bỏ khoảng trống bên trái
 */
const myStr = '            FrontEnd Dev D             ';
console.log(myStr);
console.log(myStr.trim()); // khoang trống 2 bên bị remove

/**
 * CharAt: lấy ký tự từ vị trí index
 */
const myStr = 'FrontEnd Dev D';
console.log(myStr.charAt(0));
