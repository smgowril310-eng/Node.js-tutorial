const http = require('http');

const server = http.createServer((req,res) => {
    res.write("hello from node.js server");
    res.end();
});

server.listen(8001, () => {
    console.log("server started successfully at port 8001");
});