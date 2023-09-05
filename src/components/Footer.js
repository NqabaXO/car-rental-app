import React from 'react'
import { styled } from 'styled-components';
import Logo from '../assets/logo/logo.png'

function Footer() {
  return (
    <Container>
       <Wrap>
      <Content>
        <ImageLogo src={Logo} alt='Car Rental'/>
        <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
        <a href='https://facebook.com/nqaba.sikeyi'>Designed by Nqaba Sikeyi</a>
      </Content>
      <Content>
        <h2>Company</h2>
        <br/>
        <p>Zambia</p>
        <p>South Africa</p>
        <p>Botswana</p>
        <p>Namibia</p>
      </Content>
      <Content>
        <h2>Working Hours</h2>
        <br/>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
      </Content>
      <Content>
        <h2>Subscriptions</h2>
        <br/>
        <p>Subscribe your Email address for latest news & updates.</p>
        <Input type="text" placeholder='Enter Email'/>
        <button>Submit</button>
      </Content>
    </Wrap>
      <p>2023 made with ❤️ by Nqaba</p>
    </Container>
   
  )
}

export default Footer;

const Container = styled.footer`
position: absolute;
>p{
  text-align: center;
  font-size: 100%;
  padding: 10px 10px;
  border-top: 1px solid #ff4d30;
  font-weight: 200;
  font-style: italic;
  
}
`
const Wrap = styled.div`

z-index: 3;
display: grid;
grid-gap:25px;
grid-template-columns: repeat(4, minmax(0,1fr));
padding: 10px 20px;

@media screen and (max-width:768px){
  grid-template-columns: repeat(2, minmax(0,1fr));
}

@media screen and (max-width:430px){
  grid-template-columns: repeat(1, minmax(0,1fr));
}

`
const Content = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
line-height: 1.5rem;
>h2{
  margin-bottom: 10px;
}
`

const ImageLogo = styled.img`
width: 10rem;
margin-bottom: 12px;
object-fit: contain;
`

const Input = styled.input`
margin-bottom: 5px;
`