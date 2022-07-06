import React from 'react'
import styled from 'styled-components'

const Display = ({profileImg ,name,company ,description }) => {
  return (
    <div>
        <Cover>
            <Wrap bgimage ={profileImg}>
       
            </Wrap>
          <Heading>{name}</Heading>
          <h4>{company}</h4>

          <Para>{description}</Para>
        </Cover>


    </div>
  )
}

export default Display

const Cover = styled.div`
    background-color:#F0F8EA;
    border:solid;
    border-width:2px;
    width:300px;
    height:250px;
    margin-bottom:25px;
    margin-top:55px;
    border-image-slice:1;
    border-image-source:
     linear-gradient(
      60deg,
      #b16ec4,
      #5f97b9
    );


  
`

const Wrap = styled.div` 
    width: 100px;
    height : 100px;
    border-radius:50%;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image:${props => `url("/images/${props.bgimage}")`}
    


`
const Heading = styled.h3`
     margin-top: -25px;
     margin-left:20px;
     color:aqua;


`
const Para = styled.p`
    text-align:start;
    padding:10px;
`
    

