/**
 * Tìm email đầu tiên trong mảng
Viết hàm findFirstEmail(strList) để tìm ra email hợp lệ đầu tiên có trong mảng strList
Ðiều kiện của một email hợp lệ:

Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.

Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.

Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
phần domain nêu trên)

Trường hợp không tìm thấy email thoả yêu cầu thì trả về undefined.
 */

function findFirstEmail(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return false;

  for (let i = 0; i < strList.length; i++) {
    let prefix = strList[i].slice(0, strList[i].indexOf('@'));
    let supfix = strList[i].slice(strList[i].indexOf('@') + 1, strList[i].indexOf('.'));
    let domain = strList[i].slice(strList[i].indexOf('.'));
    if (checkPrefixAndSupfix(prefix, supfix) && checkDomain(domain)) {
      return strList[i];
    }
  }
  return undefined;
}

function checkPrefixAndSupfix(prefix, supfix) {
  if (prefix.length < 3 || supfix.length < 3) {
    return false;
  }
  return true;
}

function checkDomain(domain) {
  if (domain.includes('.com') || domain.includes('.com.vn') || domain.includes('.vn')) {
    return true;
  }
  return false;
}

console.log(findFirstEmail(['abc@easy.frontend', 'abc@gmail.com'])); // 'abc@gmail.com'
console.log(findFirstEmail(['abc@easy.frontend'])); // undefined
