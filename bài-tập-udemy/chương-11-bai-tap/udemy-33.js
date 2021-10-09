function filterProducts(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  return productList.filter((product) => product.price > 100000);
}
