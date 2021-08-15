/**
 * foreach(): duyệt qua từng phần tử trong mảng nhưng k trả mảng mới =>> không return
 * dùng thường cho DOM
 */
const listNumber = [1, 2, 3, 4, 5, 6];
const newlistNumber = listNumber.forEach((value, index) => {
  return value * 3;
});
console.log(newlistNumber);
