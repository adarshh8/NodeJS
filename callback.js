function greet(name, callbback)
{
    console.log("hello " + name)
    callbback()
}
// function bye()
// {
//     console.log("goodbye")
// }
greet("sachin",()=>{
    console.log("goodbye")
})