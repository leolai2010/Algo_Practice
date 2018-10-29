//Describes the performance of an algorithm
//How much processing power or time is required 
// to run your algorithm if we double the inputs?

//For example
//Reverse string with 1 for loop
// Each additional character = 1 step through 1 loop 
// this would be N or linear runtime 
// Steps with 2 for loops
// if n = 2 then there's n^2 runtime = total of 4 increments
// thus called quadratic runtime

//Constant Time: 1 
//No matter how many elements runtime will always be the same
//Logarithmic Time: log(n)
//Doubling the amount of work would not double the amount of work
//Searh operation should always have log(n)
//Linear Time: n
//Iteration of data. this is indicated by having a loop in the algo.
//Quasilinear Time: n * log(n)
//Doubling the amount of work would not double the amount of work
//sorting operation should always have n * log(n)
//Quadratic Time: n ^ 2 
//every element in collection is compared with every other element
//handshake problem, dramatically increase operation time
//often seen as double for loops
//Exponential Time: 2 ^ n 
// a single element will double the processing power in this case
//huge increase in operation time

//Big 'O' Notation - efficiency of algo
//O(n) = linear 
//O(1) = constant 
//O(n^2) = quadratic

//identifying Runtime Complexity
// simple forloop = Probably O(n)
// iteration of half a collection = Probably O(n)
// iteration of 2 different collection = O(n + m)
// Two nested for loops iteration of same collection = O(n^2)
// Two nested for loops iteration of different collections = O(n + m)
// sorting = O(n*log(n))
// searching a sorted array = O(log(n))
