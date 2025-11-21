const express = require('express')  //import module
const app = express()  //creation of object
const port = 3000

//define a route for GET request to the root URL
app.get('/',(req , res) =>  //callback function is used
{
    res.send('Hello how are you')
})

//start the server
app.listen(port, ()=>
{
    console.log("server is created")
})
