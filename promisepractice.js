const jsonPromise = new Promise((resolve, reject)=>{
    resolve(JSON.parse("This ain't JSON"));
});
jsonPromise.then((data)=>{
    console.log("It worked!", data);
}).catch((error)=>{
    conosle.log("It Failed!", error);
});


