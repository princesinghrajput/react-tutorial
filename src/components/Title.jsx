import React from 'react'

const Title = (props) => {
    
  return (
    <div>
        <h1>My name is {props.name}</h1>
        <h2>I am a {props.designation}</h2>
        <h2>I am {props.age} years old</h2>
    </div>
  )
}

export default Title