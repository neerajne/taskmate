export default function Showtask({taskList, setTasklist , task , setTasks}) {

const handleEdit = (id)=>{ 
    const selectedTask =taskList.find((todo) => todo.id === id);
    console.log(selectedTask);
    setTasks(selectedTask);
  }

const handleDelete = (id)=>{
    console.log(id);
    const updatedTasklist = taskList.filter((task) => task.id !== id);
    setTasklist(updatedTasklist);

}

  return (
    <div>
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{taskList.length}</span>
            </div>
            <button className="clearAll" onClick={ () => ( setTasklist([]))}>Clear</button>
        </div>
        <ul>
        { taskList.map((task) => (
            <li key={task.id}>
                <p>
                    <span>{task.name}</span>
                    <span>{task.time}</span>
                </p>
                <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
                <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
            </li>
        )) }
           
        </ul>
    </section>    
    </div>
  )
}
