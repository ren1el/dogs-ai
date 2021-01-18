import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import pawEmoji from '../images/paw-emoji.png'

const StyledLoading = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .paw {
    width: 80px;
    animation-name: wave-animation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    display: inline-block;
    margin-bottom: 1.5em;
  }

  .load-btn {
    text-decoration: none;
    background-color: #ffffff;
    border: none;
    padding: 0.5em 1em;
    border-radius: ${({ theme }) => theme.borderRadius};
    opacity: 0.9;
    transition: opacity 0.1s ease-in-out;
    font-size: 1rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    cursor: pointer;
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
`

const Loading = ({ fetchMoreDogs }) => {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      fetchMoreDogs()
    }
  }, [inView]) //eslint-disable-line

  return (
    <StyledLoading ref={ref}>
      <img src={pawEmoji} className="paw" alt="paw emoji" />
      <button className="load-btn" onClick={fetchMoreDogs}>
        Load More
      </button>
    </StyledLoading>
  )
}

export default Loading
