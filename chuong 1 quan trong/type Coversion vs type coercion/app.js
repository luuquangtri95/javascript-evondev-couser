// type conversion vs type coercion
/**
 * giống: chuyển đổi kiểu dữ liệu
 * type coercion: ép kiểu tự động (ép kiể ngầm), js tự động chuyển kiểu dữ liệu
 * type conversion:ép kiểu tường minh,  có thể tự chuyển đổi hoặc yêu cầu chuyển đổi
 */

// ví dụ:

const a = 1 + '2'; // tự động convert số 1 thành string "1"+"2" = 12
const b = 1 - '2'; // chuyển số "2" về số 2 => 1 - 2 = -1

const error = 'something wrong';
const hasError = Boolean(error); // convert string to boolean
