import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'
import { addDogs, clearDogs } from '../reducers/dogsReducer'
import styled from 'styled-components'

const StyledBreedFilter = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
`

const BreedFilter = () => {
  const dispatch = useDispatch()
  const breeds = useSelector(state => state.breeds)
  const filter = useSelector(state => state.filter)

  const onFilterChanged = event => {
    dispatch(clearDogs())
    dispatch(setFilter(event.target.value))
    dispatch(addDogs(event.target.value))
  }

  return (
    <StyledBreedFilter>
      <h2>Filter Component</h2>
      <p>Selected breed: {filter}</p>
      <select name="breeds" onChange={onFilterChanged}>
        <option value="pug">Select A Breed</option>
        {breeds.map(breed => (
          <option value={breed} key={breed}>
            {breed}
          </option>
        ))}
      </select>
    </StyledBreedFilter>
  )
}

export default BreedFilter
