import React from 'react'
import { styled } from 'styled-components'
import { team } from '../components/Constants'

function Team() {
  return (
    <Container>
      <h1>Meet our <span>Team</span> Of Experts</h1>
        <Wrap>
          {team.map((item) =>(
            <TeamMembers>
            <img src={item.imageUrl} alt=""/>
            <Text>
            <h3>{item.name}</h3>
            <p>{item.position}</p>
            </Text>
            </TeamMembers>
          ))}
        </Wrap>
    </Container>
  )
}

export default Team

const Container = styled.div`
padding: 20vh 0vw 10vh 0vw;
position: relative;
background: var(--gradient);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
text-align: center;
`

const Wrap = styled.div`
display: grid;
width: 90%;
grid-gap:25px;
grid-template-columns: repeat(3, minmax(0,1fr));
padding-bottom: 10rem;

@media screen and (max-width: 600px){
  grid-template-columns: repeat(2, minmax(0,1fr));
}

@media screen and (max-width: 425px){
  grid-template-columns: repeat(1, minmax(0,1fr));
  padding: 0vh 20% ;
}
`

const TeamMembers = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
flex-wrap: nowrap;
background-color: var(--color1);
filter:grayscale(100%);
-webkit-filter: grayscale(100%);
border-top-left-radius: 30px;
border-bottom-right-radius: 30px;
overflow: hidden;
width: 15rem;
height: 21rem;
transition: 500ms;

>img{
  right: 0;
  position: relative;
  width:100%;
  object-fit: contain;
  z-index: 1;
  bottom: 0;
  border:none;
  border-bottom-right-radius: 30px;
}

&:hover{
  filter:grayscale(0%);
  transition: 500ms;
  -webkit-filter: grayscale(0%);
}

@media screen and (max-width:800px){
  height:13rem;
  width:10rem;
}
`
const Text = styled.span`
   position: absolute;
   z-index: 3;
   display: flex;
   flex-direction: column;
   background: rgba(0,0,0,0.4);
   border-bottom-right-radius: 30px;
   width:20rem;
   padding: 5px 20px;
   text-align: left;
   >p{
    color: var(--color1);
   }
   >h3{
    color: var(--color1);
    font-weight: 700;
    font-style: italic;
   }
`