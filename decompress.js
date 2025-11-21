const fs = require('fs')
const zlib = require('zlib')

//read the compressed file
const readStream = fs.createReadStream('example.txt.gz')

//create a writable stream 
const writeStream = fs.createWriteStream('outputDecompress.txt')

//create a gunzip
const gunzip = zlib.createGunzip()

//pipe: read>decompress>write
readStream.pipe(gunzip).pipe(writeStream)

console.log('file is decompressed')