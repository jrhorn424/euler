var _ = require('lazy.js');

var square = function square (n) {
  return Math.pow(n, 2);
};

var sum = function sum (n, m) {
  return n + m;
};

var sumOfSquares = function sumOfSquares (range) {
  return range.map(square).reduce(sum);
};

var squareOfSum = function squareOfSum (range) {
  return square(range.reduce(sum), 2);
};

var difference = function difference (range) {
  return squareOfSum(range) - sumOfSquares(range);
};

console.log(difference(_.range(1,11)));
console.log(difference(_.range(1,101)));
