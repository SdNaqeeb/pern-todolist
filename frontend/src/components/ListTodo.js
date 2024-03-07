import React,{useEffect, useState} from 'react'
import EditTodo from './EditTodo'

const ListTodo = () => {
  const [todo, setTodo]=useState([])

  const delTodos= async (id)=>{
   try {
    const result= await fetch(`http://localhost:5000/todo/${id}`,{
      method:"DELETE"
    });
    setTodo((todo.filter((list)=>list._id!==id)));
   } catch (error) {
    console.error(error.message)
   }
  }

  const getTodos= async()=>{
    const result= await fetch("http://localhost:5000/todo");
    const jsonData= await result.json();
    setTodo(jsonData);
  }

useEffect(()=>{
   getTodos();
  },[])

  return (
    <div>
      <table>
        <tr>
          <td>Description</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
        {todo.map(list=>(
          <tr key={list._id}>
            <td>{list.description}</td>
            <td><EditTodo list={list}/></td>
            <td><button onClick={()=>delTodos(list._id)}>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default ListTodo