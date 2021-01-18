import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeBreeds } from './reducers/breedReducer'
import { initializeDogs } from './reducers/dogsReducer'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/Theme'
import GlobalStyle from './styles/GlobalStyle'
import Hero from './components/Hero'
import DogsView from './components/DogsView'
import ScrollTopButton from './components/ScrollTopButton'

const App = () => {
  const dispatch = useDispatch()

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
    })
  }

  useEffect(() => {
    dispatch(initializeBreeds())
    dispatch(initializeDogs())
  }, [dispatch])

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Hero />
      <main>
        <DogsView />
        <ScrollTopButton />
      </main>
    </ThemeProvider>
  )
}

export default App
