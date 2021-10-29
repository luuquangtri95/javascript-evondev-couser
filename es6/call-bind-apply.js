/**
 * ! không dùng bind call apply cho arrow func => vì nó chỉ lấy this của thằng cha
 *
 * todo: call vs apply : tương tự nhau, chỉ khác cách truyền tham số
 */
'use strict';

const student = {
  name: 'trie',
};

function sayHello(a, b) {
  console.log(this.name, a + b);
}

const studentSayHello = sayHello.bind(student); // bind sẽ tạo ra 1 func mới
studentSayHello();
//sayHello.bind(student)()

sayHello.call(student, 5, 10);
sayHello.apply(student, [1, 2]);
