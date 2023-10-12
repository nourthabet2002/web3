import React from 'react'

const Section4 = ({add,newjob,setnewjob}) => {
  return (
    <div className='Section4'>
  <label>name</label>
  <input type="text" onChange={(e)=>setnewjob({...newjob,name:e.target.value})}/>
  <label>descripition</label>
  <input type="text" onChange={(e)=>setnewjob({...newjob,descripition:e.target.value})}/>
  <label>deadline</label>
  <input type="text" onChange={(e)=>setnewjob({...newjob,deadline:e.target.value})} />

    </div>
    
  )
}

export default Section4