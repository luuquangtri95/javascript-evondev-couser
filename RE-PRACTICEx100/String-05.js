function countURLs(str) {
  if (!String(str) || str.length === 0) return 0;

  const strList = str
    .split(' ')
    .filter(
      (item) =>
        item.startsWith('http://') ||
        item.startsWith('https://') ||
        item.startsWith('ws://') ||
        item.startsWith('wss://')
    );

  for (let i = 0; i < strList.length; i++) {
    let str = strList[i];

    let domainName = str.slice(str.lastIndexOf('/') + 1, str.lastIndexOf('.'));

    let domain = str.slice(str.lastIndexOf('.'));

    if (domainName.length < 3 || !checkDomian(domain)) {
      // console.log(i);
      strList.splice(i, 1);
    }
  }

  return strList.length;
}

function checkDomian(domain) {
  if (domain === '.com' || domain === '.com.vn' || domain === '.vn') {
    return true;
  }

  return false;
}

console.log(countURLs('my website is: http://ezfrontend.com you can visit it')); //--> 1
console.log(
  countURLs(
    'my website is: http://ezfrontend.com http://ezfrontend.com https://ez.com you can visit it'
  )
); //--> 0 vì phần tên domain chỉ có 2 ký tự ez nên không hợp lệ
