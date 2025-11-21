var EventEmitter = require ('events')    //import module
var obj = new EventEmitter()  //object creation

obj.addListener('marketOpen', (msg)=>{
    console.log(msg)
})
obj.emit('marketOpen', 'Market is Open')

var fun1=()=>
{
    console.log("Hello World")
}
var fun2=()=>
{
    console.log("Welcome to NodeJS")
}
obj.addListener('marketOpen',fun1)
obj.addListener('marketOpen',fun2)
obj.emit('marketOpen')

obj.removeListeners('marketOpen',fun1)
obj.emit('marketOpen')

obj.removeAllListeners('marketOpen','nothing will print')