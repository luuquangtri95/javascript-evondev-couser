const myTime = new Date(1995, 3, 3);

const myYear = myTime.getFullYear();
const myMonth = myTime.getMonth();
const myDate = myTime.getDate();
const prefixMonth = myMonth < 10 ? '0' : '';
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);
