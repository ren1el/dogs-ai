import dogsService from '../services/dogs'

const dogsReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_DOGS':
      return action.data.dogs.map(dog => {
        return { url: dog, breed: action.data.breed }
      })
    case 'ADD_DOGS':
      console.log('adding dogs...')

      //use a set to determine which new dogs from fetch
      //are unique
      const newDogs = action.data.dogs.map(dog => {
        return { url: dog, breed: action.data.breed }
      })
      const unique = new Set()

      return state.concat(newDogs).filter(dog => {
        if (unique.has(dog.url)) return false

        unique.add(dog.url)
        return true
      })
    case 'CLEAR_DOGS':
      console.log('clearing dogs...')
      return []
    default:
      return state
  }
}

export const initializeDogs = () => {
  return async dispatch => {
    const dogs = await dogsService.getInitialDogs()

    dispatch({
      type: 'INIT_DOGS',
      data: { dogs: dogs.message, breed: 'pug' },
    })
  }
}

export const addDogs = breed => {
  return async dispatch => {
    const dogs = await dogsService.getNewDogsByBreed(breed)

    dispatch({
      type: 'ADD_DOGS',
      data: { dogs: dogs.message, breed },
    })
  }
}

export const clearDogs = () => {
  return {
    type: 'CLEAR_DOGS',
  }
}

export default dogsReducer
