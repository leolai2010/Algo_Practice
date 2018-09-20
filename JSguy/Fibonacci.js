//basic get the nth fibonacci number
//time complexitiy is O(n)
function fibonacci(n){
    var fib = [0, 1];
    if(n<=2){
      return 1
    }
    for(var i = 2; i <= n; i++){
        fib[i] = fib[i-1] + fib[i-2];
        console.log(fib[i])
    }
    return fib[n]
}
//using recursion + es6
const fibonacci = (n) =>{
    if(n<=1){
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

//test case 
console.log(fibonacci(12))
