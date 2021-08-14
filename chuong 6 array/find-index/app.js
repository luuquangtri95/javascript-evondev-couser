/**
 * findIndex(): nó trả về vị trí index đầu tiên được tìm thấy trong mảng
 */
const random = [1, 1000, 100, 09, 999];
const findIndex = random.findIndex((element) => element > 10); // 1 nếu không thoả điều kiện sẽ trả về "-1"
console.log(findIndex);
