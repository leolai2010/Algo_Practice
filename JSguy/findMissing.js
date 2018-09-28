//my solution matches answer!
const findMissing = (arr) =>{
    arr = arr.sort();
    var sum = 0;
    var total = (arr[arr.length-1]*(arr[arr.length-1]+1))/2;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return total - sum;
}
console.log(findMissing([5, 2, 6, 1, 3]));