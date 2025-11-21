function fetchData()
{
    return new Promise((resolve,reject)=>
    {
        let success = false
        setTimeout(()=>
        {
            if(success) resolve ("Data is recived")
            else reject("Error fetching data")
        },200)
    })
}
async function getData()
{
    try{
        const data = await fetchData()
        console.log(data)

    }
    catch (error) {
        console.error(error)
    }
}
getData()
