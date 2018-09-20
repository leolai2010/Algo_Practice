

//Their Solution
function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
  }


//My Solution
function digPow(n, p){
    var digits = n.toString().split('');
    var realdigits = digits.map(Number)
    for(var i = 0; i<realdigits.length; i++){
      while(i <= realdigits.length){
        realdigits[i] = Math.pow(realdigits[i], p+i)
        break;
      }
    }
    realdigits = realdigits.reduce((a, b) => a + b, 0)
    if((realdigits%n) == 0){
      return (realdigits/n);
    } else {
      return -1
    }
  }
  