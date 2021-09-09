/**
 * Tìm tất cả sản phẩm thuộc dòng iphone và còn hàng trong kho
 * 
Viết hàm findAllIphones(productList) để tìm ra tất cả các product có tên chứa chữ iphone (ko phân biệt
hoa thường) và vẫn còn hàng trong kho (amount > 0)
 */

const productList = [
  { id: 1, name: 'Luxury IPhone X', amount: 1 },
  { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
  { id: 3, name: 'iphone 20 Pro', amount: 2 },
];

function findAllIphones(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  return productList.filter(
    (product) => product.name.toLowerCase().includes('iphone') && product.amount > 0
  );
}
console.log(findAllIphones(productList));
