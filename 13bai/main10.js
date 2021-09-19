function todayToString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDay();

  return `ngày ${day} tháng ${month} năm ${year}`;
}

console.log(todayToString());
