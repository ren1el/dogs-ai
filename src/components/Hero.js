import React from 'react'
import styled from 'styled-components'
import dogEmoji from '../images/dog-emoji.png'

const StyledHero = styled.section`
  width: 100%;
  background-color: #eeeeee;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 500px;
  }

  .container {
    padding: 0 3em;
  }

  .heading {
    display: flex;
    align-items: center;

    .emoji {
      width: 60px;
      margin-right: 1em;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 80px;
      }
    }

    .header {
      font-size: clamp(2.5rem, 3vw, 4rem);
    }
  }

  .tagline {
    font-size: 1.25rem;
  }
`

const Hero = () => {
  return (
    <StyledHero>
      <div className="container">
        <div className="heading">
          <img className="emoji" src={dogEmoji} alt="Dog emoji" />
          <h1 className="header">dogs.ai</h1>
        </div>
        <p className="tagline">
          The internet’s largest collection of pictures of our furry friends.
        </p>
      </div>
    </StyledHero>
  )
}

export default Hero
