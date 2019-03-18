module.exports = function(){
    var factor = 2;
    var num = 600851475143;

    while (num != 1)
    {
        if (num%factor == 0) 
            num /= factor;
        else
            factor += 1;
    }
    return factor;
}