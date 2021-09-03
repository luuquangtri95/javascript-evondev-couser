/**
 *  Ðếm số từ có trong câu
Viêt hàm countWords(str) để đếm số từ có trong str.
Ví dụ: countWords('easy frontend') --> 2
 */

export function countWords(str) {
  if (!String(str) || str === '') return 0;
  let strList = str.split(' ');

  return strList.length;
}
