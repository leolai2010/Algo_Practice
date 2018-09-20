// basic
function primeFactor(n){
    var factors = []
    for(var i = 0; i<n; i++){
        if(n%i === 0 ){
            factors.push(i);
        }
    }
    return factors
}
//es6
const primeFactor = (n, factors=[]) =>{
    for(let i =2; i < n; i++){
        if(n%i ===0){
            factors.push(i);
        }
    }
    return factors
}

// leveraging previous function and addtional edge case checks
const isPrime = (n) =>{
    for(let i =2; i < n; i++){
        if(n%i === 0){
            return false;
        }
    }
    return n !==1 && n !==0;
}

const primeFactor = (n, factors=[]) =>{
    for(let i =2; i < n; i++){
        if(n%i ===0){
            factors.push(i);
        }
    }
    if(isPrime(n) === true){
      console.log("number is prime!");
      factors.push(1, n)
      return factors
    } else if(n==1){
      console.log("1 is factor of itself but not prime!");
      factors.push(1)
      return factors
    } else {
      return factors;
    }
}

//test cases
console.log(primeFactor(1))
console.log(primeFactor(7))
console.log(primeFactor(3))
console.log(primeFactor(6))
console.log(primeFactor(9))
console.log(primeFactor(15))
console.log(primeFactor(17))
console.log(primeFactor(12))
console.log(primeFactor(4))
console.log(primeFactor(7))