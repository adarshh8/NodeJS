const getData = new Promise((resolve, reject)=>
{
    setTimeout(()=>resolve("Data Received"), 2000)
})
getData.then(msg => console.log(msg))