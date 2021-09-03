/**
 * Thống kê ký tự có trong câu
Viết hàm statisticsCharacters(str) để thống kê số lượng ký tự có trong câu.
Trả về một object với:
key là character có xuất hiện trong str. Nếu là khoảng trắng thì key="space".
value là số lần xuất hiện của key
 */

export function statisticsCharacters(str) {
  if (!String(str) || str === '') return {};
  let count = 0;
  let obj = {};

  let strList = str.split('').map((item) => {
    if (item === ' ') {
      item = 'space';
    }
    return item;
  });

  return obj;
}
console.log(statisticsCharacters('aa b cc '));
