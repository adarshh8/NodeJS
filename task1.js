const http = require('http');
function greet(){
    return "<h1>hello this is node</h1>"
}
const server = http.createServer((req, res)=>
{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(greet())
})
server.listen(3000,()=>
{
    console.log("server is running http://localhost:3000")
})