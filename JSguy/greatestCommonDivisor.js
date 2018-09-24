//My initial solution
function GCD(a, b){
    if(b > a){
        var i = b;
        while(i > 1){
            if(b%i === 0 && a%i === 0){
                return i
            } else {
                i--
            }
        }
    } else {
        var i = a;
        while(i > 1){
            if(b%i === 0 && a%i === 0){
                return i
            } else {
                i--
            }
        }
    }
}
//JSGuy fancy solution + recursion + es6
const GCD = (a,b) =>{
    if(b === 0){
        return a;
    } else {
        return GCD(b, a%b)
    }
}
//test cases
console.log(GCD(40, 20))
console.log(GCD(180, 90))