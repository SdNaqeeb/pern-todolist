const express= require("express");
const cors=require("cors");
const pool=require("./db")

const app=express();

app.use(express.json());
app.use(cors())

app.post("/todo",async (req,res)=>{
    try {
        const {description}=req.body;
    const newTodo= await pool.query("insert into todo(description) values($1)",[description]);
    res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/todo", async (req,res)=>{
    try {
        const allTodo= await pool.query("select * from todo");;
        res.json(allTodo.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/todo/:id", async (req,res)=>{
    const {id}=req.params;
    const todo= await pool.query("select * from todo where _id=$1",[id]);
    res.json(todo.rows[0])
})

app.put("/todo/:id", async (req, res)=>{
    const {id}=req.params;
    const {description}=req.body;
    const updateTodo= await pool.query(
        "update todo set description=$1 where _id=$2",[description,id]
    )

    res.json("todo updated");
})

app.delete("/todo/:id", async(req,res)=>{
    const {id}=req.params;
    const deleteTodo= pool.query("delete from todo where _id=$1",[id]);
    res.json("deleted successfully")
})

app.listen(5000, ()=>console.log(`port started at 5000`))