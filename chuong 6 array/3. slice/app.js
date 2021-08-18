/**
 * slice(): tạo ra 1 mảng mớI copy của mảng ban đầu
 */
const animal = ['tiger', 'lion', 'horse', 'elephant'];
//slice(): tạo ra mảng mới y chang mảng ban đầu
const animal2 = animal.slice();
console.log(animal2);

//slice(start) =>> vi trí index trong mảng => sao chép mảng tại vị trí mong muốn
const animal3 = animal.slice(1);
console.log(animal3); //[ 'lion', 'horse', 'elephant' ]

//slice(start, end) =>> vị trí bắt đầu, vị trí kết thúc
//nó sẽ sap chép từ phần tử start đến phần tử end - 1
const animal4 = animal.slice(1, 3); // ["lion","horse"] =>> slice(start, end - 1)
console.log(animal4);

//slice(số âm)
/**
 * -1: lấy 1 phần tửu cuối
 * -2: lấy 2 phần tử cuối
 * -3: lấy 3 ....
 * .
 * .
 * .
 */
const animal5 = animal.slice(-2); // ['horse', 'elephant']
console.log(animal5);
