import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'
import { addDogs, clearDogs } from '../reducers/dogsReducer'
import styled from 'styled-components'
import Select from 'react-select'

const StyledBreedFilter = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
`

const BreedFilter = () => {
  const dispatch = useDispatch()
  const breeds = useSelector(state => state.breeds)

  const onFilterChanged = option => {
    dispatch(clearDogs())
    dispatch(setFilter(option.value))
    dispatch(addDogs(option.value))
  }

  return (
    <StyledBreedFilter>
      <Select
        options={breeds.map(breed => {
          return {
            value: breed,
            label: breed.charAt(0).toUpperCase() + breed.slice(1),
          }
        })}
        onChange={onFilterChanged}
        isSearchable={true}
        placeholder={'Select a Breed...'}
      />
      {/* <select name="breeds" onChange={onFilterChanged}>
        <option value="pug">Select A Breed</option>
        {breeds.map(breed => (
          <option value={breed} key={breed}>
            {breed}
          </option>
        ))}
      </select> */}
    </StyledBreedFilter>
  )
}

export default BreedFilter
