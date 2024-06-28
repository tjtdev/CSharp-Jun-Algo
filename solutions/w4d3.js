const {Stack, Node} = require('./Stack')
// Stack: push, pop, peek, isEmpty
const {Queue} = require('./Queue')
// Queue: enqueue, dequeue, getFront, isEmpty

  /**
   * Compares 2 queues to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q1 q2 The queues to be compared 
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
function compareQueue(q1, q2) {
  if (q1.size != q2.size) {
    return false;
  }
  let isEqual = true;
  for (let count = 0; count < q1.size; count++) {
    const dQ1 = q1.dequeue();
    const dQ2 = q2.dequeue();
    if (dQ1.data !== dQ2.data) {
      isEqual = false;
    }
    q1.enqueue(dQ1);
    q2.enqueue(dQ2);
  }
  return isEqual;
}
  /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
function isPalindrome(q){
  if (q.isEmpty()){return true}
  let holder = null
  var tempStack = new Stack();
  var tempQ = new Queue();
  for (let i = 0; i < q.size; i++){
    var newNode = new Node()
    holder = q.dequeue()
    tempStack.push(holder)
    tempQ.enqueue(holder)
  }
  let isSame = true;
  while(!tempQ.isEmpty()){
    // dequeue the q (forward)
    let qData = tempQ.dequeue();
    // pop the stack (backward)
    let stackData = tempStack.pop();

    if(qData !== stackData) isSame = false;
    q.enqueue(qData);
  }
  return isSame;
  // Compare them and they should be the same if it is a palindrome
}

var test1 = new Queue();
test1.enqueue("a");
test1.enqueue("b");
test1.enqueue("c");
test1.enqueue("d");


var test2 = new Queue();
test2.enqueue("a");
test2.enqueue("b");
test2.enqueue("c");
test2.enqueue("d");

var test3 = new Queue();
test3.enqueue("a");
test3.enqueue("b");
test3.enqueue("c");
test3.enqueue("b");
test3.enqueue("a");

var test4 = new Queue();
test4.enqueue("a");
test4.enqueue("b");
test4.enqueue("c");
test4.enqueue("d");
test4.enqueue("e");



console.log(compareQueue(test1, test3), "|| expected: false") // expected: false
console.log(compareQueue(test1, test2), "|| expected: true") // expected: true
console.log("==== Bonus: Uneven but matches until the end of 1 queue ====");
console.log(compareQueue(test2, test4), "|| expected: false") // expected: false
// console.log(isPalindrome(test2), "|| expected: false"); // expected : false
// console.log(isPalindrome(test3), "|| expected: true"); // expected : true