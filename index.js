var sum = 0;

for(var i = 0; i < 1000; i++)
{
    if(i % 5 == 0 || i % 3 == 0)
    sum += i;
}

console.log(`Sum of all multiples of 3 or 5 upto 1000 = ${sum}`);