/**
 * push()
 * pop()
 * shift()
 * unshift()
 * splice()
 */

// push() vào đầu mảng
const numberList = [2, 3, 1];
numberList.push(4, 5);
console.log(numberList); // [2,3,1,4,5]

//pop() remove 1 item cuối mảng
const numberList = [1, 2, 3];
const lastNumber = numberList.pop();
console.log(lastNumber); // return 3

//unshift() thêm 1 hoặc nhiều phần tử vào đầu mảng
const numberList = [1, 2, 3];
numberList.unshift(4, 5);
console.log(numberList); // [4,5,1,2,3]

//shift() xoa 1 phần tử ở đầu mảng
const numberList = [1, 2, 3];
const lastNumber = numberList.shift();
console.log(lastNumber); // return 1

// vừa thêm vừa xoá bất cứ vị trí nào cũng đc
// splice(start, deleteCount, item 1... item n)

const numberList = [1, 2, 3];
numberList.splice(0, 0, 2, 4); // bắt đầu từ vị trí 0, xoá 0 phần tử, thêm 2,4 vào đầu mảng
console.log(numberList);

const numberList = [1, 3, 5, 7];
numberList.splice(2, 1, 2, 4); // bắt đầu từ vị trí 2, xoá 1 phần tử là 5, và thêm vào vị trí số 2 là 2 và 4
console.log(numberList);
