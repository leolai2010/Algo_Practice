function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(var i = 0; i < s.length; i++) {
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       }
       else {
           consonants += s[i] + '\n';
       }
    }
    
    console.log(consonants.trim());
}

//My Solution
function vowelsAndConsonants(s) {
    var vowel = ["a", "e", "i", "o", "u"]
    var arr=[]
    s = s.split("")
    s.forEach((e1)=>{
      vowel.forEach((e2)=>{
        if(e1===e2){
          arr.push(e1)
         }
      })
    })
    var oldarr = s.filter((word)=> !arr.includes(word));
    var newarr = arr.concat(oldarr);
    for(var x=0; x<newarr.length; x++){
        console.log(newarr[x]);
    }
}