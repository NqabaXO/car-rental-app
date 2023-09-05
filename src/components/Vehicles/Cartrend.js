import React from 'react'
import { styled } from 'styled-components';
import { CAR_DATA } from '../CarSelect/CarData';

function Cartrend() {
  return (
    <Container>
        <h2>Top <span>Trending</span> Vehicle Models</h2>
        <Wrap>
        {CAR_DATA.map((carGroup, index) => (
        <div key={index}>
          {carGroup.map((car, carIndex) => (
            <CarCard key={carIndex}>
              {/* Render your car component here using the car object */}
              <Image src={car.boximg} alt={car.name}/>
              <Title>
                <h3>{car.name}</h3>
                <Price>
                  <h3><span>${car.price}</span> /</h3>
                  <p>per day</p>
                </Price>
              </Title>
              <Content>
                <List>
                    {car.mark}
                </List>
                <List>
                    {car.transmission} {car.fuel}
                </List>
              </Content>
              
              {/* Add more properties as needed */}
              <Button>Book Ride</Button>
            </CarCard>
          ))}
        </div>
      ))}
        </Wrap>
        
    </Container>
  )
}

export default Cartrend;


const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
text-align: center;
flex-wrap:nowrap;
`

const Wrap = styled.div`
display:grid;
grid-gap:25px;
grid-template-columns: repeat(3, minmax(0,1fr));
margin-top: 20px;
@media screen and (max-width:995px){
    grid-template-columns: repeat(2, minmax(0,1fr));
}

@media screen and (max-width:650px){
    grid-template-columns: repeat(1, minmax(0,1fr));
}

`

const CarCard = styled.div`
width: 300px;
background: var(--color3);
@media screen and (max-width:311px){
    width: 250px;
}
`

const Image = styled.img`
width:100%;
object-fit: contain;
`

const Title = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1px 10px;
`

const Price = styled.p`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Content = styled.div`
padding: 5px 10px;
border-bottom: 1px solid #fff;
`

const List = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 2px;

`

const Button = styled.button`
margin-top: 10px;
margin-bottom: 10px;
`