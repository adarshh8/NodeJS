const express = require('express')
const session = require('cookie-session')

const app = express()
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized:true
}))

app.get('/', (req, res) => {
  res.send(`
    <form action="/login" method=post>
    <input type="text" name="user" placeholder="Enter your name">
    <input type="num" name="reg" placeholder="Enter you regno">
    <button type="submit">Submit</button> 
    </form>
    <a href="/profile">Go To Profile</a>
    `)
})

app.post('/login', (req, res) => {
  const name = req.body.username
  const number = req.body.regno
  req.session.user = name
  req.session.reg = number
  res.send(`Session is created ${name}<br/> <a href="/profile">Go To Profile</a>`)

})

app.get('/profile', (req, res) => {
  if (req.session.user && req.session.number) {
    res.send(`Welcome ${req.session.user} ${req.session.reg} <a href="/logout">Logout</a>`)
  }
  else {
    res.send(`NO SESSION FOUND <a href="/login">Login</a>`)
  }
})

app.listen(3000, () => {
  console.log("server is running")
})



// create a registration form and user info till the session is logout 
// not completed