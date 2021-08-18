// cách sao chép mảng (clone arr)
/**
 * lý do cần sao chép: vì lỡ dùng phương thức nào đó anh huognws đến mảng gốc, thì mảng gốc có thể mất phần tử
 * gây ra sai kết quả không mong muốn
 */

const student = ['a', 'b', 'c', 'd'];

// sử dụng phương thức slice()
const sliceStudent = student.slice();
console.log(sliceStudent);

//spread operator
const spreadArr = [...student];
console.log(spreadArr);
