import './App.css';
import Tasks from './components/Tasks'
import InputUpdate from './components/InputUpdate'
import { useState } from 'react';

function App(){
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return(
    <div className="main">
        <h1>To Do List</h1>
        <div className="contents">
          <ul>
                <Tasks tasks={tasks} setTasks={setTasks}/><br/>
          </ul>       
          <InputUpdate input={input} setInput={setInput} tasks={tasks} setTask={setTasks}/>
        </div>    

    </div>
  )
}

export default App;
