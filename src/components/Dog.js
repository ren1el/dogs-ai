import React from 'react'
import styled from 'styled-components'

const StyledDog = styled.div`
  width: 100%;

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    display: block;
    margin-bottom: 1.25rem;
    border-radius: ${({ theme }) => theme.borderRadius};
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
