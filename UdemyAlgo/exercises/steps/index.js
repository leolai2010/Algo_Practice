// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    // n determines how many rows there will be
    // create two loops that will run through the desired matrix
    // first loop is in row(x-axis)
    for(let row = 0; row < n; row++){
        //create variable that will hold the matrices
        let stair = '';
        // second loop is in column (y-axis)
        for(let column = 0; column < n; column++){
            //if column is less that row add #
            // because row is incrementing slower than column thus
            if(column <= row){
                stair+= '#';
            // once column exceeds row it will start adding space
            } else {
                stair+= ' ';
            }
        }
        //this console.log is in the first loop to satisfy the condition of 
        // print out each iteration as row increases to match n
        console.log(stair)
    }
}
//this question can be done recursively
// remember to do recursion 
// have a strong base case
// call the function
// modify the callback function variable to change (decrement or increment!)
// Add in two extra variables in function
function steps(n, row=0, stair=''){
    //base case is setup so that if row reaches n the function will stop/return
    if(n === row){
        return;
    }
    //this is part of the recursion thats returning our answer
    // this case will console log every time stair reaches n's length 
    // once it logs then we increment row
    if(n === stair.length){
        console.log(stair)
        return steps(n, row + 1);
    }
    // if(stair.length <= row){
    //     stair += '#';
    // } else {
    //     stair += ' ';
    // }
    // steps(n, row, stair);
    //condense the condition into ES6
    // is stair length less or equal to row?
    // if true push add # else add space
    const add = stair.length <= row ? '#' : ' ';
    //recursively call with modified stair 
    steps(n, row, stair + add);
}


module.exports = steps;
