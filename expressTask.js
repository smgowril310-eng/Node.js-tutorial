const express = require("express");

const app = express();

app.use(express.json());

app.listen(8080,(err) => {
 if(err) console.log(err);

 console.log("server started successfully");
});

//const task ={
//id,
//title,
//iscompleted }

let currentId = 0;
const tasks = [];

app.post("/task",(req,res) => {
    const task = req.body;

    const createTask ={ //Postman -> body -> Write title
        id :++currentId,
        title :task.title,
        isCompleted :false,
    };
    tasks.push(createTask);

    res.status(200).send(createTask);
});

app.get("/tasks",(req,res) => {
    res.status(200).send(tasks);
});

app.put("/task",(req,res) => {
    const id = req.body.id;
    const isCompleted = req.body.isCompleted;

    tasks.forEach((elem) => {
        if(elem.id === id){
            elem.isCompleted = isCompleted;
        }
    });
    res.status(200).send(tasks);
});

//app.delete("/task",(req,res) => {
    //const id = req.body;
    //const findTask =tasks.filter((elem)=>elem.id === id)[0];
    //tasks.pop(findTask);//last id is deleted

    //res.status(200).send(tasks);
//});

app.delete("/task",(req,res) => {
    try{
    const id = req.body.id;
    const findTask =tasks.filter((elem)=>elem.id === id)[0];
    const index = tasks.indexOf(findTask);
    tasks.splice(index,1);
    }
    catch(e){
    res.status(200).send(tasks);
    }
});