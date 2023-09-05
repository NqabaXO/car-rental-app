import React from 'react'
import { styled } from 'styled-components'
import { seamlessImage, mobileImage, mainImage, icon1, icon2, icon3 } from './imports'
import { Link } from 'react-router-dom'

function ChooseUs() {

  const items = [
    {
      imageUrl : icon1,
      header : "Cross Country Drive",
      text : "Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.",
    },
    {
      imageUrl : icon2,
      header : "All Inclusive Pricing",
      text : "Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.",
    },
    {
      imageUrl : icon3,
      header : "No Hidden Charges",
      text : "Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.",
    },
  ]
  return (
    <Container>
      <MobileImage src={mobileImage} alt=''/>
      <MainImage src={mainImage} alt=''/>
      <Wrap>
      <BackgroundImages src={seamlessImage} alt=''/>
        <Content>
        <h3>Why Choose Us</h3>
        <h1>Best valued deals you will ever find</h1>
        <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
        <Link to="/vehicles">
          <button>Find Details</button>
        </Link>
        </Content>
        <Content>
          {items.map((item) => (
            <ContentItems>
            <ImageIcon src={item.imageUrl} alt=''/>
            <Item>
              <h3>{item.header}</h3>
              <p>{item.text}</p>
            </Item>
            </ContentItems>
          ))}
        
        </Content>
      </Wrap>
      
      
    </Container>
  )
}

export default ChooseUs

const Container = styled.div`
margin-bottom: 5rem;
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 35px;
position: relative;
`
const Wrap = styled.div`
    display: flex;
    
    margin-top: 5rem;
    max-width: 100%;
    z-index: 3;
    left: 20px;
    @media screen and (max-width:768px){
      flex-direction: column;
      max-width:90%;
    }
`
const BackgroundImages = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
`
const MainImage = styled(BackgroundImages)`
    position: relative;
    width: 100%;
    z-index: 2;
    object-fit: contain;
    @media screen and (max-width:740px) {
      display: none;
    }
`
const MobileImage = styled(MainImage)`
display: none;
@media screen and (max-width:740px) {
display: block;
}
`
const Content = styled.div`
    flex:0.5;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media screen and (max-width:768px){
      line-height: 1.5rem;
      margin-bottom: 20px;
      justify-content: center;
      text-align: center;
    }
`

const ContentItems = styled.div`
display: flex;
justify-content: center;
gap: 20px;

@media screen and (max-width:768px){
margin-top: 20px;
width:80%;
gap:10px;
}

@media screen and (max-width: 428px){
  display: none;
}
`
const ImageIcon = styled.img`
width:110px;
object-fit: contain;
`
const Item = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`