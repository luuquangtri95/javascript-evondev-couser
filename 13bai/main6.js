const cars = [
  { name: 'Innova', price: 5000 },
  { name: 'Fortuner', price: 7000 },
  { name: 'Civic', price: 5200 },
];

function removeFromArray(cars, price) {
  if (!Array.isArray(cars) || cars.length === 0) return 0;

  return cars.filter((car) => car.price < price);
}

console.log(removeFromArray(cars, 7000));
