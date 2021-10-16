const cityList = [
  { id: 1, name: 'tp hcm' },
  { id: 2, name: 'tp phan thiet' },
];

const studentList = [];

const cityMap = cityList.reduce((map, city) => {
  map[city.id] = city;

  return map;
}, {});

//using map
const cityMap = new Map();
cityList.forEach((city) => {
  cityMap.set(city.id, city);
});

console.log(cityMap);
