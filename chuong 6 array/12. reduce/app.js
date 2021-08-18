/**
 * reduce((a,b)=>{}, initialize value): nó sẽ gom phần tử trong mảng thành 1 giá trị
 */
const listNumber = [1, 2, 3, 4, 5];
const reduce = listNumber.reduce((a, b) => {
  return a + b;
}, 0);

console.log(reduce);
