/**
 * Tổng tiền của giỏ hàng
Viết hàm calcCartTotal(cartItemList) để tính tổng tiền của giỏ hàng.

 */

const cartItemList = [
  { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
  { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
];

function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

  const newcartItemList = [...cartItemList];

  return newcartItemList.reduce((prev, curr) => {
    let { quantity } = curr;

    return curr.product.price * quantity + prev;
  }, 0);
}

console.log(calcCartTotal(cartItemList));
