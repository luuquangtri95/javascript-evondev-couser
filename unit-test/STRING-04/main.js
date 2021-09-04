/**
 * Ðếm số lượng email có trong câu
 * 
Viết hàm countEmails(str) để đếm số lượng email có trong str

Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
phần domain nêu trên)
Trả về số lượng email tìm thấy từ chuỗi truyền vào.
Lưu ý: không sử dụng regular expression.

Ví dụ:
countEmails('my email should be abc@super.com') --> 1
countEmails('my email should be a@a.com') --> 0
countEmails('my email should be @ bla .com') --> 0
countEmails('my email should be easy@frontend.com or easy@frontend.com.vn or
easy@frontend.vn') --> 3
 */

function countEmails(str) {
  if (!String(str) || str === '') return 0;

  const strList = str.toLowerCase().split(' ');
  const emailList = strList.filter((email) => email.includes('@'));

  for (let i = 0; i < emailList.length; i++) {
    let prefix = emailList[i].indexOf('@');
    let supfix = emailList[i].slice(prefix + 1, emailList[i].indexOf('.'));
    let domain = emailList[i].slice(emailList[i].indexOf('.'));

    if (prefix < 3 || supfix.length < 3 || !checkDomain(domain)) {
      return 0;
    }

    return emailList.length;
  }
}

function checkDomain(domain) {
  if (domain === '.com' || domain === '.com.vn' || domain === '.vn') {
    return true;
  }
  return false;
}

console.log(countEmails('my email should be a@a.com'));
console.log(
  countEmails('my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn')
);
console.log(countEmails('my email should be @ bla .com'));
console.log(countEmails('my email should be abc@super.com'));
