// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//my solution
function fib(n) {
    const result = [0, 1]
    for(let i = 2; i<=n; i++){
        result[i] = result[i-1] + result[i-2]
    }
    return result[n]
}
//steven's solution
//remember approaching fib is to have the sum of two previous numbers
function fib(n){
    //first create the first two number array
    //this is because fib function requires a starting point
    //results will hold the 2 numbers that doesnt have two previous numbers
    const result = [0,1]
    //run the forloop 
    // variable needs to start at index 2 because we already 
    // have results consist of two indices 
    for(let i=2; i<=n; i++){
        //make a variable to hold the number next to n (moving 1 index left)
        const a = result[i-1];
        //make another variable to hold the two previous number  (moving 2 index right)
        const b = result[i-2];
        //push the result sum into the array
        result.push(a+b);
    }
    //this is like returning result[result.length -1] last number of the array
    //which is the total sum of the fib series
    return result[n]
}
//these both are linear runtime which are more efficient than recursive

//recursive solution
function fib(n){
    if(n < 2 ){
        return n;
    }
    return fib(n-1) + fib(n-2)
}
//remember this recursive answer is an exponential runtime 
//this is not an efficient solution!

//possiblity to ask for a more efficient solution!
// Memoization
// store the arguments of eac function call along with the result.
// if the function is called again with the same arguments
// return the precomputed results. rather than running the function again
// this is done by using a Memoizer - Helper function

function memoize(fibfunc){
    //this function takes in the original fib function and will memoize it
    //first create a cache that will record the function that had already been run
    const cache = {};
    //what we will return here is a function that is able to take in 
    //multiple arguements since we don't know how many arguement there are
    return function(...args){
        if(cache[args]){ //if this argument already exist before return it 
            return cache[args];
        }
        //else make a apply - this - fib function to the result
        const result = fibfunc.apply(this, args);
        //bind/store/cache this result in the cache object  
        cache[args]=result;
        //return the result 
        return result;
    };
}
function fib(n){
    if(n < 2 ){
        return n;
    }
    return fib(n-1) + fib(n-2)
}
const fib = memoize(fib);

//someone else's memoized fib solution 
function fib(n, cache = {}){
    if (cache[n]) return cache[n];
    const fibNumber = n < 2 ? n : fib(n - 1, cache) + fib(n - 2, cache);
    cache[n] = fibNumber;
    return fibNumber;
}


module.exports = fib;
