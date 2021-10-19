/**
 * phạm vi của biến
 */

// !: block scope
// giới hạn trong cập ngoặc nhọn gần nhất {}
// const với let mới có block scope
{
  const name = 'luu quang tri';
}

if (n > 10) {
  const name = 'luu quang tri';
}

for (let i = 0; i < 10; i++) {
  const name = 'luu quang tri';
}

console.log(name); // chỉ có phạm vi trong ngoặc => name is not define

// !: function scope
/**
 * pham vi biến trong function
 */

function sayHello() {
  const name = 'tri';

  function print() {
    const lastName = 'bi';
    console.log(lastName);
  }

  print();
  console.log(lastName); // bieens lastName bị giới hạn trong hàm print()
}

console.log(name); //biến name bị giới hạn trong hàm sayHello()

// !: lexical scope
/**
 * từ 1 biến nắm bên trong có thể truy cập 1 biến nằm bên ngoài
 */

// !: global scope
/**
 * không năm trong bất cứ hàm nào
 */
