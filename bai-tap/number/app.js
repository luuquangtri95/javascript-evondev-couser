/**
 * viết hàm gọi getTaxiCount(passengersCount) nhậN vào số hành khách và trả về số taxi cần gọi để chở số khách đó
 *
 * yêu cầu:
 * - khi số khách lớn hơn 4, ưu tiên dùng xe 7 chỗ  (***** luu y dk nay)
 * - nếu khách nhỏ hơn 4 hoặc bằng 4 thì dùng xe 4 chỗ
 * - trả về con số duy nhất là tổng của 2 loại xe taxi cần gọi
 */
function getTaxiCount(passengersCount) {
  // check tham sao đầu vào
  if (passengersCount <= 0) return 0;

  // processing
  if (passengersCount <= 4) return '1 xe 4 cho';
  /**
   * neu co 20 khách =>>> bn xe ??
   * 20/7 = 2
   * 20%7 = 6
   */
  let car7 = Math.trunc(passengersCount / 7);
  let car4 = passengersCount % 7;

  if (car4 > 4) car7 += 1;
  if (car4 <= 1) car4 = 1;
  if (car4 !== 1) return car7 + ' xe 7 cho';
  return car7 + ' xe 7 cho ' + car4 + ' xe 4 cho ';
}
console.log(getTaxiCount(20));
/**
 * viết hàm getMaxDigit(n) tìm ra chữ số lớn nhất của 1 số nguyên dương n (0 <= n < 1000)
 * vi du:
 *  - getMaxDigit(1) => 1
 *  - getMaxDigit(12) => 2
 *  - getMaxDigit(134) => 4
 */
function getMaxDigit(n) {
  if (n < 0 || n > 999) return -1;
  if (n.toString().length === 1) {
    return n;
  }
  if (n.toString().length === 2) {
    let max = Math.trunc(n / 10);
    let temp = n % 10;
    if (temp > max) {
      max = temp;
    }
    return max;
  }
  if (n.toString().length === 3) {
    let max = Math.trunc(n / 100);
    let temp = n % 100;
    let temp2 = Math.trunc(temp / 10);
    temp = temp % 10;

    if (temp > max) return (max = temp);
    if (temp2 > max) return (max = temp2);
    return max;
  }
}
console.log(getMaxDigit(1000));
/**
 * Viết hàm compareNumbers(a,b) nhận vào 2 số nguyên a,b bất kì
 * tra về:
 * 1 nếu a > b
 * 0 nếu a = bs
 * -1 nếu a < b
 */
function compareNumbers(a, b) {
  // your code here
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
}
console.log(compareNumbers(3, 5));
/**
 * viết hàm isSymmetricNumber(n) nhận vào số nguyên dương n có tối đa 3 chữ số và trả về true nếu n là số đối xứng, ngược lại trả về false
 * số đỐi xưng: 1, 22, 33, 121. 969
 */

function isSymmetricNumber(n) {
  if (n.toString().length === 1) {
    return true;
  }
  if (n.toString().length === 2) {
    let num = Math.trunc(n / 10);
    let num2 = n % 10;
    // console.log(num);
    if (num === num2) return true;
    return false;
  }
  if (n.toString().length === 3) {
    let num = Math.trunc(n / 100);
    let temp = n % 100;
    let temp2 = temp % 10;
    temp = Math.trunc(temp / 10);
    if (num === temp2) return true;
    return false;
  }
}

console.log(isSymmetricNumber(373));
