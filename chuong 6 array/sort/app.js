/**
 * sort(): sắp xếp các phần tửu trong mảng theo chuẩn unicode-16
 */

const random = [1, 1000, 100, 09, 999];
//[ 1, 100, 1000, 9, 999 ]
console.log(random.sort());
//sort(function(a,b))
//function(callback)
const random2 = random.sort(function (a, b) {
  if (a > b) return 1; //đổi vị trí cho nhau (sắp xếp theo tăng dần)
  if (a < b) return -1; // không đổi vị trí cho nhau (sắp xếp theo giảm dần)
});

const random3 = random.sort((a, b) => (a > b ? 1 : -1)); // sắp xếp tăng dần
const random31 = random.sort((a, b) => (a > b ? -1 : 1)); //sắp xếp giảm dần

console.log(random3);
console.log(random31);
