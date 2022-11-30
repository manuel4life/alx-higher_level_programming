#!/usr/bin/node

/*
 * A class that defines a Rectangle.
 * The Constructor accepts two arguments w and h
 * It initializes the attribute width with the value of w
 * And the Attribute hegiht with the value
 * If w or h is equal to 0 or not a positive integer, create an empty object
 * Create an instance method called print() that prints the rectangle using the character X
*/

class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let k = 0; k < this.height; k++) {
      console.log('X'.repeat(this.width));
    }
  }
}
module.exports = Rectangle;
