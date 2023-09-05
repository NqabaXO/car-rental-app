import React from 'react'
import { CalculateCarRent, generateCarImageUrl } from '../Constants'
import { styled } from 'styled-components';

function CarBox({carGroup, key}) {
    const year = carGroup.year;
    const city_mpg = carGroup.city_mpg;
    const CarRent = CalculateCarRent({year, city_mpg});
  return (
            <CarCard key={key}>
              <Image src={generateCarImageUrl({carGroup})} alt=''/>
              {/* Render your carGroup component here using the car object */}
              <Title>
                <h3>{carGroup.model}</h3>
                <Price>
                  <h3><span>${CarRent}</span> /</h3>
                  <p>per day</p>
                </Price>
              </Title>
              <Content>
                <List>
                    {carGroup.make}
                </List>
                <List>
                    {carGroup.transmission === 'a' ? 'Automatic' : 'Manual'} {carGroup.fuel_type}
                </List>
              </Content>
              
              {/* Add more properties as needed */}
              <Button>Book Ride</Button>
            </CarCard>
  )
}

export default CarBox;

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