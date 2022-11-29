#!/usr/bin/node

const x = parseInt(process.argv[2]);
if (isNaN(x)) {
  console.log('Missing size');
}
for (let i = 0; i < x; i++) {
  console.log('X'.repeat(x));
}
