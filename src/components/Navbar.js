import { Close, Menu } from '@mui/icons-material';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import logo from '../assets/logo/logo.png'

function Navbar() {
  
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Container>
        <Link to="/">
          <Image src={logo}/>
        </Link>
      <FullMenu>
            <Link to="/">Home</Link>
            <Link to="/vehicles">Vehicles For Hire</Link>
            <Link to="/team">Team</Link>
            <Link to="/about-us">About</Link>
            <Link to="/contact">Contact</Link>
            <a href='/#'>Sign In</a>
            <button>Sign Up</button>
      </FullMenu>
      <MobileMenu>
        {toggleMenu?
        <Close onClick={() => setToggleMenu(false)} /> :
        <Menu onClick={() => setToggleMenu(true)}/>}

        {toggleMenu && (
          <MobileItem>
            <Link to="/">Home</Link>
            <Link to="/vehicles">Vehicles For Hire</Link>
            <Link to="/team">Team</Link>
            <Link to="/about-us">About</Link>
            <Link to="/contact">Contact</Link>
            
          </MobileItem>
        )}
      </MobileMenu>

    </Container>
  )
}

export default Navbar;


const Image = styled.img`
width: 145px;
object-fit: contain;
display: flex;
align-items: center;
justify-content: center;
`
const Container = styled.nav`
    backdrop-filter: blur(15px);
    background-color: rgba(255,255,255,0.15);
    box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
    align-items: center;
    display: flex;
    height: auto;
    justify-content: space-between;
    left: 0;
    padding: 27px 35px;
    position: absolute;
    top: 0;
    position: fixed;
    width: 100%;
    margin-bottom: 25px;
    z-index: 99999;
`
const FullMenu = styled.div`
position: relative;
display: flex;
margin-right: 0;
flex: 0.9;
display: flex;
justify-content: space-between;
align-items: center;
width: 80%;

>a{
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  
  &:hover{
   font-weight:bold ;
   color: #ff4d30;
   transition: ease-in-out;
  }
}

@media screen  and (max-width:981px){
  flex: 0.95;
  >a{
    font: 18px;
  }
}
@media screen  and (max-width:845px){
 >a{
  font-size: 16px;
 }

@media screen and (max-width:740px){
  display: none;
}
}
  `
const MobileMenu = styled.div`
position: relative;
display: none;

@media screen and (max-width:740px){
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-right: 0;
  background: white;
}
`
const MobileItem = styled.div`
   flex: 0.9;
   display: flex;
   flex-direction: column;
   bottom: 0;
   left: 0;
   width: 90%;
   height: 100vh;

   >a{
    font-size: 18px;
    font-weight: 500;
   }

`