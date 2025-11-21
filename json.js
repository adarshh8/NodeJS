//display json data with get method

const express = require("express");

const app = express()
app.get('/', (req, res) =>
{
  const user = {
    name: "ABC",
    age: 23,
    department : "cse"
  }
  res.json(user)
})

//start the server
app.listen(3000, (req, res) =>
{
  console.log("server is running")
})