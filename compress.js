const fs = require ('fs')
const zlib =  require('zlib')

//create the read stream
const readStream = fs.createReadStream('example.txt')

//create write stream to compress file
const writeStream = fs.createWriteStream('example.txt.gz')

//create a gzip transform stream 
const gzip = zlib.createGzip()

//pipe: read>compress>write
readStream.pipe(gzip).pipe(writeStream)
console.log('File is compressed')