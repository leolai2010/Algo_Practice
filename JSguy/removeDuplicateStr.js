//my own ES6 method. this however, will return all letters that has been repeated
//depends on what they want 
const removeDuplicate = (str) =>{
    str = str.split('').filter((element, position, str)=>{
        return str.indexOf(element) == position;
    });
    return str.join('')
}
console.log(removeDuplicate('Learn more javascript dude'));
