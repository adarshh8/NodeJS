// use cookie-session
const express = require('express')
const session = require('cookie-session')
const app = express()

app.use(express.urlencoded({ extended: true }))

// cookie session middleware
app.use(session({
  name: "session",
  keys: ['secret-key'],
  maxAge:60000
}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/form.html")
})

// save the data
app.post("/login", (req, res) => {
  req.session.username = "abc" //req.body.username
  res.send("Login Stored <a href='/profile'>Go To Profile</a>")
})

app.get('/profile', (req, res) => {
  if (!req.session.username) {
    res.send("no session ")
  }
  else {
    res.send(`Welcome ${req.session.username} <br /> <a href="/logout">Go To Logout</a>`)
  }
})

app.get('/logout', (req, res) => {
  req.session = null
  res.send(`session is deleted! <a href="/">Go To Login</a>`)
})



app.listen(3000)