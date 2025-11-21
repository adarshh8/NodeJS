const url = require('url')

const myUrl = new URL('https://www.example.com:8000/path/name?search=test#hash')

console.log(myUrl.hostname)
console.log(myUrl.pathname)
console.log(myUrl.search)
console.log(myUrl.hash)
console.log(myUrl.port)