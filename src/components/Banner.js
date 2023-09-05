import React from 'react'
import { styled } from 'styled-components'
import mainImage from '../assets/hero/main-car.png'
import seamlessImage from '../assets/hero/hero-bg.png'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <Container>
      <BackgroundImages src={seamlessImage} alt=''/>
      <Wrap>
        <h3>Plan your trip now</h3>
        <h1>Save <span>big</span> with our car rental</h1>
        <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
        <ButtonContainer>
          <Link to ="/vehicles" ><button>Book Ride</button></Link>
          <Link to = "/about-us"><button>Learn More</button></Link>
        </ButtonContainer>
      </Wrap>
      <MainImage src={mainImage}/>
    </Container>
  )
}

export default Banner

const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: space-around;
padding: 0 35px;

`
const Wrap = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    max-width: 35%;
    z-index: 3;
    left: 20px;

    @media screen and (max-width:740px){
      max-width: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
`
const BackgroundImages = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
`
const MainImage = styled(BackgroundImages)`
    margin-top: 5rem;
    width: 65%;
    z-index: 2;
    right: 20px;
    @media screen and (max-width:740px) {
      display: none;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    font-family: Rubik,sans-serif;
    font-size: 1.6rem;
    gap: 2rem;
    margin-top: 5px;
`