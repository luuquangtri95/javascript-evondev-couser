/**
 * memory heap: lưu trữ object array function (lưu trữ các biến thuộc tham chiếu)
 * memory stack: lưu trữ các biến static (bool, string, number)
 *
 * call stack: mỗi lần gọi 1 hàm, hàm đó sẽ được push vào call stack, thực thi xong sẽ pop khỏi call stack
 *
 * ? những cái bên call stack không xử lý được như: DOM, xhr, settimeout...vv sẽ đưa qua WEB API
 *
 * khi xử lý xong bên web api sẽ được đưa xuống callback quere
 *
 * => stack => last in first out
 * => quere => first in first out
 *
 * ! đợi khi nào stack EMPTY thì mới được đưa callback quere đầu tiên đẩy lên call stack thực hiện
 */

/**
 * callback queue: macrotask - "task queue"
 *
 * promise queue: microtask - microtask queue (ưu tiên hơn callback queue - ưu tiên đưa promise queue vào call stack trước)
 */
