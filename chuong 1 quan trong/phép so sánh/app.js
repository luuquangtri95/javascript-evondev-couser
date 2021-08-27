/**
 * kết quả của phép so sánh sẽ trả về true / false
 */
/**
 * 1 < 2 : true
 * 1 >= 2 : false
 * "2" == "1": false
 * "2" > "1" : true
 * 3 == "3" : false
 * 4 === "4" : true
 * null == undefined : true
 * null == 0 : true
 * null >= 0 : false
 * "" == 0 : true
 */

/**
 * so sánh cùng kiểu dữ liệu:
 * - number: 1 < 2 ....
 * - string: so sánh từng ký tự 1 từ trái sang phải
 * ví du: "a" > "b" => false
 * "aa" <= b => true , do ký tự a ban đầu bé hơn ký tự b (bảng mã Unicode UTF-16)
 * "abc" < "abd" : false, do ký tự d > ký tự c (so sanh a vs a, b vs b, c vs d (điều kiện sai))
 *
 * - boolean: true > false (true = 1, false = 0)
 */

/**
 * so sánh khác kiểu dữ liệu:
 * =>>> tự động convert về number để so sánh
 * 123 == "123" => true "123" tự convert thành 123
 * false == 0 //true
 * true == 1 //true
 *
 * "0" == false //true
 * "2" > true //true
 */

/**
 * == khác gì với ===
 * - giữ nguyên kiểu dữ liệu
 * - "nếu khác kiểu dữ liệu lập tức return false"
 * - cùng kiểu dữ liệu, so sanh như các phươnge thức phía trên
 *
 *
 * 111 === "111" false
 * 0 === false => false
 * 1 === 1 true
 * "abc" === "abc" true
 */

/**
 * so sánh null vs undefined
 * null == undefined => true
 * null === undefined =>> false
 *
 * null convert => number = 0
 * null > 0 false
 * null == 0 false (null == undefined)
 * null >= 0 true (trường hợp đặc biệt null sẽ chuyển về 0 trả về true)
 */
