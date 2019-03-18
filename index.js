var sum = 0;
var start = process.hrtime.bigint();

for(var i = 0; i < 1000; i++)
{
    if(i % 5 == 0 || i % 3 == 0)
    sum += i;
}

var end = process.hrtime.bigint();
var diff = parseInt(`${end - start}`);

console.log(`Sum of all multiples of 3 or 5 upto 1000 = ${sum}. Completed in ${diff.toLocaleString()}ns`);