import React from 'react'
import styled from 'styled-components'
import dogEmoji from '../images/dog-emoji.png'
import BreedFilter from './BreedFilter'

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
    margin-bottom: 1em;

    .emoji {
      width: 60px;
      margin-right: 1.5em;

      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 80px;
      }
    }

    .emoji:hover {
      animation-name: wave-animation;
      animation-duration: 2s;
      animation-iteration-count: 1;
    }

    @keyframes wave-animation {
      0% {
        transform: rotate(0deg);
      }
      20% {
        transform: rotate(10deg);
      }
      40% {
        transform: rotate(0deg);
      }
      60% {
        transform: rotate(10deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    .header {
      font-size: clamp(2.5rem, 3vw, 4rem);
      font-weight: 300;
    }
  }

  .tagline {
    font-size: 1.25rem;
    margin-bottom: 1em;
  }
`

const Hero = () => {
  return (
    <StyledHero>
      <div className="container">
        <div className="heading">
          <a href="/">
            <img className="emoji" src={dogEmoji} alt="Dog emoji" />
          </a>
          <h1 className="header">dogs.ai</h1>
        </div>
        <div className="tagline">
          The internet’s largest collection of pictures of our furry friends.
        </div>
        <BreedFilter />
      </div>
    </StyledHero>
  )
}

export default Hero
