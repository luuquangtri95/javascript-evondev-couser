/**
 * create linked list
 * +insertHead
 * +printList
 */

function createLinkedList() {
  let head = null;
  let tail = null;

  function getHead() {
    return head;
  }

  function getTail() {
    if (head == null) return null;

    let tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }

    return tail;
  }

  function getSize() {
    if (head == null) return 0;

    let current = head;
    let count = 0;
    while (current != 0) {
      count++;

      current = current.next;
    }

    return count;
  }

  function findIndexByData(data) {
    if (head == null) return -1;

    let current = head;
    let i = 0;
    while (current != 0) {
      if (current.data === data) return i;
      //go to next node
      i++;
      current = current.next;
    }

    return -1;
  }

  function findWithCallBack(callback) {
    if (head == null) return undefined;

    let current = head;
    let i = 0;

    while (current != null) {
      if (callback(current.data, i)) return current.data;
    }

    return undefined;
  }

  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
      return;
    }

    //otherwise, linked list has some item

    newNode.next = head;
    head = newNode;
  }

  function insertTail(newData) {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newData;
    } else {
      const tail = getTail();
      tail.next = newNode;
    }

    return head;
  }

  function insertBeforePosition(newData, position) {
    if (position <= 0 || head == null) {
      insertHead(newData);

      return head;
    }

    let prev = head;
    let current = head;
    let i = 0;

    while (current != null && i < position) {
      prev = current;
      current = current.next;

      i++;
    }

    const newNode = {
      data: newData,
      next: current,
    };

    prev.next = newNode;

    return head;
  }

  function printList() {
    if (head == null) return;

    let current = head;
    while (current != null) {
      //print data
      console.log(current.data);

      current = current.next;
    }
  }

  return {
    insertTail,
    insertHead,
    printList,
    getHead,
    getTail,
    getSize,
    findIndexByData,
    findWithCallBack,
  };
}

const numberLinkedList = createLinkedList();

numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);
//1 -> 2 -> 3 -> 4 -> 5

console.log(numberLinkedList.getHead());
console.log(numberLinkedList.getTail());
console.log(numberLinkedList.getSize());
// console.log(numberLinkedList.findIndexByData(2));
console.log(numberLinkedList.findWithCallBack((x) => x > 5));

numberLinkedList.printList();
