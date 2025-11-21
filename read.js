// import fs from 'fs' is not working so instead of that  i use *const fs = require('fs')*

const fs = require('fs')
const filepath = "test.json"
fs.readFile(filepath, 'utf-8',(err, data)=>{
    if(err){
        console.log('Error in reading the file: ',err)
        return
    }
    const data1= JSON.parse(data)
    console.log('The file content is:',data1)
})
