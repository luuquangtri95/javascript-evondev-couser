/**
 * 
 * : Ðếm số lượng url có trong câu
Viết hàm countURLs(str) để đếm số lượng URLs có trong câu.
URL có định dạng: protocol://domain.com/path-name
URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
Domain có thể là .com, .com.vn hoặc .vn
Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ
Trả về số lượng URLs tìm thấy trong câu.
Lưu ý: không sử dụng regular expression.
Ví dụ:
countURLs('my website is: http://ezfrontend.com you can visit it') --> 1
countURLs('my website is: https://ez.com you can visit it') --> 0 vì phần tên domain chỉ có 2 ký tự ez
nên không hợp l
 * 
 */

function countURLs(str) {
  if (!String(str) || str === '') return 0;

  const strList = str.split(' ');
  const urlString = strList.filter((item) => {
    if (
      item.startsWith('https') ||
      item.startsWith('http') ||
      item.startsWith('wss') ||
      item.startsWith('ws')
    ) {
      return item;
    }
  });

  for (let i = 0; i < urlString.length; i++) {
    let domainName = urlString[i].slice(urlString[i].indexOf('//') + 2, urlString[i].indexOf('.'));
    let domain = urlString[i].slice(urlString[i].indexOf('.'));

    if (!checkDomainName(domainName) || !checkDomain(domain)) {
      return 0;
    }

    return urlString.length;
  }
}

function checkDomainName(domainName) {
  if (domainName.length < 3) return false;

  return true;
}

function checkDomain(domain) {
  if (domain === '.com' || domain === '.com.vn' || domain === '.vn') {
    return true;
  }

  return false;
}

console.log(countURLs('my website is: https://ez.com you can visit it'));
console.log(countURLs('my website is: http://ezfrontend.com you can visit it'));
