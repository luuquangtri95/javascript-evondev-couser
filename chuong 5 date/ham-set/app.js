/**
 * hàm set trong Date()
 */

const birthday = new Date(1995, 2, 10);

//set lại năm
birthday.setFullYear(1992);

//set thang
birthday.setMonth(11);

//set Date
birthday.setDate(30);

//set hour, minute, second
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);
birthday.setMilliseconds(23);

console.log(birthday);
