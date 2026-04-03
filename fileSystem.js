const fs = require('fs');
//ReadFile
fs.readFile("./hello.txt",'utf-8',(err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data);
});

//WriteFile
fs.writeFile("./newfile.txt","hello world,this data has been written by node.js",(err) =>{
     if(err){
        console.log(err);
    }
    console.log("completed");
});