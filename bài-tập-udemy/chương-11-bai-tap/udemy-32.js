const carts = [
  { id: 1, product: { id: 1, price: 100000 }, quantity: 4 },
  { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
];

function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

  let cartTotal = 0;

  for (let i = 0; i < cartItemList.length; i++) {
    let cartItem = cartItemList[i];

    cartTotal += calcCartItem(cartItem);
  }

  return cartTotal;
}

function calcCartItem(cart) {
  const { price } = cart.product;
  const { quantity } = cart;

  return price * quantity;
}

const cartsV2 = [
  { id: 1, product: { id: 1, price: 100000 }, quantity: 4 },
  { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
];

function calcCartTotalV2(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

  return cartItemList.reduce((prev, cart) => {
    const { price } = cart.product;
    const { quantity } = cart;
    let total = price * quantity;
    return prev + total;
  }, 0);
}

console.log(calcCartTotalV2(carts));
