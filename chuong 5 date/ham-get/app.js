/**
 * hàm get trong Date
 * getFullYear()
 */

const birthday = new Date(1995, 2, 10); //Fri "Mar" 10 1995 00:00:00 GMT+0700 (Giờ Đông Dương)
//in ra năm
console.log(birthday.getFullYear());
//in ra tháng
console.log(birthday.getMonth()); // "Mar" tháng 3
/**
 * đối với hàm getMonth(): 0 - 11
 * 0 tháng 1 (January) Jan
 * 1 tháng 2 (February) Feb
 * 2 tháng 3 (March) Mar
 * 3 tháng 4 (April) Apr
 * 4 tháng 5 (May) May
 * 5 tháng 6 (June) Jun
 * 6 tháng 7 (July) Jul
 * 7 tháng 8 (August) Aug
 * 8 tháng 9 (September) Sep
 * 9 tháng 10 (October) Oct
 * 10 tháng 11 (November) Nov
 * 11 tháng 12 (December) Dec
 */

//in ra ngày của tháng: 1 - 31

//in ra thu cua tuan
console.log(birthday.getDate()); //5
/**
 *
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
