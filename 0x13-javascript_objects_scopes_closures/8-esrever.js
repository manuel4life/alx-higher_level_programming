#!/usr/bin/node
exports.esrever = function (list) {
  const newList = [];
  const x = list.length;
  for (let y = 0; y < x; y++) {
    newList.push(list.pop());
  }
  return newList;
};
