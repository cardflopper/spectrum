//random int from 0 to n-1

function randomInt(n){
    if (n == 1)
        return Math.round(Math.random());
    else
        return Math.floor(Math.random()*n);
}
