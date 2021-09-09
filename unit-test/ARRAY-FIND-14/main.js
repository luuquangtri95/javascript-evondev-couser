/**
 * Tìm sản phầm đầu tiên có free ship
Viết hàm findProductHavingFreeShip(productList) để tìm ra sản phẩm đầu tiên có free ship.
 */

const productList = [
  { id: 1, name: 'IPhone 5', isFreeShip: false },
  { id: 2, name: 'IPhone X', isFreeShip: true },
  { id: 3, name: 'IPhone 12 Pro', isFreeShip: true },
];

function findProductHavingFreeShip(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return undefined;

  return productList.find((product) => product.isFreeShip === true);
}

console.log(findProductHavingFreeShip(productList));
