#!/usr/bin/node

const myNum = 'C is fun';
const x = parseInt(process.argv[2]);
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
    console.log(myNum);
  }
}
