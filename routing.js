const http = require('http');

const server = http.createServer((req,res) =>{
    //browser => localhost:8080/home
    if(req.url==="/home"){
        res.write("Welcome to homepage");
    }
    else if(req.url==="/about"){
         //browser => localhost:8080/about
        res.write("Welcome to aboutpage");
    }
    else if(req.url==="/Gowri"){
         //browser => localhost:8080/Gowri
        res.write(
            `<html>
            <head>
            <title>Gowri Website</title>
            </head>
            <body>
            <h1>Welcome to Gowri Website</h1>
            </body>
            </html>
            `
        );
    }
    res.end();
});

server.listen(8081,() =>{
    console.log("server started successfully at port 8081");
});