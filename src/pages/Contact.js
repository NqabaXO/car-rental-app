import React from 'react'
import { Download } from '../components'
import { styled } from 'styled-components'
import backgroundImage from '../assets/banners/bg-contact.png'
import { PhoneIcon, RssIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <Container>
        <Download/>
        <Wrap>
        <ImageBackground src={backgroundImage} alt='' />
          <Content>
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <Icons>
              <Link to="/home">
                <PhoneIcon />&nbsp; (+263) 712-579-746
              </Link>
    
              <Link to="/home">
                <EnvelopeIcon/>&nbsp;
                jabuzw1@gmail.com
              </Link>
     
              <Link to="/home">
                <RssIcon/>&nbsp; Bulawayo, Zimbabwe
              </Link>
              </Icons>
             
          </Content>
          <Content>
              <FormPage>
                <label>
                  Full Name <span>*</span>
                </label>
                <input required type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <span>*</span>
                </label>
                <input required type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <span>*</span>
                </label>
                <textarea required placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </FormPage>
          </Content>
        </Wrap>
    </Container>
  )
}

export default Contact

const Container = styled.div`
position: relative;
margin-top:60px;
margin-bottom: 30px;
`
const Wrap = styled.div`
position: relative;
display: flex;
justify-content: center;
z-index:10;

@media screen and (max-width:600px){
 flex-direction: column;
 justify-content: center;
 align-items: center;
}
`

const Content = styled.div`
flex: 0.45;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
flex-wrap: wrap;
z-index: 5;

>h2{
  font-size: 42px;
  margin-bottom: 1.4rem;
}


@media screen and (max-width:600px){
 width:90%;
}
`
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;

>a{
  text-decoration: none;
  display: flex;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  >svg{
    fill: var(--color1);
    height: 30px;
    
  }
  &:hover{
    animation: bounce 250ms;
    animation-direction: alternate;
    animation-iteration-count:infinite;

    @keyframes bounce{
      from { transform: translate3d(0, 0, 0);}
      to { transform: translate3d(0, 10px, 0);}
    }
  }
}

`

const FormPage = styled.div`
      display: flex;
      text-align: left;
      flex-direction: column;
      width:80%;
      z-index: 5;
      @media screen and (max-width:600px){
        width: 100%;
      }
`

const ImageBackground = styled.img`
position: absolute;
right: 0;
top: 0;
z-index: 1;
object-fit: cover;
height: 100vh;
width: 100vw;

`
