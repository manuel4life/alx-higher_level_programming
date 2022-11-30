#!/usr/bin/node

const list = require('./100-data').list;

let k = 0;
const newList = list.map(x => x * k++);
console.log(list);
console.log(newList);
