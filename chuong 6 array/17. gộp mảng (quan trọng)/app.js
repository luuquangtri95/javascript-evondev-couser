// 2 cách gộp mảng
//[1,2] [3,4] [5,6]

// concat() =>> array.concat(array1, array2... array n)

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
console.log(arr1.concat(arr2, arr3));

// spread operator
const newArr = [...arr1, ...arr2, ...arr3];
console.log(newArr);
