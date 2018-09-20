//Their Solution
function findNb(m) {
    var n = 0
    while (m > 0) m -= (++n)**3 //(++n) is incrementation while double asterisk is exponentiation
    return m ? -1 : n
  }
//My Solution
function findNb(m) {
    var n = 1;
    while(m > 0){
        m = m - Math.pow(n, 3);
        n = n + 1;
    }
    if(m == 0){
        return n-1
      } else {
        return -1
    }
}