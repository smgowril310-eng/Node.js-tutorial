const http = require("http");
const url = require("url");

const server = http.createServer((req,res) => {
    if(req.url !=="/favicon.ico"){
    const query = url.parse(req.url,true).query;
    console.log(query.id);
    console.log(query.name);
    res.write("hello from node.js server");
    res.end();
    }
});

server.listen(8007, () => {
    console.log("server started successfully at port 8007");
});