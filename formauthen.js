const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

function formAuthen(req, res, next) {
  if (req.query.user === 'admin') {
    console.log("Access granted")
    next()
  }
  else {
    console.log("Access Denied")
    res.status(403).send("Access Denied")
  }
}
app.get('/profile', formAuthen, (req, res) => {
  res.send(`
    <form action="/profile" method="post">
    <input type="text" name="name" placeholder="Enter your name">
    <button type="submit">Submit</button>
    </form>
    `)
})
app.post('/profile', (req, res) => {
  const { name } = req.body;
  res.send(`User name: ${name}`);
})

app.listen(3000, () => {
  console.log("server is running")
})