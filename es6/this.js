/**
 * todo: (context: ngữ cảnh)
 *
 * this trong global context: return về global obj kể cả strict mode hay không strict mode
 * ! this trong func context in strict mode: nếu sử dụng trong strict mode thì this sẽ là undefined
 * ! this trong arrow func context : "không có this riêng, chỉ có kế thừa lại thằng this cha của nó"
 * todo: this trong func context in "none - strict mode" : mặc định sẽ trả về global object
 * this trong method context : chính là thằng cha của nó
 * this trong event context
 */

// normal func

//non strick mode
function sayHello() {
  console.log(this); // window / global

  const sayHi = () => {
    console.log(this); //window / global
  };

  sayHi();
}

console.log(sayHello());

//use strick
('use strict');
function sayHello() {
  console.log(this); // undefined

  const sayHi = () => {
    console.log(this); //undefined
  };

  sayHi();
}

console.log(sayHello());

//this in a method

const student = {
  name: 'bop',
  sayHello: function () {
    // ES5
    console.log('my name is', this.name); // this = object student
  },
};

console.log(student.sayHello()); //my name is bop

const student = {
  name: 'bop',
  sayHello() {
    // ES6
    console.log('my name is', this.name); // this = object student
  },
};

console.log(student.sayHello()); //my name is bop
