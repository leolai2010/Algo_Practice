// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
    const Adic={};
    const Bdic={};
    for(let i of stringA){
      if(stringA[i]){
        Adic[i]++;
      } else {
        Adic[i] = 1;
      }
    }
    for(let j of stringB){
      if(stringB[j]){
        Bdic[j]++;
      } else {
        Bdic[j] = 1;
      }
    }
    function isEquivalent(a, b) {
        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }

        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];

            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }
 return isEquivalent(Adic,Bdic)
}
//steven's solution
function anagrams(stringA, stringB){
    const Amap = buildCharMap(stringA)
    const Bmap = buildCharMap(stringB)
    if(Object.keys(Amap).length != Object.keys(Bmap).length){
        return false;
    }
    for(let j in Amap){
        if(Amap[j] !== Bmap[j]){
            return false;
        }
    }
    return true;
    
}
function buildCharMap(str){
    const charMap = {};
    for(let i of str.replace(/[^\w]/g, '').toLowerCase()){
        if(str[i]){
            charMap[i]++;
        } else {
            charMap[i] = 1;
        }
    }
    return charMap
}
//my way using built-in functions
function anagrams(stringA, stringB){
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase().split("").sort()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase().split("").sort()
    if (stringA.length !== stringB.length){
      return false;
    }
    for(let i of stringA){
      if(stringA[i] != stringB[i]){
        return false;
      }
    }
    return true;
}
//steven's solution
function anagrams(stringA, stringB){
    cleanString(stringA) === cleanString(stringB);
}
function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}


          
module.exports = anagrams;
