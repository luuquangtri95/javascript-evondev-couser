const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  if (seconds < 0) return -1;
  if (seconds < 10) return `00:00:0${seconds}`;

  //calc hour, min, sec
  let calcHour = Math.trunc(seconds / SECONDS_PER_HOUR).toString();
  seconds = seconds % 3600;
  let calcMin = Math.trunc(seconds / SECONDS_PER_MIN).toString();
  let calcSec = Math.trunc(seconds % SECONDS_PER_MIN).toString();

  return `${('0' + calcHour).slice(-2)}:${('0' + calcMin).slice(-2)}:${('0' + calcSec).slice(-2)}`;
}
console.log(formatTime(3690));

/**
 * calcH: 3690 / 3600 => 1h
 * second: 3690 % 3600 => 90
 * calcM : 90 / 60 => 1m
 * calcS: 90 % 60 => 30s
 */
