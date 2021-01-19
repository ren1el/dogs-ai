import dogsService from '../services/dogs'

const breedReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BREEDS':
      return ['all', ...action.data]
    default:
      return state
  }
}

export const initializeBreeds = () => {
  return async dispatch => {
    const breeds = await dogsService.getAllBreeds()

    dispatch({
      type: 'INIT_BREEDS',
      data: Object.keys(breeds.message),
    })
  }
}

export default breedReducer
