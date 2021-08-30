

// const Inputdisplay = (props) =>{
//     const addTaskHandler = () =>{
//       const newTasks =[...props.tasks]
//       newTasks.push(props.input)
//       props.setTasks(newTasks)
//       props.setInput("")
  
//     }
//     return (
//       <div>
//         <input 
//         value={props.input}
//         type="text" 
//         onChange={(event) => props.setInput(event.target.value)}/>
//         <button onClick={addTaskHandler}>add task</button>
//       </div>
//     )
//     }


function InputUpdate(props){
    
  const addTaskHandler = ()=>{
    const newTasks = [...props.tasks]
    if(props.input == ""){
      alert("Type something to add to list")
    }else{
    newTasks.push(props.input)
    props.setTask(newTasks)
    props.setInput("")
  }
}
  const changeHandler = (event) =>{
    props.setInput(event.target.value)
  }
  return(
    <div className="input">
        <p onClick = {()=>addTaskHandler()}>+</p>
        <input type ="text"  value={props.input} onChange ={(event) => changeHandler(event)} />
        
    </div>
  )
}


export default InputUpdate;