import React from 'react'

const Dogs = ({ url, breed }) => {
  return (
    <p>
      breed: {breed} url: <img src={url} alt={breed} />
    </p>
  )
}

export default Dogs
