import React,{useState} from 'react';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';
import AddToDo from './components/AddToDo';
import EditTodo from './components/EditTodo';



function App() {
  let [todo,setTodo] = useState([{
    id:1,
   todoName:"Task1",
   description:"this is basic html task",
   status:"Notcompleted"
  },
  {
    id:2,
    todoName:"Task2",
    description:"this is basic css task",
    status:"Notcompleted"
   },
   {
    id:3,
    todoName:"Task3",
    description:"this is basic javascript task",
    status:"Notcompleted"
   },
   {
    id:4,
    todoName:"Task4",
    description:"this is basic react task",
    status:"Notcompleted"
   },
   {
    id:5,
    todoName:"Task5",
    description:"this is basic react-hook task",
    status:"Notcompleted"
   }
])
  return <>
  <BrowserRouter>
  <Dashboard todo={todo} setTodo={setTodo}/>
      <Routes>
        <Route path='/add-todo' element={<AddToDo todo={todo} setTodo={setTodo}/>}/>
        <Route path='/edit-todo/:id' element={<EditTodo todo={todo} setTodo={setTodo}/>}/>
        <Route path='*' element={<Navigate to='Dashboard'/>}/>
        </Routes>
    </BrowserRouter> 
  
</>
    
  
}

export default App