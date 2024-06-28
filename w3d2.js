/**
 * Ref: https://www.cs.usfca.edu/~galles/visualization/Heap.html
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder. 
     * Not using 0th index makes calculating the left and right
     * children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null]; 
  }
  /**
   * Retrieves the size of the heap, ignoring the null placeholder.
   * @returns {?number} Null if empty.
   */
  size() {
    if (this.heap.length > 1){
    // - 1 since 0 index is unused
    return this.heap.length-1; 
    }
    return null;
  }
  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    return this.heap[1];
  }

  /**
   * Inserts a new number into the heap and maintains the heaps order.
   * 1. Push new num to back then.
   * 2. Iteratively swap the new num with it's parent while it is smaller than its parent.
   *   parent : Math.floor(i/2)
   *   left child: i*2   | right child: i*2+1
   * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */
 insert(num) {
    this.heap.push(num);
   // variable current set to the total length of array
    let current = this.size()
   // checking if the length of array is greater than 0
    while (current > 0) {

      let parent = Math.floor(current/2);
      if(this.heap[current] < this.heap[parent]){
        // swap them 
        [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
        current = parent;
      } else {

        break;
      }
    }
  }

  /**
   * Extracts the min num from the heap and then re-orders the heap to
   * maintain order so the next min is ready to be extracted.
   * 1. Swap the last node with the min node
   * 2. As min is the last node after swapping, pop the last node off 
   * 3. Find the smaller child
   * 4. Iteratively swap the old last node that is now at idx1 with it's
   *    smallest child IF the smallest child is smaller than it.
    *   parent : Math.floor(childNodeIdx/2)
   *   left child: parentIdx*2   | right child: parentIdx*2+1
   * - Time: O(log n) logarithmic due to shiftDown.
   * - Space: O(1) constant.
   * @returns {?number} The min number or null if empty.
   */
  extract() {}


  /*
   * Logs the tree horizontally with the root on the left and the index in
   * parenthesis using reverse inorder traversal.
   */
  printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
    if (parentIdx > this.heap.length - 1) {
      return;
    }

    spaceCnt += spaceIncr;
    this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
    );

    this.printHorizontalTree(parentIdx * 2, spaceCnt);
  }
}


var heap = new MinHeap();
heap.insert(1)
heap.insert(11)
heap.insert(10)
heap.insert(19)
heap.insert(4)
heap.insert(3)
heap.insert(21)


heap.printHorizontalTree()


if(4 > undefined){
  console.log("True")
}else{
  console.log("False")
}