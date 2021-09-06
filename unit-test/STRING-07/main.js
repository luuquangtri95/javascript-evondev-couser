/**
 * Thay thế params thành value tương ứng
Viết hàm fillPath(path, params) để thay thế các chuỗi params trong path bằng các giá trị tương ứng trong
object params.
 */

function fillPath(path, params) {
  if (!String(path) || path.trim() === '') return '';
  if (params === {}) return '';

  const pathList = path.split('/');

  for (let i = 0; i < pathList.length; i++) {
    if (pathList[i].indexOf(':') !== -1) {
      pathList[i] = pathList[i].slice(1);
    }

    for (let key in params) {
      if (pathList[i] === key) {
        pathList[i] = params[key];
      }
    }
  }

  return pathList.join('/');
}

console.log(fillPath('/products/:productId', { productId: 123 }));
console.log(
  fillPath('/categories/:categoryId/products/:productId', {
    categoryId: 1,
    productId: 2,
  })
);
console.log(fillPath('/categories/:categoryId/products/:productId', { productId: 2 }));
