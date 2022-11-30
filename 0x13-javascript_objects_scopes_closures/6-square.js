#!/usr/bin/node

/* Import Rectangle class from 5-square.js
 * Create an instance method called charPrint(c) that prints the rectangle using the character c
 * If c is undefined, use the character X
 */

class Square extends require('./5-square') {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let k = 0; k < this.height; k++) {
      console.log(c.repeat(this.width));
    }
  }
}
module.exports = Square;
