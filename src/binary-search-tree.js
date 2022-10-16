const { NotImplementedError, ListNode } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
    // this.treeRoot.right = null;
    // this.treeRoot.left = null;    
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      } 
      const newNode = new Node(data);

      if (data === node) {
        return node;
      }

      if (data>node.data) {
        node.right = addNode(node.right, data);
      } else {
        node.left = addNode(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return this.find(data) ? this.find(data).data === data : false;
  }

  find(data) {
    function findNode (node,data) {
      let result = null;
      if (node) {
        if (node.data === data) {
          return node;
        }
        
        if (data > node.data) {
          result = findNode(node.right, data);
        } else {
          result = findNode(node.left, data);
        }
      }
      return result;
    }
    return findNode(this.rootNode,data);
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode,data);

    function removeNode(node,data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = removeNode(node.right,data);
        return node;
      } else if (data < node.data){
        node.left = removeNode(node.left,data);
        return node;
      } else {

        if (!node.right) {
          node = node.left;
          return node;
        } 
        
        if (!node.left) {
          node = node.right;
          return node;
        } 

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right,minRight.data);
        return node;
      }      
    }
  }

  min() {
    let min = this.rootNode.left;
    if (!min) {
      return this.rootNode.data;
    }
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    let max = this.rootNode.right;
    if (!max) {
      return this.rootNode.data;
    }
    while (max.right) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};