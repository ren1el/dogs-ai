import React from 'react'
import styled from 'styled-components'

const StyledDog = styled.div`
  width: 100%;
  position: relative;

  &:hover .overlay {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    margin-bottom: 1.25rem;
    border-radius: ${({ theme }) => theme.borderRadius};
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

  .overlay-btn {
    cursor: pointer;
    margin-left: 0.5em;
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
`

const Dogs = ({ url, breed }) => {
  return (
    <StyledDog>
      <img src={url} alt={breed} />
      <div className="overlay">
        <button className="overlay-btn">🔗</button>
        <button className="overlay-btn">📥</button>
      </div>
    </StyledDog>
  )
}

export default Dogs
