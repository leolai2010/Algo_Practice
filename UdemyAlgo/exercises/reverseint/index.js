// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n) =>{
    const reversed = n.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.sign(n);
  }
module.exports = reverseInt;


//my solution
// if(n == 0){return 0}
// if(Math.sign(n) == 1){
//   return parseInt(n.toString().split("").reverse().join(""));
// } else if(Math.sign(n) == -1){
//   return (parseInt((n*-1).toString().split("").reverse().join(""))*-1);
// }

//steven's inefficient solution
// const reversed = n.toString().split("").reverse().join("");
// if (n<0){
//     return parseInt(reversed) * -1;
// }
// return parseInt(reversed);