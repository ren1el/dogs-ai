import React from 'react'
import styled from 'styled-components'

const StyledScrollTopButton = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 1em;
  right: 0.5em;
  background-color: #eeeeee;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
    bottom: 2em;
    right: 2em;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100px;
    height: 100px;
    bottom: 3em;
    right: 5em;
  }

  a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    transform: translateY(-5px);
  }
`

const ScrollTopButton = () => {
  return (
    <StyledScrollTopButton>
      <a href="#hero">☝️</a>
    </StyledScrollTopButton>
  )
}

export default ScrollTopButton
