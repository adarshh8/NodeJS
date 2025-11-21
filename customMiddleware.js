const express = require('express')
const app = express()

// custom middleware
app.use((req, res, next) => {
  console.log(`Request Method : ${req.method},URL: ${req.url}`)
  next()
})
app.listen(3000, (req, res) => {
  console.log("server is running")
})


// not completed