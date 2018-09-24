//Own solution + ES6 
const arrayMerge = (arr1, arr2) => {
    var newarr = [];
    return newarr = arr1.concat(arr2).sort((a,b)=>{ //because sort method sort alphabetically 
        return a-b;                                 //pass in this function well sort it by numerical value by comparing
    });
}
//JSguy solution - old school but should understand concept!
function mergeSortedArray(a, b){
    var merged = [], 
        aElm = a[0],
        bElm = b[0],
        i = 1,
        j = 1;
    
    if(a.length ==0)
      return b;
    if(b.length ==0)
      return a;
    /* 
    if aElm or bElm exists we will insert to merged array
    (will go inside while loop)
     to insert: aElm exists and bElm doesn't exists
               or both exists and aElm < bElm
      this is the critical part of the example            
    */
    while(aElm || bElm){
     if((aElm && !bElm) || aElm < bElm){
       merged.push(aElm);
       aElm = a[i++];
     }   
     else {
       merged.push(bElm);
       bElm = b[j++];
     }
    }
    return merged;
  }

//test cases 
console.log(arrayMerge([2,5,6,9], [1,2,3,29]));

