/**
  * Reference: http://btv.melezinek.cz/binary-search-tree.html
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
 */
 class BSTNode { // TreeNode , node
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null; 
    }
  }

    /**
     * Represents an ordered tree of nodes where 
     * the data of left nodes are <= to their parent and
     * the data of right nodes are > their parent's data.
     */
    class BinarySearchTree {
      constructor() {
        this.root = null;
      }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal : The number to search for
     * @returns {boolean} : Indicates if the searchVal was found.
     */
    contains(searchVal) {
    }

      /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal: The number to search for in the node's data.
     * @returns {boolean} : Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {}

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode : The node to start from 
     * @returns {number|null} : The range of this tree or a sub tree 
     * depending on if the startNode is the root or not.
     *   
     */
    range(startNode = this.root) {}


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
          `${node.data}`
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
  2   8  13  20
  */
  const threeLevelTree = new BinarySearchTree();
  threeLevelTree.root = new BSTNode(10);
  threeLevelTree.root.left = new BSTNode(5);
  threeLevelTree.root.left.left = new BSTNode(2);
  threeLevelTree.root.left.right = new BSTNode(8);
  threeLevelTree.root.right = new BSTNode(15);
  threeLevelTree.root.right.right = new BSTNode(20);
  threeLevelTree.root.right.left = new BSTNode(13);
  threeLevelTree.print()


