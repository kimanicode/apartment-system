import React  from 'react'
import styled from 'styled-components'


function SingleService({backgroundImg ,title ,price})


 {
  return (
    <Cover>
    <Wrap bgimage ={backgroundImg}>
       
    </Wrap>
    <h3>{title}</h3>
    <span>{price}</span>
      <StyledButton>Pay Now</StyledButton> 
    
    </Cover>
  )
}


export default SingleService

const Cover = styled.div`

  
`
const StyledButton = styled.button`
  background-color: #3993DD;
  font-size: 18px;
  color: white; 
  margin:5px;
  padding:5px;
  border-radius:5px;
`;

const Wrap = styled.div` 
width: 400px;
height : 250px;
background-size:cover;
background-position:center;
background-repeat: no-repeat;
background-image:${props => `url("/images/${props.bgimage}")`}




`