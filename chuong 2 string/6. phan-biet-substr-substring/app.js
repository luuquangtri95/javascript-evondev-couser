/**
 * phân biệt substr vs substring
 * 2 phương thức khá giống nhau, dễ gây lẫn lộn
 * =>> substr: lấy ra 1 phần của chuỗi
 * =>> substring: lấy ra các lí tự của chuỗi
 *
 *
 * =>> substr(index, length) -> index: vị trí - length: số lượng ký tự bạn muốn lấy
 *
 * =>> substring(start Index, end Index) -> vd: myStr.substring(1, 5) =>> thì hàm này chỉ lấy từ 1 - 4
 * công thức tổnge quát (start index, end index - 1)
 */

const myStr = 'Frontend';
console.log(myStr.substr(1, 5)); //ronte =>>> cắt từ vị trí 1 đến 5
console.log(myStr.substring(1, 5)); //ront
