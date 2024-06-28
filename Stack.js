//ref:
//https://isaaccomputerscience.org/concepts/dsa_datastruct_stack?examBoard=all&stage=all

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Class to represent a stack using a linkedlist to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    //check if the stack is empty
    return this.top === null;
    //return a boolean
  }

  /**
   * Adds a new given item to the top of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top.
   */
  push(data) {
    // Create a new node for the pushed data
    const newNode = new Node(data);
    // check if the stack is empty, top is the newNode
    if (this.isEmpty()) {
      this.top = newNode;
      // else Push the new node to the top of the stack
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++
  }

  /**
   * Removes the top / last item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed data or undefined if this stack was empty.
   */
  pop() {
  // check if the stack is empty, top is the newNode
    if (this.isEmpty()) {
      return undefined;
    } 
    const removedData = this.top.data
    this.top = this.top.next
    this.length--
    return removedData
  }

  /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data of top / last item of this stack.
   */

  peek() {
    if (this.isEmpty()) {
      return undefined;
    } 
    return this.top.data
  }

  /**
   * Returns the size of this stack.
   * @returns {number} The length.
   * without .next (push, pop, peek, isEmpty)
   */
  size() {
    return this.length
  }

  size2(){
    const tempStack = new Stack();

    while(!this.isEmpty()){
    // 1. pop the stack until it's empty
    // 2. store the popped item into a temp stack
      const poppedItem = this.pop();
      tempStack.push(poppedItem);
    }

    // 3. pop all the items from the temp stack back into the original stack
    while(!tempStack.isEmpty()){
      this.push(tempStack.pop());
    }
  }

  printStack() {
    console.log("TOP");
    let runner = this.top;
    while (runner) {
      console.log(runner.data);
      runner = runner.next;
    }
  }
}




module.exports = {Stack, Node}