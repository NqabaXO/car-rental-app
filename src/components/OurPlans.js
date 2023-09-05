import React from 'react'
import { styled } from 'styled-components'
import icon1 from '../assets/plan/icon1.png'
import icon2 from '../assets/plan/icon2.png'
import icon3 from '../assets/plan/icon3.png'

function OurPlans() {
    const items = [
        {
            imageUrl: icon1,
            name:"Select Car",
            text:"We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs",
        },
        {
            imageUrl: icon2,
            name:"Contact Operator",
            text:"Our knowledgeable and friendly operators are always ready to help with any questions or concerns",
        },
        {
            imageUrl: icon3,
            name:"Let's Drive",
            text:"Whether you're hitting the open road, we've got you covered with our wide range of cars",
        },
        
    ]
  return (
    <Container>
        <Header>
            <h2>Plan your trip now</h2>
            <h1>Quick & easy car rental</h1>
        </Header>
        <ImageContainer>
            {items.map((item) => (
                <ImageItem>
                <ImageIcon src={item.imageUrl} alt=''/>
                <h2>{item.name}</h2>
                <br/>
                <p>{item.text}</p>
                </ImageItem>
                
            ))}
            
        </ImageContainer>

    </Container>
  )
}

export default OurPlans

const Container = styled.div`
margin-bottom: 10rem;
position: relative;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 3;
`
const Header = styled.div`
text-align: center;
`
const ImageContainer = styled.div`
width: 80%;
display: grid;
grid-gap:25px;
grid-template-columns: repeat(3, minmax(0,1fr));

@media screen and (max-width:720px){
    grid-template-columns: repeat(1, minmax(0,1fr));
}
`

const ImageIcon = styled.img`
width: 10rem;
object-fit: contain;
margin-bottom: 5px;
`

const ImageItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
flex-wrap: wrap;
>p{
    margin-top: 8px;
}
`