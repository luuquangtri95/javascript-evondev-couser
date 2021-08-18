/**
 * some(): trả về true khi thoả 1 điều kiện và ngược lại trả về false khi không thoả dk nào
 * every(): trả về true khi tất cả điều kiện đều đúng, ngược lại 1 cái sai thì return false
 * =>> trả về true / false
 */

// some
const someNumber = [1, 2, 3, 4, 5];
const some = someNumber.some((value) => {
  return value > 3;
});
console.log(some);

// every
const every = someNumber.every((value) => {
  return value > 2;
});
console.log(every);
