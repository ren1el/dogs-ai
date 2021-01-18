import React from 'react'
import styled from 'styled-components'
import dogEmoji from '../images/dog-emoji.png'
import BreedFilter from './BreedFilter'

const StyledHero = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
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

    .header {
      font-size: clamp(2.5rem, 3vw, 4rem);
      font-weight: 200;

      a {
        color: ${({ theme }) => theme.colors.tertiary};
        text-decoration: none;
      }
    }
  }

  .tagline {
    font-size: 1.25rem;
    margin-bottom: 1em;
  }
`

const Hero = () => {
  return (
    <StyledHero id="hero">
      <div className="container">
        <div className="heading">
          <a href="/">
            <img className="emoji" src={dogEmoji} alt="Dog emoji" />
          </a>
          <h1 className="header">
            <a href="/">dogs.ai</a>
          </h1>
        </div>
        <div className="tagline">
          The internet’s largest gallery of open-source dog pictures.
        </div>
        <BreedFilter />
        <div>
          Created by <a href="https://ren1el.github.io/">Reniel Ocampo</a>.
          Powered by the <a href="https://dog.ceo/dog-api/">Dog API</a>.
        </div>
      </div>
    </StyledHero>
  )
}

export default Hero
