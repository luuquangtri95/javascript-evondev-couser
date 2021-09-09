/**
 * Tìm url cuối cùng trong mảng
Viết hàm findLastUrl(strList) để tìm ra URL cuối cùng có trong mảng strList

Ðiều kiện cho một URL hợp lệ:

URL có định dạng: protocol://domain.com/path-name

URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss

Domain có thể là .com, .com.vn hoặc .vn

Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ

 */

function findLastUrl(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return undefined;
  let last;

  for (let i = 0; i < strList.length; i++) {
    let protocol = strList[i].slice(0, strList[i].lastIndexOf('/') + 1);
    let nameDomain = strList[i].slice(protocol.length, strList[i].lastIndexOf('.'));
    let domain = strList[i].slice(strList[i].lastIndexOf('.com'));

    if (
      checkProtocal(protocol) === true &&
      checkDomain(domain) === true &&
      checkDomainName(nameDomain) === true
    ) {
      last = strList[i];
    }
  }

  return last;
}

function checkProtocal(protocol) {
  if (
    protocol.startsWith('http') ||
    protocol.startsWith('https') ||
    protocol.startsWith('ws') ||
    protocol.startsWith('wss')
  ) {
    return true;
  }
  return false;
}

function checkDomain(domain) {
  if (domain.includes('.com') || domain.includes('.com.vn') || domain.includes('.vn')) {
    return true;
  }
  return false;
}

function checkDomainName(nameDomain) {
  if (nameDomain < 3) {
    return false;
  }
  return true;
}
console.log(findLastUrl(['https://google.com', 'wss://chat.sample.com']));
