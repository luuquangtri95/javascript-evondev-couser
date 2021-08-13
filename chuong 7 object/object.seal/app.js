/**
 * object.seal()
 * tuongw tu freeze, cho phép chỉnh sửa, nhưng k được thêm key value mới
 */

const user = {
  name: 'tri',
};
const newUser = Object.seal(user);
newUser.age = 20; // not add key and value to object
newUser.name = 'my';

console.log(newUser);
