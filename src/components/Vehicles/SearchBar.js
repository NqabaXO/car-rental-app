import React from 'react'
import { styled } from 'styled-components'
import {SearchManufacturer} from '../';
import { useState } from 'react';

function SearchBar() {

    const [manufacturer, setManufacturer] = useState('');
  
    const handleSearch = () => {};

  return (
    <Container onSubmit={handleSearch}>
        <SearchItem>
            <SearchManufacturer
            manufacturer = {manufacturer}
            setManufacturer = {setManufacturer}
            />
            <ButtonContainer>
            <Button>Search</Button>
              <Button>Refresh</Button>
            </ButtonContainer>
        </SearchItem>
    </Container>
  )
}

export default SearchBar

const Container = styled.form`

`

const SearchItem = styled.div``

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
gap: 25px;
margin-top: 10px;
flex-wrap: wrap;
`

const Button = styled.button`
font-size: 12px;
padding: 11px 22px;
width: 126px;
height: 40px;
`