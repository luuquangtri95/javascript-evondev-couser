// sort(compareFn)
/**
 * compareFn(a,b)
 * kq trả về  < 0 , a đứng trước b
 * kq trả về = 0, a và b như nhau
 * kq trả về > 0, a đứng sau b
 *
 * kết quả trả về là mảng hiện tại không phải mảng mới
 */

[null, 2, 1, 5, 3, undefined, null].sort(); //[1,2,3,5,null,null,undefined]

// v1
function compareFn(a, b) {
  if (a > b) return 1;
  if (a < b) return 0;
  return -1;
}

// v2
function compareFn(a, b) {
  return a - b;
}

const arr = [5, 2, 3, 1];
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`the array of i: ${i}`);
    for (let j = 0; j < arr.length - 1; j++) {
      console.log(arr);
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        console.log('temp1:' + temp);
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log('temp2:' + temp);
      }
    }
  }
}
const arr2 = [5, 2, 3, 1];
function sort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      let temp;
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

console.log(sort2(arr2));
console.log(arr2);
