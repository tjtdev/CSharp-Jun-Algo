/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor. (.data, .next, .prev)
*/

class DLLNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // TODO: implement the constructor.

  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(value) {
    const newNode = new DLLNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head
      this.head.prev = newNode;
      this.head = newNode;
    }
    
  }

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBack(data) {
    const newNode = new DLLNode(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }

  }

  // EXTRA
  /**
   * Removes the middle node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the removed node.
   */
  removeMiddleNode() {
    // if empty list
    if (this.isEmpty()) {
      return null
    }
    // if only 1 node exists

    if (this.head == this.tail){
      const removedData = this.head.data;
      this.head = null;
      this.tail = null;
      return removedData;
    }


    let runner1 = this.head
    let runner2 = this.tail

    while(runner1 != runner2 || runner1.next != runner2)
    {
      runner1 = runner1.next
      runner2 = runner2.prev
    }
      const prevNode = runner1.prev;
      const nextNode = runner1.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;

      runner1.next = null;
      runner1.prev = null;
      return runner1.data
  }

  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this list is empty.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Rotates a DoublyLinkedList clockwise a specified number of places
   * by moving nodes from the tail to the head
   * - Time: O(?).
   * - Space: O(?).
   * @param {int} places The number of places to rotate the list.
   * @returns {DoublyLinkedList} This list.
   * Example:
   * (1) -> (2) -> (3) -> (4) -> (5)
   *
   * Rotate 1 :
   * (5) -> (1) -> (2) -> (3) -> (4)
   *
   * Rotate 2:
   * (4) -> (5) -> (1) -> (2) -> (3)
   * 
   */
  // BONUS: allow negative places to rotate counter-clockwise
  rotate(places) {
  if (this.isEmpty()){return null}
  let count = this.toArray().length
  places = places % count
  for (let i = 0; i < places; i++){
    
    // Create the linkage from tail to head
    this.head.prev = this.tail 
    this.tail.next = this.head

    // update the new tail .next
    this.tail.prev.next = null

    // Update the head & the tail
    this.head = this.tail
    this.tail = this.tail.prev
    }
  }

  rotate2(places) {
      // no need to rotate more times than there are nodes
      if (this.size === 0) return this;
      places %= this.size;
      if (places < 0) places += this.size;
      // no rotation
      if (places === 0) return this;
      // iterate to find our rotation point
      let runner = this.tail;
      while (places) {
        places--;
        runner = runner.prev;
      }
      // move pointers
      // Create linkage
      this.tail.next = this.head;
      this.head.prev = this.tail;

      // update the head & tail
      this.head = runner.next;
      this.tail = runner;
      this.head.prev = null;
      this.tail.next = null;
      return this;
  }

  /**
   * Finds the given node in this list and removes it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {DLLNode} node A node in this list.
   * @returns {DoublyLinkedList} This list.
   */
  removeData(data){
    if (this.isEmpty()){return null}

    let current = this.head;
    while (current.next){
      if (current.data === data){
        console.log("Found it")
        current.next.prev = current.prev
        current.prev.next = current.next
        current.next = null
        current.prev = null
        break
      }
      current = current.next
    }
    // console.log("That data does not exist")
  }

  
  /**
   * Converts this list to an array of the node's data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear, array grows as list length increases.
   * @returns {Array<any>} All the data of the nodes.
   */
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      runner = runner.next;
    }
    return vals;
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBackMany(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }
}

const emptyList = new DoublyLinkedList();
const list1 = new DoublyLinkedList();
list1.insertAtBackMany([5, 8, 13, 14]);
list1.insertAtFront(7);
list1.insertAtFront(4);
list1.insertAtFront(5);
list1.insertAtBack(100);
list1.insertAtBack(0);
console.log(list1.toArray());
// console.log(list1.removeMiddleNode())

