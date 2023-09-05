import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import {SearchBar, CustomFilter, CarBox, Cartrend} from '../components'
import { fetchData, carsOptions } from '../utils'
import backgroundImage from '../assets/banners/bg-1.png'

export default function Vehicles() {
  const [myCars, setMyCars] = useState([]);
  
  useEffect(() =>{
    const fetchCarsData = async () => {

      const CarsData = await fetchData(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=mazda',
        carsOptions);
       
        console.log(CarsData);
        setMyCars (CarsData);
    } 
    fetchCarsData();
    
  }, []);

  
  
  return (
    <Container>
          <ImageBackground src={backgroundImage} alt='' />
          <h1>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        <Wrap>
          <SearchBar/>
        </Wrap>
        { myCars.length > 1 ? (
          <Content>
            <h2>Displaying <span>search</span> results</h2>
              <CarsContainer>
                {myCars?.map((car, key)=>(<CarBox carGroup={car} key={key}/>))}
              </CarsContainer>
          </Content>
        ): (
          <Empty>
            <Cartrend/>
          </Empty>
        )}
    </Container>
  )
}




const Container = styled.div`
padding-top: 20vh;
text-align:center ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ImageBackground = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    z-index: -2;
    object-fit: cover;
    height: 50vh;
    width: 100vw;
    opacity: 0.3;
`
const Wrap = styled.div`
  margin-bottom: 20px;
`

const Content = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
text-align: center;
flex-wrap:nowrap;
`

const Empty = styled.div`
position: relative;
width:100%;
padding:2%;
margin-bottom:2px;
`

const CarsContainer = styled.div`
display:grid;
grid-gap:25px;
grid-template-columns: repeat(3, minmax(0,1fr));
margin: 20px 0px;
@media screen and (max-width:995px){
    grid-template-columns: repeat(2, minmax(0,1fr));
}

@media screen and (max-width:650px){
    grid-template-columns: repeat(1, minmax(0,1fr));
}

`