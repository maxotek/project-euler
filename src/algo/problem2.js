module.exports = function(){
    var sum = 0;
    var i = 1, j = 2;

    while(j < 4000000)
    {
        if(j % 2 == 0)
            sum += j;
        
        var temp = i + j;
        i = j;
        j = temp;
    }

    return sum;
}