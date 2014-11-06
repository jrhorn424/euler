var _ = require("underscore");

function sumEvenFibs(upto) {
    return _.chain(generateFibonacciArray(upto))
        .select(function(fib) {
            return fib % 2 === 0;
        })
        .reduce(function(memo, evenFib) {
            return memo + evenFib;
        }, 0)
        .value();
}

function generateFibonacciArray(upto) {
    var arr = [];
    for (var i = 1; fibonacci(i) <= upto; i++) {
        arr.push(fibonacci(i));
    }
    return arr;
}

function fibonacci(n) {
    if (n < 2) {
        return 1;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

console.log(sumEvenFibs(4000000));