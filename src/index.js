const algo = require("./algo/problem1.js");

var start = process.hrtime.bigint();

var sum = algo();

var end = process.hrtime.bigint();
var diff = parseInt(`${end - start}`);

console.log(`Sum of all multiples of 3 or 5 upto 1000 = ${sum}. Completed in ${diff.toLocaleString()}ns`);