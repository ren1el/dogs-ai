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
    background-color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1em;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      border-radius: ${({ theme }) => theme.borderRadius};
      height: ${props => (props.gridOption === 'masonry' ? '100%;' : '500px;')};
      margin-bottom: 2em;
    }
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

const Dogs = ({ url, breed, gridOption }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <StyledDog gridOption={gridOption}>
      {isLoaded ? null : <div className="placeholder"></div>}
      <img src={url} alt={breed} onLoad={() => setIsLoaded(true)} />
      <div className="overlay">
        <a
          href={url}
          className="btn overlay-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗
        </a>
      </div>
      <a
        href={url}
        className="btn mobile-link-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link 🔗
      </a>
    </StyledDog>
  )
}

export default Dogs
