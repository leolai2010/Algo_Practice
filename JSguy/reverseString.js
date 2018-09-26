//own solution, es6 but should be done with reverse method?
const reverseString = (str)=>{
    rStr = []
    str = str.split('')
    for(var i = str.length-1; i>=0; i--){
      rStr.push(str[i])
    }
    rStr = rStr.join('')
    return rStr
}
console.log(reverseString('Hello there'))
//second try is perfect! completely reliant on built-in functions
const reverseString = (str)=>{
    //optional conditional statment to catch edge case
    // if(!str || str.length <2) return str;
    str = str.split('').reverse().join('')
    return str
}
console.log(reverseString('Hello there'))
// old method with just a decrementing forLoop
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('Hello there'))
//recursion method is possible as well!
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0); 
  } // this method still relys on 2 built in functions 
    // it should be noted that substr is similiar to splice while charAt -> self explanatory
console.log(reverseString('Hello there'))
//making this a string extension
String.prototype.reverse = function (){
    if(!this || this.length <2) return this;
    
    return this.split('').reverse().join('');
  }
  
 //'abc'.reverse(); = 'cba'