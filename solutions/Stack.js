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
    if(this.top === null){
      return false
    }
    else { return true }
  }

    /**
   * Adds a new given item to the top of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top.
   */
  push(data){
    let node = new Node(data)
    if (this.top == null){
      this.top = node;
    } else {
      node.next = this.top
      this.top = node;
    }
  }


  /**
   * Removes the top / last item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed data or undefined if this stack was empty.
   */
  pop(){
    if (this.top === null)
    {
      return null;
    }
    let temp = this.top
    this.top = temp.next
    temp.next = null
    return temp.data

  }

    /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data of top / last item of this stack.
   */
  peek(){
    if(this.top === null){
      return null
    }
    let val = this.top
    return val.data
  }


  /**
   * Returns the size of this stack.
   * @returns {number} The length.
   * push, pop, peek, isEmpty
   */
  size(){
    let count = 0;
    const tempStack = new Stack();
    while(!this.isEmpty()){
      const poppedData = this.pop();
      tempStack.push(poppedData);
      count++;
    }
    while(!tempStack.isEmpty()){
      this.push(tempStack.pop());
    }
    return count;
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

//console.log(s1.size())

console.log("Pop: "+s1.pop()); //expected: [ 3 ]
s1.printStack();
//expected: 3
// TOP
// [ 2 ] 
// [ 1 ]

console.log("Peek: " + s1.peek())
console.log("Size: " + s1.size())
