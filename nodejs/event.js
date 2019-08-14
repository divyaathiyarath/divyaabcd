var EventListener=require('event');
var emitter=new EventListener();
emitter.on("open door",()=>
{
    console.log("Ring...Ring..");
})
emitter.emit("door open");