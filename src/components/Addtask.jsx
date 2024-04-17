import { v4 as uuidv4 } from 'uuid';
 import { useState } from 'react';
export default function Addtask({ taskList, setTasklist, task, setTasks }) {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        if(task.id){
            const date = new Date();
            const updatetaskList = taskList.map((todo) => (
                todo.id === task.id ? 
                {
                    id:task.id , 
                    name:task.name, 
                    time :`${date.toLocaleTimeString()} ${date.toLocaleDateString}` }
                    :todo
            )) 

            setTasklist(updatetaskList);
            setTasks({ })
        }
        else{        
        const date = new Date();
        const newTask = { 
            id: uuidv4(),
            name: event.target.task.value, 
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` 
        };
        setTasklist([...taskList, newTask]);
        setTasks({ });
    } //else loop closed 
   
    };

    return (
        <div>
            <section className="addTask">
                <form onSubmit={handleSubmit}>
                    <input 
                       type="text" 
                       placeholder="add task" 
                       name="task"                         autoComplete="off" 
                        maxLength={25}
                        value={task.name || " "}
                        onChange={(event) =>(setTasks({...task,name:event.target.value}) )}
                      />
                     <button type="submit">{task.id? "Update" : "Add"} </button>
                 </form>
             </section>
         </div>
     );
}
 
