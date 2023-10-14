import React from 'react'
import { useState } from 'react'

const Section3 = ({add,newperson,setnewperson,dele,deleteperson,setdeleteperson}) => {
  return (
    <div className="section3">
      <label >name</label>
      <input type="text" onChange={(e)=>setnewperson({...newperson,name:e.target.value})} />
      <label >salary</label>
      <input type="number" onChange={(e)=>setnewperson({...newhome,number:e.target.value})} />
      <label >position</label>
      <input type="text" onChange={(e)=>setnewperson({...newperson,position:e.target.value})}/>
      <label >joineddate</label>
      <input type="date" onChange={(e)=>setnewpersons({...newperson,joineddate:e.target.value})} />
      <label >tasks</label>
      <input type="text"onChange={(e)=>setnewperson({...newpersons,tasks:e.target.value})} />
      <button onClick={()=>add(newperson)} >ADD</button>
      <button onClick={()=>dele(deleteperson)} >delete</button>




    </div>
  )
}

export default Section3