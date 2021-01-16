import React from 'react'
import styled from 'styled-components'

const StyledDog = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #eeeeee;

  img {
    width: 100%;
    object-fit: contain;
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
