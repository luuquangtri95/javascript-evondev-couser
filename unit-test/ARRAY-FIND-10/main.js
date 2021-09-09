/**
 * Tìm vị trí của sản phẩm có mã code là = abc
 * 
Viết hàm findProductByCode(productList, code) để tìm ra vị trí product có mã sản phẩm bằng với code
 */

function findProductByCode(productList, code) {
  if (!Array.isArray(productList) || productList.length === 0) return undefined;

  return productList.findIndex((product) => product.code === code);
}
const productList = [
  { id: 1, code: 'ip01', name: 'IPhone 16' },
  { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
];

console.log(findProductByCode(productList, 'ip01')); // 0
console.log(findProductByCode(productList, 'ip03')); // -1
