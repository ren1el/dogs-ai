import React, { useState } from 'react'
import styled from 'styled-components'

const StyledDog = styled.div`
  width: 100%;
  position: relative;

  .placeholder,
  img {
    width: 100%;
    height: 500px;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    margin-bottom: 1em;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-bottom: 2em;
    }
  }

  .placeholder {
    background-color: #eeeeee;
  }

  img {
    object-fit: cover;
    display: block;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 1.25em;
    display: none;
    align-items: flex-end;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
    pointer-events: none;
    border-radius: ${({ theme }) => theme.borderRadius};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: flex;
    }
  }

  &:hover .overlay {
    opacity: 1;
  }

  .overlay-btn {
    text-decoration: none;
    background-color: #ffffff;
    border: none;
    padding: 0.5em 1em;
    border-radius: ${({ theme }) => theme.borderRadius};
    opacity: 0.9;
    transition: opacity 0.1s ease-in-out;
    font-size: 1rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    pointer-events: auto;
  }

  .overlay-btn:hover {
    opacity: 1;
  }

  .link-btn {
    margin-bottom: 2em;
    display: inline-block;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }
`

const Dogs = ({ url, breed }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <StyledDog>
      {isLoaded ? null : <div className="placeholder"></div>}
      <img
        src={url}
        alt={breed}
        onLoad={() => setTimeout(() => setIsLoaded(true), 100)}
      />
      <div className="overlay">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="overlay-btn"
        >
          🔗
        </a>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="overlay-btn link-btn"
      >
        Link 🔗
      </a>
    </StyledDog>
  )
}

export default Dogs
