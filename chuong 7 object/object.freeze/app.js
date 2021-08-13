/**
 * object.freeze()
 * đóng băng object, không cho chỉnh sửa object ban đầu(no edit key and value)
 */

const car = {
  brand: 'BMW',
};
const newCar = Object.freeze(car);
newCar.brand = 'audi'
console.log(newCar);
