//Event driven architecture

const eventEmitter = require('events');

const myEmitter = new eventEmitter();

//when a particular event happens or triggers then what to do

myEmitter.on("ringBell",(name)=>{
    console.log("please call"+name);
});

myEmitter.emit("ringBell","Vedi");

//Example: Whatsapp ,Socket.io ,websockets
//person 1 -> unique ID
//person 2 -> unique ID

myEmitter.on("uniqueID12",(chatmsg)=>{
    console.log("reply me"+chatmsg);
});

myEmitter.emit("uniqueID12","Mental");