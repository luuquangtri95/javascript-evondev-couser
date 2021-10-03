const myTime = new Date(1995, 3, 3);

const myYear = myTime.getFullYear();
const myMonth = myTime.getMonth();
const myDate = myTime.getDate();
const prefixMonth = myMonth < 10 ? '0' : '';
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);

// write function, print age
function printAge(birth = 1990) {
  if (birth < 0 || typeof birth !== 'number') return -1;

  const now = new Date();
  const CURRENT_YEAR = now.getFullYear();
  return CURRENT_YEAR - birth;
}
const yourAge = printAge(2001);

console.log(`nam nay tuoi cua ban la: ${yourAge}`);

// write function coundown every(từng) second "based on (dựa vào)" input time
// exemple: 30 minute reduce(giảm) 0 => notify "time out(hết giờ)"

function counDown(minute = 1) {
  let SECOND_OF_MINUTE = minute * 60;
  let counter = 0;
  const timer = setInterval(function () {
    counter++;
    console.log(counter);
    if (counter === SECOND_OF_MINUTE) {
      clearInterval(timer);
    }
  }, 1000);

  return timer;
}

console.log(counDown(1));

/**
 * viết chương trình có tên là timeSince, đầu vào là thời gian đầu vào so với thời gian hiển thị, vd bạn đang chát với 1 bạn A, sau đó bạn A ofline và sau dó vài phút thì hiển thị bạn A vừa onl 3p trước, 3 ngày trước...vv
 */
function timeSince(date) {
  //current time - date
  const now = new Date();
  const yourDate = new Date(date);
  const seconds = Math.trunc((now.getTime() - yourDate.getTime()) / 1000); // return mili seconds =>> print seconds / 1000 =>> xoa phan thap phan bang Math.trunc()
  let timer = seconds / 31557600; // year
  if (timer > 1) {
    console.log(`${Math.trunc(timer)} năm trước`);
    return;
  }
  timer = seconds / 2678400; // month
  if (timer > 1) {
    console.log(`${Math.trunc(timer)} tháng trước`);
    return;
  }
  timer = seconds / 604800; // week
  if (timer > 1) {
    console.log(`${Math.trunc(timer)} tuần trước`);
    return;
  }
  timer = seconds / 86400; // day
  if (timer > 1) {
    console.log(`${Math.trunc(timer)} ngày trước`);
    return;
  }
  timer = seconds / 3600; // hour
  if (timer > 1) {
    console.log(`${Math.trunc(timer)} giờ trước`);
    return;
  }
  timer = seconds / 60; // minute
  if (timer > 1) {
    console.log(`${Math.trunc(timer)} phút trước`);
    return;
  }
  timer = seconds; // seconds
  if (timer > 1) {
    console.log(`${Math.trunc(timer)} giây trước`);
    return;
  }
}
// 3p trước, 3 ngày trước...vv =>>
//1 năm = 365 * 24 * 60 * 60 = 31557600
//1 tháng = 31 * 24 * 60 * 60 = 2678400
//1 tuần = 7 * 24 * 60 * 60 = 604800
//1 ngày = 1 * 24 * 60 * 60 = 86400
//1 giowf = 1 * 60 * 60 = 3600
//1 phút = 1 * 60 = 60
console.log(timeSince('Mon Aug 09 2021 02:08:20 GMT+0700 (Giờ Đông Dương)'));
