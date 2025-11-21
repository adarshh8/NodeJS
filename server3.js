// read the content and display on server
const http = require('http');
const fs = require('fs');

// create a server
http.createServer((req, res) => {
    fs.readFile('test.txt', 'utf-8', (err, data) => {
        if (err) {
            res.end("error");
        } else {
            res.end(data);
        }
    });
}).listen(3000, () => {
    console.log("server is running");
});
