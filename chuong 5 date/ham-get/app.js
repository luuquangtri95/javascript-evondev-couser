/**
 * hàm get trong Date
 * getFullYear()
 */

const birthday = new Date(1995, 2, 10);
//in ra năm
console.log(birthday.getFullYear());
//in ra tháng
/**
 * đối với hàm getMonth(): 0 - 11
 * 0 tháng 1
 * 1 tháng 2
 * 2 tháng 3
 * 3 tháng 4
 * 4 tháng 5
 * 5 tháng 6
 * 6 tháng 7
 * 7 tháng 8
 * 8 tháng 9
 * 9 tháng 10
 * 10 tháng 11
 * 11 tháng 12
 */
console.log(birthday.getMonth());

//in ra ngày của tháng: 1 - 31
console.log(birthday.getDate()); //5

//in ra thu cua tuan
/**
 * 0 - 6
 * 0: chủ nhật
 * 1: thứ 2
 * 2: thứ 3
 * 3: thứ 4
 * 4: thứ 5
 * 5: thứ 6
 * 6: thứ 7
 */
console.log(birthday.getDay());

//in ra giờ
console.log(birthday.getHours());

//in ra phut
console.log(birthday.getMinutes());

//in ra giây
console.log(birthday.getSeconds());
