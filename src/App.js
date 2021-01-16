import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeBreeds } from './reducers/breedReducer'
import { initializeDogs } from './reducers/dogsReducer'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/Theme'
import GlobalStyle from './styles/GlobalStyle'
import Hero from './components/Hero'
import BreedFilter from './components/BreedFilter'
import DogsView from './components/DogsView'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBreeds())
    dispatch(initializeDogs())
  }, [dispatch])

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Hero />
      <main>
        <BreedFilter />
        <DogsView />
      </main>
    </ThemeProvider>
  )
}

export default App
