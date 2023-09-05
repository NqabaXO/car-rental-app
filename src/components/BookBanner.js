import React from 'react'
import { styled } from 'styled-components'
import bookbanner from '../assets/banners/book-banner.png'

function BookBanner({heading, text}) {
  return (
    <Container>
        <ImageBackground src={bookbanner} alt=''/>
        <Wrap>
        <h2>{heading}</h2>
        <h2><span>{text}</span></h2>
        </Wrap>
        
    </Container>
  )
}

export default BookBanner


const Container = styled.div`
width: 100%;
margin: 60px 0px;
height: 30vh;
position: relative;
display: flex;
background-color: rgba(0,0,0,0.6);
overflow: hidden;
`

const Wrap = styled.div`
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    > h2{
        color: white;
        font-size: 35px;
        font-weight: 700;
    }
`

const ImageBackground = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    height: 30vh;
    width: 100vw;
    filter: blur(8px);

`