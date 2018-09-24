function removeDuplicate(arr){
    var newarr = [];
    var exists = {};
    for(var i = 0; i<arr.length; i++){
        if(!exists[arr[i]]){ //if value doesnt exist yet push it in the object and set to true
            newarr.push(arr[i]) //this statement aint going to run if the number already exist in the object
            exists[arr[i]] = true; // what the key looks like in the "exists" is {1: true}
        }                          // thus this statement is checking for the key everytime the loop runs
    }
    return newarr;
}
//ES6 using filter and indexOf 
const removeDuplicate = (arr) =>{
    return arr.filter((element, position, arr)=>{
        return arr.indexOf(element) == position;
    });
}
//test cases
console.log(removeDuplicate([1,2,3,4,5,1,3,4,7,8,9]));