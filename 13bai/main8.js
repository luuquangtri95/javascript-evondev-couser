const arr = [
  { name: 'Innova', price: 5200, brand: 'Toyota' },
  { name: 'Civic', price: 7000, brand: 'Honda' },
  { name: 'Fortuner', price: 9000, brand: 'Toyota' },
  { name: 'City', price: 6500, brand: 'Honda' },
];

function sortArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  return arr.sort((a, b) => a.price - b.price);
}

console.log(sortArray(arr));
