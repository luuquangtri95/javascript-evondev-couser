/**
 * URI(identifier) là tập hợp URN (name) + URL(location)
 */

/**
 * https://www.example.com:80/path/to/mylife.html?key1=value&key2=value2#SomewhereInTherDocument
 *
 * https : scheme / protocol
 * www.example.com: domain name
 * 80:port
 * path/to/mylife.html: path to the file
 * ?key1=value&key2=value2: parameters
 * #SomewhereInTheDocument: Anchor
 */

//create new Url

const url = new URL('https://ezfrontend.com/blog?page=1&limit=10#title');
console.log(url);

//create URLsearchParams

const params = new URLSearchParams('?_page=1&_limit:10');
console.log(params);

params.get('_page'); // 1
params.get('_limit'); //10
params.get('_order'); //null

params.set('_page', 2);
params.toString(); //?_page=2&_limit:10   =>> convert từ obj params về lại query string

params.append('_page', 3);
params.toString(); //?_page=2&_limit:10&_page=3

params.has('_page'); //true
params.has('_order'); //false

//->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
 * href : lấy url => windown.location.href
 * replace : di chuyển qua trang khác và không thể back về trang cũ => windown.location.replace("url")
 * assign: di chuyển qua trang khác và có thể back về trang trước đó => window.location.assign("url")
 */

/**
 * history API
 *
 * window.location.back();
 * window.location.forward()
 */
