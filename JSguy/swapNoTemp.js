//Stack overflow one line solution, not really much to understand here lol
const swapNoTemp = (a,b)=>{
    [a, b] = [b, a];
    return [a, b]
  }
console.log(swapNoTemp(1,2))