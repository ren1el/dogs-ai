import { combineReducers, createStore, applyMiddleware } from 'redux'
import breedReducer from './reducers/breedReducer'
import dogsReducer from './reducers/dogsReducer'
import filterReducer from './reducers/filterReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  breeds: breedReducer,
  filter: filterReducer,
  dogs: dogsReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
})

export default store
