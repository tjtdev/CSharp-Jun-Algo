/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 * https://kalkicode.com/data-structure/single-linked-list-visualization
 */
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * SLL(Singly Linked List)
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
  constructor() {
    this.head = null;
  }

  /**
   * Determines if this list is empty.
   * @returns {boolean}
   */
  isEmpty() {
    //check if this.head is null;
    return this.head === null;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    // 0. Instantiate the newNode
    const newNode = new ListNode(data);

    // edge case: if head is null, head is the newNode
    if(this.head ===null){
      this.head = newNode;
      return;
    }

    // 1. Create a current to the first node
    let current = this.head;

    // 2.move the current to the last node
    while(current.next !==null){
      // 2.1 Move the current to the next node
      current = current.next;
    }

    // 3. assign c.next to newNode
    current.next = newNode;

    }
    /*
      0. Instantiate the newNode
        newNode
        (data) --> null    

      1. Create a current to the first node
        head
        (3) --> (7) --> (9) --> null
         c

      2.move the current to the last node
        head
        (3) --> (7) --> (9) --> null
                         c     .next

        newNode
        (data) --> null                

      3. assign c.next to newNode
                                newNode
        (3) --> (7) --> (9) --> (data) --> null
                         c

    */
    // level 2: insert a new node into emptyList

  /** BONUS:
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackMany(vals) {
    for (let i = 0; i < vals.length; i++) {
      this.insertAtBack(vals[i]);
    }
  }

  // -----------W1D3 -------------
      /**
     * Creates a new node with the given data and inserts that node at the front
     * of the list.
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront(data){
      // instantiate the ListNode with data
      const newNode = new ListNode(data);
      // pointer of the newNode to the original head
      newNode.next = this.head;
      // reassign the head
      this.head = newNode;
      // edge case: how do we handle an empty list
      // it will work anyway because this.head becomes the new node and its next is null anyway
    }

      /**
     * Removes the first node of this list.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The data from the removed node.
     */

  removeHead() {
    if(!this.head) return null;
    this.head = this.head.next;
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
  contains(data) {
    // create a variable for this.head
    let runner = this.head;
    // create a while loop
    while (runner) {
      // if this.head is = to the data return true
      if (runner.data === data) {
        return true;
      }
      // else, move runner to .next
      else {
        runner = runner.next;
      }
    }
    // If it goes through the while loop and nothing is a match return false
    return false;
  }

  /**
   * Removes the last node of this list.
   * @returns {any} The data from the node that was removed.
   * Base case: a list with more than 2 nodes
   * Edge case: a list with only 2 nodes
   * Edge case: a list with only 1 node
   * Edge case: a list that is empty
   */
  removeBack() {
    // for empty list
    if (!this.head) return null;
    // for if there is only one in the list
    if (!this.head.next) {
      let data = this.head.data;
      this.head = null;
      return data;
    }
    // create a runner variable at this.head
    let runner = this.head;
    // create a while loop that if runner.next.next DOESN'T = null then have runner become runner.next to get the next node untill you get null for next.next
    while (runner.next.next) {
      runner = runner.next;
    }
    // make the last variable = data to return it
    let data = runner.next.data;
    // make the runner.next = null
    runner.next = null;
    // return data
    return data;
  }

  size(){
    let current = this.head;
    let numNodes = 0;
    while (current) {
      current = current.next;
      numNodes++;
    }
    return numNodes;
  }

  /**
   * BONUS
   * Retrieves the data of the Kth to last node in this list.
   * @returns {any} The data of the Kth to last node or null
   *   if there is no second to last node.
   */
  kthToLast(k) {
    // find the size of the list 
    const numNodes = this.size();

    let current = this.head;
    // calculate size-k and progress the node
    for (let i = 0; i < numNodes - k; i++) {
      current = current.next;
    }

    return current.data;
  }
  kthToLast(k) {
    //create variables to for the runner
    let runner = this.head;
    let runner2 = this.head;

    for (let i = 0; i < k; i++) {
      if (!runner) return null;
      runner = runner.next;
    }
    while (runner) {
      runner = runner.next;
      runner2 = runner2.next;
    }
    return runner2 ? runner2.data : null;
  }


  /**
   * Removes the node that has the matching given val as it's data.
   * @param {any} val The value to compare to the node's data
   *   to find the node to be removed.
   * @returns {boolean} Indicates if a node was removed or not.
   */
  removeData(data) {
    //HINT: The list is constructed by connecting nodes with pointers
    // Play with the pointers so that you can remove that node from the list.
    //edge cases:
    if (!this.head) return false;
    if (this.head.data === data) {
      this.head = this.head.next;
      return true;
    }
    //create variable for runner
    let runner = this.head;
    //use runner.next to find if we match data
    // While loop to check runner.next
    while (runner.next) {
      //if runner.next.data match data
      //=>runner.next = runner.next.next
      if (runner.next.data === data) {
        runner.next = runner.next.next;
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  removeData(data){
    var headPointerNode = new ListNode(0);
    headPointerNode.next = this.head;
    var prev = headPointerNode;
    var curr = this.head;

    while(curr){
      if(curr.data === data){
        prev.next = curr.next;
        curr = curr.next;
      }else{
        prev = curr;
        curr = curr.next;
      }
    }
    this.head = headPointerNode.next;
  }


  /**
   * Reverses this list in-place without using any extra lists.
   * - Time: (?).
   * - Space: (?).
   * @returns {SinglyLinkedList} This list.
   */


  reverse(){
    let prev = null;
    let curr = this.head;

    while(curr){
      let nextNode = curr.next
      curr.next = prev
      prev = curr
      curr = nextNode
    }
    this.head = prev;
    return this;
  }


  reverse2() {
    /*
      Each iteration we cut out current's next node to make it the new head
      iteration-by-iteration example:
      1234 -> initial list, 'current' is 1, next is 2.
      2134 -> 'current' is still 1, next is 3.
      3214
      4321
    */
    if (!this.head || !this.head.next) {
      return this;
    }

    let current = this.head;

    while (current.next) {
      const newHead = current.next;
      // cut the newHead out from where it currently is
      current.next = current.next.next;
      newHead.next = this.head;
      this.head = newHead;
    }
    return this;
  }


  //given
  printList() {
    // if the list is empty?
    if (this.head === null) {
      console.log("This is an empty list");
      return;
    }
    console.log("HEAD: " + this.head.data);
    // how to traverse through different nodes?
    // 1. Create a temp variable to store curr ListNode
    let current = this.head;
    // 2. write a condition as long as current is not null
    while (current) {
      // as long as current is available (not null)
      // 3. print the current data
      console.log(current.data);
      // 4. (increment) move the current to the next node
      current = current.next;
    }
  }
}


const emptyList = new SLL();

const list1 = new SLL();
// head
// (3) --> (7) --> (9) --> null

emptyList.printList();

list1.printList();

list1.insertAtBack(3);
list1.insertAtBack(7);
list1.insertAtBack(9);
list1.insertAtBack(10);
list1.printList(); // 3, 7, 9, 10
// console.log(list1.isEmpty());

// Great job! And love how you make it a 1-line code for isEmpty!
// There is no list2. You can use emptyList to test
console.log(list1.kthToLast(10));