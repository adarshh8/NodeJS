const fs = require('fs')
const write = fs.createWriteStream("output.txt")
write.write("Hello, how are you all well")
write.end()