let arr = ['javascript', 'php', 'ruby'];

// ! destructoring

const [a, b, c] = arr;
console.log(rest);

// ? lấy a,c và không lấy b
const [a, , c] = arr;
console.log(rest);

// ! rest params =>>> lấy phần còn lại
// khi nào nó là toán tử rest, khi nó kết hợp vs destructoring

const [a, ...rest] = arr;
console.log(rest); // ['php', 'ruby']

const [a, b, ...rest] = arr;
console.log(rest); // ['ruby']

// =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> OBJ

const courser = {
  name: 'java',
  price: 100,
  child: {
    name: 'reactjs',
    price: 5000,
  },
};

// const {
//   name: parentName,
//   child: { name: childName },
// } = couser;
// console.log(parentName);
// console.log(childName);

const { ...rest } = courser.child;

console.log(rest);
