class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

/**
 * Class to represent a queue using a SLL to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue{
  constructor(){
    this.front = null;
    this.rear = null;

  }

    /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty(){
  }

    /**
   * Retrieves the data of the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  getFront(){

  }

    /**
   * Adds a new item with the data to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(data){
  }


  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The data of the first item or null if empty.
   */
  dequeue(){
  }

  // bonus
    /**
   * Check if the target value exists in the queue using the basic queue operations
   * Using basic operations (.enqueue, .dequeue, isEmpty, getFront)
   * Check if the queue is still the same
   * @returns {Boolean } 
   */
  contains(targetVal) {
    }

    printQueue(){ //for learning puspose
      if(!this.front){
        console.log("This queue is empty")
        return 
      }
      console.log("Front: " + this.front.data);
      var runner = this.front;
      while(runner){
        console.log(runner.data)
        runner= runner.next;
      }
      console.log("Rear: " +this.rear.data);
  }
}


var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");

q.printQueue(); //expected: front: "a", rear : "d"

q.dequeue(); 
q.printQueue(); //expected: front: "b", rear : "d"