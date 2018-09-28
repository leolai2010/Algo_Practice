// my own es6 solution
const palindrome = (str) =>{
    checker = str.split('').reverse().join('');
      if(checker == str){
          return true;
      } else {
          return false;
      }
  }
  console.log(palindrome('madam'));
  console.log(palindrome('toyota'));