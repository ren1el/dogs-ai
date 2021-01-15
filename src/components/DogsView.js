import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDogs } from '../reducers/dogsReducer'
import InfiniteScroll from 'react-infinite-scroll-component'
import Dog from './Dog'

const DogsView = () => {
  const dispatch = useDispatch()
  const dogs = useSelector(state => state.dogs)
  const filter = useSelector(state => state.filter)

  const fetchMoreDogs = () => {
    dispatch(addDogs(filter))
  }

  return (
    <div>
      <h2>DogsView Component</h2>

      <div>
        <InfiniteScroll
          dataLength={dogs.length}
          next={fetchMoreDogs}
          hasMore={true}
        >
          {dogs.map(dog => (
            <Dog key={dog.url} url={dog.url} breed={dog.breed} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default DogsView
