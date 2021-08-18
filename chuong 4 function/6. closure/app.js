/**
 * closure: func con có thể truy xuất scope của func cha
 * Lexical scope: định nghĩa scope của biến
 */

let aNewName = 'tri'; //global scope
function sayHello() {
  let mess = 'hi'; //block scope
  console.log(`${mess} ${aNewName}`);
}

console.log(sayHello());

// closure
function sayHi() {
  let mess = 'hi';
  function sayHello() {
    console.log(mess);
  }
  return sayHello;
}
let hello = sayHi();
hello();
console.log(hello());

// vi dụ
function sayHi2(message) {
  return function sayHello2(name) {
    console.log(`${message} ${name}`);
  };
}
let hello2 = sayHi2('tri');
hello2(' nyc');

// closure basic 2
/**
 * đối với closure thì khi biến trong block scope khi gọi hàm vẫn có thể dùng được, còn func scope thì không thể
 */

function anotherFunc() {
  let mess = 'test'; // vẫn sử dụng được khi function đã đuọc gọi
  function show() {
    console.log(mess);
  }
  return show; // returen func show 
}
