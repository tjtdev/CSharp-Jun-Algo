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
class Stack{
  constructor(){
    this.top=null;
  }

  isEmpty(){
    //check if the stack is empty
    //return a boolean 
  }

    /**
   * Adds a new given item to the top of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top.
   */
  push(data){

  }


  /**
   * Removes the top / last item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed data or undefined if this stack was empty.
   */
  pop(){
  }

    /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data of top / last item of this stack.
   */
  peek(){
  }


  /**
   * Returns the size of this stack.
   * @returns {number} The length.
   * without .next (push, pop, peek, isEmpty)
   */
  size(){
  }

  printStack(){ 
    if(!this.top){
      console.log("This is empty")
      return 
    }
    console.log("TOP")
    let runner = this.top;
    while(runner){
      console.log(runner.data);
      runner= runner.next
    }
  }
}

let s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.printStack(); 
//expected:
// TOP
// [ 3 ] 
// [ 2 ]
// [ 1 ]

console.log(s1.pop()); //expected: [ 3 ]
s1.printStack();
//expected: 3
// TOP
// [ 2 ] 
// [ 1 ]