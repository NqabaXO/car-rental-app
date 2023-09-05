import React from 'react'
import { styled } from 'styled-components'
import ClientCard from './ClientCard'
import img1 from '../../assets/testimonials/pfp1.jpg'
import img2 from '../../assets/testimonials/pfp2.jpg' 

function ChooseUs() {
  return (
    <Container>
        <Wrap>
        <h1>Reviews by People</h1>
        <h3>Client's Testimonials</h3>
        <p>
        Discover the positive impact we've made on the our clients by reading through their testimonials. 
        Our clients have experienced our service and results, 
        and they're eager to share their positive experiences with you.
        </p>
        </Wrap>
         <Content>
            <ClientCard img={img1} name="Nqaba Sikeyi" location="Zimbabwe"
            text="We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "/>
            <ClientCard img={img2} name="Nathaniel Maseko" location="South Africa" 
            text="The car was in great condition and made our trip even better. Highly recommend for this car rental website!"/>

         </Content>
    </Container>
  )
}

export default ChooseUs

const Container = styled.div`

padding-bottom: 5%;
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
background: linear-gradient(90deg,#ddd,#fff);
position: relative;
`
const Content = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    gap:25px;
    margin-bottom: 10px;
`
const Wrap = styled.div`
   display: flex;
   margin-bottom: 2%;
   flex-direction: column;
   text-align: center;
   align-items: center;
   width:50%;
   justify-content: center;
   flex-wrap: wrap;

   @media screen and (max-width:768px){
    width: 80%;
   }
`