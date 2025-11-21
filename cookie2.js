var express = require('express')
var obj = express()
var cookieParser = require('cookie-parser')

obj.use(cookieParser())
obj.use(express.urlencoded({ extended: true }))

obj.get('/', (req, res) => {
  res.sendFile(__dirname + '/cookie.html')
})

obj.post('/set-cookie', (req, res) => {
  const theme2 = req.body.theme1
  res.cookie('theme', theme2)
  res.send(`Theme set to ${theme2} <a href='/getcookie'>Get Cookie</a>`)
})

obj.get('/getcookie', (req, res) => {
  const theme3 = req.cookies.theme
  res.send(`Cookie fetched: ${theme3} mode <a href='/delete-cookie'>Delete Cookie</a>`)
})

obj.get('/delete-cookie', (req, res) => {
  res.clearCookie('theme')
  res.send(`Cookie deleted <a href='/'>Home</a>`)
})

obj.listen(3000, () => {
  console.log('server is running')
})
