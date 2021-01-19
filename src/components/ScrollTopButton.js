import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledScrollTopButton = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 2em;
  right: 1em;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

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
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const currentScrollPos = window.pageYOffset
      if (currentScrollPos > 500) {
        setIsShown(true)
      } else {
        setIsShown(false)
      }
    })
  }, [])

  if (!isShown) {
    return null
  }

  return (
    <StyledScrollTopButton>
      <a href="#hero">☝️</a>
    </StyledScrollTopButton>
  )
}

export default ScrollTopButton
