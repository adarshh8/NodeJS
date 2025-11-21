import { createServer } from 'http'
import fs from 'fs'

// function to display mesage
function showAndSaveMessage(res){
    const message = 'hello this message should be display '

    // write message in the file
    fs.writeFile('message.txt', message, (err)=>
    {
        if(err)
        {
            res.writeHead(500,{'content-type':'text/plain'})
            res.write('Error')
        }
        else{
            res.writeHead(200,{'content-type':'text/plain'})
            res.write(message)
        }
        res.end()
    })
}

createServer((req, res)=>
{
    showAndSaveMessage(res)
}).listen(3000, ()=>{
    console.log('Server is running')
})