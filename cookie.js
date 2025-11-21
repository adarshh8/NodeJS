const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser()) //middleware to parse cookie
app.use(express.urlencoded({ extended: true }))

// set a cookie 
app.get('/setcookie', (req, res) => {
  res.cookie('user', 'ABC', { maxAge: 60000 })  //last for 1 min (60000 milisec = 1 min)
  res.send('cookie has been set!')
})

// read the cookie 
app.get('/getcookie', (req, res) => {
  res.send(`User Cookie: ${req.cookies.user}`)
})

// clear the cookie
app.get('/clearcookie', (req, res) => {
  res.clearCookie('user')
  res.send("cookie is deleted")
})

app.listen(3000, () => {
  console.log("server is running")
})