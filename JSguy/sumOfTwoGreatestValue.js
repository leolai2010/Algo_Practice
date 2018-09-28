const sumOfTwo = (arr) =>{
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i<arr.length; i++){
        if(sum1<arr[i]){
          sum2 = sum1;
          sum1 = arr[i];     
        } else if(sum2<arr[i]){
          sum2 = arr[i]
        }
    }
    return sum1 + sum2;
}
console.log(sumOfTwo([1,2,3,4,5,6,7,8,9]))

//es6 might be easier to do with built-in functions 
const sumOfTwo = (arr) =>{
    arr = arr.sort();
    return sum = arr[arr.length-1] + arr[arr.length-2];
}