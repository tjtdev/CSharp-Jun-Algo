/**
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
 http://btv.melezinek.cz/binary-search-tree.html
 */
class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where
 * the data of left nodes are <= to their parent and
 * the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Determines if this tree is empty.
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    return this.root === null;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  min(current = this.root) {
    if(!current) return null;
    
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
  minRecursive(current = this.root) {
    if(current == null){
      return null;
    }
    if(current.left == null){
      return current.data;
    }
    return this.minRecursive(current.left);
  } 

  
  minRecursive(current = this.root) {
    if(current ==null) return null; // for empty tree
    
    if (current.left) {
      this.minRecursive(current.left);
      console.log(current.data);
    } else {
      return current.data;
    }
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   * @returns {number} The largest integer from this tree.
   */
  max(current = this.root) {
    if(current ==null) return null; // for empty tree
    
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  /**
   * Retrieves the largest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current is default as root of the tree
   *    the tree is being traversed.
   * @returns {number} The largest integer from this tree.
   */
  maxRecursive(current = this.root) {
    if(current == null){
      return null;
    }
    if(current.right == null){
      return current.data;
    }
    return this.maxRecursive(current.right);
  } 

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal : The number to search for
   * @returns {boolean} : Indicates if the searchVal was found.
   */
  contains(searchVal) {
    if (!this.root) {
      return null;
    }
    let current = this.root;
    //let running = true;

    while (current != null) {
      if (current.data === searchVal) {
        return true;
      } else if (current.data < searchVal) {
        current = current.right;
      } else if (current.data > searchVal) {
        current = current.left;
      }
    }
    return false; // reach the end
  }

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal: The number to search for in the node's data.
   * @returns {boolean} : Indicates if the searchVal was found.
   */
  containsRecursive(searchVal, current = this.root) {
    if (current === null) {
      return false;
    }

    if (current.data === searchVal) {
      return true;
    } 
    else if (current.data < searchVal) {
      return this.containsRecursive(searchVal, current.right);
    } 
    else if (current.data > searchVal) {
      return this.containsRecursive(searchVal, current.left);
    }
  }



  /**
   * Calculates the range (max - min) from the given startNode.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} startNode : The node to start from
   * @returns {number|null} : The range of this tree or a sub tree
   * depending on if the startNode is the root or not.
   *
   */
  range(startNode = this.root) {
    if (!startNode) { return false; }
    let leftRunner = startNode;
    let rightRunner = startNode;

    while (leftRunner.left) {
      leftRunner = leftRunner.left;
    }

    while (rightRunner.right) {
      rightRunner = rightRunner.right;
    }
    return rightRunner.data - leftRunner.data;
  }


  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
  insert(newVal) {
    //create new node base on newVal
    const newNode = new BSTNode(newVal);

    //if the list is empty set to root
    if (this.root === null) {
      this.root = newNode;
      return this;
    }


    let currentNode = this.root;

    while (true) {
      if (newNode.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (newNode.data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  insert2(newVal) {
    let current = null
    let runner = this.root;
    if(this.root === null){
      this.root = new BSTNode(newVal);
      return this;
    }
    while(runner != null ){
      current = runner
      if (newVal < runner.data){
        runner = runner.left;
      }
      else if (newVal > runner.data){
        runner = runner.right;
      }
    }
    if (newVal < current.data){
       current.left = new BSTNode(newVal)
    }
    else { 
       current.right = new BSTNode(newVal)
    }
    return this
  }

  /**
  * Depth first search
   * DFS Preorder: (CurrNode, Left, Right) 
   * Usage: create a copy of the tree,  
   * Converts this BST into an array following DFS preorder.
   * Example on the fullTree var:
   * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
   * @param {Node} node The current node during the traversal 
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPreorder(curr = this.root, vals = []) {
    if(curr) {
      vals.push(curr.data)
      this.toArrPreorder(curr.left, vals)
      this.toArrPreorder(curr.right, vals)
    }
    return vals;
  }

  /**
   * DFS Inorder: (Left, CurrNode, Right)
   * Usage: get the numbers in order
   * Converts this BST into an array following DFS inorder.
   * Example on the fullTree var:
   * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
   * @param {Node} node The current node during the traversal 
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrInorder(node = this.root, vals = []) {
    if(node) {
      this.toArrInorder(node.left, vals) 
      vals.push(node.data)
      this.toArrInorder(node.right, vals)
    }
    return vals;
  }

  /**
   * DFS Postorder (Left, Right, CurrNode)
   * Usage: delete the tree
   * Converts this BST into an array following DFS postorder.
   * Example on the fullTree var:
   * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
   * @param {Node} node The current node during the traversal 
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
  toArrPostorder(node = this.root, vals = []) {
    if(node) {
      this.toArrPostorder(node.right, vals)
      this.toArrPostorder(node.left, vals) 
      vals.push(node.data)
    }
    return vals;
  }


  /**
   * Recursively counts the total number of nodes in this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during the traversal of this tree.
   * @returns {number} The total number of nodes.
   */
  size(node = this.root) { 
    if (node === null) { return 0 }
    return this.size(node.left) + 1 + this.size(node.right);
  }


  size2(node = this.root) {
    if(!node) return 0;
    let count = 1 // counting the current node
    count += this.size2(node.left)
    count += this.size2(node.right)
    return count
  }

  /**
   * Calculates the height of the tree which is based on how many nodes from
   * top to bottom (whichever side is taller).
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {number} The height of the tree.
   */
  height(node = this.root) {
    // A node that is null has a height -1 so that the root node has a 0 height
    if (!node) return -1;
    // return the sum of Math.max from node.left and node.right
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  height2(node = this.root) {
    if (!node) {
      return 0;
    } else {
      var leftHeight = this.height2(node.left)
      var rightHeight = this.height2(node.right)
      var level = Math.max(leftHeight, rightHeight) + 1;
    }
    return level;
  }

  /**
   * Determines if this tree is a full tree. A full tree is a tree where every
   * node has both a left and a right except for the leaf nodes (last nodes)
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {boolean} Indicates if this tree is full.
   */
  isFull(node = this.root) {
    if (node === null) { 
      return false 
    }

    if(node.left && node.right) {
     return this.isFull(node.left) && this.isFull(node.right)
    } else if(node.left===null && node.right === null) {
      return true
    }
    return false
  }// zero children / 2 children}

  
  // HELPER METHOD
  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`,
    );

    this.print(node.left, spaceCnt);
  }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
// oneNodeTree.print()

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
// twoLevelTree.print()

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2    7  13  20
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(7);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.right = new BSTNode(20);
threeLevelTree.root.right.left = new BSTNode(13);
threeLevelTree.print();
// console.log(emptyTree.isEmpty())
// console.log(oneNodeTree.isEmpty())
// console.log(threeLevelTree.min())
// console.log(twoLevelTree.min())
// console.log(threeLevelTree.max())
// console.log(twoLevelTree.max())
console.log(threeLevelTree.minRecursive());
console.log(twoLevelTree.minRecursive());
// console.log(threeLevelTree.maxRecursive());
// console.log(twoLevelTree.maxRecursive());
