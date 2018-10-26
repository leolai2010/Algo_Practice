// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//my iterative solution
function vowels(str) {
    let count = 0;
    const isVowel = ['a', 'e', 'i', 'o', 'u']
    for(let i of str.toLowerCase().split('')){
        for(let j of isVowel){
            if(i == j){
                count++;
            }
        }
    }
    return count
}
//steven's iterative solution
// using the includes built in function
// includes will check matching in string and return boolean 
function vowels(str){
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u']
    for(let char of str.toLowerCase()){
        if(checker.includes(char)){
            count++
        }
    }
    return count;
}
//using the match function 
function vowels(str){
    //using regeix 
    //[] indicates character we need
    // g indicates continue to find matching in bracket
    // i case sensitive 
    const matches = str.match(/[aeiou]/gi);
    // returns  check if matches exist or not 
    // if not then return 0
    return matches ? matches.length : 0
}

module.exports = vowels;
