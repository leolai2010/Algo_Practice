// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for(let row = 0; row < n; row++){
        let level = '';
        for(let column = 0; column < (2*n-1); column++){
            // the difference between this question and the steps 
            // is that we have to find a mid point in order to 
            // know when to insert # or space 
            // as row is increasing the space dec while # inc
            const midpoint = Math.floor((2*n-1)/2)
            if(midpoint - row <= column && midpoint + row >= column){
                level += '#';
            } else {
                level += ' ';
            }
    
        }
        console.log(level)
    }
}
//this will be my first attempt at this question
function pyramid(n, row = 0, level = ''){
    //find the base case
    if(n === row){
        return;
    }
    //same case where once the level length is reached
    // increment the row
    if((2*n-1) === level.length){
        console.log(level)
        return pyramid(n, row + 1)
    }
    // same conditional statement as above
    //possible for refactor??
    const midpoint = Math.floor((2*n-1)/2)
    if(midpoint + row >= level.length && midpoint - row <= level.length){
      pyramid(n, row, level + '#'); 
    } else{
      pyramid(n, row, level + ' '); 
    }
}
//steven's solution
function pyramid(n, row = 0, level = ' '){
    if(n === row){
        return;
    }
    if((2*n-1) === level.length){
        console.log(level)
        return pyramid(n, row + 1)
    }
    let add;
    const midpoint = Math.floor((2*n-1)/2)
    if(midpoint + row >= level.length && midpoint - row <= level.length){
      add = '#'; 
    } else{
      add = ' '
    }
    pyramid(n, row, level + add)
}

module.exports = pyramid;
