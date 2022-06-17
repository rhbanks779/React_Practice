import { useState } from "react";
import NewList from "./NewList";
//import {useForm} from "react-hook-form"

export default function Main(){

    const [task, setTask] = useState('')
    //const [priority, setPriority]= useState('')
    //const [due, setDue]= useState('')

    const handleTaskInput = (e) => {
         setTask({task: e.target.value})
    }

      

    return(
        <div className="create">
            <form>
                <label>Enter Task:</label>
                    <input type="text" maxLength={10} value={task} 
                    onChange={(e)=> setTask(e.target.value)} placeholder={"i.e. dishes"} />
                <select>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <input type="date"></input>     
                     
                     <button onClick={handleTaskInput(e)}>Add</button>
            </form>

            <h3>Updated Task List:</h3>
            <NewList />             
            
        </div>
    )
}

//using useForm...
// const {register, handleSubmit, errors} = useForm();
//     const [taskData, setTaskData] = useState();
//     const onSubmit = (data) => {
//         setTaskData(data);
//         console.log(data);
//     }
//     console.log(errors)
//     return(
//         <div className="container">
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <h1>To Do Form:</h1>
//                 <div className="ui divider"></div>
//                 <div className="ui form">
//                   <div className="field">
//                     <label>Enter Task:</label>
//                     <input type='text' maxLength={10} name="task" placeholder="i.e dishes" ref={register({required: "10 characters required."})} />
//                   </div>
//                   <p>{errors.task.message}</p>
//                   <div className="field">
//                   <select name="dropdown" ref={register({required: "level is required"})}>
//                      <option value="low">Low</option>
//                      <option value="medium">Medium</option>
//                      <option value="high">High</option>
//                  </select>
//                   </div>
//                   <p>{errors.dropdown.message}</p>
//                   <div className="field">
//                     <input type="date" name="date" ref={register({required: "date is required"})}></input>
//                   </div>
//                   <p>{errors.date.message}</p>
//                   <button className="fluid ui button blue">Add Task</button>
//                 </div>
//             </form>

//            <pre>{JSON.stringify(taskData, undefined, 2)}</pre>
//         </div>