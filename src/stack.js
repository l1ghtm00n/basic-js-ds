const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  push(element) {
    if (this.stack === undefined) {
      this.stack = [];
    } 
    this.stack.push(element);
  }

  pop() {
    if (this.stack === undefined) {
      this.stack = [];
    } 
    return this.stack.pop();  
  }

  peek() {
    if (this.stack === undefined) {
      this.stack = [];
    }
    let top = this.stack.slice(-1)[0];
    return top;    

  }
}

module.exports = {
  Stack
};
