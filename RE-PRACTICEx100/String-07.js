function fillPath(path, params) {
  if (!String(path) || path.trim() === '') return '';
  if (params === {}) return '';

  const pathItemList = path.split('/');

  for (let i = 0; i < pathItemList.length; i++) {
    pathItemList[i] = pathItemList[i].slice(pathItemList[i].indexOf(':') + 1);

    // for in an obj params
    for (let key in params) {
      if (pathItemList[i] === key) {
        pathItemList[i] = params[key];
      }
    }
  }

  return pathItemList.join('/');
}

console.log(fillPath('/products/:productId', { productId: 123 }));
console.log(
  fillPath('/categories/:categoryId/products/:productId', {
    categoryId: 1,
    productId: 2,
  })
);
console.log(fillPath('/categories/:categoryId/products/:productId', { productId: 2 }));
