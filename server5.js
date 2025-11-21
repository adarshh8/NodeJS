import {createServer} from 'http'
import fs from 'fs'

const server = createServer((req, res)=>{
    if(req.url === '/' || req.url === '/home')
    {
        fs.readFile('home.html',(err,data)=>
        {
            if(err)
            {
                res.writeHead(500)
                res.end("Error")
            }
            else{
                res.writeHead(200,{'content-type':'text/html'})
                res.end(data)
            }
        })
    }
    else if(req.url === '/about')
    {
        fs.readFile('about.html',(err,data)=>
        {
            if(err)
            {
                res.writeHead(500)
                res.end("Error")
            }
            else{
                res.writeHead(200,{'content-type':'text/html'})
                res.end(data)
            }
        }
    }
})