var Lazy = require("lazy.js");

function sumEvenFibs(upto) {
    return Lazy(generateFibonacciArray(upto))
        .filter(isEven)
        .sum();
}

function generateFibonacciArray(upto) {
    var arr = [];
    for (var i = 0; fibonacci(i) <= upto; i++) {
        arr.push(fibonacci(i));
    }
    return arr;
}

function fibonacci(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

function isEven(n) { return n % 2 === 0; }

console.log(sumEvenFibs(4000000));
