import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.png'
import { styled } from 'styled-components'

function NotFound() {
  return (
    <Container>
      <Link to="/"><Image src={logo} alt=''/></Link>
      
      <h1>404 Page Not Found</h1>
      <h3>Please Navigate to our <Link to="/">home Page</Link></h3>
    </Container>
  )
}

export default NotFound


const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
flex-wrap: wrap;
overflow-x: hidden;
`

const Image = styled.img`
width: 40%;
object-fit: contain;
cursor: pointer;
&:hover{
    animation: bounce 250ms;
    animation-direction: alternate;
    animation-iteration-count:infinite;

    @keyframes bounce{
      from { transform: translate3d(0, 0, 0);}
      to { transform: translate3d(0, 10px, 0);}
    }
  }
`