/**
 * find(): trả về phần tử tìm thấy đầu tiên trong mảng thoả mãn điều kiện nào đó
 */
const random = [1, 1000, 100, 09, 999];
// tìm phần tử đầu tiên trong mảng lớn hơn 10
const findNumber = random.find((element, index) => element > 2); // 1000 / không thoả dk thì return undefined
console.log(findNumber);
