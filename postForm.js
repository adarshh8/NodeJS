const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/student", (req, res) => {
  res.send(`
    <h2>Student Form</h2>
    <form action="/student" method="post">
      <input type="text" name="name" placeholder="Enter your name" required> 
      <input type="text" name="subject" placeholder="Enter your subject" required>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/student", (req, res) => {
  const { name, subject } = req.body;
  res.send(`Student name: ${name}, Subject: ${subject}`);
});

app.listen(3000, () => {
  console.log("Server is running");
});
