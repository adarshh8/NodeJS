import http from 'http'

const server=http.createServer((req, res)=>
{
    if(req.url === '/' || req.url === '/home'){
        res.write('<h1>This is heading Home </h1>')
    }
    else if(req.url === '/about')
    {
        res.write('<h1> This is about</h1>')
    }
    else if(req.url === '/service'){
        res.write('<h1>This is service</h1>')
    }
    else if(req.url === '/contact'){
        res.write('<h1>This is contact</h1>')
    }
        else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write("<h1>This is an error</h1>")
    }
    res.end()
})
server.listen(4000, ()=>{
    console.log("Server is running at http://localhost:3000/home")
})