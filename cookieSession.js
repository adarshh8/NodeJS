var session = require('cookie-session')
var express = require('express')
var obj = express()


obj.use(session({
  name: "session",
  keys: ['secret-key'],
  maxAge: 60000
}))

obj.get('/set-session', (req, res) => {
  req.session.user = "abc"
  req.session.city = "xyz"
  res.send(`session set! <br/> <a href='/get-session'>GET SESSION </a>`)
})
obj.get('/get-session', (req, res) => {
  res.send(`user : ${req.session.user}<br/> City: ${req.session.city}<br/> <a href='delete-session'>Delete Session</a>` )
})

obj.get('/delete-session', (req, res) => {
  req.session=null
  res.send(`cookie is deleted <a href='/set-session'>Set Session</a>`)
})

obj.listen(3000, () => {
  console.log("server is running")
})
