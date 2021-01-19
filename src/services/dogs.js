import axios from 'axios'

const getInitialDogs = async () => {
  const response = await axios.get(
    'https://dog.ceo/api/breed/pug/images/random/10'
  )
  return response.data
}

const getRandomDogs = async () => {
  const response = await axios.get(
    'https://dog.ceo/api/breed/pug/images/random/10'
  )
  return response.data
}

const getAllBreeds = async () => {
  const response = await axios.get('https://dog.ceo/api/breeds/list/all')
  return response.data
}

const getNewDogsByBreed = async breed => {
  if (breed === 'all') {
    const response = await axios.get(
      `https://dog.ceo/api/breeds/image/random/10`
    )

    return response.data
  }

  const response = await axios.get(
    `https://dog.ceo/api/breed/${breed}/images/random/10`
  )
  return response.data
}

const functions = {
  getInitialDogs,
  getRandomDogs,
  getAllBreeds,
  getNewDogsByBreed,
}

export default functions
