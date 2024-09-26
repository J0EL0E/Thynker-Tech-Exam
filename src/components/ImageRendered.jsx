import React from 'react'

const ImageRendered = ({source, alt}) => {
  return (
    <img src={source} alt={alt} className='image-rendered' />
  )
}

export default ImageRendered
