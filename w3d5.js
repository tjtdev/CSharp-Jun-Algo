

/**
 * Class to represent a Node for a DoublyLinkedList.
 */
class ListNode {
  /**
   * Executed when the new keyword is used to construct a new node instance.
   * @param {any} data The data the new node will store.
   */
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

  isEmpty() {
    return this.head === null;
  }
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      runner = runner.next;
    }
    return vals;
  }


  insertAtBack(data) {
    const newTail = new ListNode(data);

    if (this.isEmpty()) {
      // if no head set the newTail to be both the head and the tail
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      newTail.prev = this.tail;

      this.tail = newTail;
    }
    return this;
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

  
  /**
   * Rotates a DoublyLinkedList clockwise a specified number of places
   * by moving nodes from the tail to the head
   * - Time: O(?).
   * - Space: O(?).
   * @param {int} places The number of places to rotate the list.
   * @returns {DoublyLinkedList} This list.
   * Example:
   * head                        tail
   * (1) -> (2) -> (3) -> (4) -> (5) -> null
   *
   * Rotate 1 (clockwise):
   * head                        tail
   * (5) -> (1) -> (2) -> (3) -> (4) -> null
   *
   * Rotate 2:
   * head                        tail
   * (4) -> (5) -> (1) -> (2) -> (3) -> null
   *
   * Rotate 8:
   * (3) -> (4) -> (5) -> (1) -> (2) -> null
   * 
   */
  // BONUS: allow negative places to rotate counter-clockwise
  rotate(places) {
  }



  /**
   * Finds the given node in this list and removes it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {DLLNode} node A node in this list.
   * @returns {DoublyLinkedList} This list.
   */
  removeData(data){

  }

}
const list1 = new DoublyLinkedList();
list1.insertAtBackMany([1,2,3,4,5])
console.log(list1.toArray())

list1.rotate(3) 
// should get the same result for rotate(8) / rotate(13) 
console.log(list1.toArray()) //  [ 3, 4, 5, 1, 2 ]



