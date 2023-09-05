import React from 'react'
import { styled } from 'styled-components';

function Article({hSmall, hLarge, text, btnProp}) {
  return (
    <Container>
        <h3>{hSmall}</h3>
        <h1>{hLarge}</h1>
            <p>
                {text}
            </p>
        <button>{btnProp}</button>
    </Container>
  )
}

export default Article;


const Container = styled.article`
 width: 40%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
`