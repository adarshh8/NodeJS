const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form action="/submit" method="post">
      <input type="text" name="name" placeholder="Enter your name">
      <input type="number" name="roll" placeholder="Enter your Roll No">
      <button type="submit">Send</button>
    </form>
  `);
});

app.post("/submit", (req, res) => {
  const { name, roll } = req.body;
  res.send(`Hello ${name}, your Roll No is ${roll}`);
});

app.listen(3000, () => {
  console.log("Server is running");
});
