import { createServer } from 'http'; // import http module

// create a server
createServer((req, res) => {
    function add(a, b) {
        return a + b;
    }
    res.end(`The sum is ${add(4, 5)}`);
}).listen(3000, () => {
    console.log("Server is running");
});
