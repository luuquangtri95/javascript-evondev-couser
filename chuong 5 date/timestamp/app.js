/**
 * timestamp & epoch time
 *
 * timestamp tinhs ra kết quả là "miliseconds"
 * timestamp: dựa trên UNIX time (wikipedia) 1/1/1970
 * dùng timeStamp để tính toán + - * / và nhiều mục đích khác như count down, online bao nhiêu phút trước...vv
 *
 */
const now = new Date();
console.log(now.getTime()); //1628273359546   in ra timestamp => dựa vào epoch time
console.log(new Date(0)); // =>> ngày bắt đầu epoch time
