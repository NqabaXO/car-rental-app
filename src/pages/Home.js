import React from 'react'
import { styled } from 'styled-components'
import { Banner, BookBanner, ChooseUs, ClientReviews, Download, OurPlans, PickCar } from '../components'

function Home() {
  return (
    <Container>
      <Banner/>
      
      <OurPlans/>
      <PickCar/>
      <BookBanner 
         heading='Save big with our cheap car rental!' 
         text='Top Airports. Local Suppliers. 24/7 Support.'
       />
       <ChooseUs/>
       <ClientReviews/>
       <Download/>
    </Container>
  )
}

export default Home

const Container = styled.div`
`
