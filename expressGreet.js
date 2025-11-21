const express = require('express')
const app = express()
const port = 3000
app.get('/',(req, res)=>
{
    res.send(`
        <form action ='/greet' method='get'>
        <input type="text" name="username" placeholder="Enter your name">
        <input type="text" name="greeting" placeholder="Enter your greeting">
        <button type="submit">Greet Me</button>
        </form>
    `)
})
app.get('/greet',(req, res)=>
{
    const name = req.query.username
    const greet = req.query.greeting
    res.send(`<h2> ${greet}, ${name}!</h2>`)
})
app.listen(3000, ()=>
{
    console.log('Server is Running')
})
