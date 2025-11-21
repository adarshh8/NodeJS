var session = require('cookie-session')
var express = require('express')
var obj = express()

obj.use(session({
  name: "session",
  key:['keys']
}))

obj.get('/setsession', (req, res) => {
  req.session.user = "abc"
  req.session.course = "btec"
  req.session.dept = "cse"
})

// complete at home
