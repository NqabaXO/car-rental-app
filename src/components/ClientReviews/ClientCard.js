import React from 'react'
import { styled } from 'styled-components'


function ClientCard({text, name, location,img}) {
  return (
    <Container>
        <Review>
            <p>
            "{text}"
            </p>
        </Review>
        <Details>
            <Image src={img} alt=''/>
            <PersonalDetails>
                <h4>{name}</h4>
                <p>{location}</p>
            </PersonalDetails>
        </Details>
    </Container>
  )
}

export default ClientCard

const Container = styled.div`
  padding: 6% 6%;
  box-shadow: rgba(14,101,150,0.25) 0px 54px 55px, rgba(27, 74, 136, 0.12) 0px -12px 30px, rgba(0,0,255,0.12) 0px 4px 6px, rgba(0,0,255,0.12) 0px 12px 13px, rgba(0,0,255,0.09) 0px -3px 5px;
  border: none;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30rem;
  height: 20rem;

  @media screen and (max-width:768px) {
    width: 70vw;
  }
`

const Review = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  font-size: large;
`

const Details = styled.div`
   margin-top: 10px;
   display: flex;
   gap:10px;
   align-items: center;
`
const PersonalDetails = styled.div`
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   width:80%;
`

const Image = styled.img`
   border-radius: 100%;
   object-position: center;
   width: 5rem;
`