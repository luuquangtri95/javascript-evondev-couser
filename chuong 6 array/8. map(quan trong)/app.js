/**
 * map(): duêtj qua từng phần tử trong mảng và trả ra 1 mảng mới mà không thay đổi mảng ban đầu
 */

const listNumber = [1, 2, 3, 4, 5];
//tra ra 1 mảng mới mà các số trong mảng cũ nhân 2
const listNumberDouble = listNumber.map((value, index) => {
  return value * 2;
});

console.log(listNumberDouble);
