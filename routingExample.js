const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    //browser => localhost:8080/home
    if(req.url==="/home"){
          const stream = fs.createReadStream("./Flower-Shop-Website/index.html",
            { encoding: "utf8"});
          res.writeHead(200,{'Content-Type':'text/html'});

          stream.pipe(res);

          stream.on('error',(err) => {
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.end('File read error');
          });
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
     else if(req.url==="/about"){
         //browser => localhost:8080/about
        res.write(
            `<html>
            <body>
            <h1>Welcome to about page</h1>
            </body>
            </html>`
        );
    }
    else{
         res.write(
            `<html>
            <body>
            <h1>page not found</h1>
            </body>
            </html>`
        );
    }
});

server.listen(8081,() => {
    console.log("server started successfully at port 8081");
});
            