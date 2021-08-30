/**
 * find(): trả về phần tử tìm thấy đầu tiên trong mảng thoả mãn điều kiện nào đó
 */
const random = [1, 1000, 100, 09, 999];
// tìm phần tử đầu tiên trong mảng lớn hơn 10
const findNumber = random.find((element, index) => element > 2); // 1000 / không thoả dk thì return "undefined"
console.log(findNumber);

// hậu nguyễn

//find():  tìm phần tử thoải điều kiện, phần tử đầu tiên
//findIndex(): trả về vị trí của phần tử thoả điều kiện
function find(arr, callbackFn) {
  if (!Array.isArray(arr)) return false;
  for (value of arr) {
    if (callbackFn(value)) {
      return value;
    }
  }
  return undefined;
}

function isEven(number) {
  return number % 2 === 0;
}
console.log(find([1, 2, 3, 4, 5], isEven));

// =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function findIndex(arr) {
  if (!Array.isArray(arr)) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
      return i;
      break;
    }
  }
  return undefined;
}
console.log(findIndex([1, 2, 1, 2, 3, 4, 5]));
