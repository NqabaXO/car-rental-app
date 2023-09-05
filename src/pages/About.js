import React from 'react'
import { styled } from 'styled-components'
import aboutImage from '../assets/about/about-main.jpg'
import backgroundImage from '../assets/hero/heroes-bg.png'
import { BookBanner, ChooseUs } from '../components'

function About() {
  return (
    <Container>
      <MainContent>
      <ImageBackground src={backgroundImage} alt='' />
        <Wrap>
          <MainImage src={aboutImage} alt=''/>
          <Content>
            <h3>About The Company</h3>
            <h1>You start the <span>engine</span> and your adventure begins</h1>
            <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. 
                Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. 
               Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.'
            </p>
            <IconContainer>

            </IconContainer>
          </Content>
        </Wrap>
      </MainContent>
      <BookBanner heading='Book a car by getting in touch with us' text='(+263) 712 579 746'/>
      <ChooseUs/>
    
    </Container>
  )
}

export default About

const Container= styled.div``
const MainContent = styled.div`
width: 100%;
display: flex;
justify-content: center;
position: relative;
`
const ImageBackground = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    object-fit: cover;
    height: 50vh;
    width: 100vw;
    opacity: 0.3;
`
const Wrap = styled.div`
    position: relative;
    margin-top: 5rem;
    z-index: 3;
    width: 70%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media screen and (max-width:996px){
    width: 90%;
    }
    @media screen and (max-width:680px){
      flex-direction: column;
    }

`

const MainImage = styled.img`
height: 400px;
object-fit: contain;

@media screen and (max-width:996px){
  height: 330px;
}
@media screen and (max-width:562px){
  height: 220px;
}
`

const Content = styled.article`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
flex-direction: column;
>h1{
  font-size: 38px;
}

@media screen and (max-width:996px){
>h1{
  font-size: 30px;
}

}
`
const IconContainer = styled.div``