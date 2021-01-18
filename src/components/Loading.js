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
      <button className="btn" onClick={fetchMoreDogs}>
        Load More
      </button>
    </StyledLoading>
  )
}

export default Loading
