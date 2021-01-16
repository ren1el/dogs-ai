import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDogs } from '../reducers/dogsReducer'
import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import Dog from './Dog'

const StyledGrid = styled.div`
  width: 1280px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: 1fr;
`

const DogsView = () => {
  const dispatch = useDispatch()
  const dogs = useSelector(state => state.dogs)
  const filter = useSelector(state => state.filter)

  const fetchMoreDogs = () => {
    dispatch(addDogs(filter))
  }

  let counter = 0
  const dog_groups = [[], [], []]

  dogs.forEach(dog => {
    dog_groups[counter].push(
      <Dog key={dog.url} url={dog.url} breed={dog.breed} />
    )

    if (counter >= 2) {
      counter = 0
    } else {
      counter++
    }
  })

  console.log(dog_groups)

  return (
    <div>
      <h2>DogsView Component</h2>

      <StyledGrid>
        <InfiniteScroll
          dataLength={dogs.length}
          next={fetchMoreDogs}
          hasMore={true}
        >
          <div>{dog_groups[0]}</div>
        </InfiniteScroll>
        <InfiniteScroll
          dataLength={dogs.length}
          next={fetchMoreDogs}
          hasMore={true}
        >
          <div>{dog_groups[1]}</div>
        </InfiniteScroll>
        <InfiniteScroll
          dataLength={dogs.length}
          next={fetchMoreDogs}
          hasMore={true}
        >
          <div>{dog_groups[2]}</div>
        </InfiniteScroll>
      </StyledGrid>
    </div>
  )
}

export default DogsView
