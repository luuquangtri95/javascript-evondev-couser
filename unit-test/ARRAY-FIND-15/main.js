/**
 * Tìm sản phẩm đầu tiên có tên bắt đầu bằng chữ iphone (không phân biệt hoa
thường)
Viết hàm findFirstIPhone(productList) để tìm ra sản phẩm dòng IPhone đầu tiên

 */

const productList = [
  { id: 1, name: 'Samsung' },
  { id: 2, name: 'IPHONE X' },
  { id: 3, name: 'iPhone 12 Pro' },
];

function findFirstIPhone(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return undefined;

  return productList.find((product) => product.name.toLowerCase().startsWith('iphone'));
}

console.log(findFirstIPhone(productList));
