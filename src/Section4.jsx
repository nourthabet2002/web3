import React from 'react'
import { useState } from 'react'

const Section4 = ({Add,newjob,setnewjob,deljob,deletejob,setdeletejob}) => {
  return (
    <div className='Section4'>
  <label>name</label>
  <input type="text" onChange={(e)=>setnewjob({...newjob,name:e.target.value})}/>
  <label>descripition</label>
  <input type="text" onChange={(e)=>setnewjob({...newjob,descripition:e.target.value})}/>
  <label>deadline</label>
  <input type="text" onChange={(e)=>setnewjob({...newjob,deadline:e.target.value})} />
  <button onClick={()=>Add(newjob)} >ADD</button>
  <button onClick={()=>deljob(deletejob)} >delete</button>

    </div>
    
  )
}

export default Section4