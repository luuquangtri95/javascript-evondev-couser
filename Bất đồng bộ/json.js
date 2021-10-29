//JSON

/**
 * JSON.parse(text) => JSON -> javascript value (number, obj, array...vv)
 * JSON.stringify(value) => javascript value => JSON string
 */

//! 1 số trường hợp lưu ý

//obj có key là undefined, khi chuyển về json sẽ bỏ key đó

const student = { id: 1, name: 'trie', age: undefined };
JSON.stringify(student); // "{id:1, name:"trie"}"

const list = [null, undefined, NaN];
JSON.stringify(list); // "[null, null, null]"

//! JSON.parse

JSON.parse('123');
JSON.parse('true');
JSON.parse('null');
JSON.parse('{}');
JSON.parse('[]');

JSON.parse('0123'); // syntax err
JSON.parse('NaN'); // syntax err
JSON.parse('Infinity'); // syntax err

JSON.parse('{"id":123}');


