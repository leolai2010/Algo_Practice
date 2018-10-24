// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //creating a character map
    const dic = {};
    for(let i of str){
        if(dic[i]){
            dic[i]++;
        } else {
            dic[i]=1;
        }
    }
    return Object.keys(dic).reduce((a,b)=> dic[a]>dic[b] ? a:b);
}
//stephen's solution
function maxChar(str) {
    const dic = {};
    let max = 0;
    let maxChar = '';
    for(let i of str){
        if(dic[i]){
            dic[i]++;
        } else {
            dic[i]=1;
        }
    }
    for(var j in dic){
        if(dic[j] > max){
            max = dic[j];
            maxChar = j;
        }
    }
    return maxChar
}
module.exports = maxChar;
