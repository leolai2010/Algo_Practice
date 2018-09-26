//extending the previous reverse function
const reverseInPlace = (str) =>{
    str = str.split('').reverse().join('').split(' ').reverse().join(' ')
    console.log(str)
}
console.log(reverseInPlace("Hello you there"))