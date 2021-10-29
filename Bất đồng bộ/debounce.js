// kỹ thuật debounce: khi nào trong 1 khoảng tg mà mình k có sự kiện j khác thì nó sẽ trigger event, còn nếu trong khoảng tg đợi mà mình vẫn còn thực hiện thì sẽ remove tg trước đó

// giảm thiểu số lần xảy ra trigger function

//setting

function log() {
  console.log('Tada');
}

function debounce(callback, wait) {
  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, wait);
  };
}

const debounceLog = debounce(log, 500);

debounceLog();
debounceLog();
debounceLog();
debounceLog();
debounceLog();
