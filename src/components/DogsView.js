import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDogs } from '../reducers/dogsReducer'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import pawEmoji from '../images/paw-emoji.png'
import Dog from './Dog'

const StyledDogView = styled.div`
  .grid {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: masonry;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const StyledLoading = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const DogsView = () => {
  const dispatch = useDispatch()
  const dogs = useSelector(state => state.dogs)
  const filter = useSelector(state => state.filter)
  const [ref, inView] = useInView()
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    if (inView) {
      fetchMoreDogs()
    }
    window.addEventListener('resize', () => setWindowSize(window.innerWidth))
  }, [inView]) //eslint-disable-line

  const fetchMoreDogs = () => {
    dispatch(addDogs(filter))
  }

  //separate each dog into groups to create a masonry grid
  let counter = 0
  const dogGroups =
    windowSize < 768 ? [[]] : windowSize >= 992 ? [[], [], []] : [[], []]

  dogs.forEach(dog => {
    dogGroups[counter].push(
      <Dog key={dog.url} url={dog.url} breed={dog.breed} />
    )

    if (counter >= dogGroups.length - 1) {
      counter = 0
    } else {
      counter++
    }
  })

  console.log(dogGroups)

  return (
    <StyledDogView>
      <StyledGrid>
        {dogGroups.map(group => (
          <div>{group}</div>
        ))}
      </StyledGrid>
      <StyledLoading ref={ref}>
        <img src={pawEmoji} alt="paw emoji" />
        <p>Loading...</p>
      </StyledLoading>
    </StyledDogView>
  )
}

export default DogsView
