const filterReducer = (state = 'pug', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      console.log('setting filter...')
      return action.data
    default:
      return state
  }
}

export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    data: filter,
  }
}

export default filterReducer
