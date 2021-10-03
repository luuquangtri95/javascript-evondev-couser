const cartItemList = [
  { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
  { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
];

function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;
  let sum = 0;

  for (let i = 0; i < cartItemList.length; i++) {
    let quantity = cartItemList[i].quantity;
    let priceProductObj = cartItemList[i].product;
    let { price, ...rest } = priceProductObj;

    let calcCartTotal = price * quantity;
    sum += calcCartTotal;
  }

  return sum;
}

console.log(calcCartTotal(cartItemList));

/**
 * length: 2
 * sum = 0;
 *
 * ! i:0
 * quantity: 1
 * priceProductObj: {id:1, price:50000}
 * price: 50000
 * calcCartTotal = quantity * price = 50000
 * sum = 0 + cartCartTotal = 0 + 50000 = 50000
 *
 *
 * ! i:1
 * quantity: 2
 * priceProductObj: {id:2, price: 100000}
 * price: 100000
 * calcCartTotal = quantity * price = 100000
 * sum = 50000 + 100000*2 = 250000
 */
