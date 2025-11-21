const express = require('express')
const app = express()

// custom middleware
function checkUser(req, res, next) {
  if (req.query.user === 'admin') {
    console.log("Access Granted")
    next()
  }
  else {
    console.log("Access Denied")
    res.status(403).send("Access Denied")
  }
}
// apply this middleware on a specific route
app.get('/dashboard', checkUser, (req, res) => {
  res.send('Welcome to the dashboard')
})
app.listen(3000, () => {
  console.log("server is running")
})