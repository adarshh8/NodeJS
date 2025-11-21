function getData()
{
    return new Promise(resolve=>{
        setTimeout(()=>resolve("Data is recived"), 2000)
    })
}
async function fetchData()
{
    console.log("Fetching")
    const result = await getData()
    console.log(result)
    console.log("done")
}
fetchData()