#!/usr/bin/node

/* Import Rectangle class from 4-rectangle.js
 * The constructor must take 1 argument: size
 * The constructor of Rectangle must be called (by using super())
 */

const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}

module.exports = Square;
