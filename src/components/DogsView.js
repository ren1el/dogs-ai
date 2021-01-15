import React from 'react'
import { useSelector } from 'react-redux'
import Dog from './Dog'

const DogsView = () => {
  const dogs = useSelector(state => state.dogs)

  return (
    <div>
      <h2>DogsView Component</h2>

      <div>
        {dogs.map(dog => (
          <Dog key={dog.url} url={dog.url} breed={dog.breed} />
        ))}
      </div>
    </div>
  )
}

export default DogsView
