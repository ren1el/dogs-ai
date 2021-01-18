import React, { useState } from 'react'
import styled from 'styled-components'

const StyledDog = styled.div`
  width: 100%;
  position: relative;

  .placeholder,
  img {
    width: 100%;
    height: 100%;
    box-shadow: ${({ theme }) => theme.boxShadow};
    margin-bottom: 1em;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      border-radius: ${({ theme }) => theme.borderRadius};
      height: 500px;
      margin-bottom: 2em;
    }
  }

  .placeholder {
    background-color: ${({ theme }) => theme.colors.secondary};
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
    opacity: 0.9;
    transition: opacity 0.1s ease-in-out;
    pointer-events: auto;
  }

  .overlay-btn:hover {
    opacity: 1;
  }

  .mobile-link-btn {
    margin: 0 0 3em 1em;
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
      <img src={url} alt={breed} onLoad={() => setIsLoaded(true)} />
      <div className="overlay">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn overlay-btn"
        >
          🔗
        </a>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mobile-link-btn"
      >
        Link 🔗
      </a>
    </StyledDog>
  )
}

export default Dogs
