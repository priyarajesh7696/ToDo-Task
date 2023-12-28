import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function AddToDo({todo,setTodo}) {
    let [todoName,setTodoName] = useState("")
    let [description,setDescription] = useState("")
    let [status,setStatus] = useState("Notcompleted")
    let navigate = useNavigate()
    const todoCreate = ()=>{
        let id = todo.length?todo[todo.length-1].id+1 : 1// fetch the last index element.id+1 or if array is empty id will be 1
       
        let newArray = [...todo]// deep copy Achieve Immutability
        
        newArray.push({
          id,
          todoName,
          description,
          status

        })
        setTodo(newArray)
    navigate('/dashboard')
      }
  return <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
                  <h1 className="mt-5 text-success ">MY TODO APP</h1>
      <div className="container-fluid border-2">
      <Form className="p-4 d-flex align-items-center justify-content-evenly mb-1">
      <Form.Group className="mb-5 w-25">
            <Form.Label as="h5">TodoName</Form.Label>
            <Form.Control type="text"placeholder='Enter Task Name' onChange={(e)=>setTodoName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-5 w-25">
          <Form.Label as="h5">Description</Form.Label>
            <Form.Control type="text"placeholder='Enter description' onChange={(e)=>setDescription(e.target.value)}/>
          </Form.Group>       
        <Button variant="success"className="mb-4 w-25" onClick={()=>todoCreate()}>
          AddToDo
        </Button>
  </Form>
      </div>
  </div>
  </div>
  
  
}

export default AddToDo