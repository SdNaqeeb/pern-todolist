import React,{useState} from 'react'

const EditTodo = ({list}) => {
  const [description, setDescription]=useState(list.description);
  const [isClicked,setIsClicked]=useState(false);
  const update= async (e) =>{
    e.preventDefault();
    try {
      const body={description};
      const result= await fetch(`http://localhost:5000/todo/${list._id}`,{
        method:"PUT",
        body:JSON.stringify(body),
        headers:{
          "Content-Type":"application/json"
        }
      })
      window.location="/";
    } catch (error) {
      console.error(error.message)
    }
    
  }
  const handleClick=()=>{
    setIsClicked(!isClicked);
  }
  return (
    <>
    <button onClick={handleClick} className={isClicked?"edit":""} >Edit</button>
    <div className={!isClicked?"edit":""}>
      <input type='text' value={list.description} onChange={e=>setDescription(e.target.value)}></input>
      <button onClick={(e)=>update(e)}>Update</button>
      <button onClick={()=>setDescription(list.description)}>Close</button>
    </div>
    </>
  )
}

export default EditTodo