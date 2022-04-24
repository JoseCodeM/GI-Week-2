// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

//compare x & y return the smaller of the two
function min(x,y){
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

//Test
console.log(min(2,1)); //1
console.log(min(25,23)); //23