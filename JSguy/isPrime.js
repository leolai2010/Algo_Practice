//basic style
//whileloop
function isPrime(n){
    var divisor = 2;
    while(divisor<n){
        if(n%divisor === 0){
            return false;
        }
        else{
            divisor++;
        }
    }
    return n !==1 && n !==0; //<- this statement should take care of edge cases of 1 and 0
}
//forloop
function isPrime(n){
    for(var i = 2; i<n; i++){
        if(n%i === 0){
            return false;
        } else {
            return  n !==1 && n !==0;
        }
    }
} 
//es6
const isPrime = (n) =>{
    for(let i =2; i < n; i++){
        if(n%i === 0){
            return false;
        }
    }
    return n !==1 && n !==0;
}
//test cases
console.log(isPrime(4))
console.log(isPrime(7))
console.log(isPrime(3))
console.log(isPrime(6))
console.log(isPrime(9))
console.log(isPrime(15))
console.log(isPrime(17))
console.log(isPrime(12))
console.log(isPrime(4))
console.log(isPrime(7))