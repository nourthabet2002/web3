import React from 'react'
import Card from './Card'

const Cards = ({job}) => {
  return (
    <div className='produits'>  
     {job.map(el=><Card  el={el} />)}
     </div>
  )
}

export default Cards