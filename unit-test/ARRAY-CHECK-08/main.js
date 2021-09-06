/**
Kiểm tra có sản phẩm nhỏ hơn giá cho trước và free ship không
Viết hàm hasFreeShip(productList, price) để kiểm tra xem có product nào freeship và giá nhỏ hơn price
không?
 */

function hasFreeShip(productList, price) {
  if (!Array(productList) || price < 0) return 'is valid input';

  return productList.some((item) => {
    if (item.isFreeShip === true && item.price < price) {
      return true;
    }
  });
}

const productList = [
  { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
  { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 1500000 },
];

console.log(hasFreeShip(productList, 10000000));
