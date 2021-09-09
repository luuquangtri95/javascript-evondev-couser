/**
 * Tìm tất cả sản phẩm có hỗ trợ free ship
 * 
Viết hàm findAllProducts(productList) để tìm ra tất cả product có isFreeShip=true.
 */
const productList = [
  { id: 1, name: 'iphone X', isFreeShip: true },
  { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
  { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
];

function findAllProducts(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  return productList.filter((product) => product.isFreeShip === true);
}

console.log(findAllProducts(productList));
