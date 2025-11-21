const express = require('express')
const session = require('express-session')

const app = express()

app.use(express.urlencoded({ extended: true }))


// set up session
app.use(session({
  secret: 'mysecretkey',  //used to sign the session ID cookie
  resave: false,
  saveUninitialized:true
}))

// home page
app.get('/', (req, res) => {
  res.send(`
    <form action='/login' method='post'>
    <input type='text' name="username" placeholder="Enter your name">
    <button type="submit">Submit</button>
    </form>
    <a href="/profile">Go To Profile</a>
    `)
})

// login route
app.post('/login', (req, res) => {
  const name = req.body.username  //to get value from form
  req.session.user = name //to save name in the session
  res.send(`session created for name ${name} <br/> <a href="/profile">View Profile</a>`)
})

app.get('/profile', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome ${req.session.user}! <br/> <a href="/logout">Logout</a>"`)
  }
  else {
    res.send(`no session found! <a href="/login">Go To login</a> `)
  }
})

// logout route
app.get('/logout', (req, res) => {
  req.session.destroy()
  res.send("Logout <a href='/profile'>Go To Profile</a>")
})

app.listen(3000, () => {
  console.log("server is running")
})