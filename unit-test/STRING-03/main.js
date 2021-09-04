/**
 * Thống kê ký tự có trong câu
Viết hàm statisticsCharacters(str) để thống kê số lượng ký tự có trong câu.
Trả về một object với:
key là character có xuất hiện trong str. Nếu là khoảng trắng thì key="space".
value là số lần xuất hiện của key
 */

function statisticsCharacters(str) {
  if (!String(str) || str === '') return {};

  const strList = str.split('');

  return strList.reduce((prev, curr) => {
    if (curr === ' ') {
      curr = 'space';
    }

    if (!prev.hasOwnProperty(curr)) {
      // kiểm tra key có trong obj hay không bằng hasOwnProperty(truyền vào key)
      prev[curr] = 1;
    } else {
      prev[curr] += 1;
    }

    return prev;
  }, {});
}
console.log(statisticsCharacters('aa b cc '));
