import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDogs } from '../reducers/dogsReducer'
import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import Dog from './Dog'

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const DogsView = () => {
  const dispatch = useDispatch()
  const dogs = useSelector(state => state.dogs)
  const filter = useSelector(state => state.filter)

  const fetchMoreDogs = () => {
    dispatch(addDogs(filter))
  }

  //separate each dog into one of three groups and retain order
  //so that we can create a grid of three div columns
  let counter = 0
  const dog_groups = [[], [], []]

  dogs.forEach(dog => {
    dog_groups[counter].push(
      <Dog key={dog.url} url={dog.url} breed={dog.breed} />
    )

    if (counter >= dog_groups.length - 1) {
      counter = 0
    } else {
      counter++
    }
  })

  return (
    <div>
      <h2>DogsView Component</h2>

      <StyledGrid>
        <InfiniteScroll
          dataLength={dogs.length}
          next={fetchMoreDogs}
          hasMore={true}
        >
          {dog_groups[0]}
        </InfiniteScroll>

        <InfiniteScroll
          dataLength={dogs.length}
          next={fetchMoreDogs}
          hasMore={true}
        >
          {dog_groups[1]}
        </InfiniteScroll>

        <InfiniteScroll
          dataLength={dogs.length}
          next={fetchMoreDogs}
          hasMore={true}
        >
          {dog_groups[2]}
        </InfiniteScroll>
      </StyledGrid>
    </div>
  )
}

export default DogsView
