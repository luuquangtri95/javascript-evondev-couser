/**
 * sao chép 1 object (clone object)
 */
const user = {
  name: 'tri',
};

const newUser = user; // 2 thằng này cùng trỏ về 1 vùng nhớ và thay đổi, nên 2 object sẽ bị thay đổi
newUser.name = 'quang tri';
console.log(user); //{ name: 'quang tri' }
console.log(newUser); //{ name: 'quang tri' }

// =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// spread oparator
const newUser = { ...user }; // sao chép key value của object user và lưu vào newUser
