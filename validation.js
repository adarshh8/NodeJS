var express=require('express')
var obj=new express()
const {body,validationResult}=require('express-validator')
obj.use(express.urlencoded({extended:true}))
obj.get('/',(req,res)=>{
    res.send(
        `
        <form action="/validatedata" method=post>
        <label>email</label>
        <input type="email" name="email"><br>
        <label>password</label>
        <input type="password" name="password"><br>
        <label>Username</label>
        <input type="text" name="username"><br>
        <input type="submit" value="submit"></form>
        `
)
})
obj.post('/validatedata',[
    body('email').isEmail().trim().normalizeEmail().withMessage('email is not in correct format'),
    body('password').isLength({min:8}).withMessage('password should be of 8 characters'),
    body('username').trim().isLength({min:5}).withMessage('username not correct')],(req,res)=>{
        var errors=validationResult(req)
        if(!errors.isEmpty()){
            res.json(errors)
        }
        else{
            res.send('form validated successfully')
        }
})


obj.listen(3000, () =>
{
    console.log("server running...")
})