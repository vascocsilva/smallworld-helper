import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 10px;
  justify-content: center;
  width: 100vw;
`

const Card = ({ children }) => {
  return (
    <CardStyled>
      { children }
    </CardStyled>
  )
}

Card.displayName = 'Card'

export default Card