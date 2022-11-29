#!/usr/bin/node

const b = parseInt(process.argv[2]);
if (isNaN(b)) {
  console.log(1);
  process.exit(1);
}

console.log(factorial(b));
function factorial (b) {
  if (b === 0) {
    return 1;
  }
  return b * factorial(b - 1);
}
