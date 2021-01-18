import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'
import { addDogs, clearDogs } from '../reducers/dogsReducer'
import styled from 'styled-components'
import Select from 'react-select'

const StyledBreedFilter = styled.div`
  margin-bottom: 1em;
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
    </StyledBreedFilter>
  )
}

export default BreedFilter
