import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDogs } from '../reducers/dogsReducer'
import styled from 'styled-components'
import Dog from './Dog'
import Loading from './Loading'

const StyledDogView = styled.section`
  .grid-option {
    margin-bottom: 1em;
    display: none;

    label {
      font-weight: bold;
    }

    input {
      height: 20px;
      width: 20px;
      margin-left: 1.5em;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: flex;
      align-items: center;
    }
  }
`

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const DogsView = () => {
  const dispatch = useDispatch()
  const dogs = useSelector(state => state.dogs)
  const filter = useSelector(state => state.filter)
  const [gridOption, setGridOption] = useState('traditional')
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWindowSize(window.innerWidth))
  }, [])

  const fetchMoreDogs = () => {
    dispatch(addDogs(filter))
  }

  const onGridOptionChanged = event => {
    setGridOption(event.target.value)
  }

  //separate each dog into groups to create a masonry grid
  let counter = 0
  const dogGroups =
    windowSize < 768 ? [[]] : windowSize >= 992 ? [[], [], []] : [[], []]

  dogs.forEach(dog => {
    dogGroups[counter].push(
      <Dog
        key={dog.url}
        url={dog.url}
        breed={dog.breed}
        gridOption={gridOption}
      />
    )

    if (counter >= dogGroups.length - 1) {
      counter = 0
    } else {
      counter++
    }
  })

  return (
    <StyledDogView>
      <div className="grid-option">
        <label>Display Grid:</label>
        <input
          type="radio"
          value="traditional"
          name="grid type"
          onChange={onGridOptionChanged}
          checked={gridOption === 'traditional'}
        />{' '}
        Traditional
        <input
          type="radio"
          value="masonry"
          name="grid type"
          onChange={onGridOptionChanged}
          checked={gridOption === 'masonry'}
        />{' '}
        Masonry
      </div>
      <StyledGrid>
        {dogGroups.map((group, index) => (
          <div key={index}>{group}</div>
        ))}
      </StyledGrid>
      <Loading fetchMoreDogs={fetchMoreDogs} />
    </StyledDogView>
  )
}

export default DogsView
