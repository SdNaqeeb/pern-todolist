import React,{useEffect,useState} from 'react'

const InputTodo = () => {
    const [description,setDescription]=useState("")
    const handleSubmit=async (e)=>{
        e.preventDefault();
    try {
        const body={description}
        const result = await fetch("http://localhost:5000/todo",{
            method:"POST",
            body:JSON.stringify(body),
            headers:{"Content-Type":"application/json"}
        })
        window.location="/";
    } catch (error) {
        console.error(error.message)
    }
    }
  return (
    <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
        <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='enter task' />
        </form>
    </div>
  )
}

export default InputTodo