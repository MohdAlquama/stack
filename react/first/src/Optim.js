import React from 'react'

const Student = React.memo(({student})=>{
  console.log("Student Rendered")
  return (
    <div>
      <h2>{student.name}</h2>
    </div>
  )
})
function Optim() {
  const [count,setCount] = React.useState(0)
  const studnets = [
    {id:1,name:"A"},
    {id:2,name:"B"},
    {id:3,name:"C"},
    {id:4,name:"D"},
    {id:5,name:"E"},
  ]
  return (
    <div style={{padding:"20px"}}>
        <h1>Optim</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <span style={{"margin":"0 20px"}}>{count}</span>
        <button onClick={()=>setCount(count-1)}>-</button>
        <hr />
        {
          studnets.map((student)=><Student key={student.id} student={student}/>)
        }
    </div>
  )
}


export default Optim