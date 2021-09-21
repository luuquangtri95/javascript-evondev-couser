const cars = [
  { name: 'Innova', price: 5000, brand: 'Toyota' },
  { name: 'Civic', price: 5200, brand: 'Honda' },
  { name: 'Fortuner', price: 7000, brand: 'Toyota' },
  { name: 'City', price: 9000, brand: 'Honda' },
  { name: 'City', price: 9000, brand: 'Honda' },
  { name: 'Audi v7', price: 5000, brand: 'Audi' },
];

function group(cars) {
  if (!Array.isArray(cars) || cars.length === 0) return [];

  let carsList = [];
  let obj = {};

  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    if (!(car.brand in obj)) {
      //create key car.brand
      obj[car.brand] = { brand: car.brand, cars: [] };

      let value = obj[car.brand];
      carsList.push(value);
    }

    if (car.brand in obj) {
      obj[car.brand].cars.push(car);
    }
  }

  console.log(carsList);
}

console.log(group(cars));
