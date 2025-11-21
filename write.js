const fs = require('fs')     //import
const filepath = "practise.json"   //content of the file
const content = {
    name: "John Doe",
    code:"INT222"
}
const content1= JSON.stringify(content, null,2)
fs.writeFile(filepath, content1, 'utf-8',(err)=>{ //write inside file
    if(err){
        console.log('Error in writing the file: ',err)  //eror will show
        return
    }
    console.log('File written successfully')
})