class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Class to represent a queue using a SLL to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    //if front is pointing to null => it's empty
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Retrieves the data of the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  getFront() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.data;
  }

  /**
   * Adds a new item with the data to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(data) {
    // if(!data)return;

    //declare the new item first
    const newNode = new Node(data);
    //1. check if the queue is empty
    if (this.isEmpty()) {
      //if the queue is empty => make the new item our front and rear
      this.front = newNode;
      this.rear = newNode;
    }
    //2.Else: add the newItem to rear
    else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
    return this.size;
  }

  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The data of the first item or undefined if empty.
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    //1. move the front to front.next
    const removedData = this.front.data
    this.front = this.front.next;
    this.size--;
    return removedData;
  }

  // bonus
  /**
   * Check if the target value exists in the queue using the basic queue operations
   * Using basic operations (.enqueue, .dequeue, isEmpty, getFront)
   * Check if the queue is still the same
   * @returns {Boolean }
   */
  contains(targetVal) {
    if (this.isEmpty()) {
      return false;
    }
    //compare the targetVal with the deque item until we reach the rear
    //loop thru the rear
    let isFound = false;
    const copiedQueue = new Queue();
    while (!this.isEmpty()) {
      let dequeueItem = this.dequeue();
      //will get the front
      if (dequeueItem === targetVal) {
        isFound = true;
      }
      //very first time the dequeueItem is the front and rear at the same time
      copiedQueue.enqueue(dequeueItem);
      //update the the next dequeueItem
    }

    while (!copiedQueue.isEmpty()) {
      this.enqueue(copiedQueue.dequeue());
    }
    return isFound;
  }

  // printQueue again after .contains?

  printQueue() {
    //for learning puspose
    console.log("Front: " + this.front.data);
    var runner = this.front;
    while (runner) {
      console.log(runner.data);
      runner = runner.next;
    }
    console.log("Rear: " + this.rear.data);
  }
}


module.exports = {Queue, Node}