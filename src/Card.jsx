import React from 'react'

const Card = ({el}) => {
  return (
    <div className='card'>
       <img src={el.imgsrc} alt="" />
      <h3>{el.titre}</h3>
      <p>{el.descjob}</p>
      <h3>{el.leprofil}</h3>
      <p>{el.descprofil}</p>
      <h3>{el.leposte}</h3>
      <p>{el.decpost}</p>
    </div>
  )
}

export default Card