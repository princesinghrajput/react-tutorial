import React from 'react'
import './Card.css'
const Card = ({title, image, description, color}) => {
    console.log(color)

    let style = {
        backgroundColor: color
    }
    
  return (
    <div className='card' style={style}>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Card