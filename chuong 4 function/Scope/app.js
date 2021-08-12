/**
 * phạm vi của biến có thể truy xuất được
 */

// global scope, function scope

let myName = 'tri'; // global scope
function logYourName() {
  let name2 = 'my'; // chỉ hoạt động trong phạm vi function
}

console.log(myName);
