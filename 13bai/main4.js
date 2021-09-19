function buildCar(name, price, color, brand) {
  let obj = {};

  obj['name'] = name;
  obj['price'] = price;
  obj['color'] = color;
  obj['brand'] = brand;

  return obj;
}
console.log(buildCar('Innova', 1000000000, 'Trắng', 'Toyota'));
