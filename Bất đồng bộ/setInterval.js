function countdown(seconds) {
  let currSeconds = seconds;

  const intervalId = setInterval(() => {
    console.log(currSeconds);

    if (currSeconds <= 0) {
      clearInterval(intervalId);
    }

    currSeconds--;
  }, 1000);
}

countdown(5);
