const http = require('http')

// create server
const server = http.createServer((req, res)=>
{
    res.writeHead(200,{'Content-Type':'application/json'})
    const data = {
        name: "abc",
        course: "MERN"
    }
    res.end(JSON.stringify(data))
})
server.listen(3000,()=>{
    console.log("server is running ")
})