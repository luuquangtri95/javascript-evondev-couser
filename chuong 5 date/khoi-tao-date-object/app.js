/**
 * 4 cách sử dụng new Date
 * new Date() : in ra ngay gio hien tại
 * new Date(timestamp) : dựa vào timestamp in ra ngày giờ
 * new Date(date string)
 * new Date(year, month, day, hour, minute, seconds, miliseconds)
 * =>>> month (chạy từ 0 - 11) in tháng 6 thì lùi lại 1 là 5
 */
const now = new Date();
console.log(now.getTime()); // time stamp => 1628273711786
console.log(new Date(1628273711786));
console.log(new Date('2021-08-06T18:15:11.786Z'));
console.log(new Date(1995, 3, 10, 23, 23, 23, 23));

