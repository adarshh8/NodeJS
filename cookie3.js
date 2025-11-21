var express = require('express')
var obj = express()
var cookieParser = require('cookie-parser')

obj.use(cookieParser())
obj.use(express.urlencoded({ extended: true }))

obj.get('/set-cookie', (req, res) =>
{
  res.cookie('theme', 'dark')
  res.send("cookie set!")
})

// start the server
obj.listen(3000, () => {
  console.log("server is running")
})

obj.get('/get-cookie', (req, res) => {
  var cookiename = req.cookies.theme
  res.send(`the cookie is ${cookiename}`)
})

obj.get('/delete-cookie', (req, res) => {
  res.clearCookie('theme')
  res.send("cookie is deleted")
})