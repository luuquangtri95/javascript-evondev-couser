// sao chép 1 mảng dùng for
function copyArry(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(copyArry([1, 2, 3, 4, 5]));

//đảo ngược từ

function revereStr(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(revereStr('i love'));
