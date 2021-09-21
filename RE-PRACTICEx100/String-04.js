function countEmails(str) {
  if (!String(str) || str.length === 0) return [];

  const strList = str.split(' ').filter((item) => item.includes('@'));

  for (let i = 0; i < strList.length; i++) {
    let str = strList[i];

    let prefixStr = str.slice(0, str.indexOf('@'));

    let supfixStr = str.slice(str.indexOf('@') + 1, str.indexOf('.com'));

    let domain = str.slice(str.indexOf('.'));

    if (str.length < 4 || prefixStr.length < 3 || supfixStr.length < 3 || !checkDomian(domain)) {
      strList.splice(0, 1);
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
console.log(countEmails('my email should be a@a.com')); //--> 0
console.log(
  countEmails('my email should be  easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn')
);
console.log(countEmails('my email should be abc@super.com')); //--> 1
console.log(countEmails('my email should be @ bla .com')); //--> 0
