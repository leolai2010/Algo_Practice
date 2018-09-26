//ok this is copy paste but can you do a ES6?
const nonRepeatingChar = (str)=>{
    var exists = {}
    for(var i = 0; i<str.length; i++){
      if(exists[str[i]]){
        exists[str[i]]++; 
      } else {
        exists[str[i]] = 1;
      }
    }
     for (var j in exists){
      if (exists[j]==1)
         return j;
    }
  }
  console.log(nonRepeatingChar('the quick brown fox jumps then quickly blow air'))