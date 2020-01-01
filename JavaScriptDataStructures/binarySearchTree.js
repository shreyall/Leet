class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //functions to be implemented
  // insert (data)
  // remove(data)
  // Helper function to insert
  //find min Node
  // find root node
  // inorder
  // preorder
  // postorder
  // search(node, data)

  // ------------------------------------------------------------ insert --
  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
    // } else if (newNode.data === node.data) {
    //   if (node.left === null) {
    //     node.left = newNode;
    //   } else if (node.right === null) {
    //     node.right = newNode;
    //   } else {
    //     this.insertNode(node.right);
    //   }
    // }
    else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  // ----------------------------------------------------------- remove --
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if ((node.left = null)) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
      } else {
        temp = this.findMinNode(node.right);
        node.data = temp.data;
        node.right = this.removeNode(node.right, temp.data);
        return node;
      }
    }
  }

  //inorder traversal
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  //helper functions
  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.left) {
      return this.search(node.left, data);
    } else if (data > node.right) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  getRoot() {
    return this.root;
  }
}

var BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
BST.inorder(BST.root);
