// rest parameter : phần còn lại (rest)
const toys = ['ball', 'sword', 'arrow', 'water', 'fire'];
const [ball, ...rest] = toys;
console.log(ball);
console.log(rest);

// dung trong func
function demo(a, ...rest) {
  console.log(a, rest);
}

console.log(demo(1, 2, 3, 4, 5));
