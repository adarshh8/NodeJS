const express = require('express')
const app = express()
const port = 3000

//create form to add two number
app.get('/',(req, res)=>
{
    res.send(`
        <form action="/add" method="get">
        <input type="number" name="num1" placeholder="First Num" >
        <input type="number" name="num2" placeholder="Second Num" >
        <button type="submit">Add</button>
        </form>
    `)
})
//handle a GET request and show as result
app.get('/add', (req, res)=>
{
    const n1 = Number(req.query.num1)
    const n2 = Number(req.query.num2)
    const sum = n1+n2
    res.send(`<h2> Result: ${n1} + ${n2} = ${sum}</h2>`)
})
app.listen(3000, ()=>
{
    console.log('Server is Running')
})