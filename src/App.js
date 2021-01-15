import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeBreeds } from './reducers/breedReducer'
import { initializeDogs } from './reducers/dogsReducer'
import BreedFilter from './components/BreedFilter'
import DogsView from './components/DogsView'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBreeds())
    dispatch(initializeDogs())
  }, [dispatch])

  return (
    <div>
      <BreedFilter />
      <DogsView />
    </div>
  )
}

export default App
