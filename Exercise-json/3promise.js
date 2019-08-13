const prom=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise is created and consumed");
    },2000);
});
prom.then(value=>{
   
    console.log(value);
});