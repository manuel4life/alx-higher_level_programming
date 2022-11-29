#!/usr/bin/node

/*
 * A class that defines a Rectangle.
 * The Constructor accepts two arguments w and h
 * It initializes the attribute width with the value of w
 * And the Attribute hegiht with the value h.
 */

class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }
}
module.exports = Rectangle;
