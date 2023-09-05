import React from 'react'
import banner from '../assets/banners/bg02.png'
import IOS from '../assets/download/appstore.svg'
import android from '../assets/download/googleapp.svg'
import { styled } from 'styled-components'

function Download() {
  return (
    <Container>
        <BannerImage src={banner} alt=''/>
        <Wrap>
            <h1>Download our app</h1>
            <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
            <Apps>
                <Android src={android} alt=''/>
                <Apple src={IOS} alt=''/>
             
            </Apps>
        </Wrap>

    </Container>
  )
}

export default Download;

const Container = styled.div`
position: relative;

margin-bottom: 5rem;
height: 70vh;
background: linear-gradient(90deg,#ddd,#fff);
display: flex;
align-items: center;
justify-content: flex-start;
padding: 0 35px;
@media screen and (max-width:768px){
    justify-content: center;
}
`

const BannerImage = styled.img`
    position: absolute;
    right: 0;
    height: 70vh;
    top: 0;
    z-index: 1;
    @media screen and (max-width:780px){
        opacity: 0.1;
    }
    @media screen and (max-width:600px){
        display: none;
    }
`

const Wrap = styled.div`    
 width: 50%;
 height:100%;
 text-align: center;
 z-index: 3;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
 >h1{
    font-size:36px;
 }

 @media screen and (max-width:768px){
    width: 95%;
 }

 @media screen and (max-width:428px){
    flex-wrap: nowrap;
    flex-direction: column;

    >h1{
        font-size: 30px;
    }
 }
`

const Apps = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-around;
 gap:25px;
 flex-wrap: wrap;
 margin-top: 10px;
`

const Apple = styled.img`
 object-fit: contain;
 width:220px;
 @media screen and (max-width:428px){
    width: 180px;
 }
`

const Android = styled(Apple)``