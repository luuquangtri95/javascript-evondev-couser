// const cars = [
//   { name: 'Innova', price: 5000, brand: 'Toyota' },
//   { name: 'Civic', price: 5200, brand: 'Honda' },
//   { name: 'Fortuner', price: 7000, brand: 'Toyota' },
//   { name: 'City', price: 9000, brand: 'Honda' },
//   { name: 'City', price: 9000, brand: 'Honda' },
//   { name: 'Audi v7', price: 5000, brand: 'Audi' },
// ];

// function group(cars) {
//   if (!Array.isArray(cars) || cars.length === 0) return [];
//   let carsArrList = [];
//   let obj = {};

//   for (let i = 0; i < cars.length; i++) {
//     let car = cars[i];

//     if (!(car.brand in obj)) {
//       //create key and value
//       obj[car.brand] = { brand: car.brand, count: 0, cars: [] };

//       // push key of obj into array
//       carsArrList.push(obj[car.brand]);
//     }

//     //push key === brand into cars array
//     obj[car.brand].cars.push(car);

//     // update value key count
//     obj[car.brand].count = obj[car.brand].cars.length;
//   }

//   // sort small to large

//   // for (let i = 0; i < carsArrList.length - 1; i++) {
//   //   for (let j = i + 1; j < carsArrList.length; j++) {
//   //     let temp;

//   //     // 3 > 2 => hoán vị 2 3
//   //     if (carsArrList[i].count > carsArrList[j].count) {
//   //       temp = carsArrList[i]; // 3
//   //       carsArrList[i] = carsArrList[j]; // 3 => 2 => i = 2
//   //       carsArrList[j] = temp; // 2 => 3 => j = 3
//   //     }
//   //   }
//   // }

//   //sort large to small

//   // for (let i = 0; i < carsArrList.length - 1; i++) {
//   //   for (let j = i + 1; j < carsArrList.length; j++) {
//   //     let temp;

//   //     if (carsArrList[i].count < carsArrList[j].count) {
//   //       temp = carsArrList[i];
//   //       carsArrList[i] = carsArrList[j];
//   //       carsArrList[j] = temp;
//   //     }
//   //   }
//   // }

//   // sort tăng dần theo thứ tự alphabet

//   // for (let i = 0; i < carsArrList.length - 1; i++) {
//   //   for (let j = i + 1; j < carsArrList.length; j++) {
//   //     let temp;

//   //     if (carsArrList[i].brand > carsArrList[j].brand) {
//   //       temp = carsArrList[i];
//   //       carsArrList[i] = carsArrList[j];
//   //       carsArrList[j] = temp;
//   //     }
//   //   }
//   // }

//   // sort giảm dần theo thứ tự alphabet

//   // for (let i = 0; i < carsArrList.length - 1; i++) {
//   //   for (let j = i + 1; j < carsArrList.length; j++) {
//   //     let temp;

//   //     if (carsArrList[i].brand < carsArrList[j].brand) {
//   //       temp = carsArrList[i];
//   //       carsArrList[i] = carsArrList[j];
//   //       carsArrList[j] = temp;
//   //     }
//   //   }
//   // }

//   // sort tăng dần theo số lượng và bảng chữ cái

//   return carsArrList;
// }
// // console.log(group(cars));

function group(cars) {
  if (!Array.isArray(cars) || cars.length === 0) return [];

  let carsArrList = [];
  let map = {};

  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];

    if (!(car.brand in map)) {
      map[car.brand] = { brand: car.brand, count: 0, cars: [] };

      carsArrList.push(map[car.brand]);
    }

    map[car.brand].cars.push(car);

    map[car.brand].count = map[car.brand].cars.length;
  }

  return carsArrList;
}

const cars = [
  { name: 'Innova', price: 5000, brand: 'Toyota' },
  { name: 'Civic', price: 5200, brand: 'Honda' },
  { name: 'Fortuner', price: 7000, brand: 'Toyota' },
  { name: 'City', price: 9000, brand: 'Honda' },
  { name: 'City', price: 9000, brand: 'Honda' },
  { name: 'Audi v7', price: 5000, brand: 'Audi' },
];

console.log(group(cars));
