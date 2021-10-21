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
 * => tìm ra cái nơi mà biến đc định nghĩa
 */

const name = 'tri';
function sayHello() {
  const language = 'en';
  console.log(name); // lexical cuar biến name là 1 global scope

  function print() {
    console.log(language); // lexical của biến language là 1 function scope => hàm sayHello()
  }
}

// !: global scope
/**
 * không năm trong bất cứ hàm nào
 * => tuỳ vào môi trường sẽ có global obj khác nhau
 */

// !: scope chain

const fullName = 'tri';
function profile() {
  const fullName = 'bi';

  function sayName() {
    const fullName = 'tri bi';

    function writeName() {
      return fullName; // nó sẽ đi ngược lên tìm kiếm global scope

      /**
       * nó sẽ tìm trong hàm writeName có biến fullname k ?
       * nếu k có thì đi lên sayName()
       * nếu tiếp tục không có thì tìm profle()
       * nếu tiếp tục không có thì tìm global scope
       * nếu tiếp tục không có thì return "undefined"
       */
    }

    return writeName();
  }
  return sayName();
}
