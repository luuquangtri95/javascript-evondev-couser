/**
 * filter(): loại bỏ 1 hoặc nhiều phần tử nào đó thoả mãn điều kiện
 */
const listNumber = [1, 2, 3, 4, 5];
const newlist = listNumber.filter((value, index) => {
  return value > 3;
});
console.log(newlist); // [4,5]
