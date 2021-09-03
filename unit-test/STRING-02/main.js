/**
 * Thống kê số lượng từ trong câu
Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str.
Trả về một object với:
key là từ có xuất hiện trong str
value là số lần xuất hiện của ke
 */

export function statisticsWords(str) {
  if (!String(str) || str === '') return {};
  let count = 0;

  const strList = str.split(' ');
  return strList.reduce((prev, curr) => {
    if (curr) {
      prev[curr] = count++;
    }
    return prev;
  }, {});
}

console.log(statisticsWords('easy frontend easy '));
