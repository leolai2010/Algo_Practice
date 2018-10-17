//this is leo 
// const LongestWord = (sen) =>{
//   sen = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
//   sen = sen.split(" ")
//   var max = "";
//   for(var i in sen){
//     if(sen[i].length > max.length){
//       max = sen[i];
//     }
//   }
//   return max
// }
// console.log(LongestWord("I love dogs"))
// console.log(LongestWord("fun&!! time"))

// Input:"aqrst", "ukaei", "ffooo"
const VowelSquare = (strArr) =>{
    var Vowel = ['a', 'e', 'i', 'o', 'u'];
    for(var i = 0; i<strArr.length; i++){
      for(var j = 0; j<strArr.length; j++){
        if(Vowel.includes(strArr[i][j])){
          if(Vowel.includes(strArr[i][j+1])){
            if(Vowel.includes(strArr[i+1][j])){
              if(Vowel.includes(strArr[i+1][j+1])){
                console.log(i + '-' + j)
                break;                
              }
            }
          }
        }
      }
    }
}
// VowelSquare(["aqrst", "ukaei", "ffooo"])
VowelSquare(["!&#*@", "afexc", "aeead", "foofd"])



//Output: 
// a q r s t 
// u k a e i
// f f o o o 
// y: 1 x: 2 
// 


// c c e
// a a f
// a a g
// Given an array of numbers, find any pairs that when summed give the conditional sun
// Example: [1,2,5,5], sum = 9 (no match)
// [1,2,4,4], sum = 8 (match, 4,4)
// can assume array is sorted
// negative and values of 0 are possible


const findPairSum = (arr, sum) =>{
    //   for(var i = 0; i<arr.length; i++){
    //     for(var j = 1; j<arr.length; j++){
    //       if(arr[i]+arr[j] == sum){
    //         return true;
    //       } 
    //     }
    //   }
    //   return false
    //   arr.forEach((element, index, arr)=>{
    //     if((element + arr[index]) == sum){
    //       console.log(true)
    //     }
    //   })
      var i = 0;
      var j = arr.length-1;
      while(i<arr.length && j>=0){
        if((arr[i] + arr[j]) > sum){ 
          j--
        } else if((arr[i] + arr[j]) < sum){
          i++
        } else if((arr[i]+arr[j]) == sum){
          return true
        }
      }
      return false
    }
    
    console.log(findPairSum([1,2,5,5],9))
    console.log(findPairSum([1,2,4,4],8))
    console.log(findPairSum([2,3,4,6],6))
    console.log(findPairSum([1,2,3,4],6))
    
     
    
    //[1,2,3,7,12], sum = 9