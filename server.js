// create a server
// const http = require('http') //import the http module
// const server = http.createServer((req, res)=>  //req: request, res: response
// {
//     res.write("Hello node js")
//     res.end()
// })

// //start the server
// server.listen(3000, ()=>
// {
//     console.log("Server is running")
// })



// create the server
// const http = require('http')
// http.createServer((req, res) =>
// {
//     res.end("Hello there")
// }).listen(5000, ()=>
// {
//     console.log("Server is working")
// })



//create a server
const http = require('http')
const server = http.createServer((req, res)=>
{
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end("Hello from the server")
})

//start the server
server.listen(4000, ()=>
{
    console.log("Server is running at http://localhost:4000")
})
