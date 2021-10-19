// đệ quy
/**
 * hàm mà gọi là chính nó => đệ quy
 */

// tính tổng s(n) = 1+2+3+4...n

function calcS(n) {
  //base case
  if (n <= 0) return 0;

  return n + calcS(n - 1);
}

console.log(calcS(5)); // 15

//s5 = 5 + S(4)
//s4 = 4 + S(3)
//s3 = 3 + S(2)
//s2 = 2 + S(1)
//s1 = 1 + S(0)
//s0 = 0 === base case

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(9));

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;
  let next = 1;

  let i = 2;

  while (i <= n) {
    next = prev + curr;

    i++;

    prev = curr;
    curr = next;
  }

  return next;
}
console.log(fibonacci(9));
