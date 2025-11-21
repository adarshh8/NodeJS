const express = require('express')
const obj = new express()

// application level middleware
const log = (req, res, next) => {
  console.log('first middleware is running')
  next()
}

const sec = (req, res, next) => {
  console.log('Second middleware is running')
  next()
}

obj.use(log)
obj.use(sec)
obj.get('/', (req, res) => {
  res.send("middleware is running")
})
obj.listen(3000, (req, res) => {
  console.log("server is running")
})