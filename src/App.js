import { useEffect, useState } from 'react';
import "./index.css";
import './App.css';
import Header from "./components/Header.jsx"
import Showtask from "./components/Showtask.jsx"
import Addtask from "./components/Addtask.jsx"


function App() {
  const[taskList, setTasklist] = useState( JSON.parse(localStorage.getItem("taskList")) || []);
  const[task,setTasks] =useState({ });

useEffect(() => {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}, [taskList]);




  return (
    <div className='App' >
     <Header/>
     <Addtask
         taskList = {taskList} 
         setTasklist = {setTasklist} 
         task = {task}
         setTasks = {setTasks}

         /> 
     <Showtask
       taskList = {taskList}
       setTasklist = {setTasklist} 
       task = {task}  
       setTasks = {setTasks} 

       />
   
    </div>
  );
}

export default App;
