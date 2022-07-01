import React from 'react'
import styled from 'styled-components'

function Single({backgroundImg ,title ,location}) {
  return (
    <Cover>
    <Wrap bgimage ={backgroundImg}>
       
    </Wrap>
    <h3>{title}</h3>
    <span>{location}</span>
    </Cover>
  )
}

export default Single
const Cover = styled.div`

  
`

const Wrap = styled.div` 
width: 400px;
height : 250px;
background-size:cover;
background-position:center;
background-repeat: no-repeat;
background-image:${props => `url("/images/${props.bgimage}")`}


`