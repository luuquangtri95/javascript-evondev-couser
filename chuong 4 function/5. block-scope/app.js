// block scope
if (2 > 1) {
  let mess = 'hello';
  console.log(mess);

  //từ khoá var là global scope có thể gọi bên ngoài function
  //hosted
  var mess2 = 'hello';
}
//
console.log(mess2);
