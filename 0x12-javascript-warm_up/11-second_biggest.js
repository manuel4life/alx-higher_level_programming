#!/usr/bin/node

const args = process.argv.slice(2);
if (args.length <= 1) {
  console.log(0);
} else {
  const sorted = args.sort((x, y) => x - y);
  console.log(sorted[sorted.length - 2]);
}
