// What's callbacks and loops?
// In Javascript functions are objects. Because of that
// functions can take functions as arguments and returned by other functions
// these are known as higher-order functions and function that pass in as an argument is called callback function
// Loops is a quick and easy way to do something repeatedly

// #1 Captilize the first letter of any string passed in 
function capFirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  console.log(capFirst("hello"));
  
  function capEvery(str){
    str = str.split(' ').map((char) => char.charAt(0).toUpperCase() + char.substring(1)).join(' ');
    return str
  }
  console.log(capEvery("hello there leo"));
  
  // #2 traverse object base on path set by array of string and give output
  function ObjFind(obj, arr){
    for(var i = 0; i<arr.length; i++){
      if(obj[arr[i]] == undefined){
        return undefined;
      } else{
        obj = obj[arr[i]]
      }
    }
    return obj;
    
  }
  console.log(ObjFind({first:{second:{third:'finish'}}}, ['first','second','third']));
  
  // #3 flatten an array
  function flatten(arr){
    var newarr =  [];
    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            newarr = newarr.concat(flatten(arr[i]));
        } else {
            newarr.push(arr[i]);
        }
    }
    return newarr
  }
  console.log(flatten([1, [2, 3, [4, 5]]]))
  //in Node.js from all directories print out all file names in a array
  function dirWalk(dir, filelist){
      var path = path.require('path');
      var fs = fs.require('fs');
      var files = fs.readdirSync(dir);
      files.forEeach((file)=>{
          if(fs.stateSync(path.join(dir, file)).isDirectory()){
              filelist = dirWalk(path.join(dir, file), filelist);
          } else {
              filelist.push(file)
          }
      });
      return filelist;
    }

  // #4 print numbers and one second apart
  function incrementNumbers(n){
    for(let i = 0; i <= n; i++){
        setTimeout(function timer(){
          console.log(i);
        }, i*1000);
      }
  }
  incrementNumbers(5)
  
  // #5 How does the URL store state? What is an API?  
  // by using dedicated API endpoints as terminal communication channel that is able to return data responses
  // API stands for application programming interface which acts as part of the server
  // that receives requests and sends responses.

  //API/database questions
  //API design The URL should only contain resources(nouns) 
  //not actions or verbs. 
  var Item = require('../controllers/ceramiccontrollers.js');
  module.exports = (app)=>{
      app.get('/api/item', (req,res)=>{
            Item.index(req,res);
      });
      app.post('/api/item', (req,res)=>{
            Item.create(req,res);
      });
      app.get('/api/item/:id', (req,res)=>{
            Item.show(req,res);
      });
      app.post('/api/item/:id', (req,res)=>{
            Item.edit(req,res);
      });
      app.delete('api/item/:id', (req,res)=>{
            Item.delete(req,res);
      });
      // if nested      // or /api/item/:id/comment/:id
      app.get('/api/item/:id/comment', (req,res)=>{
            Comment.index(req,res);
      });
  }
//API Functionality
module.exports ={
index:(req,res)=>{
    Ceramic.find({}, (err,ceramic)=>{
        if(err){
            console.log("Returned Error", err)
            res.json({message:"Error", error: err});
        } else {
            res.json(ceramic);
        }
    });
},
create:(req,res)=>{
    Ceramic.create(req.body, (err,ceramic)=>{
        if(err){
            console.log("Returned Error", err)
            res.json({message:"Error", error: err});
        } else {
            res.json(ceramic);
        }
    });
},
show:(req,res)=>{
    Ceramic.findOne({_id:req.params.id}, (err,ceramic)=>{
        if(err){
            console.log("Returned Error", err)
            res.json({message:"Error", error: err});
        } else {
            res.json(ceramic);
        }
    });
},
delete:(req,res)=>{
    Ceramic.remove({_id:req.params.id}, (err,ceramic)=>{
        if(err){
            console.log("Returned Error", err)
            res.json({message:"Error", error: err});
        } else {
            res.json(ceramic);
        }
    });
}
}
//Sample Database (base on question)
//Q: 
//Mongoose setup:
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Apartment');
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
   }
})
//Database setup:
var mongoose = require('mongoose');
var CeramicSchema = new mongoose.Schema({
    imageurl: { type: String, required:[true, "Please upload an image"] },
    name: { type: String, required:[true, "Name is required"], minlength:[3, "Must have 3 Characters"] },
    type: { type: String, required:[true, "Please select a Type"] },
    price: { type: Number, required:[true, "Please Enter a Price value"] },
}, {timestamps: true})
var CartSchema = new mongoose.Schema({
    ceramics:[CeramicSchema]
}, {timestamps: true})
mongoose.model('Ceramic', CeramicSchema);
mongoose.model('Cart', CartSchema);


// actual exam

function findUser(logs, errors){
    const knownError =[{action:'A'},{action:'B'},{action:'C'}]
    for(var i in logs){
      if(logs[i].action == knownError[i].action){
        return logs[i].user
      } else {
        console.log("No user experienced this error")
      }
    }
  }
  console.log(findUser([{user:1, action:'A'}, 
                       {user:1, action:'B'},
                       {user:1, action:'C'}], ['A','B','C']))