var problemNum = parseInt(process.argv[2]);

const algo = require("./algo/problem" + problemNum);

var start = process.hrtime.bigint();

var result = algo();
console.log(`Result of Problem ${problemNum} = ${result}`);

var end = process.hrtime.bigint();
var diff = parseInt(`${end - start}`);

console.log(`Sum of all multiples of 3 or 5 upto 1000 = ${result}. Completed in ${diff.toLocaleString()}ns`);