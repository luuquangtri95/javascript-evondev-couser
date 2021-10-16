function createQueue() {
  const queue = [];

  function getFront() {
    return queue.length > 0 ? queue[0] : undefined;
    // return queue[0]; // vì mảng rổng phần tử vị trí 0 là undefined
  }

  function getBack() {
    return queue.length > 0 ? queue[queue.length - 1] : undefined;
  }

  function getSize() {
    return queue.length;
  }

  function enqueue(data) {
    queue.push(data);
  }

  function dequeue() {
    return queue.shift();
  }

  return {
    getFront,
    getBack,
    getSize,
    enqueue,
    dequeue,
  };
}
