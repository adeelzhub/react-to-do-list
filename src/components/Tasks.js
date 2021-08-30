
// const Tasklist = ({tasks,setTasks}) =>{
//     const deletHandler = (index) =>{
//       const newTasks = [...tasks]
//       newTasks.splice(index, 1)
//       setTasks(newTasks)
//     }
//     return (
//       <>
//         {tasks.map((task,index) =>{
//           return(
//               <>
//                   <p>{task}</p>
//                   <button onClick={()=> deletHandler(index)}>delete</button>
//               </>
//           )
//         })}
//       </>
//     )}


function Tasks(props){
  const deleteHandler =(index)=>{
      const newTasks = [...props.tasks]
      newTasks.splice(index,1)
      props.setTasks(newTasks)
  }
  return(
    <>
        {props.tasks.map((task,index) =>{
          return(
            <li className="tasks">
              <p>{task}</p>
              <button onClick={()=> deleteHandler(index)}>Delete</button>
            </li>
          )
        })}
    </>

  )
}


export default Tasks