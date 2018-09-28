// good try 
const sumOfTwo = (arr, sum) =>{
    for(var i = 0; i<arr.length-1; i++){
        for(var j = i+1; j<arr.length; j++){ //notice how this forLoop is constructed
            if(arr[i]+arr[j] == sum){   //this will make sure that while the loop runs
                return true;            //it will always be sum of values next to each other
            } 
        }
    }
    return false;
}
console.log(sumOfTwo([6,4,3,2,1,7], 9));
console.log(sumOfTwo([6,4,3,2,1,7], 2));
   
//more efficient solution without double for loop
function sumFinder(arr, sum){
    var differ = {}, 
        len = arr.length,
        substract;
    
    for(var i =0; i<len; i++){
       substract = sum - arr[i];
  
       if(differ[substract])
         return true;       
       else
         differ[arr[i]] = true;
    }
    
    return false;
  }