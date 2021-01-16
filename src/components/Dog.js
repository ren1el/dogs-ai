import React from 'react'
import styled from 'styled-components'

const StyledDog = styled.div`
  img {
    width: 100%;
    object-fit: contain;
    display: block;
    margin-bottom: 1rem;
  }
`

const Dogs = ({ url, breed }) => {
  return (
    <StyledDog>
      <img src={url} alt={breed} />
    </StyledDog>
  )
}

export default Dogs
