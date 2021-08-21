// destructuring array
const toys = ['ball', 'sword', 'arrow', 'water', 'fire'];
/**
 * const [indexName,indexName,indexName] = toys;
 */

const [ball, sword, arrow, ...rest] = toys;
console.log(rest);
