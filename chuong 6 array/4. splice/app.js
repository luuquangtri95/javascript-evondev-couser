/**
 * splice(): dùng để xoá phần tử trong mảng, hoặc thay thế phần tử trong mảng
 */
const pets = ['fog', 'dog', 'cat', 'dragon'];
// splice(start)
// const pets1 = pets.splice(1); // khá giống với slice
// console.log(pets1);

//splice(start, deleteCount): delete count là số lượng phần tử muốn xoá hoặc thay thế
const pets3 = pets.splice(0, 1); //[ 'dog', 'cat', 'dragon']
console.log(pets);

//splice(start, deleteCount, addItem1...addItemN): delete count là số lượng phần tử muốn xoá hoặc thay thế, thêm nhiều phần tử mới
const pet4 = pets.splice(0, 2, 'tri', 'my', 'qunh', false, true, 2, undefined); // xoá 2 phần tủ bắt đầu tư index 0 và thêm vào 3 phần tử mới
console.log(pets);
