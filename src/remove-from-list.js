const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function addNode(list, curr, next) {
  let node = new ListNode();
  list.value = curr;
  if (next===null) {
    return list;
  } else {
    list.next = node;
  }  
  return list;
}

function removeKFromList(l, k ) {
  let res = new ListNode();
  let curr = l.value;
  let next = l.next;
  let resNext;
  let i=0;
  while (true) {
    if (i===0) {
      if (curr===k) {
        curr = next.value;
        next = next.next;
      } else {
        res = addNode(res,curr,next);
        resNext = res.next;
        curr = next.value;
        next = next.next;
        i++;
      }
    } else {
      if (curr===k) {
        if (next===null) {
          let delNext = res.next;
          while (true) {
            if (delNext.next.value===undefined) {
              delNext.next=null;
              break;
            } else {
              delNext = delNext.next;
            }
          }
          break;
        }
        curr = next.value;
        next = next.next;
      } else {
        resNext = addNode(resNext,curr,next);
        if (next===null) {
          break;
        }
        resNext = resNext.next;
        curr = next.value;
        next = next.next;
      }      
    }
  }
  return res;
}

module.exports = {
  removeKFromList
};
